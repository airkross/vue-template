import Vue from "vue";
import Vuex from "vuex";
import { todoGet } from '@/backend-endpoints'


Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    async test() {
      try {
        const { data } = await todoGet({id:1})
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }
  },
  modules: {}
});
