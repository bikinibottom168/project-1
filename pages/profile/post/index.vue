<template>
  <v-container>
    <v-divider class="mb-4"></v-divider>
    <v-row>
      <v-col cols="3" lg="2">
        <v-navigation-drawer permanent>
          <v-list-item>
            <v-list-item-content>
              <v-img :src="getImage($auth.user.user_image)"></v-img>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense nav>
            <v-list-item v-for="item in items" :key="item.title" link>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-col>
      <v-col cols="9" lg="10">
        <v-row>
          <v-col cols="12" class="d-flex justify-space-between">
            <h1>เด็กในสังกัด</h1>
            <v-btn to="/post-sideline/post" color="success">ลงงาน</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="4" lg="3" v-for="(datas, index) in posts.data" :key="index">
            <card-list :post="datas" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

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
      return process.env.BASE_URL_IMAGE + data;
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
