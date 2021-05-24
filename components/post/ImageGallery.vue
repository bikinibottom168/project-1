<template>
  <v-row>
    <v-col
      v-for="(image, i) in images"
      :key="i"
      class="d-flex child-flex py-1 px-1"
      :cols="firstImg(i)"
    >
      <img class="image" :src="image" :key="i" @click="index = i" />
      <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>
    </v-col>
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
