!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i);var l=i("iU1Pc"),r=document.querySelector(".form"),a={firsDelayEl:r.querySelector('[name="delay"]'),stepDelayEl:r.querySelector('[name="step"]'),amountEl:r.querySelector('[name="amount"]'),submitBtn:r.querySelector("button")},u={};r.addEventListener("input",(function(e){var t=e.target.name;u[t]=Number(e.target.value),console.log(e.target.name)}));function c(){var t,o,n,i,r;u.counter>=u.amount||(u.counter+=1,console.log("obj",u),console.log("delayTIme",u.delayTime),console.log("position",u.counter),t=u.counter,o=u.delayTime,(n=t,i=o,r=Math.random()>.3,new Promise((function(e,t){r?e({position:n,delay:i}):t({position:n,delay:i})}))).then((function(t){var o=t.position,n=t.delay;e(l).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"))})).catch((function(t){var o=t.position,n=t.delay;e(l).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(n,"ms"))})),u.delayTime+=u.step,setTimeout(c,u.step))}a.submitBtn.addEventListener("click",(function(t){u.delay&&u.step&&u.amount?function(e){e.preventDefault(),u.counter=0,u.delayTime=u.delay,setTimeout(c,u.delayTime)}(t):e(l).Notify.failure("❌ Fill all fields")}))}();
//# sourceMappingURL=03-promises.5364bdfe.js.map