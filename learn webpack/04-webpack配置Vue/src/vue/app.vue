<template>
  <div>
    <span>hello webpack!</span><br>
    <span>{{message}}</span>
    <cpn></cpn>
  </div>
</template>

<script>
  import cpn from './cpn.vue'

  export default {
    name: 'app',
    components: {
      cpn
    },
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