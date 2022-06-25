<template>
    <el-table
    v-bind="$attrs" :data="tableData" v-loading="isLoading" :element-loading-text="elementLoadingText"
        :element-loading-spinner="elementLoadingSpinner" :element-loading-background="elementLoadingBackground"
        :element-loading-svg="elementLoadingSvg" :element-loading-svg-view-box="elementLoadingSvgViewBox"
        @rowClick="rowClick">

        <template v-for="(item, index) in tableOptions" :key="index">
            <el-table-column :label="item.label" :prop="item.prop" :align="item.align" :width="item.width">

                <template #default="scope">
                    <!-- 可编辑行 -->
                    <template v-if="scope.row.isEditRow">
                        <el-input size="small" v-model="scope.row[item.prop]"></el-input>
                    </template>
                    <!-- 不可编辑行 -->
                    <template v-else>
                        <!-- 编辑一个 -->
                        <template v-if="(scope.$index + scope.column.id === currentEdit)">
                            <div style="display:flex">
                                <el-input size="small" v-model="scope.row[item.prop]"></el-input>
                                <div @click.stop="clickEditCell">
                                    <!-- 自定义编辑一个 -->
                                    <slot name="editCell" :scope="scope" v-if="$slots.editCell"></slot>
                                    <!-- 不是自定义 -->
                                    <div class="icons" v-else>
                                        <el-icon-check @click="confirm(scope)" class="check">
                                        </el-icon-check>
                                        <el-icon-close @click="cancel(scope)" class="close">
                                        </el-icon-close>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <!-- 没有编辑一个 -->
                        <template v-else>
                            <slot v-if="item.slot" :name="item.slot" :scope="scope"></slot>
                            <span v-else>{{ scope.row[item.prop] }}</span>
                            <component :is='`el-icon-${toLine(editIcon)}`' @click.stop="clickEdit(scope)" class="edit"
                                v-if="item.editable"></component>
                            <!-- <el-icon-edit @click="clickEdit(scope)" class="edit" v-if="item.editable"></el-icon-edit> -->
                        </template>
                    </template>
                </template>


            </el-table-column>
        </template>
        <el-table-column :label="actionOptions?.label" :align="actionOptions?.align" :width="actionOptions?.width">
            <template #default="scope">
                <slot name="editRow" v-if="scope.row.rowEdit" :scope="scope">
                </slot>
                <slot name="action" :scope="scope" v-else>
                </slot>
            </template>
        </el-table-column>
    </el-table>
    <div class="pagination" v-if="pagination" :style="{justifyContent:paginationAlignJustify}">
        <el-pagination 
        v-model:currentPage="currentPage"
         v-model:page-size="pageSize"
        :page-sizes="pageSizes"
        layout="total, sizes, prev, pager, next, jumper" 
        :total="total" 
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange" />
    </div>
</template>

<script setup lang='ts'>
import { toLine } from '../../../utils';
import { ref, PropType, computed, onMounted, watch } from 'vue';
import { TableOptions } from './type';
import cloneDeep from 'lodash/cloneDeep'
let props = defineProps({
    options: {
        type: Array as PropType<TableOptions[]>,
        required: true
    },
    data: {
        type: Array as PropType<any[]>,
        required: true
    },
    //加载文案
    elementLoadingText: {
        type: String,
    },
    //加载图标名
    elementLoadingSpinner: {
        type: String,
    },
    //加载背景颜色
    elementLoadingBackground: {
        type: String,
    },
    //加载svg
    elementLoadingSvg: {
        type: String,
    },
    //加载svg配置
    elementLoadingSvgViewBox: {
        type: String,
    },
    //可编辑单元格图标
    editIcon: {
        type: String,
        default: "edit"
    },
    //是否可以编辑行
    isEditRow: {
        type: Boolean,
        default: false
    },
    //编辑行按钮标识
    editRowIndex: {
        type: String,
        default: ""
    },
    pagination:{
        type:Boolean,
        default:false
    },
    //当前第几页
    currentPage:{
        type:Number,
        default:1
    },
    //每页数据选项
    pageSizes:{
        type:Array as PropType<number[]>,
        default:[10,20,30,40]
    },
    //当前一页多少条数据
    pageSize:{
        type:Number,
        default:10
    },
    //数据总数
    total:{
        type:Number,
    },
    //分页排列方式
    paginationAlign:{
        type:String as PropType<'left'|'center'|'right'>,
        default:'left'
    }
})

let emits = defineEmits(['confirm', 'cancel', 'update:editRowIndex','sizeChange','currentChange'])
//过滤操作选项
let tableOptions = computed(() => props.options.filter((item) => !item.action))
let actionOptions = computed(() => props.options.find((item) => item.action))
let isLoading = computed(() => !props.data || !props.data.length)
//拷贝一份表格数据
let tableData = ref(cloneDeep(props.data))
//拷贝按钮标识
let cloneEditRowIndex = ref<string>(props.editRowIndex)

watch(() => props.data, (val) => {
    tableData.value = val
    tableData.value.map(item => {
        //代表是否可编辑
        item.rowEdit = false
    })
}, { deep: true })
//监听父组件的标识
watch(() => props.editRowIndex, (val) => {
    if (val) {
        cloneEditRowIndex.value = val
    }
})
onMounted(() => {
    tableData.value.map(item => {
        //代表是否可编辑
        item.rowEdit = false
    })
})
//分页条数改变
const handleSizeChange = (val:number)=>{
    emits('sizeChange',val)
}

//分页页数改变
const handleCurrentChange = (val:number)=>{
    emits('currentChange',val)
}

let paginationAlignJustify = computed(()=>{
   if( props.paginationAlign==='left') return 'flex-start'
   else if (props.paginationAlign==='center') return 'center'
    else return 'flex-end'
})
//点击编辑一行
const rowClick = (row: any, column: any) => {
    //判断点击的是否是操作项内容
    if (column.label === actionOptions.value?.label) {
        if (props.isEditRow && cloneEditRowIndex.value === props.editRowIndex) {
            row.isEditRow = !row.isEditRow
            //重置掐他数据
            tableData.value.map(item => {
                if (item != row) {
                    item.isEditRow = false
                }
                if (!row.isEditRow) {
                    emits('update:editRowIndex', '')
                }
            })
        }
    }
}

let currentEdit = ref<string>("")

const clickEdit = (scope: any) => {
    //唯一标识
    currentEdit.value = scope.$index + scope.column.id
}

const clickEditCell = () => {
    currentEdit.value = ""
}
//点击勾
const confirm = (scope: any) => {
    emits('confirm', scope)
}
//点击×
const cancel = (scope: any) => {
    emits('cancel', scope)

}
</script>

<style scoped lang='scss'>
.edit {
    width: 1em;
    height: 1em;
    position: relative;
    top: 2px;
    left: 4px;
    cursor: pointer;
}

.icons {
    display: flex;
    position: relative;
    top: 6px;

    svg {
        cursor: pointer;
        width: 1em;
        height: 1em;
        margin-left: 8px;
    }

    .check {
        color: red;
    }

    .close {
        color: green;
    }
}

.pagination{
    display: flex;
    align-items: center;
    margin-top: 16px;
}
</style>