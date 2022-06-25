<template>
    <el-container>
        <el-aside width="auto">
            <nav-side :collapse="isCollapse"> </nav-side>
        </el-aside>
        <el-container>
            <el-header>
                <nav-header v-model:collapse="isCollapse"></nav-header>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang='ts'>
import NavSide from './navSide/index.vue'
import NavHeader from './navHeader/index.vue'
import { ref } from 'vue'
let isCollapse = ref(false)

</script>

<style scoped lang='scss'>
.el-header{
    padding: 0;
    border-bottom:solid 1px #eee;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>