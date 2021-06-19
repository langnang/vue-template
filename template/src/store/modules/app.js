export default {
  namespaced: true,
  state: {
    count: 1
  },
  mutations: {
    SET_COUNT(state, payload) {
      state.count = payload;
    }
  },
  actions: {
    getCount(){}
  }
}
