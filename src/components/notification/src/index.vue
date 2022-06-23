<template>
    <el-popover popper-class="notification" placement="bottom"  :width="300" trigger="click">
    <slot name="default"></slot>
        <template #reference>
            <el-badge style="cursor:pointer" :value="value" :max="max" :is-dot="isDot">
                <component :is="`el-icon-${toLine(icon)}`" ></component>
            </el-badge>
        </template>

    </el-popover>
</template>

<script setup lang='ts'>
import { toLine } from '../../../utils'

let props = defineProps({
    //显示图标
    icon: {
        type: String,
        default: 'Bell'
    },
    //通知数量
    value: {
        type: [String, Number],
        default: ''
    },
    //最大值
    max: {
        type: Number
    },
    //是否显示小圆点
    isDot: {
        type: Boolean,
        default: false
    },
})
</script>

<style scoped lang='scss'>
svg{
    width: 2em;
    height: 2em;
}
</style>