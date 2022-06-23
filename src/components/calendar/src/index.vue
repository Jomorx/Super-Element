<template>
    <div id="calendar"></div>
</template>

<script setup lang='ts'>
import '@fullcalendar/core/vdom'
import { Calendar, EventClickArg, EventContentArg, } from '@fullcalendar/core';
import interaction, { DateClickArg } from '@fullcalendar/interaction'
import daygrid from '@fullcalendar/daygrid'
import { onMounted, PropType, ref, watch } from 'vue'
import { EventItem } from './types';

let emits = defineEmits(["dateClick", "eventClick"])

let props = defineProps({
    //语言
    local: {
        type: String,
        default: "zh-cn"
    },
    //师徒模式,
    initalView: {
        type: String,
        default: 'dayGridMonth'
    },
    //按钮文字
    buttonText: {
        type: Object,
        default: () => {
            return {
                today: "今天",
                month: "月",
                week: "周",
                day: "日",
                prevYear: "上一年",
                nextYear: "下一年",
                prev: "上一月",
                next: "下一月"
            }
        }
    },
    //头部工具栏
    headerToolbar: {
        type: Object,
        default: () => {
            return {
                start: 'title',
                center: '',
                end: 'prev today next'
            }
        }
    },
    footerToolbar: {
        type: Object,
        default: () => { }
    },
    //事件源
    events: {
        type: Array as PropType<EventItem[]>,
        default: () => []
    },
    //日历显示结束时间
    displayEventEnd: {
        type: Boolean,
        default: false
    },
    //自定义渲染日历 内容
    eventContent:{
        type:Function
    }
})
let calendar = ref<Calendar>()
const renderCalendar = () => {
    let el = document.getElementById('calendar')
    if (el) {
        calendar.value = new Calendar(el, {
            plugins: [interaction, daygrid],
            locale: props.local,
            initialView: props.initalView,
            buttonText: props.buttonText,
            headerToolbar: props.headerToolbar,
            footerToolbar: props.footerToolbar,
            //渲染日历事件
            eventSources: [{
                events(e, callback) {
                    if (props.events.length) {
                        callback(props.events)
                    } else {
                        callback([])
                    }
                }
            }],
            //点击日历某一天
            dateClick(info: DateClickArg) {
                emits("dateClick", info)
            },
            //点击事件
            eventClick(info: EventClickArg) {
                emits("eventClick", info)
            },
            displayEventEnd: props.displayEventEnd,
            eventContent:props.eventContent
            

        })
        calendar.value.render()
    }
}
onMounted(() => {
    renderCalendar()
})

watch(() => props.events, () => {
    renderCalendar()
}, { deep: true })
</script>

<style scoped lang='scss'>
</style>