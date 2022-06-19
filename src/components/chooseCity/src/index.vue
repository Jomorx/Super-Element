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
                    <el-select v-model="selectValue" filterable placeholder="Select" size="small">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </el-col>
            </el-row>
            <div class="city">
                <!-- <div v-for="(value, key) in cities" class="city-item"> -->
                <div v-for="(item, index) in Object.keys(cities)" class="city-item">
                    {{ item }}
                </div>
            </div>

                <el-scrollbar max-height="300px">
                    <template v-for="(value, key) in cities" :key="key">
                        <el-row>
                            <el-col :span="2">
                                {{key}}:
                            </el-col>
                            <el-col :span="22">
                                <div v-for="(item, index) in value" :key="index">
                                
                                </div>
                            </el-col>
                        </el-row>
                    </template>
                </el-scrollbar>
        </div>
    </el-popover>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import city from '../lib/cities'
let result = ref<string>("请选择")
let visible = ref<boolean>(false)
let radioValue = ref<string>("按城市")
let selectValue = ref<string>("");
let cities = ref(city.cities)
let options = ref([
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
])

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

.city {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 10px;

    &-item {
        padding: 3px 6px;
        margin-right: 8px;
        border: 1px solid #eee;
        margin-bottom: 8px;
    }
}
</style>