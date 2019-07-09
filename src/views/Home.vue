<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <el-button type="primary" round @click="login">登录</el-button>
    <el-button type="warning" round @click="logout">登出</el-button>
    <div class="primaryColor ellipsis" style="width:100px;">
      手动if就爱偶的金佛我阿吉豆我煎熬地方就哦is的金佛按键都是覅挤哦
      阿斯偶就佛埃及是佛家使点劲我熬时间大佛氨基酸的佛加斯动静
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  methods: {
    login() {
      const res = this.$api.login({
        name: 'admin',
        password: 'Aa123456',
      })
      console.log(res)
    },
    logout() {
      const res = this.$api.logout()
      console.log(res)
    },
  },
}
</script>

<style lang="less">
@import './../assets/styles/functions.less';

.primaryColor {
  color: @primaryColor;
}
</style>
