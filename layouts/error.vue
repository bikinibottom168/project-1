<template>
  <v-app dark>
    <v-container>
      <v-row justify="center" class="mt-12">
        <v-col cols="3" lg="3">
          <v-img :src="require('~/assets/loading.gif')"></v-img>
        </v-col>
        <v-col cols="12" align="center">
          <h1 v-if="error.statusCode === 404">ไม่พบหน้าข้อมูลน้องๆค่ะ</h1>
          <h1 v-if="error.statusCode === 403">โพสน้องหมดอายุค่ะ</h1>
          <!-- <h1 v-else>{{ error.statusCode }}</h1> -->
          <NuxtLink class="header" to="/">ดูน้องคนอื่นๆ</NuxtLink>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred"
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title
    };
  }
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
