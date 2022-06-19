<template>
    <div className="header">
        <el-icon-expand v-if="collapse" style="margin-right: 10px;" @click="toggle"> </el-icon-expand>
        <el-icon-fold v-else @click="toggle" class="icon-fold"></el-icon-fold>
    </div>
</template>

<script setup lang='ts'>
let props = defineProps<{ collapse: boolean }>()
let emits = defineEmits(['update:collapse'])
let toggle = () => {
    emits('update:collapse', !props.collapse)
}
</script>

<style scoped lang='scss'>
.icon-fold{
    cursor: pointer;
}
.header {
    height: 60px;
    padding: 0 20px;
    display: flex;
    align-items: center;
}
svg {
    width: 1em;
    height: 1em;
}
</style>