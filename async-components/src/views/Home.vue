<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import load from "@/components/load.vue";

export default {
  name: "home",
  components: {
    //HelloWorld,
    HelloWorld: () => ({
      component: import("@/components/HelloWorld.vue"),
      loading: load,
      delay: 200,
      time: 1000
    })
  }
};
</script>
