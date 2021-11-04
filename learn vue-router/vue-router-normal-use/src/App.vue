<template>
  <div id="app">
    <router-link to="/home" tag="button" replace>home</router-link>
    <router-link to="/about" tag="button" replace>about</router-link>
<!--    传递动态路径的参数 ‘userId’ -->
    <router-link :to="'/user/' + userId" tag="button" replace>user</router-link>
<!--    <router-link> : 最终会被渲染成 <a>-->
<!--    <button @click="homeClick">首页</button>-->
<!--    <button @click="aboutClick">关于</button>-->
    <router-view></router-view>
<!--    <router-view> : link 映射对应的组件，最终渲染的地方-->
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'Wouter',
      sex: 'male'
    }
  },
}
</script>

<style>
  .active {
    color: pink;
}
</style>
