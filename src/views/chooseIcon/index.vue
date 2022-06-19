<template>
    <div>
        <m-choose-icon title="选择图标" v-model:visible="visible">
            选择图标
        </m-choose-icon>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
let visible = ref<boolean>(false)

</script>

<style scoped lang='scss'>
</style>