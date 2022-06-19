<template>
    <m-choose-date :disabledToday="false" @startChange="startChange" @endChange="endChange" :startOptions="startOptions" :endOptions="endOptions"></m-choose-date>
</template>

<script setup lang='ts'>
interface endDateValue{
    startDate:Date,
    endDate:Date
}
const startChange= (val:Date)=>{
    console.log(val)
}

const endChange= (val:endDateValue)=>{
    console.log(val.startDate,val.endDate)
}
//开始结束配置项
const startOptions={
    
}
const endOptions={}

</script>

<style scoped lang='scss'>

</style>