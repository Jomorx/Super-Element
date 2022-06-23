<template>
    <div>
        <se-choose-city @changeCity="changeCity" @changeProvince="changeProvince"/>
    </div>
</template>

<script setup lang='ts'>
import { City } from '../../components/chooseCity/src/types';

const changeCity = (val:City)=>{
console.log('城市改变了',val)
}
const changeProvince = (val:string)=>{
console.log('省份改变了',val)
}
</script>

<style scoped lang='scss'>

</style>