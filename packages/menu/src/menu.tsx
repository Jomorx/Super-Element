import { defineComponent, PropType, useAttrs } from "vue";
import * as Icons from "@element-plus/icons";
import './styles/index.scss'
export default defineComponent({
  props: {
    //菜单信息
    data: {
      type: Array as PropType<any[]>,
      required: true,
    },
    //默认选中
    defaultActive: {
      type: String,
      default: "",
    },
    //是否是路由模式
    router: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "name",
    },
    index: {
      type: String,
      default: "index",
    },
    icon: {
      type: String,
      default: "icon",
    },
    children: {
      type: String,
      default: "children",
    },
  },
  setup(props, ctx) {
    //定义插槽
    const renderMenu = (data: any[]) => {
      return data.map((item: any) => {
        // item.i = `el-icon-${toLine(item[props.icon]!)}`;
        item.i = (Icons as any)[item[props.icon]!];

        let slot = {
          title: () => {
            return (
              <>
                <item.i />
                <span>{item[props.name]}</span>
              </>
            );
          },
        };
        //递归渲染children
        if (item[props.children] && item[props.children].length) {
          return (
            <el-sub-menu index={item[props.index]} v-slots={slot}>
              {renderMenu(item[props.children])}
            </el-sub-menu>
          );
        }
        return (
          <el-menu-item index={item[props.index]}>
            <item.i />
            <span>{item[props.name]}</span>
          </el-menu-item>
        );
      });
    };
    let attrs = useAttrs();

    return () => {
      return (
          <el-menu class="m-infinite-menu"
            default-active={props.defaultActive}
            router={props.router}
            {...attrs}
          >
            {renderMenu(props.data)}
          </el-menu>
      );
    };
  },
});
