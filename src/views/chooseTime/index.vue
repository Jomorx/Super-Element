<template>
    <m-choose-time @startChange="startChange" @endChange="endChange" :startOptions="startOptions" :endOptions="endOptions"></m-choose-time>
</template>

<script setup lang='ts'>
interface endValue {
    startTime:string,
    endTime:string
}
const startChange = (val:string)=>{
console.log("startChange",val)
}

const endChange =(val:endValue)=>{
console.log("endChange",val)
}
//开始选项配置
const startOptions={
}
//结束选项配置
const endOptions={
}
</script>

<style scoped lang='scss'>

</style>