import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons'
import { toLine } from './utils'
import mUI from './components'
const app = createApp(App)
//注册全局组件

for(let i in Icons){
    app.component(`icon-${toLine(i)}`,(Icons as any)[i])
    app.component(`el-icon-${toLine(i)}`,(Icons as any)[i])
}
app.use(router).use(ElementPlus)
app.use(mUI)
app.mount('#app')
