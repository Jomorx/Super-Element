import { App } from 'vue'
import progress from './src/index.vue'
 
export default {
    install(app:App){
        app.component('se-progress',progress)
    }
}