<template>
  <div>
    <p>I am profile component!</p>
    <p>What's your name? Is {{$route.query.name}}?</p>
  </div>
</template>

<script>
export default {
  name: "Profile"
}
</script>

<style scoped>

</style>
