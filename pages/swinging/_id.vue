<template>
  <v-container class="mt-4">
    <v-row justify="left">
      <v-col cols="5" lg="3" md="5" order-lg="1" order-sm="1" order="1">
        <image-gallery :images="images"></image-gallery>
      </v-col>
      <v-col cols="12" lg="6" class="pl-4" order-lg="2" order-sm="3" order="3">
        <v-row>
          <v-col cols="12" lg="12" class="d-flex justify-space-between">
            <h1 class="text-subtitle1">น้ำพริก</h1>
            <h1 class="text-subtitle1">น้ำหวาน</h1>
          </v-col>
          <v-col cols="12" lg="12">
            <v-alert dense text type="success">ยืนยันตัวตนแล้ว</v-alert>
            <v-alert dense text color="primary" class="text-button">
              เรทงาน
              <strong>฿ 1,500 บาท</strong>
            </v-alert>
          </v-col>
          <!-- Detail -->
          <v-col cols="6" lg="6">
            <v-row>
              <v-col cols="12" lg="12">
                <b>เพศ</b> หญิง
                <br />
                <b>อายุ</b> 22
                <br />
                <b>สัดส่วน</b> 36/24/35
              </v-col>
            </v-row>
          </v-col>
          <!-- #### -->
          <!-- Contact -->
          <v-col cols="6" lg="6" align="end">
            <v-row>
              <v-col cols="12" lg="12" align="end">
                <b>เพศ</b> หญิง
                <br />
                <b>อายุ</b> 22
                <br />
                <b>สัดส่วน</b> 36/24/35
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" lg="12" align="center">
            <v-img :src="require(`~/assets/line.png`)" max-width="50"></v-img>
            <v-img
              :src="require(`~/assets/test-qr.png`)"
              max-width="100"
            ></v-img>
            <a href class="text-decoration-none" color="primary"
              >@iamtheme.th</a
            >
          </v-col>
          <!-- #### -->
          <v-col cols="12" lg="12">
            <p>
              ชื่อ=ใบบัว อายุ=24 สูง=162 น้ำหนัก=50 นมจริงคัพ A สัดส่วน=
              32-25-36 เวลารับงาน 10.00-24.00 📍บางนา,ศรีนครินทร์ 📱ID
              :@631ixibr 💚💚💚ผิวขาวเหลือง นมจริงแม่ให้มา ไม่มีรอยสัก
              นักศึกษาหารายได้ช่วยครอบครัวตัวจริงชอบเรื่องบนเตียง ตรงปก100%
              (จ่ายหน้างานเท่านั้น) ✅อมสด ✅จูบปาก ✅นวดผ่อนคลาย
              ✅อาบน้ำด้วยกัน B2B ✅ท่า69 ✅เลียน้องสาว ❌ไม่เล่นยา
              ❌ไม่รับงานนอกสถานที่ ❌ฝังมุก 💟เรทราคา💟 รวมค่าห้อง ค่าถุง
              1,500บาท/1น้ำ/60นาที 2,000บาท/2น้ำ/60นาที 2,500บาท/2น้ำ/90นาที
              ❗️ไม่นัดเล่นๆนะคะ
            </p>
            <v-divider class="my-2"></v-divider>
          </v-col>
          <v-col cols="12" lg="6">
            <b class="text-captions">บริการ</b>
            <br />
            <v-chip color="green" class="my-1" outlined medium>
              อมสด
              <v-icon right>check</v-icon>
            </v-chip>
            <v-chip color="green" class="my-1" outlined medium>
              จูบปาก
              <v-icon right>check</v-icon>
            </v-chip>
            <v-chip color="green" class="my-1" outlined medium>
              นวดผ่อนคลาย
              <v-icon right>check</v-icon>
            </v-chip>
            <v-chip color="green" class="my-1" outlined medium>
              อาบน้ำด้วยกัน B2B
              <v-icon right>check</v-icon>
            </v-chip>
            <v-chip color="green" class="my-1" outlined medium>
              ท่า69
              <v-icon right>check</v-icon>
            </v-chip>
            <v-chip color="green" class="my-1" outlined medium>
              เลียน้องสาว
              <v-icon right>check</v-icon>
            </v-chip>
          </v-col>
          <v-col lg="1">
            <v-divider vertical></v-divider>
          </v-col>
          <v-col cols="12" lg="5">
            <b class="text-captionsd">ข้อห้าม</b>
            <br />
            <v-chip color="error" class="my-1" outlined medium>
              เพิ่มไซต์
              <v-icon right>close</v-icon>
            </v-chip>
            <v-chip color="error" class="my-1" outlined medium>
              อมสด
              <v-icon right>close</v-icon>
            </v-chip>
            <v-chip color="error" class="my-1" outlined medium>
              อมสด
              <v-icon right>close</v-icon>
            </v-chip>
            <v-chip color="error" class="my-1" outlined medium>
              อมสด
              <v-icon right>close</v-icon>
            </v-chip>
            <v-chip color="error" class="my-1" outlined medium>
              อมสด
              <v-icon right>close</v-icon>
            </v-chip>
          </v-col>
          <v-col cols="12">
            <v-divider class="mb-4"></v-divider>
          </v-col>
          <comment :comments="comments"></comment>
        </v-row>
      </v-col>
      <v-col cols="5" lg="3" md="5" order-lg="3" order-sm="2" order="2">
        <image-gallery :images="images"></image-gallery>
      </v-col>
    </v-row>
    <v-bottom-navigation fixed grow>
      <v-btn value="recent">
        <span class="title primary--text">1,500/งาน</span>
      </v-btn>

      <v-btn value="favorites">
        <span class="align-center"
          ><v-img :src="require(`~/assets/line.png`)" width="50"></v-img>
          @6edD14</span
        >
      </v-btn>
    </v-bottom-navigation>
  </v-container>
