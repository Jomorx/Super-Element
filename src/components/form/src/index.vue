<template>
    <el-form v-if="model" :validate-on-rule-change="false" :model="model" :rules="rules" v-bind="$attrs">
        <template v-for="(item, index) in options" :key="index">
    <!-- 遍历没有children的组件 -->
            <el-form-item v-if="!item.children || !item.children!.length" :prop="item.prop" :label="item.label">
                <component v-if="item.type!=='upload'" v-bind="item.attrs" :is="`el-${item.type}`" v-model="model[item.prop!]"></component>
            </el-form-item>
    <!-- 遍历没有children的组件 -->
            <el-form-item v-if="item.children && item.children!.length" :prop="item.prop" :label="item.label">
                <component v-bind="item.attrs" :placeholder="item.placeholder||' '" :is="`el-${item.type}`" v-model="model[item.prop!]">
                    <component :is="`el-${child.type}`" v-for="(child , i) in item.children" :key="i"
                        :label="child.label" :value="child.value"></component>
                </component>
            </el-form-item>
        </template>

    </el-form>
</template>

<script setup lang='ts'>
import { PropType, ref, onMounted, watch } from 'vue';
import { FormOptions } from './types/type';
import cloneDeep from 'lodash/cloneDeep'
let props = defineProps({
    options: {
        type: Array as PropType<FormOptions[]>,
        required: true
    }
})
let model = ref<any>(null)
let rules = ref<any>(null)
//初始化表单
const initForm = () => {
    if (props.options && props.options.length) {
        let m: any = {}
        let r: any = {}
        props.options.map((item: FormOptions) => {
            m[item.prop!] = item.value
            r[item.prop!] = item.rules
        })
        model.value = cloneDeep(m)
        rules.value = cloneDeep(r)
    }
}
//监听父组件传递的options,改了以后刷新数据
watch(() => props.options, () => {
    initForm()
}, {
    deep: true
})
onMounted(() => {
    initForm()
})
</script> 

<style scoped lang='scss'>
</style>