<template>
  <v-container>
    <v-row class="mt-5" justify="center">
      <v-col cols="12" lg="12" align="center">
        <v-avatar color="primary" size="128" class="mb-2">
          <img
            src="https://storage.googleapis.com/flower-public/public/profile-images/5fe441bba43bdc26e701a89d/1615460904613_5fe441bba43bdc26e701a89d_b1aa353b7d52274fc0f4f83e411c033a.jpg"
            alt="John"
          />
        </v-avatar>
        <p class="blue--text caption">เปลี่ยนรูป</p>
        <h1>
          {{ member.displayName }}
          <v-btn outlined rounded small color="">แก้ไขชื่อ</v-btn>
        </h1>
        <v-btn rounded="" color="primary" outlined=""
          >ผู้ติดตาม {{ member.countFollow }}</v-btn
        >
        <v-btn rounded color="primary" outlined=""
          >การบ้าน {{ member.countReview }}</v-btn
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
          <v-col cols="12" lg="12">
            <v-pagination
              v-model="page"
              :length="15"
              :total-visible="7"
            ></v-pagination>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardComment from "~/components/profile/CardComment";
export default {
  components: {
    CardComment
  },
  data() {
    return {
      member: {
        id: 123,
        username: "KingYed",
        displayName: "เยสสดที่ตลาด",
        userImage: "",
        createdAt: "2 ปีที่แล้ว",
        countFollow: 123,
        countReview: 900
      },
      review: [
        {
          comment_id: "15000",
          user_id: "123",
          username: "SuperPay",
          user_display: "YedYed",
          all_like: 15100,
          user_image: "https://www.w3schools.com/howto/img_avatar.png",
          title_comment: "งานดีมีทอน",
          sidelineName: "น้ำพริก",
          sidelineImage: "https://placekitten.com/801/800",
          sidelineID: "11500",
          comment: "น้อง่นารักมากๆ",
          rating: 5,
          created_at: "16 days ago"
        }
      ]
    };
  }
};
</script>

<style></style>
