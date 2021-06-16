<template>
  <v-card class="mx-auto" outlined>
    <v-card-text>
      <div class="d-flex justify-space-between">
        <nuxt-link
          :to="{ name: 'profile-id', params: { id: comment.get_user.id } }"
          style="text-decoration: none; color: inherit;"
        >
          <v-avatar size="48">
            <img
              alt="user"
              :src="getImageProfile(comment.get_user.user_image)"
            />
          </v-avatar>
          <b class="success--text ml-1">{{ comment.get_user.display_user }}</b>
          <small>{{ dateFormat(comment.created) }}</small>
        </nuxt-link>
        <!-- <v-badge
          color="deep-purple accent-4"
          offset-x="10"
          offset-y="10"
          :content="comment.score"
          v-show="$auth.loggedIn"
        >
          <v-icon>favorite_border</v-icon>
        </v-badge>-->
      </div>
      <p class="title mb-1">{{ comment.title }}</p>
      <div class="body-2">{{ comment.description }}</div>
      <v-row class>
        <v-col
          v-for="(image, i) in getImage"
          :key="i"
          class="d-flex child-flex"
          cols="4"
          lg="3"
          md="3"
        >
          <img class="image" :src="image" :key="i" @click="indexReview = i" />
        </v-col>
        <vue-gallery-slideshow
          :images="images"
          :index="indexReview"
          @close="indexReview = null"
        ></vue-gallery-slideshow> </v-row
      >คะแนน
      <v-rating
        dark
        v-model="comment.score"
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
import moment from "moment";
import VueGallerySlideshow from "vue-gallery-slideshow";

export default {
  props: ["comment"],
  components: {
    VueGallerySlideshow
  },
  created() {
    let tmp = this.comment.image.split("|");
    tmp.forEach(value => {
      this.images.push("https://api.teddek.com/" + value);
    });
  },
  data() {
    return {
      images: [],
      indexReview: null
    };
  },
  methods: {
    dateFormat(data) {
      moment.lang("th");
      return moment(data)
        .startOf("minute")
        .fromNow();
    },
    getImageProfile(data) {
      return "https://api.teddek.com/" + data;
    }
    // getImage(data) {

    //   return this.images;
    // }
  },
  computed: {
    getImage() {
      return this.images;
    }
  }
};
</script>

<style scoped>
.image {
  cursor: pointer;
  border-radius: 4px;
}
</style>
