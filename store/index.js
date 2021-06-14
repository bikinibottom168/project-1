import Vuex from "vuex";

const createServer = () =>
  new Vuex.Store({
    state: () => ({
      zone: [],
      zonehot: [],
      drawer: false
    }),
    mutations: {
      setZone(state, data) {
        this.state.zone = data;
      },
      setZoneHot(state, data) {
        this.state.zonehot = data;
      },
      setDrawer(state, data) {
        this.state.drawer = data;
      }
    },
    actions: {
      async nuxtServerInit({ commit }, { req }) {
        await this.$axios.$get(`/api/v1/zone`).then(res => {
          const datas = [];
          datas.push(...res.data);
          // for (const key in res.data) {
          //   datas.push({ ...res.data[key] });
          // }
          commit("setZone", datas);
        });

        await this.$axios.$get(`/api/v1/zone/hot`).then(res => {
          const datas = [];
          for (const key in res.data) {
            datas.push({ ...res.data[key] });
          }
          commit("setZoneHot", datas);
        });
      }
    }
  });

export default createServer;
