<template>
    <el-popover :visible="visible" placement="bottom-start" :width="430" trigger="click">
        <template #reference>
            <div class="result" @click="visible = !visible">
                <div>{{ result }}</div>
                <div>
                    <el-icon-arrowdown :class="{ 'rotate': visible }"></el-icon-arrowdown>
                </div>
            </div>
        </template>
        <div class="container">
            <el-row>
                <el-col :span="8">
                    <el-radio-group v-model="radioValue" size="small">
                        <el-radio-button label="按城市"></el-radio-button>
                        <el-radio-button label="按省份"></el-radio-button>

                    </el-radio-group>
                </el-col>
                <el-col :offset="4" :span="12">
                    <el-select v-model="selectValue" filterable placeholder="请搜索城市" size="small" @change="changeOption"  
                        :filter-method="filterMethod">
                        <el-option v-for="(item,index) in options" :key="item.code"  
                         :label="item.name" :value="item.code" />
                    </el-select>
                </el-col>
            </el-row>
            <template v-if="radioValue === '按城市'">
                <div class="city">
                    <!-- <div v-for="(value, key) in cities" class="city-item"> -->
                    <!-- 字母区域 -->
                    <div v-for="(item, index) in Object.keys(cities)" @click="clickChat(item)" class="city-item">
                        {{ item }}
                    </div>
                </div>

                <el-scrollbar max-height="300px">
                    <template v-for="(value, key) in cities" :key="key">
                        <el-row style="margin-bottom:10px" :id="key">
                            <el-col :span="2">
                                {{ key }}:
                            </el-col>
                            <el-col :span="22" class="city-name">
                                <div @click="clickItem(item)" class="city-name-item" v-for="(item, index) in value"
                                    :key="item.code">
                                    {{ item.name }}
                                </div>
                            </el-col>
                        </el-row>
                    </template>
                </el-scrollbar>
            </template>
            <template v-else>
                <div class="province">
                    <div class="province-item" @click="clickChat(item)" v-for="(item, index) in Object.keys(provinces)"
                        :key="index">
                        {{ item }}
                    </div>
                </div>
                <el-scrollbar max-height="300px">
                    <template v-for="(item, index) in Object.values(provinces)" :key="index">
                        <template v-for="(item1, index1) in item" :key="index1">
                            <el-row style="margin-bottom:10px" :id="item1.id">
                                <el-col :span="3">
                                    {{ item1.name }}:
                                </el-col>
                                <el-col :span="21" class="province-name">
                                    <div @click="clickProvince(item2)" class="province-name-item"
                                        v-for="(item2, index2) in item1.cities" :key="index2">
                                        {{ item2 }}
                                    </div>
                                </el-col>
                            </el-row>
                        </template>
                    </template>
                </el-scrollbar>
            </template>
        </div>
    </el-popover>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue';
import city from '../lib/cities'
import province from '../lib/provinces'

import { City, Province } from './types'

const emits = defineEmits(['changeCity', "changeProvince"])
//最终选出结果
let result = ref<string>("请选择")
//控制弹出显示
let visible = ref<boolean>(false)
//单选框的值 按城市或者按省份
let radioValue = ref<string>("按城市")
//下拉框的值
let selectValue = ref<string>("");
//城市数据
let cities = ref(city.cities)

let provinces = ref(province)
//下拉框显示城市数据
let options = ref<City[]>([])

onMounted(() => {
    const values = Object.values(cities.value).flat(2)
    options.value = values
})
//自定义搜索数据
const filterMethod = (val: string) => {
    val=val.toLowerCase()
        const values = Object.values(cities.value).flat(2)
    if (val === '') {
        options.value = values
    }else{
        if(radioValue.value==='按城市'){
            //中文和拼音过滤
            options.value=values.filter(item=>{
                return (item.name.includes(val)||item.spell.toLowerCase().includes(val))
            })
            
        }else{
            //中文过滤
            options.value=values.filter(item=>{
                return item.name.includes(val)
            })
        }
    }
}
const changeOption = (val:string)=>{
    const values = Object.values(cities.value).flat(2)
    const city =values.find((item)=>
        item.code===val
    )!
    if(radioValue.value==='按城市'){
    emits("changeCity", city)

    }else{
    emits("changeProvince", city.name)

    }
}
//点击城市
const clickItem = (item: City) => {
    result.value = item.name
    visible.value = false
    emits("changeCity", item)
}
//点击字母
const clickChat = (item: string) => {
    const el = document.getElementById(item)
    el?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    })
}
//点击省份
const clickProvince = (item: string) => {
    result.value = item
    visible.value = false
    emits("changeProvince", item)
}
</script>

<style scoped lang='scss'>
.result {
    display: flex;
    align-items: center;
    width: fit-content;
    cursor: pointer;
}

.rotate {
    transform: rotate(180deg);
}

svg {
    width: 1em;
    height: 1em;
    position: relative;
    top: 2px;
    margin-left: 4px;
    transition: all 0.25s linear;
}

.container {
    padding: 6px;
}

.city,
.province {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 10px;
    margin-bottom: 10px;

    &-item {
        padding: 3px 6px;
        margin-right: 8px;
        border: 1px solid #eee;
        margin-bottom: 8px;
        cursor: pointer;
    }
}

.city-name,
.province-name {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    &-item,
    .province-item {
        margin-right: 6px;
        margin-bottom: 6px;
        cursor: pointer;
    }
}
</style>