import { defineComponent, ref, onMounted, resolveComponent, openBlock, createBlock, mergeProps, unref } from "vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    percentage: {
      type: Number,
      default: 0
    },
    isAnimation: {
      type: Boolean,
      default: false
    },
    time: {
      type: Number,
      default: 1e3
    }
  },
  setup(__props) {
    const props = __props;
    let p = ref(0);
    onMounted(() => {
      if (props.isAnimation) {
        let t = Math.ceil(props.time / props.percentage);
        let timer = setInterval(() => {
          p.value += 1;
          if (p.value >= props.percentage) {
            p.value = props.percentage;
            clearInterval(timer);
          }
        }, t);
      } else {
        p.value = props.percentage;
      }
    });
    return (_ctx, _cache) => {
      const _component_el_progress = resolveComponent("el-progress");
      return openBlock(), createBlock(_component_el_progress, mergeProps(_ctx.$attrs, { percentage: unref(p) }), null, 16, ["percentage"]);
    };
  }
});
var index = {
  install(app) {
    app.component("se-progress", _sfc_main);
  }
};
export { index as default };
