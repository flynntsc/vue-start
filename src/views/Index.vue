<template>
  <div id="app">
    <img src="./../assets/logo.png">
    <h1>{{ msg }}</h1>
    <el-button @click.native="startHacking">Let's do it</el-button>
  
    <el-progress type="circle" :percentage="0"></el-progress>
    <textarea name="editor1" id="editor1" rows="10" cols="80">
      This is my textarea to be replaced with CKEditor.
    </textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Please Use Vue 2.0 Today!'
    }
  },

  methods: {},
  created(){
    this.$api.getTopics().then(data=>console.dir(data))
  },
  mounted() {
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
