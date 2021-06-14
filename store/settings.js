export const state = () => ({
  zone: [],
  zonehot: []
});

export const mutations = () => ({
  setZone(state, data) {
    this.state.zone = data;
  }
});

export const actions = () => ({
  async nuxtServerInit({ commit }, { req }) {
    return await this.$axios.$get(`/api/v1/zone`).then(res => {
      const data = [];
      for (const key in res.data) {
        data.push({ ...res.data[key] });
      }
      commit("setZone", data);
    });
  }
});

export const getters = () => ({});

// export default createStore;
