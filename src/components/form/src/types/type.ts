// 可配置表单

import { CSSProperties } from "vue";
import { RuleItem } from "./rule";

//表单每一项配置
export interface FormOptions {
  //表单项显示元素
  type:
    | "cascader"
    | "checkbox"
    | "checkbox-group"
    | "checkbox-button"
    | "color-picker"
    | "date-picker"
    | "input"
    | "input-number"
    | "radio"
    | "radio-group"
    | "radio-button"
    | "rate"
    | "select"
    | "option"
    | "slider"
    | "time-picker"
    | "time-select"
    | "transfer"
    | "upload";
  //表单项的值
  value?: any;
  //表单label
  label?: string;
  //表单标识，验证用
  prop?: string;
  //表单项验证规则
  rules?: RuleItem[];
  //表单项占位符
  placeholder?: string;
  // 表单元素特有属性
  attrs?: {
    clearable?: boolean;
    showPassword?: boolean;
    disabled?: boolean;
    //css
    style?: CSSProperties;
  };
  //select 中的options等
  children?: FormOptions[];
}
