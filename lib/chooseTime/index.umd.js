(function(e,a){typeof exports=="object"&&typeof module!="undefined"?module.exports=a(require("vue")):typeof define=="function"&&define.amd?define(["vue"],a):(e=typeof globalThis!="undefined"?globalThis:e||self,e.index=a(e.Vue))})(this,function(e){"use strict";const a={style:{display:"flex"}},m=e.defineComponent({props:{startPlaceHolder:{type:String,default:"\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4"},startTimeStart:{type:String,default:"08:00"},startStep:{type:String,default:"00:30"},startTimeEnd:{type:String,default:"24:00"},endPlaceHolder:{type:String,default:"\u8BF7\u9009\u62E9\u7ED3\u675F\u65F6\u95F4"},endTimeStart:{type:String,default:"08:00"},endStep:{type:String,default:"00:30"},endTimeEnd:{type:String,default:"24:00"}},emits:["startChange","endChange"],setup(t,{emit:u}){const l=e.ref(""),d=e.ref(""),r=e.ref(!0);return e.watch(()=>l.value,n=>{n===""?(d.value="",r.value=!0):(r.value=!1,u("startChange",n))}),e.watch(()=>d.value,n=>{n===""||u("endChange",{startTime:l.value,endTime:n})}),(n,i)=>{const o=e.resolveComponent("el-time-select");return e.openBlock(),e.createElementBlock("div",a,[e.createVNode(o,e.mergeProps({style:{"margin-right":"20px"},modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=s=>l.value=s),"max-time":d.value,placeholder:t.startPlaceHolder,start:t.startTimeStart,step:t.startStep,end:t.startTimeEnd},n.$attrs.startOptions),null,16,["modelValue","max-time","placeholder","start","step","end"]),e.createVNode(o,e.mergeProps({modelValue:d.value,"onUpdate:modelValue":i[1]||(i[1]=s=>d.value=s),"min-time":l.value,placeholder:t.endPlaceHolder,start:t.endTimeStart,step:t.endStep,disabled:r.value,end:t.endTimeEnd},n.$attrs.endOptions),null,16,["modelValue","min-time","placeholder","start","step","disabled","end"])])}}});var f={install(t){t.component("se-choose-time",m)}};return f});