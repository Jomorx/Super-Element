import { defineComponent, ref, watch, resolveComponent, openBlock, createElementBlock, createVNode, mergeProps } from "vue";
const _hoisted_1 = { style: { "display": "flex" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    startPlaceHolder: {
      type: String,
      default: "\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4"
    },
    startTimeStart: {
      type: String,
      default: "08:00"
    },
    startStep: {
      type: String,
      default: "00:30"
    },
    startTimeEnd: {
      type: String,
      default: "24:00"
    },
    endPlaceHolder: {
      type: String,
      default: "\u8BF7\u9009\u62E9\u7ED3\u675F\u65F6\u95F4"
    },
    endTimeStart: {
      type: String,
      default: "08:00"
    },
    endStep: {
      type: String,
      default: "00:30"
    },
    endTimeEnd: {
      type: String,
      default: "24:00"
    }
  },
  emits: ["startChange", "endChange"],
  setup(__props, { emit: emits }) {
    const startTime = ref("");
    const endTime = ref("");
    const endTimeDisabled = ref(true);
    watch(() => startTime.value, (val) => {
      if (val === "") {
        endTime.value = "";
        endTimeDisabled.value = true;
      } else {
        endTimeDisabled.value = false;
        emits("startChange", val);
      }
    });
    watch(() => endTime.value, (val) => {
      if (val === "")
        ;
      else {
        emits("endChange", {
          startTime: startTime.value,
          endTime: val
        });
      }
    });
    return (_ctx, _cache) => {
      const _component_el_time_select = resolveComponent("el-time-select");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_el_time_select, mergeProps({
          style: { "margin-right": "20px" },
          modelValue: startTime.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => startTime.value = $event),
          "max-time": endTime.value,
          placeholder: __props.startPlaceHolder,
          start: __props.startTimeStart,
          step: __props.startStep,
          end: __props.startTimeEnd
        }, _ctx.$attrs.startOptions), null, 16, ["modelValue", "max-time", "placeholder", "start", "step", "end"]),
        createVNode(_component_el_time_select, mergeProps({
          modelValue: endTime.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => endTime.value = $event),
          "min-time": startTime.value,
          placeholder: __props.endPlaceHolder,
          start: __props.endTimeStart,
          step: __props.endStep,
          disabled: endTimeDisabled.value,
          end: __props.endTimeEnd
        }, _ctx.$attrs.endOptions), null, 16, ["modelValue", "min-time", "placeholder", "start", "step", "disabled", "end"])
      ]);
    };
  }
});
var index = {
  install(app) {
    app.component("se-choose-time", _sfc_main);
  }
};
export { index as default };
