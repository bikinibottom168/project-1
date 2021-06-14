<template>
  <v-app dark>
    <Sidebar />
    <v-main>
      <nuxt />
    </v-main>

    <v-footer dark padless>
      <v-col class="text-center" cols="12">
        ลงงาน
        <strong>ไซด์ไลน์</strong>กับ Teddek.com
        <br />
        <v-btn nuxt to="/post-sideline/post" color="error">ลงงานกับเราฟรี</v-btn>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import Sidebar from "~/components/Sidebar";
export default {
  components: {
    Sidebar
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  }
};
</script>

<style></style>
