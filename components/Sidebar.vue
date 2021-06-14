<template>
  <div>
    <!-- Desktop SideBar -->
    <v-app-bar app class="d-none d-sm-block">
      <nuxt-link :to="{ name: 'index' }">
        <v-img class="mx-2" :src="require('@/assets/logo.png')" max-width="150px" contain></v-img>
      </nuxt-link>

      <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            outlined
            v-on="on"
            rounded
            align="left"
            class="white--text"
            style="background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"
          >
            <v-icon>search</v-icon>
            <b class="text-body-1">ค้นหาน้องๆ</b>
          </v-btn>
        </template>
        <v-form>
          <v-card>
            <v-card-title>
              <p>ค้นหาน้องๆไซด์ไลน์</p>
            </v-card-title>
            <v-card-text class="d-flex justify-space-between">
              <v-row>
                <v-col cols="12">
                  <v-form>
                    <p class="black--text ml-5 pl-2 caption">ค้นหาชื่อ</p>
                    <v-text-field outlined label="ค้นหาชื่อไซดไลน์" v-model="search.name" clearable></v-text-field>
                    <v-divider class="mb-4"></v-divider>
                    <p class="ml-5 pl-2 caption black--text">เลือกโซน</p>
                    <div class="px-6">
                      <treeselect
                        v-model="search.zone"
                        :multiple="true"
                        :options="getZone"
                        :disable-branch-nodes="true"
                        class="mt-2 mb-8"
                        placeholder="เลือกโซน"
                      />
                    </div>
                    <p class="black--text ml-5 pl-2 mb-1 mt-5 caption">เพศ</p>
                    <v-btn-toggle
                      class="ml-5"
                      mandatory
                      v-model="search.sex"
                      tile
                      color="deep-purple accent-3"
                      group
                    >
                      <v-btn value="all">ทั้งหมด</v-btn>

                      <v-btn value="female">หญิง</v-btn>

                      <v-btn value="ladyboy">สาวสอง</v-btn>
                    </v-btn-toggle>

                    <p class="black--text ml-5 pl-2 caption">ช่วงราคา</p>
                    <v-range-slider
                      :tick-labels="seasons"
                      :value="search.price"
                      v-model="search.price"
                      min="0"
                      max="2"
                    >
                      <template v-slot:thumb-label="props">
                        {{ season(props.value) }}
                        <!-- <v-icon dark>{{ season(props.value) }}</v-icon> -->
                      </template>
                    </v-range-slider>
                  </v-form>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions class="py-5">
              <v-spacer></v-spacer>
              <v-btn @click="submitSearch" block color="primary" rounded>ค้นหาเลย</v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-dialog>
      <v-spacer></v-spacer>

      <v-btn class="d-none d-md-block" text color="primary">Teddek ใช้ยังไง ?</v-btn>
      <v-btn
        nuxt
        to="/post-sideline/post"
        align="center"
        justify="center"
        text
        color="primary"
      >โพสงานฟรี</v-btn>
      <v-btn nuxt to="/register" v-if="$auth.loggedIn == false" text color="primary">สมัครสมาชิก</v-btn>
      <v-btn nuxt to="/login" v-if="$auth.loggedIn == false" text color="primary">เข้าสู่ระบบ</v-btn>
      <v-btn
        v-if="$auth.loggedIn"
        nuxt
        to="/favorite"
        class="mx-2"
        fab
        outlined
        small
        color="secondary"
      >
        <v-icon class="material-icons-round error--text">favorite</v-icon>
      </v-btn>
      <v-btn
        v-if="$auth.loggedIn"
        n
        nuxt
        :to="`/profile/${$auth.user.id}`"
        class="mx-2"
        fab
        outlined
        small
        color="secondary"
      >
        <v-avatar size="38">
          <img alt="user" :src="$auth.user.user_image" />
        </v-avatar>
      </v-btn>
    </v-app-bar>
    <!-- Mobile SideBar -->
    <v-app-bar app class="d-block d-sm-none">
      <v-btn text small v-on="on" align="left" class="primary--text" @click.stop="drawer = !drawer">
        <v-icon>menu</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <nuxt-link :to="{ name: 'index' }">
        <v-img class="mx-2" :src="require('@/assets/logo.png')" max-width="120px" contain></v-img>
      </nuxt-link>
      <v-spacer></v-spacer>
      <v-dialog max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            fab
            outlined
            small
            v-on="on"
            align="left"
            class="white--text"
            style="background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"
          >
            <v-icon>search</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <p>ค้นหาน้องๆไซด์ไลน์</p>
          </v-card-title>
          <v-card-text class="d-flex justify-space-between">
            <!-- Search -->
          </v-card-text>
          <v-card-actions class="py-5">
            <v-spacer></v-spacer>
            <v-btn block color="primary" rounded @click="dialog = false">ค้นหาเลย</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" temporary>
      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <!-- When Logout -->
          <v-list-item align="center" v-if="$auth.loggedIn == false">
            <v-list-item-title>
              <v-btn text nuxt to="/login">ล็อคอิน</v-btn>
            </v-list-item-title>
            <v-divider vertical></v-divider>
            <v-list-item-title>
              <v-btn text nuxt to="/register">สมัครสมาชิก</v-btn>
            </v-list-item-title>
          </v-list-item>
          <!-- When Loggedin -->
          <v-list-item align="center" v-if="$auth.loggedIn">
            <v-list-item-title>
              <v-btn
                outlined
                color="primary"
                text
                nuxt
                :to="`/profile/${$auth.user.id}`"
              >{{ $auth.user.display_name }}</v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item nuxt :to="`/favorite`">
            <v-list-item-avatar>
              <v-icon color="error" size="28">favorite</v-icon>
            </v-list-item-avatar>
            <v-list-item-title>น้องที่ถูกใจ</v-list-item-title>
          </v-list-item>
          <!-- <v-list-item>
            <v-list-item-avatar>
              <v-icon size="28">search</v-icon>
            </v-list-item-avatar>
            <v-list-item-title>ค้นหา</v-list-item-title>
          </v-list-item>-->
        </v-list-item-group>
      </v-list>
      <v-divider></v-divider>
      <template v-slot:append>
        <v-list nav dense>
          <v-list-item-group active-class="deep-purple--text text--accent-4">
            <v-list-item>
              <v-list-item-avatar>
                <v-icon size="22">help</v-icon>
              </v-list-item-avatar>
              <v-list-item-title>
                <v-btn text nuxt to="/how">Teddek ใช้ยังไง?</v-btn>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-avatar>
                <v-icon size="22">question_answer</v-icon>
              </v-list-item-avatar>
              <v-list-item-title>
                <v-btn text nuxt to="/how">ติดต่อแอดมิน</v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-list-item>
          <v-btn nuxt to="/post-sideline/post" block color="primary" rounded>โพสงานฟรี 30 วัน</v-btn>
        </v-list-item>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
