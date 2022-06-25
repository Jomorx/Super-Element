import { defineComponent, resolveComponent, openBlock, createBlock, withCtx, createVNode, resolveDynamicComponent, unref, renderSlot } from "vue";
const toLine = (value) => {
  return value.replace(/(A-Z)g/, "-$1").toLocaleLowerCase();
};
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    icon: {
      type: String,
      default: "Bell"
    },
    value: {
      type: [String, Number],
      default: ""
    },
    max: {
      type: Number
    },
    isDot: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_badge = resolveComponent("el-badge");
      const _component_el_popover = resolveComponent("el-popover");
      return openBlock(), createBlock(_component_el_popover, {
        "popper-class": "notification",
        placement: "bottom",
        width: 300,
        trigger: "click"
      }, {
        reference: withCtx(() => [
          createVNode(_component_el_badge, {
            style: { "cursor": "pointer" },
            value: __props.value,
            max: __props.max,
            "is-dot": __props.isDot
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(`el-icon-${unref(toLine)(__props.icon)}`)))
            ]),
            _: 1
          }, 8, ["value", "max", "is-dot"])
        ]),
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ]),
        _: 3
      });
    };
  }
});
var notification = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c993c570"]]);
var index = {
  install(app) {
    app.component("se-notification", notification);
  }
};
export { index as default };
