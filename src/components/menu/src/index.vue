<template>
    <div>
        <el-menu class="m-menu-demo" :default-active="defaultActive" :router="router" v-bind="$attrs">
            <template v-for="(item, i) in data" :key="i">
                <!-- 一级菜单 -->
                <el-menu-item v-if="!item[children] || item[children].length === 0" :index="item[index]">
                    <component v-if="item[icon]" :is='`el-icon-${toLine(item[icon])}`'></component>
                    <span>{{ item[name] }}</span>
                </el-menu-item>

                <!-- 二级菜单 -->
                <el-sub-menu v-if="item[children] && item[children].length" :index="item[index]">
                    <template #title>
                        <component v-if="item[icon]" :is='`el-icon-${toLine(item[icon])}`'></component>
                        <span>{{ item[name] }}</span>
                    </template>
                    <el-menu-item v-for="(item1, index1) in item[children]" :key="index1" :index="item1[index]">
                        <component v-if="item1[icon]" :is='`el-icon-${toLine(item1[icon])}`'></component>
                        <span>{{ item1[name] }}</span>
                    </el-menu-item>
                </el-sub-menu>
            </template>
        </el-menu>
    </div>
</template>

<script setup lang='ts'>
import { PropType } from 'vue';
import { toLine } from '../../../utils'
let props = defineProps({
    //菜单信息
    data: {
        type: Array as PropType<any []>,
        required: true
    },
    //默认选中
    defaultActive: {
        type: String,
        default: ""
    },
    //是否是路由模式
    router: {
        type: Boolean,
        default: false
    },
    name: {
        type: String,
        default: "name"
    },
    index: {
        type: String,
        default: "index"
    },
    icon: {
        type: String,
        default: "icon"
    },
    children: {
        type: String,
        default: "children"
    }
})
</script>

<style scoped lang='scss'>
svg {
    margin-right: 4px;
    width: 1em;
    height: 1em;
}
</style>