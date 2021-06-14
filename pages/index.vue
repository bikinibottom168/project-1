<template>
  <div>
    <div class="py-4" style="background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
      <v-container>
        <v-row align="center" justify="center" class="py-5">
          <v-col cols="12" lg="12" align="center">
            <p class="text-h5 white--text">
              คัดสรร
              <strong>ไซด์ไลน์</strong>ไว้รอพี่ๆแล้วคะ
            </p>
            <p class="text-h3 white--text">รวมเด็กไซด์ไลน์ไว้มากที่สุด</p>
            <br />
            <v-btn rounded x-large color="primary">
              <v-icon>search</v-icon>ค้นหาน้องๆ
            </v-btn>
            <v-btn
              rounded
              outlined
              x-large
              color="white"
              nuxt
              to="/post-sideline/post"
            >ลงงานฟรี 30 วัน</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container class="mt-4">
      <v-row justify="center">
        <v-col cols="12" sm="12" lg="12">
          <p>โซนยอดฮิต</p>
          <v-btn
            v-for="(zone, n) in getZoneHot"
            :key="n"
            class="my-2 mx-1"
            color="primary"
            depressed
            rounded
            outlined
            nuxt
            :to="{ name: 'search', query: { zone: zone.id, name: '', sex: 'all',price: '0,2' } }"
          >{{ zone.label }}</v-btn>
        </v-col>
        <v-col cols="12" sm="12" lg="12">
          <h1 class="mb-0 pb-0">ไซด์ไลน์</h1>
          <p class="mb-0 pb-0" color="secondary">ไซดไลน์ TOP STAR</p>
        </v-col>
        <v-col cols="6" sm="6" md="4" lg="2" v-for="(datas, index) in postsVip" :key="index">
          <card-list :post="datas" />
        </v-col>
      </v-row>
    </v-container>
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
import CardList from "~/components/Card";
import InfiniteLoading from "vue-infinite-loading";
import { mapMutations } from "vuex";

export default {
  components: {
    CardList,
    InfiniteLoading
  },
  data() {
    return {
      page: 1,
      postsVip: [],
      selectZone: null
    };
  },
  // async fetch() {
  //   let res = await this.$axios.$get(`/api/v1/member/sideline?page=1`);
  //   this.postsVip.push(...res.data.original.vip.data);
  // },
  computed: {
    getZone() {
      return this.$store.state.zone;
    },
    getZoneHot() {
      // console.log(this.$store.state.zonehot);
      return this.$store.state.zonehot;
    }
  },
  methods: {
    infiniteHandler($state) {
      this.$axios
        .$get(`/api/v1/member/sideline`, {
          params: {
            page: this.page
          }
        })
        .then(({ data }) => {
          if (data.original.vip.data.length) {
            this.page += 1;
            this.postsVip.push(...data.original.vip.data);
            console.log(this.postsVip);
            $state.loaded();
          } else {
            $state.complete();
          }
        });
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
