<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld'
import Here from '@/mixins/Here'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mixins: [Here],
  created() {
    console.log(`created: 2 home.vue`)
  },
  beforeMount() {
    console.log(`beforeMount: 2 home.vue`)
  },
  mounted() {
    console.log(`mounted: 2 home.vue`)
  }
}
</script>
