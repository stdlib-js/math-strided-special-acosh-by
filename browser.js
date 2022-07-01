// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return t({},"x",{}),!0}catch(t){return!1}},n=Object.defineProperty,e=Object.prototype,o=e.toString,i=e.__defineGetter__,u=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__,c=n,l=function(t,r,n){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(t,r)||a.call(t,r)?(c=t.__proto__,t.__proto__=e,delete t[r],t[r]=n.value,t.__proto__=c):t[r]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,r,n.get),p&&u&&u.call(t,r,n.set),t},y=r()?c:l,p=function(t,r,n){y(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})},b=function(t,r,n,e,o,i,u,f){var a,c,l,y;if(t<=0)return e;for(a=n<0?(1-t)*n:0,c=o<0?(1-t)*o:0,y=0;y<t;y++)void 0!==(l=u.call(f,r[a],y,a,c,r,e))&&(e[c]=i(l)),a+=n,c+=o;return e};p(b,"ndarray",(function(t,r,n,e,o,i,u,f,a,c){var l,y,p,b;if(t<=0)return o;for(l=e,y=u,b=0;b<t;b++)void 0!==(p=a.call(c,r[l],b,l,y,r,o))&&(o[y]=f(p)),l+=n,y+=i;return o}));var d,A=b,v=function(t){return t!=t},_="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),m=Object.prototype.toString,s=m,w=function(t){return s.call(t)},U=Object.prototype.hasOwnProperty,h=function(t,r){return null!=t&&U.call(t,r)},j="function"==typeof Symbol?Symbol.toStringTag:"",g=h,N=j,S=m,E=w,F=function(t){var r,n,e;if(null==t)return S.call(t);n=t[N],r=g(t,N);try{t[N]=void 0}catch(r){return S.call(t)}return e=S.call(t),r?t[N]=n:delete t[N],e},T=_&&"symbol"==typeof Symbol.toStringTag?F:E,I=T,O="function"==typeof Uint32Array,P="function"==typeof Uint32Array?Uint32Array:null,x=function(t){return O&&t instanceof Uint32Array||"[object Uint32Array]"===I(t)},V=P,G=function(){var t,r;if("function"!=typeof V)return!1;try{r=new V(r=[1,3.14,-3.14,4294967296,4294967297]),t=x(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t},k="function"==typeof Uint32Array?Uint32Array:void 0,Y=function(){throw new Error("not implemented")},q=G()?k:Y,B=T,C="function"==typeof Float64Array,M="function"==typeof Float64Array?Float64Array:null,z=function(t){return C&&t instanceof Float64Array||"[object Float64Array]"===B(t)},D=M,H=function(){var t,r;if("function"!=typeof D)return!1;try{r=new D([1,3.14,-3.14,NaN]),t=z(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t},J="function"==typeof Float64Array?Float64Array:void 0,K=function(){throw new Error("not implemented")},L=H()?J:K,Q=T,R="function"==typeof Uint8Array,W="function"==typeof Uint8Array?Uint8Array:null,X=function(t){return R&&t instanceof Uint8Array||"[object Uint8Array]"===Q(t)},Z=W,$=function(){var t,r;if("function"!=typeof Z)return!1;try{r=new Z(r=[1,3.14,-3.14,256,257]),t=X(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t},tt="function"==typeof Uint8Array?Uint8Array:void 0,rt=function(){throw new Error("not implemented")},nt=$()?tt:rt,et=T,ot="function"==typeof Uint16Array,it="function"==typeof Uint16Array?Uint16Array:null,ut=function(t){return ot&&t instanceof Uint16Array||"[object Uint16Array]"===et(t)},ft=it,at=function(){var t,r;if("function"!=typeof ft)return!1;try{r=new ft(r=[1,3.14,-3.14,65536,65537]),t=ut(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t},ct="function"==typeof Uint16Array?Uint16Array:void 0,lt=function(){throw new Error("not implemented")},yt={uint16:at()?ct:lt,uint8:nt};(d=new yt.uint16(1))[0]=4660;var pt=52===new yt.uint8(d.buffer)[0],bt=q,dt=!0===pt?1:0,At=new L(1),vt=new bt(At.buffer),_t=function(t){return At[0]=t,vt[dt]},mt=q,st=!0===pt?1:0,wt=new L(1),Ut=new mt(wt.buffer),ht=function(t,r){return wt[0]=t,Ut[st]=r>>>0,wt[0]},jt=ht,gt=Number.POSITIVE_INFINITY,Nt=Number.NEGATIVE_INFINITY,St=v,Et=_t,Ft=jt,Tt=gt,It=Nt,Ot=function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.3999999999940942+t*(.2857142874366239+t*(.22222198432149784+t*(.1818357216161805+t*(.15313837699209373+.14798198605116586*t)))))},Pt=.6931471803691238,xt=1.9082149292705877e-10,Vt=function(t){var r,n,e,o,i,u,f,a,c,l;if(t<-1||St(t))return NaN;if(-1===t)return It;if(t===Tt)return t;if(0===t)return t;if(l=1,(e=t<0?-t:t)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?t:t-t*t*.5;t>-.2928932188134525&&(l=0,o=t,n=1)}return 0!==l&&(e<9007199254740992?(i=(l=((n=Et(c=1+t))>>20)-1023)>0?1-(c-t):t-(c-1),i/=c):(l=((n=Et(c=t))>>20)-1023,i=0),(n&=1048575)<434334?c=Ft(c,1072693248|n):(l+=1,c=Ft(c,1071644672|n),n=1048576-n>>2),o=c-1),r=.5*o*o,0===n?0===o?l*Pt+(i+=l*xt):l*Pt-((a=r*(1-.6666666666666666*o))-(l*xt+i)-o):(a=(f=(u=o/(2+o))*u)*Ot(f),0===l?o-(r-u*(r+a)):l*Pt-(r-(u*(r+a)+(l*xt+i))-o))},Gt=Math.sqrt,kt=_t,Yt=jt,qt=v,Bt=Nt,Ct=function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)},Mt=function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))},zt=.6931471803691238,Dt=1.9082149292705877e-10,Ht=1048575,Jt=v,Kt=Vt,Lt=Gt,Qt=function(t){var r,n,e,o,i,u,f,a,c,l,y;return 0===t?Bt:qt(t)||t<0?NaN:(o=0,(n=kt(t))<1048576&&(o-=54,n=kt(t*=0x40000000000000)),n>=2146435072?t+t:(o+=(n>>20)-1023|0,o+=(f=614244+(n&=Ht)&1048576|0)>>20|0,u=(t=Yt(t,n|1072693248^f))-1,(Ht&2+n)<3?0===u?0===o?0:o*zt+o*Dt:(i=u*u*(.5-.3333333333333333*u),0===o?u-i:o*zt-(i-o*Dt-u)):(f=n-398458|0,a=440401-n|0,e=(l=(y=(c=u/(2+u))*c)*y)*Ct(l),i=y*Mt(l)+e,(f|=a)>0?(r=.5*u*u,0===o?u-(r-c*(r+i)):o*zt-(r-(c*(r+i)+o*Dt)-u)):0===o?u-c*(u-i):o*zt-(c*(u-i)-o*Dt-u))))},Rt=function(t){var r;return Jt(t)||t<1?NaN:1===t?0:t>=268435456?Qt(t)+.6931471805599453:t>2?Qt(2*t-1/(t+Lt(t*t-1))):Kt((r=t-1)+Lt(2*r+r*r))};function Wt(t,r,n,e,o,i,u){return A(t,r,n,e,o,Rt,i,u)}return p(Wt,"ndarray",(function(t,r,n,e,o,i,u,f,a){return A.ndarray(t,r,n,e,o,i,u,Rt,f,a)})),Wt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).acoshBy=r();
//# sourceMappingURL=browser.js.map
