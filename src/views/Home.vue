<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="home-text">
      <div class="flyn">我是测试颜色的文字！</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld'
import Here from '@/mixins/Here'

export default {
  name: 'home',
  components: {
    HelloWorld,
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
  },
}
</script>

<style lang="less">
@import '../styles/common.less';
.home-text {
  color: @primaryColor;
  .flyn {
    .flyn();
  }
}
</style>
