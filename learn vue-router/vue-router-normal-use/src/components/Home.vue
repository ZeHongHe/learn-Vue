<template>
  <div>
    <p>I am home component!</p>

    <router-link to="/home/message" tag="button">message</router-link>
    <router-link to="/home/news" tag="button">news</router-link>

    <router-view></router-view>

    <p>{{message}}</p>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
          message: 'hello Home',
          path: '/home/messages'
        }
      },

    // created: 组件创建时被回调
    created() {
      console.log('home created');
      // document.title = 'home'
    },
    destroyed() {
      console.log('home destroy');
    },
    // activated() {
    //   // console.log('activated');
    //   this.$router.push(this.path);
    // },
    // beforeRouteLeave(to, from, next) {
    //   console.log(this.$router.path);
    //   this.path = this.$router.path;
    //   next()
    // }
    // // mounted: template 挂载到 dom 时被回调
    // mounted() {
    //   console.log('mounted');
    // },
    // // updated: page 页面发生刷新时被回调
    // updated() {
    //   console.log('updated');
    // }
  }
</script>

<style scoped>

</style>
