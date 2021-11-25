<template>
  <div>
      <p>{{message}}: {{$store.state.counter}}</p>
      <button @click="$store.state.counter++">+</button>
      <button @click="$store.state.counter--">-</button>
  </div>
</template>

<script>
export default {
  name: 'VuexCounter',
  data () {
    return {
      message: 'component counter'
    }
  }
}
</script>

<style scoped>

</style>
