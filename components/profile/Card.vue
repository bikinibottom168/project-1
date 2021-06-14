<template>
  <v-card class="mx-auto" max-width="100%" height="100%" elevation="2">
    <v-img class="white--text align-end" height="200px" :src="getImage">
      <v-card-title>
        <v-row align="center" justify="end">
          <v-btn small color="primary" class="text-body-1">฿ {{ post.price | priceFormat }}</v-btn>
        </v-row>
      </v-card-title>
    </v-img>
    <v-card-text class="d-block text--primary">
      <p class="text-body-1 pb-0 mb-0 text-truncate">{{ post.title }}</p>
      <p class="text-caption" color="text--success">{{ post.sex | sexFormat }}</p>
      <div v-if="post.enable == 1">
        <p class="my-1">วันหมดอายุ</p>
        <v-chip small :color="checkExpireColor(post.vip)">{{ checkExpireTextTest }}</v-chip>
        <v-divider class="my-2" />
        <p class="my-1">วันหมดอายุ</p>
        <v-chip small :color="checkExpireColor(post.expire)">{{ checkExpireText(post.expire) }}</v-chip>
      </div>
      <div v-if="post.enable == 0">
        <v-chip small color="warning">หยุดแสดงโพส VIP</v-chip>
        <v-divider class="my-2" />
        <p class="my-1">หยุดแสดงโพส</p>
        <v-chip small color="warning">หยุดแสดงโพส</v-chip>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn nuxt block :to="{ name: 'profile-post-edit-id', params: { id: post.id } }">แก้ไขข้อมูล</v-btn>
    </v-card-actions>
    <v-card-actions>
      <v-btn nuxt block :to="{ name: 'profile-post-edit-id', params: { id: post.id } }">เติมเวลา</v-btn>
    </v-card-actions>
    <v-card-actions>
      <v-switch v-model="post.enable" :label="enable ? 'เปิดโพส' : 'ปิดโพส'"></v-switch>
    </v-card-actions>
  </v-card>
</template>

<script>
import moment from "moment";
export default {
  props: ["post"],
  data() {
    return {
      enable: true
    };
  },
  computed: {
    getImage() {
      let res = this.post.image.split("|");
      return process.env.BASE_URL_IMAGE + res[0];
    },
    getEnable() {
      return this.post.enable == 1 ? true : false;
    },
    checkExpireTextTest() {
      let data = this.post.expire;
      return data > moment().unix() ? this.dateFormat(data) : "หมดอายุ";
    }
  },
  watch: {
    "post.enable": function(news, old) {
      this.updateEnable(news);
    }
  },
  methods: {
    async updateEnable(data) {
      console.log("USE ENABLE");
      let formData = new FormData();
      formData.append("id", this.post.id);
      formData.append("enable", data);
      formData.append("_method", "put");
      await this.$axios
        .$post("/api/v1/member/update/post/enable", formData)
        .then(res => {
          if (res.status == "start") {
            this.post.expire = res.expire;
            this.post.vip = res.vip;
          }
        })
        .catch(err => {
          alert("error");
        });
    },
    dateFormat(data) {
      return moment.unix(data).format("DD/MM/YYYY HH:mm:ss");
    },
    checkExpireText(data) {
      return data > moment().unix() ? this.dateFormat(data) : "หมดอายุ";
    },
    checkExpireColor(data) {
      return data > moment().unix() ? "success" : "error";
    }
  },
  filters: {
    sexFormat(data) {
      if (data == "female") {
        return "หญิง";
      } else if (data == "ladyboy") {
        return "สาวสอง";
      }
    },
    priceFormat(value) {
      return Number(value.toFixed(1)).toLocaleString();
    }
  }
};
</script>

<style scoped></style>
