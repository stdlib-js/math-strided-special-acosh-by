// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,e=n.toString,o=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,a=n.__lookupSetter__,f=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,f){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===e.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(u.call(t,r)||a.call(t,r)?(c=t.__proto__,t.__proto__=n,delete t[r],t[r]=f.value,t.__proto__=c):t[r]=f.value),y="get"in f,p="set"in f,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,r,f.get),p&&i&&i.call(t,r,f.set),t};function c(t,r,n){f(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}function l(t,r,n,e,o,i,u,a){var f,c,l,y;if(t<=0)return e;for(f=n<0?(1-t)*n:0,c=o<0?(1-t)*o:0,y=0;y<t;y++)void 0!==(l=u.call(a,r[f],y,f,c,r,e))&&(e[c]=i(l)),f+=n,c+=o;return e}function y(t,r,n,e,o,i,u,a,f,c){var l,y,p,b;if(t<=0)return o;for(l=e,y=u,b=0;b<t;b++)void 0!==(p=f.call(c,r[l],b,l,y,r,o))&&(o[y]=a(p)),l+=n,y+=i;return o}function p(t){return t!=t}c(l,"ndarray",y);var b,d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),v=Object.prototype.toString,A=Object.prototype.hasOwnProperty,_="function"==typeof Symbol?Symbol.toStringTag:"",m=d&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e,o,i;if(null==t)return v.call(t);n=t[_],i=_,r=null!=(o=t)&&A.call(o,i);try{t[_]=void 0}catch(r){return v.call(t)}return e=v.call(t),r?t[_]=n:delete t[_],e}:function(t){return v.call(t)},s="function"==typeof Uint32Array,w="function"==typeof Uint32Array?Uint32Array:null,U="function"==typeof Uint32Array?Uint32Array:void 0;b=function(){var t,r,n;if("function"!=typeof w)return!1;try{r=new w(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(s&&n instanceof Uint32Array||"[object Uint32Array]"===m(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?U:function(){throw new Error("not implemented")};var h,j=b,g="function"==typeof Float64Array,N="function"==typeof Float64Array?Float64Array:null,S="function"==typeof Float64Array?Float64Array:void 0;h=function(){var t,r,n;if("function"!=typeof N)return!1;try{r=new N([1,3.14,-3.14,NaN]),n=r,t=(g&&n instanceof Float64Array||"[object Float64Array]"===m(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?S:function(){throw new Error("not implemented")};var E,F=h,T="function"==typeof Uint8Array,I="function"==typeof Uint8Array?Uint8Array:null,O="function"==typeof Uint8Array?Uint8Array:void 0;E=function(){var t,r,n;if("function"!=typeof I)return!1;try{r=new I(r=[1,3.14,-3.14,256,257]),n=r,t=(T&&n instanceof Uint8Array||"[object Uint8Array]"===m(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?O:function(){throw new Error("not implemented")};var P,x=E,V="function"==typeof Uint16Array,G="function"==typeof Uint16Array?Uint16Array:null,k="function"==typeof Uint16Array?Uint16Array:void 0;P=function(){var t,r,n;if("function"!=typeof G)return!1;try{r=new G(r=[1,3.14,-3.14,65536,65537]),n=r,t=(V&&n instanceof Uint16Array||"[object Uint16Array]"===m(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?k:function(){throw new Error("not implemented")};var Y,q={uint16:P,uint8:x};(Y=new q.uint16(1))[0]=4660;var B=52===new q.uint8(Y.buffer)[0],C=!0===B?1:0,M=new F(1),z=new j(M.buffer);function D(t){return M[0]=t,z[C]}var H=!0===B?1:0,J=new F(1),K=new j(J.buffer);function L(t,r){return J[0]=t,K[H]=r>>>0,J[0]}var Q=Number.POSITIVE_INFINITY,R=Number.NEGATIVE_INFINITY,W=1023,X=.6931471803691238,Z=1.9082149292705877e-10,$=Math.sqrt,tt=.6931471803691238,rt=1.9082149292705877e-10,nt=1048575;function et(t){var r,n,e,o,i,u,a,f,c,l,y,b;return 0===t?R:p(t)||t<0?NaN:(i=0,(n=D(t))<1048576&&(i-=54,n=D(t*=0x40000000000000)),n>=2146435072?t+t:(i+=(n>>20)-W|0,i+=(f=614244+(n&=nt)&1048576|0)>>20|0,a=(t=L(t,n|1072693248^f))-1,(nt&2+n)<3?0===a?0===i?0:i*tt+i*rt:(u=a*a*(.5-.3333333333333333*a),0===i?a-u:i*tt-(u-i*rt-a)):(f=n-398458|0,c=440401-n|0,o=(y=(b=(l=a/(2+a))*l)*b)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(y),e=b*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(y),u=e+o,(f|=c)>0?(r=.5*a*a,0===i?a-(r-l*(r+u)):i*tt-(r-(l*(r+u)+i*rt)-a)):0===i?a-l*(a-u):i*tt-(l*(a-u)-i*rt-a))))}function ot(t){var r;return p(t)||t<1?NaN:1===t?0:t>=268435456?et(t)+.6931471805599453:t>2?et(2*t-1/(t+$(t*t-1))):function(t){var r,n,e,o,i,u,a,f,c,l;if(t<-1||p(t))return NaN;if(-1===t)return R;if(t===Q)return t;if(0===t)return t;if(l=1,(e=t<0?-t:t)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?t:t-t*t*.5;t>-.2928932188134525&&(l=0,o=t,n=1)}return 0!==l&&(e<9007199254740992?(i=(l=((n=D(c=1+t))>>20)-W)>0?1-(c-t):t-(c-1),i/=c):(l=((n=D(c=t))>>20)-W,i=0),(n&=1048575)<434334?c=L(c,1072693248|n):(l+=1,c=L(c,1071644672|n),n=1048576-n>>2),o=c-1),r=.5*o*o,0===n?0===o?l*X+(i+=l*Z):l*X-((f=r*(1-.6666666666666666*o))-(l*Z+i)-o):(f=(a=(u=o/(2+o))*u)*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.3999999999940942+t*(.2857142874366239+t*(.22222198432149784+t*(.1818357216161805+t*(.15313837699209373+.14798198605116586*t)))))}(a),0===l?o-(r-u*(r+f)):l*X-(r-(u*(r+f)+(l*Z+i))-o))}((r=t-1)+$(2*r+r*r))}function it(t,r,n,e,o,i,u){return l(t,r,n,e,o,ot,i,u)}return c(it,"ndarray",(function(t,r,n,e,o,i,u,a,f){return y(t,r,n,e,o,i,u,ot,a,f)})),it},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).acoshBy=r();
//# sourceMappingURL=index.js.map
