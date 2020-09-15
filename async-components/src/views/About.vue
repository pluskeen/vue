<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input type="text" v-model="id">
  </div>
</template>
<script>
export default {
  name: "about",
  props: {
    id: String
  },
  created() {
    console.log("我创建完了 created");
  },
  mounted() {
    console.log("可以获取我的方法啦 mounted");
  }
};
</script>

