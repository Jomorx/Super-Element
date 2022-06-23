<template>
    <se-calendar
    :events="events"
    displayEventEnd
    :eventContent="eventContent"
    @dateClick = "dateClick"
    @eventClick="eventClick"
    ></se-calendar>
</template>

<script setup lang='ts'>
import { EventClickArg, EventContentArg } from '@fullcalendar/common';
import { DateClickArg } from '@fullcalendar/interaction';
import { EventItem } from '../../components/calendar/src/types';
import {ref} from 'vue'
const events =ref< EventItem[]>( [
    {
        title: '购物',
        start: "2022-06-11 08:00",
        end:'2022-06-13 12:00',
        editable:true
    },
        {
        title: '敲代码',
        start: "2022-06-12 10:00",
        end:'2022-06-12 12:00',
    }
])
const dateClick =(info:DateClickArg)=>{
    events.value.push({
        start:info.dateStr+' 12:00',
        end:info.dateStr+" 18:00",
        title:'学习'    
    })
    console.log(events.value)
}

const eventClick =(info:EventClickArg)=>{
    console.log(info)
}

const eventContent =(arg: EventContentArg)=> {
                let el = document.createElement('div')
                let timeTextArr = arg.timeText.split('-')
                let start = timeTextArr[0]
                    .replace('上午', '')
                    .replace('下午', '')
                    .replace('时', '')
                let end = timeTextArr[1]
                    .replace('上午', '')
                    .replace('下午', '')
                    .replace('时', '')
                    el.innerHTML=`
                    <img src='src/assets/logo.png' style='width:30px;height:30px'/>
                    <div>开始时间: ${start}</div>
                    <div>结束时间: ${end}</div>
                    <div>标题: ${arg.event._def.title}</div>
                    `
                return {
                    domNodes:[el]
                }
                    }
</script>

<style scoped lang='scss'>
</style>