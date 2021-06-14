<template>
  <v-card class="mx-auto" outlined>
    <v-card-text>
      <div class="d-flex justify-space-between">
        <nuxt-link
          :to="{ name: 'sideline-id', params: { id: comment.slug_post } }"
          style="text-decoration: none; color: inherit;"
        >
          <v-avatar size="48">
            <img alt="user" :src="imageFist(comment.image_posts)" />
          </v-avatar>
          <b class="success--text ml-1">{{ comment.title_posts }}</b>
          <small>{{ dateFormat(comment.created_at) }}</small>
        </nuxt-link>
        <v-badge color="deep-purple accent-4" offset-x="10" offset-y="10" :content="comment.score">
          <v-icon>favorite_border</v-icon>
        </v-badge>
      </div>
      <p class="title mb-1">{{ comment.title }}</p>
      <div class="body-2">{{ comment.description }}</div>คะแนน
      <v-rating dark v-model="comment.score" color="primary" small dense readonly ripple></v-rating>
    </v-card-text>
  </v-card>
</template>

<script>
import moment from "moment";
export default {
  props: ["comment"],
  data() {
    return {
      // image: []
    };
  },
  methods: {
    dateFormat(data) {
      moment.lang("th");
      return moment(data)
        .startOf("day")
        .fromNow();
    },
    imageFist(data) {
      console.log("Card: ", data);
      // if (data.indexOf("|")) {
      //   let res = data.split("|");
      //   return res[0];
      // } else {
      //   return null;
      // }
    }
  }
};
</script>

<style></style>
