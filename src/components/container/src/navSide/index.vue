<template>

    <!-- <el-menu class="el-menu-vertical-demo" :router="true" :collapse="collapse">
        <el-menu-item :index="item.path" v-for="(item, index) in menuData">
            <el-icon>
                <component :is="`el-icon-${toLine(item.icon)}`"></component>
            </el-icon>
            <span>{{ item.name }}</span>
        </el-menu-item>
    </el-menu> -->
    <el-scrollbar>
        <m-menu :data="menuData" :collapse="collapse" :router="true" :defaultActive="route.path">
        </m-menu>
    </el-scrollbar>
</template>

<script setup lang='ts'>
import { useRoute } from 'vue-router';
import { MenuItem } from '../../../menu/src/type';
const route = useRoute()
const props = defineProps<{ collapse: boolean }>()
const menuData: MenuItem[] = [{
    icon: 'HomeFilled',
    name: '首页',
    index: '/'
}, {
    icon: 'Check',
    name: '图标选择',
    index: '/chooseIcon'
}, {
    icon: 'Location',
    name: '省市区选择',
    index: '/chooseArea'
}, {
    icon: 'TrendCharts',
    name: '趋势标记',
    index: '/trend'
}, {
    icon: 'Timer',
    name: '时间选择',
    index: '/chooseTime'
},{
    icon: 'Stopwatch',
    name: '日期选择',
    index: '/chooseDate'
},
{
    icon: 'MapLocation',
    name: '导航菜单',
    index: '/menu'
}, {
    icon: 'Bell',
    name: '通知菜单',
    index: '/notification'
}, {
    icon: 'Position',
    name: '城市选择',
    index: '/chooseCity'
}, {
    icon: 'DArrowRight',
    name: '进度条',
    index: '/progress'
},
{
    icon: 'ScaleToOriginal',
    name: '日历',
    index: '/calendar'
}, {
    icon: 'Collection',
    name: '表单',
    index: '/form'
}, {
    icon: 'Document',
    name: '表格',
    index: '/table'
},
]
</script>

<style scoped lang='scss'>

</style>