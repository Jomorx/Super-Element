<template >
    <div style="display: flex;">
        <div style="width:200px">
            <se-menu :data="data1" defaultActive="2" name="a" index="b" icon="c" children="d" :router="false"> </se-menu>
        </div>
        <div style="width:200px;margin-left: 200px;">
            <m-infinite-menu :data="data2" defaultActive="2" name="a" index="b" icon="c" children="d"
                active-text-color="red"></m-infinite-menu>
        </div>
    </div>
</template>

<script setup lang='ts'>
const data1 = [{
    a: "导航1",
    b: "1",
    c: "Document"
}, {
    a: "导航2",
    b: "2",
    c: "Document"
}, {
    a: "导航3",
    b: "3",
    c: "Document",
    d: [
        {
            a: "导航3-1",
            b: "3-1",
            c: "Document"
        },
        {
            a: "导航3-2",
            b: "3-2",
            c: "Document"
        }
    ]
}]

const data2 = [{
    a: "导航1",
    b: "1",
    c: "Document"
}, {
    a: "导航2",
    b: "2",
    c: "Document"
}, {
    a: "导航3",
    b: "3",
    c: "Document",
    d: [
        {
            a: "导航3-1",
            b: "3-1",
            c: "Document",
            d: [
                {
                    a: "导航3-1-1",
                    b: "3-1-1",
                    c: "Document",
                    d: [
                        {
                            a: "导航3-1-1-1",
                            b: "3-1-1-1",
                            c: "Document",

                        },
                    ]
                },
            ]
        },
    ]
}]
</script>

<style scoped lang='scss'>
</style>