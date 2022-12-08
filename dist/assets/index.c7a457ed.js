import{d as c,f as d,r as i,o as p,c as v}from"./index.ffb5fb24.js";const _=c({setup(m){const n=d([{title:"\u8D2D\u7269",start:"2022-06-11 08:00",end:"2022-06-13 12:00",editable:!0},{title:"\u6572\u4EE3\u7801",start:"2022-06-12 10:00",end:"2022-06-12 12:00"}]),u=e=>{n.value.push({start:e.dateStr+" 12:00",end:e.dateStr+" 18:00",title:"\u5B66\u4E60"}),console.log(n.value)},s=e=>{console.log(e)},a=e=>{let l=document.createElement("div"),t=e.timeText.split("-"),o=t[0].replace("\u4E0A\u5348","").replace("\u4E0B\u5348","").replace("\u65F6",""),r=t[1].replace("\u4E0A\u5348","").replace("\u4E0B\u5348","").replace("\u65F6","");return l.innerHTML=`
                    <img src='src/assets/logo.png' style='width:30px;height:30px'/>
                    <div>\u5F00\u59CB\u65F6\u95F4: ${o}</div>
                    <div>\u7ED3\u675F\u65F6\u95F4: ${r}</div>
                    <div>\u6807\u9898: ${e.event._def.title}</div>
                    `,{domNodes:[l]}};return(e,l)=>{const t=i("se-calendar");return p(),v(t,{events:n.value,displayEventEnd:"",eventContent:a,onDateClick:u,onEventClick:s},null,8,["events"])}}});export{_ as default};
