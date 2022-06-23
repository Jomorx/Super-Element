<template>
    <se-table border pagination 
    :total="total" 
    paginationAlign="right" 
    :data="tableData" 
    :options="options"
        elementLoadingText="加载中..." elementLoadingBackground="rgba(0,0,0,0.7)" :element-loading-svg="svg"
        element-loading-svg-view-box="-10, -10, 50, 50" @confirm="confirm" @cancel="cancel" editIcon="Bottom"
        v-model:editRowIndex="editRowIndex" 
        isEditRow
        :currentPage="current"
        :pageSize="pageSize"
        @sizeChange="sizeChange"
        @currentChange="currentChange">
        <template #date="{ scope }">
            <el-icon-timer>
            </el-icon-timer>
            {{ scope.row.date }}
        </template>

        <template #name="{ scope }">
            <el-popover effect="light" trigger="hover" placement="top" width="auto">
                <template #default>
                    <div>name: {{ scope.row.name }}</div>
                    <div>address: {{ scope.row.address }}</div>
                </template>
                <template #reference>
                    <el-tag>{{ scope.row.name }}</el-tag>
                </template>
            </el-popover>
        </template>


        <template #action="{ scope }">
            <el-button size="small" type="primary" @click="edit(scope)">编辑</el-button>
            <el-button size="small" type="danger" @click="deleteData(scope)">删除</el-button>
        </template>

        <template #editCell>
            <div style="display: flex;">
                <el-button size="small">确认</el-button>
                <el-button size="small">取消</el-button>
            </div>
        </template>
        <template #editRow>
            <el-button type="primary" size="small">确认</el-button>
            <el-button type="danger" size="small">取消</el-button>
        </template>
    </se-table>
</template>

<script setup lang='ts'>
import { TableOptions } from '../../components/table/src/type';
import { ref, onMounted } from 'vue'
import axios from "axios"
interface TableData {
    date: string,
    name: string,
    address: string
}
let tableData = ref<TableData[]>([])

let current = ref<number>(1)
let pageSize = ref<number>(10)
let total = ref<number>(0)

const getData =  ()=>{
 axios.post('/api/list', {
        current: current.value,
        pageSize: pageSize.value
    }).then(res => {
        tableData.value = res.data.data.rows
        total.value = res.data.data.total
        console.log(res)
    })
}
onMounted(() => {
   getData()
})
// setTimeout(() => {
//     tableData.value = [
//         {
//             date: '2016-05-03',
//             name: 'Tom',
//             address: 'No. 189, Grove St, Los Angeles',
//         },
//         {
//             date: '2016-05-02',
//             name: 'Tom',
//             address: 'No. 189, Grove St, Los Angeles',
//         },
//         {
//             date: '2016-05-04',
//             name: 'Tom',
//             address: 'No. 189, Grove St, Los Angeles',
//         },
//         {
//             date: '2016-05-01',
//             name: 'Tom',
//             address: 'No. 189, Grove St, Los Angeles',
//         },
//     ]
// }, 2000);

let options: TableOptions[] = [
    {
        label: "日期",
        prop: "date",
        align: "center",
        slot: "date",
        editable: true

    },
    {
        label: "姓名",
        prop: "name",
        align: "center",
        slot: "name",

    }, {
        label: "地址",
        prop: "address",
        align: "center",
    }, {
        label: "操作",
        align: "center",
        action: true
    }
]


const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>`

let editRowIndex = ref("")
const edit = (scope: any) => {
    editRowIndex.value = "edit"
    console.log(scope)
}
const deleteData = (scope: any) => {
    console.log(scope)
}
const confirm = (scope: any) => {
    console.log(scope)
}
//点击×
const cancel = (scope: any) => {
    console.log(scope)
}

const sizeChange = (val:number)=>{
    pageSize.value=val
    current.value=1
    getData()
}
const currentChange = (val:number)=>{
    current.value=val
    getData()
}
</script>

<style scoped lang='scss'>
svg {
    width: 1em;
    height: 1em;
}
</style>