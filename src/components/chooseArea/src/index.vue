<template>
    <div>
        <el-select clearable placeholder="请选择省份" v-model="province">
            <el-option v-for="item in areas" :key="item.code" :value="item.code" :label="item.name"></el-option>
        </el-select>
        <el-select clearable style="margin:0 10px" :disabled="!province" placeholder="请选择城市" v-model="city">
            <el-option v-for="item in selectCity" :key="item.code" :value="item.code" :label="item.name"></el-option>
        </el-select>
        <el-select clearable placeholder="请选择区域" :disabled="!province || !city" v-model="area">
            <el-option v-for="item in selectArea" :key="item.code" :value="item.code" :label="item.name"></el-option>
        </el-select>
    </div>
</template>

<script setup lang='ts'>
import { ref, watch } from "vue"
import allAreas from '../lib/pca-code.json'

export interface AreaItem {
    name: string,
    code: string,
    children?: AreaItem[]
}
export interface Data {
    name: string,
    code: string
}
let emits = defineEmits(['change'])
let province = ref<string>('')
let city = ref<string>('')
let area = ref<string>('')
let areas = ref(allAreas)
// let selectCity = computed(()=>{
//     if(!province.value) return [];
//     else{
//         let cities = areas.value.find(item =>item.code===province.value)!.children
//         return cities
//     }
// })
let selectCity = ref<AreaItem[]>([])
watch(() => province.value, val => {
    if (val) {
        let cities = areas.value.find(item => item.code === province.value)!.children!
        selectCity.value = cities
    }
    city.value = ''
    area.value = ''
})
// let selectArea = computed(()=>{
//     if(!city.value) return [];
//     else{
//         let area = selectCity.value.find(item =>item.code===city.value)!.children
//         return area
//     }
// })
let selectArea = ref<AreaItem[]>([])
watch(() => city.value, val => {
    if (val) {
        let data = selectCity.value.find(item => item.code === city.value)!.children!
        selectArea.value = data
    }
    area.value = ''
})

watch(() => area.value, val => {
    if (val) {
        let provinceData: Data = {
            code: province.value,
            name: province.value && allAreas.find(item => item.code === province.value)!.name
        }
        let cityData: Data = {
            code: city.value,
            name: city.value && selectCity.value.find(item => item.code === city.value)!.name
        }
        let areaData: Data = {
            code: val,
            name: val && selectArea.value.find(item => item.code === area.value)!.name
        }
        // console.log(provinceData,cityData,areaData);
        emits('change', { province: provinceData, city: cityData, area: areaData })
    }

})
</script>

<style scoped lang='scss'>
</style>