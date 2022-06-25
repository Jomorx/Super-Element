<template>
    <div class="trend">
        <div class="text" :style="{ color: textColor }">
            <slot v-if="slots.default"></slot>
            <div v-else>
                {{ text }}
            </div>
        </div>
        <div class="icon">
            <!-- 
            <el-icon-arrowup :style="{ color: !reverseColor ? upIconColor : downIconColor }" v-if="type === 'up'">
            </el-icon-arrowup>
            <el-icon-arrowdown :style="{ color: !reverseColor ? downIconColor : upIconColor }" v-else>
            </el-icon-arrowdown>
             -->
            <component :is='`el-icon-${toLine(upIcon)}`' :style="{ color: !reverseColor ? upIconColor : downIconColor }"
                v-if="type === 'up'"></component>
            <component :is='`el-icon-${toLine(downIcon)}`' :style="{ color: !reverseColor ? downIconColor : upIconColor }"
                v-else></component>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { useSlots, onMounted, computed } from 'vue';
import { toLine } from '../../utils'

// 标记当前趋势是上升还是下降
let props = defineProps({
    type: {
        type: String,
        default: "up"
    },
    upIcon: {
        type: String,
        default: 'ArrowUp'
    },
    downIcon: {
        type: String,
        default: 'ArrowDown'
    },
    //趋势显示的文字
    //  1.父组件传递过来的数据
    //  2.插槽
    text: {
        type: String,
        default: '文字'
    },
    reverseColor: {
        type: Boolean,
        default: false
    },
    //上升趋势图标颜色
    upIconColor: {
        type: String,
        default: '#f5222d'
    },
    //
    downIconColor: {
        type: String,
        default: '#52c41a'
    },
    upTextColor: {
        type: String,
        default: 'rgb(0,0,0)'
    },
    //
    downTextColor: {
        type: String,
        default: 'rgb(0,0,0)'
    }
})

let slots = useSlots()

onMounted(() => {
    if (props.reverseColor) {

    }
})
let textColor = computed(() => {
    return props.type === 'up' ? props.upTextColor : props.downTextColor
})
</script>

<style scoped lang='scss'>
.trend {
    display: flex;
    align-items: center;

    .text {
        font-size: 12px;
        margin-right: 4px;
    }

    .icon {
        svg {
            width: 0.8em;
            height: 0.8em;
        }
    }
}
</style>