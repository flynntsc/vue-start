<template>
  <div id="index">
    <h1>{{msg}}</h1>
    <el-table :data="tableData">
      <el-table-column label="标题" prop="name"></el-table-column>
      <el-table-column label="年龄" prop="year"></el-table-column>
      <el-table-column label="国家" prop="country"></el-table-column>
    </el-table>
    <el-select v-model="selectVal" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
    <el-date-picker type="date" placeholder="选择日期" v-model="dateVal" style="width: 100%;"></el-date-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Please Use Vue 2.0 Today!',
      tableData: [
        {
          name: 'name001',
          year: 22,
          country: 'China',
        },
        {
          name: 'name002',
          year: 25,
          country: 'USA',
        },
        {
          name: 'name003',
          year: 8,
          country: 'Canada',
        },
      ],
      selectVal: '',
      dateVal: '',
    }
  },

  methods: {},
  created() {
    this.$api.getTopics().then(data => console.dir(data))
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
