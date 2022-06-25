<template>
    <div style="display: flex;">
        <el-time-select style="margin-right: 20px;" v-model="startTime" :max-time="endTime"
            :placeholder="startPlaceHolder" :start="startTimeStart" :step="startStep" :end="startTimeEnd"
            v-bind="$attrs.startOptions" />

        <el-time-select v-model="endTime" :min-time="startTime" :placeholder="endPlaceHolder" :start="endTimeStart"
            :step="endStep" :disabled="endTimeDisabled" :end="endTimeEnd" v-bind="$attrs.endOptions" />
    </div>
</template>

<script setup lang='ts'>
import { ref, watch } from 'vue'

const props = defineProps({
    startPlaceHolder: {
        type: String,
        default: "请选择开始时间"
    },
    startTimeStart: {
        type: String,
        default: "08:00"
    },
    startStep: {
        type: String,
        default: "00:30"
    },
    startTimeEnd: {
        type: String,
        default: "24:00"
    },
    endPlaceHolder: {
        type: String,
        default: "请选择结束时间"
    },
    endTimeStart: {
        type: String,
        default: "08:00"
    },
    endStep: {
        type: String,
        default: "00:30"
    },
    endTimeEnd: {
        type: String,
        default: "24:00"
    }

})
const startTime = ref<string>('')
const endTime = ref<string>('')
const endTimeDisabled = ref<boolean>(true)
let emits = defineEmits(['startChange', 'endChange'])
//监听开始时间变化
watch(() => startTime.value, val => {
    if (val === '') {
        endTime.value = ''
        endTimeDisabled.value = true
    } else {
        endTimeDisabled.value = false
        emits("startChange", val)
    }
})
watch(() => endTime.value, val => {
    if (val === '') { } else {
        emits("endChange", {
            startTime: startTime.value,
            endTime: val
        })
    }
})
</script>

<style scoped lang='scss'>
</style>