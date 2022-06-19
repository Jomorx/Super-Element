<template>
    <el-progress v-bind="$attrs" :percentage="p">

    </el-progress>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue';
const props = defineProps({
    //进度条初始长度
    percentage: {
        type: Number,
        default: 0
    },
    //是否有动画
    isAnimation: {
        type: Boolean,
        default: false
    },
    //动画执行时间
    time: {
        type: Number,
        default: 1000
    }
})
let p =ref(0)
onMounted(() => {
    if (props.isAnimation) {
        //规定时间完成
        let t = Math.ceil(props.time / props.percentage)
        let timer= setInterval(()=>{
            p.value+=1
            if(p.value>=props.percentage){
                p.value=props.percentage
                clearInterval(timer)
            }
        },t)
    }else{
        p.value=props.percentage
    }
})
</script>

<style scoped lang='scss'>
</style>