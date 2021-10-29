<template>
  <div>
    <span>hello webpack!</span><br>
    <span>{{message}}</span>
  </div>
</template>

<script>
  // import cpn from './cpn.vue'
  export default {
    name: 'app',
    data() {
      return {
        message: 'hello vue!',
      }
    },
  }
</script>

<style scoped>
.title {
  color: cornflowerblue;
}
</style>