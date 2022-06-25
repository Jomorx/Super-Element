import { App } from 'vue'
import calendar from './src/index.vue'
//让组件可以通过use使用
export default {
    install(app:App){
        app.component('se-calendar',calendar)
    }
}