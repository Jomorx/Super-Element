<template>
<m-choose-area @change="changeArea"></m-choose-area>
</template>

<script setup lang='ts'>
let changeArea=(val:any)=>{
console.log(val);
}

</script>

<style scoped lang='scss'>
</style>