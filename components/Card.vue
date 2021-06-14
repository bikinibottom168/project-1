<template>
  <v-card
    class="mx-auto"
    max-width="100%"
    height="100%"
    elevation="2"
    nuxt
    :to="{ name: 'sideline-id', params: { id: post.post_slug } }"
  >
    <v-img class="white--text align-end" height="200px" :src="getImage">
      <v-card-title>
        <v-row align="center" justify="end">
          <v-btn small color="primary" class="text-body-1"
            >฿ {{ post.price | formatPrice }}</v-btn
          >
        </v-row>
      </v-card-title>
    </v-img>
    <!-- <v-card-subtitle class="pb-0 mr-2">
      <v-row align="center" justify="end" class="text-left">รัชดา 17</v-row>
    </v-card-subtitle>-->
    <v-card-text class="d-block text--primary">
      <p class="text-body-1 pb-0 mb-0 text-truncate">{{ post.title }}</p>
      <b class="text-caption pb-0 mb-0" color="text--success">
        {{ post.sex | sex }}
      </b>
      <p class="text-caption pb-0 mb-0" color="text--success">
        {{ post.location }}
      </p>
      <!-- <v-chip small color="success" text>
        <v-avatar left class="green darken-4">28</v-avatar>คนกำลังดู
      </v-chip> -->
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["post"],
  computed: {
    getImage() {
      let res = this.post.image.split("|");
      return process.env.BASE_URL_IMAGE + res[0];
    }
  },
  filters: {
    sex(data) {
      if (data == "female") {
        return "หญิง";
      } else if (data == "ladyboy") {
        return "สาวสอง";
      }
    },
    formatPrice(value) {
      return Number(value.toFixed(1)).toLocaleString();
    }
  }
};
</script>

<style scoped></style>
