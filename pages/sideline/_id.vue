<template>
  <v-container class="mt-4">
    <v-row justify="center">
      <v-col cols="8" lg="3" md="5">
        <image-gallery :images="getImage"></image-gallery>
      </v-col>
      <v-col cols="12" lg="6" class="pl-4">
        <v-row>
          <v-col cols="12" lg="12" class="d-flex justify-space-between">
            <h1 class="text-subtitle1">{{ sideline.data.title }}</h1>
            <v-btn
              :color="liked == true ? 'error' : 'primary'"
              outlined
              fab
              small
              @click="favoriteSave"
            >
              <v-icon
                :class="liked == true ? 'material-icons-round error--text' : ''"
              >{{ liked == true ? 'favorite' : 'favorite_border' }}</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="12" lg="12" class="mx-0 my-0 py-0">
            <p class="mx-0 my-0 py-0">
              <v-icon color="primary">location_on</v-icon>
              {{ sideline.data.location }}
              <small class="primary--text">(ขอโลเคชั่นได้ในไลน์ค่ะ)</small>
            </p>
          </v-col>
          <v-col cols="12" lg="12">
            <v-alert v-show="sideline.data.verify == 1" dense text type="success">ยืนยันตัวตนแล้ว</v-alert>
            <v-alert dense text color="primary" class="text-button">
              เรทงาน
              <strong>฿ {{ sideline.data.price | formatPrice }} บาท</strong>
            </v-alert>
          </v-col>
          <!-- Detail -->
          <v-col cols="5" lg="6">
            <v-row>
              <v-col cols="12" lg="6" class="py-0">
                <b>เพศ</b>
                {{ sideline.data.sex | sex }}
              </v-col>
              <v-col cols="12" lg="6" class="py-0">
                <b>อายุ</b>
                {{ sideline.data.age }}
              </v-col>
              <v-col cols="12" lg="6" class="py-0">
                <b>อก</b>
                {{ sideline.data.chest }}
              </v-col>
              <v-col cols="12" lg="6" class="py-0">
                <b>เอว</b>
                {{ sideline.data.waist }}
              </v-col>
              <v-col cols="12" lg="6" class="py-0">
                <b>สะโพก</b>
                {{ sideline.data.hip }}
              </v-col>
              <v-col cols="12" lg="6" class="py-0">
                <b>ส่วนสูง</b>
                {{ sideline.data.height }}
              </v-col>
              <v-col cols="12" lg="6" class="py-0">
                <b>น้ำหนัก</b>
                {{ sideline.data.weight }}
              </v-col>
            </v-row>
          </v-col>
          <!-- #### -->
          <!-- Contact -->
          <v-col cols="1" lg="1">
            <v-divider vertical></v-divider>
          </v-col>
          <v-col cols="6" lg="5" align="center">
            <a
              :href="lineUrl(sideline.data.line)"
              target="_blank"
              class="text-decoration-none"
              color="primary"
            >
              <v-img :src="require(`~/assets/line.png`)" max-width="50"></v-img>
              <div id="qrcode" style="margin: 16px"></div>
              {{ sideline.data.line }}
            </a>
          </v-col>
          <!-- #### -->
          <v-col cols="12" lg="12">
            <p>{{ sideline.data.description }}</p>
            <v-divider class="my-2"></v-divider>
          </v-col>
          <v-col cols="12" lg="6">
            <b class="text-captions">บริการ</b>
            <br />
            <v-chip
              v-for="(cando, index) in candos(sideline.data.cando)"
              :key="index"
              color="green"
              class="my-1"
              outlined
              medium
            >
              {{ cando }}
              <v-icon right>check</v-icon>
            </v-chip>
          </v-col>
          <v-col class="d-none d-md-none d-lg-block" lg="1">
            <v-divider vertical></v-divider>
          </v-col>
          <v-col cols="12" lg="5">
            <b class="text-captionsd">ข้อห้าม</b>
            <br />
            <v-chip
              v-for="(undo, index) in candos(sideline.data.undo)"
              :key="index"
              color="error"
              class="my-1"
              outlined
              medium
            >
              {{ undo }}
              <v-icon right>close</v-icon>
            </v-chip>
          </v-col>
          <v-col cols="12">
            <v-divider class="mb-4"></v-divider>
          </v-col>
          <comment
            :comments="sideline.data.get_comment"
            :post_id="sideline.data.id"
            :title_posts="sideline.data.title"
          ></comment>
        </v-row>
      </v-col>
      <v-col cols="12" lg="3" class="pl-4">
        <v-btn
          class="mt-2"
          outlined
          color="error"
          :href="contact()"
          target="_blank"
          block
        >ติดต่อแจ้งปัญหา</v-btn>
      </v-col>
    </v-row>
    <v-bottom-navigation fixed grow>
      <v-btn value="recent">
        <span class="title primary--text">{{ sideline.data.price | formatPrice }}/งาน</span>
      </v-btn>

      <v-btn value="favorites" :href="lineUrl(sideline.data.line)" target="_blank">
        <span class="align-center">
          <v-img :src="require(`~/assets/line.png`)" width="50"></v-img>
          {{ sideline.data.line }}
        </span>
      </v-btn>
    </v-bottom-navigation>

    <v-snackbar v-model="alert.enable" top>
      {{ alert.text }}
      <template v-slot:action="{ attrs }">
        <v-btn :color="alert.color" text v-bind="attrs" @click="alert.enable = !alert.enable">Close</v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import ImageGallery from "~/components/post/ImageGallery";
