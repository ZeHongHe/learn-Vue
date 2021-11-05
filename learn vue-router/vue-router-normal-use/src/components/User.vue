<template>
  <div>
    <p>I am User component!</p>
    <p>Hello {{userId}}!</p>
    <p>Have you eaten yet, {{$route.params.userId}}?</p>
<!--    <button @click="btnClick1">console: $router</button>-->
<!--    <button @click="btnClick2">console: $route</button>-->
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      return this.$route.params.userId
    }
  },
  created() {
    console.log('User created');
    document.title = 'user'
  },
  methods: {
    // btnClick1() {
    //   // 所有的组件都继承自 Vue 类的原型
    //   console.log(this.$router);
    // },
    // btnClick2() {
    //   console.log(this.$route);
    // }
  }
}
</script>

<style scoped>

</style>
