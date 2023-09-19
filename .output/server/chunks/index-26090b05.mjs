import { _ as _sfc_main$1 } from './DigitDisplay-a62b5f01.mjs';
import { u as useNuxtApp } from './server.mjs';
import { defineComponent, ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttr, ssrRenderComponent, ssrIncludeBooleanAttr, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1, b as _imports_2 } from './UTA-909a626e.mjs';
import 'gsap';
import 'lodash-es';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'defu';
import './config.mjs';
import 'destr';
import 'scule';
import './paths.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { $confetti } = useNuxtApp().vueApp.config.globalProperties;
    console.log(useNuxtApp().vueApp);
    const dispNum = ref(0);
    const dispNum1 = ref(0);
    const dispNum2 = ref(0);
    const dispNum3 = ref(0);
    const dispNum4 = ref(0);
    const loading = ref(false);
    Array.from({ length: 300 }, (_, i) => i + 1);
    const confettiSettings = {
      particlesPerFrame: 2,
      defaultDropRate: 15,
      particles: [{ type: "circle" }, { type: "heart" }, { type: "rect" }]
    };
    const onAnimationEnd = () => {
      loading.value = false;
      $confetti.start(confettiSettings);
      setTimeout(() => {
        $confetti.stop();
      }, 2e3);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DigitDisplay = _sfc_main$1;
      _push(`<!--[--><div><nav><ul><li><a href="/1d">\u7279\u7B49\u5956</a></li><li><a href="/1n">\u5927\u5956</a></li><li><a href="/">\u5E78\u8FD0\u5956</a></li></ul></nav></div><div class="flex h-screen bg-center bg-no-repeat bg-cover bg-hero-pattern"><header class="absolute w-screen flex items-center justify-center pt-[10vh]"><img${ssrRenderAttr("src", _imports_0)} class="scale-150 pb-40" alt="\u5154\u5E74\u65B0\u6625\u665A\u4F1A\u62BD\u5956"></header><div class="column flex flex-col p-5"><img${ssrRenderAttr("src", _imports_1)} alt="\u9E23\u8C22WST\u8D5E\u52A9" class="mt-auto flex-justify center m-5 scale-125 origin-bottom-left"></div><main class="m-auto mt-60 w-1/2 min-w-fit overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 backdrop-blur bg-white bg-opacity-60"><div class="center_column">`);
      _push(ssrRenderComponent(_component_DigitDisplay, {
        class: "my-8",
        target: unref(dispNum1),
        onAnimationStart: ($event) => loading.value = true,
        onAnimationEnd: ($event) => onAnimationEnd()
      }, null, _parent));
      _push(ssrRenderComponent(_component_DigitDisplay, {
        class: "my-8",
        target: unref(dispNum2),
        onAnimationStart: ($event) => loading.value = true,
        onAnimationEnd: ($event) => onAnimationEnd()
      }, null, _parent));
      _push(`</div><div class="center_column">`);
      _push(ssrRenderComponent(_component_DigitDisplay, {
        class: "my-8",
        target: unref(dispNum3),
        onAnimationStart: ($event) => loading.value = true,
        onAnimationEnd: ($event) => onAnimationEnd()
      }, null, _parent));
      _push(`<div class="flex justify-center my-8"><button${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} class="${ssrRenderClass([{
        "bg-gray-300": unref(loading),
        "bg-red-500 hover:bg-red-600 active:bg-red-700 active:shadow-inner shadow-md": !unref(loading)
      }, "text-white text-5xl font-medium rounded-full px-8 py-2 transition-all duration-200 disabled:cursor-wait"])}">${ssrInterpolate(unref(loading) ? "Loading..." : "Draw")}</button></div></div><div class="center_column">`);
      _push(ssrRenderComponent(_component_DigitDisplay, {
        class: "my-8",
        target: unref(dispNum4),
        onAnimationStart: ($event) => loading.value = true,
        onAnimationEnd: ($event) => onAnimationEnd()
      }, null, _parent));
      _push(ssrRenderComponent(_component_DigitDisplay, {
        class: "my-8",
        target: unref(dispNum),
        onAnimationStart: ($event) => loading.value = true,
        onAnimationEnd: ($event) => onAnimationEnd()
      }, null, _parent));
      _push(`</div></main><div class="column flex flex-col p-5"><img${ssrRenderAttr("src", _imports_2)} alt="\u9E23\u8C22Weeee\u8D5E\u52A9" class="mt-auto flex-justify center m-5 scale-110 origin-bottom-right"></div><footer class="absolute bottom-4 w-screen text-center"><span class="text-slate-800">\xA9 <strong>UTCSSA</strong> - Alex Kuang and Junyu Yao, 2023.</span></footer></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-26090b05.mjs.map