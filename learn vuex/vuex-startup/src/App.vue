<template>
    <div>
        <!-- <p>Hello World!</p> -->
        <p>{{message}}</p>
        <p>{{$store.state.counter}}</p>
        <button @click="$store.state.counter++">+</button>
        <button @click="$store.state.counter--">-</button>
        <vuex-counter></vuex-counter>
    </div>
</template>

<script>
import VuexCounter from './components/VuexCounter.vue'

export default {
  name: 'App',
  data () {
    return {
      message: 'Hello Vuex!'
    }
  },
  components: {
    VuexCounter
  }
}
</script>

<style>

</style>
