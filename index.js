// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t,n="function"==typeof Math.fround?Math.fround:null,r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,e=Object.prototype.hasOwnProperty,f="function"==typeof Symbol?Symbol.toStringTag:"";t=r&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,i,u,a;if(null==t)return o.call(t);r=t[f],a=f,n=null!=(u=t)&&e.call(u,a);try{t[f]=void 0}catch(n){return o.call(t)}return i=o.call(t),n?t[f]=r:delete t[f],i}:function(t){return o.call(t)};var i=t,u="function"==typeof Float32Array,a=Number.POSITIVE_INFINITY,c="function"==typeof Float32Array?Float32Array:null,y="function"==typeof Float32Array?Float32Array:void 0,l=function(){var t,n,r;if("function"!=typeof c)return!1;try{n=new c([1,3.14,-3.14,5e40]),r=n,t=(u&&r instanceof Float32Array||"[object Float32Array]"===i(r))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===a}catch(n){t=!1}return t}()?y:function(){throw new Error("not implemented")},p=new l(1),b="function"==typeof n?n:function(t){return p[0]=t,p[0]};function d(t){return t!=t}var m="function"==typeof Uint32Array,s="function"==typeof Uint32Array?Uint32Array:null,v="function"==typeof Uint32Array?Uint32Array:void 0,A=function(){var t,n,r;if("function"!=typeof s)return!1;try{n=new s(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(m&&r instanceof Uint32Array||"[object Uint32Array]"===i(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?v:function(){throw new Error("not implemented")},h=new l(1);new A(h.buffer)[0]=2139095040;var w=h[0],S=new l(1);new A(S.buffer)[0]=4286578688;var F=S[0];function g(t){return t===w||t===F}var U=Math.sqrt;return function(t){return n=function(t){return t.re}(t),r=function(t){return t.im}(t),d(n)||d(r)?NaN:g(n)||g(r)?w:((n=b(n))<0&&(n=-n),(r=b(r))<0&&(r=-r),n<r&&(o=r,r=n,n=o),0===n?0:(r=b(r/n),b(n*b(U(b(1+b(r*r)))))));var n,r,o}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).cabsf=n();
//# sourceMappingURL=index.js.map
