<template>
  <v-container class="mt-4">
    <h1>ค้นหา</h1>
    <v-row>
      <v-col cols="6" sm="6" md="4" lg="2" v-for="(datas, index) in posts" :key="index">
        <card-list :post="datas" />
      </v-col>
    </v-row>
    <infinite-loading @infinite="infiniteHandler">
      <div slot="no-results">
        <p>ไม่พบน้องๆ</p>
      </div>
    </infinite-loading>
  </v-container>
</template>

<script>
import CardList from "~/components/Card";
import InfiniteLoading from "vue-infinite-loading";

export default {
  components: {
    CardList,
    InfiniteLoading
  },
  data() {
    return {
      posts: [],
      page: 1
    };
  },
  watch: {
    "$route.query.name": function(name) {
      this.resetSearch();
    },
    "$route.query.zone": function(name) {
      this.resetSearch();
    },
    "$route.query.price": function(name) {
      this.resetSearch();
    },
    "$route.query.sex": function(name) {
      this.resetSearch();
    }
  },
  // async fetch() {
  //   let search = this.$route.query.zone;
  //   await this.$axios
  //     .$get(`/api/v1/search?zone=` + search)
  //     .then(res => {
  //       if (res.data) {
  //         this.posts.push(...res.data.data);
  //       }
  //     })
  //     .catch(err => {});
  // },
  methods: {
    resetSearch() {
      location.reload();
    },
    infiniteHandler($state) {
      let search = this.$route.query.zone;
      let sex = this.$route.query.sex;
      let name = this.$route.query.name;
      let price = this.$route.query.price;
      this.$axios
        .$get(`api/v1/search`, {
          params: {
            zone: search,
            sex: sex,
            name: name,
            price: price,
            page: this.page
          }
        })
        .then(({ data }) => {
          if (data.data.length) {
            this.page += 1;
            this.posts.push(...data.data);
            $state.loaded();
          } else {
            $state.complete();
          }
        });
    }
  }
};
</script>

<style>
.container {
  max-width: 1200px;
}
</style>
