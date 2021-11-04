<template>
  <div>
    <p>I am home component!</p>

    <router-link to="/home/message" tag="button">message</router-link>
    <router-link to="/home/news" tag="button">news</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>
