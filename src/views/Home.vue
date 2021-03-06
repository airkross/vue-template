<template>
  <div class="home">
    {{ testGetter }}
    <input type="text" v-model="changeTest1">

    <hr>

    <pre>
      {{ test }}
    </pre>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters, mapState } from "vuex";
export default {
  name: "Home",
  async mounted() {
    this.GET_TEST();
  },
  methods: {
    ...mapActions('test', ['GET_TEST']),
    ...mapMutations('test', ['SET_TEST1']),
  },
  computed: {
    changeTest1: {
      get() {
        return this.test1
      },
      set(newValue) {
        this.SET_TEST1(newValue)
      }
    },
    ...mapGetters('test', ['testGetter']),
    ...mapState('test', ['test', 'test1'])
  },
};
</script>
