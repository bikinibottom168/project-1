<template>
  <v-container>
    <v-divider class="mb-4"></v-divider>
    <v-row>
      <v-col cols="12" lg="12">
        <v-row>
          <v-col cols="12" class="d-flex justify-space-between">
            <h1>น้องๆที่ถูกใจไว้</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="4"
            v-for="(datas, index) in posts.data"
            :key="index"
          >
            <card-list :post="datas" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardList from "~/components/Card";
export default {
  middleware: ["auth"],
  data() {
    return {
      posts: []
    };
  },
  components: {
    CardList
  },
  async fetch() {
    this.posts = await this.$axios.$get("/api/v1/member/favorite/sideline");
  },
  methods: {
    getImage(data) {
      return "https://api.teddek.com/" + data;
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>

<script>
import CardList from "~/components/profile/Card";
export default {
  middleware: ["auth"],
  data() {
    return {
      items: [
        { title: "เด็กในสังกัด", icon: "mdi-view-dashboard" }
        // { title: "สถิติการเข้าดู", icon: "bar_chart" },
        // { title: "ติดต่อแอดมิน", icon: "phone" }
      ],
      right: null,
      posts: []
    };
  },
  components: {
    CardList
  },
  async fetch() {
    this.posts = await this.$axios.$get("/api/v1/member/mypost");
    console.log(this.posts);
  },
  methods: {
    getImage(data) {
      return "https://api.teddek.com/" + data;
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
