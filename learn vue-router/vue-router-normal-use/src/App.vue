<template>
  <div id="app">
    <p>Single Page Application</p>
      <div class="box">
      <router-link to="/home" tag="button" replace>home</router-link>
      <router-link to="/about" tag="button" replace>about</router-link>
  <!--    传递动态路径的参数 ‘userId’ -->
      <router-link :to="'/user/' + userId" tag="button" replace>user</router-link>
  <!--    URL: "scheme://useinfo@host:port/path?query#fragment"-->
      <router-link :to="{ path: '/profile', query: { name: 'Wouter', sex: 'male', age: 20} }" tag="button" replace>profile</router-link>

      <router-view></router-view>
      </div>
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
  methods: { }
}
</script>

<style>
  .active {
    color: pink;
  }
  .box {
    border: 5px solid pink;
  }
</style>
