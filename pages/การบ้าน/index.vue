<template>
  <v-container>
    <h1>การบ้านไซด์ไลน์</h1>
    <v-row>
      <v-col
        cols="12"
        sm="12"
        md="6"
        lg="4"
        v-for="(comment, index) in comments"
        :key="index"
      >
        <v-card>
          <v-card-title class="d-flex">
            <v-avatar size="48">
              <img alt="user" :src="comment.user_image" />
            </v-avatar>
            <div>
              <p>{{ comment.username }}</p>
              <small>{{ comment.created_at }}</small>
            </div>
          </v-card-title>
          <v-card-text>
            <p class="title">{{ comment.title_comment }}</p>
            <p>
              {{ comment.comment }}
            </p>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <p>โดย: {{ comment.username }}</p>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardComment from "~/components/post/CardComment";
export default {
  data() {
    return {
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
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
