import { App } from "vue";
import chooseArea from "./chooseArea";
import chooseIcon from "./chooseIcon";
import trend from "./trend";
import list from "./list";
import notification from "./notification";
import menu from "./menu";
import progress from "./progress";
import chooseTime from "./chooseTime";
import chooseDate from "./chooseDate";
import chooseCity from "./chooseCity";
import form from "./form";
import modalForm from "./modalForm";
import table from "./table";
import calendar from "./calendar";
import "./styles/base.scss";
import "./styles/ui.scss";
import * as Icons from '@element-plus/icons'

const components = [
  chooseArea,
  chooseIcon,
  trend,
  notification,
  list,
  menu,
  progress,
  chooseTime,
  chooseDate,
  chooseCity,
  form,
  modalForm,
  table,
  calendar,
];
import {toLine} from './utils'
export default {
  install(app: App) {
    for(let i in Icons){
      app.component(`el-icon-${toLine(i)}`,(Icons as any)[i])
  }
    components.map((item) => {
      app.use(item);
    });
  },
};
