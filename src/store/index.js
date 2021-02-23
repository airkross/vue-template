import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    async test() {
      try {
        const { data } = await axios.get("todos/1");
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }
  },
  modules: {}
});
