<template>
    <div style="display: flex;">
        <div style="margin-right: 20px;">
            <el-date-picker v-model="startDate" type="date" :placeholder="startPlaceholder"
                :disabled-date="startDisabledDate" v-bind="$attrs.startOptions"/>
        </div>
        <div>
            <el-date-picker v-model="endDate" type="date" :placeholder="endPlaceholder" :disabled="endDateDisabled" 
            :disabled-date="endDisabledDate"
             v-bind="$attrs.endOptions"/>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref,watch } from 'vue'

let props = defineProps({
    startPlaceholder: {
        type: String,
        default: "请选择开始日期"
    },
    endPlaceholder: {
        type: String,
        default: "请选择结束日期"
    },
    disabledToday: {
        type: Boolean,
        default: true
    }
})
//开始日期
let startDate = ref<Date | null>()
//结束日期
let endDate = ref<Date | null>()
//禁用结束如日期
let endDateDisabled = ref<Boolean>(true);
let startDisabledDate = (time: Date) => {
    if (props.disabledToday) {
        return time.getTime() < Date.now() - 1000 * 60 * 60 * 24
    }
}
let endDisabledDate = (time: Date) => {
    if (startDate.value) {
        return time.getTime() < startDate.value.getTime() 
    }
}
let emits = defineEmits(['startChange','endChange'])
//监听开始事件
watch(()=>startDate.value,(val)=>{
    if(val){
        emits("startChange",val)
        endDateDisabled.value=false
    }else{
        endDate.value=null
        endDateDisabled.value=true
    }
})
//监听结束事件
watch(()=>endDate.value,(val)=>{
    if(val){
        emits("endChange",{startDate:startDate.value,endDate:val})
    }else{

    }
})
</script>

<style scoped lang='scss'>
</style>