</template>

<script>
import ImageGallery from "~/components/post/ImageGallery";
import Comment from "~/components/post/Comment";

export default {
  name: "sidelineView",
  components: {
    ImageGallery,
    Comment
  },
  data() {
    return {
      images: [
        "https://placekitten.com/801/800",
        "https://placekitten.com/802/800",
        "https://placekitten.com/803/800",
        "https://placekitten.com/804/800",
        "https://placekitten.com/805/800"
      ],
      index: null,
      comments: [
        {
          comment_id: "15000",
          user_id: "123",
          username: "SuperPay",
          user_display: "YedYed",
          all_like: 15100,
          user_image: "https://www.w3schools.com/howto/img_avatar.png",
          title_comment: "งานดีมีทอน",
          comment: "น้อง่นารักมากๆ",
          rating: 5,
          created_at: "16 days ago"
        },
        {
          comment_id: "15000",
          user_id: "123",
          username: "SuperPay",
          user_display: "YedYed",
          all_like: 15100,
          user_image: "https://www.w3schools.com/howto/img_avatar.png",
          title_comment: "งานดีมีทอน",
          comment: "น้อง่นารักมากๆ",
          rating: 5,
          created_at: "16 days ago"
        },
        {
          comment_id: "15000",
          user_id: "123",
          username: "SuperPay",
          user_display: "YedYed",
          all_like: 15100,
          user_image: "https://www.w3schools.com/howto/img_avatar.png",
          title_comment: "งานดีมีทอน",
          comment: "น้อง่นารักมากๆ",
          rating: 5,
          created_at: "16 days ago"
        },
        {
          comment_id: "15000",
          user_id: "123",
          username: "SuperPay",
          user_display: "YedYed",
          all_like: 15100,
          user_image: "https://www.w3schools.com/howto/img_avatar.png",
          title_comment: "งานดีมีทอน",
          comment: "น้อง่นารักมากๆ",
          rating: 0,
          created_at: "16 days ago"
        },
        {
          comment_id: "15000",
          user_id: "123",
          username: "SuperPay",
          user_display: "YedYed",
          all_like: 15100,
          user_image: "https://www.w3schools.com/howto/img_avatar.png",
          title_comment: "งานดีมีทอน",
          comment: "น้อง่นารักมากๆ",
          rating: 1,
          created_at: "16 days ago"
        },
        {
          comment_id: "15000",
          user_id: "123",
          username: "SuperPay",
          user_display: "YedYed",
          all_like: 15100,
          user_image: "https://www.w3schools.com/howto/img_avatar.png",
          title_comment: "งานดีมีทอน",
          comment: "น้อง่นารักมากๆ",
          rating: 2,
          created_at: "16 days ago"
        },
        {
          comment_id: "15000",
          user_id: "123",
          username: "SuperPay",
          user_display: "YedYed",
          all_like: 15100,
          user_image:
            "https://storage.googleapis.com/flower-public/public/default-images/default_profile.png",
          title_comment: "งานดีมีทอน",
          comment: "น้อง่นารักมากๆ",
          rating: 8,
          created_at: "16 days ago"
        },
        {
          comment_id: "15000",
          user_id: "123",
          username: "SuperPay",
          user_display: "YedYed",
          all_like: 15100,
          user_image:
            "https://storage.googleapis.com/flower-public/public/profile-images/5fe441bba43bdc26e701a89d/1615460904613_5fe441bba43bdc26e701a89d_b1aa353b7d52274fc0f4f83e411c033a.jpg",
          title_comment: "งานดีมีทอน",
          comment: "น้อง่นารักมากๆ",
          rating: 2,
          created_at: "16 days ago"
        },
        {
          comment_id: "15000",
          user_id: "123",
          username: "SuperPay",
          user_display: "YedYed",
          all_like: 15100,
          user_image:
            "https://storage.googleapis.com/flower-public/public/profile-images/5f9a37084eb3389377b4ac4f/1610162455911_5f9a37084eb3389377b4ac4f_SmartSelect_20210109-102030_Gallery",
          title_comment: "งานดีมีทอน",
          comment: "น้อง่นารักมากๆ",
          rating: 1,
          created_at: "16 days ago"
        },
        {
          comment_id: "15000",
          user_id: "123",
          username: "SuperPay",
          user_display: "YedYed",
          all_like: 15100,
          user_image: "https://www.w3schools.com/howto/img_avatar.png",
          title_comment: "งานดีมีทอน",
          comment: "น้อง่นารักมากๆ",
          rating: 5,
          created_at: "16 days ago"
        }
      ]
    };
  },
  validate({ params }) {
    return /^\d+$/.test(params.id);
  }
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