// import the component
import Treeselect from "@riophae/vue-treeselect";
// import the styles
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
export default {
  components: {
    Treeselect
  },
  data() {
    return {
      seasons: ["500", "1,500", "3000+"],
      icons: ["+", "+", "+", "+", "+"],
      dialog: false,
      on: false,
      search: {
        zone: [],
        name: "",
        sex: "",
        price: [0, 2]
      },
      searchText: "",
      sheet: false,
      value: null
      // define options
      // options: [
      //   {
      //     id: "bkk-center",
      //     label: "กรุงเทพ-กลาง",
      //     children: [
      //       {
      //         id: "12",
      //         label: "รัชดา-ห้วยขวาง"
      //       },
      //       {
      //         id: "13",
      //         label: "รัชดา-ห้วยขวาง"
      //       },
      //       {
      //         id: "14",
      //         label: "รัชดา-ห้วยขวาง"
      //       },
      //       {
      //         id: "15",
      //         label: "รัชดา-ห้วยขวาง"
      //       },
      //       {
      //         id: "16",
      //         label: "รัชดา-ห้วยขวาง"
      //       },
      //       {
      //         id: "17",
      //         label: "รัชดา-ห้วยขวาง"
      //       },
      //       {
      //         id: "18",
      //         label: "รัชดา-ห้วยขวาง"
      //       },
      //       {
      //         id: "aa",
      //         label: "รัชดา-ห้วยขวาง"
      //       },
      //       {
      //         id: "aa",
      //         label: "รัชดา-ห้วยขวาง"
      //       },
      //       {
      //         id: "aa",
      //         label: "รัชดา-ห้วยขวาง"
      //       },
      //       {
      //         id: "aa",
      //         label: "รัชดา-ห้วยขวาง"
      //       }
      //     ]
      //   },
      //   {
      //     id: "a",
      //     label: "a",
      //     children: [
      //       {
      //         id: "aa",
      //         label: "aa"
      //       },
      //       {
      //         id: "ab",
      //         label: "ab"
      //       }
      //     ]
      //   },
      //   {
      //     id: "a",
      //     label: "a",
      //     children: [
      //       {
      //         id: "aa",
      //         label: "aa"
      //       },
      //       {
      //         id: "ab",
      //         label: "ab"
      //       }
      //     ]
      //   }
      // ]
    };
  },
  computed: {
    drawer() {
      this.$store.commit("setDrawer", !this.$store.state.drawer);
      return this.$store.state.drawer;
    },
    likesAllFruit() {
      return this.search.zone.length === this.zoneHot.length;
    },
    likesSomeFruit() {
      return this.search.zone.length > 0 && !this.likesAllFruit;
    },
    icon() {
      if (this.likesAllFruit) return "mdi-close-box";
      if (this.likesSomeFruit) return "mdi-minus-box";
      return "mdi-checkbox-blank-outline";
    },
    getZone() {
      return this.$store.state.zone;
    }
  },
  methods: {
    toggle() {
      this.$nextTick(() => {
        if (this.likesAllFruit) {
          this.search.zone = [];
        } else {
          this.search.zone = this.zoneHot.slice();
        }
      });
    },
    submitSearch() {
      // this.on = false;
      this.dialog = false;
      this.$router.push(
        `/search?zone=${this.search.zone}&name=${this.search.name}&sex=${this.search.sex}&price=${this.search.price}`
      );
      this.search.zone = null;
      this.search.name = null;
      this.search.sex = "all";
    },
    season(val) {
      return "";
    }
  }
};
</script>

<style>
.v-input__slot {
  transform: scale(0.9);
}
.vue-treeselect__control {
}
.vue-treeselect__multi-value-item {
  color: #5e4fad;
  background-color: #e3d7ff;
}
.vue-treeselect__value-remove {
  color: #5e4fad;
}
</style>
