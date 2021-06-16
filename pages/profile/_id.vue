<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col
        cols="4"
        align="center"
        justify="center"
        v-if="$fetchState.pending == true"
      >
        <v-img :src="require('~/assets/loading.gif')"></v-img>
      </v-col>
    </v-row>
    <v-row class="mt-5" justify="center" v-if="$fetchState.pending == false">
      <v-col cols="12" lg="12" align="center">
        <v-avatar color="primary" size="128" class="mb-2">
          <img
            v-show="profile.member.user_image != null"
            :src="previewImage != null ? previewImage : getProfileImage"
          />
          <v-icon
            v-show="profile.member.user_image == null"
            color="white"
            size="48"
            >face</v-icon
          >
        </v-avatar>
        <br />
        <v-btn text color="success" @click="updateImage" v-if="statusChange"
          >บันทึก</v-btn
        >
        <v-btn text color="error" @click="clearImage" v-if="statusChange"
          >ยกเลิก</v-btn
        >
        <v-btn
          text
          block
          class="blue--text caption"
          @click="$refs.changeImage.click()"
          v-if="$auth.loggedIn && $auth.user.id == $route.params.id"
          >เปลี่ยนรูป</v-btn
        >
        <input
          type="file"
          @change="changeImage"
          ref="changeImage"
          v-show="false"
        />
        <h1>
          <v-row
            v-show="editEnable"
            justify="center"
            v-if="$auth.loggedIn && $auth.user.id == $route.params.id"
          >
            <v-col cols="10" lg="2" md="4" class="d-inline">
              <v-text-field
                rounded
                solo
                v-show="editEnable"
                v-model="profile.member.display_name"
                counter="25"
                maxlength="25"
              ></v-text-field>
            </v-col>
            <v-col cols="2" lg="1" md="2">
              <v-btn
                outlined
                rounded
                small
                color="success"
                v-show="editEnable"
                @click="changeName"
                >บันทึกแก้ไข</v-btn
              >
            </v-col>
          </v-row>
          <b v-show="!editEnable">{{ names }}</b>
          <v-btn
            v-if="$auth.loggedIn && $auth.user.id == $route.params.id"
            outlined
            rounded
            small
            color
            v-show="!editEnable"
            @click="editEnable = !editEnable"
            >แก้ไขชื่อ</v-btn
          >
        </h1>
        <v-btn rounded color="primary" outlined
          >ผู้ติดตาม {{ profile.member.follow_count }}</v-btn
        >
        <v-btn rounded color="primary" outlined
          >การบ้าน {{ profile.member.review_count }}</v-btn
        >
      </v-col>
      <v-col cols="12" lg="4">
        <p class="title">การบ้าน</p>
        <v-row>
          <v-col
            cols="12"
            lg="12"
            v-for="(comment, index) in review"
            :key="index"
          >
            <card-comment :comment="comment"></card-comment>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
    <v-snackbar v-model="alert.enable" top="true">
      {{ alert.text }}
      <template v-slot:action="{ attrs }">
        <v-btn
          :color="alert.color"
          text
          v-bind="attrs"
          @click="alert.enable = !alert.enable"
          >Close</v-btn
        >
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import CardComment from "~/components/profile/CardComment";
import InfiniteLoading from "vue-infinite-loading";
export default {
  components: {
    CardComment,
    InfiniteLoading
  },
  data() {
    return {
      editEnable: false,
      display_name: "",
      statusChange: false,
      previewImage: null,
      changeImageRes: null,
      alert: {
        text: "",
        color: "",
        enable: false
      },
      profile: null,
      review: [],
      page: 1
    };
  },
  async fetch() {
    const profile = await this.$axios.$get(
      `/api/v1/profile/${this.$route.params.id}`
    );
    this.profile = profile;
  },
  methods: {
    infiniteHandler($state) {
      this.$axios
        .$get(`/api/v1/member/review/${this.$route.params.id}`, {
          params: {
            page: this.page
          }
        })
        .then(({ data }) => {
          if (data.data.length) {
            this.page += 1;
            this.review.push(...data.data);
            $state.loaded();
            console.log(this.review);
          } else {
            $state.complete();
          }
        });
    },
    async updateImage() {
      let formData = new FormData();
      formData.append("_method", "put");
      formData.append("image", this.changeImageRes);
      const post = this.$axios
        .$post(`/api/v1/change/image`, formData)
        .then(res => {
          if (res.status == "ok") {
            this.$auth.fetchUser();
            this.clearImage();
            this.alert.text = "เปลี่ยนรูปสำเร็จ";
            this.alert.color = "success";
            this.alert.enable = true;
          }
        })
        .catch(err => {
          this.clearImage();
          this.alert.text = "ผิดพลาด";
          this.alert.color = "error";
          this.alert.enable = true;
        });
    },
    clearImage() {
      this.previewImage = null;
      this.changeImageRes = null;
      this.statusChange = false;
    },
    changeImage(e) {
      this.statusChange = true;
      const file = e.target.files[0];
      this.previewImage = URL.createObjectURL(file);
      this.changeImageRes = file;
      // return this.$refs.current.click();
    },
    async changeName() {
      if (this.profile.member.display_name.length > 25) {
        this.alert.text = "ชื่อยาวไป";
        this.alert.color = "error";
        this.alert.enable = true;
      } else if (this.profile.member.display_name.length < 6) {
        this.alert.text = "ชื่อสั้นไป";
        this.alert.color = "error";
        this.alert.enable = true;
      } else {
        const data = {
          name: this.profile.member.display_name,
          _method: "put"
        };
        const res = await this.$axios
          .$post("/api/v1/change/name", data)
          .then(res => {
            if (res.status == "ok") {
              this.editEnable = !this.editEnable;
              this.alert.text = "เปลี่ยนชื่อสำเร็จ";
              this.alert.color = "success";
              this.alert.enable = true;
              this.$fetch();
            }
          })
          .catch(err => {
            this.alert.text = "ผิดพลาด";
            this.alert.color = "error";
            this.alert.enable = true;
          });
      }
      // const res = await axios.get("http");
    }
  },
  computed: {
    names() {
      this.display_name = this.profile.member.display_name;
      return this.display_name;
    },
    getProfileImage() {
      return "https://api.teddek.com/" + this.profile.member.user_image;
    }
  }
};
</script>
<style></style>
