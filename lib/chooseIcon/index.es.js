var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { defineComponent, openBlock, createBlock, createVNode, getCurrentScope, onScopeDispose, ref, unref, watch, createElementBlock, createElementVNode, warn, getCurrentInstance, inject, computed, provide, mergeProps, renderSlot, normalizeClass, Transition, withCtx, withDirectives, toDisplayString, vShow, onMounted, resolveComponent, normalizeStyle, createCommentVNode, resolveDynamicComponent, Fragment, withModifiers, isVNode, render as render$4o, isRef, renderList, pushScopeId, popScopeId } from "vue";
var script$8K = defineComponent({
  name: "Aim"
});
const _hoisted_1$4v = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4u = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
const _hoisted_3$1m = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 96a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V128a32 32 0 0 1 32-32zm0 576a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V704a32 32 0 0 1 32-32zM96 512a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64H128a32 32 0 0 1-32-32zm576 0a32 32 0 0 1 32-32h192a32 32 0 1 1 0 64H704a32 32 0 0 1-32-32z"
}, null, -1);
function render$4n(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4v, [
    _hoisted_2$4u,
    _hoisted_3$1m
  ]);
}
script$8K.render = render$4n;
script$8K.__file = "packages/components/Aim.vue";
var script$8L = script$8K;
var script$8I = defineComponent({
  name: "AddLocation"
});
const _hoisted_1$4u = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4t = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1);
const _hoisted_3$1l = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1);
const _hoisted_4$m = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M544 384h96a32 32 0 1 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96z"
}, null, -1);
function render$4m(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4u, [
    _hoisted_2$4t,
    _hoisted_3$1l,
    _hoisted_4$m
  ]);
}
script$8I.render = render$4m;
script$8I.__file = "packages/components/AddLocation.vue";
var script$8J = script$8I;
var script$8G = defineComponent({
  name: "Apple"
});
const _hoisted_1$4t = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4s = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M599.872 203.776a189.44 189.44 0 0 1 64.384-4.672l2.624.128c31.168 1.024 51.2 4.096 79.488 16.32 37.632 16.128 74.496 45.056 111.488 89.344 96.384 115.264 82.752 372.8-34.752 521.728-7.68 9.728-32 41.6-30.72 39.936a426.624 426.624 0 0 1-30.08 35.776c-31.232 32.576-65.28 49.216-110.08 50.048-31.36.64-53.568-5.312-84.288-18.752l-6.528-2.88c-20.992-9.216-30.592-11.904-47.296-11.904-18.112 0-28.608 2.88-51.136 12.672l-6.464 2.816c-28.416 12.224-48.32 18.048-76.16 19.2-74.112 2.752-116.928-38.08-180.672-132.16-96.64-142.08-132.608-349.312-55.04-486.4 46.272-81.92 129.92-133.632 220.672-135.04 32.832-.576 60.288 6.848 99.648 22.72 27.136 10.88 34.752 13.76 37.376 14.272 16.256-20.16 27.776-36.992 34.56-50.24 13.568-26.304 27.2-59.968 40.704-100.8a32 32 0 1 1 60.8 20.224c-12.608 37.888-25.408 70.4-38.528 97.664zm-51.52 78.08c-14.528 17.792-31.808 37.376-51.904 58.816a32 32 0 1 1-46.72-43.776l12.288-13.248c-28.032-11.2-61.248-26.688-95.68-26.112-70.4 1.088-135.296 41.6-171.648 105.792C121.6 492.608 176 684.16 247.296 788.992c34.816 51.328 76.352 108.992 130.944 106.944 52.48-2.112 72.32-34.688 135.872-34.688 63.552 0 81.28 34.688 136.96 33.536 56.448-1.088 75.776-39.04 126.848-103.872 107.904-136.768 107.904-362.752 35.776-449.088-72.192-86.272-124.672-84.096-151.68-85.12-41.472-4.288-81.6 12.544-113.664 25.152z"
}, null, -1);
function render$4l(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4t, [
    _hoisted_2$4s
  ]);
}
script$8G.render = render$4l;
script$8G.__file = "packages/components/Apple.vue";
var script$8H = script$8G;
var script$8E = defineComponent({
  name: "AlarmClock"
});
const _hoisted_1$4s = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4r = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 832a320 320 0 1 0 0-640 320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768z"
}, null, -1);
const _hoisted_3$1k = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m292.288 824.576 55.424 32-48 83.136a32 32 0 1 1-55.424-32l48-83.136zm439.424 0-55.424 32 48 83.136a32 32 0 1 0 55.424-32l-48-83.136zM512 512h160a32 32 0 1 1 0 64H480a32 32 0 0 1-32-32V320a32 32 0 0 1 64 0v192zM90.496 312.256A160 160 0 0 1 312.32 90.496l-46.848 46.848a96 96 0 0 0-128 128L90.56 312.256zm835.264 0A160 160 0 0 0 704 90.496l46.848 46.848a96 96 0 0 1 128 128l46.912 46.912z"
}, null, -1);
function render$4k(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4s, [
    _hoisted_2$4r,
    _hoisted_3$1k
  ]);
}
script$8E.render = render$4k;
script$8E.__file = "packages/components/AlarmClock.vue";
var script$8F = script$8E;
var script$8C = defineComponent({
  name: "ArrowDown"
});
const _hoisted_1$4r = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4q = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
}, null, -1);
function render$4j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4r, [
    _hoisted_2$4q
  ]);
}
script$8C.render = render$4j;
script$8C.__file = "packages/components/ArrowDown.vue";
var script$8D = script$8C;
var script$8A = defineComponent({
  name: "ArrowDownBold"
});
const _hoisted_1$4q = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4p = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"
}, null, -1);
function render$4i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4q, [
    _hoisted_2$4p
  ]);
}
script$8A.render = render$4i;
script$8A.__file = "packages/components/ArrowDownBold.vue";
var script$8B = script$8A;
var script$8y = defineComponent({
  name: "ArrowLeft"
});
const _hoisted_1$4p = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4o = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
}, null, -1);
function render$4h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4p, [
    _hoisted_2$4o
  ]);
}
script$8y.render = render$4h;
script$8y.__file = "packages/components/ArrowLeft.vue";
var script$8z = script$8y;
var script$8w = defineComponent({
  name: "ArrowLeftBold"
});
const _hoisted_1$4o = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4n = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"
}, null, -1);
function render$4g(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4o, [
    _hoisted_2$4n
  ]);
}
script$8w.render = render$4g;
script$8w.__file = "packages/components/ArrowLeftBold.vue";
var script$8x = script$8w;
var script$8u = defineComponent({
  name: "ArrowRightBold"
});
const _hoisted_1$4n = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4m = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
}, null, -1);
function render$4f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4n, [
    _hoisted_2$4m
  ]);
}
script$8u.render = render$4f;
script$8u.__file = "packages/components/ArrowRightBold.vue";
var script$8v = script$8u;
var script$8s = defineComponent({
  name: "ArrowUp"
});
const _hoisted_1$4m = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4l = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
}, null, -1);
function render$4e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4m, [
    _hoisted_2$4l
  ]);
}
script$8s.render = render$4e;
script$8s.__file = "packages/components/ArrowUp.vue";
var script$8t = script$8s;
var script$8q = defineComponent({
  name: "Back"
});
const _hoisted_1$4l = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4k = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
}, null, -1);
const _hoisted_3$1j = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
}, null, -1);
function render$4d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4l, [
    _hoisted_2$4k,
    _hoisted_3$1j
  ]);
}
script$8q.render = render$4d;
script$8q.__file = "packages/components/Back.vue";
var script$8r = script$8q;
var script$8o = defineComponent({
  name: "Bell"
});
const _hoisted_1$4k = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4j = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 64a64 64 0 0 1 64 64v64H448v-64a64 64 0 0 1 64-64z"
}, null, -1);
const _hoisted_3$1i = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M256 768h512V448a256 256 0 1 0-512 0v320zm256-640a320 320 0 0 1 320 320v384H192V448a320 320 0 0 1 320-320z"
}, null, -1);
const _hoisted_4$l = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M96 768h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm352 128h128a64 64 0 0 1-128 0z"
}, null, -1);
function render$4c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4k, [
    _hoisted_2$4j,
    _hoisted_3$1i,
    _hoisted_4$l
  ]);
}
script$8o.render = render$4c;
script$8o.__file = "packages/components/Bell.vue";
var script$8p = script$8o;
var script$8m = defineComponent({
  name: "Baseball"
});
const _hoisted_1$4j = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4i = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M195.2 828.8a448 448 0 1 1 633.6-633.6 448 448 0 0 1-633.6 633.6zm45.248-45.248a384 384 0 1 0 543.104-543.104 384 384 0 0 0-543.104 543.104z"
}, null, -1);
const _hoisted_3$1h = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M497.472 96.896c22.784 4.672 44.416 9.472 64.896 14.528a256.128 256.128 0 0 0 350.208 350.208c5.056 20.48 9.856 42.112 14.528 64.896A320.128 320.128 0 0 1 497.472 96.896zM108.48 491.904a320.128 320.128 0 0 1 423.616 423.68c-23.04-3.648-44.992-7.424-65.728-11.52a256.128 256.128 0 0 0-346.496-346.432 1736.64 1736.64 0 0 1-11.392-65.728z"
}, null, -1);
function render$4b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4j, [
    _hoisted_2$4i,
    _hoisted_3$1h
  ]);
}
script$8m.render = render$4b;
script$8m.__file = "packages/components/Baseball.vue";
var script$8n = script$8m;
var script$8k = defineComponent({
  name: "Bicycle"
});
const _hoisted_1$4i = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4h = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M256 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"
}, null, -1);
const _hoisted_3$1g = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M288 672h320q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1);
const _hoisted_4$k = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M768 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"
}, null, -1);
const _hoisted_5$3 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M480 192a32 32 0 0 1 0-64h160a32 32 0 0 1 31.04 24.256l96 384a32 32 0 0 1-62.08 15.488L615.04 192H480zM96 384a32 32 0 0 1 0-64h128a32 32 0 0 1 30.336 21.888l64 192a32 32 0 1 1-60.672 20.224L200.96 384H96z"
}, null, -1);
const _hoisted_6$1 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m373.376 599.808-42.752-47.616 320-288 42.752 47.616z"
}, null, -1);
function render$4a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4i, [
    _hoisted_2$4h,
    _hoisted_3$1g,
    _hoisted_4$k,
    _hoisted_5$3,
    _hoisted_6$1
  ]);
}
script$8k.render = render$4a;
script$8k.__file = "packages/components/Bicycle.vue";
var script$8l = script$8k;
var script$8i = defineComponent({
  name: "BellFilled"
});
const _hoisted_1$4h = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4g = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M640 832a128 128 0 0 1-256 0h256zm192-64H134.4a38.4 38.4 0 0 1 0-76.8H192V448c0-154.88 110.08-284.16 256.32-313.6a64 64 0 1 1 127.36 0A320.128 320.128 0 0 1 832 448v243.2h57.6a38.4 38.4 0 0 1 0 76.8H832z"
}, null, -1);
function render$49(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4h, [
    _hoisted_2$4g
  ]);
}
script$8i.render = render$49;
script$8i.__file = "packages/components/BellFilled.vue";
var script$8j = script$8i;
var script$8g = defineComponent({
  name: "Basketball"
});
const _hoisted_1$4g = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4f = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M778.752 788.224a382.464 382.464 0 0 0 116.032-245.632 256.512 256.512 0 0 0-241.728-13.952 762.88 762.88 0 0 1 125.696 259.584zm-55.04 44.224a699.648 699.648 0 0 0-125.056-269.632 256.128 256.128 0 0 0-56.064 331.968 382.72 382.72 0 0 0 181.12-62.336zm-254.08 61.248A320.128 320.128 0 0 1 557.76 513.6a715.84 715.84 0 0 0-48.192-48.128 320.128 320.128 0 0 1-379.264 88.384 382.4 382.4 0 0 0 110.144 229.696 382.4 382.4 0 0 0 229.184 110.08zM129.28 481.088a256.128 256.128 0 0 0 331.072-56.448 699.648 699.648 0 0 0-268.8-124.352 382.656 382.656 0 0 0-62.272 180.8zm106.56-235.84a762.88 762.88 0 0 1 258.688 125.056 256.512 256.512 0 0 0-13.44-241.088A382.464 382.464 0 0 0 235.84 245.248zm318.08-114.944c40.576 89.536 37.76 193.92-8.448 281.344a779.84 779.84 0 0 1 66.176 66.112 320.832 320.832 0 0 1 282.112-8.128 382.4 382.4 0 0 0-110.144-229.12 382.4 382.4 0 0 0-229.632-110.208zM828.8 828.8a448 448 0 1 1-633.6-633.6 448 448 0 0 1 633.6 633.6z"
}, null, -1);
function render$48(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4g, [
    _hoisted_2$4f
  ]);
}
script$8g.render = render$48;
script$8g.__file = "packages/components/Basketball.vue";
var script$8h = script$8g;
var script$8e = defineComponent({
  name: "Bottom"
});
const _hoisted_1$4f = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4e = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M544 805.888V168a32 32 0 1 0-64 0v637.888L246.656 557.952a30.72 30.72 0 0 0-45.312 0 35.52 35.52 0 0 0 0 48.064l288 306.048a30.72 30.72 0 0 0 45.312 0l288-306.048a35.52 35.52 0 0 0 0-48 30.72 30.72 0 0 0-45.312 0L544 805.824z"
}, null, -1);
function render$47(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4f, [
    _hoisted_2$4e
  ]);
}
script$8e.render = render$47;
script$8e.__file = "packages/components/Bottom.vue";
var script$8f = script$8e;
var script$8c = defineComponent({
  name: "Box"
});
const _hoisted_1$4e = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4d = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M317.056 128 128 344.064V896h768V344.064L706.944 128H317.056zm-14.528-64h418.944a32 32 0 0 1 24.064 10.88l206.528 236.096A32 32 0 0 1 960 332.032V928a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V332.032a32 32 0 0 1 7.936-21.12L278.4 75.008A32 32 0 0 1 302.528 64z"
}, null, -1);
const _hoisted_3$1f = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M64 320h896v64H64z"
}, null, -1);
const _hoisted_4$j = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M448 327.872V640h128V327.872L526.08 128h-28.16L448 327.872zM448 64h128l64 256v352a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V320l64-256z"
}, null, -1);
function render$46(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4e, [
    _hoisted_2$4d,
    _hoisted_3$1f,
    _hoisted_4$j
  ]);
}
script$8c.render = render$46;
script$8c.__file = "packages/components/Box.vue";
var script$8d = script$8c;
var script$8a = defineComponent({
  name: "Briefcase"
});
const _hoisted_1$4d = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4c = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M320 320V128h384v192h192v192H128V320h192zM128 576h768v320H128V576zm256-256h256.064V192H384v128z"
}, null, -1);
function render$45(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4d, [
    _hoisted_2$4c
  ]);
}
script$8a.render = render$45;
script$8a.__file = "packages/components/Briefcase.vue";
var script$8b = script$8a;
var script$88 = defineComponent({
  name: "BrushFilled"
});
const _hoisted_1$4c = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4b = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M608 704v160a96 96 0 0 1-192 0V704h-96a128 128 0 0 1-128-128h640a128 128 0 0 1-128 128h-96zM192 512V128.064h640V512H192z"
}, null, -1);
function render$44(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4c, [
    _hoisted_2$4b
  ]);
}
script$88.render = render$44;
script$88.__file = "packages/components/BrushFilled.vue";
var script$89 = script$88;
var script$86 = defineComponent({
  name: "Bowl"
});
const _hoisted_1$4b = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4a = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M714.432 704a351.744 351.744 0 0 0 148.16-256H161.408a351.744 351.744 0 0 0 148.16 256h404.864zM288 766.592A415.68 415.68 0 0 1 96 416a32 32 0 0 1 32-32h768a32 32 0 0 1 32 32 415.68 415.68 0 0 1-192 350.592V832a64 64 0 0 1-64 64H352a64 64 0 0 1-64-64v-65.408zM493.248 320h-90.496l254.4-254.4a32 32 0 1 1 45.248 45.248L493.248 320zm187.328 0h-128l269.696-155.712a32 32 0 0 1 32 55.424L680.576 320zM352 768v64h320v-64H352z"
}, null, -1);
function render$43(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4b, [
    _hoisted_2$4a
  ]);
}
script$86.render = render$43;
script$86.__file = "packages/components/Bowl.vue";
var script$87 = script$86;
var script$84 = defineComponent({
  name: "Avatar"
});
const _hoisted_1$4a = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$49 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704l116.736-175.104zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0z"
}, null, -1);
function render$42(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$4a, [
    _hoisted_2$49
  ]);
}
script$84.render = render$42;
script$84.__file = "packages/components/Avatar.vue";
var script$85 = script$84;
var script$82 = defineComponent({
  name: "Brush"
});
const _hoisted_1$49 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$48 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M896 448H128v192a64 64 0 0 0 64 64h192v192h256V704h192a64 64 0 0 0 64-64V448zm-770.752-64c0-47.552 5.248-90.24 15.552-128 14.72-54.016 42.496-107.392 83.2-160h417.28l-15.36 70.336L736 96h211.2c-24.832 42.88-41.92 96.256-51.2 160a663.872 663.872 0 0 0-6.144 128H960v256a128 128 0 0 1-128 128H704v160a32 32 0 0 1-32 32H352a32 32 0 0 1-32-32V768H192A128 128 0 0 1 64 640V384h61.248zm64 0h636.544c-2.048-45.824.256-91.584 6.848-137.216 4.48-30.848 10.688-59.776 18.688-86.784h-96.64l-221.12 141.248L561.92 160H256.512c-25.856 37.888-43.776 75.456-53.952 112.832-8.768 32.064-13.248 69.12-13.312 111.168z"
}, null, -1);
function render$41(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$49, [
    _hoisted_2$48
  ]);
}
script$82.render = render$41;
script$82.__file = "packages/components/Brush.vue";
var script$83 = script$82;
var script$80 = defineComponent({
  name: "Burger"
});
const _hoisted_1$48 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$47 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M160 512a32 32 0 0 0-32 32v64a32 32 0 0 0 30.08 32H864a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32H160zm736-58.56A96 96 0 0 1 960 544v64a96 96 0 0 1-51.968 85.312L855.36 833.6a96 96 0 0 1-89.856 62.272H258.496A96 96 0 0 1 168.64 833.6l-52.608-140.224A96 96 0 0 1 64 608v-64a96 96 0 0 1 64-90.56V448a384 384 0 1 1 768 5.44zM832 448a320 320 0 0 0-640 0h640zM512 704H188.352l40.192 107.136a32 32 0 0 0 29.952 20.736h507.008a32 32 0 0 0 29.952-20.736L835.648 704H512z"
}, null, -1);
function render$40(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$48, [
    _hoisted_2$47
  ]);
}
script$80.render = render$40;
script$80.__file = "packages/components/Burger.vue";
var script$81 = script$80;
var script$7_ = defineComponent({
  name: "Camera"
});
const _hoisted_1$47 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$46 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M896 256H128v576h768V256zm-199.424-64-32.064-64h-304.96l-32 64h369.024zM96 192h160l46.336-92.608A64 64 0 0 1 359.552 64h304.96a64 64 0 0 1 57.216 35.328L768.192 192H928a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32zm416 512a160 160 0 1 0 0-320 160 160 0 0 0 0 320zm0 64a224 224 0 1 1 0-448 224 224 0 0 1 0 448z"
}, null, -1);
function render$3$(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$47, [
    _hoisted_2$46
  ]);
}
script$7_.render = render$3$;
script$7_.__file = "packages/components/Camera.vue";
var script$7$ = script$7_;
var script$7Y = defineComponent({
  name: "BottomLeft"
});
const _hoisted_1$46 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$45 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M256 768h416a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V352a32 32 0 0 1 64 0v416z"
}, null, -1);
const _hoisted_3$1e = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M246.656 822.656a32 32 0 0 1-45.312-45.312l544-544a32 32 0 0 1 45.312 45.312l-544 544z"
}, null, -1);
function render$3_(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$46, [
    _hoisted_2$45,
    _hoisted_3$1e
  ]);
}
script$7Y.render = render$3_;
script$7Y.__file = "packages/components/BottomLeft.vue";
var script$7Z = script$7Y;
var script$7W = defineComponent({
  name: "Calendar"
});
const _hoisted_1$45 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$44 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64H128zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0v32zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64z"
}, null, -1);
function render$3Z(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$45, [
    _hoisted_2$44
  ]);
}
script$7W.render = render$3Z;
script$7W.__file = "packages/components/Calendar.vue";
var script$7X = script$7W;
var script$7U = defineComponent({
  name: "CaretBottom"
});
const _hoisted_1$44 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$43 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m192 384 320 384 320-384z"
}, null, -1);
function render$3Y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$44, [
    _hoisted_2$43
  ]);
}
script$7U.render = render$3Y;
script$7U.__file = "packages/components/CaretBottom.vue";
var script$7V = script$7U;
var script$7S = defineComponent({
  name: "CaretLeft"
});
const _hoisted_1$43 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$42 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M672 192 288 511.936 672 832z"
}, null, -1);
function render$3X(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$43, [
    _hoisted_2$42
  ]);
}
script$7S.render = render$3X;
script$7S.__file = "packages/components/CaretLeft.vue";
var script$7T = script$7S;
var script$7Q = defineComponent({
  name: "CaretRight"
});
const _hoisted_1$42 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$41 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M384 192v640l384-320.064z"
}, null, -1);
function render$3W(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$42, [
    _hoisted_2$41
  ]);
}
script$7Q.render = render$3W;
script$7Q.__file = "packages/components/CaretRight.vue";
var script$7R = script$7Q;
var script$7O = defineComponent({
  name: "CaretTop"
});
const _hoisted_1$41 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$40 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 320 192 704h639.936z"
}, null, -1);
function render$3V(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$41, [
    _hoisted_2$40
  ]);
}
script$7O.render = render$3V;
script$7O.__file = "packages/components/CaretTop.vue";
var script$7P = script$7O;
var script$7M = defineComponent({
  name: "ChatDotSquare"
});
const _hoisted_1$40 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3$ = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
}, null, -1);
const _hoisted_3$1d = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 499.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z"
}, null, -1);
function render$3U(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$40, [
    _hoisted_2$3$,
    _hoisted_3$1d
  ]);
}
script$7M.render = render$3U;
script$7M.__file = "packages/components/ChatDotSquare.vue";
var script$7N = script$7M;
var script$7K = defineComponent({
  name: "Cellphone"
});
const _hoisted_1$3$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3_ = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M256 128a64 64 0 0 0-64 64v640a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H256zm0-64h512a128 128 0 0 1 128 128v640a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V192A128 128 0 0 1 256 64zm128 128h256a32 32 0 1 1 0 64H384a32 32 0 0 1 0-64zm128 640a64 64 0 1 1 0-128 64 64 0 0 1 0 128z"
}, null, -1);
function render$3T(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3$, [
    _hoisted_2$3_
  ]);
}
script$7K.render = render$3T;
script$7K.__file = "packages/components/Cellphone.vue";
var script$7L = script$7K;
var script$7I = defineComponent({
  name: "ChatDotRound"
});
const _hoisted_1$3_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3Z = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z"
}, null, -1);
const _hoisted_3$1c = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 563.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z"
}, null, -1);
function render$3S(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3_, [
    _hoisted_2$3Z,
    _hoisted_3$1c
  ]);
}
script$7I.render = render$3S;
script$7I.__file = "packages/components/ChatDotRound.vue";
var script$7J = script$7I;
var script$7G = defineComponent({
  name: "ChatLineSquare"
});
const _hoisted_1$3Z = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3Y = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M160 826.88 273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
}, null, -1);
const _hoisted_3$1b = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M352 512h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm0-192h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32z"
}, null, -1);
function render$3R(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3Z, [
    _hoisted_2$3Y,
    _hoisted_3$1b
  ]);
}
script$7G.render = render$3R;
script$7G.__file = "packages/components/ChatLineSquare.vue";
var script$7H = script$7G;
var script$7E = defineComponent({
  name: "ChatLineRound"
});
const _hoisted_1$3Y = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3X = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z"
}, null, -1);
const _hoisted_3$1a = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M352 576h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm32-192h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32z"
}, null, -1);
function render$3Q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3Y, [
    _hoisted_2$3X,
    _hoisted_3$1a
  ]);
}
script$7E.render = render$3Q;
script$7E.__file = "packages/components/ChatLineRound.vue";
var script$7F = script$7E;
var script$7C = defineComponent({
  name: "ChatRound"
});
const _hoisted_1$3X = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3W = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m174.72 855.68 130.048-43.392 23.424 11.392C382.4 849.984 444.352 864 512 864c223.744 0 384-159.872 384-352 0-192.832-159.104-352-384-352S128 319.168 128 512a341.12 341.12 0 0 0 69.248 204.288l21.632 28.8-44.16 110.528zm-45.248 82.56A32 32 0 0 1 89.6 896l56.512-141.248A405.12 405.12 0 0 1 64 512C64 299.904 235.648 96 512 96s448 203.904 448 416-173.44 416-448 416c-79.68 0-150.848-17.152-211.712-46.72l-170.88 56.96z"
}, null, -1);
function render$3P(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3X, [
    _hoisted_2$3W
  ]);
}
script$7C.render = render$3P;
script$7C.__file = "packages/components/ChatRound.vue";
var script$7D = script$7C;
var script$7A = defineComponent({
  name: "Check"
});
const _hoisted_1$3W = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3V = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
}, null, -1);
function render$3O(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3W, [
    _hoisted_2$3V
  ]);
}
script$7A.render = render$3O;
script$7A.__file = "packages/components/Check.vue";
var script$7B = script$7A;
var script$7y = defineComponent({
  name: "ChatSquare"
});
const _hoisted_1$3V = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3U = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
}, null, -1);
function render$3N(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3V, [
    _hoisted_2$3U
  ]);
}
script$7y.render = render$3N;
script$7y.__file = "packages/components/ChatSquare.vue";
var script$7z = script$7y;
var script$7w = defineComponent({
  name: "Cherry"
});
const _hoisted_1$3U = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3T = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M261.056 449.6c13.824-69.696 34.88-128.96 63.36-177.728 23.744-40.832 61.12-88.64 112.256-143.872H320a32 32 0 0 1 0-64h384a32 32 0 1 1 0 64H554.752c14.912 39.168 41.344 86.592 79.552 141.76 47.36 68.48 84.8 106.752 106.304 114.304a224 224 0 1 1-84.992 14.784c-22.656-22.912-47.04-53.76-73.92-92.608-38.848-56.128-67.008-105.792-84.352-149.312-55.296 58.24-94.528 107.52-117.76 147.2-23.168 39.744-41.088 88.768-53.568 147.072a224.064 224.064 0 1 1-64.96-1.6zM288 832a160 160 0 1 0 0-320 160 160 0 0 0 0 320zm448-64a160 160 0 1 0 0-320 160 160 0 0 0 0 320z"
}, null, -1);
function render$3M(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3U, [
    _hoisted_2$3T
  ]);
}
script$7w.render = render$3M;
script$7w.__file = "packages/components/Cherry.vue";
var script$7x = script$7w;
var script$7u = defineComponent({
  name: "Chicken"
});
const _hoisted_1$3T = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3S = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M349.952 716.992 478.72 588.16a106.688 106.688 0 0 1-26.176-19.072 106.688 106.688 0 0 1-19.072-26.176L304.704 671.744c.768 3.072 1.472 6.144 2.048 9.216l2.048 31.936 31.872 1.984c3.136.64 6.208 1.28 9.28 2.112zm57.344 33.152a128 128 0 1 1-216.32 114.432l-1.92-32-32-1.92a128 128 0 1 1 114.432-216.32L416.64 469.248c-2.432-101.44 58.112-239.104 149.056-330.048 107.328-107.328 231.296-85.504 316.8 0 85.44 85.44 107.328 209.408 0 316.8-91.008 90.88-228.672 151.424-330.112 149.056L407.296 750.08zm90.496-226.304c49.536 49.536 233.344-7.04 339.392-113.088 78.208-78.208 63.232-163.072 0-226.304-63.168-63.232-148.032-78.208-226.24 0C504.896 290.496 448.32 474.368 497.792 523.84zM244.864 708.928a64 64 0 1 0-59.84 59.84l56.32-3.52 3.52-56.32zm8.064 127.68a64 64 0 1 0 59.84-59.84l-56.32 3.52-3.52 56.32z"
}, null, -1);
function render$3L(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3T, [
    _hoisted_2$3S
  ]);
}
script$7u.render = render$3L;
script$7u.__file = "packages/components/Chicken.vue";
var script$7v = script$7u;
var script$7s = defineComponent({
  name: "CircleCheckFilled"
});
const _hoisted_1$3S = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3R = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
}, null, -1);
function render$3K(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3S, [
    _hoisted_2$3R
  ]);
}
script$7s.render = render$3K;
script$7s.__file = "packages/components/CircleCheckFilled.vue";
var script$7t = script$7s;
var script$7q = defineComponent({
  name: "CircleCheck"
});
const _hoisted_1$3R = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3Q = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
const _hoisted_3$19 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
}, null, -1);
function render$3J(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3R, [
    _hoisted_2$3Q,
    _hoisted_3$19
  ]);
}
script$7q.render = render$3J;
script$7q.__file = "packages/components/CircleCheck.vue";
var script$7r = script$7q;
var script$7o = defineComponent({
  name: "Checked"
});
const _hoisted_1$3Q = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3P = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M704 192h160v736H160V192h160.064v64H704v-64zM311.616 537.28l-45.312 45.248L447.36 763.52l316.8-316.8-45.312-45.184L447.36 673.024 311.616 537.28zM384 192V96h256v96H384z"
}, null, -1);
function render$3I(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3Q, [
    _hoisted_2$3P
  ]);
}
script$7o.render = render$3I;
script$7o.__file = "packages/components/Checked.vue";
var script$7p = script$7o;
var script$7m = defineComponent({
  name: "CircleCloseFilled"
});
const _hoisted_1$3P = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3O = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"
}, null, -1);
function render$3H(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3P, [
    _hoisted_2$3O
  ]);
}
script$7m.render = render$3H;
script$7m.__file = "packages/components/CircleCloseFilled.vue";
var script$7n = script$7m;
var script$7k = defineComponent({
  name: "CircleClose"
});
const _hoisted_1$3O = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3N = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
}, null, -1);
const _hoisted_3$18 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
function render$3G(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3O, [
    _hoisted_2$3N,
    _hoisted_3$18
  ]);
}
script$7k.render = render$3G;
script$7k.__file = "packages/components/CircleClose.vue";
var script$7l = script$7k;
var script$7i = defineComponent({
  name: "ArrowRight"
});
const _hoisted_1$3N = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3M = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
}, null, -1);
function render$3F(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3N, [
    _hoisted_2$3M
  ]);
}
script$7i.render = render$3F;
script$7i.__file = "packages/components/ArrowRight.vue";
var script$7j = script$7i;
var script$7g = defineComponent({
  name: "CirclePlus"
});
const _hoisted_1$3M = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3L = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"
}, null, -1);
const _hoisted_3$17 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M480 672V352a32 32 0 1 1 64 0v320a32 32 0 0 1-64 0z"
}, null, -1);
const _hoisted_4$i = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
function render$3E(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3M, [
    _hoisted_2$3L,
    _hoisted_3$17,
    _hoisted_4$i
  ]);
}
script$7g.render = render$3E;
script$7g.__file = "packages/components/CirclePlus.vue";
var script$7h = script$7g;
var script$7e = defineComponent({
  name: "Clock"
});
const _hoisted_1$3L = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3K = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
const _hoisted_3$16 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_4$h = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32z"
}, null, -1);
function render$3D(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3L, [
    _hoisted_2$3K,
    _hoisted_3$16,
    _hoisted_4$h
  ]);
}
script$7e.render = render$3D;
script$7e.__file = "packages/components/Clock.vue";
var script$7f = script$7e;
var script$7c = defineComponent({
  name: "CloseBold"
});
const _hoisted_1$3K = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3J = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
}, null, -1);
function render$3C(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3K, [
    _hoisted_2$3J
  ]);
}
script$7c.render = render$3C;
script$7c.__file = "packages/components/CloseBold.vue";
var script$7d = script$7c;
var script$7a = defineComponent({
  name: "Close"
});
const _hoisted_1$3J = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3I = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1);
function render$3B(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3J, [
    _hoisted_2$3I
  ]);
}
script$7a.render = render$3B;
script$7a.__file = "packages/components/Close.vue";
var script$7b = script$7a;
var script$78 = defineComponent({
  name: "Cloudy"
});
const _hoisted_1$3I = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3H = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M598.4 831.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 831.872zm-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 381.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z"
}, null, -1);
function render$3A(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3I, [
    _hoisted_2$3H
  ]);
}
script$78.render = render$3A;
script$78.__file = "packages/components/Cloudy.vue";
var script$79 = script$78;
var script$76 = defineComponent({
  name: "CirclePlusFilled"
});
const _hoisted_1$3H = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3G = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-38.4 409.6H326.4a38.4 38.4 0 1 0 0 76.8h147.2v147.2a38.4 38.4 0 0 0 76.8 0V550.4h147.2a38.4 38.4 0 0 0 0-76.8H550.4V326.4a38.4 38.4 0 1 0-76.8 0v147.2z"
}, null, -1);
function render$3z(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3H, [
    _hoisted_2$3G
  ]);
}
script$76.render = render$3z;
script$76.__file = "packages/components/CirclePlusFilled.vue";
var script$77 = script$76;
var script$74 = defineComponent({
  name: "CoffeeCup"
});
const _hoisted_1$3G = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3F = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M768 192a192 192 0 1 1-8 383.808A256.128 256.128 0 0 1 512 768H320A256 256 0 0 1 64 512V160a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v32zm0 64v256a128 128 0 1 0 0-256zM96 832h640a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64zm32-640v320a192 192 0 0 0 192 192h192a192 192 0 0 0 192-192V192H128z"
}, null, -1);
function render$3y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3G, [
    _hoisted_2$3F
  ]);
}
script$74.render = render$3y;
script$74.__file = "packages/components/CoffeeCup.vue";
var script$75 = script$74;
var script$72 = defineComponent({
  name: "ColdDrink"
});
const _hoisted_1$3F = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3E = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M768 64a192 192 0 1 1-69.952 370.88L480 725.376V896h96a32 32 0 1 1 0 64H320a32 32 0 1 1 0-64h96V725.376L76.8 273.536a64 64 0 0 1-12.8-38.4v-10.688a32 32 0 0 1 32-32h71.808l-65.536-83.84a32 32 0 0 1 50.432-39.424l96.256 123.264h337.728A192.064 192.064 0 0 1 768 64zM656.896 192.448H800a32 32 0 0 1 32 32v10.624a64 64 0 0 1-12.8 38.4l-80.448 107.2a128 128 0 1 0-81.92-188.16v-.064zm-357.888 64 129.472 165.76a32 32 0 0 1-50.432 39.36l-160.256-205.12H144l304 404.928 304-404.928H299.008z"
}, null, -1);
function render$3x(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3F, [
    _hoisted_2$3E
  ]);
}
script$72.render = render$3x;
script$72.__file = "packages/components/ColdDrink.vue";
var script$73 = script$72;
var script$70 = defineComponent({
  name: "Coin"
});
const _hoisted_1$3E = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3D = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m161.92 580.736 29.888 58.88C171.328 659.776 160 681.728 160 704c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 615.808 928 657.664 928 704c0 129.728-188.544 224-416 224S96 833.728 96 704c0-46.592 24.32-88.576 65.92-123.264z"
}, null, -1);
const _hoisted_3$15 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m161.92 388.736 29.888 58.88C171.328 467.84 160 489.792 160 512c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 423.808 928 465.664 928 512c0 129.728-188.544 224-416 224S96 641.728 96 512c0-46.592 24.32-88.576 65.92-123.264z"
}, null, -1);
const _hoisted_4$g = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 544c-227.456 0-416-94.272-416-224S284.544 96 512 96s416 94.272 416 224-188.544 224-416 224zm0-64c196.672 0 352-77.696 352-160S708.672 160 512 160s-352 77.696-352 160 155.328 160 352 160z"
}, null, -1);
function render$3w(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3E, [
    _hoisted_2$3D,
    _hoisted_3$15,
    _hoisted_4$g
  ]);
}
script$70.render = render$3w;
script$70.__file = "packages/components/Coin.vue";
var script$71 = script$70;
var script$6_ = defineComponent({
  name: "ArrowUpBold"
});
const _hoisted_1$3D = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3C = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8 316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z"
}, null, -1);
function render$3v(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3D, [
    _hoisted_2$3C
  ]);
}
script$6_.render = render$3v;
script$6_.__file = "packages/components/ArrowUpBold.vue";
var script$6$ = script$6_;
var script$6Y = defineComponent({
  name: "CollectionTag"
});
const _hoisted_1$3C = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3B = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M256 128v698.88l196.032-156.864a96 96 0 0 1 119.936 0L768 826.816V128H256zm-32-64h576a32 32 0 0 1 32 32v797.44a32 32 0 0 1-51.968 24.96L531.968 720a32 32 0 0 0-39.936 0L243.968 918.4A32 32 0 0 1 192 893.44V96a32 32 0 0 1 32-32z"
}, null, -1);
function render$3u(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3C, [
    _hoisted_2$3B
  ]);
}
script$6Y.render = render$3u;
script$6Y.__file = "packages/components/CollectionTag.vue";
var script$6Z = script$6Y;
var script$6W = defineComponent({
  name: "BottomRight"
});
const _hoisted_1$3B = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3A = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M352 768a32 32 0 1 0 0 64h448a32 32 0 0 0 32-32V352a32 32 0 0 0-64 0v416H352z"
}, null, -1);
const _hoisted_3$14 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M777.344 822.656a32 32 0 0 0 45.312-45.312l-544-544a32 32 0 0 0-45.312 45.312l544 544z"
}, null, -1);
function render$3t(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3B, [
    _hoisted_2$3A,
    _hoisted_3$14
  ]);
}
script$6W.render = render$3t;
script$6W.__file = "packages/components/BottomRight.vue";
var script$6X = script$6W;
var script$6U = defineComponent({
  name: "Coffee"
});
const _hoisted_1$3A = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3z = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M822.592 192h14.272a32 32 0 0 1 31.616 26.752l21.312 128A32 32 0 0 1 858.24 384h-49.344l-39.04 546.304A32 32 0 0 1 737.92 960H285.824a32 32 0 0 1-32-29.696L214.912 384H165.76a32 32 0 0 1-31.552-37.248l21.312-128A32 32 0 0 1 187.136 192h14.016l-6.72-93.696A32 32 0 0 1 226.368 64h571.008a32 32 0 0 1 31.936 34.304L822.592 192zm-64.128 0 4.544-64H260.736l4.544 64h493.184zm-548.16 128H820.48l-10.688-64H214.208l-10.688 64h6.784zm68.736 64 36.544 512H708.16l36.544-512H279.04z"
}, null, -1);
function render$3s(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3A, [
    _hoisted_2$3z
  ]);
}
script$6U.render = render$3s;
script$6U.__file = "packages/components/Coffee.vue";
var script$6V = script$6U;
var script$6S = defineComponent({
  name: "CameraFilled"
});
const _hoisted_1$3z = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3y = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M160 224a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h704a64 64 0 0 0 64-64V288a64 64 0 0 0-64-64H748.416l-46.464-92.672A64 64 0 0 0 644.736 96H379.328a64 64 0 0 0-57.216 35.392L275.776 224H160zm352 435.2a115.2 115.2 0 1 0 0-230.4 115.2 115.2 0 0 0 0 230.4zm0 140.8a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"
}, null, -1);
function render$3r(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3z, [
    _hoisted_2$3y
  ]);
}
script$6S.render = render$3r;
script$6S.__file = "packages/components/CameraFilled.vue";
var script$6T = script$6S;
var script$6Q = defineComponent({
  name: "Collection"
});
const _hoisted_1$3y = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3x = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M192 736h640V128H256a64 64 0 0 0-64 64v544zm64-672h608a32 32 0 0 1 32 32v672a32 32 0 0 1-32 32H160l-32 57.536V192A128 128 0 0 1 256 64z"
}, null, -1);
const _hoisted_3$13 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M240 800a48 48 0 1 0 0 96h592v-96H240zm0-64h656v160a64 64 0 0 1-64 64H240a112 112 0 0 1 0-224zm144-608v250.88l96-76.8 96 76.8V128H384zm-64-64h320v381.44a32 32 0 0 1-51.968 24.96L480 384l-108.032 86.4A32 32 0 0 1 320 445.44V64z"
}, null, -1);
function render$3q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3y, [
    _hoisted_2$3x,
    _hoisted_3$13
  ]);
}
script$6Q.render = render$3q;
script$6Q.__file = "packages/components/Collection.vue";
var script$6R = script$6Q;
var script$6O = defineComponent({
  name: "Cpu"
});
const _hoisted_1$3x = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3w = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M320 256a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H320zm0-64h384a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H320a128 128 0 0 1-128-128V320a128 128 0 0 1 128-128z"
}, null, -1);
const _hoisted_3$12 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm-320 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 896a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm160 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm-320 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zM64 512a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0-160a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0 320a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm896-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0 320a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32z"
}, null, -1);
function render$3p(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3x, [
    _hoisted_2$3w,
    _hoisted_3$12
  ]);
}
script$6O.render = render$3p;
script$6O.__file = "packages/components/Cpu.vue";
var script$6P = script$6O;
var script$6M = defineComponent({
  name: "Crop"
});
const _hoisted_1$3w = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3v = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M256 768h672a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V96a32 32 0 0 1 64 0v672z"
}, null, -1);
const _hoisted_3$11 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M832 224v704a32 32 0 1 1-64 0V256H96a32 32 0 0 1 0-64h704a32 32 0 0 1 32 32z"
}, null, -1);
function render$3o(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3w, [
    _hoisted_2$3v,
    _hoisted_3$11
  ]);
}
script$6M.render = render$3o;
script$6M.__file = "packages/components/Crop.vue";
var script$6N = script$6M;
var script$6K = defineComponent({
  name: "Coordinate"
});
const _hoisted_1$3v = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3u = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M480 512h64v320h-64z"
}, null, -1);
const _hoisted_3$10 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M192 896h640a64 64 0 0 0-64-64H256a64 64 0 0 0-64 64zm64-128h512a128 128 0 0 1 128 128v64H128v-64a128 128 0 0 1 128-128zm256-256a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"
}, null, -1);
function render$3n(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3v, [
    _hoisted_2$3u,
    _hoisted_3$10
  ]);
}
script$6K.render = render$3n;
script$6K.__file = "packages/components/Coordinate.vue";
var script$6L = script$6K;
var script$6I = defineComponent({
  name: "DArrowLeft"
});
const _hoisted_1$3u = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3t = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
}, null, -1);
function render$3m(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3u, [
    _hoisted_2$3t
  ]);
}
script$6I.render = render$3m;
script$6I.__file = "packages/components/DArrowLeft.vue";
var script$6J = script$6I;
var script$6G = defineComponent({
  name: "Compass"
});
const _hoisted_1$3t = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3s = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
const _hoisted_3$$ = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M725.888 315.008C676.48 428.672 624 513.28 568.576 568.64c-55.424 55.424-139.968 107.904-253.568 157.312a12.8 12.8 0 0 1-16.896-16.832c49.536-113.728 102.016-198.272 157.312-253.632 55.36-55.296 139.904-107.776 253.632-157.312a12.8 12.8 0 0 1 16.832 16.832z"
}, null, -1);
function render$3l(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3t, [
    _hoisted_2$3s,
    _hoisted_3$$
  ]);
}
script$6G.render = render$3l;
script$6G.__file = "packages/components/Compass.vue";
var script$6H = script$6G;
var script$6E = defineComponent({
  name: "Connection"
});
const _hoisted_1$3s = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3r = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M640 384v64H448a128 128 0 0 0-128 128v128a128 128 0 0 0 128 128h320a128 128 0 0 0 128-128V576a128 128 0 0 0-64-110.848V394.88c74.56 26.368 128 97.472 128 181.056v128a192 192 0 0 1-192 192H448a192 192 0 0 1-192-192V576a192 192 0 0 1 192-192h192z"
}, null, -1);
const _hoisted_3$_ = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M384 640v-64h192a128 128 0 0 0 128-128V320a128 128 0 0 0-128-128H256a128 128 0 0 0-128 128v128a128 128 0 0 0 64 110.848v70.272A192.064 192.064 0 0 1 64 448V320a192 192 0 0 1 192-192h320a192 192 0 0 1 192 192v128a192 192 0 0 1-192 192H384z"
}, null, -1);
function render$3k(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3s, [
    _hoisted_2$3r,
    _hoisted_3$_
  ]);
}
script$6E.render = render$3k;
script$6E.__file = "packages/components/Connection.vue";
var script$6F = script$6E;
var script$6C = defineComponent({
  name: "CreditCard"
});
const _hoisted_1$3r = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3q = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M896 324.096c0-42.368-2.496-55.296-9.536-68.48a52.352 52.352 0 0 0-22.144-22.08c-13.12-7.04-26.048-9.536-68.416-9.536H228.096c-42.368 0-55.296 2.496-68.48 9.536a52.352 52.352 0 0 0-22.08 22.144c-7.04 13.12-9.536 26.048-9.536 68.416v375.808c0 42.368 2.496 55.296 9.536 68.48a52.352 52.352 0 0 0 22.144 22.08c13.12 7.04 26.048 9.536 68.416 9.536h567.808c42.368 0 55.296-2.496 68.48-9.536a52.352 52.352 0 0 0 22.08-22.144c7.04-13.12 9.536-26.048 9.536-68.416V324.096zm64 0v375.808c0 57.088-5.952 77.76-17.088 98.56-11.136 20.928-27.52 37.312-48.384 48.448-20.864 11.136-41.6 17.088-98.56 17.088H228.032c-57.088 0-77.76-5.952-98.56-17.088a116.288 116.288 0 0 1-48.448-48.384c-11.136-20.864-17.088-41.6-17.088-98.56V324.032c0-57.088 5.952-77.76 17.088-98.56 11.136-20.928 27.52-37.312 48.384-48.448 20.864-11.136 41.6-17.088 98.56-17.088H795.84c57.088 0 77.76 5.952 98.56 17.088 20.928 11.136 37.312 27.52 48.448 48.384 11.136 20.864 17.088 41.6 17.088 98.56z"
}, null, -1);
const _hoisted_3$Z = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M64 320h896v64H64v-64zm0 128h896v64H64v-64zm128 192h256v64H192z"
}, null, -1);
function render$3j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3r, [
    _hoisted_2$3q,
    _hoisted_3$Z
  ]);
}
script$6C.render = render$3j;
script$6C.__file = "packages/components/CreditCard.vue";
var script$6D = script$6C;
var script$6A = defineComponent({
  name: "DataBoard"
});
const _hoisted_1$3q = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3p = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M32 128h960v64H32z"
}, null, -1);
const _hoisted_3$Y = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M192 192v512h640V192H192zm-64-64h768v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V128z"
}, null, -1);
const _hoisted_4$f = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M322.176 960H248.32l144.64-250.56 55.424 32L322.176 960zm453.888 0h-73.856L576 741.44l55.424-32L776.064 960z"
}, null, -1);
function render$3i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3q, [
    _hoisted_2$3p,
    _hoisted_3$Y,
    _hoisted_4$f
  ]);
}
script$6A.render = render$3i;
script$6A.__file = "packages/components/DataBoard.vue";
var script$6B = script$6A;
var script$6y = defineComponent({
  name: "DArrowRight"
});
const _hoisted_1$3p = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3o = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688zm-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
}, null, -1);
function render$3h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3p, [
    _hoisted_2$3o
  ]);
}
script$6y.render = render$3h;
script$6y.__file = "packages/components/DArrowRight.vue";
var script$6z = script$6y;
var script$6w = defineComponent({
  name: "Dessert"
});
const _hoisted_1$3o = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3n = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M128 416v-48a144 144 0 0 1 168.64-141.888 224.128 224.128 0 0 1 430.72 0A144 144 0 0 1 896 368v48a384 384 0 0 1-352 382.72V896h-64v-97.28A384 384 0 0 1 128 416zm287.104-32.064h193.792a143.808 143.808 0 0 1 58.88-132.736 160.064 160.064 0 0 0-311.552 0 143.808 143.808 0 0 1 58.88 132.8zm-72.896 0a72 72 0 1 0-140.48 0h140.48zm339.584 0h140.416a72 72 0 1 0-140.48 0zM512 736a320 320 0 0 0 318.4-288.064H193.6A320 320 0 0 0 512 736zM384 896.064h256a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64z"
}, null, -1);
function render$3g(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3o, [
    _hoisted_2$3n
  ]);
}
script$6w.render = render$3g;
script$6w.__file = "packages/components/Dessert.vue";
var script$6x = script$6w;
var script$6u = defineComponent({
  name: "DeleteLocation"
});
const _hoisted_1$3n = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3m = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1);
const _hoisted_3$X = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1);
const _hoisted_4$e = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M384 384h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32z"
}, null, -1);
function render$3f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3n, [
    _hoisted_2$3m,
    _hoisted_3$X,
    _hoisted_4$e
  ]);
}
script$6u.render = render$3f;
script$6u.__file = "packages/components/DeleteLocation.vue";
var script$6v = script$6u;
var script$6s = defineComponent({
  name: "DCaret"
});
const _hoisted_1$3m = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3l = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m512 128 288 320H224l288-320zM224 576h576L512 896 224 576z"
}, null, -1);
function render$3e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3m, [
    _hoisted_2$3l
  ]);
}
script$6s.render = render$3e;
script$6s.__file = "packages/components/DCaret.vue";
var script$6t = script$6s;
var script$6q = defineComponent({
  name: "Delete"
});
const _hoisted_1$3l = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3k = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
}, null, -1);
function render$3d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3l, [
    _hoisted_2$3k
  ]);
}
script$6q.render = render$3d;
script$6q.__file = "packages/components/Delete.vue";
var script$6r = script$6q;
var script$6o = defineComponent({
  name: "Dish"
});
const _hoisted_1$3k = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3j = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M480 257.152V192h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64h-96v65.152A448 448 0 0 1 955.52 768H68.48A448 448 0 0 1 480 257.152zM128 704h768a384 384 0 1 0-768 0zM96 832h832a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64z"
}, null, -1);
function render$3c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3k, [
    _hoisted_2$3j
  ]);
}
script$6o.render = render$3c;
script$6o.__file = "packages/components/Dish.vue";
var script$6p = script$6o;
var script$6m = defineComponent({
  name: "DishDot"
});
const _hoisted_1$3j = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3i = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m384.064 274.56.064-50.688A128 128 0 0 1 512.128 96c70.528 0 127.68 57.152 127.68 127.68v50.752A448.192 448.192 0 0 1 955.392 768H68.544A448.192 448.192 0 0 1 384 274.56zM96 832h832a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64zm32-128h768a384 384 0 1 0-768 0zm447.808-448v-32.32a63.68 63.68 0 0 0-63.68-63.68 64 64 0 0 0-64 63.936V256h127.68z"
}, null, -1);
function render$3b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3j, [
    _hoisted_2$3i
  ]);
}
script$6m.render = render$3b;
script$6m.__file = "packages/components/DishDot.vue";
var script$6n = script$6m;
var script$6k = defineComponent({
  name: "DocumentCopy"
});
const _hoisted_1$3i = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3h = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M128 320v576h576V320H128zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zM960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z"
}, null, -1);
function render$3a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3i, [
    _hoisted_2$3h
  ]);
}
script$6k.render = render$3a;
script$6k.__file = "packages/components/DocumentCopy.vue";
var script$6l = script$6k;
var script$6i = defineComponent({
  name: "Discount"
});
const _hoisted_1$3h = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3g = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M224 704h576V318.336L552.512 115.84a64 64 0 0 0-81.024 0L224 318.336V704zm0 64v128h576V768H224zM593.024 66.304l259.2 212.096A32 32 0 0 1 864 303.168V928a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V303.168a32 32 0 0 1 11.712-24.768l259.2-212.096a128 128 0 0 1 162.112 0z"
}, null, -1);
const _hoisted_3$W = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1);
function render$39(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3h, [
    _hoisted_2$3g,
    _hoisted_3$W
  ]);
}
script$6i.render = render$39;
script$6i.__file = "packages/components/Discount.vue";
var script$6j = script$6i;
var script$6g = defineComponent({
  name: "DocumentChecked"
});
const _hoisted_1$3g = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3f = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm318.4 582.144 180.992-180.992L704.64 510.4 478.4 736.64 320 578.304l45.248-45.312L478.4 646.144z"
}, null, -1);
function render$38(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3g, [
    _hoisted_2$3f
  ]);
}
script$6g.render = render$38;
script$6g.__file = "packages/components/DocumentChecked.vue";
var script$6h = script$6g;
var script$6e = defineComponent({
  name: "DocumentAdd"
});
const _hoisted_1$3f = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3e = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm320 512V448h64v128h128v64H544v128h-64V640H352v-64h128z"
}, null, -1);
function render$37(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3f, [
    _hoisted_2$3e
  ]);
}
script$6e.render = render$37;
script$6e.__file = "packages/components/DocumentAdd.vue";
var script$6f = script$6e;
var script$6c = defineComponent({
  name: "DocumentRemove"
});
const _hoisted_1$3e = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3d = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm192 512h320v64H352v-64z"
}, null, -1);
function render$36(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3e, [
    _hoisted_2$3d
  ]);
}
script$6c.render = render$36;
script$6c.__file = "packages/components/DocumentRemove.vue";
var script$6d = script$6c;
var script$6a = defineComponent({
  name: "DataAnalysis"
});
const _hoisted_1$3d = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3c = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m665.216 768 110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32H665.216zM832 192H192v512h640V192zM352 448a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0v-64a32 32 0 0 1 32-32zm160-64a32 32 0 0 1 32 32v128a32 32 0 0 1-64 0V416a32 32 0 0 1 32-32zm160-64a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V352a32 32 0 0 1 32-32z"
}, null, -1);
function render$35(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3d, [
    _hoisted_2$3c
  ]);
}
script$6a.render = render$35;
script$6a.__file = "packages/components/DataAnalysis.vue";
var script$6b = script$6a;
var script$68 = defineComponent({
  name: "DeleteFilled"
});
const _hoisted_1$3c = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3b = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M352 192V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64H96a32 32 0 0 1 0-64h256zm64 0h192v-64H416v64zM192 960a32 32 0 0 1-32-32V256h704v672a32 32 0 0 1-32 32H192zm224-192a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32zm192 0a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32z"
}, null, -1);
function render$34(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3c, [
    _hoisted_2$3b
  ]);
}
script$68.render = render$34;
script$68.__file = "packages/components/DeleteFilled.vue";
var script$69 = script$68;
var script$66 = defineComponent({
  name: "Download"
});
const _hoisted_1$3b = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3a = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64v450.304z"
}, null, -1);
function render$33(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3b, [
    _hoisted_2$3a
  ]);
}
script$66.render = render$33;
script$66.__file = "packages/components/Download.vue";
var script$67 = script$66;
var script$64 = defineComponent({
  name: "Drizzling"
});
const _hoisted_1$3a = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$39 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m739.328 291.328-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0 0 35.776-380.672zM959.552 480a256 256 0 0 1-256 256h-400A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 959.552 480zM288 800h64v64h-64v-64zm192 0h64v64h-64v-64zm-96 96h64v64h-64v-64zm192 0h64v64h-64v-64zm96-96h64v64h-64v-64z"
}, null, -1);
function render$32(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3a, [
    _hoisted_2$39
  ]);
}
script$64.render = render$32;
script$64.__file = "packages/components/Drizzling.vue";
var script$65 = script$64;
var script$62 = defineComponent({
  name: "Eleme"
});
const _hoisted_1$39 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$38 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M300.032 188.8c174.72-113.28 408-63.36 522.24 109.44 5.76 10.56 11.52 20.16 17.28 30.72v.96a22.4 22.4 0 0 1-7.68 26.88l-352.32 228.48c-9.6 6.72-22.08 3.84-28.8-5.76l-18.24-27.84a54.336 54.336 0 0 1 16.32-74.88l225.6-146.88c9.6-6.72 12.48-19.2 5.76-28.8-.96-1.92-1.92-3.84-3.84-4.8a267.84 267.84 0 0 0-315.84-17.28c-123.84 81.6-159.36 247.68-78.72 371.52a268.096 268.096 0 0 0 370.56 78.72 54.336 54.336 0 0 1 74.88 16.32l17.28 26.88c5.76 9.6 3.84 21.12-4.8 27.84-8.64 7.68-18.24 14.4-28.8 21.12a377.92 377.92 0 0 1-522.24-110.4c-113.28-174.72-63.36-408 111.36-522.24zm526.08 305.28a22.336 22.336 0 0 1 28.8 5.76l23.04 35.52a63.232 63.232 0 0 1-18.24 87.36l-35.52 23.04c-9.6 6.72-22.08 3.84-28.8-5.76l-46.08-71.04c-6.72-9.6-3.84-22.08 5.76-28.8l71.04-46.08z"
}, null, -1);
function render$31(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$39, [
    _hoisted_2$38
  ]);
}
script$62.render = render$31;
script$62.__file = "packages/components/Eleme.vue";
var script$63 = script$62;
var script$60 = defineComponent({
  name: "ElemeFilled"
});
const _hoisted_1$38 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$37 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M176 64h672c61.824 0 112 50.176 112 112v672a112 112 0 0 1-112 112H176A112 112 0 0 1 64 848V176c0-61.824 50.176-112 112-112zm150.528 173.568c-152.896 99.968-196.544 304.064-97.408 456.96a330.688 330.688 0 0 0 456.96 96.64c9.216-5.888 17.6-11.776 25.152-18.56a18.24 18.24 0 0 0 4.224-24.32L700.352 724.8a47.552 47.552 0 0 0-65.536-14.272A234.56 234.56 0 0 1 310.592 641.6C240 533.248 271.104 387.968 379.456 316.48a234.304 234.304 0 0 1 276.352 15.168c1.664.832 2.56 2.56 3.392 4.224 5.888 8.384 3.328 19.328-5.12 25.216L456.832 489.6a47.552 47.552 0 0 0-14.336 65.472l16 24.384c5.888 8.384 16.768 10.88 25.216 5.056l308.224-199.936a19.584 19.584 0 0 0 6.72-23.488v-.896c-4.992-9.216-10.048-17.6-15.104-26.88-99.968-151.168-304.064-194.88-456.96-95.744zM786.88 504.704l-62.208 40.32c-8.32 5.888-10.88 16.768-4.992 25.216L760 632.32c5.888 8.448 16.768 11.008 25.152 5.12l31.104-20.16a55.36 55.36 0 0 0 16-76.48l-20.224-31.04a19.52 19.52 0 0 0-25.152-5.12z"
}, null, -1);
function render$30(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$38, [
    _hoisted_2$37
  ]);
}
script$60.render = render$30;
script$60.__file = "packages/components/ElemeFilled.vue";
var script$61 = script$60;
var script$5_ = defineComponent({
  name: "Edit"
});
const _hoisted_1$37 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$36 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"
}, null, -1);
const _hoisted_3$V = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"
}, null, -1);
function render$2$(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$37, [
    _hoisted_2$36,
    _hoisted_3$V
  ]);
}
script$5_.render = render$2$;
script$5_.__file = "packages/components/Edit.vue";
var script$5$ = script$5_;
var script$5Y = defineComponent({
  name: "Failed"
});
const _hoisted_1$36 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$35 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m557.248 608 135.744-135.744-45.248-45.248-135.68 135.744-135.808-135.68-45.248 45.184L466.752 608l-135.68 135.68 45.184 45.312L512 653.248l135.744 135.744 45.248-45.248L557.312 608zM704 192h160v736H160V192h160v64h384v-64zm-320 0V96h256v96H384z"
}, null, -1);
function render$2_(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$36, [
    _hoisted_2$35
  ]);
}
script$5Y.render = render$2_;
script$5Y.__file = "packages/components/Failed.vue";
var script$5Z = script$5Y;
var script$5W = defineComponent({
  name: "Expand"
});
const _hoisted_1$35 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$34 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352 192 160-192 128V352z"
}, null, -1);
function render$2Z(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$35, [
    _hoisted_2$34
  ]);
}
script$5W.render = render$2Z;
script$5W.__file = "packages/components/Expand.vue";
var script$5X = script$5W;
var script$5U = defineComponent({
  name: "Female"
});
const _hoisted_1$34 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$33 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 640a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"
}, null, -1);
const _hoisted_3$U = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 640q32 0 32 32v256q0 32-32 32t-32-32V672q0-32 32-32z"
}, null, -1);
const _hoisted_4$d = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M352 800h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32z"
}, null, -1);
function render$2Y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$34, [
    _hoisted_2$33,
    _hoisted_3$U,
    _hoisted_4$d
  ]);
}
script$5U.render = render$2Y;
script$5U.__file = "packages/components/Female.vue";
var script$5V = script$5U;
var script$5S = defineComponent({
  name: "Document"
});
const _hoisted_1$33 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$32 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z"
}, null, -1);
function render$2X(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$33, [
    _hoisted_2$32
  ]);
}
script$5S.render = render$2X;
script$5S.__file = "packages/components/Document.vue";
var script$5T = script$5S;
var script$5Q = defineComponent({
  name: "Film"
});
const _hoisted_1$32 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$31 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_3$T = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M320 288V128h64v352h256V128h64v160h160v64H704v128h160v64H704v128h160v64H704v160h-64V544H384v352h-64V736H128v-64h192V544H128v-64h192V352H128v-64h192z"
}, null, -1);
function render$2W(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$32, [
    _hoisted_2$31,
    _hoisted_3$T
  ]);
}
script$5Q.render = render$2W;
script$5Q.__file = "packages/components/Film.vue";
var script$5R = script$5Q;
var script$5O = defineComponent({
  name: "Finished"
});
const _hoisted_1$31 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$30 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M280.768 753.728 691.456 167.04a32 32 0 1 1 52.416 36.672L314.24 817.472a32 32 0 0 1-45.44 7.296l-230.4-172.8a32 32 0 0 1 38.4-51.2l203.968 152.96zM736 448a32 32 0 1 1 0-64h192a32 32 0 1 1 0 64H736zM608 640a32 32 0 0 1 0-64h319.936a32 32 0 1 1 0 64H608zM480 832a32 32 0 1 1 0-64h447.936a32 32 0 1 1 0 64H480z"
}, null, -1);
function render$2V(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$31, [
    _hoisted_2$30
  ]);
}
script$5O.render = render$2V;
script$5O.__file = "packages/components/Finished.vue";
var script$5P = script$5O;
var script$5M = defineComponent({
  name: "DataLine"
});
const _hoisted_1$30 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2$ = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M359.168 768H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32H665.216l110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192zM832 192H192v512h640V192zM342.656 534.656a32 32 0 1 1-45.312-45.312L444.992 341.76l125.44 94.08L679.04 300.032a32 32 0 1 1 49.92 39.936L581.632 524.224 451.008 426.24 342.656 534.592z"
}, null, -1);
function render$2U(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$30, [
    _hoisted_2$2$
  ]);
}
script$5M.render = render$2U;
script$5M.__file = "packages/components/DataLine.vue";
var script$5N = script$5M;
var script$5K = defineComponent({
  name: "Filter"
});
const _hoisted_1$2$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2_ = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M384 523.392V928a32 32 0 0 0 46.336 28.608l192-96A32 32 0 0 0 640 832V523.392l280.768-343.104a32 32 0 1 0-49.536-40.576l-288 352A32 32 0 0 0 576 512v300.224l-128 64V512a32 32 0 0 0-7.232-20.288L195.52 192H704a32 32 0 1 0 0-64H128a32 32 0 0 0-24.768 52.288L384 523.392z"
}, null, -1);
function render$2T(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2$, [
    _hoisted_2$2_
  ]);
}
script$5K.render = render$2T;
script$5K.__file = "packages/components/Filter.vue";
var script$5L = script$5K;
var script$5I = defineComponent({
  name: "Flag"
});
const _hoisted_1$2_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2Z = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M288 128h608L736 384l160 256H288v320h-96V64h96v64z"
}, null, -1);
function render$2S(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2_, [
    _hoisted_2$2Z
  ]);
}
script$5I.render = render$2S;
script$5I.__file = "packages/components/Flag.vue";
var script$5J = script$5I;
var script$5G = defineComponent({
  name: "FolderChecked"
});
const _hoisted_1$2Z = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2Y = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm414.08 502.144 180.992-180.992L736.32 494.4 510.08 720.64l-158.4-158.336 45.248-45.312L510.08 630.144z"
}, null, -1);
function render$2R(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2Z, [
    _hoisted_2$2Y
  ]);
}
script$5G.render = render$2R;
script$5G.__file = "packages/components/FolderChecked.vue";
var script$5H = script$5G;
var script$5E = defineComponent({
  name: "FirstAidKit"
});
const _hoisted_1$2Y = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2X = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M192 256a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H192zm0-64h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128z"
}, null, -1);
const _hoisted_3$S = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M544 512h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96zM352 128v64h320v-64H352zm-32-64h384a32 32 0 0 1 32 32v128a32 32 0 0 1-32 32H320a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1);
function render$2Q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2Y, [
    _hoisted_2$2X,
    _hoisted_3$S
  ]);
}
script$5E.render = render$2Q;
script$5E.__file = "packages/components/FirstAidKit.vue";
var script$5F = script$5E;
var script$5C = defineComponent({
  name: "FolderAdd"
});
const _hoisted_1$2X = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2W = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm384 416V416h64v128h128v64H544v128h-64V608H352v-64h128z"
}, null, -1);
function render$2P(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2X, [
    _hoisted_2$2W
  ]);
}
script$5C.render = render$2P;
script$5C.__file = "packages/components/FolderAdd.vue";
var script$5D = script$5C;
var script$5A = defineComponent({
  name: "Fold"
});
const _hoisted_1$2W = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2V = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M896 192H128v128h768V192zm0 256H384v128h512V448zm0 256H128v128h768V704zM320 384 128 512l192 128V384z"
}, null, -1);
function render$2O(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2W, [
    _hoisted_2$2V
  ]);
}
script$5A.render = render$2O;
script$5A.__file = "packages/components/Fold.vue";
var script$5B = script$5A;
var script$5y = defineComponent({
  name: "FolderDelete"
});
const _hoisted_1$2V = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2U = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm370.752 448-90.496-90.496 45.248-45.248L512 530.752l90.496-90.496 45.248 45.248L557.248 576l90.496 90.496-45.248 45.248L512 621.248l-90.496 90.496-45.248-45.248L466.752 576z"
}, null, -1);
function render$2N(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2V, [
    _hoisted_2$2U
  ]);
}
script$5y.render = render$2N;
script$5y.__file = "packages/components/FolderDelete.vue";
var script$5z = script$5y;
var script$5w = defineComponent({
  name: "DocumentDelete"
});
const _hoisted_1$2U = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2T = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm308.992 546.304-90.496-90.624 45.248-45.248 90.56 90.496 90.496-90.432 45.248 45.248-90.496 90.56 90.496 90.496-45.248 45.248-90.496-90.496-90.56 90.496-45.248-45.248 90.496-90.496z"
}, null, -1);
function render$2M(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2U, [
    _hoisted_2$2T
  ]);
}
script$5w.render = render$2M;
script$5w.__file = "packages/components/DocumentDelete.vue";
var script$5x = script$5w;
var script$5u = defineComponent({
  name: "Folder"
});
const _hoisted_1$2T = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2S = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32z"
}, null, -1);
function render$2L(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2T, [
    _hoisted_2$2S
  ]);
}
script$5u.render = render$2L;
script$5u.__file = "packages/components/Folder.vue";
var script$5v = script$5u;
var script$5s = defineComponent({
  name: "Food"
});
const _hoisted_1$2S = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2R = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M128 352.576V352a288 288 0 0 1 491.072-204.224 192 192 0 0 1 274.24 204.48 64 64 0 0 1 57.216 74.24C921.6 600.512 850.048 710.656 736 756.992V800a96 96 0 0 1-96 96H384a96 96 0 0 1-96-96v-43.008c-114.048-46.336-185.6-156.48-214.528-330.496A64 64 0 0 1 128 352.64zm64-.576h64a160 160 0 0 1 320 0h64a224 224 0 0 0-448 0zm128 0h192a96 96 0 0 0-192 0zm439.424 0h68.544A128.256 128.256 0 0 0 704 192c-15.36 0-29.952 2.688-43.52 7.616 11.328 18.176 20.672 37.76 27.84 58.304A64.128 64.128 0 0 1 759.424 352zM672 768H352v32a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32v-32zm-342.528-64h365.056c101.504-32.64 165.76-124.928 192.896-288H136.576c27.136 163.072 91.392 255.36 192.896 288z"
}, null, -1);
function render$2K(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2S, [
    _hoisted_2$2R
  ]);
}
script$5s.render = render$2K;
script$5s.__file = "packages/components/Food.vue";
var script$5t = script$5s;
var script$5q = defineComponent({
  name: "FolderOpened"
});
const _hoisted_1$2R = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2Q = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M878.08 448H241.92l-96 384h636.16l96-384zM832 384v-64H485.76L357.504 192H128v448l57.92-231.744A32 32 0 0 1 216.96 384H832zm-24.96 512H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h287.872l128.384 128H864a32 32 0 0 1 32 32v96h23.04a32 32 0 0 1 31.04 39.744l-112 448A32 32 0 0 1 807.04 896z"
}, null, -1);
function render$2J(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2R, [
    _hoisted_2$2Q
  ]);
}
script$5q.render = render$2J;
script$5q.__file = "packages/components/FolderOpened.vue";
var script$5r = script$5q;
var script$5o = defineComponent({
  name: "Football"
});
const _hoisted_1$2Q = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2P = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896zm0-64a384 384 0 1 0 0-768 384 384 0 0 0 0 768z"
}, null, -1);
const _hoisted_3$R = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M186.816 268.288c16-16.384 31.616-31.744 46.976-46.08 17.472 30.656 39.808 58.112 65.984 81.28l-32.512 56.448a385.984 385.984 0 0 1-80.448-91.648zm653.696-5.312a385.92 385.92 0 0 1-83.776 96.96l-32.512-56.384a322.923 322.923 0 0 0 68.48-85.76c15.552 14.08 31.488 29.12 47.808 45.184zM465.984 445.248l11.136-63.104a323.584 323.584 0 0 0 69.76 0l11.136 63.104a387.968 387.968 0 0 1-92.032 0zm-62.72-12.8A381.824 381.824 0 0 1 320 396.544l32-55.424a319.885 319.885 0 0 0 62.464 27.712l-11.2 63.488zm300.8-35.84a381.824 381.824 0 0 1-83.328 35.84l-11.2-63.552A319.885 319.885 0 0 0 672 341.184l32 55.424zm-520.768 364.8a385.92 385.92 0 0 1 83.968-97.28l32.512 56.32c-26.88 23.936-49.856 52.352-67.52 84.032-16-13.44-32.32-27.712-48.96-43.072zm657.536.128a1442.759 1442.759 0 0 1-49.024 43.072 321.408 321.408 0 0 0-67.584-84.16l32.512-56.32c33.216 27.456 61.696 60.352 84.096 97.408zM465.92 578.752a387.968 387.968 0 0 1 92.032 0l-11.136 63.104a323.584 323.584 0 0 0-69.76 0l-11.136-63.104zm-62.72 12.8 11.2 63.552a319.885 319.885 0 0 0-62.464 27.712L320 627.392a381.824 381.824 0 0 1 83.264-35.84zm300.8 35.84-32 55.424a318.272 318.272 0 0 0-62.528-27.712l11.2-63.488c29.44 8.64 57.28 20.736 83.264 35.776z"
}, null, -1);
function render$2I(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2Q, [
    _hoisted_2$2P,
    _hoisted_3$R
  ]);
}
script$5o.render = render$2I;
script$5o.__file = "packages/components/Football.vue";
var script$5p = script$5o;
var script$5m = defineComponent({
  name: "FolderRemove"
});
const _hoisted_1$2P = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2O = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm256 416h320v64H352v-64z"
}, null, -1);
function render$2H(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2P, [
    _hoisted_2$2O
  ]);
}
script$5m.render = render$2H;
script$5m.__file = "packages/components/FolderRemove.vue";
var script$5n = script$5m;
var script$5k = defineComponent({
  name: "Fries"
});
const _hoisted_1$2O = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2N = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M608 224v-64a32 32 0 0 0-64 0v336h26.88A64 64 0 0 0 608 484.096V224zm101.12 160A64 64 0 0 0 672 395.904V384h64V224a32 32 0 1 0-64 0v160h37.12zm74.88 0a92.928 92.928 0 0 1 91.328 110.08l-60.672 323.584A96 96 0 0 1 720.32 896H303.68a96 96 0 0 1-94.336-78.336L148.672 494.08A92.928 92.928 0 0 1 240 384h-16V224a96 96 0 0 1 188.608-25.28A95.744 95.744 0 0 1 480 197.44V160a96 96 0 0 1 188.608-25.28A96 96 0 0 1 800 224v160h-16zM670.784 512a128 128 0 0 1-99.904 48H453.12a128 128 0 0 1-99.84-48H352v-1.536a128.128 128.128 0 0 1-9.984-14.976L314.88 448H240a28.928 28.928 0 0 0-28.48 34.304L241.088 640h541.824l29.568-157.696A28.928 28.928 0 0 0 784 448h-74.88l-27.136 47.488A132.405 132.405 0 0 1 672 510.464V512h-1.216zM480 288a32 32 0 0 0-64 0v196.096A64 64 0 0 0 453.12 496H480V288zm-128 96V224a32 32 0 0 0-64 0v160h64-37.12A64 64 0 0 1 352 395.904zm-98.88 320 19.072 101.888A32 32 0 0 0 303.68 832h416.64a32 32 0 0 0 31.488-26.112L770.88 704H253.12z"
}, null, -1);
function render$2G(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2O, [
    _hoisted_2$2N
  ]);
}
script$5k.render = render$2G;
script$5k.__file = "packages/components/Fries.vue";
var script$5l = script$5k;
var script$5i = defineComponent({
  name: "FullScreen"
});
const _hoisted_1$2N = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2M = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"
}, null, -1);
function render$2F(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2N, [
    _hoisted_2$2M
  ]);
}
script$5i.render = render$2F;
script$5i.__file = "packages/components/FullScreen.vue";
var script$5j = script$5i;
var script$5g = defineComponent({
  name: "ForkSpoon"
});
const _hoisted_1$2M = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2L = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M256 410.304V96a32 32 0 0 1 64 0v314.304a96 96 0 0 0 64-90.56V96a32 32 0 0 1 64 0v223.744a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.544a160 160 0 0 1-128-156.8V96a32 32 0 0 1 64 0v223.744a96 96 0 0 0 64 90.56zM672 572.48C581.184 552.128 512 446.848 512 320c0-141.44 85.952-256 192-256s192 114.56 192 256c0 126.848-69.184 232.128-160 252.48V928a32 32 0 1 1-64 0V572.48zM704 512c66.048 0 128-82.56 128-192s-61.952-192-128-192-128 82.56-128 192 61.952 192 128 192z"
}, null, -1);
function render$2E(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2M, [
    _hoisted_2$2L
  ]);
}
script$5g.render = render$2E;
script$5g.__file = "packages/components/ForkSpoon.vue";
var script$5h = script$5g;
var script$5e = defineComponent({
  name: "Goblet"
});
const _hoisted_1$2L = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2K = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M544 638.4V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.4A320 320 0 0 1 192 320c0-85.632 21.312-170.944 64-256h512c42.688 64.32 64 149.632 64 256a320 320 0 0 1-288 318.4zM256 320a256 256 0 1 0 512 0c0-78.592-12.608-142.4-36.928-192h-434.24C269.504 192.384 256 256.256 256 320z"
}, null, -1);
function render$2D(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2L, [
    _hoisted_2$2K
  ]);
}
script$5e.render = render$2D;
script$5e.__file = "packages/components/Goblet.vue";
var script$5f = script$5e;
var script$5c = defineComponent({
  name: "GobletFull"
});
const _hoisted_1$2K = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2J = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M256 320h512c0-78.592-12.608-142.4-36.928-192h-434.24C269.504 192.384 256 256.256 256 320zm503.936 64H264.064a256.128 256.128 0 0 0 495.872 0zM544 638.4V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.4A320 320 0 0 1 192 320c0-85.632 21.312-170.944 64-256h512c42.688 64.32 64 149.632 64 256a320 320 0 0 1-288 318.4z"
}, null, -1);
function render$2C(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2K, [
    _hoisted_2$2J
  ]);
}
script$5c.render = render$2C;
script$5c.__file = "packages/components/GobletFull.vue";
var script$5d = script$5c;
var script$5a = defineComponent({
  name: "Goods"
});
const _hoisted_1$2J = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2I = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M320 288v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4h131.072a32 32 0 0 1 31.808 28.8l57.6 576a32 32 0 0 1-31.808 35.2H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320zm64 0h256v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4zm-64 64H217.92l-51.2 512h690.56l-51.264-512H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96z"
}, null, -1);
function render$2B(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2J, [
    _hoisted_2$2I
  ]);
}
script$5a.render = render$2B;
script$5a.__file = "packages/components/Goods.vue";
var script$5b = script$5a;
var script$58 = defineComponent({
  name: "GobletSquareFull"
});
const _hoisted_1$2I = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2H = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M256 270.912c10.048 6.72 22.464 14.912 28.992 18.624a220.16 220.16 0 0 0 114.752 30.72c30.592 0 49.408-9.472 91.072-41.152l.64-.448c52.928-40.32 82.368-55.04 132.288-54.656 55.552.448 99.584 20.8 142.72 57.408l1.536 1.28V128H256v142.912zm.96 76.288C266.368 482.176 346.88 575.872 512 576c157.44.064 237.952-85.056 253.248-209.984a952.32 952.32 0 0 1-40.192-35.712c-32.704-27.776-63.36-41.92-101.888-42.24-31.552-.256-50.624 9.28-93.12 41.6l-.576.448c-52.096 39.616-81.024 54.208-129.792 54.208-54.784 0-100.48-13.376-142.784-37.056zM480 638.848C250.624 623.424 192 442.496 192 319.68V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v224c0 122.816-58.624 303.68-288 318.912V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.848z"
}, null, -1);
function render$2A(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2I, [
    _hoisted_2$2H
  ]);
}
script$58.render = render$2A;
script$58.__file = "packages/components/GobletSquareFull.vue";
var script$59 = script$58;
var script$56 = defineComponent({
  name: "GoodsFilled"
});
const _hoisted_1$2H = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2G = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M192 352h640l64 544H128l64-544zm128 224h64V448h-64v128zm320 0h64V448h-64v128zM384 288h-64a192 192 0 1 1 384 0h-64a128 128 0 1 0-256 0z"
}, null, -1);
function render$2z(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2H, [
    _hoisted_2$2G
  ]);
}
script$56.render = render$2z;
script$56.__file = "packages/components/GoodsFilled.vue";
var script$57 = script$56;
var script$54 = defineComponent({
  name: "Grid"
});
const _hoisted_1$2G = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2F = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M640 384v256H384V384h256zm64 0h192v256H704V384zm-64 512H384V704h256v192zm64 0V704h192v192H704zm-64-768v192H384V128h256zm64 0h192v192H704V128zM320 384v256H128V384h192zm0 512H128V704h192v192zm0-768v192H128V128h192z"
}, null, -1);
function render$2y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2G, [
    _hoisted_2$2F
  ]);
}
script$54.render = render$2y;
script$54.__file = "packages/components/Grid.vue";
var script$55 = script$54;
var script$52 = defineComponent({
  name: "Grape"
});
const _hoisted_1$2F = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2E = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M544 195.2a160 160 0 0 1 96 60.8 160 160 0 1 1 146.24 254.976 160 160 0 0 1-128 224 160 160 0 1 1-292.48 0 160 160 0 0 1-128-224A160 160 0 1 1 384 256a160 160 0 0 1 96-60.8V128h-64a32 32 0 0 1 0-64h192a32 32 0 0 1 0 64h-64v67.2zM512 448a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm-256 0a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128 224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128 224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128-224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128-224a96 96 0 1 0 0-192 96 96 0 0 0 0 192z"
}, null, -1);
function render$2x(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2F, [
    _hoisted_2$2E
  ]);
}
script$52.render = render$2x;
script$52.__file = "packages/components/Grape.vue";
var script$53 = script$52;
var script$50 = defineComponent({
  name: "GobletSquare"
});
const _hoisted_1$2E = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2D = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M544 638.912V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.848C250.624 623.424 192 442.496 192 319.68V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v224c0 122.816-58.624 303.68-288 318.912zM256 319.68c0 149.568 80 256.192 256 256.256C688.128 576 768 469.568 768 320V128H256v191.68z"
}, null, -1);
function render$2w(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2E, [
    _hoisted_2$2D
  ]);
}
script$50.render = render$2w;
script$50.__file = "packages/components/GobletSquare.vue";
var script$51 = script$50;
var script$4_ = defineComponent({
  name: "Headset"
});
const _hoisted_1$2D = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2C = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M896 529.152V512a384 384 0 1 0-768 0v17.152A128 128 0 0 1 320 640v128a128 128 0 1 1-256 0V512a448 448 0 1 1 896 0v256a128 128 0 1 1-256 0V640a128 128 0 0 1 192-110.848zM896 640a64 64 0 0 0-128 0v128a64 64 0 0 0 128 0V640zm-768 0v128a64 64 0 0 0 128 0V640a64 64 0 1 0-128 0z"
}, null, -1);
function render$2v(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2D, [
    _hoisted_2$2C
  ]);
}
script$4_.render = render$2v;
script$4_.__file = "packages/components/Headset.vue";
var script$4$ = script$4_;
var script$4Y = defineComponent({
  name: "Comment"
});
const _hoisted_1$2C = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2B = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M736 504a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zM128 128v640h192v160l224-160h352V128H128z"
}, null, -1);
function render$2u(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2C, [
    _hoisted_2$2B
  ]);
}
script$4Y.render = render$2u;
script$4Y.__file = "packages/components/Comment.vue";
var script$4Z = script$4Y;
var script$4W = defineComponent({
  name: "HelpFilled"
});
const _hoisted_1$2B = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2A = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M926.784 480H701.312A192.512 192.512 0 0 0 544 322.688V97.216A416.064 416.064 0 0 1 926.784 480zm0 64A416.064 416.064 0 0 1 544 926.784V701.312A192.512 192.512 0 0 0 701.312 544h225.472zM97.28 544h225.472A192.512 192.512 0 0 0 480 701.312v225.472A416.064 416.064 0 0 1 97.216 544zm0-64A416.064 416.064 0 0 1 480 97.216v225.472A192.512 192.512 0 0 0 322.688 480H97.216z"
}, null, -1);
function render$2t(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2B, [
    _hoisted_2$2A
  ]);
}
script$4W.render = render$2t;
script$4W.__file = "packages/components/HelpFilled.vue";
var script$4X = script$4W;
var script$4U = defineComponent({
  name: "Histogram"
});
const _hoisted_1$2A = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2z = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M416 896V128h192v768H416zm-288 0V448h192v448H128zm576 0V320h192v576H704z"
}, null, -1);
function render$2s(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2A, [
    _hoisted_2$2z
  ]);
}
script$4U.render = render$2s;
script$4U.__file = "packages/components/Histogram.vue";
var script$4V = script$4U;
var script$4S = defineComponent({
  name: "HomeFilled"
});
const _hoisted_1$2z = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2y = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z"
}, null, -1);
function render$2r(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2z, [
    _hoisted_2$2y
  ]);
}
script$4S.render = render$2r;
script$4S.__file = "packages/components/HomeFilled.vue";
var script$4T = script$4S;
var script$4Q = defineComponent({
  name: "Help"
});
const _hoisted_1$2y = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2x = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m759.936 805.248-90.944-91.008A254.912 254.912 0 0 1 512 768a254.912 254.912 0 0 1-156.992-53.76l-90.944 91.008A382.464 382.464 0 0 0 512 896c94.528 0 181.12-34.176 247.936-90.752zm45.312-45.312A382.464 382.464 0 0 0 896 512c0-94.528-34.176-181.12-90.752-247.936l-91.008 90.944C747.904 398.4 768 452.864 768 512c0 59.136-20.096 113.6-53.76 156.992l91.008 90.944zm-45.312-541.184A382.464 382.464 0 0 0 512 128c-94.528 0-181.12 34.176-247.936 90.752l90.944 91.008A254.912 254.912 0 0 1 512 256c59.136 0 113.6 20.096 156.992 53.76l90.944-91.008zm-541.184 45.312A382.464 382.464 0 0 0 128 512c0 94.528 34.176 181.12 90.752 247.936l91.008-90.944A254.912 254.912 0 0 1 256 512c0-59.136 20.096-113.6 53.76-156.992l-91.008-90.944zm417.28 394.496a194.56 194.56 0 0 0 22.528-22.528C686.912 602.56 704 559.232 704 512a191.232 191.232 0 0 0-67.968-146.56A191.296 191.296 0 0 0 512 320a191.232 191.232 0 0 0-146.56 67.968C337.088 421.44 320 464.768 320 512a191.232 191.232 0 0 0 67.968 146.56C421.44 686.912 464.768 704 512 704c47.296 0 90.56-17.088 124.032-45.44zM512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
function render$2q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2y, [
    _hoisted_2$2x
  ]);
}
script$4Q.render = render$2q;
script$4Q.__file = "packages/components/Help.vue";
var script$4R = script$4Q;
var script$4O = defineComponent({
  name: "House"
});
const _hoisted_1$2x = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2w = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M192 413.952V896h640V413.952L512 147.328 192 413.952zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576z"
}, null, -1);
function render$2p(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2x, [
    _hoisted_2$2w
  ]);
}
script$4O.render = render$2p;
script$4O.__file = "packages/components/House.vue";
var script$4P = script$4O;
var script$4M = defineComponent({
  name: "IceCreamRound"
});
const _hoisted_1$2w = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2v = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m308.352 489.344 226.304 226.304a32 32 0 0 0 45.248 0L783.552 512A192 192 0 1 0 512 240.448L308.352 444.16a32 32 0 0 0 0 45.248zm135.744 226.304L308.352 851.392a96 96 0 0 1-135.744-135.744l135.744-135.744-45.248-45.248a96 96 0 0 1 0-135.808L466.752 195.2A256 256 0 0 1 828.8 557.248L625.152 760.96a96 96 0 0 1-135.808 0l-45.248-45.248zM398.848 670.4 353.6 625.152 217.856 760.896a32 32 0 0 0 45.248 45.248L398.848 670.4zm248.96-384.64a32 32 0 0 1 0 45.248L466.624 512a32 32 0 1 1-45.184-45.248l180.992-181.056a32 32 0 0 1 45.248 0zm90.496 90.496a32 32 0 0 1 0 45.248L557.248 602.496A32 32 0 1 1 512 557.248l180.992-180.992a32 32 0 0 1 45.312 0z"
}, null, -1);
function render$2o(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2w, [
    _hoisted_2$2v
  ]);
}
script$4M.render = render$2o;
script$4M.__file = "packages/components/IceCreamRound.vue";
var script$4N = script$4M;
var script$4K = defineComponent({
  name: "HotWater"
});
const _hoisted_1$2v = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2u = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M273.067 477.867h477.866V409.6H273.067v68.267zm0 68.266v51.2A187.733 187.733 0 0 0 460.8 785.067h102.4a187.733 187.733 0 0 0 187.733-187.734v-51.2H273.067zm-34.134-204.8h546.134a34.133 34.133 0 0 1 34.133 34.134v221.866a256 256 0 0 1-256 256H460.8a256 256 0 0 1-256-256V375.467a34.133 34.133 0 0 1 34.133-34.134zM512 34.133a34.133 34.133 0 0 1 34.133 34.134v170.666a34.133 34.133 0 0 1-68.266 0V68.267A34.133 34.133 0 0 1 512 34.133zM375.467 102.4a34.133 34.133 0 0 1 34.133 34.133v102.4a34.133 34.133 0 0 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.134-34.133zm273.066 0a34.133 34.133 0 0 1 34.134 34.133v102.4a34.133 34.133 0 1 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.133-34.133zM170.667 921.668h682.666a34.133 34.133 0 1 1 0 68.267H170.667a34.133 34.133 0 1 1 0-68.267z"
}, null, -1);
function render$2n(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2v, [
    _hoisted_2$2u
  ]);
}
script$4K.render = render$2n;
script$4K.__file = "packages/components/HotWater.vue";
var script$4L = script$4K;
var script$4I = defineComponent({
  name: "IceCream"
});
const _hoisted_1$2u = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2t = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M128.64 448a208 208 0 0 1 193.536-191.552 224 224 0 0 1 445.248 15.488A208.128 208.128 0 0 1 894.784 448H896L548.8 983.68a32 32 0 0 1-53.248.704L128 448h.64zm64.256 0h286.208a144 144 0 0 0-286.208 0zm351.36 0h286.272a144 144 0 0 0-286.272 0zm-294.848 64 271.808 396.608L778.24 512H249.408zM511.68 352.64a207.872 207.872 0 0 1 189.184-96.192 160 160 0 0 0-314.752 5.632c52.608 12.992 97.28 46.08 125.568 90.56z"
}, null, -1);
function render$2m(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2u, [
    _hoisted_2$2t
  ]);
}
script$4I.render = render$2m;
script$4I.__file = "packages/components/IceCream.vue";
var script$4J = script$4I;
var script$4G = defineComponent({
  name: "Files"
});
const _hoisted_1$2t = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2s = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M128 384v448h768V384H128zm-32-64h832a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32zm64-128h704v64H160zm96-128h512v64H256z"
}, null, -1);
function render$2l(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2t, [
    _hoisted_2$2s
  ]);
}
script$4G.render = render$2l;
script$4G.__file = "packages/components/Files.vue";
var script$4H = script$4G;
var script$4E = defineComponent({
  name: "IceCreamSquare"
});
const _hoisted_1$2s = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2r = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M416 640h256a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32H352a32 32 0 0 0-32 32v448a32 32 0 0 0 32 32h64zm192 64v160a96 96 0 0 1-192 0V704h-64a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96h320a96 96 0 0 1 96 96v448a96 96 0 0 1-96 96h-64zm-64 0h-64v160a32 32 0 1 0 64 0V704z"
}, null, -1);
function render$2k(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2s, [
    _hoisted_2$2r
  ]);
}
script$4E.render = render$2k;
script$4E.__file = "packages/components/IceCreamSquare.vue";
var script$4F = script$4E;
var script$4C = defineComponent({
  name: "Key"
});
const _hoisted_1$2r = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2q = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M448 456.064V96a32 32 0 0 1 32-32.064L672 64a32 32 0 0 1 0 64H512v128h160a32 32 0 0 1 0 64H512v128a256 256 0 1 1-64 8.064zM512 896a192 192 0 1 0 0-384 192 192 0 0 0 0 384z"
}, null, -1);
function render$2j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2r, [
    _hoisted_2$2q
  ]);
}
script$4C.render = render$2j;
script$4C.__file = "packages/components/Key.vue";
var script$4D = script$4C;
var script$4A = defineComponent({
  name: "IceTea"
});
const _hoisted_1$2q = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2p = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M197.696 259.648a320.128 320.128 0 0 1 628.608 0A96 96 0 0 1 896 352v64a96 96 0 0 1-71.616 92.864l-49.408 395.072A64 64 0 0 1 711.488 960H312.512a64 64 0 0 1-63.488-56.064l-49.408-395.072A96 96 0 0 1 128 416v-64a96 96 0 0 1 69.696-92.352zM264.064 256h495.872a256.128 256.128 0 0 0-495.872 0zm495.424 256H264.512l48 384h398.976l48-384zM224 448h576a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32H224a32 32 0 0 0-32 32v64a32 32 0 0 0 32 32zm160 192h64v64h-64v-64zm192 64h64v64h-64v-64zm-128 64h64v64h-64v-64zm64-192h64v64h-64v-64z"
}, null, -1);
function render$2i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2q, [
    _hoisted_2$2p
  ]);
}
script$4A.render = render$2i;
script$4A.__file = "packages/components/IceTea.vue";
var script$4B = script$4A;
var script$4y = defineComponent({
  name: "KnifeFork"
});
const _hoisted_1$2p = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2o = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M256 410.56V96a32 32 0 0 1 64 0v314.56A96 96 0 0 0 384 320V96a32 32 0 0 1 64 0v224a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.8A160 160 0 0 1 128 320V96a32 32 0 0 1 64 0v224a96 96 0 0 0 64 90.56zm384-250.24V544h126.72c-3.328-78.72-12.928-147.968-28.608-207.744-14.336-54.528-46.848-113.344-98.112-175.872zM640 608v320a32 32 0 1 1-64 0V64h64c85.312 89.472 138.688 174.848 160 256 21.312 81.152 32 177.152 32 288H640z"
}, null, -1);
function render$2h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2p, [
    _hoisted_2$2o
  ]);
}
script$4y.render = render$2h;
script$4y.__file = "packages/components/KnifeFork.vue";
var script$4z = script$4y;
var script$4w = defineComponent({
  name: "Iphone"
});
const _hoisted_1$2o = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2n = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M224 768v96.064a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V768H224zm0-64h576V160a64 64 0 0 0-64-64H288a64 64 0 0 0-64 64v544zm32 288a96 96 0 0 1-96-96V128a96 96 0 0 1 96-96h512a96 96 0 0 1 96 96v768a96 96 0 0 1-96 96H256zm304-144a48 48 0 1 1-96 0 48 48 0 0 1 96 0z"
}, null, -1);
function render$2g(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2o, [
    _hoisted_2$2n
  ]);
}
script$4w.render = render$2g;
script$4w.__file = "packages/components/Iphone.vue";
var script$4x = script$4w;
var script$4u = defineComponent({
  name: "InfoFilled"
});
const _hoisted_1$2n = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2m = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
}, null, -1);
function render$2f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2n, [
    _hoisted_2$2m
  ]);
}
script$4u.render = render$2f;
script$4u.__file = "packages/components/InfoFilled.vue";
var script$4v = script$4u;
var script$4s = defineComponent({
  name: "Link"
});
const _hoisted_1$2m = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2l = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M715.648 625.152 670.4 579.904l90.496-90.56c75.008-74.944 85.12-186.368 22.656-248.896-62.528-62.464-173.952-52.352-248.96 22.656L444.16 353.6l-45.248-45.248 90.496-90.496c100.032-99.968 251.968-110.08 339.456-22.656 87.488 87.488 77.312 239.424-22.656 339.456l-90.496 90.496zm-90.496 90.496-90.496 90.496C434.624 906.112 282.688 916.224 195.2 828.8c-87.488-87.488-77.312-239.424 22.656-339.456l90.496-90.496 45.248 45.248-90.496 90.56c-75.008 74.944-85.12 186.368-22.656 248.896 62.528 62.464 173.952 52.352 248.96-22.656l90.496-90.496 45.248 45.248zm0-362.048 45.248 45.248L398.848 670.4 353.6 625.152 625.152 353.6z"
}, null, -1);
function render$2e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2m, [
    _hoisted_2$2l
  ]);
}
script$4s.render = render$2e;
script$4s.__file = "packages/components/Link.vue";
var script$4t = script$4s;
var script$4q = defineComponent({
  name: "IceDrink"
});
const _hoisted_1$2l = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2k = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 448v128h239.68l16.064-128H512zm-64 0H256.256l16.064 128H448V448zm64-255.36V384h247.744A256.128 256.128 0 0 0 512 192.64zm-64 8.064A256.448 256.448 0 0 0 264.256 384H448V200.704zm64-72.064A320.128 320.128 0 0 1 825.472 384H896a32 32 0 1 1 0 64h-64v1.92l-56.96 454.016A64 64 0 0 1 711.552 960H312.448a64 64 0 0 1-63.488-56.064L192 449.92V448h-64a32 32 0 0 1 0-64h70.528A320.384 320.384 0 0 1 448 135.04V96a96 96 0 0 1 96-96h128a32 32 0 1 1 0 64H544a32 32 0 0 0-32 32v32.64zM743.68 640H280.32l32.128 256h399.104l32.128-256z"
}, null, -1);
function render$2d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2l, [
    _hoisted_2$2k
  ]);
}
script$4q.render = render$2d;
script$4q.__file = "packages/components/IceDrink.vue";
var script$4r = script$4q;
var script$4o = defineComponent({
  name: "Lightning"
});
const _hoisted_1$2k = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2j = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M288 671.36v64.128A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 736 734.016v-64.768a192 192 0 0 0 3.328-377.92l-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 91.968 70.464 167.36 160.256 175.232z"
}, null, -1);
const _hoisted_3$Q = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M416 736a32 32 0 0 1-27.776-47.872l128-224a32 32 0 1 1 55.552 31.744L471.168 672H608a32 32 0 0 1 27.776 47.872l-128 224a32 32 0 1 1-55.68-31.744L552.96 736H416z"
}, null, -1);
function render$2c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2k, [
    _hoisted_2$2j,
    _hoisted_3$Q
  ]);
}
script$4o.render = render$2c;
script$4o.__file = "packages/components/Lightning.vue";
var script$4p = script$4o;
var script$4m = defineComponent({
  name: "Loading"
});
const _hoisted_1$2j = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2i = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
}, null, -1);
function render$2b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2j, [
    _hoisted_2$2i
  ]);
}
script$4m.render = render$2b;
script$4m.__file = "packages/components/Loading.vue";
var script$4n = script$4m;
var script$4k = defineComponent({
  name: "Lollipop"
});
const _hoisted_1$2i = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2h = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M513.28 448a64 64 0 1 1 76.544 49.728A96 96 0 0 0 768 448h64a160 160 0 0 1-320 0h1.28zm-126.976-29.696a256 256 0 1 0 43.52-180.48A256 256 0 0 1 832 448h-64a192 192 0 0 0-381.696-29.696zm105.664 249.472L285.696 874.048a96 96 0 0 1-135.68-135.744l206.208-206.272a320 320 0 1 1 135.744 135.744zm-54.464-36.032a321.92 321.92 0 0 1-45.248-45.248L195.2 783.552a32 32 0 1 0 45.248 45.248l197.056-197.12z"
}, null, -1);
function render$2a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2i, [
    _hoisted_2$2h
  ]);
}
script$4k.render = render$2a;
script$4k.__file = "packages/components/Lollipop.vue";
var script$4l = script$4k;
var script$4i = defineComponent({
  name: "LocationInformation"
});
const _hoisted_1$2h = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2g = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1);
const _hoisted_3$P = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1);
const _hoisted_4$c = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z"
}, null, -1);
function render$29(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2h, [
    _hoisted_2$2g,
    _hoisted_3$P,
    _hoisted_4$c
  ]);
}
script$4i.render = render$29;
script$4i.__file = "packages/components/LocationInformation.vue";
var script$4j = script$4i;
var script$4g = defineComponent({
  name: "Lock"
});
const _hoisted_1$2g = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2f = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z"
}, null, -1);
const _hoisted_3$O = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm192-160v-64a192 192 0 1 0-384 0v64h384zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64z"
}, null, -1);
function render$28(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2g, [
    _hoisted_2$2f,
    _hoisted_3$O
  ]);
}
script$4g.render = render$28;
script$4g.__file = "packages/components/Lock.vue";
var script$4h = script$4g;
var script$4e = defineComponent({
  name: "LocationFilled"
});
const _hoisted_1$2f = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2e = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 928c23.936 0 117.504-68.352 192.064-153.152C803.456 661.888 864 535.808 864 416c0-189.632-155.84-320-352-320S160 226.368 160 416c0 120.32 60.544 246.4 159.936 359.232C394.432 859.84 488 928 512 928zm0-435.2a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 140.8a204.8 204.8 0 1 1 0-409.6 204.8 204.8 0 0 1 0 409.6z"
}, null, -1);
function render$27(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2f, [
    _hoisted_2$2e
  ]);
}
script$4e.render = render$27;
script$4e.__file = "packages/components/LocationFilled.vue";
var script$4f = script$4e;
var script$4c = defineComponent({
  name: "Magnet"
});
const _hoisted_1$2e = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2d = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M832 320V192H704v320a192 192 0 1 1-384 0V192H192v128h128v64H192v128a320 320 0 0 0 640 0V384H704v-64h128zM640 512V128h256v384a384 384 0 1 1-768 0V128h256v384a128 128 0 1 0 256 0z"
}, null, -1);
function render$26(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2e, [
    _hoisted_2$2d
  ]);
}
script$4c.render = render$26;
script$4c.__file = "packages/components/Magnet.vue";
var script$4d = script$4c;
var script$4a = defineComponent({
  name: "Male"
});
const _hoisted_1$2d = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2c = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M399.5 849.5a225 225 0 1 0 0-450 225 225 0 0 0 0 450zm0 56.25a281.25 281.25 0 1 1 0-562.5 281.25 281.25 0 0 1 0 562.5zm253.125-787.5h225q28.125 0 28.125 28.125T877.625 174.5h-225q-28.125 0-28.125-28.125t28.125-28.125z"
}, null, -1);
const _hoisted_3$N = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M877.625 118.25q28.125 0 28.125 28.125v225q0 28.125-28.125 28.125T849.5 371.375v-225q0-28.125 28.125-28.125z"
}, null, -1);
const _hoisted_4$b = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M604.813 458.9 565.1 419.131l292.613-292.668 39.825 39.824z"
}, null, -1);
function render$25(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2d, [
    _hoisted_2$2c,
    _hoisted_3$N,
    _hoisted_4$b
  ]);
}
script$4a.render = render$25;
script$4a.__file = "packages/components/Male.vue";
var script$4b = script$4a;
var script$48 = defineComponent({
  name: "Location"
});
const _hoisted_1$2c = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2b = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1);
const _hoisted_3$M = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z"
}, null, -1);
function render$24(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2c, [
    _hoisted_2$2b,
    _hoisted_3$M
  ]);
}
script$48.render = render$24;
script$48.__file = "packages/components/Location.vue";
var script$49 = script$48;
var script$46 = defineComponent({
  name: "Menu"
});
const _hoisted_1$2b = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2a = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H608zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H608z"
}, null, -1);
function render$23(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2b, [
    _hoisted_2$2a
  ]);
}
script$46.render = render$23;
script$46.__file = "packages/components/Menu.vue";
var script$47 = script$46;
var script$44 = defineComponent({
  name: "MagicStick"
});
const _hoisted_1$2a = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$29 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 64h64v192h-64V64zm0 576h64v192h-64V640zM160 480v-64h192v64H160zm576 0v-64h192v64H736zM249.856 199.04l45.248-45.184L430.848 289.6 385.6 334.848 249.856 199.104zM657.152 606.4l45.248-45.248 135.744 135.744-45.248 45.248L657.152 606.4zM114.048 923.2 68.8 877.952l316.8-316.8 45.248 45.248-316.8 316.8zM702.4 334.848 657.152 289.6l135.744-135.744 45.248 45.248L702.4 334.848z"
}, null, -1);
function render$22(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$2a, [
    _hoisted_2$29
  ]);
}
script$44.render = render$22;
script$44.__file = "packages/components/MagicStick.vue";
var script$45 = script$44;
var script$42 = defineComponent({
  name: "MessageBox"
});
const _hoisted_1$29 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$28 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M288 384h448v64H288v-64zm96-128h256v64H384v-64zM131.456 512H384v128h256V512h252.544L721.856 192H302.144L131.456 512zM896 576H704v128H320V576H128v256h768V576zM275.776 128h472.448a32 32 0 0 1 28.608 17.664l179.84 359.552A32 32 0 0 1 960 519.552V864a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V519.552a32 32 0 0 1 3.392-14.336l179.776-359.552A32 32 0 0 1 275.776 128z"
}, null, -1);
function render$21(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$29, [
    _hoisted_2$28
  ]);
}
script$42.render = render$21;
script$42.__file = "packages/components/MessageBox.vue";
var script$43 = script$42;
var script$40 = defineComponent({
  name: "MapLocation"
});
const _hoisted_1$28 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$27 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1);
const _hoisted_3$L = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256zm345.6 192L960 960H672v-64H352v64H64l102.4-256h691.2zm-68.928 0H235.328l-76.8 192h706.944l-76.8-192z"
}, null, -1);
function render$20(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$28, [
    _hoisted_2$27,
    _hoisted_3$L
  ]);
}
script$40.render = render$20;
script$40.__file = "packages/components/MapLocation.vue";
var script$41 = script$40;
var script$3_ = defineComponent({
  name: "Mic"
});
const _hoisted_1$27 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$26 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M480 704h160a64 64 0 0 0 64-64v-32h-96a32 32 0 0 1 0-64h96v-96h-96a32 32 0 0 1 0-64h96v-96h-96a32 32 0 0 1 0-64h96v-32a64 64 0 0 0-64-64H384a64 64 0 0 0-64 64v32h96a32 32 0 0 1 0 64h-96v96h96a32 32 0 0 1 0 64h-96v96h96a32 32 0 0 1 0 64h-96v32a64 64 0 0 0 64 64h96zm64 64v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768h-96a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64h256a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128h-96z"
}, null, -1);
function render$1$(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$27, [
    _hoisted_2$26
  ]);
}
script$3_.render = render$1$;
script$3_.__file = "packages/components/Mic.vue";
var script$3$ = script$3_;
var script$3Y = defineComponent({
  name: "Message"
});
const _hoisted_1$26 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$25 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224H128zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64z"
}, null, -1);
const _hoisted_3$K = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224h784zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224H205.056z"
}, null, -1);
function render$1_(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$26, [
    _hoisted_2$25,
    _hoisted_3$K
  ]);
}
script$3Y.render = render$1_;
script$3Y.__file = "packages/components/Message.vue";
var script$3Z = script$3Y;
var script$3W = defineComponent({
  name: "Medal"
});
const _hoisted_1$25 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$24 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 896a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"
}, null, -1);
const _hoisted_3$J = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M576 128H448v200a286.72 286.72 0 0 1 64-8c19.52 0 40.832 2.688 64 8V128zm64 0v219.648c24.448 9.088 50.56 20.416 78.4 33.92L757.44 128H640zm-256 0H266.624l39.04 253.568c27.84-13.504 53.888-24.832 78.336-33.92V128zM229.312 64h565.376a32 32 0 0 1 31.616 36.864L768 480c-113.792-64-199.104-96-256-96-56.896 0-142.208 32-256 96l-58.304-379.136A32 32 0 0 1 229.312 64z"
}, null, -1);
function render$1Z(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$25, [
    _hoisted_2$24,
    _hoisted_3$J
  ]);
}
script$3W.render = render$1Z;
script$3W.__file = "packages/components/Medal.vue";
var script$3X = script$3W;
var script$3U = defineComponent({
  name: "MilkTea"
});
const _hoisted_1$24 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$23 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M416 128V96a96 96 0 0 1 96-96h128a32 32 0 1 1 0 64H512a32 32 0 0 0-32 32v32h320a96 96 0 0 1 11.712 191.296l-39.68 581.056A64 64 0 0 1 708.224 960H315.776a64 64 0 0 1-63.872-59.648l-39.616-581.056A96 96 0 0 1 224 128h192zM276.48 320l39.296 576h392.448l4.8-70.784a224.064 224.064 0 0 1 30.016-439.808L747.52 320H276.48zM224 256h576a32 32 0 1 0 0-64H224a32 32 0 0 0 0 64zm493.44 503.872 21.12-309.12a160 160 0 0 0-21.12 309.12z"
}, null, -1);
function render$1Y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$24, [
    _hoisted_2$23
  ]);
}
script$3U.render = render$1Y;
script$3U.__file = "packages/components/MilkTea.vue";
var script$3V = script$3U;
var script$3S = defineComponent({
  name: "Microphone"
});
const _hoisted_1$23 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$22 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 128a128 128 0 0 0-128 128v256a128 128 0 1 0 256 0V256a128 128 0 0 0-128-128zm0-64a192 192 0 0 1 192 192v256a192 192 0 1 1-384 0V256A192 192 0 0 1 512 64zm-32 832v-64a288 288 0 0 1-288-288v-32a32 32 0 0 1 64 0v32a224 224 0 0 0 224 224h64a224 224 0 0 0 224-224v-32a32 32 0 1 1 64 0v32a288 288 0 0 1-288 288v64h64a32 32 0 1 1 0 64H416a32 32 0 1 1 0-64h64z"
}, null, -1);
function render$1X(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$23, [
    _hoisted_2$22
  ]);
}
script$3S.render = render$1X;
script$3S.__file = "packages/components/Microphone.vue";
var script$3T = script$3S;
var script$3Q = defineComponent({
  name: "Minus"
});
const _hoisted_1$22 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$21 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"
}, null, -1);
function render$1W(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$22, [
    _hoisted_2$21
  ]);
}
script$3Q.render = render$1W;
script$3Q.__file = "packages/components/Minus.vue";
var script$3R = script$3Q;
var script$3O = defineComponent({
  name: "Money"
});
const _hoisted_1$21 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$20 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M256 640v192h640V384H768v-64h150.976c14.272 0 19.456 1.472 24.64 4.288a29.056 29.056 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64v493.952c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H233.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096c-2.688-5.184-4.224-10.368-4.224-24.576V640h64z"
}, null, -1);
const _hoisted_3$I = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M768 192H128v448h640V192zm64-22.976v493.952c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H105.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096C65.536 682.432 64 677.248 64 663.04V169.024c0-14.272 1.472-19.456 4.288-24.64a29.056 29.056 0 0 1 12.096-12.16C85.568 129.536 90.752 128 104.96 128h685.952c14.272 0 19.456 1.472 24.64 4.288a29.056 29.056 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64z"
}, null, -1);
const _hoisted_4$a = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M448 576a160 160 0 1 1 0-320 160 160 0 0 1 0 320zm0-64a96 96 0 1 0 0-192 96 96 0 0 0 0 192z"
}, null, -1);
function render$1V(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$21, [
    _hoisted_2$20,
    _hoisted_3$I,
    _hoisted_4$a
  ]);
}
script$3O.render = render$1V;
script$3O.__file = "packages/components/Money.vue";
var script$3P = script$3O;
var script$3M = defineComponent({
  name: "MoonNight"
});
const _hoisted_1$20 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1$ = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M384 512a448 448 0 0 1 215.872-383.296A384 384 0 0 0 213.76 640h188.8A448.256 448.256 0 0 1 384 512zM171.136 704a448 448 0 0 1 636.992-575.296A384 384 0 0 0 499.328 704h-328.32z"
}, null, -1);
const _hoisted_3$H = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M32 640h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32zm128 128h384a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm160 127.68 224 .256a32 32 0 0 1 32 32V928a32 32 0 0 1-32 32l-224-.384a32 32 0 0 1-32-32v-.064a32 32 0 0 1 32-32z"
}, null, -1);
function render$1U(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$20, [
    _hoisted_2$1$,
    _hoisted_3$H
  ]);
}
script$3M.render = render$1U;
script$3M.__file = "packages/components/MoonNight.vue";
var script$3N = script$3M;
var script$3K = defineComponent({
  name: "Monitor"
});
const _hoisted_1$1$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1_ = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M544 768v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768H192A128 128 0 0 1 64 640V256a128 128 0 0 1 128-128h640a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H544zM192 192a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H192z"
}, null, -1);
function render$1T(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1$, [
    _hoisted_2$1_
  ]);
}
script$3K.render = render$1T;
script$3K.__file = "packages/components/Monitor.vue";
var script$3L = script$3K;
var script$3I = defineComponent({
  name: "Moon"
});
const _hoisted_1$1_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1Z = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M240.448 240.448a384 384 0 1 0 559.424 525.696 448 448 0 0 1-542.016-542.08 390.592 390.592 0 0 0-17.408 16.384zm181.056 362.048a384 384 0 0 0 525.632 16.384A448 448 0 1 1 405.056 76.8a384 384 0 0 0 16.448 525.696z"
}, null, -1);
function render$1S(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1_, [
    _hoisted_2$1Z
  ]);
}
script$3I.render = render$1S;
script$3I.__file = "packages/components/Moon.vue";
var script$3J = script$3I;
var script$3G = defineComponent({
  name: "More"
});
const _hoisted_1$1Z = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1Y = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96z"
}, null, -1);
function render$1R(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1Z, [
    _hoisted_2$1Y
  ]);
}
script$3G.render = render$1R;
script$3G.__file = "packages/components/More.vue";
var script$3H = script$3G;
var script$3E = defineComponent({
  name: "MostlyCloudy"
});
const _hoisted_1$1Y = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1X = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M737.216 357.952 704 349.824l-11.776-32a192.064 192.064 0 0 0-367.424 23.04l-8.96 39.04-39.04 8.96A192.064 192.064 0 0 0 320 768h368a207.808 207.808 0 0 0 207.808-208 208.32 208.32 0 0 0-158.592-202.048zm15.168-62.208A272.32 272.32 0 0 1 959.744 560a271.808 271.808 0 0 1-271.552 272H320a256 256 0 0 1-57.536-505.536 256.128 256.128 0 0 1 489.92-30.72z"
}, null, -1);
function render$1Q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1Y, [
    _hoisted_2$1X
  ]);
}
script$3E.render = render$1Q;
script$3E.__file = "packages/components/MostlyCloudy.vue";
var script$3F = script$3E;
var script$3C = defineComponent({
  name: "MoreFilled"
});
const _hoisted_1$1X = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1W = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z"
}, null, -1);
function render$1P(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1X, [
    _hoisted_2$1W
  ]);
}
script$3C.render = render$1P;
script$3C.__file = "packages/components/MoreFilled.vue";
var script$3D = script$3C;
var script$3A = defineComponent({
  name: "Mouse"
});
const _hoisted_1$1W = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1V = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M438.144 256c-68.352 0-92.736 4.672-117.76 18.112-20.096 10.752-35.52 26.176-46.272 46.272C260.672 345.408 256 369.792 256 438.144v275.712c0 68.352 4.672 92.736 18.112 117.76 10.752 20.096 26.176 35.52 46.272 46.272C345.408 891.328 369.792 896 438.144 896h147.712c68.352 0 92.736-4.672 117.76-18.112 20.096-10.752 35.52-26.176 46.272-46.272C763.328 806.592 768 782.208 768 713.856V438.144c0-68.352-4.672-92.736-18.112-117.76a110.464 110.464 0 0 0-46.272-46.272C678.592 260.672 654.208 256 585.856 256H438.144zm0-64h147.712c85.568 0 116.608 8.96 147.904 25.6 31.36 16.768 55.872 41.344 72.576 72.64C823.104 321.536 832 352.576 832 438.08v275.84c0 85.504-8.96 116.544-25.6 147.84a174.464 174.464 0 0 1-72.64 72.576C702.464 951.104 671.424 960 585.92 960H438.08c-85.504 0-116.544-8.96-147.84-25.6a174.464 174.464 0 0 1-72.64-72.704c-16.768-31.296-25.664-62.336-25.664-147.84v-275.84c0-85.504 8.96-116.544 25.6-147.84a174.464 174.464 0 0 1 72.768-72.576c31.232-16.704 62.272-25.6 147.776-25.6z"
}, null, -1);
const _hoisted_3$G = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 320q32 0 32 32v128q0 32-32 32t-32-32V352q0-32 32-32zm32-96a32 32 0 0 1-64 0v-64a32 32 0 0 0-32-32h-96a32 32 0 0 1 0-64h96a96 96 0 0 1 96 96v64z"
}, null, -1);
function render$1O(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1W, [
    _hoisted_2$1V,
    _hoisted_3$G
  ]);
}
script$3A.render = render$1O;
script$3A.__file = "packages/components/Mouse.vue";
var script$3B = script$3A;
var script$3y = defineComponent({
  name: "Mug"
});
const _hoisted_1$1V = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1U = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M736 800V160H160v640a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64zm64-544h63.552a96 96 0 0 1 96 96v224a96 96 0 0 1-96 96H800v128a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V128a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v128zm0 64v288h63.552a32 32 0 0 0 32-32V352a32 32 0 0 0-32-32H800z"
}, null, -1);
function render$1N(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1V, [
    _hoisted_2$1U
  ]);
}
script$3y.render = render$1N;
script$3y.__file = "packages/components/Mug.vue";
var script$3z = script$3y;
var script$3w = defineComponent({
  name: "Mute"
});
const _hoisted_1$1U = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1T = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m412.16 592.128-45.44 45.44A191.232 191.232 0 0 1 320 512V256a192 192 0 1 1 384 0v44.352l-64 64V256a128 128 0 1 0-256 0v256c0 30.336 10.56 58.24 28.16 80.128zm51.968 38.592A128 128 0 0 0 640 512v-57.152l64-64V512a192 192 0 0 1-287.68 166.528l47.808-47.808zM314.88 779.968l46.144-46.08A222.976 222.976 0 0 0 480 768h64a224 224 0 0 0 224-224v-32a32 32 0 1 1 64 0v32a288 288 0 0 1-288 288v64h64a32 32 0 1 1 0 64H416a32 32 0 1 1 0-64h64v-64c-61.44 0-118.4-19.2-165.12-52.032zM266.752 737.6A286.976 286.976 0 0 1 192 544v-32a32 32 0 0 1 64 0v32c0 56.832 21.184 108.8 56.064 148.288L266.752 737.6z"
}, null, -1);
const _hoisted_3$F = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M150.72 859.072a32 32 0 0 1-45.44-45.056l704-708.544a32 32 0 0 1 45.44 45.056l-704 708.544z"
}, null, -1);
function render$1M(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1U, [
    _hoisted_2$1T,
    _hoisted_3$F
  ]);
}
script$3w.render = render$1M;
script$3w.__file = "packages/components/Mute.vue";
var script$3x = script$3w;
var script$3u = defineComponent({
  name: "NoSmoking"
});
const _hoisted_1$1T = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1S = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M440.256 576H256v128h56.256l-64 64H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32h280.256l-64 64zm143.488 128H704V583.744L775.744 512H928a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H519.744l64-64zM768 576v128h128V576H768zm-29.696-207.552 45.248 45.248-497.856 497.856-45.248-45.248zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z"
}, null, -1);
function render$1L(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1T, [
    _hoisted_2$1S
  ]);
}
script$3u.render = render$1L;
script$3u.__file = "packages/components/NoSmoking.vue";
var script$3v = script$3u;
var script$3s = defineComponent({
  name: "MuteNotification"
});
const _hoisted_1$1S = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1R = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m241.216 832 63.616-64H768V448c0-42.368-10.24-82.304-28.48-117.504l46.912-47.232C815.36 331.392 832 387.84 832 448v320h96a32 32 0 1 1 0 64H241.216zm-90.24 0H96a32 32 0 1 1 0-64h96V448a320.128 320.128 0 0 1 256-313.6V128a64 64 0 1 1 128 0v6.4a319.552 319.552 0 0 1 171.648 97.088l-45.184 45.44A256 256 0 0 0 256 448v278.336L151.04 832zM448 896h128a64 64 0 0 1-128 0z"
}, null, -1);
const _hoisted_3$E = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M150.72 859.072a32 32 0 0 1-45.44-45.056l704-708.544a32 32 0 0 1 45.44 45.056l-704 708.544z"
}, null, -1);
function render$1K(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1S, [
    _hoisted_2$1R,
    _hoisted_3$E
  ]);
}
script$3s.render = render$1K;
script$3s.__file = "packages/components/MuteNotification.vue";
var script$3t = script$3s;
var script$3q = defineComponent({
  name: "Notification"
});
const _hoisted_1$1R = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1Q = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 128v64H256a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V512h64v256a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V256a128 128 0 0 1 128-128h256z"
}, null, -1);
const _hoisted_3$D = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M768 384a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"
}, null, -1);
function render$1J(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1R, [
    _hoisted_2$1Q,
    _hoisted_3$D
  ]);
}
script$3q.render = render$1J;
script$3q.__file = "packages/components/Notification.vue";
var script$3r = script$3q;
var script$3o = defineComponent({
  name: "Notebook"
});
const _hoisted_1$1Q = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1P = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M192 128v768h640V128H192zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_3$C = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M672 128h64v768h-64zM96 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32z"
}, null, -1);
function render$1I(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1Q, [
    _hoisted_2$1P,
    _hoisted_3$C
  ]);
}
script$3o.render = render$1I;
script$3o.__file = "packages/components/Notebook.vue";
var script$3p = script$3o;
var script$3m = defineComponent({
  name: "Odometer"
});
const _hoisted_1$1P = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1O = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
const _hoisted_3$B = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M192 512a320 320 0 1 1 640 0 32 32 0 1 1-64 0 256 256 0 1 0-512 0 32 32 0 0 1-64 0z"
}, null, -1);
const _hoisted_4$9 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M570.432 627.84A96 96 0 1 1 509.568 608l60.992-187.776A32 32 0 1 1 631.424 440l-60.992 187.776zM502.08 734.464a32 32 0 1 0 19.84-60.928 32 32 0 0 0-19.84 60.928z"
}, null, -1);
function render$1H(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1P, [
    _hoisted_2$1O,
    _hoisted_3$B,
    _hoisted_4$9
  ]);
}
script$3m.render = render$1H;
script$3m.__file = "packages/components/Odometer.vue";
var script$3n = script$3m;
var script$3k = defineComponent({
  name: "OfficeBuilding"
});
const _hoisted_1$1O = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1N = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M192 128v704h384V128H192zm-32-64h448a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_3$A = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M256 256h256v64H256v-64zm0 192h256v64H256v-64zm0 192h256v64H256v-64zm384-128h128v64H640v-64zm0 128h128v64H640v-64zM64 832h896v64H64v-64z"
}, null, -1);
const _hoisted_4$8 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M640 384v448h192V384H640zm-32-64h256a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H608a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32z"
}, null, -1);
function render$1G(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1O, [
    _hoisted_2$1N,
    _hoisted_3$A,
    _hoisted_4$8
  ]);
}
script$3k.render = render$1G;
script$3k.__file = "packages/components/OfficeBuilding.vue";
var script$3l = script$3k;
var script$3i = defineComponent({
  name: "Operation"
});
const _hoisted_1$1N = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1M = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M389.44 768a96.064 96.064 0 0 1 181.12 0H896v64H570.56a96.064 96.064 0 0 1-181.12 0H128v-64h261.44zm192-288a96.064 96.064 0 0 1 181.12 0H896v64H762.56a96.064 96.064 0 0 1-181.12 0H128v-64h453.44zm-320-288a96.064 96.064 0 0 1 181.12 0H896v64H442.56a96.064 96.064 0 0 1-181.12 0H128v-64h133.44z"
}, null, -1);
function render$1F(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1N, [
    _hoisted_2$1M
  ]);
}
script$3i.render = render$1F;
script$3i.__file = "packages/components/Operation.vue";
var script$3j = script$3i;
var script$3g = defineComponent({
  name: "Opportunity"
});
const _hoisted_1$1M = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1L = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M384 960v-64h192.064v64H384zm448-544a350.656 350.656 0 0 1-128.32 271.424C665.344 719.04 640 763.776 640 813.504V832H320v-14.336c0-48-19.392-95.36-57.216-124.992a351.552 351.552 0 0 1-128.448-344.256c25.344-136.448 133.888-248.128 269.76-276.48A352.384 352.384 0 0 1 832 416zm-544 32c0-132.288 75.904-224 192-224v-64c-154.432 0-256 122.752-256 288h64z"
}, null, -1);
function render$1E(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1M, [
    _hoisted_2$1L
  ]);
}
script$3g.render = render$1E;
script$3g.__file = "packages/components/Opportunity.vue";
var script$3h = script$3g;
var script$3e = defineComponent({
  name: "Orange"
});
const _hoisted_1$1L = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1K = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M544 894.72a382.336 382.336 0 0 0 215.936-89.472L577.024 622.272c-10.24 6.016-21.248 10.688-33.024 13.696v258.688zm261.248-134.784A382.336 382.336 0 0 0 894.656 544H635.968c-3.008 11.776-7.68 22.848-13.696 33.024l182.976 182.912zM894.656 480a382.336 382.336 0 0 0-89.408-215.936L622.272 446.976c6.016 10.24 10.688 21.248 13.696 33.024h258.688zm-134.72-261.248A382.336 382.336 0 0 0 544 129.344v258.688c11.776 3.008 22.848 7.68 33.024 13.696l182.912-182.976zM480 129.344a382.336 382.336 0 0 0-215.936 89.408l182.912 182.976c10.24-6.016 21.248-10.688 33.024-13.696V129.344zm-261.248 134.72A382.336 382.336 0 0 0 129.344 480h258.688c3.008-11.776 7.68-22.848 13.696-33.024L218.752 264.064zM129.344 544a382.336 382.336 0 0 0 89.408 215.936l182.976-182.912A127.232 127.232 0 0 1 388.032 544H129.344zm134.72 261.248A382.336 382.336 0 0 0 480 894.656V635.968a127.232 127.232 0 0 1-33.024-13.696L264.064 805.248zM512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896zm0-384a64 64 0 1 0 0-128 64 64 0 0 0 0 128z"
}, null, -1);
function render$1D(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1L, [
    _hoisted_2$1K
  ]);
}
script$3e.render = render$1D;
script$3e.__file = "packages/components/Orange.vue";
var script$3f = script$3e;
var script$3c = defineComponent({
  name: "Open"
});
const _hoisted_1$1K = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1J = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724H329.956zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z"
}, null, -1);
const _hoisted_3$z = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M694.044 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454zm0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088z"
}, null, -1);
function render$1C(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1K, [
    _hoisted_2$1J,
    _hoisted_3$z
  ]);
}
script$3c.render = render$1C;
script$3c.__file = "packages/components/Open.vue";
var script$3d = script$3c;
var script$3a = defineComponent({
  name: "Paperclip"
});
const _hoisted_1$1J = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1I = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M602.496 240.448A192 192 0 1 1 874.048 512l-316.8 316.8A256 256 0 0 1 195.2 466.752L602.496 59.456l45.248 45.248L240.448 512A192 192 0 0 0 512 783.552l316.8-316.8a128 128 0 1 0-181.056-181.056L353.6 579.904a32 32 0 1 0 45.248 45.248l294.144-294.144 45.312 45.248L444.096 670.4a96 96 0 1 1-135.744-135.744l294.144-294.208z"
}, null, -1);
function render$1B(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1J, [
    _hoisted_2$1I
  ]);
}
script$3a.render = render$1B;
script$3a.__file = "packages/components/Paperclip.vue";
var script$3b = script$3a;
var script$38 = defineComponent({
  name: "Pear"
});
const _hoisted_1$1I = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1H = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M542.336 258.816a443.255 443.255 0 0 0-9.024 25.088 32 32 0 1 1-60.8-20.032l1.088-3.328a162.688 162.688 0 0 0-122.048 131.392l-17.088 102.72-20.736 15.36C256.192 552.704 224 610.88 224 672c0 120.576 126.4 224 288 224s288-103.424 288-224c0-61.12-32.192-119.296-89.728-161.92l-20.736-15.424-17.088-102.72a162.688 162.688 0 0 0-130.112-133.12zm-40.128-66.56c7.936-15.552 16.576-30.08 25.92-43.776 23.296-33.92 49.408-59.776 78.528-77.12a32 32 0 1 1 32.704 55.04c-20.544 12.224-40.064 31.552-58.432 58.304a316.608 316.608 0 0 0-9.792 15.104 226.688 226.688 0 0 1 164.48 181.568l12.8 77.248C819.456 511.36 864 587.392 864 672c0 159.04-157.568 288-352 288S160 831.04 160 672c0-84.608 44.608-160.64 115.584-213.376l12.8-77.248a226.624 226.624 0 0 1 213.76-189.184z"
}, null, -1);
function render$1A(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1I, [
    _hoisted_2$1H
  ]);
}
script$38.render = render$1A;
script$38.__file = "packages/components/Pear.vue";
var script$39 = script$38;
var script$36 = defineComponent({
  name: "PartlyCloudy"
});
const _hoisted_1$1H = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1G = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M598.4 895.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 895.872zm-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 445.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z"
}, null, -1);
const _hoisted_3$y = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M139.84 501.888a256 256 0 1 1 417.856-277.12c-17.728 2.176-38.208 8.448-61.504 18.816A192 192 0 1 0 189.12 460.48a6003.84 6003.84 0 0 0-49.28 41.408z"
}, null, -1);
function render$1z(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1H, [
    _hoisted_2$1G,
    _hoisted_3$y
  ]);
}
script$36.render = render$1z;
script$36.__file = "packages/components/PartlyCloudy.vue";
var script$37 = script$36;
var script$34 = defineComponent({
  name: "Phone"
});
const _hoisted_1$1G = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1F = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M79.36 432.256 591.744 944.64a32 32 0 0 0 35.2 6.784l253.44-108.544a32 32 0 0 0 9.984-52.032l-153.856-153.92a32 32 0 0 0-36.928-6.016l-69.888 34.944L358.08 394.24l35.008-69.888a32 32 0 0 0-5.952-36.928L233.152 133.568a32 32 0 0 0-52.032 10.048L72.512 397.056a32 32 0 0 0 6.784 35.2zm60.48-29.952 81.536-190.08L325.568 316.48l-24.64 49.216-20.608 41.216 32.576 32.64 271.552 271.552 32.64 32.64 41.216-20.672 49.28-24.576 104.192 104.128-190.08 81.472L139.84 402.304zM512 320v-64a256 256 0 0 1 256 256h-64a192 192 0 0 0-192-192zm0-192V64a448 448 0 0 1 448 448h-64a384 384 0 0 0-384-384z"
}, null, -1);
function render$1y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1G, [
    _hoisted_2$1F
  ]);
}
script$34.render = render$1y;
script$34.__file = "packages/components/Phone.vue";
var script$35 = script$34;
var script$32 = defineComponent({
  name: "PictureFilled"
});
const _hoisted_1$1F = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1E = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32H96zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112zM256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384z"
}, null, -1);
function render$1x(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1F, [
    _hoisted_2$1E
  ]);
}
script$32.render = render$1x;
script$32.__file = "packages/components/PictureFilled.vue";
var script$33 = script$32;
var script$30 = defineComponent({
  name: "PhoneFilled"
});
const _hoisted_1$1E = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1D = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M199.232 125.568 90.624 379.008a32 32 0 0 0 6.784 35.2l512.384 512.384a32 32 0 0 0 35.2 6.784l253.44-108.608a32 32 0 0 0 10.048-52.032L769.6 633.92a32 32 0 0 0-36.928-5.952l-130.176 65.088-271.488-271.552 65.024-130.176a32 32 0 0 0-5.952-36.928L251.2 115.52a32 32 0 0 0-51.968 10.048z"
}, null, -1);
function render$1w(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1E, [
    _hoisted_2$1D
  ]);
}
script$30.render = render$1w;
script$30.__file = "packages/components/PhoneFilled.vue";
var script$31 = script$30;
var script$2_ = defineComponent({
  name: "PictureRounded"
});
const _hoisted_1$1D = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1C = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768zm0-64a448 448 0 1 1 0 896 448 448 0 0 1 0-896z"
}, null, -1);
const _hoisted_3$x = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M640 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM214.656 790.656l-45.312-45.312 185.664-185.6a96 96 0 0 1 123.712-10.24l138.24 98.688a32 32 0 0 0 39.872-2.176L906.688 422.4l42.624 47.744L699.52 693.696a96 96 0 0 1-119.808 6.592l-138.24-98.752a32 32 0 0 0-41.152 3.456l-185.664 185.6z"
}, null, -1);
function render$1v(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1D, [
    _hoisted_2$1C,
    _hoisted_3$x
  ]);
}
script$2_.render = render$1v;
script$2_.__file = "packages/components/PictureRounded.vue";
var script$2$ = script$2_;
var script$2Y = defineComponent({
  name: "Guide"
});
const _hoisted_1$1C = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1B = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M640 608h-64V416h64v192zm0 160v160a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V768h64v128h128V768h64zM384 608V416h64v192h-64zm256-352h-64V128H448v128h-64V96a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32v160z"
}, null, -1);
const _hoisted_3$w = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m220.8 256-71.232 80 71.168 80H768V256H220.8zm-14.4-64H800a32 32 0 0 1 32 32v224a32 32 0 0 1-32 32H206.4a32 32 0 0 1-23.936-10.752l-99.584-112a32 32 0 0 1 0-42.496l99.584-112A32 32 0 0 1 206.4 192zm678.784 496-71.104 80H266.816V608h547.2l71.168 80zm-56.768-144H234.88a32 32 0 0 0-32 32v224a32 32 0 0 0 32 32h593.6a32 32 0 0 0 23.936-10.752l99.584-112a32 32 0 0 0 0-42.496l-99.584-112A32 32 0 0 0 828.48 544z"
}, null, -1);
function render$1u(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1C, [
    _hoisted_2$1B,
    _hoisted_3$w
  ]);
}
script$2Y.render = render$1u;
script$2Y.__file = "packages/components/Guide.vue";
var script$2Z = script$2Y;
var script$2W = defineComponent({
  name: "Place"
});
const _hoisted_1$1B = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1A = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"
}, null, -1);
const _hoisted_3$v = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 512a32 32 0 0 1 32 32v256a32 32 0 1 1-64 0V544a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_4$7 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M384 649.088v64.96C269.76 732.352 192 771.904 192 800c0 37.696 139.904 96 320 96s320-58.304 320-96c0-28.16-77.76-67.648-192-85.952v-64.96C789.12 671.04 896 730.368 896 800c0 88.32-171.904 160-384 160s-384-71.68-384-160c0-69.696 106.88-128.96 256-150.912z"
}, null, -1);
function render$1t(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1B, [
    _hoisted_2$1A,
    _hoisted_3$v,
    _hoisted_4$7
  ]);
}
script$2W.render = render$1t;
script$2W.__file = "packages/components/Place.vue";
var script$2X = script$2W;
var script$2U = defineComponent({
  name: "Platform"
});
const _hoisted_1$1A = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1z = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M448 832v-64h128v64h192v64H256v-64h192zM128 704V128h768v576H128z"
}, null, -1);
function render$1s(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1A, [
    _hoisted_2$1z
  ]);
}
script$2U.render = render$1s;
script$2U.__file = "packages/components/Platform.vue";
var script$2V = script$2U;
var script$2S = defineComponent({
  name: "PieChart"
});
const _hoisted_1$1z = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1y = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M448 68.48v64.832A384.128 384.128 0 0 0 512 896a384.128 384.128 0 0 0 378.688-320h64.768A448.128 448.128 0 0 1 64 512 448.128 448.128 0 0 1 448 68.48z"
}, null, -1);
const _hoisted_3$u = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M576 97.28V448h350.72A384.064 384.064 0 0 0 576 97.28zM512 64V33.152A448 448 0 0 1 990.848 512H512V64z"
}, null, -1);
function render$1r(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1z, [
    _hoisted_2$1y,
    _hoisted_3$u
  ]);
}
script$2S.render = render$1r;
script$2S.__file = "packages/components/PieChart.vue";
var script$2T = script$2S;
var script$2Q = defineComponent({
  name: "Pointer"
});
const _hoisted_1$1y = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1x = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M511.552 128c-35.584 0-64.384 28.8-64.384 64.448v516.48L274.048 570.88a94.272 94.272 0 0 0-112.896-3.456 44.416 44.416 0 0 0-8.96 62.208L332.8 870.4A64 64 0 0 0 384 896h512V575.232a64 64 0 0 0-45.632-61.312l-205.952-61.76A96 96 0 0 1 576 360.192V192.448C576 156.8 547.2 128 511.552 128zM359.04 556.8l24.128 19.2V192.448a128.448 128.448 0 1 1 256.832 0v167.744a32 32 0 0 0 22.784 30.656l206.016 61.76A128 128 0 0 1 960 575.232V896a64 64 0 0 1-64 64H384a128 128 0 0 1-102.4-51.2L101.056 668.032A108.416 108.416 0 0 1 128 512.512a158.272 158.272 0 0 1 185.984 8.32L359.04 556.8z"
}, null, -1);
function render$1q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1y, [
    _hoisted_2$1x
  ]);
}
script$2Q.render = render$1q;
script$2Q.__file = "packages/components/Pointer.vue";
var script$2R = script$2Q;
var script$2O = defineComponent({
  name: "Plus"
});
const _hoisted_1$1x = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1w = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
}, null, -1);
function render$1p(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1x, [
    _hoisted_2$1w
  ]);
}
script$2O.render = render$1p;
script$2O.__file = "packages/components/Plus.vue";
var script$2P = script$2O;
var script$2M = defineComponent({
  name: "Position"
});
const _hoisted_1$1w = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1v = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m249.6 417.088 319.744 43.072 39.168 310.272L845.12 178.88 249.6 417.088zm-129.024 47.168a32 32 0 0 1-7.68-61.44l777.792-311.04a32 32 0 0 1 41.6 41.6l-310.336 775.68a32 32 0 0 1-61.44-7.808L512 516.992l-391.424-52.736z"
}, null, -1);
function render$1o(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1w, [
    _hoisted_2$1v
  ]);
}
script$2M.render = render$1o;
script$2M.__file = "packages/components/Position.vue";
var script$2N = script$2M;
var script$2K = defineComponent({
  name: "Postcard"
});
const _hoisted_1$1v = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1u = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M160 224a32 32 0 0 0-32 32v512a32 32 0 0 0 32 32h704a32 32 0 0 0 32-32V256a32 32 0 0 0-32-32H160zm0-64h704a96 96 0 0 1 96 96v512a96 96 0 0 1-96 96H160a96 96 0 0 1-96-96V256a96 96 0 0 1 96-96z"
}, null, -1);
const _hoisted_3$t = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M704 320a64 64 0 1 1 0 128 64 64 0 0 1 0-128zM288 448h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32zm0 128h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1);
function render$1n(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1v, [
    _hoisted_2$1u,
    _hoisted_3$t
  ]);
}
script$2K.render = render$1n;
script$2K.__file = "packages/components/Postcard.vue";
var script$2L = script$2K;
var script$2I = defineComponent({
  name: "Present"
});
const _hoisted_1$1u = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1t = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M480 896V640H192v-64h288V320H192v576h288zm64 0h288V320H544v256h288v64H544v256zM128 256h768v672a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V256z"
}, null, -1);
const _hoisted_3$s = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M96 256h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32z"
}, null, -1);
const _hoisted_4$6 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M416 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1);
const _hoisted_5$2 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M608 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1);
function render$1m(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1u, [
    _hoisted_2$1t,
    _hoisted_3$s,
    _hoisted_4$6,
    _hoisted_5$2
  ]);
}
script$2I.render = render$1m;
script$2I.__file = "packages/components/Present.vue";
var script$2J = script$2I;
var script$2G = defineComponent({
  name: "PriceTag"
});
const _hoisted_1$1t = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1s = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M224 318.336V896h576V318.336L552.512 115.84a64 64 0 0 0-81.024 0L224 318.336zM593.024 66.304l259.2 212.096A32 32 0 0 1 864 303.168V928a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V303.168a32 32 0 0 1 11.712-24.768l259.2-212.096a128 128 0 0 1 162.112 0z"
}, null, -1);
const _hoisted_3$r = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1);
function render$1l(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1t, [
    _hoisted_2$1s,
    _hoisted_3$r
  ]);
}
script$2G.render = render$1l;
script$2G.__file = "packages/components/PriceTag.vue";
var script$2H = script$2G;
var script$2E = defineComponent({
  name: "Promotion"
});
const _hoisted_1$1s = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1r = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m64 448 832-320-128 704-446.08-243.328L832 192 242.816 545.472 64 448zm256 512V657.024L512 768 320 960z"
}, null, -1);
function render$1k(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1s, [
    _hoisted_2$1r
  ]);
}
script$2E.render = render$1k;
script$2E.__file = "packages/components/Promotion.vue";
var script$2F = script$2E;
var script$2C = defineComponent({
  name: "Pouring"
});
const _hoisted_1$1r = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1q = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m739.328 291.328-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0 0 35.776-380.672zM959.552 480a256 256 0 0 1-256 256h-400A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 959.552 480zM224 800a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32z"
}, null, -1);
function render$1j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1r, [
    _hoisted_2$1q
  ]);
}
script$2C.render = render$1j;
script$2C.__file = "packages/components/Pouring.vue";
var script$2D = script$2C;
var script$2A = defineComponent({
  name: "ReadingLamp"
});
const _hoisted_1$1q = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1p = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M352 896h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm-44.672-768-99.52 448h608.384l-99.52-448H307.328zm-25.6-64h460.608a32 32 0 0 1 31.232 25.088l113.792 512A32 32 0 0 1 856.128 640H167.872a32 32 0 0 1-31.232-38.912l113.792-512A32 32 0 0 1 281.664 64z"
}, null, -1);
const _hoisted_3$q = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M672 576q32 0 32 32v128q0 32-32 32t-32-32V608q0-32 32-32zm-192-.064h64V960h-64z"
}, null, -1);
function render$1i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1q, [
    _hoisted_2$1p,
    _hoisted_3$q
  ]);
}
script$2A.render = render$1i;
script$2A.__file = "packages/components/ReadingLamp.vue";
var script$2B = script$2A;
var script$2y = defineComponent({
  name: "QuestionFilled"
});
const _hoisted_1$1p = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1o = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm23.744 191.488c-52.096 0-92.928 14.784-123.2 44.352-30.976 29.568-45.76 70.4-45.76 122.496h80.256c0-29.568 5.632-52.8 17.6-68.992 13.376-19.712 35.2-28.864 66.176-28.864 23.936 0 42.944 6.336 56.32 19.712 12.672 13.376 19.712 31.68 19.712 54.912 0 17.6-6.336 34.496-19.008 49.984l-8.448 9.856c-45.76 40.832-73.216 70.4-82.368 89.408-9.856 19.008-14.08 42.24-14.08 68.992v9.856h80.96v-9.856c0-16.896 3.52-31.68 10.56-45.76 6.336-12.672 15.488-24.64 28.16-35.2 33.792-29.568 54.208-48.576 60.544-55.616 16.896-22.528 26.048-51.392 26.048-86.592 0-42.944-14.08-76.736-42.24-101.376-28.16-25.344-65.472-37.312-111.232-37.312zm-12.672 406.208a54.272 54.272 0 0 0-38.72 14.784 49.408 49.408 0 0 0-15.488 38.016c0 15.488 4.928 28.16 15.488 38.016A54.848 54.848 0 0 0 523.072 768c15.488 0 28.16-4.928 38.72-14.784a51.52 51.52 0 0 0 16.192-38.72 51.968 51.968 0 0 0-15.488-38.016 55.936 55.936 0 0 0-39.424-14.784z"
}, null, -1);
function render$1h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1p, [
    _hoisted_2$1o
  ]);
}
script$2y.render = render$1h;
script$2y.__file = "packages/components/QuestionFilled.vue";
var script$2z = script$2y;
var script$2w = defineComponent({
  name: "Printer"
});
const _hoisted_1$1o = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1n = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M256 768H105.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096C65.536 746.432 64 741.248 64 727.04V379.072c0-42.816 4.48-58.304 12.8-73.984 8.384-15.616 20.672-27.904 36.288-36.288 15.68-8.32 31.168-12.8 73.984-12.8H256V64h512v192h68.928c42.816 0 58.304 4.48 73.984 12.8 15.616 8.384 27.904 20.672 36.288 36.288 8.32 15.68 12.8 31.168 12.8 73.984v347.904c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H768v192H256V768zm64-192v320h384V576H320zm-64 128V512h512v192h128V379.072c0-29.376-1.408-36.48-5.248-43.776a23.296 23.296 0 0 0-10.048-10.048c-7.232-3.84-14.4-5.248-43.776-5.248H187.072c-29.376 0-36.48 1.408-43.776 5.248a23.296 23.296 0 0 0-10.048 10.048c-3.84 7.232-5.248 14.4-5.248 43.776V704h128zm64-448h384V128H320v128zm-64 128h64v64h-64v-64zm128 0h64v64h-64v-64z"
}, null, -1);
function render$1g(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1o, [
    _hoisted_2$1n
  ]);
}
script$2w.render = render$1g;
script$2w.__file = "packages/components/Printer.vue";
var script$2x = script$2w;
var script$2u = defineComponent({
  name: "Picture"
});
const _hoisted_1$1n = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1m = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_3$p = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M384 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM185.408 876.992l-50.816-38.912L350.72 556.032a96 96 0 0 1 134.592-17.856l1.856 1.472 122.88 99.136a32 32 0 0 0 44.992-4.864l216-269.888 49.92 39.936-215.808 269.824-.256.32a96 96 0 0 1-135.04 14.464l-122.88-99.072-.64-.512a32 32 0 0 0-44.8 5.952L185.408 876.992z"
}, null, -1);
function render$1f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1n, [
    _hoisted_2$1m,
    _hoisted_3$p
  ]);
}
script$2u.render = render$1f;
script$2u.__file = "packages/components/Picture.vue";
var script$2v = script$2u;
var script$2s = defineComponent({
  name: "RefreshRight"
});
const _hoisted_1$1m = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1l = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z"
}, null, -1);
function render$1e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1m, [
    _hoisted_2$1l
  ]);
}
script$2s.render = render$1e;
script$2s.__file = "packages/components/RefreshRight.vue";
var script$2t = script$2s;
var script$2q = defineComponent({
  name: "Reading"
});
const _hoisted_1$1l = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1k = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m512 863.36 384-54.848v-638.72L525.568 222.72a96 96 0 0 1-27.136 0L128 169.792v638.72l384 54.848zM137.024 106.432l370.432 52.928a32 32 0 0 0 9.088 0l370.432-52.928A64 64 0 0 1 960 169.792v638.72a64 64 0 0 1-54.976 63.36l-388.48 55.488a32 32 0 0 1-9.088 0l-388.48-55.488A64 64 0 0 1 64 808.512v-638.72a64 64 0 0 1 73.024-63.36z"
}, null, -1);
const _hoisted_3$o = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M480 192h64v704h-64z"
}, null, -1);
function render$1d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1l, [
    _hoisted_2$1k,
    _hoisted_3$o
  ]);
}
script$2q.render = render$1d;
script$2q.__file = "packages/components/Reading.vue";
var script$2r = script$2q;
var script$2o = defineComponent({
  name: "RefreshLeft"
});
const _hoisted_1$1k = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1j = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z"
}, null, -1);
function render$1c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1k, [
    _hoisted_2$1j
  ]);
}
script$2o.render = render$1c;
script$2o.__file = "packages/components/RefreshLeft.vue";
var script$2p = script$2o;
var script$2m = defineComponent({
  name: "Refresh"
});
const _hoisted_1$1j = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1i = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
}, null, -1);
function render$1b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1j, [
    _hoisted_2$1i
  ]);
}
script$2m.render = render$1b;
script$2m.__file = "packages/components/Refresh.vue";
var script$2n = script$2m;
var script$2k = defineComponent({
  name: "Refrigerator"
});
const _hoisted_1$1i = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1h = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M256 448h512V160a32 32 0 0 0-32-32H288a32 32 0 0 0-32 32v288zm0 64v352a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V512H256zm32-448h448a96 96 0 0 1 96 96v704a96 96 0 0 1-96 96H288a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96zm32 224h64v96h-64v-96zm0 288h64v96h-64v-96z"
}, null, -1);
function render$1a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1i, [
    _hoisted_2$1h
  ]);
}
script$2k.render = render$1a;
script$2k.__file = "packages/components/Refrigerator.vue";
var script$2l = script$2k;
var script$2i = defineComponent({
  name: "RemoveFilled"
});
const _hoisted_1$1h = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1g = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zM288 512a38.4 38.4 0 0 0 38.4 38.4h371.2a38.4 38.4 0 0 0 0-76.8H326.4A38.4 38.4 0 0 0 288 512z"
}, null, -1);
function render$19(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1h, [
    _hoisted_2$1g
  ]);
}
script$2i.render = render$19;
script$2i.__file = "packages/components/RemoveFilled.vue";
var script$2j = script$2i;
var script$2g = defineComponent({
  name: "Right"
});
const _hoisted_1$1g = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1f = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"
}, null, -1);
function render$18(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1g, [
    _hoisted_2$1f
  ]);
}
script$2g.render = render$18;
script$2g.__file = "packages/components/Right.vue";
var script$2h = script$2g;
var script$2e = defineComponent({
  name: "ScaleToOriginal"
});
const _hoisted_1$1f = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1e = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M813.176 180.706a60.235 60.235 0 0 1 60.236 60.235v481.883a60.235 60.235 0 0 1-60.236 60.235H210.824a60.235 60.235 0 0 1-60.236-60.235V240.94a60.235 60.235 0 0 1 60.236-60.235h602.352zm0-60.235H210.824A120.47 120.47 0 0 0 90.353 240.94v481.883a120.47 120.47 0 0 0 120.47 120.47h602.353a120.47 120.47 0 0 0 120.471-120.47V240.94a120.47 120.47 0 0 0-120.47-120.47zm-120.47 180.705a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 0 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zm-361.412 0a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 1 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zM512 361.412a30.118 30.118 0 0 0-30.118 30.117v30.118a30.118 30.118 0 0 0 60.236 0V391.53A30.118 30.118 0 0 0 512 361.412zM512 512a30.118 30.118 0 0 0-30.118 30.118v30.117a30.118 30.118 0 0 0 60.236 0v-30.117A30.118 30.118 0 0 0 512 512z"
}, null, -1);
function render$17(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1f, [
    _hoisted_2$1e
  ]);
}
script$2e.render = render$17;
script$2e.__file = "packages/components/ScaleToOriginal.vue";
var script$2f = script$2e;
var script$2c = defineComponent({
  name: "School"
});
const _hoisted_1$1e = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1d = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M224 128v704h576V128H224zm-32-64h640a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_3$n = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M64 832h896v64H64zm256-640h128v96H320z"
}, null, -1);
const _hoisted_4$5 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M384 832h256v-64a128 128 0 1 0-256 0v64zm128-256a192 192 0 0 1 192 192v128H320V768a192 192 0 0 1 192-192zM320 384h128v96H320zm256-192h128v96H576zm0 192h128v96H576z"
}, null, -1);
function render$16(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1e, [
    _hoisted_2$1d,
    _hoisted_3$n,
    _hoisted_4$5
  ]);
}
script$2c.render = render$16;
script$2c.__file = "packages/components/School.vue";
var script$2d = script$2c;
var script$2a = defineComponent({
  name: "Remove"
});
const _hoisted_1$1d = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1c = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"
}, null, -1);
const _hoisted_3$m = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
function render$15(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1d, [
    _hoisted_2$1c,
    _hoisted_3$m
  ]);
}
script$2a.render = render$15;
script$2a.__file = "packages/components/Remove.vue";
var script$2b = script$2a;
var script$28 = defineComponent({
  name: "Scissor"
});
const _hoisted_1$1c = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1b = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m512.064 578.368-106.88 152.768a160 160 0 1 1-23.36-78.208L472.96 522.56 196.864 128.256a32 32 0 1 1 52.48-36.736l393.024 561.344a160 160 0 1 1-23.36 78.208l-106.88-152.704zm54.4-189.248 208.384-297.6a32 32 0 0 1 52.48 36.736l-221.76 316.672-39.04-55.808zm-376.32 425.856a96 96 0 1 0 110.144-157.248 96 96 0 0 0-110.08 157.248zm643.84 0a96 96 0 1 0-110.08-157.248 96 96 0 0 0 110.08 157.248z"
}, null, -1);
function render$14(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1c, [
    _hoisted_2$1b
  ]);
}
script$28.render = render$14;
script$28.__file = "packages/components/Scissor.vue";
var script$29 = script$28;
var script$26 = defineComponent({
  name: "Select"
});
const _hoisted_1$1b = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1a = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
}, null, -1);
function render$13(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1b, [
    _hoisted_2$1a
  ]);
}
script$26.render = render$13;
script$26.__file = "packages/components/Select.vue";
var script$27 = script$26;
var script$24 = defineComponent({
  name: "Management"
});
const _hoisted_1$1a = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$19 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M576 128v288l96-96 96 96V128h128v768H320V128h256zm-448 0h128v768H128V128z"
}, null, -1);
function render$12(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$1a, [
    _hoisted_2$19
  ]);
}
script$24.render = render$12;
script$24.__file = "packages/components/Management.vue";
var script$25 = script$24;
var script$22 = defineComponent({
  name: "Search"
});
const _hoisted_1$19 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$18 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
}, null, -1);
function render$11(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$19, [
    _hoisted_2$18
  ]);
}
script$22.render = render$11;
script$22.__file = "packages/components/Search.vue";
var script$23 = script$22;
var script$20 = defineComponent({
  name: "Sell"
});
const _hoisted_1$18 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$17 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 483.84L768 698.496V928a32 32 0 1 1-64 0V698.496l-73.344 73.344a32 32 0 1 1-45.248-45.248l128-128a32 32 0 0 1 45.248 0l128 128a32 32 0 1 1-45.248 45.248z"
}, null, -1);
function render$10(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$18, [
    _hoisted_2$17
  ]);
}
script$20.render = render$10;
script$20.__file = "packages/components/Sell.vue";
var script$21 = script$20;
var script$1_ = defineComponent({
  name: "SemiSelect"
});
const _hoisted_1$17 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$16 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M128 448h768q64 0 64 64t-64 64H128q-64 0-64-64t64-64z"
}, null, -1);
function render$$(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$17, [
    _hoisted_2$16
  ]);
}
script$1_.render = render$$;
script$1_.__file = "packages/components/SemiSelect.vue";
var script$1$ = script$1_;
var script$1Y = defineComponent({
  name: "Share"
});
const _hoisted_1$16 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$15 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m679.872 348.8-301.76 188.608a127.808 127.808 0 0 1 5.12 52.16l279.936 104.96a128 128 0 1 1-22.464 59.904l-279.872-104.96a128 128 0 1 1-16.64-166.272l301.696-188.608a128 128 0 1 1 33.92 54.272z"
}, null, -1);
function render$_(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$16, [
    _hoisted_2$15
  ]);
}
script$1Y.render = render$_;
script$1Y.__file = "packages/components/Share.vue";
var script$1Z = script$1Y;
var script$1W = defineComponent({
  name: "Setting"
});
const _hoisted_1$15 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$14 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"
}, null, -1);
function render$Z(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$15, [
    _hoisted_2$14
  ]);
}
script$1W.render = render$Z;
script$1W.__file = "packages/components/Setting.vue";
var script$1X = script$1W;
var script$1U = defineComponent({
  name: "Service"
});
const _hoisted_1$14 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$13 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M864 409.6a192 192 0 0 1-37.888 349.44A256.064 256.064 0 0 1 576 960h-96a32 32 0 1 1 0-64h96a192.064 192.064 0 0 0 181.12-128H736a32 32 0 0 1-32-32V416a32 32 0 0 1 32-32h32c10.368 0 20.544.832 30.528 2.432a288 288 0 0 0-573.056 0A193.235 193.235 0 0 1 256 384h32a32 32 0 0 1 32 32v320a32 32 0 0 1-32 32h-32a192 192 0 0 1-96-358.4 352 352 0 0 1 704 0zM256 448a128 128 0 1 0 0 256V448zm640 128a128 128 0 0 0-128-128v256a128 128 0 0 0 128-128z"
}, null, -1);
function render$Y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$14, [
    _hoisted_2$13
  ]);
}
script$1U.render = render$Y;
script$1U.__file = "packages/components/Service.vue";
var script$1V = script$1U;
var script$1S = defineComponent({
  name: "Ship"
});
const _hoisted_1$13 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$12 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 386.88V448h405.568a32 32 0 0 1 30.72 40.768l-76.48 267.968A192 192 0 0 1 687.168 896H336.832a192 192 0 0 1-184.64-139.264L75.648 488.768A32 32 0 0 1 106.368 448H448V117.888a32 32 0 0 1 47.36-28.096l13.888 7.616L512 96v2.88l231.68 126.4a32 32 0 0 1-2.048 57.216L512 386.88zm0-70.272 144.768-65.792L512 171.84v144.768zM512 512H148.864l18.24 64H856.96l18.24-64H512zM185.408 640l28.352 99.2A128 128 0 0 0 336.832 832h350.336a128 128 0 0 0 123.072-92.8l28.352-99.2H185.408z"
}, null, -1);
function render$X(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$13, [
    _hoisted_2$12
  ]);
}
script$1S.render = render$X;
script$1S.__file = "packages/components/Ship.vue";
var script$1T = script$1S;
var script$1Q = defineComponent({
  name: "SetUp"
});
const _hoisted_1$12 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$11 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M224 160a64 64 0 0 0-64 64v576a64 64 0 0 0 64 64h576a64 64 0 0 0 64-64V224a64 64 0 0 0-64-64H224zm0-64h576a128 128 0 0 1 128 128v576a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V224A128 128 0 0 1 224 96z"
}, null, -1);
const _hoisted_3$l = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M384 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1);
const _hoisted_4$4 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M480 320h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32zm160 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1);
const _hoisted_5$1 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M288 640h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1);
function render$W(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$12, [
    _hoisted_2$11,
    _hoisted_3$l,
    _hoisted_4$4,
    _hoisted_5$1
  ]);
}
script$1Q.render = render$W;
script$1Q.__file = "packages/components/SetUp.vue";
var script$1R = script$1Q;
var script$1O = defineComponent({
  name: "ShoppingBag"
});
const _hoisted_1$11 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$10 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M704 320v96a32 32 0 0 1-32 32h-32V320H384v128h-32a32 32 0 0 1-32-32v-96H192v576h640V320H704zm-384-64a192 192 0 1 1 384 0h160a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32h160zm64 0h256a128 128 0 1 0-256 0z"
}, null, -1);
const _hoisted_3$k = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M192 704h640v64H192z"
}, null, -1);
function render$V(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$11, [
    _hoisted_2$10,
    _hoisted_3$k
  ]);
}
script$1O.render = render$V;
script$1O.__file = "packages/components/ShoppingBag.vue";
var script$1P = script$1O;
var script$1M = defineComponent({
  name: "Shop"
});
const _hoisted_1$10 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$$ = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M704 704h64v192H256V704h64v64h384v-64zm188.544-152.192C894.528 559.616 896 567.616 896 576a96 96 0 1 1-192 0 96 96 0 1 1-192 0 96 96 0 1 1-192 0 96 96 0 1 1-192 0c0-8.384 1.408-16.384 3.392-24.192L192 128h640l60.544 423.808z"
}, null, -1);
function render$U(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$10, [
    _hoisted_2$$
  ]);
}
script$1M.render = render$U;
script$1M.__file = "packages/components/Shop.vue";
var script$1N = script$1M;
var script$1K = defineComponent({
  name: "ShoppingCart"
});
const _hoisted_1$$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$_ = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z"
}, null, -1);
function render$T(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$$, [
    _hoisted_2$_
  ]);
}
script$1K.render = render$T;
script$1K.__file = "packages/components/ShoppingCart.vue";
var script$1L = script$1K;
var script$1I = defineComponent({
  name: "ShoppingCartFull"
});
const _hoisted_1$_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$Z = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z"
}, null, -1);
const _hoisted_3$j = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M699.648 256 608 145.984 516.352 256h183.296zm-140.8-151.04a64 64 0 0 1 98.304 0L836.352 320H379.648l179.2-215.04z"
}, null, -1);
function render$S(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$_, [
    _hoisted_2$Z,
    _hoisted_3$j
  ]);
}
script$1I.render = render$S;
script$1I.__file = "packages/components/ShoppingCartFull.vue";
var script$1J = script$1I;
var script$1G = defineComponent({
  name: "Soccer"
});
const _hoisted_1$Z = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$Y = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M418.496 871.04 152.256 604.8c-16.512 94.016-2.368 178.624 42.944 224 44.928 44.928 129.344 58.752 223.296 42.24zm72.32-18.176a573.056 573.056 0 0 0 224.832-137.216 573.12 573.12 0 0 0 137.216-224.832L533.888 171.84a578.56 578.56 0 0 0-227.52 138.496A567.68 567.68 0 0 0 170.432 532.48l320.384 320.384zM871.04 418.496c16.512-93.952 2.688-178.368-42.24-223.296-44.544-44.544-128.704-58.048-222.592-41.536L871.04 418.496zM149.952 874.048c-112.96-112.96-88.832-408.96 111.168-608.96C461.056 65.152 760.96 36.928 874.048 149.952c113.024 113.024 86.784 411.008-113.152 610.944-199.936 199.936-497.92 226.112-610.944 113.152zm452.544-497.792 22.656-22.656a32 32 0 0 1 45.248 45.248l-22.656 22.656 45.248 45.248A32 32 0 1 1 647.744 512l-45.248-45.248L557.248 512l45.248 45.248a32 32 0 1 1-45.248 45.248L512 557.248l-45.248 45.248L512 647.744a32 32 0 1 1-45.248 45.248l-45.248-45.248-22.656 22.656a32 32 0 1 1-45.248-45.248l22.656-22.656-45.248-45.248A32 32 0 1 1 376.256 512l45.248 45.248L466.752 512l-45.248-45.248a32 32 0 1 1 45.248-45.248L512 466.752l45.248-45.248L512 376.256a32 32 0 0 1 45.248-45.248l45.248 45.248z"
}, null, -1);
function render$R(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$Z, [
    _hoisted_2$Y
  ]);
}
script$1G.render = render$R;
script$1G.__file = "packages/components/Soccer.vue";
var script$1H = script$1G;
var script$1E = defineComponent({
  name: "SoldOut"
});
const _hoisted_1$Y = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$X = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 476.16a32 32 0 1 1 45.248 45.184l-128 128a32 32 0 0 1-45.248 0l-128-128a32 32 0 1 1 45.248-45.248L704 837.504V608a32 32 0 1 1 64 0v229.504l73.408-73.408z"
}, null, -1);
function render$Q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$Y, [
    _hoisted_2$X
  ]);
}
script$1E.render = render$Q;
script$1E.__file = "packages/components/SoldOut.vue";
var script$1F = script$1E;
var script$1C = defineComponent({
  name: "Smoking"
});
const _hoisted_1$X = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$W = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M256 576v128h640V576H256zm-32-64h704a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_3$i = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M704 576h64v128h-64zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z"
}, null, -1);
function render$P(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$X, [
    _hoisted_2$W,
    _hoisted_3$i
  ]);
}
script$1C.render = render$P;
script$1C.__file = "packages/components/Smoking.vue";
var script$1D = script$1C;
var script$1A = defineComponent({
  name: "SortDown"
});
const _hoisted_1$W = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$V = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M576 96v709.568L333.312 562.816A32 32 0 1 0 288 608l297.408 297.344A32 32 0 0 0 640 882.688V96a32 32 0 0 0-64 0z"
}, null, -1);
function render$O(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$W, [
    _hoisted_2$V
  ]);
}
script$1A.render = render$O;
script$1A.__file = "packages/components/SortDown.vue";
var script$1B = script$1A;
var script$1y = defineComponent({
  name: "Sort"
});
const _hoisted_1$V = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$U = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M384 96a32 32 0 0 1 64 0v786.752a32 32 0 0 1-54.592 22.656L95.936 608a32 32 0 0 1 0-45.312h.128a32 32 0 0 1 45.184 0L384 805.632V96zm192 45.248a32 32 0 0 1 54.592-22.592L928.064 416a32 32 0 0 1 0 45.312h-.128a32 32 0 0 1-45.184 0L640 218.496V928a32 32 0 1 1-64 0V141.248z"
}, null, -1);
function render$N(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$V, [
    _hoisted_2$U
  ]);
}
script$1y.render = render$N;
script$1y.__file = "packages/components/Sort.vue";
var script$1z = script$1y;
var script$1w = defineComponent({
  name: "SortUp"
});
const _hoisted_1$U = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$T = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M384 141.248V928a32 32 0 1 0 64 0V218.56l242.688 242.688A32 32 0 1 0 736 416L438.592 118.656A32 32 0 0 0 384 141.248z"
}, null, -1);
function render$M(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$U, [
    _hoisted_2$T
  ]);
}
script$1w.render = render$M;
script$1w.__file = "packages/components/SortUp.vue";
var script$1x = script$1w;
var script$1u = defineComponent({
  name: "Star"
});
const _hoisted_1$T = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$S = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72L512 747.84zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"
}, null, -1);
function render$L(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$T, [
    _hoisted_2$S
  ]);
}
script$1u.render = render$L;
script$1u.__file = "packages/components/Star.vue";
var script$1v = script$1u;
var script$1s = defineComponent({
  name: "Stamp"
});
const _hoisted_1$S = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$R = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M624 475.968V640h144a128 128 0 0 1 128 128H128a128 128 0 0 1 128-128h144V475.968a192 192 0 1 1 224 0zM128 896v-64h768v64H128z"
}, null, -1);
function render$K(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$S, [
    _hoisted_2$R
  ]);
}
script$1s.render = render$K;
script$1s.__file = "packages/components/Stamp.vue";
var script$1t = script$1s;
var script$1q = defineComponent({
  name: "StarFilled"
});
const _hoisted_1$R = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$Q = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"
}, null, -1);
function render$J(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$R, [
    _hoisted_2$Q
  ]);
}
script$1q.render = render$J;
script$1q.__file = "packages/components/StarFilled.vue";
var script$1r = script$1q;
var script$1o = defineComponent({
  name: "Stopwatch"
});
const _hoisted_1$Q = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$P = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
const _hoisted_3$h = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M672 234.88c-39.168 174.464-80 298.624-122.688 372.48-64 110.848-202.624 30.848-138.624-80C453.376 453.44 540.48 355.968 672 234.816z"
}, null, -1);
function render$I(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$Q, [
    _hoisted_2$P,
    _hoisted_3$h
  ]);
}
script$1o.render = render$I;
script$1o.__file = "packages/components/Stopwatch.vue";
var script$1p = script$1o;
var script$1m = defineComponent({
  name: "SuccessFilled"
});
const _hoisted_1$P = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$O = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
}, null, -1);
function render$H(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$P, [
    _hoisted_2$O
  ]);
}
script$1m.render = render$H;
script$1m.__file = "packages/components/SuccessFilled.vue";
var script$1n = script$1m;
var script$1k = defineComponent({
  name: "Suitcase"
});
const _hoisted_1$O = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$N = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M128 384h768v-64a64 64 0 0 0-64-64H192a64 64 0 0 0-64 64v64zm0 64v320a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V448H128zm64-256h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128z"
}, null, -1);
const _hoisted_3$g = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M384 128v64h256v-64H384zm0-64h256a64 64 0 0 1 64 64v64a64 64 0 0 1-64 64H384a64 64 0 0 1-64-64v-64a64 64 0 0 1 64-64z"
}, null, -1);
function render$G(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$O, [
    _hoisted_2$N,
    _hoisted_3$g
  ]);
}
script$1k.render = render$G;
script$1k.__file = "packages/components/Suitcase.vue";
var script$1l = script$1k;
var script$1i = defineComponent({
  name: "Sugar"
});
const _hoisted_1$N = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$M = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m801.728 349.184 4.48 4.48a128 128 0 0 1 0 180.992L534.656 806.144a128 128 0 0 1-181.056 0l-4.48-4.48-19.392 109.696a64 64 0 0 1-108.288 34.176L78.464 802.56a64 64 0 0 1 34.176-108.288l109.76-19.328-4.544-4.544a128 128 0 0 1 0-181.056l271.488-271.488a128 128 0 0 1 181.056 0l4.48 4.48 19.392-109.504a64 64 0 0 1 108.352-34.048l142.592 143.04a64 64 0 0 1-34.24 108.16l-109.248 19.2zm-548.8 198.72h447.168v2.24l60.8-60.8a63.808 63.808 0 0 0 18.752-44.416h-426.88l-89.664 89.728a64.064 64.064 0 0 0-10.24 13.248zm0 64c2.752 4.736 6.144 9.152 10.176 13.248l135.744 135.744a64 64 0 0 0 90.496 0L638.4 611.904H252.928zm490.048-230.976L625.152 263.104a64 64 0 0 0-90.496 0L416.768 380.928h326.208zM123.712 757.312l142.976 142.976 24.32-137.6a25.6 25.6 0 0 0-29.696-29.632l-137.6 24.256zm633.6-633.344-24.32 137.472a25.6 25.6 0 0 0 29.632 29.632l137.28-24.064-142.656-143.04z"
}, null, -1);
function render$F(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$N, [
    _hoisted_2$M
  ]);
}
script$1i.render = render$F;
script$1i.__file = "packages/components/Sugar.vue";
var script$1j = script$1i;
var script$1g = defineComponent({
  name: "Sunny"
});
const _hoisted_1$M = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$L = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 704a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm0-704a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 768a32 32 0 0 1 32 32v64a32 32 0 1 1-64 0v-64a32 32 0 0 1 32-32zM195.2 195.2a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 1 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm543.104 543.104a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 0 1-45.248 45.248l-45.248-45.248a32 32 0 0 1 0-45.248zM64 512a32 32 0 0 1 32-32h64a32 32 0 0 1 0 64H96a32 32 0 0 1-32-32zm768 0a32 32 0 0 1 32-32h64a32 32 0 1 1 0 64h-64a32 32 0 0 1-32-32zM195.2 828.8a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248L240.448 828.8a32 32 0 0 1-45.248 0zm543.104-543.104a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248l-45.248 45.248a32 32 0 0 1-45.248 0z"
}, null, -1);
function render$E(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$M, [
    _hoisted_2$L
  ]);
}
script$1g.render = render$E;
script$1g.__file = "packages/components/Sunny.vue";
var script$1h = script$1g;
var script$1e = defineComponent({
  name: "Sunrise"
});
const _hoisted_1$L = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$K = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M32 768h960a32 32 0 1 1 0 64H32a32 32 0 1 1 0-64zm129.408-96a352 352 0 0 1 701.184 0h-64.32a288 288 0 0 0-572.544 0h-64.32zM512 128a32 32 0 0 1 32 32v96a32 32 0 0 1-64 0v-96a32 32 0 0 1 32-32zm407.296 168.704a32 32 0 0 1 0 45.248l-67.84 67.84a32 32 0 1 1-45.248-45.248l67.84-67.84a32 32 0 0 1 45.248 0zm-814.592 0a32 32 0 0 1 45.248 0l67.84 67.84a32 32 0 1 1-45.248 45.248l-67.84-67.84a32 32 0 0 1 0-45.248z"
}, null, -1);
function render$D(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$L, [
    _hoisted_2$K
  ]);
}
script$1e.render = render$D;
script$1e.__file = "packages/components/Sunrise.vue";
var script$1f = script$1e;
var script$1c = defineComponent({
  name: "Switch"
});
const _hoisted_1$K = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$J = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M118.656 438.656a32 32 0 0 1 0-45.248L416 96l4.48-3.776A32 32 0 0 1 461.248 96l3.712 4.48a32.064 32.064 0 0 1-3.712 40.832L218.56 384H928a32 32 0 1 1 0 64H141.248a32 32 0 0 1-22.592-9.344zM64 608a32 32 0 0 1 32-32h786.752a32 32 0 0 1 22.656 54.592L608 928l-4.48 3.776a32.064 32.064 0 0 1-40.832-49.024L805.632 640H96a32 32 0 0 1-32-32z"
}, null, -1);
function render$C(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$K, [
    _hoisted_2$J
  ]);
}
script$1c.render = render$C;
script$1c.__file = "packages/components/Switch.vue";
var script$1d = script$1c;
var script$1a = defineComponent({
  name: "Ticket"
});
const _hoisted_1$J = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$I = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M640 832H64V640a128 128 0 1 0 0-256V192h576v160h64V192h256v192a128 128 0 1 0 0 256v192H704V672h-64v160zm0-416v192h64V416h-64z"
}, null, -1);
function render$B(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$J, [
    _hoisted_2$I
  ]);
}
script$1a.render = render$B;
script$1a.__file = "packages/components/Ticket.vue";
var script$1b = script$1a;
var script$18 = defineComponent({
  name: "Sunset"
});
const _hoisted_1$I = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$H = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M82.56 640a448 448 0 1 1 858.88 0h-67.2a384 384 0 1 0-724.288 0H82.56zM32 704h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32zm256 128h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1);
function render$A(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$I, [
    _hoisted_2$H
  ]);
}
script$18.render = render$A;
script$18.__file = "packages/components/Sunset.vue";
var script$19 = script$18;
var script$16 = defineComponent({
  name: "Tickets"
});
const _hoisted_1$H = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$G = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M192 128v768h640V128H192zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h192v64H320v-64zm0 384h384v64H320v-64z"
}, null, -1);
function render$z(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$H, [
    _hoisted_2$G
  ]);
}
script$16.render = render$z;
script$16.__file = "packages/components/Tickets.vue";
var script$17 = script$16;
var script$14 = defineComponent({
  name: "SwitchButton"
});
const _hoisted_1$G = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$F = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128z"
}, null, -1);
const _hoisted_3$f = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32z"
}, null, -1);
function render$y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$G, [
    _hoisted_2$F,
    _hoisted_3$f
  ]);
}
script$14.render = render$y;
script$14.__file = "packages/components/SwitchButton.vue";
var script$15 = script$14;
var script$12 = defineComponent({
  name: "TakeawayBox"
});
const _hoisted_1$F = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$E = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M832 384H192v448h640V384zM96 320h832V128H96v192zm800 64v480a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V384H64a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h896a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32h-64zM416 512h192a32 32 0 0 1 0 64H416a32 32 0 0 1 0-64z"
}, null, -1);
function render$x(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$F, [
    _hoisted_2$E
  ]);
}
script$12.render = render$x;
script$12.__file = "packages/components/TakeawayBox.vue";
var script$13 = script$12;
var script$10 = defineComponent({
  name: "ToiletPaper"
});
const _hoisted_1$E = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$D = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M595.2 128H320a192 192 0 0 0-192 192v576h384V352c0-90.496 32.448-171.2 83.2-224zM736 64c123.712 0 224 128.96 224 288S859.712 640 736 640H576v320H64V320A256 256 0 0 1 320 64h416zM576 352v224h160c84.352 0 160-97.28 160-224s-75.648-224-160-224-160 97.28-160 224z"
}, null, -1);
const _hoisted_3$e = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M736 448c-35.328 0-64-43.008-64-96s28.672-96 64-96 64 43.008 64 96-28.672 96-64 96z"
}, null, -1);
function render$w(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$E, [
    _hoisted_2$D,
    _hoisted_3$e
  ]);
}
script$10.render = render$w;
script$10.__file = "packages/components/ToiletPaper.vue";
var script$11 = script$10;
var script$_ = defineComponent({
  name: "Timer"
});
const _hoisted_1$D = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$C = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 896a320 320 0 1 0 0-640 320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768z"
}, null, -1);
const _hoisted_3$d = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 320a32 32 0 0 1 32 32l-.512 224a32 32 0 1 1-64 0L480 352a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_4$3 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M448 576a64 64 0 1 0 128 0 64 64 0 1 0-128 0zm96-448v128h-64V128h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64h-96z"
}, null, -1);
function render$v(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$D, [
    _hoisted_2$C,
    _hoisted_3$d,
    _hoisted_4$3
  ]);
}
script$_.render = render$v;
script$_.__file = "packages/components/Timer.vue";
var script$$ = script$_;
var script$Y = defineComponent({
  name: "Tools"
});
const _hoisted_1$C = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$B = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M764.416 254.72a351.68 351.68 0 0 1 86.336 149.184H960v192.064H850.752a351.68 351.68 0 0 1-86.336 149.312l54.72 94.72-166.272 96-54.592-94.72a352.64 352.64 0 0 1-172.48 0L371.136 936l-166.272-96 54.72-94.72a351.68 351.68 0 0 1-86.336-149.312H64v-192h109.248a351.68 351.68 0 0 1 86.336-149.312L204.8 160l166.208-96h.192l54.656 94.592a352.64 352.64 0 0 1 172.48 0L652.8 64h.128L819.2 160l-54.72 94.72zM704 499.968a192 192 0 1 0-384 0 192 192 0 0 0 384 0z"
}, null, -1);
function render$u(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$C, [
    _hoisted_2$B
  ]);
}
script$Y.render = render$u;
script$Y.__file = "packages/components/Tools.vue";
var script$Z = script$Y;
var script$W = defineComponent({
  name: "TopLeft"
});
const _hoisted_1$B = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$A = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M256 256h416a32 32 0 1 0 0-64H224a32 32 0 0 0-32 32v448a32 32 0 0 0 64 0V256z"
}, null, -1);
const _hoisted_3$c = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M246.656 201.344a32 32 0 0 0-45.312 45.312l544 544a32 32 0 0 0 45.312-45.312l-544-544z"
}, null, -1);
function render$t(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$B, [
    _hoisted_2$A,
    _hoisted_3$c
  ]);
}
script$W.render = render$t;
script$W.__file = "packages/components/TopLeft.vue";
var script$X = script$W;
var script$U = defineComponent({
  name: "Top"
});
const _hoisted_1$A = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$z = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M572.235 205.282v600.365a30.118 30.118 0 1 1-60.235 0V205.282L292.382 438.633a28.913 28.913 0 0 1-42.646 0 33.43 33.43 0 0 1 0-45.236l271.058-288.045a28.913 28.913 0 0 1 42.647 0L834.5 393.397a33.43 33.43 0 0 1 0 45.176 28.913 28.913 0 0 1-42.647 0l-219.618-233.23z"
}, null, -1);
function render$s(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$A, [
    _hoisted_2$z
  ]);
}
script$U.render = render$s;
script$U.__file = "packages/components/Top.vue";
var script$V = script$U;
var script$S = defineComponent({
  name: "TopRight"
});
const _hoisted_1$z = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$y = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0V256z"
}, null, -1);
const _hoisted_3$b = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312l544-544z"
}, null, -1);
function render$r(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$z, [
    _hoisted_2$y,
    _hoisted_3$b
  ]);
}
script$S.render = render$r;
script$S.__file = "packages/components/TopRight.vue";
var script$T = script$S;
var script$Q = defineComponent({
  name: "TrendCharts"
});
const _hoisted_1$y = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$x = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M128 896V128h768v768H128zm291.712-327.296 128 102.4 180.16-201.792-47.744-42.624-139.84 156.608-128-102.4-180.16 201.792 47.744 42.624 139.84-156.608zM816 352a48 48 0 1 0-96 0 48 48 0 0 0 96 0z"
}, null, -1);
function render$q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$y, [
    _hoisted_2$x
  ]);
}
script$Q.render = render$q;
script$Q.__file = "packages/components/TrendCharts.vue";
var script$R = script$Q;
var script$O = defineComponent({
  name: "TurnOff"
});
const _hoisted_1$x = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$w = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724H329.956zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z"
}, null, -1);
const _hoisted_3$a = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M329.956 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454zm0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088z"
}, null, -1);
function render$p(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$x, [
    _hoisted_2$w,
    _hoisted_3$a
  ]);
}
script$O.render = render$p;
script$O.__file = "packages/components/TurnOff.vue";
var script$P = script$O;
var script$M = defineComponent({
  name: "Unlock"
});
const _hoisted_1$w = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$v = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z"
}, null, -1);
const _hoisted_3$9 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm178.304-295.296A192.064 192.064 0 0 0 320 320v64h352l96 38.4V448H256V320a256 256 0 0 1 493.76-95.104l-59.456 23.808z"
}, null, -1);
function render$o(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$w, [
    _hoisted_2$v,
    _hoisted_3$9
  ]);
}
script$M.render = render$o;
script$M.__file = "packages/components/Unlock.vue";
var script$N = script$M;
var script$K = defineComponent({
  name: "Trophy"
});
const _hoisted_1$v = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$u = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M480 896V702.08A256.256 256.256 0 0 1 264.064 512h-32.64a96 96 0 0 1-91.968-68.416L93.632 290.88a76.8 76.8 0 0 1 73.6-98.88H256V96a32 32 0 0 1 32-32h448a32 32 0 0 1 32 32v96h88.768a76.8 76.8 0 0 1 73.6 98.88L884.48 443.52A96 96 0 0 1 792.576 512h-32.64A256.256 256.256 0 0 1 544 702.08V896h128a32 32 0 1 1 0 64H352a32 32 0 1 1 0-64h128zm224-448V128H320v320a192 192 0 1 0 384 0zm64 0h24.576a32 32 0 0 0 30.656-22.784l45.824-152.768A12.8 12.8 0 0 0 856.768 256H768v192zm-512 0V256h-88.768a12.8 12.8 0 0 0-12.288 16.448l45.824 152.768A32 32 0 0 0 231.424 448H256z"
}, null, -1);
function render$n(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$v, [
    _hoisted_2$u
  ]);
}
script$K.render = render$n;
script$K.__file = "packages/components/Trophy.vue";
var script$L = script$K;
var script$I = defineComponent({
  name: "Umbrella"
});
const _hoisted_1$u = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$t = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M320 768a32 32 0 1 1 64 0 64 64 0 0 0 128 0V512H64a448 448 0 1 1 896 0H576v256a128 128 0 1 1-256 0zm570.688-320a384.128 384.128 0 0 0-757.376 0h757.376z"
}, null, -1);
function render$m(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$u, [
    _hoisted_2$t
  ]);
}
script$I.render = render$m;
script$I.__file = "packages/components/Umbrella.vue";
var script$J = script$I;
var script$G = defineComponent({
  name: "UploadFilled"
});
const _hoisted_1$t = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$s = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6H544z"
}, null, -1);
function render$l(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$t, [
    _hoisted_2$s
  ]);
}
script$G.render = render$l;
script$G.__file = "packages/components/UploadFilled.vue";
var script$H = script$G;
var script$E = defineComponent({
  name: "UserFilled"
});
const _hoisted_1$s = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$r = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0zm544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"
}, null, -1);
function render$k(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$s, [
    _hoisted_2$r
  ]);
}
script$E.render = render$k;
script$E.__file = "packages/components/UserFilled.vue";
var script$F = script$E;
var script$C = defineComponent({
  name: "Upload"
});
const _hoisted_1$r = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$q = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248L544 253.696z"
}, null, -1);
function render$j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$r, [
    _hoisted_2$q
  ]);
}
script$C.render = render$j;
script$C.__file = "packages/components/Upload.vue";
var script$D = script$C;
var script$A = defineComponent({
  name: "User"
});
const _hoisted_1$q = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$p = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0z"
}, null, -1);
function render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$q, [
    _hoisted_2$p
  ]);
}
script$A.render = render$i;
script$A.__file = "packages/components/User.vue";
var script$B = script$A;
var script$y = defineComponent({
  name: "Van"
});
const _hoisted_1$p = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$o = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M128.896 736H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v96h164.544a32 32 0 0 1 31.616 27.136l54.144 352A32 32 0 0 1 922.688 736h-91.52a144 144 0 1 1-286.272 0H415.104a144 144 0 1 1-286.272 0zm23.36-64a143.872 143.872 0 0 1 239.488 0H568.32c17.088-25.6 42.24-45.376 71.744-55.808V256H128v416h24.256zm655.488 0h77.632l-19.648-128H704v64.896A144 144 0 0 1 807.744 672zm48.128-192-14.72-96H704v96h151.872zM688 832a80 80 0 1 0 0-160 80 80 0 0 0 0 160zm-416 0a80 80 0 1 0 0-160 80 80 0 0 0 0 160z"
}, null, -1);
function render$h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$p, [
    _hoisted_2$o
  ]);
}
script$y.render = render$h;
script$y.__file = "packages/components/Van.vue";
var script$z = script$y;
var script$w = defineComponent({
  name: "CopyDocument"
});
const _hoisted_1$o = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$n = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64h64z"
}, null, -1);
const _hoisted_3$8 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H384zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64z"
}, null, -1);
function render$g(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$o, [
    _hoisted_2$n,
    _hoisted_3$8
  ]);
}
script$w.render = render$g;
script$w.__file = "packages/components/CopyDocument.vue";
var script$x = script$w;
var script$u = defineComponent({
  name: "VideoPause"
});
const _hoisted_1$n = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$m = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-96-544q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32zm192 0q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32z"
}, null, -1);
function render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$n, [
    _hoisted_2$m
  ]);
}
script$u.render = render$f;
script$u.__file = "packages/components/VideoPause.vue";
var script$v = script$u;
var script$s = defineComponent({
  name: "VideoCameraFilled"
});
const _hoisted_1$m = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$l = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m768 576 192-64v320l-192-64v96a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V480a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v96zM192 768v64h384v-64H192zm192-480a160 160 0 0 1 320 0 160 160 0 0 1-320 0zm64 0a96 96 0 1 0 192.064-.064A96 96 0 0 0 448 288zm-320 32a128 128 0 1 1 256.064.064A128 128 0 0 1 128 320zm64 0a64 64 0 1 0 128 0 64 64 0 0 0-128 0z"
}, null, -1);
function render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$m, [
    _hoisted_2$l
  ]);
}
script$s.render = render$e;
script$s.__file = "packages/components/VideoCameraFilled.vue";
var script$t = script$s;
var script$q = defineComponent({
  name: "View"
});
const _hoisted_1$l = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$k = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
}, null, -1);
function render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$l, [
    _hoisted_2$k
  ]);
}
script$q.render = render$d;
script$q.__file = "packages/components/View.vue";
var script$r = script$q;
var script$o = defineComponent({
  name: "Wallet"
});
const _hoisted_1$k = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$j = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M640 288h-64V128H128v704h384v32a32 32 0 0 0 32 32H96a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h512a32 32 0 0 1 32 32v192z"
}, null, -1);
const _hoisted_3$7 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M128 320v512h768V320H128zm-32-64h832a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_4$2 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M704 640a64 64 0 1 1 0-128 64 64 0 0 1 0 128z"
}, null, -1);
function render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$k, [
    _hoisted_2$j,
    _hoisted_3$7,
    _hoisted_4$2
  ]);
}
script$o.render = render$c;
script$o.__file = "packages/components/Wallet.vue";
var script$p = script$o;
var script$m = defineComponent({
  name: "WarningFilled"
});
const _hoisted_1$j = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$i = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
}, null, -1);
function render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$j, [
    _hoisted_2$i
  ]);
}
script$m.render = render$b;
script$m.__file = "packages/components/WarningFilled.vue";
var script$n = script$m;
var script$k = defineComponent({
  name: "Watch"
});
const _hoisted_1$i = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$h = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 768a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"
}, null, -1);
const _hoisted_3$6 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M480 352a32 32 0 0 1 32 32v160a32 32 0 0 1-64 0V384a32 32 0 0 1 32-32z"
}, null, -1);
const _hoisted_4$1 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M480 512h128q32 0 32 32t-32 32H480q-32 0-32-32t32-32zm128-256V128H416v128h-64V64h320v192h-64zM416 768v128h192V768h64v192H352V768h64z"
}, null, -1);
function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$i, [
    _hoisted_2$h,
    _hoisted_3$6,
    _hoisted_4$1
  ]);
}
script$k.render = render$a;
script$k.__file = "packages/components/Watch.vue";
var script$l = script$k;
var script$i = defineComponent({
  name: "VideoPlay"
});
const _hoisted_1$h = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$g = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-48-247.616L668.608 512 464 375.616v272.768zm10.624-342.656 249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z"
}, null, -1);
function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$h, [
    _hoisted_2$g
  ]);
}
script$i.render = render$9;
script$i.__file = "packages/components/VideoPlay.vue";
var script$j = script$i;
var script$g = defineComponent({
  name: "Watermelon"
});
const _hoisted_1$g = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$f = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m683.072 600.32-43.648 162.816-61.824-16.512 53.248-198.528L576 493.248l-158.4 158.4-45.248-45.248 158.4-158.4-55.616-55.616-198.528 53.248-16.512-61.824 162.816-43.648L282.752 200A384 384 0 0 0 824 741.248L683.072 600.32zm231.552 141.056a448 448 0 1 1-632-632l632 632z"
}, null, -1);
function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$g, [
    _hoisted_2$f
  ]);
}
script$g.render = render$8;
script$g.__file = "packages/components/Watermelon.vue";
var script$h = script$g;
var script$e = defineComponent({
  name: "VideoCamera"
});
const _hoisted_1$f = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$e = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M704 768V256H128v512h576zm64-416 192-96v512l-192-96v128a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v128zm0 71.552v176.896l128 64V359.552l-128 64zM192 320h192v64H192v-64z"
}, null, -1);
function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$f, [
    _hoisted_2$e
  ]);
}
script$e.render = render$7;
script$e.__file = "packages/components/VideoCamera.vue";
var script$f = script$e;
var script$c = defineComponent({
  name: "WalletFilled"
});
const _hoisted_1$e = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$d = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M688 512a112 112 0 1 0 0 224h208v160H128V352h768v160H688zm32 160h-32a48 48 0 0 1 0-96h32a48 48 0 0 1 0 96zm-80-544 128 160H384l256-160z"
}, null, -1);
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$e, [
    _hoisted_2$d
  ]);
}
script$c.render = render$6;
script$c.__file = "packages/components/WalletFilled.vue";
var script$d = script$c;
var script$a = defineComponent({
  name: "Warning"
});
const _hoisted_1$d = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$c = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0zm-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
}, null, -1);
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$d, [
    _hoisted_2$c
  ]);
}
script$a.render = render$5;
script$a.__file = "packages/components/Warning.vue";
var script$b = script$a;
var script$8 = defineComponent({
  name: "List"
});
const _hoisted_1$c = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$b = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M704 192h160v736H160V192h160v64h384v-64zM288 512h448v-64H288v64zm0 256h448v-64H288v64zm96-576V96h256v96H384z"
}, null, -1);
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$c, [
    _hoisted_2$b
  ]);
}
script$8.render = render$4;
script$8.__file = "packages/components/List.vue";
var script$9 = script$8;
var script$6 = defineComponent({
  name: "ZoomIn"
});
const _hoisted_1$b = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$a = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zm-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96z"
}, null, -1);
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$b, [
    _hoisted_2$a
  ]);
}
script$6.render = render$3;
script$6.__file = "packages/components/ZoomIn.vue";
var script$7 = script$6;
var script$4 = defineComponent({
  name: "ZoomOut"
});
const _hoisted_1$a = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$9 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zM352 448h256a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64z"
}, null, -1);
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$a, [
    _hoisted_2$9
  ]);
}
script$4.render = render$2;
script$4.__file = "packages/components/ZoomOut.vue";
var script$5 = script$4;
var script$2 = defineComponent({
  name: "Rank"
});
const _hoisted_1$9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$8 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "m186.496 544 41.408 41.344a32 32 0 1 1-45.248 45.312l-96-96a32 32 0 0 1 0-45.312l96-96a32 32 0 1 1 45.248 45.312L186.496 480h290.816V186.432l-41.472 41.472a32 32 0 1 1-45.248-45.184l96-96.128a32 32 0 0 1 45.312 0l96 96.064a32 32 0 0 1-45.248 45.184l-41.344-41.28V480H832l-41.344-41.344a32 32 0 0 1 45.248-45.312l96 96a32 32 0 0 1 0 45.312l-96 96a32 32 0 0 1-45.248-45.312L832 544H541.312v293.44l41.344-41.28a32 32 0 1 1 45.248 45.248l-96 96a32 32 0 0 1-45.312 0l-96-96a32 32 0 1 1 45.312-45.248l41.408 41.408V544H186.496z"
}, null, -1);
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$9, [
    _hoisted_2$8
  ]);
}
script$2.render = render$1;
script$2.__file = "packages/components/Rank.vue";
var script$3 = script$2;
var script = defineComponent({
  name: "WindPower"
});
const _hoisted_1$8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$7 = /* @__PURE__ */ createVNode("path", {
  fill: "currentColor",
  d: "M160 64q32 0 32 32v832q0 32-32 32t-32-32V96q0-32 32-32zm416 354.624 128-11.584V168.96l-128-11.52v261.12zm-64 5.824V151.552L320 134.08V160h-64V64l616.704 56.064A96 96 0 0 1 960 215.68v144.64a96 96 0 0 1-87.296 95.616L256 512V224h64v217.92l192-17.472zm256-23.232 98.88-8.96A32 32 0 0 0 896 360.32V215.68a32 32 0 0 0-29.12-31.872l-98.88-8.96v226.368z"
}, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$8, [
    _hoisted_2$7
  ]);
}
script.render = render;
script.__file = "packages/components/WindPower.vue";
var script$1 = script;
var ElIcons = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Aim: script$8L,
  AddLocation: script$8J,
  Apple: script$8H,
  AlarmClock: script$8F,
  ArrowDown: script$8D,
  ArrowDownBold: script$8B,
  ArrowLeft: script$8z,
  ArrowLeftBold: script$8x,
  ArrowRightBold: script$8v,
  ArrowUp: script$8t,
  Back: script$8r,
  Bell: script$8p,
  Baseball: script$8n,
  Bicycle: script$8l,
  BellFilled: script$8j,
  Basketball: script$8h,
  Bottom: script$8f,
  Box: script$8d,
  Briefcase: script$8b,
  BrushFilled: script$89,
  Bowl: script$87,
  Avatar: script$85,
  Brush: script$83,
  Burger: script$81,
  Camera: script$7$,
  BottomLeft: script$7Z,
  Calendar: script$7X,
  CaretBottom: script$7V,
  CaretLeft: script$7T,
  CaretRight: script$7R,
  CaretTop: script$7P,
  ChatDotSquare: script$7N,
  Cellphone: script$7L,
  ChatDotRound: script$7J,
  ChatLineSquare: script$7H,
  ChatLineRound: script$7F,
  ChatRound: script$7D,
  Check: script$7B,
  ChatSquare: script$7z,
  Cherry: script$7x,
  Chicken: script$7v,
  CircleCheckFilled: script$7t,
  CircleCheck: script$7r,
  Checked: script$7p,
  CircleCloseFilled: script$7n,
  CircleClose: script$7l,
  ArrowRight: script$7j,
  CirclePlus: script$7h,
  Clock: script$7f,
  CloseBold: script$7d,
  Close: script$7b,
  Cloudy: script$79,
  CirclePlusFilled: script$77,
  CoffeeCup: script$75,
  ColdDrink: script$73,
  Coin: script$71,
  ArrowUpBold: script$6$,
  CollectionTag: script$6Z,
  BottomRight: script$6X,
  Coffee: script$6V,
  CameraFilled: script$6T,
  Collection: script$6R,
  Cpu: script$6P,
  Crop: script$6N,
  Coordinate: script$6L,
  DArrowLeft: script$6J,
  Compass: script$6H,
  Connection: script$6F,
  CreditCard: script$6D,
  DataBoard: script$6B,
  DArrowRight: script$6z,
  Dessert: script$6x,
  DeleteLocation: script$6v,
  DCaret: script$6t,
  Delete: script$6r,
  Dish: script$6p,
  DishDot: script$6n,
  DocumentCopy: script$6l,
  Discount: script$6j,
  DocumentChecked: script$6h,
  DocumentAdd: script$6f,
  DocumentRemove: script$6d,
  DataAnalysis: script$6b,
  DeleteFilled: script$69,
  Download: script$67,
  Drizzling: script$65,
  Eleme: script$63,
  ElemeFilled: script$61,
  Edit: script$5$,
  Failed: script$5Z,
  Expand: script$5X,
  Female: script$5V,
  Document: script$5T,
  Film: script$5R,
  Finished: script$5P,
  DataLine: script$5N,
  Filter: script$5L,
  Flag: script$5J,
  FolderChecked: script$5H,
  FirstAidKit: script$5F,
  FolderAdd: script$5D,
  Fold: script$5B,
  FolderDelete: script$5z,
  DocumentDelete: script$5x,
  Folder: script$5v,
  Food: script$5t,
  FolderOpened: script$5r,
  Football: script$5p,
  FolderRemove: script$5n,
  Fries: script$5l,
  FullScreen: script$5j,
  ForkSpoon: script$5h,
  Goblet: script$5f,
  GobletFull: script$5d,
  Goods: script$5b,
  GobletSquareFull: script$59,
  GoodsFilled: script$57,
  Grid: script$55,
  Grape: script$53,
  GobletSquare: script$51,
  Headset: script$4$,
  Comment: script$4Z,
  HelpFilled: script$4X,
  Histogram: script$4V,
  HomeFilled: script$4T,
  Help: script$4R,
  House: script$4P,
  IceCreamRound: script$4N,
  HotWater: script$4L,
  IceCream: script$4J,
  Files: script$4H,
  IceCreamSquare: script$4F,
  Key: script$4D,
  IceTea: script$4B,
  KnifeFork: script$4z,
  Iphone: script$4x,
  InfoFilled: script$4v,
  Link: script$4t,
  IceDrink: script$4r,
  Lightning: script$4p,
  Loading: script$4n,
  Lollipop: script$4l,
  LocationInformation: script$4j,
  Lock: script$4h,
  LocationFilled: script$4f,
  Magnet: script$4d,
  Male: script$4b,
  Location: script$49,
  Menu: script$47,
  MagicStick: script$45,
  MessageBox: script$43,
  MapLocation: script$41,
  Mic: script$3$,
  Message: script$3Z,
  Medal: script$3X,
  MilkTea: script$3V,
  Microphone: script$3T,
  Minus: script$3R,
  Money: script$3P,
  MoonNight: script$3N,
  Monitor: script$3L,
  Moon: script$3J,
  More: script$3H,
  MostlyCloudy: script$3F,
  MoreFilled: script$3D,
  Mouse: script$3B,
  Mug: script$3z,
  Mute: script$3x,
  NoSmoking: script$3v,
  MuteNotification: script$3t,
  Notification: script$3r,
  Notebook: script$3p,
  Odometer: script$3n,
  OfficeBuilding: script$3l,
  Operation: script$3j,
  Opportunity: script$3h,
  Orange: script$3f,
  Open: script$3d,
  Paperclip: script$3b,
  Pear: script$39,
  PartlyCloudy: script$37,
  Phone: script$35,
  PictureFilled: script$33,
  PhoneFilled: script$31,
  PictureRounded: script$2$,
  Guide: script$2Z,
  Place: script$2X,
  Platform: script$2V,
  PieChart: script$2T,
  Pointer: script$2R,
  Plus: script$2P,
  Position: script$2N,
  Postcard: script$2L,
  Present: script$2J,
  PriceTag: script$2H,
  Promotion: script$2F,
  Pouring: script$2D,
  ReadingLamp: script$2B,
  QuestionFilled: script$2z,
  Printer: script$2x,
  Picture: script$2v,
  RefreshRight: script$2t,
  Reading: script$2r,
  RefreshLeft: script$2p,
  Refresh: script$2n,
  Refrigerator: script$2l,
  RemoveFilled: script$2j,
  Right: script$2h,
  ScaleToOriginal: script$2f,
  School: script$2d,
  Remove: script$2b,
  Scissor: script$29,
  Select: script$27,
  Management: script$25,
  Search: script$23,
  Sell: script$21,
  SemiSelect: script$1$,
  Share: script$1Z,
  Setting: script$1X,
  Service: script$1V,
  Ship: script$1T,
  SetUp: script$1R,
  ShoppingBag: script$1P,
  Shop: script$1N,
  ShoppingCart: script$1L,
  ShoppingCartFull: script$1J,
  Soccer: script$1H,
  SoldOut: script$1F,
  Smoking: script$1D,
  SortDown: script$1B,
  Sort: script$1z,
  SortUp: script$1x,
  Star: script$1v,
  Stamp: script$1t,
  StarFilled: script$1r,
  Stopwatch: script$1p,
  SuccessFilled: script$1n,
  Suitcase: script$1l,
  Sugar: script$1j,
  Sunny: script$1h,
  Sunrise: script$1f,
  Switch: script$1d,
  Ticket: script$1b,
  Sunset: script$19,
  Tickets: script$17,
  SwitchButton: script$15,
  TakeawayBox: script$13,
  ToiletPaper: script$11,
  Timer: script$$,
  Tools: script$Z,
  TopLeft: script$X,
  Top: script$V,
  TopRight: script$T,
  TrendCharts: script$R,
  TurnOff: script$P,
  Unlock: script$N,
  Trophy: script$L,
  Umbrella: script$J,
  UploadFilled: script$H,
  UserFilled: script$F,
  Upload: script$D,
  User: script$B,
  Van: script$z,
  CopyDocument: script$x,
  VideoPause: script$v,
  VideoCameraFilled: script$t,
  View: script$r,
  Wallet: script$p,
  WarningFilled: script$n,
  Watch: script$l,
  VideoPlay: script$j,
  Watermelon: script$h,
  VideoCamera: script$f,
  WalletFilled: script$d,
  Warning: script$b,
  List: script$9,
  ZoomIn: script$7,
  ZoomOut: script$5,
  Rank: script$3,
  WindPower: script$1
}, Symbol.toStringTag, { value: "Module" }));
const toLine = (value) => {
  return value.replace(/(A-Z)g/, "-$1").toLocaleLowerCase();
};
function fromPairs(pairs) {
  var index2 = -1, length = pairs == null ? 0 : pairs.length, result = {};
  while (++index2 < length) {
    var pair = pairs[index2];
    result[pair[0]] = pair[1];
  }
  return result;
}
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
const isClient = typeof window !== "undefined";
const isNumber = (val) => typeof val === "number";
const isString$1 = (val) => typeof val === "string";
const noop = () => {
};
function useTimeoutFn(cb, interval, options = {}) {
  const {
    immediate = true
  } = options;
  const isPending = ref(false);
  let timer = null;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function stop() {
    isPending.value = false;
    clear();
  }
  function start(...args) {
    clear();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = null;
      cb(...args);
    }, unref(interval));
  }
  if (immediate) {
    isPending.value = true;
    if (isClient)
      start();
  }
  tryOnScopeDispose(stop);
  return {
    isPending,
    start,
    stop
  };
}
function unrefElement(elRef) {
  var _a2;
  const plain = unref(elRef);
  return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
}
const defaultWindow = isClient ? window : void 0;
function useEventListener(...args) {
  let target;
  let event;
  let listener;
  let options;
  if (isString$1(args[0])) {
    [event, listener, options] = args;
    target = defaultWindow;
  } else {
    [target, event, listener, options] = args;
  }
  if (!target)
    return noop;
  let cleanup = noop;
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (!el)
      return;
    el.addEventListener(event, listener, options);
    cleanup = () => {
      el.removeEventListener(event, listener, options);
      cleanup = noop;
    };
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
_global[globalKey];
var _a, _b;
isClient && (window == null ? void 0 : window.navigator) && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.platform) && /iP(ad|hone|od)/.test((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.platform);
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isObject = (val) => val !== null && typeof val === "object";
const isUndefined = (val) => val === void 0;
const isElement = (e) => {
  if (typeof Element === "undefined")
    return false;
  return e instanceof Element;
};
const keysOf = (arr) => Object.keys(arr);
function addUnit(value, defaultUnit = "px") {
  if (!value)
    return "";
  if (isString(value)) {
    return value;
  } else if (isNumber(value)) {
    return `${value}${defaultUnit}`;
  }
}
var _export_sfc$2 = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$8 = defineComponent({
  name: "CircleCloseFilled"
});
const _hoisted_1$7 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$6 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"
}, null, -1);
const _hoisted_3$5 = [
  _hoisted_2$6
];
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_3$5);
}
var circleCloseFilled = /* @__PURE__ */ _export_sfc$2(_sfc_main$8, [["render", _sfc_render$5]]);
const _sfc_main$7 = defineComponent({
  name: "Close"
});
const _hoisted_1$6 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$5 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1);
const _hoisted_3$4 = [
  _hoisted_2$5
];
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_3$4);
}
var close$1 = /* @__PURE__ */ _export_sfc$2(_sfc_main$7, [["render", _sfc_render$4]]);
const _sfc_main$6 = defineComponent({
  name: "InfoFilled"
});
const _hoisted_1$5 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$4
];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_3$3);
}
var infoFilled = /* @__PURE__ */ _export_sfc$2(_sfc_main$6, [["render", _sfc_render$3]]);
const _sfc_main$5 = defineComponent({
  name: "SuccessFilled"
});
const _hoisted_1$4 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$3
];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3$2);
}
var successFilled = /* @__PURE__ */ _export_sfc$2(_sfc_main$5, [["render", _sfc_render$2]]);
const _sfc_main$4 = defineComponent({
  name: "WarningFilled"
});
const _hoisted_1$3 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$2
];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$1);
}
var warningFilled = /* @__PURE__ */ _export_sfc$2(_sfc_main$4, [["render", _sfc_render$1]]);
const wrapperKey = Symbol();
const propKey = "__elPropsReservedKey";
function buildProp(option, key) {
  if (!isObject(option) || !!option[propKey])
    return option;
  const { values, required, default: defaultValue, type, validator } = option;
  const _validator = values || validator ? (val) => {
    let valid = false;
    let allowedValues = [];
    if (values) {
      allowedValues = Array.from(values);
      if (hasOwn(option, "default")) {
        allowedValues.push(defaultValue);
      }
      valid || (valid = allowedValues.includes(val));
    }
    if (validator)
      valid || (valid = validator(val));
    if (!valid && allowedValues.length > 0) {
      const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
      warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
    }
    return valid;
  } : void 0;
  const prop = {
    type: isObject(type) && Object.getOwnPropertySymbols(type).includes(wrapperKey) ? type[wrapperKey] : type,
    required: !!required,
    validator: _validator,
    [propKey]: true
  };
  if (hasOwn(option, "default"))
    prop.default = defaultValue;
  return prop;
}
const buildProps = (props) => fromPairs(Object.entries(props).map(([key, option]) => [
  key,
  buildProp(option, key)
]));
const definePropType = (val) => ({ [wrapperKey]: val });
const iconPropType = definePropType([
  String,
  Object,
  Function
]);
const TypeComponents = {
  Close: close$1,
  SuccessFilled: successFilled,
  InfoFilled: infoFilled,
  WarningFilled: warningFilled,
  CircleCloseFilled: circleCloseFilled
};
const TypeComponentsMap = {
  success: successFilled,
  warning: warningFilled,
  error: circleCloseFilled,
  info: infoFilled
};
const withInstall = (main, extra) => {
  main.install = (app) => {
    for (const comp of [main, ...Object.values(extra != null ? extra : {})]) {
      app.component(comp.name, comp);
    }
  };
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      main[key] = comp;
    }
  }
  return main;
};
const withInstallFunction = (fn, name) => {
  fn.install = (app) => {
    fn._context = app._context;
    app.config.globalProperties[name] = fn;
  };
  return fn;
};
const EVENT_CODE = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
};
const componentSizes = ["", "default", "small", "large"];
const configProviderContextKey = Symbol();
const globalConfig = ref();
function useGlobalConfig(key, defaultValue = void 0) {
  const config = getCurrentInstance() ? inject(configProviderContextKey, globalConfig) : globalConfig;
  if (key) {
    return computed(() => {
      var _a2, _b2;
      return (_b2 = (_a2 = config.value) == null ? void 0 : _a2[key]) != null ? _b2 : defaultValue;
    });
  } else {
    return config;
  }
}
const provideGlobalConfig = (config, app, global2 = false) => {
  var _a2;
  const inSetup = !!getCurrentInstance();
  const oldConfig = inSetup ? useGlobalConfig() : void 0;
  const provideFn = (_a2 = app == null ? void 0 : app.provide) != null ? _a2 : inSetup ? provide : void 0;
  if (!provideFn) {
    return;
  }
  const context = computed(() => {
    const cfg = unref(config);
    if (!(oldConfig == null ? void 0 : oldConfig.value))
      return cfg;
    return mergeConfig(oldConfig.value, cfg);
  });
  provideFn(configProviderContextKey, context);
  if (global2 || !globalConfig.value) {
    globalConfig.value = context.value;
  }
  return context;
};
const mergeConfig = (a, b) => {
  var _a2;
  const keys = [.../* @__PURE__ */ new Set([...keysOf(a), ...keysOf(b)])];
  const obj = {};
  for (const key of keys) {
    obj[key] = (_a2 = b[key]) != null ? _a2 : a[key];
  }
  return obj;
};
const defaultNamespace = "el";
const statePrefix = "is-";
const _bem = (namespace, block, blockSuffix, element, modifier) => {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};
const useNamespace = (block) => {
  const globalConfig2 = useGlobalConfig("namespace");
  const namespace = computed(() => globalConfig2.value || defaultNamespace);
  const b = (blockSuffix = "") => _bem(unref(namespace), block, blockSuffix, "", "");
  const e = (element) => element ? _bem(unref(namespace), block, "", element, "") : "";
  const m = (modifier) => modifier ? _bem(unref(namespace), block, "", "", modifier) : "";
  const be = (blockSuffix, element) => blockSuffix && element ? _bem(unref(namespace), block, blockSuffix, element, "") : "";
  const em = (element, modifier) => element && modifier ? _bem(unref(namespace), block, "", element, modifier) : "";
  const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(unref(namespace), block, blockSuffix, "", modifier) : "";
  const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem(unref(namespace), block, blockSuffix, element, modifier) : "";
  const is = (name, ...args) => {
    const state = args.length >= 1 ? args[0] : true;
    return name && state ? `${statePrefix}${name}` : "";
  };
  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is
  };
};
const zIndex = ref(0);
const useZIndex = () => {
  const initialZIndex = useGlobalConfig("zIndex", 2e3);
  const currentZIndex = computed(() => initialZIndex.value + zIndex.value);
  const nextZIndex = () => {
    zIndex.value++;
    return currentZIndex.value;
  };
  return {
    initialZIndex,
    currentZIndex,
    nextZIndex
  };
};
var _export_sfc$1 = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const iconProps = buildProps({
  size: {
    type: definePropType([Number, String])
  },
  color: {
    type: String
  }
});
const __default__$1 = {
  name: "ElIcon",
  inheritAttrs: false
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$1), {
  props: iconProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("icon");
    const style = computed(() => {
      if (!props.size && !props.color)
        return {};
      return {
        fontSize: isUndefined(props.size) ? void 0 : addUnit(props.size),
        "--color": props.color
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("i", mergeProps({
        class: unref(ns).b(),
        style: unref(style)
      }, _ctx.$attrs), [
        renderSlot(_ctx.$slots, "default")
      ], 16);
    };
  }
}));
var Icon = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const ElIcon = withInstall(Icon);
const badgeProps = buildProps({
  value: {
    type: [String, Number],
    default: ""
  },
  max: {
    type: Number,
    default: 99
  },
  isDot: Boolean,
  hidden: Boolean,
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger"],
    default: "danger"
  }
});
const _hoisted_1$2 = ["textContent"];
const __default__ = {
  name: "ElBadge"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: badgeProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns = useNamespace("badge");
    const content = computed(() => {
      if (props.isDot)
        return "";
      if (isNumber(props.value) && isNumber(props.max)) {
        return props.max < props.value ? `${props.max}+` : `${props.value}`;
      }
      return `${props.value}`;
    });
    expose({
      content
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(ns).b())
      }, [
        renderSlot(_ctx.$slots, "default"),
        createVNode(Transition, {
          name: `${unref(ns).namespace.value}-zoom-in-center`
        }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("sup", {
              class: normalizeClass([
                unref(ns).e("content"),
                unref(ns).em("content", _ctx.type),
                unref(ns).is("fixed", !!_ctx.$slots.default),
                unref(ns).is("dot", _ctx.isDot)
              ]),
              textContent: toDisplayString(unref(content))
            }, null, 10, _hoisted_1$2), [
              [vShow, !_ctx.hidden && (unref(content) || unref(content) === "0" || _ctx.isDot)]
            ])
          ]),
          _: 1
        }, 8, ["name"])
      ], 2);
    };
  }
}));
var Badge = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);
const ElBadge = withInstall(Badge);
const messageConfig = {};
const configProviderProps = buildProps({
  a11y: {
    type: Boolean,
    default: true
  },
  locale: {
    type: definePropType(Object)
  },
  size: {
    type: String,
    values: componentSizes,
    default: ""
  },
  button: {
    type: definePropType(Object)
  },
  experimentalFeatures: {
    type: definePropType(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: true
  },
  message: {
    type: definePropType(Object)
  },
  zIndex: {
    type: Number
  },
  namespace: {
    type: String,
    default: "el"
  }
});
defineComponent({
  name: "ElConfigProvider",
  props: configProviderProps,
  setup(props, { slots }) {
    watch(() => props.message, (val) => {
      Object.assign(messageConfig, val != null ? val : {});
    }, { immediate: true, deep: true });
    const config = provideGlobalConfig(props);
    return () => renderSlot(slots, "default", { config: config == null ? void 0 : config.value });
  }
});
const messageTypes = ["success", "info", "warning", "error"];
const messageProps = buildProps({
  customClass: {
    type: String,
    default: ""
  },
  center: {
    type: Boolean,
    default: false
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: false
  },
  duration: {
    type: Number,
    default: 3e3
  },
  icon: {
    type: iconPropType,
    default: ""
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: definePropType([
      String,
      Object,
      Function
    ]),
    default: ""
  },
  onClose: {
    type: definePropType(Function),
    required: false
  },
  showClose: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    values: messageTypes,
    default: "info"
  },
  offset: {
    type: Number,
    default: 20
  },
  zIndex: {
    type: Number,
    default: 0
  },
  grouping: {
    type: Boolean,
    default: false
  },
  repeatNum: {
    type: Number,
    default: 1
  }
});
const messageEmits = {
  destroy: () => true
};
const _sfc_main$1 = defineComponent({
  name: "ElMessage",
  components: __spreadValues({
    ElBadge,
    ElIcon
  }, TypeComponents),
  props: messageProps,
  emits: messageEmits,
  setup(props) {
    const ns = useNamespace("message");
    const visible = ref(false);
    const badgeType = ref(props.type ? props.type === "error" ? "danger" : props.type : "info");
    let stopTimer = void 0;
    const typeClass = computed(() => {
      const type = props.type;
      return { [ns.bm("icon", type)]: type && TypeComponentsMap[type] };
    });
    const iconComponent = computed(() => {
      return props.icon || TypeComponentsMap[props.type] || "";
    });
    const customStyle = computed(() => ({
      top: `${props.offset}px`,
      zIndex: props.zIndex
    }));
    function startTimer() {
      if (props.duration > 0) {
        ({ stop: stopTimer } = useTimeoutFn(() => {
          if (visible.value)
            close2();
        }, props.duration));
      }
    }
    function clearTimer() {
      stopTimer == null ? void 0 : stopTimer();
    }
    function close2() {
      visible.value = false;
    }
    function keydown({ code }) {
      if (code === EVENT_CODE.esc) {
        if (visible.value) {
          close2();
        }
      } else {
        startTimer();
      }
    }
    onMounted(() => {
      startTimer();
      visible.value = true;
    });
    watch(() => props.repeatNum, () => {
      clearTimer();
      startTimer();
    });
    useEventListener(document, "keydown", keydown);
    return {
      ns,
      typeClass,
      iconComponent,
      customStyle,
      visible,
      badgeType,
      close: close2,
      clearTimer,
      startTimer
    };
  }
});
const _hoisted_1$1 = ["id"];
const _hoisted_2$1 = ["innerHTML"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_badge = resolveComponent("el-badge");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_close = resolveComponent("close");
  return openBlock(), createBlock(Transition, {
    name: _ctx.ns.b("fade"),
    onBeforeLeave: _ctx.onClose,
    onAfterLeave: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("destroy"))
  }, {
    default: withCtx(() => [
      withDirectives(createElementVNode("div", {
        id: _ctx.id,
        class: normalizeClass([
          _ctx.ns.b(),
          { [_ctx.ns.m(_ctx.type)]: _ctx.type && !_ctx.icon },
          _ctx.ns.is("center", _ctx.center),
          _ctx.ns.is("closable", _ctx.showClose),
          _ctx.customClass
        ]),
        style: normalizeStyle(_ctx.customStyle),
        role: "alert",
        onMouseenter: _cache[0] || (_cache[0] = (...args) => _ctx.clearTimer && _ctx.clearTimer(...args)),
        onMouseleave: _cache[1] || (_cache[1] = (...args) => _ctx.startTimer && _ctx.startTimer(...args))
      }, [
        _ctx.repeatNum > 1 ? (openBlock(), createBlock(_component_el_badge, {
          key: 0,
          value: _ctx.repeatNum,
          type: _ctx.badgeType,
          class: normalizeClass(_ctx.ns.e("badge"))
        }, null, 8, ["value", "type", "class"])) : createCommentVNode("v-if", true),
        _ctx.iconComponent ? (openBlock(), createBlock(_component_el_icon, {
          key: 1,
          class: normalizeClass([_ctx.ns.e("icon"), _ctx.typeClass])
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.iconComponent)))
          ]),
          _: 1
        }, 8, ["class"])) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "default", {}, () => [
          !_ctx.dangerouslyUseHTMLString ? (openBlock(), createElementBlock("p", {
            key: 0,
            class: normalizeClass(_ctx.ns.e("content"))
          }, toDisplayString(_ctx.message), 3)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createCommentVNode(" Caution here, message could've been compromised, never use user's input as message "),
            createElementVNode("p", {
              class: normalizeClass(_ctx.ns.e("content")),
              innerHTML: _ctx.message
            }, null, 10, _hoisted_2$1)
          ], 2112))
        ]),
        _ctx.showClose ? (openBlock(), createBlock(_component_el_icon, {
          key: 2,
          class: normalizeClass(_ctx.ns.e("closeBtn")),
          onClick: withModifiers(_ctx.close, ["stop"])
        }, {
          default: withCtx(() => [
            createVNode(_component_close)
          ]),
          _: 1
        }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
      ], 46, _hoisted_1$1), [
        [vShow, _ctx.visible]
      ])
    ]),
    _: 3
  }, 8, ["name", "onBeforeLeave"]);
}
var MessageConstructor = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);
const instances = [];
let seed = 1;
const message = function(options = {}, context) {
  if (!isClient)
    return { close: () => void 0 };
  if (isNumber(messageConfig.max) && instances.length >= messageConfig.max) {
    return { close: () => void 0 };
  }
  if (!isVNode(options) && isObject(options) && options.grouping && !isVNode(options.message) && instances.length) {
    const tempVm = instances.find((item) => {
      var _a2, _b2, _c;
      return `${(_b2 = (_a2 = item.vm.props) == null ? void 0 : _a2.message) != null ? _b2 : ""}` === `${(_c = options.message) != null ? _c : ""}`;
    });
    if (tempVm) {
      tempVm.vm.component.props.repeatNum += 1;
      tempVm.vm.component.props.type = (options == null ? void 0 : options.type) || "info";
      return {
        close: () => vm.component.proxy.visible = false
      };
    }
  }
  if (isString(options) || isVNode(options)) {
    options = { message: options };
  }
  let verticalOffset = options.offset || 20;
  instances.forEach(({ vm: vm2 }) => {
    var _a2;
    verticalOffset += (((_a2 = vm2.el) == null ? void 0 : _a2.offsetHeight) || 0) + 16;
  });
  verticalOffset += 16;
  const { nextZIndex } = useZIndex();
  const id = `message_${seed++}`;
  const userOnClose = options.onClose;
  const props = __spreadProps(__spreadValues({
    zIndex: nextZIndex()
  }, options), {
    offset: verticalOffset,
    id,
    onClose: () => {
      close(id, userOnClose);
    }
  });
  let appendTo = document.body;
  if (isElement(options.appendTo)) {
    appendTo = options.appendTo;
  } else if (isString(options.appendTo)) {
    appendTo = document.querySelector(options.appendTo);
  }
  if (!isElement(appendTo)) {
    appendTo = document.body;
  }
  const container = document.createElement("div");
  container.className = `container_${id}`;
  const messageContent = props.message;
  const vm = createVNode(MessageConstructor, props, isFunction(messageContent) ? { default: messageContent } : isVNode(messageContent) ? { default: () => messageContent } : null);
  vm.appContext = context || message._context;
  vm.props.onDestroy = () => {
    render$4o(null, container);
  };
  render$4o(vm, container);
  instances.push({ vm });
  appendTo.appendChild(container.firstElementChild);
  return {
    close: () => vm.component.proxy.visible = false
  };
};
messageTypes.forEach((type) => {
  message[type] = (options = {}, appContext) => {
    if (isString(options) || isVNode(options)) {
      options = {
        message: options
      };
    }
    return message(__spreadProps(__spreadValues({}, options), {
      type
    }), appContext);
  };
});
function close(id, userOnClose) {
  const idx = instances.findIndex(({ vm: vm2 }) => id === vm2.component.props.id);
  if (idx === -1)
    return;
  const { vm } = instances[idx];
  if (!vm)
    return;
  userOnClose == null ? void 0 : userOnClose(vm);
  const removedHeight = vm.el.offsetHeight;
  instances.splice(idx, 1);
  const len = instances.length;
  if (len < 1)
    return;
  for (let i = idx; i < len; i++) {
    const pos = Number.parseInt(instances[i].vm.el.style["top"], 10) - removedHeight - 16;
    instances[i].vm.component.props.offset = pos;
  }
}
function closeAll() {
  var _a2;
  for (let i = instances.length - 1; i >= 0; i--) {
    const instance = instances[i].vm.component;
    (_a2 = instance == null ? void 0 : instance.proxy) == null ? void 0 : _a2.close();
  }
}
message.closeAll = closeAll;
message._context = null;
const ElMessage = withInstallFunction(message, "$message");
const useCopy = (text) => {
  let input = document.createElement("input");
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand("Copy");
  document.body.removeChild(input);
  ElMessage.success("\u590D\u5236\u6210\u529F");
};
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _withScopeId = (n) => (pushScopeId("data-v-1998f2ba"), n = n(), popScopeId(), n);
const _hoisted_1 = { className: "m--choose-icon-dialog-body-height" };
const _hoisted_2 = { className: "container" };
const _hoisted_3 = ["onClick"];
const _hoisted_4 = { className: "text" };
const _hoisted_5 = { className: "icon" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", {
  className: "footer",
  style: { "padding-top": "10px" }
}, null, -1));
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    title: null,
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(__props, { emit: emits }) {
    const props = __props;
    let handleClick = () => {
      emits("update:visible", !props.visible);
    };
    watch(() => props.visible, (val) => {
      console.log("\u6211\u53EA\u884C\u4E86props.visible");
      dialogVisible.value = val;
    });
    let dialogVisible = ref(props.visible);
    watch(() => dialogVisible.value, (val) => {
      console.log("\u6211\u53EA\u884C\u4E86dialogVisible");
      emits("update:visible", val);
    });
    let clickItem = (item) => {
      let text = `<el-icon-${toLine(item)} />`;
      useCopy(text);
      dialogVisible.value = false;
    };
    return (_ctx, _cache) => {
      const _component_el_button = resolveComponent("el-button");
      const _component_el_dialog = resolveComponent("el-dialog");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_el_button, {
          onClick: unref(handleClick),
          type: "primary"
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ]),
          _: 3
        }, 8, ["onClick"]),
        createElementVNode("div", _hoisted_1, [
          createVNode(_component_el_dialog, {
            title: __props.title,
            modelValue: unref(dialogVisible),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(dialogVisible) ? dialogVisible.value = $event : dialogVisible = $event)
          }, {
            footer: withCtx(() => [
              _hoisted_6
            ]),
            default: withCtx(() => [
              createElementVNode("div", _hoisted_2, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(unref(ElIcons)), (item, index2) => {
                  return openBlock(), createElementBlock("div", {
                    className: "item",
                    key: index2,
                    onClick: ($event) => unref(clickItem)(item)
                  }, [
                    createElementVNode("div", _hoisted_4, [
                      (openBlock(), createBlock(resolveDynamicComponent(`el-icon-${unref(toLine)(item)}`)))
                    ]),
                    createElementVNode("div", _hoisted_5, toDisplayString(item), 1)
                  ], 8, _hoisted_3);
                }), 128))
              ])
            ]),
            _: 1
          }, 8, ["title", "modelValue"])
        ])
      ], 64);
    };
  }
});
var chooseIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1998f2ba"]]);
var index = {
  install(app) {
    app.component("se-choose-icon", chooseIcon);
  }
};
export { index as default };
