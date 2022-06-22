<template>
    <div :class="{'m--choose-icon-dialog-body-height':isScroll}">
        <el-dialog v-model="dialogVisible" v-bind="$attrs" >
            <template #default>
                <m-form ref="form" label-width="100px" :options="options" @on-change="onChange"
                    @before-upload="beforeUpload" @on-preview="onPreview" @on-remove="onRemove"
                    @before-remove="beforeRemove" @on-exceed="onExceed" @on-success="onSuccess">
                    <template #uploadArea>
                        <slot name="uploadArea"></slot>

                    </template>
                    <template #uploadTip>
                        <slot name="uploadTip"></slot>

                    </template>

                </m-form>
            </template>
            <template #footer>
                <slot name="footer" :form="form">

                </slot>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang='ts'>
import { FormInstance } from 'element-plus';
import { PropType, ref, watch } from 'vue'
import { FormOptions } from '../../form/src/types/type';
let props = defineProps({
    visible: {
        type: Boolean,
        default: false
    },
    options: {
        type: Array as PropType<FormOptions[]>,
        required: true
    },
    isScroll: {
        type: Boolean,
        default: false
    },
    //处理上传事件
    onChange: {
        type: Function
    },
    beforeUpload: {
        type: Function
    },
    onPreview: {
        type: Function
    },
    onRemove: {
        type: Function
    },
    beforeRemove: {
        type: Function
    },
    onExceed: {
        type: Function
    },
    onSuccess: {
        type: Function
    }
})
let emits = defineEmits(['update:visible'])
//弹出框显示与隐藏
let dialogVisible = ref<boolean>(props.visible)
watch(() => props.visible, val => {
    dialogVisible.value = val
})
watch(() => dialogVisible.value, val => {
    emits("update:visible", val)
})
let form = ref<FormInstance | null>(null)
</script>

<style scoped lang='scss'>
</style>