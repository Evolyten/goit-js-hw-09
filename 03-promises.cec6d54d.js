!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i,u=r("iU1Pc"),a=document.querySelector(".form"),l={firsDelayEl:a.querySelector('[name="delay"]'),stepDelayEl:a.querySelector('[name="step"]'),amountEl:a.querySelector('[name="amount"]'),submitBtn:a.querySelector("button")},c={};function d(){var t,n,o,r,a;c.counter>=c.amount?(clearTimeout(i),c.amount=0):(c.delayTime=c.delay+c.step*c.counter,c.counter+=1,c.currentTimeout=c.delay+c.step*c.counter,t=c.counter,n=c.delayTime,(o=t,r=n,a=Math.random()>.3,new Promise((function(e,t){a?e({position:o,delay:r}):t({position:o,delay:r})}))).then((function(t){var n=t.position,o=t.delay;e(u).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(u).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))),i=setTimeout(d,c.currentTimeout)}a.addEventListener("input",(function(e){var t=e.target.name;c[t]=Number(e.target.value),console.log(e.target.name)})),l.submitBtn.addEventListener("click",(function(e){e.preventDefault(),c.counter=0,c.delayTime=0,c.currentTimeout=0,i=setTimeout(d,c.delay)}))}();
//# sourceMappingURL=03-promises.cec6d54d.js.map
