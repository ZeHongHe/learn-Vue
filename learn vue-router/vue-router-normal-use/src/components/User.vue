<template>
  <div>
    <p>hello {{userId}}!</p>
    <p>hey {{$route.params.userId}}!</p>
    <p>I am User component!</p>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      return this.$route.params.userId
    }
  }
}
</script>

<style scoped>

</style>
