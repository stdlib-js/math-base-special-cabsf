// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Math.fround?Math.fround:null;var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var n=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;var e,a="function"==typeof Symbol?Symbol:void 0,f="function"==typeof a?a.toStringTag:"";e=r&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,a,u,i;if(null==t)return n.call(t);e=t[f],i=f,r=null!=(u=t)&&o.call(u,i);try{t[f]=void 0}catch(r){return n.call(t)}return a=n.call(t),r?t[f]=e:delete t[f],a}:function(t){return n.call(t)};var u=e,i="function"==typeof Float32Array;var c=Number.POSITIVE_INFINITY,y="function"==typeof Float32Array?Float32Array:null;var l="function"==typeof Float32Array?Float32Array:void 0;var v=function(){var t,r,n;if("function"!=typeof y)return!1;try{r=new y([1,3.14,-3.14,5e40]),n=r,t=(i&&n instanceof Float32Array||"[object Float32Array]"===u(n))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===c}catch(r){t=!1}return t}()?l:function(){throw new Error("not implemented")},p=new v(1);var b="function"==typeof t?t:function(t){return p[0]=t,p[0]};function A(t){return t!=t}var m="function"==typeof Uint32Array;var w="function"==typeof Uint32Array?Uint32Array:null;var d="function"==typeof Uint32Array?Uint32Array:void 0;var h=function(){var t,r,n;if("function"!=typeof w)return!1;try{r=new w(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(m&&n instanceof Uint32Array||"[object Uint32Array]"===u(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?d:function(){throw new Error("not implemented")},S=new v(1);new h(S.buffer)[0]=2139095040;var F=S[0],s=new v(1);new h(s.buffer)[0]=4286578688;var U=s[0];function g(t){return t===F||t===U}var I=Math.sqrt;function N(t){return r=function(t){return t.re}(t),n=function(t){return t.im}(t),A(r)||A(n)?NaN:g(r)||g(n)?F:((r=b(r))<0&&(r=-r),(n=b(n))<0&&(n=-n),r<n&&(o=n,n=r,r=o),0===r?0:(n=b(n/r),b(r*b(I(b(1+b(n*n)))))));var r,n,o}export{N as default};
//# sourceMappingURL=mod.js.map