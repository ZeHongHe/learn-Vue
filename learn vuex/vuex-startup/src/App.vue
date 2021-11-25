<template>
    <div>
        <p>{{message}}: {{$store.state.counter}}</p>
        <button @click="add">+</button>
        <button @click="sub">-</button><br>
        <vuex-counter></vuex-counter>
    </div>
</template>

<script>
import VuexCounter from './components/VuexCounter.vue'

export default {
  name: 'App',
  methods: {
    add () {
      this.$store.commit('increment')
    },
    sub () {
      this.$store.commit('decrement')
    }
  },
  data () {
    return {
      message: 'App counter'
    }
  },
  components: {
    VuexCounter
  }
}
</script>

<style>

</style>
