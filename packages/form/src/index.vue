<template>
    <el-form ref="form" v-if="model" :validate-on-rule-change="false" :model="model" :rules="rules" v-bind="$attrs">
        <template v-for="(item, index) in options" :key="index">
            <!-- 遍历没有children的组件 -->
            <el-form-item v-if="!item.children || !item.children!.length" :prop="item.prop" :label="item.label">
                <component v-if="item.type !== 'upload' && item.type !== 'editor'" v-bind="item.attrs"
                    :is="`el-${item.type}`" v-model="model[item.prop!]" />
                <!-- 上传文件 -->
                <el-upload v-bind="item.uploadAttrs" v-if="item.type === 'upload'" :on-preview="onPreview"
                    :on-remove="onRemove" :on-success="onSuccess" :on-error="onError" :on-progress="onProgress"
                    :on-change="onChange" :before-upload="beforeUpload" :before-remove="beforeRemove"
                    :on-exceed="onExceed">
                    <slot name="uploadArea"></slot>
                    <template #tip>
                        <slot name="uploadTip"></slot>
                    </template>
                </el-upload>

                <div id="editor" v-if="item.type === 'editor'">

                </div>
            </el-form-item>
            <!-- 遍历没有children的组件 -->
            <el-form-item v-if="item.children && item.children!.length" :prop="item.prop" :label="item.label">
                <component v-bind="item.attrs" :placeholder="item.placeholder || ' '" :is="`el-${item.type}`"
                    v-model="model[item.prop!]">
                    <component :is="`el-${child.type}`" v-for="(child, i) in item.children" :key="i"
                        :label="child.label" :value="child.value"></component>
                </component>
            </el-form-item>
        </template>
        <el-form-item>
            <slot name="action" :form="form" :model="model">

            </slot>
        </el-form-item>
    </el-form>
</template>

<script setup lang='ts'>
import { PropType, ref, onMounted, watch, nextTick } from 'vue';
import { FormOptions } from './types/type';
import cloneDeep from 'lodash/cloneDeep'
import { FormInstance } from 'element-plus';
import E from 'wangeditor'
let emits = defineEmits([
    'on-preview',
    'on-remove',
    'on-success',
    'on-error',
    'on-progress',
    'on-change',
    'on-exceed',
    'before-upload',
    'before-remove',
])
let props = defineProps({
    options: {
        type: Array as PropType<FormOptions[]>,
        required: true
    },
    httpRequest: {
        type: Function
    }
})
let model = ref<any>(null)
let rules = ref<any>(null)
let form = ref<FormInstance | null>(null)
let edit = ref()
//初始化表单
const initForm = () => {
    if (props.options && props.options.length) {
        let m: any = {}
        let r: any = {}
        props.options.map((item: FormOptions) => {
            m[item.prop!] = item.value
            r[item.prop!] = item.rules
            if (item.type === 'editor') {
                nextTick(() => {
                    if (document.getElementById('editor')) {
                        const editor = new E("#editor")
                        editor.config.placeholder != item.placeholder
                        editor.create()
                        editor.txt.html(item.value)
                        editor.config.onchange = (newHTML: string) => {
                            model.value[item.prop!] = newHTML
                        }
                        edit.value = editor
                    }

                })
            }
        })
        model.value = cloneDeep(m)
        rules.value = cloneDeep(r)
    }
}
// 重置表单
const resetFields = () => {
    form.value?.resetFields()
    if (props.options && props.options.length) {
        const editorItem = props.options.find(item => item.type === 'editor')
        edit.value.txt.html(editorItem?.value)
    }
}
let validate = () => {
    return form.value!.validate
}
let  getFormData = ()=>{
    return model.value
}
//分发方法
defineExpose({
    resetFields,
    validate,getFormData
})
//监听父组件传递的options,改了以后刷新数据
watch(() => props.options, () => {
    initForm()
}, {
    deep: true
})
onMounted(() => {
    initForm()
})

const onPreview = (file: File) => {
    emits("on-preview", file)
}
const onRemove = (file: File, fileList: FileList) => {
    emits("on-remove", { file, fileList })

}
const onSuccess = (response: any, file: File, fileList: any) => {
    //上传成功给表单项复制
    let uploadItem = props.options.find(item =>
        item.type === 'upload'
    )
    model.value[uploadItem?.prop!] = { response, file, fileList }
    emits("on-success", { response, file, fileList })

}
const onError = (err: any, file: File, fileList: FileList) => {
    emits("on-error", { err, file, fileList })

}
const onProgress = (event: any, file: File, fileList: FileList) => {
    emits("on-progress", { event, file, fileList })

}
const onChange = (file: File) => {
    emits("on-change", file)

}

const beforeUpload = (file: File) => {
    emits("before-upload", file)

}

const beforeRemove = (file: File, fileList: FileList) => {
    emits("before-remove", { file, fileList })

}

const onExceed = (files: File, fileList: FileList) => {
    emits("on-exceed", { files, fileList })

}
</script> 

<style scoped lang='scss'>
</style>