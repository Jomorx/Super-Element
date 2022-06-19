<template>
    <!-- <div>
        <m-notification :value="50"></m-notification>
    </div>
    <div>
    <m-notification :value="50" :max="30" ></m-notification>

    </div>
    <div>
    <m-notification :value="50" :max="30" :isDot="true"></m-notification>
    </div>
    <div>
    <m-notification :value="50" :max="30" :isDot="true" icon="ChatRound"></m-notification>
    </div> -->
    <div>
        <m-notification :value="50">
            <template #default>
                <m-list :list="list" :actions="actions"></m-list>
            </template>
        </m-notification>
    </div>
</template>

<script setup lang='ts'>
import {actions,list} from './data'
</script>

<style scoped lang='scss'>
div {
    margin: 10px 0;
}
</style>