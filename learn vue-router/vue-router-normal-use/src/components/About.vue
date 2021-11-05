<template>
  <div>
    <p>I am about component!</p>
  </div>
</template>

<script>
export default {
  name: "About",
  created() {
    console.log('about created');
    document.title = 'about'
  },
}
</script>

<style scoped>

</style>
