import { App } from 'vue'
import chooseArea from './src/index.vue'
//让组件可以通过use使用
export default {
    install(app:App){
        app.component('se-choose-area',chooseArea)
    }
}