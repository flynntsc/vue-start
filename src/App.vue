<template>
    <div id="app">
        <el-button @click="$router.push('/')">Index</el-button>
        <el-button @click="$router.push('/list')">List</el-button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>