import Comment from "~/components/post/Comment";

export default {
  data() {
    return {
      images: [],
      index: null,
      alert: {
        text: null,
        enable: false,
        color: null
      },
      sideline: null,
      liked: false
    };
  },
  mounted() {
    this.qrcodeObj = new QRCode("qrcode", {
      text: `https://line.me/ti/p/~${this.sideline.data.line}`,
      width: 120,
      height: 120,
      colorDark: "#000", // green
      colorLight: "#fff",
      correctLevel: QRCode.CorrectLevel.H
    });

    if (this.$auth.loggedIn) {
      this.$axios
        .$get(`/api/v1/member/favorite/sideline/${this.sideline.data.id}`)
        .then(res => {
          this.liked = res.liked;
          console.log(this.liked);
        })
        .catch(err => {});
    }
  },
  methods: {
    candos(data) {
      let res = data.split("|");
      return res;
    },
    lineUrl(data) {
      return `https://line.me/ti/p/~${this.sideline.data.line}`;
    },
    contact() {
      return process.env.CONTACT;
    },
    async favoriteSave() {
      if (!this.$auth.loggedIn) {
        // alert
        this.alert.text = "ยังไม่ได้ล็อคอินค่ะ";
        this.alert.enable = true;
        this.alert.color = "error";
      } else {
        let formData = new FormData();
        formData.append("posts_id", this.sideline.data.id);
        await this.$axios
          .$post(`/api/v1/member/favorite/sideline`, formData)
          .then(res => {
            if (res.liked == false) {
              this.liked = res.liked;
            } else if (res.liked == true) {
              this.liked = res.liked;
            }
          });
      }
    }
  },
  computed: {
    getImage() {
      let imageSplit = this.sideline.data.image.split("|");
      for (const key of imageSplit) {
        let tmp = process.env_BASE_URL_IMAGE + key;
        this.images.push(key);
      }
      return this.images;
    }
  },
  components: {
    ImageGallery,
    Comment
  },
  async asyncData({ $axios, params, error }) {
    return await $axios
      .$get(`/api/v1/member/sideline/${params.id}`)
      .then(sideline => {
        return { sideline };
      })
      .catch(e => {
        console.log(e.response.status);
        error({ statusCode: e.response.status, message: "Post not found" });
      });
  },
  filters: {
    sex(data) {
      if (data == "female") {
        return "หญิง";
      } else if (data == "ladyboy") {
        return "สาวสอง";
      }
    },
    formatPrice(value) {
      return Number(value.toFixed(1)).toLocaleString();
    }
  }
  // validate({ params }) {
  //   return /^\d+$/.test(params.id);
  // }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
.image {
  cursor: pointer;
}
.price-show {
  background-color: #14213d;
  color: white;
  border-radius: 0px;
}
</style>
