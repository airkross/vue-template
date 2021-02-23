<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapActions } from "vuex";
export default {
  name: "Home",
  async mounted() {
    try {
      const { data } = await this.axios.get("todos/1");
      this.test();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  },
  methods: {
    ...mapActions(["test"])
  },
  components: {
    HelloWorld
  }
};
</script>
