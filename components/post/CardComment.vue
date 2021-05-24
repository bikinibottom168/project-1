<template>
  <v-card class="mx-auto" outlined>
    <v-card-text>
      <div class="d-flex justify-space-between">
        <nuxt-link
          :to="{ name: 'profile-id', params: { id: 123 } }"
          style="text-decoration: none; color: inherit;"
        >
          <v-avatar size="48">
            <img alt="user" :src="comment.user_image" />
          </v-avatar>
          <b class="success--text ml-1">{{ comment.username }}</b>
          <small>{{ comment.created_at }}</small>
        </nuxt-link>
        <v-badge
          color="deep-purple accent-4"
          offset-x="10"
          offset-y="10"
          content="10"
        >
          <v-icon>favorite_border</v-icon>
        </v-badge>
      </div>
      <p class="title mb-1">{{ comment.title_comment }}</p>
      <div class="body-2">{{ comment.comment }}</div>
      คะแนน
      <v-rating
        dark
        v-model="comment.rating"
        color="primary"
        small
        dense
        readonly
        ripple
      ></v-rating>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["comment"]
};
</script>

<style></style>
