<template>
  <div id="app">
    <img src="./../assets/logo.png">
    <h1>{{ msg }}</h1>
    <el-button @click.native="startHacking">Let's do it</el-button>
  
    <el-progress type="circle" :percentage="0"></el-progress>
    <el-progress type="circle" :percentage="25"></el-progress>
    <el-progress type="circle" :percentage="100" status="success"></el-progress>
    <el-progress type="circle" :percentage="50" status="exception"></el-progress>
  
    <el-button type="primary" icon="edit"></el-button>
    <el-button type="primary" icon="share"></el-button>
    <el-button type="primary" icon="delete"></el-button>
    <el-button type="primary" icon="search">搜索</el-button>
    <el-button type="primary">上传
      <i class="el-icon-upload el-icon--right"></i>
    </el-button>
    <textarea name="editor1" id="editor1" rows="10" cols="80">
      This is my textarea to be replaced with CKEditor.
    </textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'List !!!!!!!!!!!!!!!!!!'
    }
  },

  methods: {
    startHacking() {
      console.log(this)
      this.$notify({
        title: 'It Works',
        message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
        duration: 6000
      })
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
