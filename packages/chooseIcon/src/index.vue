<template>
    <el-button @click="handleClick" type="primary">
        <slot></slot>
    </el-button>
    <div className="m--choose-icon-dialog-body-height">
        <el-dialog :title="title" v-model="dialogVisible">
            <div className="container">
                <div className="item" v-for="(item, index) in Object.keys(ElIcons)" :key="index"
                    @click="clickItem(item)">
                    <div className="text">
                        <component :is="`el-icon-${toLine(item)}`"></component>
                    </div>
                    <div className="icon">{{ item }}</div>
                </div>
            </div>
                <template #footer>
                    <div className="footer" style="padding-top: 10px;"></div>
                </template>
        </el-dialog>
    </div>
</template>

<script setup lang='ts'>

import * as ElIcons from '@element-plus/icons'
import { watch, ref } from 'vue'
import { toLine } from '../../utils/index'
import { useCopy } from '../../hooks/useCopy/index'
let props = defineProps<{
    title: string,
    visible: boolean
}>()
let emits = defineEmits(['update:visible'])
//点击以后取反
let handleClick = () => {
    emits("update:visible", !props.visible)
}
//点击旁边以后把父组件数据去反
watch(() => props.visible, (val) => {
    console.log("我只行了props.visible");
    dialogVisible.value = val
})
//拷贝一份父组件传递过来的数据
let dialogVisible = ref<boolean>(props.visible)

//监听dialogVisible
watch(() => dialogVisible.value, val => {
    console.log("我只行了dialogVisible");
    emits("update:visible", val)
})

let clickItem = (item: string) => {
    let text = `<el-icon-${toLine(item)} />`
    useCopy(text);
    dialogVisible.value = false
}

</script>

<style scoped lang='scss'>
.container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .item {
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        cursor: pointer;
        height: 70px;

        .text {
            font-size: 14px;
        }

        .icon {
            flex: 1;
        }
    }
}

svg {
    width: 2em;
    height: 2em;
}
</style>