// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Math.fround?Math.fround:null;var n=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var t=function(){return n&&"symbol"==typeof Symbol.toStringTag},o=Object.prototype.toString,e=o;var a=function(r){return e.call(r)},u=Object.prototype.hasOwnProperty;var f=function(r,n){return null!=r&&u.call(r,n)},i="function"==typeof Symbol?Symbol.toStringTag:"",c=f,y=i,l=o;var v=function(r){var n,t,o;if(null==r)return l.call(r);t=r[y],n=c(r,y);try{r[y]=void 0}catch(n){return l.call(r)}return o=l.call(r),n?r[y]=t:delete r[y],o},p=a,b=v,A=t()?b:p,m=A,w="function"==typeof Float32Array;var d=function(r){return w&&r instanceof Float32Array||"[object Float32Array]"===m(r)},h=Number.POSITIVE_INFINITY,S="function"==typeof Float32Array?Float32Array:null,F=d,s=h,U=S;var g="function"==typeof Float32Array?Float32Array:void 0,I=function(){throw new Error("not implemented")},N=function(){var r,n;if("function"!=typeof U)return!1;try{n=new U([1,3.14,-3.14,5e40]),r=F(n)&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===s}catch(n){r=!1}return r}()?g:I,j=new N(1);var O=r;"function"!=typeof O&&(O=function(r){return j[0]=r,j[0]});var T=O;var E=function(r){return r!=r},M=A,P="function"==typeof Uint32Array;var q="function"==typeof Uint32Array?Uint32Array:null,x=function(r){return P&&r instanceof Uint32Array||"[object Uint32Array]"===M(r)},V=q;var Y="function"==typeof Uint32Array?Uint32Array:void 0,_=function(){throw new Error("not implemented")},k=function(){var r,n;if("function"!=typeof V)return!1;try{n=new V(n=[1,3.14,-3.14,4294967296,4294967297]),r=x(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Y:_,z=k,B=new N(1);new z(B.buffer)[0]=2139095040;var C,D=B[0],G=k,H=new N(1);new G(H.buffer)[0]=4286578688,C=H[0];var J=D,K=C;var L=function(r){return r===J||r===K},Q=Math.sqrt,R=T,W=E,X=L,Z=D,$=Q;var rr=function(r,n){var t;return W(r)||W(n)?NaN:X(r)||X(n)?Z:((r=R(r))<0&&(r=-r),(n=R(n))<0&&(n=-n),r<n&&(t=n,n=r,r=t),0===r?0:(n=R(n/r),R(r*R($(R(1+R(n*n)))))))},nr=function(r){return r.re},tr=function(r){return r.im};var or=function(r){return rr(nr(r),tr(r))};export{or as default};
//# sourceMappingURL=mod.js.map
