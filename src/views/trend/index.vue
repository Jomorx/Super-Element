<template>
    <div>
        <div className="flex">
            <div>
                <m-trend text="营业额"></m-trend>
                <m-trend text="销售额" type="down"></m-trend>
            </div>
            <hr>
            <div>
                <m-trend reverseColor text="营业额"></m-trend>
                <m-trend reverseColor text="销售额" type="down"></m-trend>
            </div>
            <hr>
            <div>
                <m-trend text="营业额" upTextColor="red"  upIconColor="blue"></m-trend>
                <m-trend text="销售额" downTextColor="blue" type="down" downIconColor="blue"></m-trend>
            </div>
            <div>
                <m-trend text="营业额"  reverseColor upIcon="CaretTop"></m-trend>
                <m-trend text="销售额" type="down" reverseColor downIcon="CaretBottom"></m-trend>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'>
.flex {
    display: flex;
    flex-direction: column;

    div {
        display: flex;
        font-size: 20px;
        margin-right: 10px;
    }
}
</style>