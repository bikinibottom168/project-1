<template>
  <v-row>
    <v-col
      v-for="(image, i) in images"
      :key="i"
      class="d-flex child-flex py-1 px-1"
      :cols="firstImg(i)"
    >
      <img class="image" :src="image" :key="i" @click="index = i" />
    </v-col>
    <vue-gallery-slideshow
      :images="images"
      :index="index"
      @close="index = null"
    ></vue-gallery-slideshow>
  </v-row>
</template>

<script>
import VueGallerySlideshow from "vue-gallery-slideshow";
export default {
  name: "imageGallery",
  data() {
    return {
      index: null
    };
  },
  created() {
    for (let i = 0; i < this.images.length; i++) {
      this.images[i] = "https://api.teddek.com/" + this.images[i];
      console.log(this.images[i]);
    }
  },
  components: {
    VueGallerySlideshow
  },
  props: ["images"],
  methods: {
    firstImg: function(i) {
      if (i == 0) {
        return 12;
      } else {
        return 6;
      }
    }
  }
};
</script>

<style scoped>
.image {
  cursor: pointer;
}
</style>
