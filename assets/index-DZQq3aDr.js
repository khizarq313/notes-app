(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Po(t,e){const n=new Set(t.split(","));return e?s=>n.has(s.toLowerCase()):s=>n.has(s)}const ne={},Pn=[],He=()=>{},Kd=()=>!1,zi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ro=t=>t.startsWith("onUpdate:"),Ce=Object.assign,Ao=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Yd=Object.prototype.hasOwnProperty,z=(t,e)=>Yd.call(t,e),L=Array.isArray,Rn=t=>Ds(t)==="[object Map]",Gi=t=>Ds(t)==="[object Set]",za=t=>Ds(t)==="[object Date]",F=t=>typeof t=="function",de=t=>typeof t=="string",Vt=t=>typeof t=="symbol",ie=t=>t!==null&&typeof t=="object",Uc=t=>(ie(t)||F(t))&&F(t.then)&&F(t.catch),Fc=Object.prototype.toString,Ds=t=>Fc.call(t),Jd=t=>Ds(t).slice(8,-1),Bc=t=>Ds(t)==="[object Object]",Oo=t=>de(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,cs=Po(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ki=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Qd=/-(\w)/g,ot=Ki(t=>t.replace(Qd,(e,n)=>n?n.toUpperCase():"")),Xd=/\B([A-Z])/g,vn=Ki(t=>t.replace(Xd,"-$1").toLowerCase()),Yi=Ki(t=>t.charAt(0).toUpperCase()+t.slice(1)),Tr=Ki(t=>t?`on${Yi(t)}`:""),un=(t,e)=>!Object.is(t,e),oi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},mi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Kr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ga;const Vc=()=>Ga||(Ga=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xo(t){if(L(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=de(s)?nf(s):xo(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(de(t)||ie(t))return t}const Zd=/;(?![^(]*\))/g,ef=/:([^]+)/,tf=/\/\*[^]*?\*\//g;function nf(t){const e={};return t.replace(tf,"").split(Zd).forEach(n=>{if(n){const s=n.split(ef);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ce(t){let e="";if(de(t))e=t;else if(L(t))for(let n=0;n<t.length;n++){const s=ce(t[n]);s&&(e+=s+" ")}else if(ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const sf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rf=Po(sf);function Hc(t){return!!t||t===""}function of(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Ji(t[s],e[s]);return n}function Ji(t,e){if(t===e)return!0;let n=za(t),s=za(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Vt(t),s=Vt(e),n||s)return t===e;if(n=L(t),s=L(e),n||s)return n&&s?of(t,e):!1;if(n=ie(t),s=ie(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Ji(t[o],e[o]))return!1}}return String(t)===String(e)}function Wc(t,e){return t.findIndex(n=>Ji(n,e))}const At=t=>de(t)?t:t==null?"":L(t)||ie(t)&&(t.toString===Fc||!F(t.toString))?JSON.stringify(t,$c,2):String(t),$c=(t,e)=>e&&e.__v_isRef?$c(t,e.value):Rn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Sr(s,r)+" =>"]=i,n),{})}:Gi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Sr(n))}:Vt(e)?Sr(e):ie(e)&&!L(e)&&!Bc(e)?String(e):e,Sr=(t,e="")=>{var n;return Vt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $e;class af{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=$e,!e&&$e&&(this.index=($e.scopes||($e.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=$e;try{return $e=this,e()}finally{$e=n}}}on(){$e=this}off(){$e=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function lf(t,e=$e){e&&e.active&&e.effects.push(t)}function cf(){return $e}let an;class Do{constructor(e,n,s,i){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,lf(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,bn();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(uf(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),wn()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Ot,n=an;try{return Ot=!0,an=this,this._runnings++,Ka(this),this.fn()}finally{Ya(this),this._runnings--,an=n,Ot=e}}stop(){var e;this.active&&(Ka(this),Ya(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function uf(t){return t.value}function Ka(t){t._trackId++,t._depsLength=0}function Ya(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)jc(t.deps[e],t);t.deps.length=t._depsLength}}function jc(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Ot=!0,Yr=0;const qc=[];function bn(){qc.push(Ot),Ot=!1}function wn(){const t=qc.pop();Ot=t===void 0?!0:t}function Mo(){Yr++}function Lo(){for(Yr--;!Yr&&Jr.length;)Jr.shift()()}function zc(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&jc(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Jr=[];function Gc(t,e,n){Mo();for(const s of t.keys()){let i;s._dirtyLevel<e&&(i??(i=t.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=e),s._shouldSchedule&&(i??(i=t.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&Jr.push(s.scheduler)))}Lo()}const Kc=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Qr=new WeakMap,ln=Symbol(""),Xr=Symbol("");function De(t,e,n){if(Ot&&an){let s=Qr.get(t);s||Qr.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Kc(()=>s.delete(n))),zc(an,i)}}function pt(t,e,n,s,i,r){const o=Qr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&L(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||!Vt(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":L(t)?Oo(n)&&a.push(o.get("length")):(a.push(o.get(ln)),Rn(t)&&a.push(o.get(Xr)));break;case"delete":L(t)||(a.push(o.get(ln)),Rn(t)&&a.push(o.get(Xr)));break;case"set":Rn(t)&&a.push(o.get(ln));break}Mo();for(const l of a)l&&Gc(l,4);Lo()}const hf=Po("__proto__,__v_isRef,__isVue"),Yc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Vt)),Ja=df();function df(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Y(this);for(let r=0,o=this.length;r<o;r++)De(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(Y)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){bn(),Mo();const s=Y(this)[e].apply(this,n);return Lo(),wn(),s}}),t}function ff(t){const e=Y(this);return De(e,"has",t),e.hasOwnProperty(t)}class Jc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Sf:eu:r?Zc:Xc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=L(e);if(!i){if(o&&z(Ja,n))return Reflect.get(Ja,n,s);if(n==="hasOwnProperty")return ff}const a=Reflect.get(e,n,s);return(Vt(n)?Yc.has(n):hf(n))||(i||De(e,"get",n),r)?a:Ue(a)?o&&Oo(n)?a:a.value:ie(a)?i?tu(a):Bo(a):a}}class Qc extends Jc{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const l=ys(r);if(!Zr(s)&&!ys(s)&&(r=Y(r),s=Y(s)),!L(e)&&Ue(r)&&!Ue(s))return l?!1:(r.value=s,!0)}const o=L(e)&&Oo(n)?Number(n)<e.length:z(e,n),a=Reflect.set(e,n,s,i);return e===Y(i)&&(o?un(s,r)&&pt(e,"set",n,s):pt(e,"add",n,s)),a}deleteProperty(e,n){const s=z(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&pt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Vt(n)||!Yc.has(n))&&De(e,"has",n),s}ownKeys(e){return De(e,"iterate",L(e)?"length":ln),Reflect.ownKeys(e)}}class pf extends Jc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const _f=new Qc,gf=new pf,mf=new Qc(!0),Uo=t=>t,Qi=t=>Reflect.getPrototypeOf(t);function Qs(t,e,n=!1,s=!1){t=t.__v_raw;const i=Y(t),r=Y(e);n||(un(e,r)&&De(i,"get",e),De(i,"get",r));const{has:o}=Qi(i),a=s?Uo:n?Wo:Ho;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Xs(t,e=!1){const n=this.__v_raw,s=Y(n),i=Y(t);return e||(un(t,i)&&De(s,"has",t),De(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Zs(t,e=!1){return t=t.__v_raw,!e&&De(Y(t),"iterate",ln),Reflect.get(t,"size",t)}function Qa(t){t=Y(t);const e=Y(this);return Qi(e).has.call(e,t)||(e.add(t),pt(e,"add",t,t)),this}function Xa(t,e){e=Y(e);const n=Y(this),{has:s,get:i}=Qi(n);let r=s.call(n,t);r||(t=Y(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?un(e,o)&&pt(n,"set",t,e):pt(n,"add",t,e),this}function Za(t){const e=Y(this),{has:n,get:s}=Qi(e);let i=n.call(e,t);i||(t=Y(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&pt(e,"delete",t,void 0),r}function el(){const t=Y(this),e=t.size!==0,n=t.clear();return e&&pt(t,"clear",void 0,void 0),n}function ei(t,e){return function(s,i){const r=this,o=r.__v_raw,a=Y(o),l=e?Uo:t?Wo:Ho;return!t&&De(a,"iterate",ln),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function ti(t,e,n){return function(...s){const i=this.__v_raw,r=Y(i),o=Rn(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Uo:e?Wo:Ho;return!e&&De(r,"iterate",l?Xr:ln),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Et(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function yf(){const t={get(r){return Qs(this,r)},get size(){return Zs(this)},has:Xs,add:Qa,set:Xa,delete:Za,clear:el,forEach:ei(!1,!1)},e={get(r){return Qs(this,r,!1,!0)},get size(){return Zs(this)},has:Xs,add:Qa,set:Xa,delete:Za,clear:el,forEach:ei(!1,!0)},n={get(r){return Qs(this,r,!0)},get size(){return Zs(this,!0)},has(r){return Xs.call(this,r,!0)},add:Et("add"),set:Et("set"),delete:Et("delete"),clear:Et("clear"),forEach:ei(!0,!1)},s={get(r){return Qs(this,r,!0,!0)},get size(){return Zs(this,!0)},has(r){return Xs.call(this,r,!0)},add:Et("add"),set:Et("set"),delete:Et("delete"),clear:Et("clear"),forEach:ei(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=ti(r,!1,!1),n[r]=ti(r,!0,!1),e[r]=ti(r,!1,!0),s[r]=ti(r,!0,!0)}),[t,n,e,s]}const[vf,bf,wf,Ef]=yf();function Fo(t,e){const n=e?t?Ef:wf:t?bf:vf;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(z(n,i)&&i in s?n:s,i,r)}const If={get:Fo(!1,!1)},Cf={get:Fo(!1,!0)},Tf={get:Fo(!0,!1)},Xc=new WeakMap,Zc=new WeakMap,eu=new WeakMap,Sf=new WeakMap;function kf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nf(t){return t.__v_skip||!Object.isExtensible(t)?0:kf(Jd(t))}function Bo(t){return ys(t)?t:Vo(t,!1,_f,If,Xc)}function Pf(t){return Vo(t,!1,mf,Cf,Zc)}function tu(t){return Vo(t,!0,gf,Tf,eu)}function Vo(t,e,n,s,i){if(!ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Nf(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function An(t){return ys(t)?An(t.__v_raw):!!(t&&t.__v_isReactive)}function ys(t){return!!(t&&t.__v_isReadonly)}function Zr(t){return!!(t&&t.__v_isShallow)}function nu(t){return An(t)||ys(t)}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function su(t){return Object.isExtensible(t)&&mi(t,"__v_skip",!0),t}const Ho=t=>ie(t)?Bo(t):t,Wo=t=>ie(t)?tu(t):t;class iu{constructor(e,n,s,i){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Do(()=>e(this._value),()=>kr(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=Y(this);return(!e._cacheable||e.effect.dirty)&&un(e._value,e._value=e.effect.run())&&kr(e,4),Af(e),e.effect._dirtyLevel>=2&&kr(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Rf(t,e,n=!1){let s,i;const r=F(t);return r?(s=t,i=He):(s=t.get,i=t.set),new iu(s,i,r||!i,n)}function Af(t){var e;Ot&&an&&(t=Y(t),zc(an,(e=t.dep)!=null?e:t.dep=Kc(()=>t.dep=void 0,t instanceof iu?t:void 0)))}function kr(t,e=4,n){t=Y(t);const s=t.dep;s&&Gc(s,e)}function Ue(t){return!!(t&&t.__v_isRef===!0)}function Of(t){return Ue(t)?t.value:t}const xf={get:(t,e,n)=>Of(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ue(i)&&!Ue(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function ru(t){return An(t)?t:new Proxy(t,xf)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function xt(t,e,n,s){try{return s?t(...s):t()}catch(i){Xi(i,e,n)}}function Ye(t,e,n,s){if(F(t)){const r=xt(t,e,n,s);return r&&Uc(r)&&r.catch(o=>{Xi(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Ye(t[r],e,n,s));return i}function Xi(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){xt(l,null,10,[t,o,a]);return}}Df(t,n,i,s)}function Df(t,e,n,s=!0){console.error(t)}let vs=!1,eo=!1;const Ee=[];let nt=0;const On=[];let Ct=null,en=0;const ou=Promise.resolve();let $o=null;function Mf(t){const e=$o||ou;return t?e.then(this?t.bind(this):t):e}function Lf(t){let e=nt+1,n=Ee.length;for(;e<n;){const s=e+n>>>1,i=Ee[s],r=bs(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function jo(t){(!Ee.length||!Ee.includes(t,vs&&t.allowRecurse?nt+1:nt))&&(t.id==null?Ee.push(t):Ee.splice(Lf(t.id),0,t),au())}function au(){!vs&&!eo&&(eo=!0,$o=ou.then(cu))}function Uf(t){const e=Ee.indexOf(t);e>nt&&Ee.splice(e,1)}function Ff(t){L(t)?On.push(...t):(!Ct||!Ct.includes(t,t.allowRecurse?en+1:en))&&On.push(t),au()}function tl(t,e,n=vs?nt+1:0){for(;n<Ee.length;n++){const s=Ee[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;Ee.splice(n,1),n--,s()}}}function lu(t){if(On.length){const e=[...new Set(On)].sort((n,s)=>bs(n)-bs(s));if(On.length=0,Ct){Ct.push(...e);return}for(Ct=e,en=0;en<Ct.length;en++)Ct[en]();Ct=null,en=0}}const bs=t=>t.id==null?1/0:t.id,Bf=(t,e)=>{const n=bs(t)-bs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function cu(t){eo=!1,vs=!0,Ee.sort(Bf);try{for(nt=0;nt<Ee.length;nt++){const e=Ee[nt];e&&e.active!==!1&&xt(e,null,14)}}finally{nt=0,Ee.length=0,lu(),vs=!1,$o=null,(Ee.length||On.length)&&cu()}}function Vf(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ne;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||ne;f&&(i=n.map(_=>de(_)?_.trim():_)),h&&(i=n.map(Kr))}let a,l=s[a=Tr(e)]||s[a=Tr(ot(e))];!l&&r&&(l=s[a=Tr(vn(e))]),l&&Ye(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ye(c,t,6,i)}}function uu(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!F(t)){const l=c=>{const u=uu(c,e,!0);u&&(a=!0,Ce(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(ie(t)&&s.set(t,null),null):(L(r)?r.forEach(l=>o[l]=null):Ce(o,r),ie(t)&&s.set(t,o),o)}function Zi(t,e){return!t||!zi(e)?!1:(e=e.slice(2).replace(/Once$/,""),z(t,e[0].toLowerCase()+e.slice(1))||z(t,vn(e))||z(t,e))}let Ae=null,hu=null;function yi(t){const e=Ae;return Ae=t,hu=t&&t.type.__scopeId||null,e}function Hf(t,e=Ae,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&dl(-1);const r=yi(e);let o;try{o=t(...i)}finally{yi(r),s._d&&dl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Nr(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:_,ctx:S,inheritAttrs:R}=t;let B,K;const fe=yi(t);try{if(n.shapeFlag&4){const oe=i||s,Se=oe;B=tt(u.call(Se,oe,h,r,_,f,S)),K=l}else{const oe=e;B=tt(oe.length>1?oe(r,{attrs:l,slots:a,emit:c}):oe(r,null)),K=e.props?l:Wf(l)}}catch(oe){ds.length=0,Xi(oe,t,1),B=se(hn)}let q=B;if(K&&R!==!1){const oe=Object.keys(K),{shapeFlag:Se}=q;oe.length&&Se&7&&(o&&oe.some(Ro)&&(K=$f(K,o)),q=Vn(q,K))}return n.dirs&&(q=Vn(q),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&(q.transition=n.transition),B=q,yi(fe),B}const Wf=t=>{let e;for(const n in t)(n==="class"||n==="style"||zi(n))&&((e||(e={}))[n]=t[n]);return e},$f=(t,e)=>{const n={};for(const s in t)(!Ro(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function jf(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?nl(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Zi(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?nl(s,o,c):!0:!!o;return!1}function nl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Zi(n,r))return!0}return!1}function qf({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const du="components";function ye(t,e){return Gf(du,t,!0,e)||t}const zf=Symbol.for("v-ndc");function Gf(t,e,n=!0,s=!1){const i=Ae||Ie;if(i){const r=i.type;if(t===du){const a=$p(r,!1);if(a&&(a===e||a===ot(e)||a===Yi(ot(e))))return r}const o=sl(i[t]||r[t],e)||sl(i.appContext[t],e);return!o&&s?r:o}}function sl(t,e){return t&&(t[e]||t[ot(e)]||t[Yi(ot(e))])}const Kf=t=>t.__isSuspense;function Yf(t,e){e&&e.pendingBranch?L(t)?e.effects.push(...t):e.effects.push(t):Ff(t)}const Jf=Symbol.for("v-scx"),Qf=()=>li(Jf),ni={};function Pr(t,e,n){return fu(t,e,n)}function fu(t,e,{immediate:n,deep:s,flush:i,once:r,onTrack:o,onTrigger:a}=ne){if(e&&r){const j=e;e=(...Be)=>{j(...Be),Se()}}const l=Ie,c=j=>s===!0?j:nn(j,s===!1?1:void 0);let u,h=!1,f=!1;if(Ue(t)?(u=()=>t.value,h=Zr(t)):An(t)?(u=()=>c(t),h=!0):L(t)?(f=!0,h=t.some(j=>An(j)||Zr(j)),u=()=>t.map(j=>{if(Ue(j))return j.value;if(An(j))return c(j);if(F(j))return xt(j,l,2)})):F(t)?e?u=()=>xt(t,l,2):u=()=>(_&&_(),Ye(t,l,3,[S])):u=He,e&&s){const j=u;u=()=>nn(j())}let _,S=j=>{_=q.onStop=()=>{xt(j,l,4),_=q.onStop=void 0}},R;if(ir)if(S=He,e?n&&Ye(e,l,3,[u(),f?[]:void 0,S]):u(),i==="sync"){const j=Qf();R=j.__watcherHandles||(j.__watcherHandles=[])}else return He;let B=f?new Array(t.length).fill(ni):ni;const K=()=>{if(!(!q.active||!q.dirty))if(e){const j=q.run();(s||h||(f?j.some((Be,Ve)=>un(Be,B[Ve])):un(j,B)))&&(_&&_(),Ye(e,l,3,[j,B===ni?void 0:f&&B[0]===ni?[]:B,S]),B=j)}else q.run()};K.allowRecurse=!!e;let fe;i==="sync"?fe=K:i==="post"?fe=()=>Re(K,l&&l.suspense):(K.pre=!0,l&&(K.id=l.uid),fe=()=>jo(K));const q=new Do(u,He,fe),oe=cf(),Se=()=>{q.stop(),oe&&Ao(oe.effects,q)};return e?n?K():B=q.run():i==="post"?Re(q.run.bind(q),l&&l.suspense):q.run(),R&&R.push(Se),Se}function Xf(t,e,n){const s=this.proxy,i=de(t)?t.includes(".")?pu(s,t):()=>s[t]:t.bind(s,s);let r;F(e)?r=e:(r=e.handler,n=e);const o=Ms(this),a=fu(i,r.bind(s),n);return o(),a}function pu(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function nn(t,e,n=0,s){if(!ie(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(s=s||new Set,s.has(t))return t;if(s.add(t),Ue(t))nn(t.value,e,n,s);else if(L(t))for(let i=0;i<t.length;i++)nn(t[i],e,n,s);else if(Gi(t)||Rn(t))t.forEach(i=>{nn(i,e,n,s)});else if(Bc(t))for(const i in t)nn(t[i],e,n,s);return t}function qe(t,e){if(Ae===null)return t;const n=rr(Ae)||Ae.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,l=ne]=e[i];r&&(F(r)&&(r={mounted:r,updated:r}),r.deep&&nn(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Jt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(bn(),Ye(l,n,8,[t.el,a,t,e]),wn())}}const ai=t=>!!t.type.__asyncLoader,_u=t=>t.type.__isKeepAlive;function Zf(t,e){gu(t,"a",e)}function ep(t,e){gu(t,"da",e)}function gu(t,e,n=Ie){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(er(e,s,n),n){let i=n.parent;for(;i&&i.parent;)_u(i.parent.vnode)&&tp(s,e,n,i),i=i.parent}}function tp(t,e,n,s){const i=er(e,t,s,!0);mu(()=>{Ao(s[e],i)},n)}function er(t,e,n=Ie,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;bn();const a=Ms(n),l=Ye(e,n,t,o);return a(),wn(),l});return s?i.unshift(r):i.push(r),r}}const vt=t=>(e,n=Ie)=>(!ir||t==="sp")&&er(t,(...s)=>e(...s),n),np=vt("bm"),sp=vt("m"),ip=vt("bu"),rp=vt("u"),op=vt("bum"),mu=vt("um"),ap=vt("sp"),lp=vt("rtg"),cp=vt("rtc");function up(t,e=Ie){er("ec",t,e)}function Dt(t,e,n,s){let i;const r=n&&n[s];if(L(t)||de(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(ie(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const to=t=>t?Pu(t)?rr(t)||t.proxy:to(t.parent):null,us=Ce(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>to(t.parent),$root:t=>to(t.root),$emit:t=>t.emit,$options:t=>qo(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,jo(t.update)}),$nextTick:t=>t.n||(t.n=Mf.bind(t.proxy)),$watch:t=>Xf.bind(t)}),Rr=(t,e)=>t!==ne&&!t.__isScriptSetup&&z(t,e),hp={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Rr(s,e))return o[e]=1,s[e];if(i!==ne&&z(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&z(c,e))return o[e]=3,r[e];if(n!==ne&&z(n,e))return o[e]=4,n[e];no&&(o[e]=0)}}const u=us[e];let h,f;if(u)return e==="$attrs"&&De(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ne&&z(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,z(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Rr(i,e)?(i[e]=n,!0):s!==ne&&z(s,e)?(s[e]=n,!0):z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==ne&&z(t,o)||Rr(e,o)||(a=r[0])&&z(a,o)||z(s,o)||z(us,o)||z(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function il(t){return L(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let no=!0;function dp(t){const e=qo(t),n=t.proxy,s=t.ctx;no=!1,e.beforeCreate&&rl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:_,updated:S,activated:R,deactivated:B,beforeDestroy:K,beforeUnmount:fe,destroyed:q,unmounted:oe,render:Se,renderTracked:j,renderTriggered:Be,errorCaptured:Ve,serverPrefetch:Gt,expose:lt,inheritAttrs:Zn,components:Gs,directives:Ks,filters:wr}=e;if(c&&fp(c,s,null),o)for(const ae in o){const Z=o[ae];F(Z)&&(s[ae]=Z.bind(n))}if(i){const ae=i.call(n,n);ie(ae)&&(t.data=Bo(ae))}if(no=!0,r)for(const ae in r){const Z=r[ae],Kt=F(Z)?Z.bind(n,n):F(Z.get)?Z.get.bind(n,n):He,Ys=!F(Z)&&F(Z.set)?Z.set.bind(n):He,Yt=qp({get:Kt,set:Ys});Object.defineProperty(s,ae,{enumerable:!0,configurable:!0,get:()=>Yt.value,set:Xe=>Yt.value=Xe})}if(a)for(const ae in a)yu(a[ae],s,n,ae);if(l){const ae=F(l)?l.call(n):l;Reflect.ownKeys(ae).forEach(Z=>{vp(Z,ae[Z])})}u&&rl(u,t,"c");function ke(ae,Z){L(Z)?Z.forEach(Kt=>ae(Kt.bind(n))):Z&&ae(Z.bind(n))}if(ke(np,h),ke(sp,f),ke(ip,_),ke(rp,S),ke(Zf,R),ke(ep,B),ke(up,Ve),ke(cp,j),ke(lp,Be),ke(op,fe),ke(mu,oe),ke(ap,Gt),L(lt))if(lt.length){const ae=t.exposed||(t.exposed={});lt.forEach(Z=>{Object.defineProperty(ae,Z,{get:()=>n[Z],set:Kt=>n[Z]=Kt})})}else t.exposed||(t.exposed={});Se&&t.render===He&&(t.render=Se),Zn!=null&&(t.inheritAttrs=Zn),Gs&&(t.components=Gs),Ks&&(t.directives=Ks)}function fp(t,e,n=He){L(t)&&(t=so(t));for(const s in t){const i=t[s];let r;ie(i)?"default"in i?r=li(i.from||s,i.default,!0):r=li(i.from||s):r=li(i),Ue(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function rl(t,e,n){Ye(L(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function yu(t,e,n,s){const i=s.includes(".")?pu(n,s):()=>n[s];if(de(t)){const r=e[t];F(r)&&Pr(i,r)}else if(F(t))Pr(i,t.bind(n));else if(ie(t))if(L(t))t.forEach(r=>yu(r,e,n,s));else{const r=F(t.handler)?t.handler.bind(n):e[t.handler];F(r)&&Pr(i,r,t)}}function qo(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>vi(l,c,o,!0)),vi(l,e,o)),ie(e)&&r.set(e,l),l}function vi(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&vi(t,r,n,!0),i&&i.forEach(o=>vi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=pp[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const pp={data:ol,props:al,emits:al,methods:os,computed:os,beforeCreate:Ne,created:Ne,beforeMount:Ne,mounted:Ne,beforeUpdate:Ne,updated:Ne,beforeDestroy:Ne,beforeUnmount:Ne,destroyed:Ne,unmounted:Ne,activated:Ne,deactivated:Ne,errorCaptured:Ne,serverPrefetch:Ne,components:os,directives:os,watch:gp,provide:ol,inject:_p};function ol(t,e){return e?t?function(){return Ce(F(t)?t.call(this,this):t,F(e)?e.call(this,this):e)}:e:t}function _p(t,e){return os(so(t),so(e))}function so(t){if(L(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ne(t,e){return t?[...new Set([].concat(t,e))]:e}function os(t,e){return t?Ce(Object.create(null),t,e):e}function al(t,e){return t?L(t)&&L(e)?[...new Set([...t,...e])]:Ce(Object.create(null),il(t),il(e??{})):e}function gp(t,e){if(!t)return e;if(!e)return t;const n=Ce(Object.create(null),t);for(const s in e)n[s]=Ne(t[s],e[s]);return n}function vu(){return{app:null,config:{isNativeTag:Kd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let mp=0;function yp(t,e){return function(s,i=null){F(s)||(s=Ce({},s)),i!=null&&!ie(i)&&(i=null);const r=vu(),o=new WeakSet;let a=!1;const l=r.app={_uid:mp++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:zp,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&F(c.install)?(o.add(c),c.install(l,...u)):F(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=se(s,i);return f.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,rr(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){const u=hs;hs=l;try{return c()}finally{hs=u}}};return l}}let hs=null;function vp(t,e){if(Ie){let n=Ie.provides;const s=Ie.parent&&Ie.parent.provides;s===n&&(n=Ie.provides=Object.create(s)),n[t]=e}}function li(t,e,n=!1){const s=Ie||Ae;if(s||hs){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:hs._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&F(e)?e.call(s&&s.proxy):e}}function bp(t,e,n,s=!1){const i={},r={};mi(r,nr,1),t.propsDefaults=Object.create(null),bu(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Pf(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function wp(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=Y(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Zi(t.emitsOptions,f))continue;const _=e[f];if(l)if(z(r,f))_!==r[f]&&(r[f]=_,c=!0);else{const S=ot(f);i[S]=io(l,a,S,_,t,!1)}else _!==r[f]&&(r[f]=_,c=!0)}}}else{bu(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!z(e,h)&&((u=vn(h))===h||!z(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=io(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!z(e,h))&&(delete r[h],c=!0)}c&&pt(t,"set","$attrs")}function bu(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(cs(l))continue;const c=e[l];let u;i&&z(i,u=ot(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Zi(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=Y(n),c=a||ne;for(let u=0;u<r.length;u++){const h=r[u];n[h]=io(i,l,h,c[h],t,!z(c,h))}}return o}function io(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=z(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&F(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=Ms(i);s=c[n]=l.call(null,e),u()}}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===vn(n))&&(s=!0))}return s}function wu(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!F(t)){const u=h=>{l=!0;const[f,_]=wu(h,e,!0);Ce(o,f),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return ie(t)&&s.set(t,Pn),Pn;if(L(r))for(let u=0;u<r.length;u++){const h=ot(r[u]);ll(h)&&(o[h]=ne)}else if(r)for(const u in r){const h=ot(u);if(ll(h)){const f=r[u],_=o[h]=L(f)||F(f)?{type:f}:Ce({},f);if(_){const S=hl(Boolean,_.type),R=hl(String,_.type);_[0]=S>-1,_[1]=R<0||S<R,(S>-1||z(_,"default"))&&a.push(h)}}}const c=[o,a];return ie(t)&&s.set(t,c),c}function ll(t){return t[0]!=="$"&&!cs(t)}function cl(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function ul(t,e){return cl(t)===cl(e)}function hl(t,e){return L(e)?e.findIndex(n=>ul(n,t)):F(e)&&ul(e,t)?0:-1}const Eu=t=>t[0]==="_"||t==="$stable",zo=t=>L(t)?t.map(tt):[tt(t)],Ep=(t,e,n)=>{if(e._n)return e;const s=Hf((...i)=>zo(e(...i)),n);return s._c=!1,s},Iu=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Eu(i))continue;const r=t[i];if(F(r))e[i]=Ep(i,r,s);else if(r!=null){const o=zo(r);e[i]=()=>o}}},Cu=(t,e)=>{const n=zo(e);t.slots.default=()=>n},Ip=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Y(e),mi(e,"_",n)):Iu(e,t.slots={})}else t.slots={},e&&Cu(t,e);mi(t.slots,nr,1)},Cp=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ne;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Ce(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Iu(e,i)),o=e}else e&&(Cu(t,e),o={default:1});if(r)for(const a in i)!Eu(a)&&o[a]==null&&delete i[a]};function ro(t,e,n,s,i=!1){if(L(t)){t.forEach((f,_)=>ro(f,e&&(L(e)?e[_]:e),n,s,i));return}if(ai(s)&&!i)return;const r=s.shapeFlag&4?rr(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ne?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(de(c)?(u[c]=null,z(h,c)&&(h[c]=null)):Ue(c)&&(c.value=null)),F(l))xt(l,a,12,[o,u]);else{const f=de(l),_=Ue(l);if(f||_){const S=()=>{if(t.f){const R=f?z(h,l)?h[l]:u[l]:l.value;i?L(R)&&Ao(R,r):L(R)?R.includes(r)||R.push(r):f?(u[l]=[r],z(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,z(h,l)&&(h[l]=o)):_&&(l.value=o,t.k&&(u[t.k]=o))};o?(S.id=-1,Re(S,n)):S()}}}const Re=Yf;function Tp(t){return Sp(t)}function Sp(t,e){const n=Vc();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:_=He,insertStaticContent:S}=t,R=(d,p,g,y=null,v=null,T=null,N=void 0,I=null,k=!!p.dynamicChildren)=>{if(d===p)return;d&&!ts(d,p)&&(y=Js(d),Xe(d,v,T,!0),d=null),p.patchFlag===-2&&(k=!1,p.dynamicChildren=null);const{type:b,ref:P,shapeFlag:x}=p;switch(b){case tr:B(d,p,g,y);break;case hn:K(d,p,g,y);break;case ci:d==null&&fe(p,g,y,N);break;case ve:Gs(d,p,g,y,v,T,N,I,k);break;default:x&1?Se(d,p,g,y,v,T,N,I,k):x&6?Ks(d,p,g,y,v,T,N,I,k):(x&64||x&128)&&b.process(d,p,g,y,v,T,N,I,k,Cn)}P!=null&&v&&ro(P,d&&d.ref,T,p||d,!p)},B=(d,p,g,y)=>{if(d==null)s(p.el=a(p.children),g,y);else{const v=p.el=d.el;p.children!==d.children&&c(v,p.children)}},K=(d,p,g,y)=>{d==null?s(p.el=l(p.children||""),g,y):p.el=d.el},fe=(d,p,g,y)=>{[d.el,d.anchor]=S(d.children,p,g,y,d.el,d.anchor)},q=({el:d,anchor:p},g,y)=>{let v;for(;d&&d!==p;)v=f(d),s(d,g,y),d=v;s(p,g,y)},oe=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=f(d),i(d),d=g;i(p)},Se=(d,p,g,y,v,T,N,I,k)=>{p.type==="svg"?N="svg":p.type==="math"&&(N="mathml"),d==null?j(p,g,y,v,T,N,I,k):Gt(d,p,v,T,N,I,k)},j=(d,p,g,y,v,T,N,I)=>{let k,b;const{props:P,shapeFlag:x,transition:O,dirs:U}=d;if(k=d.el=o(d.type,T,P&&P.is,P),x&8?u(k,d.children):x&16&&Ve(d.children,k,null,y,v,Ar(d,T),N,I),U&&Jt(d,null,y,"created"),Be(k,d,d.scopeId,N,y),P){for(const J in P)J!=="value"&&!cs(J)&&r(k,J,null,P[J],T,d.children,y,v,ct);"value"in P&&r(k,"value",null,P.value,T),(b=P.onVnodeBeforeMount)&&et(b,y,d)}U&&Jt(d,null,y,"beforeMount");const W=kp(v,O);W&&O.beforeEnter(k),s(k,p,g),((b=P&&P.onVnodeMounted)||W||U)&&Re(()=>{b&&et(b,y,d),W&&O.enter(k),U&&Jt(d,null,y,"mounted")},v)},Be=(d,p,g,y,v)=>{if(g&&_(d,g),y)for(let T=0;T<y.length;T++)_(d,y[T]);if(v){let T=v.subTree;if(p===T){const N=v.vnode;Be(d,N,N.scopeId,N.slotScopeIds,v.parent)}}},Ve=(d,p,g,y,v,T,N,I,k=0)=>{for(let b=k;b<d.length;b++){const P=d[b]=I?Tt(d[b]):tt(d[b]);R(null,P,p,g,y,v,T,N,I)}},Gt=(d,p,g,y,v,T,N)=>{const I=p.el=d.el;let{patchFlag:k,dynamicChildren:b,dirs:P}=p;k|=d.patchFlag&16;const x=d.props||ne,O=p.props||ne;let U;if(g&&Qt(g,!1),(U=O.onVnodeBeforeUpdate)&&et(U,g,p,d),P&&Jt(p,d,g,"beforeUpdate"),g&&Qt(g,!0),b?lt(d.dynamicChildren,b,I,g,y,Ar(p,v),T):N||Z(d,p,I,null,g,y,Ar(p,v),T,!1),k>0){if(k&16)Zn(I,p,x,O,g,y,v);else if(k&2&&x.class!==O.class&&r(I,"class",null,O.class,v),k&4&&r(I,"style",x.style,O.style,v),k&8){const W=p.dynamicProps;for(let J=0;J<W.length;J++){const re=W[J],pe=x[re],We=O[re];(We!==pe||re==="value")&&r(I,re,pe,We,v,d.children,g,y,ct)}}k&1&&d.children!==p.children&&u(I,p.children)}else!N&&b==null&&Zn(I,p,x,O,g,y,v);((U=O.onVnodeUpdated)||P)&&Re(()=>{U&&et(U,g,p,d),P&&Jt(p,d,g,"updated")},y)},lt=(d,p,g,y,v,T,N)=>{for(let I=0;I<p.length;I++){const k=d[I],b=p[I],P=k.el&&(k.type===ve||!ts(k,b)||k.shapeFlag&70)?h(k.el):g;R(k,b,P,null,y,v,T,N,!0)}},Zn=(d,p,g,y,v,T,N)=>{if(g!==y){if(g!==ne)for(const I in g)!cs(I)&&!(I in y)&&r(d,I,g[I],null,N,p.children,v,T,ct);for(const I in y){if(cs(I))continue;const k=y[I],b=g[I];k!==b&&I!=="value"&&r(d,I,b,k,N,p.children,v,T,ct)}"value"in y&&r(d,"value",g.value,y.value,N)}},Gs=(d,p,g,y,v,T,N,I,k)=>{const b=p.el=d?d.el:a(""),P=p.anchor=d?d.anchor:a("");let{patchFlag:x,dynamicChildren:O,slotScopeIds:U}=p;U&&(I=I?I.concat(U):U),d==null?(s(b,g,y),s(P,g,y),Ve(p.children||[],g,P,v,T,N,I,k)):x>0&&x&64&&O&&d.dynamicChildren?(lt(d.dynamicChildren,O,g,v,T,N,I),(p.key!=null||v&&p===v.subTree)&&Tu(d,p,!0)):Z(d,p,g,P,v,T,N,I,k)},Ks=(d,p,g,y,v,T,N,I,k)=>{p.slotScopeIds=I,d==null?p.shapeFlag&512?v.ctx.activate(p,g,y,N,k):wr(p,g,y,v,T,N,k):Va(d,p,k)},wr=(d,p,g,y,v,T,N)=>{const I=d.component=Fp(d,y,v);if(_u(d)&&(I.ctx.renderer=Cn),Bp(I),I.asyncDep){if(v&&v.registerDep(I,ke),!d.el){const k=I.subTree=se(hn);K(null,k,p,g)}}else ke(I,d,p,g,v,T,N)},Va=(d,p,g)=>{const y=p.component=d.component;if(jf(d,p,g))if(y.asyncDep&&!y.asyncResolved){ae(y,p,g);return}else y.next=p,Uf(y.update),y.effect.dirty=!0,y.update();else p.el=d.el,y.vnode=p},ke=(d,p,g,y,v,T,N)=>{const I=()=>{if(d.isMounted){let{next:P,bu:x,u:O,parent:U,vnode:W}=d;{const Tn=Su(d);if(Tn){P&&(P.el=W.el,ae(d,P,N)),Tn.asyncDep.then(()=>{d.isUnmounted||I()});return}}let J=P,re;Qt(d,!1),P?(P.el=W.el,ae(d,P,N)):P=W,x&&oi(x),(re=P.props&&P.props.onVnodeBeforeUpdate)&&et(re,U,P,W),Qt(d,!0);const pe=Nr(d),We=d.subTree;d.subTree=pe,R(We,pe,h(We.el),Js(We),d,v,T),P.el=pe.el,J===null&&qf(d,pe.el),O&&Re(O,v),(re=P.props&&P.props.onVnodeUpdated)&&Re(()=>et(re,U,P,W),v)}else{let P;const{el:x,props:O}=p,{bm:U,m:W,parent:J}=d,re=ai(p);if(Qt(d,!1),U&&oi(U),!re&&(P=O&&O.onVnodeBeforeMount)&&et(P,J,p),Qt(d,!0),x&&Cr){const pe=()=>{d.subTree=Nr(d),Cr(x,d.subTree,d,v,null)};re?p.type.__asyncLoader().then(()=>!d.isUnmounted&&pe()):pe()}else{const pe=d.subTree=Nr(d);R(null,pe,g,y,d,v,T),p.el=pe.el}if(W&&Re(W,v),!re&&(P=O&&O.onVnodeMounted)){const pe=p;Re(()=>et(P,J,pe),v)}(p.shapeFlag&256||J&&ai(J.vnode)&&J.vnode.shapeFlag&256)&&d.a&&Re(d.a,v),d.isMounted=!0,p=g=y=null}},k=d.effect=new Do(I,He,()=>jo(b),d.scope),b=d.update=()=>{k.dirty&&k.run()};b.id=d.uid,Qt(d,!0),b()},ae=(d,p,g)=>{p.component=d;const y=d.vnode.props;d.vnode=p,d.next=null,wp(d,p.props,y,g),Cp(d,p.children,g),bn(),tl(d),wn()},Z=(d,p,g,y,v,T,N,I,k=!1)=>{const b=d&&d.children,P=d?d.shapeFlag:0,x=p.children,{patchFlag:O,shapeFlag:U}=p;if(O>0){if(O&128){Ys(b,x,g,y,v,T,N,I,k);return}else if(O&256){Kt(b,x,g,y,v,T,N,I,k);return}}U&8?(P&16&&ct(b,v,T),x!==b&&u(g,x)):P&16?U&16?Ys(b,x,g,y,v,T,N,I,k):ct(b,v,T,!0):(P&8&&u(g,""),U&16&&Ve(x,g,y,v,T,N,I,k))},Kt=(d,p,g,y,v,T,N,I,k)=>{d=d||Pn,p=p||Pn;const b=d.length,P=p.length,x=Math.min(b,P);let O;for(O=0;O<x;O++){const U=p[O]=k?Tt(p[O]):tt(p[O]);R(d[O],U,g,null,v,T,N,I,k)}b>P?ct(d,v,T,!0,!1,x):Ve(p,g,y,v,T,N,I,k,x)},Ys=(d,p,g,y,v,T,N,I,k)=>{let b=0;const P=p.length;let x=d.length-1,O=P-1;for(;b<=x&&b<=O;){const U=d[b],W=p[b]=k?Tt(p[b]):tt(p[b]);if(ts(U,W))R(U,W,g,null,v,T,N,I,k);else break;b++}for(;b<=x&&b<=O;){const U=d[x],W=p[O]=k?Tt(p[O]):tt(p[O]);if(ts(U,W))R(U,W,g,null,v,T,N,I,k);else break;x--,O--}if(b>x){if(b<=O){const U=O+1,W=U<P?p[U].el:y;for(;b<=O;)R(null,p[b]=k?Tt(p[b]):tt(p[b]),g,W,v,T,N,I,k),b++}}else if(b>O)for(;b<=x;)Xe(d[b],v,T,!0),b++;else{const U=b,W=b,J=new Map;for(b=W;b<=O;b++){const Le=p[b]=k?Tt(p[b]):tt(p[b]);Le.key!=null&&J.set(Le.key,b)}let re,pe=0;const We=O-W+1;let Tn=!1,$a=0;const es=new Array(We);for(b=0;b<We;b++)es[b]=0;for(b=U;b<=x;b++){const Le=d[b];if(pe>=We){Xe(Le,v,T,!0);continue}let Ze;if(Le.key!=null)Ze=J.get(Le.key);else for(re=W;re<=O;re++)if(es[re-W]===0&&ts(Le,p[re])){Ze=re;break}Ze===void 0?Xe(Le,v,T,!0):(es[Ze-W]=b+1,Ze>=$a?$a=Ze:Tn=!0,R(Le,p[Ze],g,null,v,T,N,I,k),pe++)}const ja=Tn?Np(es):Pn;for(re=ja.length-1,b=We-1;b>=0;b--){const Le=W+b,Ze=p[Le],qa=Le+1<P?p[Le+1].el:y;es[b]===0?R(null,Ze,g,qa,v,T,N,I,k):Tn&&(re<0||b!==ja[re]?Yt(Ze,g,qa,2):re--)}}},Yt=(d,p,g,y,v=null)=>{const{el:T,type:N,transition:I,children:k,shapeFlag:b}=d;if(b&6){Yt(d.component.subTree,p,g,y);return}if(b&128){d.suspense.move(p,g,y);return}if(b&64){N.move(d,p,g,Cn);return}if(N===ve){s(T,p,g);for(let x=0;x<k.length;x++)Yt(k[x],p,g,y);s(d.anchor,p,g);return}if(N===ci){q(d,p,g);return}if(y!==2&&b&1&&I)if(y===0)I.beforeEnter(T),s(T,p,g),Re(()=>I.enter(T),v);else{const{leave:x,delayLeave:O,afterLeave:U}=I,W=()=>s(T,p,g),J=()=>{x(T,()=>{W(),U&&U()})};O?O(T,W,J):J()}else s(T,p,g)},Xe=(d,p,g,y=!1,v=!1)=>{const{type:T,props:N,ref:I,children:k,dynamicChildren:b,shapeFlag:P,patchFlag:x,dirs:O}=d;if(I!=null&&ro(I,null,g,d,!0),P&256){p.ctx.deactivate(d);return}const U=P&1&&O,W=!ai(d);let J;if(W&&(J=N&&N.onVnodeBeforeUnmount)&&et(J,p,d),P&6)Gd(d.component,g,y);else{if(P&128){d.suspense.unmount(g,y);return}U&&Jt(d,null,p,"beforeUnmount"),P&64?d.type.remove(d,p,g,v,Cn,y):b&&(T!==ve||x>0&&x&64)?ct(b,p,g,!1,!0):(T===ve&&x&384||!v&&P&16)&&ct(k,p,g),y&&Ha(d)}(W&&(J=N&&N.onVnodeUnmounted)||U)&&Re(()=>{J&&et(J,p,d),U&&Jt(d,null,p,"unmounted")},g)},Ha=d=>{const{type:p,el:g,anchor:y,transition:v}=d;if(p===ve){zd(g,y);return}if(p===ci){oe(d);return}const T=()=>{i(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:N,delayLeave:I}=v,k=()=>N(g,T);I?I(d.el,T,k):k()}else T()},zd=(d,p)=>{let g;for(;d!==p;)g=f(d),i(d),d=g;i(p)},Gd=(d,p,g)=>{const{bum:y,scope:v,update:T,subTree:N,um:I}=d;y&&oi(y),v.stop(),T&&(T.active=!1,Xe(N,d,p,g)),I&&Re(I,p),Re(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},ct=(d,p,g,y=!1,v=!1,T=0)=>{for(let N=T;N<d.length;N++)Xe(d[N],p,g,y,v)},Js=d=>d.shapeFlag&6?Js(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el);let Er=!1;const Wa=(d,p,g)=>{d==null?p._vnode&&Xe(p._vnode,null,null,!0):R(p._vnode||null,d,p,null,null,null,g),Er||(Er=!0,tl(),lu(),Er=!1),p._vnode=d},Cn={p:R,um:Xe,m:Yt,r:Ha,mt:wr,mc:Ve,pc:Z,pbc:lt,n:Js,o:t};let Ir,Cr;return e&&([Ir,Cr]=e(Cn)),{render:Wa,hydrate:Ir,createApp:yp(Wa,Ir)}}function Ar({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Qt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function kp(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Tu(t,e,n=!1){const s=t.children,i=e.children;if(L(s)&&L(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Tt(i[r]),a.el=o.el),n||Tu(o,a)),a.type===tr&&(a.el=o.el)}}function Np(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Su(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Su(e)}const Pp=t=>t.__isTeleport,ve=Symbol.for("v-fgt"),tr=Symbol.for("v-txt"),hn=Symbol.for("v-cmt"),ci=Symbol.for("v-stc"),ds=[];let ze=null;function w(t=!1){ds.push(ze=t?null:[])}function Rp(){ds.pop(),ze=ds[ds.length-1]||null}let ws=1;function dl(t){ws+=t}function ku(t){return t.dynamicChildren=ws>0?ze||Pn:null,Rp(),ws>0&&ze&&ze.push(t),t}function E(t,e,n,s,i,r){return ku(m(t,e,n,s,i,r,!0))}function ui(t,e,n,s,i){return ku(se(t,e,n,s,i,!0))}function Ap(t){return t?t.__v_isVNode===!0:!1}function ts(t,e){return t.type===e.type&&t.key===e.key}const nr="__vInternal",Nu=({key:t})=>t??null,hi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?de(t)||Ue(t)||F(t)?{i:Ae,r:t,k:e,f:!!n}:t:null);function m(t,e=null,n=null,s=0,i=null,r=t===ve?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Nu(e),ref:e&&hi(e),scopeId:hu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ae};return a?(Go(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=de(n)?8:16),ws>0&&!o&&ze&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&ze.push(l),l}const se=Op;function Op(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===zf)&&(t=hn),Ap(t)){const a=Vn(t,e,!0);return n&&Go(a,n),ws>0&&!r&&ze&&(a.shapeFlag&6?ze[ze.indexOf(t)]=a:ze.push(a)),a.patchFlag|=-2,a}if(jp(t)&&(t=t.__vccOpts),e){e=xp(e);let{class:a,style:l}=e;a&&!de(a)&&(e.class=ce(a)),ie(l)&&(nu(l)&&!L(l)&&(l=Ce({},l)),e.style=xo(l))}const o=de(t)?1:Kf(t)?128:Pp(t)?64:ie(t)?4:F(t)?2:0;return m(t,e,n,s,i,o,r,!0)}function xp(t){return t?nu(t)||nr in t?Ce({},t):t:null}function Vn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?Mp(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Nu(a),ref:e&&e.ref?n&&i?L(i)?i.concat(hi(e)):[i,hi(e)]:hi(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ve?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Vn(t.ssContent),ssFallback:t.ssFallback&&Vn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Dp(t=" ",e=0){return se(tr,null,t,e)}function sr(t,e){const n=se(ci,null,t);return n.staticCount=e,n}function A(t="",e=!1){return e?(w(),ui(hn,null,t)):se(hn,null,t)}function tt(t){return t==null||typeof t=="boolean"?se(hn):L(t)?se(ve,null,t.slice()):typeof t=="object"?Tt(t):se(tr,null,String(t))}function Tt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Vn(t)}function Go(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(L(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Go(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(nr in e)?e._ctx=Ae:i===3&&Ae&&(Ae.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else F(e)?(e={default:e,_ctx:Ae},n=32):(e=String(e),s&64?(n=16,e=[Dp(e)]):n=8);t.children=e,t.shapeFlag|=n}function Mp(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=ce([e.class,s.class]));else if(i==="style")e.style=xo([e.style,s.style]);else if(zi(i)){const r=e[i],o=s[i];o&&r!==o&&!(L(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function et(t,e,n,s=null){Ye(t,e,7,[n,s])}const Lp=vu();let Up=0;function Fp(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Lp,r={uid:Up++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new af(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wu(s,i),emitsOptions:uu(s,i),emit:null,emitted:null,propsDefaults:ne,inheritAttrs:s.inheritAttrs,ctx:ne,data:ne,props:ne,attrs:ne,slots:ne,refs:ne,setupState:ne,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Vf.bind(null,r),t.ce&&t.ce(r),r}let Ie=null,bi,oo;{const t=Vc(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};bi=e("__VUE_INSTANCE_SETTERS__",n=>Ie=n),oo=e("__VUE_SSR_SETTERS__",n=>ir=n)}const Ms=t=>{const e=Ie;return bi(t),t.scope.on(),()=>{t.scope.off(),bi(e)}},fl=()=>{Ie&&Ie.scope.off(),bi(null)};function Pu(t){return t.vnode.shapeFlag&4}let ir=!1;function Bp(t,e=!1){e&&oo(e);const{props:n,children:s}=t.vnode,i=Pu(t);bp(t,n,i,e),Ip(t,s);const r=i?Vp(t,e):void 0;return e&&oo(!1),r}function Vp(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=su(new Proxy(t.ctx,hp));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Wp(t):null,r=Ms(t);bn();const o=xt(s,t,0,[t.props,i]);if(wn(),r(),Uc(o)){if(o.then(fl,fl),e)return o.then(a=>{pl(t,a,e)}).catch(a=>{Xi(a,t,0)});t.asyncDep=o}else pl(t,o,e)}else Ru(t,e)}function pl(t,e,n){F(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ie(e)&&(t.setupState=ru(e)),Ru(t,n)}let _l;function Ru(t,e,n){const s=t.type;if(!t.render){if(!e&&_l&&!s.render){const i=s.template||qo(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Ce(Ce({isCustomElement:r,delimiters:a},o),l);s.render=_l(i,c)}}t.render=s.render||He}{const i=Ms(t);bn();try{dp(t)}finally{wn(),i()}}}function Hp(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return De(t,"get","$attrs"),e[n]}}))}function Wp(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Hp(t)},slots:t.slots,emit:t.emit,expose:e}}function rr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ru(su(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in us)return us[n](t)},has(e,n){return n in e||n in us}}))}function $p(t,e=!0){return F(t)?t.displayName||t.name:t.name||e&&t.__name}function jp(t){return F(t)&&"__vccOpts"in t}const qp=(t,e)=>Rf(t,e,ir),zp="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Gp="http://www.w3.org/2000/svg",Kp="http://www.w3.org/1998/Math/MathML",St=typeof document<"u"?document:null,gl=St&&St.createElement("template"),Yp={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?St.createElementNS(Gp,t):e==="mathml"?St.createElementNS(Kp,t):St.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>St.createTextNode(t),createComment:t=>St.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>St.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{gl.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const a=gl.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Jp=Symbol("_vtc");function Qp(t,e,n){const s=t[Jp];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ml=Symbol("_vod"),Xp=Symbol("_vsh"),Zp=Symbol(""),e_=/(^|;)\s*display\s*:/;function t_(t,e,n){const s=t.style,i=de(n);let r=!1;if(n&&!i){if(e)if(de(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&di(s,a,"")}else for(const o in e)n[o]==null&&di(s,o,"");for(const o in n)o==="display"&&(r=!0),di(s,o,n[o])}else if(i){if(e!==n){const o=s[Zp];o&&(n+=";"+o),s.cssText=n,r=e_.test(n)}}else e&&t.removeAttribute("style");ml in t&&(t[ml]=r?s.display:"",t[Xp]&&(s.display="none"))}const yl=/\s*!important$/;function di(t,e,n){if(L(n))n.forEach(s=>di(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=n_(t,e);yl.test(n)?t.setProperty(vn(s),n.replace(yl,""),"important"):t[s]=n}}const vl=["Webkit","Moz","ms"],Or={};function n_(t,e){const n=Or[e];if(n)return n;let s=ot(e);if(s!=="filter"&&s in t)return Or[e]=s;s=Yi(s);for(let i=0;i<vl.length;i++){const r=vl[i]+s;if(r in t)return Or[e]=r}return e}const bl="http://www.w3.org/1999/xlink";function s_(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(bl,e.slice(6,e.length)):t.setAttributeNS(bl,e,n);else{const r=rf(e);n==null||r&&!Hc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function i_(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Hc(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function tn(t,e,n,s){t.addEventListener(e,n,s)}function r_(t,e,n,s){t.removeEventListener(e,n,s)}const wl=Symbol("_vei");function o_(t,e,n,s,i=null){const r=t[wl]||(t[wl]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=a_(e);if(s){const c=r[e]=u_(s,i);tn(t,a,c,l)}else o&&(r_(t,a,o,l),r[e]=void 0)}}const El=/(?:Once|Passive|Capture)$/;function a_(t){let e;if(El.test(t)){e={};let s;for(;s=t.match(El);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):vn(t.slice(2)),e]}let xr=0;const l_=Promise.resolve(),c_=()=>xr||(l_.then(()=>xr=0),xr=Date.now());function u_(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ye(h_(s,n.value),e,5,[s])};return n.value=t,n.attached=c_(),n}function h_(t,e){if(L(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Il=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,d_=(t,e,n,s,i,r,o,a,l)=>{const c=i==="svg";e==="class"?Qp(t,s,c):e==="style"?t_(t,n,s):zi(e)?Ro(e)||o_(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):f_(t,e,s,c))?i_(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),s_(t,e,s,c))};function f_(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Il(e)&&F(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Il(e)&&de(n)?!1:e in t}const wi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return L(e)?n=>oi(e,n):e};function p_(t){t.target.composing=!0}function Cl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const xn=Symbol("_assign"),sn={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[xn]=wi(i);const r=s||i.props&&i.props.type==="number";tn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Kr(a)),t[xn](a)}),n&&tn(t,"change",()=>{t.value=t.value.trim()}),e||(tn(t,"compositionstart",p_),tn(t,"compositionend",Cl),tn(t,"change",Cl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t[xn]=wi(r),t.composing)return;const o=i||t.type==="number"?Kr(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===a)||(t.value=a))}},Ei={deep:!0,created(t,e,n){t[xn]=wi(n),tn(t,"change",()=>{const s=t._modelValue,i=__(t),r=t.checked,o=t[xn];if(L(s)){const a=Wc(s,i),l=a!==-1;if(r&&!l)o(s.concat(i));else if(!r&&l){const c=[...s];c.splice(a,1),o(c)}}else if(Gi(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(Au(t,r))})},mounted:Tl,beforeUpdate(t,e,n){t[xn]=wi(n),Tl(t,e,n)}};function Tl(t,{value:e,oldValue:n},s){t._modelValue=e,L(e)?t.checked=Wc(e,s.props.value)>-1:Gi(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=Ji(e,Au(t,!0)))}function __(t){return"_value"in t?t._value:t.value}function Au(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const g_={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},m_=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=i=>{if(!("key"in i))return;const r=vn(i.key);if(e.some(o=>o===r||g_[o]===r))return t(i)})},y_=Ce({patchProp:d_},Yp);let Sl;function v_(){return Sl||(Sl=Tp(y_))}const b_=(...t)=>{const e=v_().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=E_(s);if(!i)return;const r=e._component;!F(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,w_(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function w_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function E_(t){return de(t)?document.querySelector(t):t}const I_={name:"AppHeader",props:{panel:{type:String,required:!0},emptyBin:{type:Boolean,required:!0}},emits:["noteTheme"],data:function(){return{isDark:!0}},methods:{changeTheme:function(){this.isDark=!this.isDark,this.$emit("noteTheme",this.isDark)}},computed:{trashHeader:function(){return this.panel==="Trash"&&!this.emptyBin}}},be=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},C_={class:"header-section"},T_={class:"header"},S_={key:0,class:"svg-bg light sun-svg"},k_=m("span",{class:"material-symbols-rounded"},"light_mode",-1),N_=[k_],P_={key:1,class:"svg-bg dark moon-svg"},R_=m("span",{class:"material-symbols-rounded"},"dark_mode",-1),A_=[R_];function O_(t,e,n,s,i,r){return w(),E("section",C_,[m("div",T_,[m("h1",null,At(n.panel),1),m("button",{class:"theme-btn",onClick:e[0]||(e[0]=(...o)=>r.changeTheme&&r.changeTheme(...o))},[t.isDark?A("",!0):(w(),E("span",S_,N_)),t.isDark?(w(),E("span",P_,A_)):A("",!0)])])])}const x_=be(I_,[["render",O_]]),D_={name:"NavBar",props:{panel:{type:String,required:!0}},emits:["change-panel"],methods:{changePanel:function(t){this.$emit("change-panel",t)}}},M_={class:"nav-bar"},L_=m("span",{class:"material-symbols-outlined"},"home",-1),U_=[L_],F_=m("span",{class:"material-symbols-outlined"},"favorite",-1),B_=[F_],V_=m("span",{class:"material-symbols-outlined"},"archive",-1),H_=[V_],W_=m("span",{class:"material-symbols-outlined"},"delete",-1),$_=[W_];function j_(t,e,n,s,i,r){return w(),E("section",M_,[m("button",{class:ce(n.panel==="Notes"?"current-nav-btn":"nav-btn"),onClick:e[0]||(e[0]=o=>r.changePanel("Notes"))},U_,2),m("button",{class:ce(n.panel==="Favorite"?"current-nav-btn":"nav-btn"),onClick:e[1]||(e[1]=o=>r.changePanel("Favorite"))},B_,2),m("button",{class:ce(n.panel==="Archive"?"current-nav-btn":"nav-btn"),onClick:e[2]||(e[2]=o=>r.changePanel("Archive"))},H_,2),m("button",{class:ce(n.panel==="Trash"?"current-nav-btn":"nav-btn"),onClick:e[3]||(e[3]=o=>r.changePanel("Trash"))},$_,2)])}const q_=be(D_,[["render",j_]]),z_={name:"Notes"},G_={xmlns:"http://www.w3.org/2000/svg",version:"1.1","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:svgjs":"http://svgjs.com/svgjs",width:"512",height:"512",x:"0",y:"0",viewBox:"0 0 512 512",style:{"enable-background":"new 0 0 512 512"},"xml:space":"preserve",class:""},K_=sr('<g><linearGradient id="a" x1="211" x2="211" y1="512" y2="30" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffe59a"></stop><stop offset="1" stop-color="#ffffd5"></stop></linearGradient><linearGradient id="b" x1="256" x2="256" y1="451" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5900"></stop><stop offset="1" stop-color="#ffde00"></stop></linearGradient><path fill="url(#a)" d="M377 61h-76V30H30v391h30v76c0 8.291 6.709 15 15 15h302c8.291 0 15-6.709 15-15V76c0-8.291-6.709-15-15-15z" data-original="url(#a)"></path><path fill="url(#b)" d="M497 91h-60c-8.291 0-15 6.709-15 15v202.925c0 46.172 10.928 92.432 31.582 133.784C456.131 447.792 461.316 451 467 451s10.869-3.208 13.418-8.291C501.072 401.356 512 355.097 512 308.925V106c0-8.291-6.709-15-15-15zM316 0H15C6.709 0 0 6.709 0 15v421c0 8.291 6.709 15 15 15h301c8.291 0 15-6.709 15-15V15c0-8.291-6.709-15-15-15zM75 91h91c8.291 0 15 6.709 15 15s-6.709 15-15 15H75c-8.291 0-15-6.709-15-15s6.709-15 15-15zm181 270H75c-8.291 0-15-6.709-15-15s6.709-15 15-15h181c8.291 0 15 6.709 15 15s-6.709 15-15 15zm0-60H75c-8.291 0-15-6.709-15-15s6.709-15 15-15h181c8.291 0 15 6.709 15 15s-6.709 15-15 15zm0-60H75c-8.291 0-15-6.709-15-15s6.709-15 15-15h181c8.291 0 15 6.709 15 15s-6.709 15-15 15zm0-60H75c-8.291 0-15-6.709-15-15s6.709-15 15-15h181c8.291 0 15 6.709 15 15s-6.709 15-15 15z" data-original="url(#b)" class=""></path></g>',1),Y_=[K_];function J_(t,e,n,s,i,r){return w(),E("svg",G_,Y_)}const Q_=be(z_,[["render",J_]]),X_={name:"Favorite"},Z_={xmlns:"http://www.w3.org/2000/svg",version:"1.1","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:svgjs":"http://svgjs.com/svgjs",width:"512",height:"512",x:"0",y:"0",viewBox:"0 0 512 512",style:{"enable-background":"new 0 0 512 512"},"xml:space":"preserve",class:""},eg=sr('<g><linearGradient id="a" x1="256" x2="256" y1="512" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd3a84"></stop><stop offset="1" stop-color="#ffa68d"></stop></linearGradient><linearGradient id="b" x1="256" x2="256" y1="421" y2="121" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffc2cc"></stop><stop offset="1" stop-color="#fff2f4"></stop></linearGradient><circle cx="256" cy="256" r="256" fill="url(#a)" data-original="url(#a)" class=""></circle><path fill="url(#b)" d="M331 121c-32.928 0-58.183 18.511-75 46.058C239.18 139.506 213.923 121 181 121c-25.511 0-48.788 10.768-65.541 30.32C99.687 169.729 91 194.313 91 220.545c0 28.523 10.698 54.892 33.666 82.986 20.138 24.632 49.048 49.971 82.524 79.313 12.376 10.848 25.174 22.065 38.775 34.306 2.853 2.567 6.444 3.85 10.035 3.85s7.182-1.283 10.035-3.851c13.601-12.241 26.398-23.458 38.775-34.306 33.476-29.341 62.386-54.681 82.524-79.313C410.302 275.438 421 249.068 421 220.545 421 166.908 384.252 121 331 121z" data-original="url(#b)" class=""></path></g>',1),tg=[eg];function ng(t,e,n,s,i,r){return w(),E("svg",Z_,tg)}const sg=be(X_,[["render",ng]]),ig={name:"Trash"},rg={xmlns:"http://www.w3.org/2000/svg",version:"1.1","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:svgjs":"http://svgjs.com/svgjs",width:"512",height:"512",x:"0",y:"0",viewBox:"0 0 512 512",style:{"enable-background":"new 0 0 512 512"},"xml:space":"preserve",class:""},og=sr('<g><linearGradient id="a" x1="256" x2="256" y1="512" y2="45" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5558ff"></stop><stop offset="1" stop-color="#00c0ff"></stop></linearGradient><linearGradient id="b" x1="256" x2="256" y1="452" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#addcff"></stop><stop offset=".503" stop-color="#eaf6ff"></stop><stop offset="1" stop-color="#eaf6ff"></stop></linearGradient> <path fill="url(#a)" d="M432.045 126.849A15.015 15.015 0 0 0 421 122H91a15.017 15.017 0 0 0-11.045 4.849 14.949 14.949 0 0 0-3.896 11.396l25.43 304.98c3.193 38.57 36.005 68.775 74.706 68.775h159.609c38.701 0 71.514-30.205 74.707-68.774l25.43-304.98a14.948 14.948 0 0 0-3.896-11.397z" data-original="url(#a)"></path><path fill="url(#b)" d="M328.103 287.945c6.401.046 12.378-3.851 14.381-10.291 2.49-7.91-1.904-16.318-9.814-18.809l-30.352-9.536c-8.125-2.488-18.636 2.377-19.83 13.07l-8.5 27.096c-2.461 7.91 1.934 16.333 9.844 18.809 7.09 2.224 13.547-1.09 17.087-7.434l28.118 49.197c4.072 7.172 1.608 16.326-5.537 20.464-7.178 4.146-9.639 13.315-5.479 20.493 4.239 7.318 13.54 9.541 20.479 5.464 13.887-8.013 22.5-22.954 22.5-38.965a45.14 45.14 0 0 0-5.889-22.31zM263.5 239.51c7.148 4.116 16.348 1.685 20.508-5.508 4.131-7.178 1.67-16.348-5.508-20.479-20.801-11.953-49.6-4.175-61.611 16.67l-32.197 56.351c-3.281-6.141-10.217-9.527-17.256-7.439-7.939 2.358-12.451 10.708-10.107 18.647l8.8 29.535c1.734 7.405 10.411 13.566 18.944 11.041l30.498-9.082c7.939-2.358 12.451-10.708 10.107-18.647-1.926-6.442-7.749-10.406-14.158-10.496l31.414-54.998c4.043-7.001 13.593-9.594 20.566-5.595zm10.605 114.887c-5.859-5.859-15.352-5.859-21.211 0-4.944 4.942-5.457 12.354-2.062 18.105H196c-5.332 0-10.313-2.871-13.008-7.515-4.16-7.178-13.418-9.639-20.479-5.464-7.178 4.146-9.639 13.315-5.479 20.493 8.027 13.872 22.939 22.485 38.965 22.485h54.833c-3.395 5.751-2.882 13.164 2.062 18.105 5.859 5.859 15.351 5.859 21.211 0l22.482-22.482c5.806-5.791 5.897-15.366 0-21.248zM481 62H331V15c0-8.291-6.709-15-15-15H196c-8.291 0-15 6.709-15 15v47H31c-8.291 0-15 6.709-15 15s6.709 15 15 15h450c8.291 0 15-6.709 15-15s-6.709-15-15-15zm-180 0h-90V30h90z" data-original="url(#b)"></path></g>',1),ag=[og];function lg(t,e,n,s,i,r){return w(),E("svg",rg,ag)}const cg=be(ig,[["render",lg]]),ug={name:"Archive Icon"},hg={xmlns:"http://www.w3.org/2000/svg",version:"1.1","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:svgjs":"http://svgjs.com/svgjs",width:"512",height:"512",x:"0",y:"0",viewBox:"0 0 512 512",style:{"enable-background":"new 0 0 512 512"},"xml:space":"preserve",class:""},dg=sr('<g><linearGradient id="a" x1="256" x2="256" y1="451" y2="61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#a93aff"></stop><stop offset="1" stop-color="#ff81ff"></stop></linearGradient><linearGradient id="b" x1="256" x2="256" y1="481" y2="31" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffbef9"></stop><stop offset="1" stop-color="#fff1ff"></stop></linearGradient><path fill="url(#a)" d="M30 61 0 91v330l30 30h91l30-30V91l-30-30zm452 0h-91l-30 30v330l30 30h91l30-30V91zm-271 0-30 30v330l30 30h90l30-30V91l-30-30z" data-original="url(#a)"></path><path fill="url(#b)" d="M91 346V166c0-8.291-6.709-15-15-15s-15 6.709-15 15v180c0 8.291 6.709 15 15 15s15-6.709 15-15zm90 120c0 8.291 6.709 15 15 15h120c8.291 0 15-6.709 15-15v-45H181zM136 31H15C6.709 31 0 37.709 0 46v45h151V46c0-8.291-6.709-15-15-15zm361 0H376c-8.291 0-15 6.709-15 15v45h151V46c0-8.291-6.709-15-15-15zM0 466c0 8.291 6.709 15 15 15h121c8.291 0 15-6.709 15-15v-45H0zm361 0c0 8.291 6.709 15 15 15h121c8.291 0 15-6.709 15-15v-45H361zm90-120V166c0-8.291-6.709-15-15-15s-15 6.709-15 15v180c0 8.291 6.709 15 15 15s15-6.709 15-15zm-180 0V166c0-8.291-6.709-15-15-15s-15 6.709-15 15v180c0 8.291 6.709 15 15 15s15-6.709 15-15zm45-315H196c-8.291 0-15 6.709-15 15v45h150V46c0-8.291-6.709-15-15-15z" data-original="url(#b)"></path></g>',1),fg=[dg];function pg(t,e,n,s,i,r){return w(),E("svg",hg,fg)}const _g=be(ug,[["render",pg]]),gg={name:"HintText",components:{notes:Q_,favorite:sg,trash:cg,archive:_g},props:{currentPanelNotes:{type:Array,required:!0},panel:{type:String,required:!0},panelLength:{type:Number,required:!0}},emits:["open-editor"],methods:{openEditor:function(){this.$emit("open-editor")}},computed:{currentPanelLength:function(){return this.panel==="Notes"?this.panelLength:this.currentPanelNotes.length}}},mg={key:0,class:"hint-container"},yg=m("h1",null,"Anything to add?",-1),vg={key:1,class:"hint-text"},bg=m("h1",null,"No favorite notes",-1),wg={key:2,class:"hint-text"},Eg=m("h1",null,"Archive is empty",-1),Ig={key:3,class:"hint-text"},Cg=m("h1",null,"Trash is empty",-1);function Tg(t,e,n,s,i,r){const o=ye("notes"),a=ye("favorite"),l=ye("archive"),c=ye("trash");return r.currentPanelLength===0?(w(),E("div",mg,[n.panel==="Notes"?(w(),E("div",{key:0,class:"hint-text home-hint",onClick:e[0]||(e[0]=(...u)=>r.openEditor&&r.openEditor(...u))},[se(o),yg])):A("",!0),n.panel==="Favorite"?(w(),E("div",vg,[se(a),bg])):A("",!0),n.panel==="Archive"?(w(),E("div",wg,[se(l),Eg])):A("",!0),n.panel==="Trash"?(w(),E("div",Ig,[se(c),Cg])):A("",!0)])):A("",!0)}const Sg=be(gg,[["render",Tg]]),kg={name:"TaskEditor",props:{taskPanel:{type:Boolean,required:!0},taskData:{type:String,required:!0},taskStatus:{type:Boolean,required:!0},tasksList:{type:Array,default:()=>[],required:!0},theme:{type:String,required:!0}},emits:["add-task","delete-task","change-task-status","data-update","status-update"],methods:{addNewTask:function(){this.taskInputData.trim()!==""&&this.$emit("add-task")},deleteThisTask:function(t){this.$emit("delete-task",t)},changeTaskStatus:function(t){this.$emit("change-task-status",t)},checkboxClick:function(){this.$refs.checkbox.click()},taskStatusClick:function(t){t.completed=!t.completed}},computed:{taskInputData:{get:function(){return this.taskData},set:function(t){this.$emit("data-update",t)}},taskInputStatus:{get:function(){return this.taskStatus},set:function(t){this.$emit("status-update",t)}},checkboxTheme:function(){switch(this.theme){case"ultramarine-blue":return"checkbox-white";case"mustard":return"checkbox-black";case"white":return"checkbox-black";case"mystic-maroon":return"checkbox-white";case"bright-mint":return"checkbox-black";case"coral":return"checkbox-white";case"black":return"checkbox-white";default:return"checkbox-white"}}}},Ng={class:"task-panel"},Pg={key:0,class:"task-input-panel"},Rg={class:"option-btn"},Ag={key:0,class:"material-symbols-outlined"},Og=m("span",{class:"material-symbols-outlined"},"add",-1),xg=[Og],Dg={key:0,class:"task-container"},Mg={key:0,class:"list-box"},Lg=["onClick"],Ug=["onUpdate:modelValue","onClick"],Fg={key:0,class:"material-symbols-outlined"},Bg=["onClick"],Vg=["onClick"],Hg=m("span",{class:"material-symbols-outlined"},"delete",-1),Wg=[Hg],$g={key:1,class:"overlay2"};function jg(t,e,n,s,i,r){return w(),E("span",null,[m("section",Ng,[n.taskPanel?(w(),E("div",Pg,[m("div",Rg,[qe(m("input",{type:"checkbox",ref:"checkbox","onUpdate:modelValue":e[0]||(e[0]=o=>r.taskInputStatus=o),style:{display:"none"}},null,512),[[Ei,r.taskInputStatus]]),m("span",{class:"checkbox",onClick:e[1]||(e[1]=(...o)=>r.checkboxClick&&r.checkboxClick(...o))},[r.taskInputStatus?(w(),E("span",Ag,"done")):A("",!0)])]),qe(m("input",{type:"text",class:"input-task","onUpdate:modelValue":e[2]||(e[2]=o=>r.taskInputData=o),placeholder:"List item:",onKeydown:e[3]||(e[3]=m_((...o)=>r.addNewTask&&r.addNewTask(...o),["enter"]))},null,544),[[sn,r.taskInputData]]),m("button",{onClick:e[4]||(e[4]=(...o)=>r.addNewTask&&r.addNewTask(...o)),class:"task-add-btn option-btn"},xg)])):A("",!0)]),n.tasksList.length>0?(w(),E("ul",Dg,[(w(!0),E(ve,null,Dt(n.tasksList,(o,a)=>(w(),E("li",{key:a},[o.data!==""&&o.id!==""?(w(),E("span",Mg,[m("button",{class:ce(["checkbox",r.checkboxTheme]),onClick:l=>r.taskStatusClick(o)},[qe(m("input",{type:"checkbox",style:{display:"none"},"onUpdate:modelValue":l=>o.completed=l,onClick:l=>r.changeTaskStatus(o.id)},null,8,Ug),[[Ei,o.completed]]),o.completed?(w(),E("span",Fg,"done")):A("",!0)],10,Lg),m("p",{class:ce(o.completed?"task-completed":""),onClick:l=>r.changeTaskStatus(o.id)},At(o.data),11,Bg),m("button",{onClick:l=>r.deleteThisTask(o),class:"task-delete-btn option-btn"},Wg,8,Vg)])):A("",!0)]))),128))])):A("",!0),n.taskPanel?(w(),E("section",$g)):A("",!0)])}const qg=be(kg,[["render",jg]]),zg={name:"ThemePalette",props:{noteIsNew:{type:Boolean,required:!0},trashed:{type:Boolean,required:!0},theme:{type:String,required:!0}},emits:["change-theme"],methods:{changeTheme:function(t){this.$emit("change-theme",t)}}},Gg={class:"theme-palette"},Kg=["disabled"],Yg={key:0,class:"material-symbols-outlined"},Jg=["disabled"],Qg={key:0,class:"material-symbols-outlined"},Xg=["disabled"],Zg={key:0,class:"material-symbols-outlined"},em=["disabled"],tm={key:0,class:"material-symbols-outlined"},nm=["disabled"],sm={key:0,class:"material-symbols-outlined"},im=["disabled"],rm={key:0,class:"material-symbols-outlined"},om=["disabled"],am={key:0,class:"material-symbols-outlined"},lm=["disabled"],cm={key:0,style:{fill:"white"},class:"material-symbols-outlined"};function um(t,e,n,s,i,r){return w(),E("div",Gg,[m("button",{class:"palette-btn ultramarine-blue",onClick:e[0]||(e[0]=o=>r.changeTheme("ultramarine-blue")),disabled:n.trashed},[n.theme==="ultramarine-blue"?(w(),E("span",Yg,"done")):A("",!0)],8,Kg),m("button",{class:"palette-btn mustard",onClick:e[1]||(e[1]=o=>r.changeTheme("mustard")),disabled:n.trashed},[n.theme==="mustard"?(w(),E("span",Qg,"done")):A("",!0)],8,Jg),m("button",{class:"palette-btn coral",onClick:e[2]||(e[2]=o=>r.changeTheme("coral")),disabled:n.trashed},[n.theme==="coral"?(w(),E("span",Zg,"done")):A("",!0)],8,Xg),m("button",{class:"palette-btn white",onClick:e[3]||(e[3]=o=>r.changeTheme("white")),disabled:n.trashed},[n.theme==="white"?(w(),E("span",tm,"done")):A("",!0)],8,em),m("button",{class:"palette-btn mystic-maroon",onClick:e[4]||(e[4]=o=>r.changeTheme("mystic-maroon")),disabled:n.trashed},[n.theme==="mystic-maroon"?(w(),E("span",sm,"done")):A("",!0)],8,nm),m("button",{class:"palette-btn purple",onClick:e[5]||(e[5]=o=>r.changeTheme("purple")),disabled:n.trashed},[n.theme==="purple"?(w(),E("span",rm,"done")):A("",!0)],8,im),m("button",{class:"palette-btn bright-mint",onClick:e[6]||(e[6]=o=>r.changeTheme("bright-mint")),disabled:n.trashed},[n.theme==="bright-mint"?(w(),E("span",am,"done")):A("",!0)],8,om),m("button",{class:"palette-btn black-img",onClick:e[7]||(e[7]=o=>r.changeTheme("black")),disabled:n.trashed},[n.theme==="black"?(w(),E("span",cm,"done")):A("",!0)],8,lm)])}const hm=be(zg,[["render",um]]),dm={name:"Pin"},fm={xmlns:"http://www.w3.org/2000/svg",version:"1.1","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:svgjs":"http://svgjs.com/svgjs",width:"512",height:"512",x:"0",y:"0",viewBox:"0 0 193.826 193.826",style:{"enable-background":"new 0 0 512 512"},"xml:space":"preserve"},pm=m("g",null,[m("path",{d:"M191.495 55.511 137.449 1.465a4.998 4.998 0 0 0-7.07 0l-.229.229a17.43 17.43 0 0 0-5.14 12.406c0 3.019.767 5.916 2.192 8.485l-56.55 48.533c-4.328-3.868-9.852-5.985-15.703-5.985a23.444 23.444 0 0 0-16.689 6.913l-.339.339a4.998 4.998 0 0 0 0 7.07l32.378 32.378-31.534 31.533c-.631.649-15.557 16.03-25.37 28.27-9.345 11.653-11.193 13.788-11.289 13.898a4.995 4.995 0 0 0 .218 6.822 4.987 4.987 0 0 0 3.543 1.471c1.173 0 2.349-.41 3.295-1.237.083-.072 2.169-1.885 13.898-11.289 12.238-9.813 27.619-24.74 28.318-25.421l31.483-31.483 30.644 30.644c.976.977 2.256 1.465 3.535 1.465s2.56-.488 3.535-1.465l.339-.339a23.446 23.446 0 0 0 6.913-16.689 23.43 23.43 0 0 0-5.985-15.703l48.533-56.55a17.434 17.434 0 0 0 8.485 2.192c4.687 0 9.093-1.825 12.406-5.14l.229-.229a5 5 0 0 0 0-7.072z","data-original":"#000000"})],-1),_m=[pm];function gm(t,e,n,s,i,r){return w(),E("svg",fm,_m)}const Ko=be(dm,[["render",gm]]),mm={name:"Unpin"},ym={xmlns:"http://www.w3.org/2000/svg",version:"1.1","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:svgjs":"http://svgjs.com/svgjs",x:"0",y:"0",viewBox:"0 0 24 24",style:{"enable-background":"new 0 0 512 512"},"xml:space":"preserve",class:""},vm=m("g",null,[m("g",{"fill-rule":"evenodd","clip-rule":"evenodd"},[m("path",{d:"M14.872 1.785a.982.982 0 0 0-1.235-.121c-1.388.92-2.063 2.09-2.277 3.226a4.575 4.575 0 0 0-.027 1.526l1.673 1.777.28-.278a.97.97 0 0 0 .182-1.124c-.158-.316-.305-.9-.184-1.542.086-.454.31-.972.822-1.471l6.096 6.067c-.246.243-.545.48-.884.65-.584.294-1.292.403-2.154-.026a.982.982 0 0 0-1.13.183l-.369.367 1.418 1.507c1.177.348 2.249.145 3.119-.293 1.018-.512 1.745-1.333 2.134-1.913a.97.97 0 0 0-.123-1.229zm.046 13.8L8.333 8.999C5.62 8.546 3.318 10.076 2.273 11a.972.972 0 0 0-.042 1.417l3.963 3.944-4.03 4.045L1.5 22.5l2.048-.717 4.03-4.044 3.952 3.932a.981.981 0 0 0 1.41-.026c.943-1.011 2.464-3.202 1.978-6.06zm-2.78 3.936-7.733-7.696c1.178-.764 2.884-1.372 4.648-.585.61.272 1.468.862 2.131 1.522.971.966 1.233 1.41 1.494 2.062.786 1.968.187 3.61-.54 4.697z","data-original":"#000000",class:""}),m("path",{d:"m1.293 2.707 1.414-1.414 20 20-1.414 1.414z","data-original":"#000000",class:""})])],-1),bm=[vm];function wm(t,e,n,s,i,r){return w(),E("svg",ym,bm)}const Em=be(mm,[["render",wm]]),Im={name:"Note Options",components:{"theme-palette":hm,"pin-icon":Ko,unpin:Em},props:{moreOptions:{type:Boolean,required:!0},theme:{type:String,required:!0},noteIsNew:{type:Boolean,required:!0},taskPanel:{type:Boolean,required:!0},liked:{type:Boolean,required:!0},archived:{type:Boolean,required:!0},trashed:{type:Boolean,required:!0},pin:{type:Boolean,required:!0}},emits:["change-theme","update-bin","open-task-editor","copy-note","update-archive","delete-note","change-pin","update-image","toggle-more-options"],methods:{changeTheme:function(t){this.$emit("change-theme",t)},updateBin:function(){this.$emit("update-bin")},openTaskEditor:function(){this.$emit("open-task-editor")},copyNote:function(){this.$emit("copy-note")},updateArchive:function(){this.$emit("update-archive")},deleteNote:function(){this.$emit("delete-note")},changePin:function(){this.$emit("change-pin")},getImage:function(){this.$refs.inputRef.click(),this.toggleMoreOptions()},updateImages:function(t){const n=t.target.files;n&&this.$emit("update-image",URL.createObjectURL(n[0]))},toggleMoreOptions:function(){this.$emit("toggle-more-options")}}},Cm={key:0,class:"options-container"},Tm=["disabled"],Sm=m("span",{class:"material-symbols-outlined"},"delete",-1),km=m("h2",null,"Delete Note",-1),Nm=[Sm,km],Pm=m("span",{class:"material-symbols-outlined"},"restore_from_trash",-1),Rm=m("h2",null,"Restore Note",-1),Am=[Pm,Rm],Om=["disabled"],xm=m("span",{class:"material-symbols-outlined"},"add",-1),Dm=m("h2",null,"List item",-1),Mm=[xm,Dm],Lm=["disabled"],Um=m("span",{class:"material-symbols-outlined"},"content_copy",-1),Fm=m("h2",null,"Copy Note",-1),Bm=[Um,Fm],Vm=["disabled"],Hm=m("span",{class:"material-symbols-outlined"},"archive",-1),Wm=m("h2",null,"Archive Note",-1),$m=[Hm,Wm],jm=m("span",{class:"material-symbols-outlined"},"unarchive",-1),qm=m("h2",null,"Unrchive Note",-1),zm=[jm,qm],Gm=["disabled"],Km=m("span",{class:"material-symbols-outlined"},"delete_forever",-1),Ym=m("h2",null,"Delete Note Permanently",-1),Jm=[Km,Ym],Qm=m("h2",null,"Pin Note",-1),Xm=m("h2",null,"Remove Pin",-1),Zm={class:"options-panel"},ey=m("span",{class:"material-symbols-outlined"},"image",-1),ty=m("span",{class:"material-symbols-outlined"},"more_vert",-1),ny=[ty];function sy(t,e,n,s,i,r){const o=ye("theme-palette"),a=ye("pin-icon"),l=ye("unpin");return w(),E("span",null,[m("section",{class:ce(n.moreOptions?["more-options","more-options-dark"]:"more-options")},[n.moreOptions?(w(),E("div",Cm,[m("div",null,[se(o,{theme:n.theme,noteIsNew:n.noteIsNew,trashed:n.trashed,onChangeTheme:r.changeTheme},null,8,["theme","noteIsNew","trashed","onChangeTheme"])]),n.trashed?A("",!0):(w(),E("button",{key:0,disabled:n.noteIsNew,onClick:e[0]||(e[0]=(...c)=>r.updateBin&&r.updateBin(...c)),class:"option-btn"},Nm,8,Tm)),!n.noteIsNew&&n.trashed?(w(),E("button",{key:1,onClick:e[1]||(e[1]=(...c)=>r.updateBin&&r.updateBin(...c)),class:"option-btn"},Am)):A("",!0),n.taskPanel?A("",!0):(w(),E("button",{key:2,disabled:n.trashed,onClick:e[2]||(e[2]=(...c)=>r.openTaskEditor&&r.openTaskEditor(...c)),class:"option-btn"},Mm,8,Om)),m("button",{disabled:n.noteIsNew||n.archived||n.trashed,onClick:e[3]||(e[3]=(...c)=>r.copyNote&&r.copyNote(...c)),class:"option-btn"},Bm,8,Lm),n.archived?A("",!0):(w(),E("button",{key:3,disabled:n.noteIsNew||n.archived||n.trashed,onClick:e[4]||(e[4]=(...c)=>r.updateArchive&&r.updateArchive(...c)),class:"option-btn"},$m,8,Vm)),!n.noteIsNew&&n.archived?(w(),E("button",{key:4,onClick:e[5]||(e[5]=(...c)=>r.updateArchive&&r.updateArchive(...c)),class:"option-btn"},zm)):A("",!0),n.trashed?(w(),E("button",{key:5,disabled:n.noteIsNew,onClick:e[6]||(e[6]=(...c)=>r.deleteNote&&r.deleteNote(...c)),class:"option-btn"},Jm,8,Gm)):A("",!0),!n.trashed&&!n.archived&&!n.pin?(w(),E("button",{key:6,class:"pin-note-btn option-btn",onClick:e[7]||(e[7]=(...c)=>r.changePin&&r.changePin(...c))},[se(a),Qm])):A("",!0),!n.trashed&&!n.archived&&n.pin?(w(),E("button",{key:7,class:"pin-note-btn option-btn",onClick:e[8]||(e[8]=(...c)=>r.changePin&&r.changePin(...c))},[se(l),Xm])):A("",!0)])):A("",!0),m("div",Zm,[m("button",{class:ce(n.moreOptions?"option-btn":"gallery-btn")},[m("input",{ref:"inputRef",type:"file",accept:"image",multiple:"",onChange:e[9]||(e[9]=(...c)=>r.updateImages&&r.updateImages(...c)),style:{display:"none"}},null,544),ey],2),m("button",{onClick:e[10]||(e[10]=(...c)=>r.toggleMoreOptions&&r.toggleMoreOptions(...c)),class:ce(n.moreOptions?"option-btn":"more-option-btn")},ny,2)])],2),n.moreOptions?(w(),E("section",{key:0,class:"overlay",onClick:e[11]||(e[11]=(...c)=>r.toggleMoreOptions&&r.toggleMoreOptions(...c))})):A("",!0)])}const iy=be(Im,[["render",sy]]),ry={name:"Editor",components:{"task-editor":qg,"note-options":iy},props:{noteIsNew:{type:Boolean,required:!0},pin:{type:Boolean,required:!0},title:{type:String,required:!0},content:{type:String,required:!0},theme:{type:String,required:!0},liked:{type:Boolean,required:!0},archived:{type:Boolean,required:!0},trashed:{type:Boolean,required:!0},images:{type:Array,default:()=>[],required:!0},taskData:{type:String,required:!0},taskStatus:{type:Boolean,required:!0},tasksList:{type:Array,default:()=>[],required:!0}},emits:["save-the-note","cancel-the-note","images-update","change-theme","delete-image","like-update","bin-update","copy-note","archive-update","delete-note","add-task","delete-task","change-task-status","task-data-update","task-status-update","cancel-task","title-update","content-update","change-pin"],data:function(){return{taskPanel:!1,moreOptions:!1}},methods:{toggleMoreOptions:function(){this.moreOptions=!this.moreOptions},saveTheNote:function(){this.title.trim()!==""||this.content.trim()!==""||this.images.length>0||this.tasksList.length>0?this.$emit("save-the-note"):this.$emit("cancel-the-note")},updateImages:function(t){this.images.unshift(t),this.$emit("images-update",this.images)},changeTheme:function(t){this.$emit("change-theme",t)},deleteImage:function(t){this.$emit("delete-image",t)},updateImp:function(){this.$emit("like-update",!this.liked)},updateBin:function(){this.$emit("bin-update",!this.trashed)},copyNote:function(){this.$emit("copy-note")},updateArchive:function(){this.$emit("archive-update",!this.archived)},deleteNote:function(){this.$emit("delete-note")},addTask:function(){this.taskPanel=!1,this.$emit("add-task")},deleteTask:function(t){this.$emit("delete-task",t)},changeTaskStatus:function(t){this.$emit("change-task-status",t)},dataUpdate:function(t){this.$emit("task-data-update",t)},statusUpdate:function(t){this.$emit("task-status-update",t)},openTaskEditor:function(){this.taskPanel=!0,this.toggleMoreOptions()},closeTaskEditor:function(){this.taskPanel=!1,this.$emit("cancel-task")},changePin:function(){this.$emit("change-pin"),this.toggleMoreOptions()}},computed:{titleText:{get:function(){return this.title},set:function(t){this.$emit("title-update",t)}},contentText:{get:function(){return this.content},set:function(t){this.$emit("content-update",t)}}}},oy={class:"editor-header"},ay=m("span",{class:"material-symbols-outlined"},"keyboard_backspace",-1),ly=[ay],cy={key:0,class:"material-symbols-outlined"},uy={key:1,class:"material-symbols-rounded"},hy={class:"note-content"},dy=["disabled"],fy=m("span",{class:"material-symbols-outlined"},"keyboard_backspace",-1),py=[fy],_y={key:0,class:"img-container"},gy=["src"],my=["onClick"],yy=m("span",{class:"material-symbols-outlined"},"delete",-1),vy=[yy];function by(t,e,n,s,i,r){const o=ye("task-editor"),a=ye("note-options");return w(),E("span",null,[m("section",{class:ce([n.theme,"editor"])},[m("div",oy,[m("button",{onClick:e[0]||(e[0]=(...l)=>r.saveTheNote&&r.saveTheNote(...l))},ly),m("button",{onClick:e[1]||(e[1]=(...l)=>r.updateImp&&r.updateImp(...l))},[n.liked?A("",!0):(w(),E("span",cy,"favorite")),n.liked?(w(),E("span",uy,"favorite")):A("",!0)])]),qe(m("input",{type:"text",placeholder:"Title","onUpdate:modelValue":e[2]||(e[2]=l=>r.titleText=l)},null,512),[[sn,r.titleText]]),m("section",hy,[m("div",null,[t.taskPanel?(w(),E("button",{key:0,class:"option-btn task-close-btn",disabled:n.archived||n.trashed,onClick:e[3]||(e[3]=(...l)=>r.closeTaskEditor&&r.closeTaskEditor(...l))},py,8,dy)):A("",!0),se(o,{taskData:n.taskData,taskStatus:n.taskStatus,tasksList:n.tasksList,"task-panel":t.taskPanel,theme:n.theme,onAddTask:r.addTask,onDeleteTask:r.deleteTask,onChangeTaskStatus:r.changeTaskStatus,onDataUpdate:r.dataUpdate,onStatusUpdate:r.statusUpdate},null,8,["taskData","taskStatus","tasksList","task-panel","theme","onAddTask","onDeleteTask","onChangeTaskStatus","onDataUpdate","onStatusUpdate"])]),n.images.length>0?(w(),E("div",_y,[(w(!0),E(ve,null,Dt(n.images,(l,c)=>(w(),E("div",{class:"img-on-editor",key:c},[l!==""?(w(),E("img",{key:0,src:l,alt:"Image"},null,8,gy)):A("",!0),l!==""?(w(),E("button",{key:1,class:"delete-img-btn",onClick:u=>r.deleteImage(l)},vy,8,my)):A("",!0)]))),128))])):A("",!0),qe(m("textarea",{cols:"20",rows:"10",required:"",wrap:"hard",placeholder:"Type something...","onUpdate:modelValue":e[4]||(e[4]=l=>r.contentText=l)},`
      `,512),[[sn,r.contentText]])]),se(a,{archived:n.archived,liked:n.liked,moreOptions:t.moreOptions,noteIsNew:n.noteIsNew,pin:n.pin,taskPanel:t.taskPanel,theme:n.theme,trashed:n.trashed,onChangePin:r.changePin,onChangeTheme:r.changeTheme,onToggleMoreOptions:r.toggleMoreOptions,onCopyNote:r.copyNote,onDeleteNote:r.deleteNote,onOpenTaskEditor:r.openTaskEditor,onUpdateArchive:r.updateArchive,onUpdateBin:r.updateBin,onUpdateImage:r.updateImages},null,8,["archived","liked","moreOptions","noteIsNew","pin","taskPanel","theme","trashed","onChangePin","onChangeTheme","onToggleMoreOptions","onCopyNote","onDeleteNote","onOpenTaskEditor","onUpdateArchive","onUpdateBin","onUpdateImage"])],2),m("section",{class:"overlay",onClick:e[5]||(e[5]=(...l)=>r.saveTheNote&&r.saveTheNote(...l))})])}const wy=be(ry,[["render",by]]),Ey={name:"PinNotes",components:{pin:Ko},props:{pinNotes:{type:Array,default:()=>[],required:!0}},emits:["edit-note"],methods:{currentTheme:function(t){return t==="black"?["note",t,"black-box"]:t==="white"?["note",t,"white-box"]:["note",t]},editNote:function(t){this.$emit("edit-note",t)}}},Iy=["onClick"],Cy={key:0,class:"pin-btn"},Ty={key:0},Sy={class:"checkbox"},ky=["onUpdate:modelValue"],Ny={key:0,class:"material-symbols-outlined"},Py=["src"];function Ry(t,e,n,s,i,r){const o=ye("pin");return w(),E("span",null,[(w(!0),E(ve,null,Dt(n.pinNotes,(a,l)=>(w(),E("div",{key:l,class:ce(r.currentTheme(a.theme)),onClick:c=>r.editNote(a.id)},[a?(w(),E("button",Cy,[se(o)])):A("",!0),m("h2",null,At(a.title),1),m("ul",null,[(w(!0),E(ve,null,Dt(a.tasks,(c,u)=>(w(),E("li",{class:"tasks",key:u},[c.data!==""&&c.id!==""?(w(),E("span",Ty,[m("button",Sy,[qe(m("input",{type:"checkbox",style:{display:"none"},"onUpdate:modelValue":h=>c.completed=h},null,8,ky),[[Ei,c.completed]]),c.completed?(w(),E("span",Ny,"done")):A("",!0)]),m("p",{class:ce(c.completed?"task-completed":"")},At(c.data),3)])):A("",!0)]))),128))]),(w(!0),E(ve,null,Dt(a.images,(c,u)=>(w(),E("div",{key:u},[c!==""?(w(),E("img",{key:0,src:c,alt:"",class:"img-on-note"},null,8,Py)):A("",!0)]))),128)),m("h3",null,At(a.content),1)],10,Iy))),128))])}const Ay=be(Ey,[["render",Ry]]);var kl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=function(t,e){if(!t)throw zn(e)},zn=function(t){return new Error("Firebase Database ("+Ou.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Oy=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Yo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(f=64)),s.push(n[u],n[h],n[f],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Oy(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new xy;const f=r<<2|a>>4;if(s.push(f),c!==64){const _=a<<4&240|c>>2;if(s.push(_),h!==64){const S=c<<6&192|h;s.push(S)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Du=function(t){const e=xu(t);return Yo.encodeByteArray(e,!0)},Ii=function(t){return Du(t).replace(/\./g,"")},Ci=function(t){try{return Yo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dy(t){return Mu(void 0,t)}function Mu(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!My(n)||(t[n]=Mu(t[n],e[n]));return t}function My(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ly(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy=()=>Ly().__FIREBASE_DEFAULTS__,Fy=()=>{if(typeof process>"u"||typeof kl>"u")return;const t=kl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},By=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ci(t[1]);return e&&JSON.parse(e)},Jo=()=>{try{return Uy()||Fy()||By()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Lu=t=>{var e,n;return(n=(e=Jo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Vy=t=>{const e=Lu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Uu=()=>{var t;return(t=Jo())===null||t===void 0?void 0:t.config},Fu=t=>{var e;return(e=Jo())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ii(JSON.stringify(n)),Ii(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function Wy(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Bu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $y(){const t=Te();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Vu(){return Ou.NODE_ADMIN===!0}function jy(){try{return typeof indexedDB=="object"}catch{return!1}}function qy(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy="FirebaseError";class jt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=zy,Object.setPrototypeOf(this,jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ls.prototype.create)}}class Ls{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Gy(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new jt(i,a,s)}}function Gy(t,e){return t.replace(Ky,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Ky=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(t){return JSON.parse(t)}function ue(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Es(Ci(r[0])||""),n=Es(Ci(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Yy=function(t){const e=Hu(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Jy=function(t){const e=Hu(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Hn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ao(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ti(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Si(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Nl(r)&&Nl(o)){if(!Si(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Nl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function as(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function ls(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Xy(t,e){const n=new Zy(t,e);return n.subscribe.bind(n)}class Zy{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");ev(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Dr),i.error===void 0&&(i.error=Dr),i.complete===void 0&&(i.complete=Dr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ev(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Dr(){}function Xo(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,C(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ar=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(t){return t&&t._delegate?t._delegate:t}class dn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new or;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(iv(e))try{this.getOrInitializeService({instanceIdentifier:Xt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xt){return this.instances.has(e)}getOptions(e=Xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:sv(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Xt){return this.component?this.component.multipleInstances?e:Xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sv(t){return t===Xt?void 0:t}function iv(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const ov={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},av=Q.INFO,lv={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},cv=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=lv[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zo{constructor(e){this.name=e,this._logLevel=av,this._logHandler=cv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ov[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const uv=(t,e)=>e.some(n=>t instanceof n);let Pl,Rl;function hv(){return Pl||(Pl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dv(){return Rl||(Rl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wu=new WeakMap,lo=new WeakMap,$u=new WeakMap,Mr=new WeakMap,ea=new WeakMap;function fv(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Mt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Wu.set(n,t)}).catch(()=>{}),ea.set(e,t),e}function pv(t){if(lo.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});lo.set(t,e)}let co={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return lo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$u.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _v(t){co=t(co)}function gv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Lr(this),e,...n);return $u.set(s,e.sort?e.sort():[e]),Mt(s)}:dv().includes(t)?function(...e){return t.apply(Lr(this),e),Mt(Wu.get(this))}:function(...e){return Mt(t.apply(Lr(this),e))}}function mv(t){return typeof t=="function"?gv(t):(t instanceof IDBTransaction&&pv(t),uv(t,hv())?new Proxy(t,co):t)}function Mt(t){if(t instanceof IDBRequest)return fv(t);if(Mr.has(t))return Mr.get(t);const e=mv(t);return e!==t&&(Mr.set(t,e),ea.set(e,t)),e}const Lr=t=>ea.get(t);function yv(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Mt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Mt(o.result),l.oldVersion,l.newVersion,Mt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const vv=["get","getKey","getAll","getAllKeys","count"],bv=["put","add","delete","clear"],Ur=new Map;function Al(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ur.get(e))return Ur.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=bv.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||vv.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Ur.set(e,r),r}_v(t=>({...t,get:(e,n,s)=>Al(e,n)||t.get(e,n,s),has:(e,n)=>!!Al(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ev(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ev(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const uo="@firebase/app",Ol="0.10.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn=new Zo("@firebase/app"),Iv="@firebase/app-compat",Cv="@firebase/analytics-compat",Tv="@firebase/analytics",Sv="@firebase/app-check-compat",kv="@firebase/app-check",Nv="@firebase/auth",Pv="@firebase/auth-compat",Rv="@firebase/database",Av="@firebase/database-compat",Ov="@firebase/functions",xv="@firebase/functions-compat",Dv="@firebase/installations",Mv="@firebase/installations-compat",Lv="@firebase/messaging",Uv="@firebase/messaging-compat",Fv="@firebase/performance",Bv="@firebase/performance-compat",Vv="@firebase/remote-config",Hv="@firebase/remote-config-compat",Wv="@firebase/storage",$v="@firebase/storage-compat",jv="@firebase/firestore",qv="@firebase/firestore-compat",zv="firebase",Gv="10.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho="[DEFAULT]",Kv={[uo]:"fire-core",[Iv]:"fire-core-compat",[Tv]:"fire-analytics",[Cv]:"fire-analytics-compat",[kv]:"fire-app-check",[Sv]:"fire-app-check-compat",[Nv]:"fire-auth",[Pv]:"fire-auth-compat",[Rv]:"fire-rtdb",[Av]:"fire-rtdb-compat",[Ov]:"fire-fn",[xv]:"fire-fn-compat",[Dv]:"fire-iid",[Mv]:"fire-iid-compat",[Lv]:"fire-fcm",[Uv]:"fire-fcm-compat",[Fv]:"fire-perf",[Bv]:"fire-perf-compat",[Vv]:"fire-rc",[Hv]:"fire-rc-compat",[Wv]:"fire-gcs",[$v]:"fire-gcs-compat",[jv]:"fire-fst",[qv]:"fire-fst-compat","fire-js":"fire-js",[zv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=new Map,Yv=new Map,fo=new Map;function xl(t,e){try{t.container.addComponent(e)}catch(n){fn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Wn(t){const e=t.name;if(fo.has(e))return fn.debug(`There were multiple attempts to register component ${e}.`),!1;fo.set(e,t);for(const n of ki.values())xl(n,t);for(const n of Yv.values())xl(n,t);return!0}function ta(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function st(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Lt=new Ls("app","Firebase",Jv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=Gv;function ju(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ho,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Lt.create("bad-app-name",{appName:String(i)});if(n||(n=Uu()),!n)throw Lt.create("no-options");const r=ki.get(i);if(r){if(Si(n,r.options)&&Si(s,r.config))return r;throw Lt.create("duplicate-app",{appName:i})}const o=new rv(i);for(const l of fo.values())o.addComponent(l);const a=new Qv(n,s,o);return ki.set(i,a),a}function qu(t=ho){const e=ki.get(t);if(!e&&t===ho&&Uu())return ju();if(!e)throw Lt.create("no-app",{appName:t});return e}function Ut(t,e,n){var s;let i=(s=Kv[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fn.warn(a.join(" "));return}Wn(new dn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv="firebase-heartbeat-database",Zv=1,Is="firebase-heartbeat-store";let Fr=null;function zu(){return Fr||(Fr=yv(Xv,Zv,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Is)}catch(n){console.warn(n)}}}}).catch(t=>{throw Lt.create("idb-open",{originalErrorMessage:t.message})})),Fr}async function eb(t){try{const n=(await zu()).transaction(Is),s=await n.objectStore(Is).get(Gu(t));return await n.done,s}catch(e){if(e instanceof jt)fn.warn(e.message);else{const n=Lt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fn.warn(n.message)}}}async function Dl(t,e){try{const s=(await zu()).transaction(Is,"readwrite");await s.objectStore(Is).put(e,Gu(t)),await s.done}catch(n){if(n instanceof jt)fn.warn(n.message);else{const s=Lt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fn.warn(s.message)}}}function Gu(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=1024,nb=30*24*60*60*1e3;class sb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rb(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ml();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=nb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ml(),{heartbeatsToSend:s,unsentEntries:i}=ib(this._heartbeatsCache.heartbeats),r=Ii(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ml(){return new Date().toISOString().substring(0,10)}function ib(t,e=tb){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ll(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ll(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class rb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jy()?qy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await eb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ll(t){return Ii(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(t){Wn(new dn("platform-logger",e=>new wv(e),"PRIVATE")),Wn(new dn("heartbeat",e=>new sb(e),"PRIVATE")),Ut(uo,Ol,t),Ut(uo,Ol,"esm2017"),Ut("fire-js","")}ob("");function na(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Ku(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ab=Ku,Yu=new Ls("auth","Firebase",Ku());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=new Zo("@firebase/auth");function lb(t,...e){Ni.logLevel<=Q.WARN&&Ni.warn(`Auth (${Kn}): ${t}`,...e)}function fi(t,...e){Ni.logLevel<=Q.ERROR&&Ni.error(`Auth (${Kn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t,...e){throw sa(t,...e)}function it(t,...e){return sa(t,...e)}function Ju(t,e,n){const s=Object.assign(Object.assign({},ab()),{[e]:n});return new Ls("auth","Firebase",s).create(e,{appName:t.name})}function _t(t){return Ju(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sa(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Yu.create(t,...e)}function M(t,e,...n){if(!t)throw sa(e,...n)}function ut(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fi(e),new Error(e)}function mt(t,e){t||ut(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function cb(){return Ul()==="http:"||Ul()==="https:"}function Ul(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cb()||Wy()||"connection"in navigator)?navigator.onLine:!0}function hb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n){this.shortDelay=e,this.longDelay=n,mt(n>e,"Short delay should be less than long delay!"),this.isMobile=Qo()||Bu()}get(){return ub()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(t,e){mt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb=new Us(3e4,6e4);function qt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function zt(t,e,n,s,i={}){return Xu(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Gn(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Qu.fetch()(Zu(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Xu(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},db),e);try{const i=new _b(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw si(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw si(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw si(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw si(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ju(t,u,c);Qe(t,u)}}catch(i){if(i instanceof jt)throw i;Qe(t,"network-request-failed",{message:String(i)})}}async function Fs(t,e,n,s,i={}){const r=await zt(t,e,n,s,i);return"mfaPendingCredential"in r&&Qe(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Zu(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?ia(t.config,i):`${t.config.apiScheme}://${i}`}function pb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _b{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(it(this.auth,"network-request-failed")),fb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function si(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=it(t,e,s);return i.customData._tokenResponse=n,i}function Fl(t){return t!==void 0&&t.enterprise!==void 0}class gb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return pb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function mb(t,e){return zt(t,"GET","/v2/recaptchaConfig",qt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yb(t,e){return zt(t,"POST","/v1/accounts:delete",e)}async function eh(t,e){return zt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vb(t,e=!1){const n=Fe(t),s=await n.getIdToken(e),i=ra(s);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:fs(Br(i.auth_time)),issuedAtTime:fs(Br(i.iat)),expirationTime:fs(Br(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Br(t){return Number(t)*1e3}function ra(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return fi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ci(n);return i?JSON.parse(i):(fi("Failed to decode base64 JWT payload"),null)}catch(i){return fi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Bl(t){const e=ra(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cs(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof jt&&bb(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function bb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fs(this.lastLoginAt),this.creationTime=fs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pi(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Cs(t,eh(n,{idToken:s}));M(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?th(r.providerUserInfo):[],a=Ib(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new _o(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Eb(t){const e=Fe(t);await Pi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ib(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function th(t){return t.map(e=>{var{providerId:n}=e,s=na(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cb(t,e){const n=await Xu(t,{},async()=>{const s=Gn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Zu(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Qu.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Tb(t,e){return zt(t,"POST","/v2/accounts:revokeToken",qt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){M(e.length!==0,"internal-error");const n=Bl(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Cb(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Dn;return s&&(M(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(M(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Dn,this.toJSON())}_performRefresh(){return ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ht{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=na(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new _o(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Cs(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vb(this,e)}reload(){return Eb(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ht(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Pi(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(st(this.auth.app))return Promise.reject(_t(this.auth));const e=await this.getIdToken();return await Cs(this,yb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(a=n.tenantId)!==null&&a!==void 0?a:void 0,B=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,K=(c=n.createdAt)!==null&&c!==void 0?c:void 0,fe=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:q,emailVerified:oe,isAnonymous:Se,providerData:j,stsTokenManager:Be}=n;M(q&&Be,e,"internal-error");const Ve=Dn.fromJSON(this.name,Be);M(typeof q=="string",e,"internal-error"),It(h,e.name),It(f,e.name),M(typeof oe=="boolean",e,"internal-error"),M(typeof Se=="boolean",e,"internal-error"),It(_,e.name),It(S,e.name),It(R,e.name),It(B,e.name),It(K,e.name),It(fe,e.name);const Gt=new ht({uid:q,auth:e,email:f,emailVerified:oe,displayName:h,isAnonymous:Se,photoURL:S,phoneNumber:_,tenantId:R,stsTokenManager:Ve,createdAt:K,lastLoginAt:fe});return j&&Array.isArray(j)&&(Gt.providerData=j.map(lt=>Object.assign({},lt))),B&&(Gt._redirectEventId=B),Gt}static async _fromIdTokenResponse(e,n,s=!1){const i=new Dn;i.updateFromServerResponse(n);const r=new ht({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Pi(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];M(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?th(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new Dn;a.updateFromIdToken(s);const l=new ht({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new _o(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl=new Map;function dt(t){mt(t instanceof Function,"Expected a class definition");let e=Vl.get(t);return e?(mt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Vl.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}nh.type="NONE";const Hl=nh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(t,e,n){return`firebase:${t}:${e}:${n}`}class Mn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=pi(this.userKey,i.apiKey,r),this.fullPersistenceKey=pi("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ht._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Mn(dt(Hl),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||dt(Hl);const o=pi(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=ht._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Mn(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Mn(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ah(e))return"Blackberry";if(lh(e))return"Webos";if(oa(e))return"Safari";if((e.includes("chrome/")||ih(e))&&!e.includes("edge/"))return"Chrome";if(oh(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function sh(t=Te()){return/firefox\//i.test(t)}function oa(t=Te()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ih(t=Te()){return/crios\//i.test(t)}function rh(t=Te()){return/iemobile/i.test(t)}function oh(t=Te()){return/android/i.test(t)}function ah(t=Te()){return/blackberry/i.test(t)}function lh(t=Te()){return/webos/i.test(t)}function lr(t=Te()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Sb(t=Te()){var e;return lr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kb(){return $y()&&document.documentMode===10}function ch(t=Te()){return lr(t)||oh(t)||lh(t)||ah(t)||/windows phone/i.test(t)||rh(t)}function Nb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(t,e=[]){let n;switch(t){case"Browser":n=Wl(Te());break;case"Worker":n=`${Wl(Te())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Kn}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rb(t,e={}){return zt(t,"GET","/v2/passwordPolicy",qt(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab=6;class Ob{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Ab,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $l(this),this.idTokenSubscription=new $l(this),this.beforeStateQueue=new Pb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Mn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await eh(this,{idToken:e}),s=await ht._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(st(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Pi(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(st(this.app))return Promise.reject(_t(this));const n=e?Fe(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return st(this.app)?Promise.reject(_t(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return st(this.app)?Promise.reject(_t(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Rb(this),n=new Ob(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ls("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Tb(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dt(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await Mn.create(this,[dt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&lb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function En(t){return Fe(t)}class $l{constructor(e){this.auth=e,this.observer=null,this.addObserver=Xy(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Db(t){cr=t}function hh(t){return cr.loadJS(t)}function Mb(){return cr.recaptchaEnterpriseScript}function Lb(){return cr.gapiScript}function Ub(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Fb="recaptcha-enterprise",Bb="NO_RECAPTCHA";class Vb{constructor(e){this.type=Fb,this.auth=En(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{mb(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new gb(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;Fl(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(Bb)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&Fl(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Mb();l.length!==0&&(l+=a),hh(l).then(()=>{i(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function jl(t,e,n,s=!1){const i=new Vb(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function go(t,e,n,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await jl(t,e,n,n==="getOobCode");return s(t,r)}else return s(t,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await jl(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(r)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hb(t,e){const n=ta(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Si(r,e??{}))return i;Qe(i,"already-initialized")}return n.initialize({options:e})}function Wb(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(dt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function $b(t,e,n){const s=En(t);M(s._canInitEmulator,s,"emulator-config-failed"),M(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=dh(e),{host:o,port:a}=jb(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||qb()}function dh(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jb(t){const e=dh(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:ql(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:ql(o)}}}function ql(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ut("not implemented")}_getIdTokenResponse(e){return ut("not implemented")}_linkToIdToken(e,n){return ut("not implemented")}_getReauthenticationResolver(e){return ut("not implemented")}}async function zb(t,e){return zt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gb(t,e){return Fs(t,"POST","/v1/accounts:signInWithPassword",qt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kb(t,e){return Fs(t,"POST","/v1/accounts:signInWithEmailLink",qt(t,e))}async function Yb(t,e){return Fs(t,"POST","/v1/accounts:signInWithEmailLink",qt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends aa{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ts(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Ts(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return go(e,n,"signInWithPassword",Gb);case"emailLink":return Kb(e,{email:this._email,oobCode:this._password});default:Qe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return go(e,s,"signUpPassword",zb);case"emailLink":return Yb(e,{idToken:n,email:this._email,oobCode:this._password});default:Qe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ln(t,e){return Fs(t,"POST","/v1/accounts:signInWithIdp",qt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb="http://localhost";class pn extends aa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new pn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=na(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new pn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ln(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ln(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ln(e,n)}buildRequest(){const e={requestUri:Jb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Gn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Xb(t){const e=as(ls(t)).link,n=e?as(ls(e)).deep_link_id:null,s=as(ls(t)).deep_link_id;return(s?as(ls(s)).link:null)||s||n||e||t}class la{constructor(e){var n,s,i,r,o,a;const l=as(ls(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=Qb((i=l.mode)!==null&&i!==void 0?i:null);M(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Xb(e);try{return new la(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(){this.providerId=Yn.PROVIDER_ID}static credential(e,n){return Ts._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=la.parseLink(n);return M(s,"argument-error"),Ts._fromEmailAndCode(e,s.code,s.tenantId)}}Yn.PROVIDER_ID="password";Yn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Yn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs extends fh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends Bs{constructor(){super("facebook.com")}static credential(e){return pn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch{return null}}}kt.FACEBOOK_SIGN_IN_METHOD="facebook.com";kt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends Bs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return pn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Nt.credential(n,s)}catch{return null}}}Nt.GOOGLE_SIGN_IN_METHOD="google.com";Nt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends Bs{constructor(){super("github.com")}static credential(e){return pn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pt.credential(e.oauthAccessToken)}catch{return null}}}Pt.GITHUB_SIGN_IN_METHOD="github.com";Pt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends Bs{constructor(){super("twitter.com")}static credential(e,n){return pn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Rt.credential(n,s)}catch{return null}}}Rt.TWITTER_SIGN_IN_METHOD="twitter.com";Rt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zb(t,e){return Fs(t,"POST","/v1/accounts:signUp",qt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await ht._fromIdTokenResponse(e,s,i),o=zl(s);return new _n({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=zl(s);return new _n({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function zl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends jt{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Ri.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Ri(e,n,s,i)}}function ph(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ri._fromErrorAndOperation(t,r,e,s):r})}async function ew(t,e,n=!1){const s=await Cs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _n._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tw(t,e,n=!1){const{auth:s}=t;if(st(s.app))return Promise.reject(_t(s));const i="reauthenticate";try{const r=await Cs(t,ph(s,i,e,t),n);M(r.idToken,s,"internal-error");const o=ra(r.idToken);M(o,s,"internal-error");const{sub:a}=o;return M(t.uid===a,s,"user-mismatch"),_n._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Qe(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _h(t,e,n=!1){if(st(t.app))return Promise.reject(_t(t));const s="signIn",i=await ph(t,s,e),r=await _n._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function nw(t,e){return _h(En(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gh(t){const e=En(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function sw(t,e,n){if(st(t.app))return Promise.reject(_t(t));const s=En(t),o=await go(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Zb).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&gh(t),l}),a=await _n._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function iw(t,e,n){return st(t.app)?Promise.reject(_t(t)):nw(Fe(t),Yn.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&gh(t),s})}function rw(t,e,n,s){return Fe(t).onIdTokenChanged(e,n,s)}function ow(t,e,n){return Fe(t).beforeAuthStateChanged(e,n)}const Ai="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ai,"1"),this.storage.removeItem(Ai),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(){const t=Te();return oa(t)||lr(t)}const lw=1e3,cw=10;class yh extends mh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=aw()&&Nb(),this.fallbackToPolling=ch(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);kb()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,cw):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},lw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}yh.type="LOCAL";const uw=yh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh extends mh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vh.type="SESSION";const bh=vh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new ur(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await hw(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ur.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=ca("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return window}function fw(t){rt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wh(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function pw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _w(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function gw(){return wh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh="firebaseLocalStorageDb",mw=1,Oi="firebaseLocalStorage",Ih="fbase_key";class Vs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function hr(t,e){return t.transaction([Oi],e?"readwrite":"readonly").objectStore(Oi)}function yw(){const t=indexedDB.deleteDatabase(Eh);return new Vs(t).toPromise()}function mo(){const t=indexedDB.open(Eh,mw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Oi,{keyPath:Ih})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Oi)?e(s):(s.close(),await yw(),e(await mo()))})})}async function Gl(t,e,n){const s=hr(t,!0).put({[Ih]:e,value:n});return new Vs(s).toPromise()}async function vw(t,e){const n=hr(t,!1).get(e),s=await new Vs(n).toPromise();return s===void 0?null:s.value}function Kl(t,e){const n=hr(t,!0).delete(e);return new Vs(n).toPromise()}const bw=800,ww=3;class Ch{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>ww)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ur._getInstance(gw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await pw(),!this.activeServiceWorker)return;this.sender=new dw(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_w()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mo();return await Gl(e,Ai,"1"),await Kl(e,Ai),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Gl(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>vw(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Kl(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=hr(i,!1).getAll();return new Vs(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ch.type="LOCAL";const Ew=Ch;new Us(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iw(t,e){return e?dt(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua extends aa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ln(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ln(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ln(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Cw(t){return _h(t.auth,new ua(t),t.bypassAuthState)}function Tw(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),tw(n,new ua(t),t.bypassAuthState)}async function Sw(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),ew(n,new ua(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Cw;case"linkViaPopup":case"linkViaRedirect":return Sw;case"reauthViaPopup":case"reauthViaRedirect":return Tw;default:Qe(this.auth,"internal-error")}}resolve(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw=new Us(2e3,1e4);class kn extends Th{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,kn.currentPopupAction&&kn.currentPopupAction.cancel(),kn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){mt(this.filter.length===1,"Popup operations only handle one event");const e=ca();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(it(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(it(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,kn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(it(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kw.get())};e()}}kn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw="pendingRedirect",_i=new Map;class Pw extends Th{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=_i.get(this.auth._key());if(!e){try{const s=await Rw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}_i.set(this.auth._key(),e)}return this.bypassAuthState||_i.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Rw(t,e){const n=xw(e),s=Ow(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Aw(t,e){_i.set(t._key(),e)}function Ow(t){return dt(t._redirectPersistence)}function xw(t){return pi(Nw,t.config.apiKey,t.name)}async function Dw(t,e,n=!1){if(st(t.app))return Promise.reject(_t(t));const s=En(t),i=Iw(s,e),o=await new Pw(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw=10*60*1e3;class Lw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Uw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Sh(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(it(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Mw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yl(e))}saveEventToCache(e){this.cachedEventUids.add(Yl(e)),this.lastProcessedEventTime=Date.now()}}function Yl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Sh({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Uw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sh(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fw(t,e={}){return zt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vw=/^https?/;async function Hw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Fw(t);for(const n of e)try{if(Ww(n))return}catch{}Qe(t,"unauthorized-domain")}function Ww(t){const e=po(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Vw.test(n))return!1;if(Bw.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=new Us(3e4,6e4);function Jl(){const t=rt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function jw(t){return new Promise((e,n)=>{var s,i,r;function o(){Jl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jl(),n(it(t,"network-request-failed"))},timeout:$w.get()})}if(!((i=(s=rt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=rt().gapi)===null||r===void 0)&&r.load)o();else{const a=Ub("iframefcb");return rt()[a]=()=>{gapi.load?o():n(it(t,"network-request-failed"))},hh(`${Lb()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw gi=null,e})}let gi=null;function qw(t){return gi=gi||jw(t),gi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw=new Us(5e3,15e3),Gw="__/auth/iframe",Kw="emulator/auth/iframe",Yw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Jw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Qw(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ia(e,Kw):`https://${t.config.authDomain}/${Gw}`,s={apiKey:e.apiKey,appName:t.name,v:Kn},i=Jw.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Gn(s).slice(1)}`}async function Xw(t){const e=await qw(t),n=rt().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:Qw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Yw,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=it(t,"network-request-failed"),a=rt().setTimeout(()=>{r(o)},zw.get());function l(){rt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eE=500,tE=600,nE="_blank",sE="http://localhost";class Ql{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iE(t,e,n,s=eE,i=tE){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Zw),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Te().toLowerCase();n&&(a=ih(c)?nE:n),sh(c)&&(e=e||sE,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[_,S])=>`${f}${_}=${S},`,"");if(Sb(c)&&a!=="_self")return rE(e||"",a),new Ql(null);const h=window.open(e||"",a,u);M(h,t,"popup-blocked");try{h.focus()}catch{}return new Ql(h)}function rE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE="__/auth/handler",aE="emulator/auth/handler",lE=encodeURIComponent("fac");async function Xl(t,e,n,s,i,r){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Kn,eventId:i};if(e instanceof fh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ao(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof Bs){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${lE}=${encodeURIComponent(l)}`:"";return`${cE(t)}?${Gn(a).slice(1)}${c}`}function cE({config:t}){return t.emulator?ia(t,aE):`https://${t.authDomain}/${oE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="webStorageSupport";class uE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bh,this._completeRedirectFn=Dw,this._overrideRedirectResult=Aw}async _openPopup(e,n,s,i){var r;mt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Xl(e,n,s,po(),i);return iE(e,o,ca())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Xl(e,n,s,po(),i);return fw(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(mt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Xw(e),s=new Lw(e);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vr,{type:Vr},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Vr];o!==void 0&&n(!!o),Qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Hw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ch()||oa()||lr()}}const hE=uE;var Zl="@firebase/auth",ec="1.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pE(t){Wn(new dn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uh(t)},c=new xb(s,i,r,l);return Wb(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Wn(new dn("auth-internal",e=>{const n=En(e.getProvider("auth").getImmediate());return(s=>new dE(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ut(Zl,ec,fE(t)),Ut(Zl,ec,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E=5*60,gE=Fu("authIdTokenMaxAge")||_E;let tc=null;const mE=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>gE)return;const i=n==null?void 0:n.token;tc!==i&&(tc=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function yE(t=qu()){const e=ta(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Hb(t,{popupRedirectResolver:hE,persistence:[Ew,uw,bh]}),s=Fu("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=mE(r.toString());ow(n,o,()=>o(n.currentUser)),rw(n,a=>o(a))}}const i=Lu("auth");return i&&$b(n,`http://${i}`),n}function vE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Db({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=it("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",vE().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pE("Browser");var nc={};const sc="@firebase/database",ic="1.0.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kh="";function bE(t){kh=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ue(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Es(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return bt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new wE(e)}}catch{}return new EE},rn=Nh("localStorage"),yo=Nh("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=new Zo("@firebase/database"),IE=function(){let t=1;return function(){return t++}}(),Ph=function(t){const e=tv(t),n=new Qy;n.update(e);const s=n.digest();return Yo.encodeByteArray(s)},Hs=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Hs.apply(null,s):typeof s=="object"?e+=ue(s):e+=s,e+=" "}return e};let cn=null,rc=!0;const CE=function(t,e){C(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Un.logLevel=Q.VERBOSE,cn=Un.log.bind(Un),e&&yo.set("logging_enabled",!0)):typeof t=="function"?cn=t:(cn=null,yo.remove("logging_enabled"))},we=function(...t){if(rc===!0&&(rc=!1,cn===null&&yo.get("logging_enabled")===!0&&CE(!0)),cn){const e=Hs.apply(null,t);cn(e)}},Ws=function(t){return function(...e){we(t,...e)}},vo=function(...t){const e="FIREBASE INTERNAL ERROR: "+Hs(...t);Un.error(e)},yt=function(...t){const e=`FIREBASE FATAL ERROR: ${Hs(...t)}`;throw Un.error(e),new Error(e)},xe=function(...t){const e="FIREBASE WARNING: "+Hs(...t);Un.warn(e)},TE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&xe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Rh=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},SE=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},$n="[MIN_NAME]",gn="[MAX_NAME]",Jn=function(t,e){if(t===e)return 0;if(t===$n||e===gn)return-1;if(e===$n||t===gn)return 1;{const n=oc(t),s=oc(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},kE=function(t,e){return t===e?0:t<e?-1:1},ns=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ue(e))},ha=function(t){if(typeof t!="object"||t===null)return ue(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ue(e[s]),n+=":",n+=ha(t[e[s]]);return n+="}",n},Ah=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Me(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Oh=function(t){C(!Rh(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},NE=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},PE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function RE(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const AE=new RegExp("^-?(0*)\\d{1,10}$"),OE=-2147483648,xE=2147483647,oc=function(t){if(AE.test(t)){const e=Number(t);if(e>=OE&&e<=xE)return e}return null},Qn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw xe("Exception was thrown by user callback.",n),e},Math.floor(0))}},DE=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ps=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){xe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(we("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',xe(e)}}class Fn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Fn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da="5",xh="v",Dh="s",Mh="r",Lh="f",Uh=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Fh="ls",Bh="p",bo="ac",Vh="websocket",Hh="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=rn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&rn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function UE(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function $h(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let s;if(e===Vh)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Hh)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);UE(t)&&(n.ns=t.namespace);const i=[];return Me(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(){this.counters_={}}incrementCounter(e,n=1){bt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Dy(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr={},Wr={};function fa(t){const e=t.toString();return Hr[e]||(Hr[e]=new FE),Hr[e]}function BE(t,e){const n=t.toString();return Wr[n]||(Wr[n]=e()),Wr[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Qn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac="start",HE="close",WE="pLPCommand",$E="pRTLPCB",jh="id",qh="pw",zh="ser",jE="cb",qE="seg",zE="ts",GE="d",KE="dframe",Gh=1870,Kh=30,YE=Gh-Kh,JE=25e3,QE=3e4;class Nn{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ws(e),this.stats_=fa(n),this.urlFn=l=>(this.appCheckToken&&(l[bo]=this.appCheckToken),$h(n,Hh,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new VE(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(QE)),SE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new pa((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ac)this.id=a,this.password=l;else if(o===HE)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[ac]="t",s[zh]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[jE]=this.scriptTagHolder.uniqueCallbackIdentifier),s[xh]=da,this.transportSessionId&&(s[Dh]=this.transportSessionId),this.lastSessionId&&(s[Fh]=this.lastSessionId),this.applicationId&&(s[Bh]=this.applicationId),this.appCheckToken&&(s[bo]=this.appCheckToken),typeof location<"u"&&location.hostname&&Uh.test(location.hostname)&&(s[Mh]=Lh);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Nn.forceAllow_=!0}static forceDisallow(){Nn.forceDisallow_=!0}static isAvailable(){return Nn.forceAllow_?!0:!Nn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!NE()&&!PE()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Du(n),i=Ah(s,YE);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[KE]="t",s[jh]=e,s[qh]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ue(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class pa{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=IE(),window[WE+this.uniqueCallbackIdentifier]=e,window[$E+this.uniqueCallbackIdentifier]=n,this.myIFrame=pa.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){we("frame writing exception"),a.stack&&we(a.stack),we(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||we("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[jh]=this.myID,e[qh]=this.myPW,e[zh]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Kh+s.length<=Gh;){const o=this.pendingSegs.shift();s=s+"&"+qE+i+"="+o.seg+"&"+zE+i+"="+o.ts+"&"+GE+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(JE)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{we("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE=16384,ZE=45e3;let xi=null;typeof MozWebSocket<"u"?xi=MozWebSocket:typeof WebSocket<"u"&&(xi=WebSocket);class je{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ws(this.connId),this.stats_=fa(n),this.connURL=je.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[xh]=da,typeof location<"u"&&location.hostname&&Uh.test(location.hostname)&&(o[Mh]=Lh),n&&(o[Dh]=n),s&&(o[Fh]=s),i&&(o[bo]=i),r&&(o[Bh]=r),$h(e,Vh,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,rn.set("previous_websocket_failure",!0);try{let s;Vu(),this.mySock=new xi(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){je.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&xi!==null&&!je.forceDisallow_}static previouslyFailed(){return rn.isInMemoryStorage||rn.get("previous_websocket_failure")===!0}markConnectionHealthy(){rn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Es(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ah(n,XE);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ZE))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}je.responsesRequiredToBeHealthy=2;je.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Nn,je]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=je&&je.isAvailable();let s=n&&!je.previouslyFailed();if(e.webSocketOnly&&(n||xe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[je];else{const i=this.transports_=[];for(const r of Ss.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Ss.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ss.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0=6e4,t0=5e3,n0=10*1024,s0=100*1024,$r="t",lc="d",i0="s",cc="r",r0="e",uc="o",hc="a",dc="n",fc="p",o0="h";class a0{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ws("c:"+this.id+":"),this.transportManager_=new Ss(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ps(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>s0?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>n0?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if($r in e){const n=e[$r];n===hc?this.upgradeIfSecondaryHealthy_():n===cc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===uc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ns("t",e),s=ns("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:fc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:hc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:dc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ns("t",e),s=ns("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ns($r,e);if(lc in e){const s=e[lc];if(n===o0){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===dc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===i0?this.onConnectionShutdown_(s):n===cc?this.onReset_(s):n===r0?vo("Server Error: "+s):n===uc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):vo("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),da!==s&&xe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ps(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(e0))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ps(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(t0))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:fc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(rn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di extends Jh{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Qo()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Di}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc=32,_c=768;class X{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function G(){return new X("")}function $(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ht(t){return t.pieces_.length-t.pieceNum_}function ee(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new X(t.pieces_,e)}function Qh(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function l0(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Xh(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Zh(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new X(e,0)}function he(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof X)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new X(n,0)}function H(t){return t.pieceNum_>=t.pieces_.length}function Pe(t,e){const n=$(t),s=$(e);if(n===null)return e;if(n===s)return Pe(ee(t),ee(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ed(t,e){if(Ht(t)!==Ht(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ge(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Ht(t)>Ht(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class c0{constructor(e,n){this.errorPrefix_=n,this.parts_=Xh(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ar(this.parts_[s]);td(this)}}function u0(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ar(e),td(t)}function h0(t){const e=t.parts_.pop();t.byteLength_-=ar(e),t.parts_.length>0&&(t.byteLength_-=1)}function td(t){if(t.byteLength_>_c)throw new Error(t.errorPrefix_+"has a key path longer than "+_c+" bytes ("+t.byteLength_+").");if(t.parts_.length>pc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+pc+") or object contains a cycle "+Zt(t))}function Zt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a extends Jh{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new _a}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=1e3,d0=60*5*1e3,gc=30*1e3,f0=1.3,p0=3e4,_0="server_kill",mc=3;class gt extends Yh{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=gt.nextPersistentConnectionId_++,this.log_=Ws("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ss,this.maxReconnectDelay_=d0,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Vu())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");_a.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Di.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ue(r)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new or,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;gt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&bt(e,"w")){const s=Hn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();xe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Jy(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=gc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Yy(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ue(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):vo("Unrecognized action received from server: "+ue(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ss,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ss,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>p0&&(this.reconnectDelay_=ss),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*f0)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+gt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){C(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?we("getToken() completed but was canceled"):(we("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new a0(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{xe(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(_0)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&xe(h),l())}}}interrupt(e){we("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){we("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ao(this.interruptReasons_)&&(this.reconnectDelay_=ss,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>ha(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new X(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){we("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=mc&&(this.reconnectDelay_=gc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){we("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=mc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+kh.replace(/\./g,"-")]=1,Qo()?e["framework.cordova"]=1:Bu()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Di.getInstance().currentlyOnline();return ao(this.interruptReasons_)&&e}}gt.nextPersistentConnectionId_=0;gt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new V(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new V($n,e),i=new V($n,n);return this.compare(s,i)!==0}minPost(){return V.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ii;class nd extends dr{static get __EMPTY_NODE(){return ii}static set __EMPTY_NODE(e){ii=e}compare(e,n){return Jn(e.name,n.name)}isDefinedOn(e){throw zn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return V.MIN}maxPost(){return new V(gn,ii)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new V(e,ii)}toString(){return".key"}}const Bn=new nd;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ge{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ge.RED,this.left=i??Oe.EMPTY_NODE,this.right=r??Oe.EMPTY_NODE}copy(e,n,s,i,r){return new ge(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Oe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Oe.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ge.RED=!0;ge.BLACK=!1;class g0{copy(e,n,s,i,r){return this}insert(e,n,s){return new ge(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Oe{constructor(e,n=Oe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Oe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ge.BLACK,null,null))}remove(e){return new Oe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ge.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ri(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ri(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ri(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ri(this.root_,null,this.comparator_,!0,e)}}Oe.EMPTY_NODE=new g0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(t,e){return Jn(t.name,e.name)}function ga(t,e){return Jn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wo;function y0(t){wo=t}const sd=function(t){return typeof t=="number"?"number:"+Oh(t):"string:"+t},id=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&bt(e,".sv"),"Priority must be a string or number.")}else C(t===wo||t.isEmpty(),"priority of unexpected type.");C(t===wo||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yc;class _e{constructor(e,n=_e.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),id(this.priorityNode_)}static set __childrenNodeConstructor(e){yc=e}static get __childrenNodeConstructor(){return yc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new _e(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:_e.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return H(e)?this:$(e)===".priority"?this.priorityNode_:_e.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:_e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=$(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(C(s!==".priority"||Ht(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,_e.__childrenNodeConstructor.EMPTY_NODE.updateChild(ee(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+sd(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Oh(this.value_):e+=this.value_,this.lazyHash_=Ph(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===_e.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof _e.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=_e.VALUE_TYPE_ORDER.indexOf(n),r=_e.VALUE_TYPE_ORDER.indexOf(s);return C(i>=0,"Unknown leaf type: "+n),C(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}_e.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rd,od;function v0(t){rd=t}function b0(t){od=t}class w0 extends dr{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Jn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return V.MIN}maxPost(){return new V(gn,new _e("[PRIORITY-POST]",od))}makePost(e,n){const s=rd(e);return new V(n,new _e("[PRIORITY-POST]",s))}toString(){return".priority"}}const le=new w0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0=Math.log(2);class I0{constructor(e){const n=r=>parseInt(Math.log(r)/E0,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Mi=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new ge(f,h.node,ge.BLACK,null,null);{const _=parseInt(u/2,10)+l,S=i(l,_),R=i(_+1,c);return h=t[_],f=n?n(h):h,new ge(f,h.node,ge.BLACK,S,R)}},r=function(l){let c=null,u=null,h=t.length;const f=function(S,R){const B=h-S,K=h;h-=S;const fe=i(B+1,K),q=t[B],oe=n?n(q):q;_(new ge(oe,q.node,R,null,fe))},_=function(S){c?(c.left=S,c=S):(u=S,c=S)};for(let S=0;S<l.count;++S){const R=l.nextBitIsOne(),B=Math.pow(2,l.count-(S+1));R?f(B,ge.BLACK):(f(B,ge.BLACK),f(B,ge.RED))}return u},o=new I0(t.length),a=r(o);return new Oe(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jr;const Sn={};class ft{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return C(Sn&&le,"ChildrenNode.ts has not been loaded"),jr=jr||new ft({".priority":Sn},{".priority":le}),jr}get(e){const n=Hn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Oe?n:null}hasIndex(e){return bt(this.indexSet_,e.toString())}addIndex(e,n){C(e!==Bn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(V.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Mi(s,e.getCompare()):a=Sn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new ft(u,c)}addToIndexes(e,n){const s=Ti(this.indexes_,(i,r)=>{const o=Hn(this.indexSet_,r);if(C(o,"Missing index implementation for "+r),i===Sn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(V.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Mi(a,o.getCompare())}else return Sn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new V(e.name,a))),l.insert(e,e.node)}});return new ft(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ti(this.indexes_,i=>{if(i===Sn)return i;{const r=n.get(e.name);return r?i.remove(new V(e.name,r)):i}});return new ft(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let is;class D{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&id(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return is||(is=new D(new Oe(ga),null,ft.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||is}updatePriority(e){return this.children_.isEmpty()?this:new D(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?is:n}}getChild(e){const n=$(e);return n===null?this:this.getImmediateChild(n).getChild(ee(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new V(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?is:this.priorityNode_;return new D(i,o,r)}}updateChild(e,n){const s=$(e);if(s===null)return n;{C($(e)!==".priority"||Ht(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ee(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(le,(o,a)=>{n[o]=a.val(e),s++,r&&D.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+sd(this.getPriority().val())+":"),this.forEachChild(le,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Ph(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new V(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new V(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new V(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,V.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,V.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===$s?-1:0}withIndex(e){if(e===Bn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new D(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Bn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(le),i=n.getIterator(le);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Bn?null:this.indexMap_.get(e.toString())}}D.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class C0 extends D{constructor(){super(new Oe(ga),D.EMPTY_NODE,ft.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return D.EMPTY_NODE}isEmpty(){return!1}}const $s=new C0;Object.defineProperties(V,{MIN:{value:new V($n,D.EMPTY_NODE)},MAX:{value:new V(gn,$s)}});nd.__EMPTY_NODE=D.EMPTY_NODE;_e.__childrenNodeConstructor=D;y0($s);b0($s);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0=!0;function me(t,e=null){if(t===null)return D.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new _e(n,me(e))}if(!(t instanceof Array)&&T0){const n=[];let s=!1;if(Me(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=me(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new V(o,l)))}}),n.length===0)return D.EMPTY_NODE;const r=Mi(n,m0,o=>o.name,ga);if(s){const o=Mi(n,le.getCompare());return new D(r,me(e),new ft({".priority":o},{".priority":le}))}else return new D(r,me(e),ft.Default)}else{let n=D.EMPTY_NODE;return Me(t,(s,i)=>{if(bt(t,s)&&s.substring(0,1)!=="."){const r=me(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(me(e))}}v0(me);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0 extends dr{constructor(e){super(),this.indexPath_=e,C(!H(e)&&$(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Jn(e.name,n.name):r}makePost(e,n){const s=me(e),i=D.EMPTY_NODE.updateChild(this.indexPath_,s);return new V(n,i)}maxPost(){const e=D.EMPTY_NODE.updateChild(this.indexPath_,$s);return new V(gn,e)}toString(){return Xh(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0 extends dr{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Jn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return V.MIN}maxPost(){return V.MAX}makePost(e,n){const s=me(e);return new V(n,s)}toString(){return".value"}}const N0=new k0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(t){return{type:"value",snapshotNode:t}}function jn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ks(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ns(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function P0(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ks(n,a)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(jn(n,s)):o.trackChildChange(Ns(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(le,(i,r)=>{n.hasChild(i)||s.trackChildChange(ks(i,r))}),n.isLeafNode()||n.forEachChild(le,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Ns(i,r,o))}else s.trackChildChange(jn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?D.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this.indexedFilter_=new ma(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ps.getStartPost_(e),this.endPost_=Ps.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new V(n,s))||(s=D.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=D.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(D.EMPTY_NODE);const r=this;return n.forEachChild(le,(o,a)=>{r.matches(new V(o,a))||(i=i.updateImmediateChild(o,D.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ps(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new V(n,s))||(s=D.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=D.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=D.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(D.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,D.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,_)=>h(_,f)}else o=this.index_.getCompare();const a=e;C(a.numChildren()===this.limit_,"");const l=new V(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,l);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(Ns(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(ks(n,h));const R=a.updateImmediateChild(n,D.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(jn(f.name,f.node)),R.updateImmediateChild(f.name,f.node)):R}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(ks(c.name,c.node)),r.trackChildChange(jn(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,D.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=le}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:$n}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:gn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===le}copy(){const e=new ya;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function A0(t){return t.loadsAllData()?new ma(t.getIndex()):t.hasLimit()?new R0(t):new Ps(t)}function vc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===le?n="$priority":t.index_===N0?n="$value":t.index_===Bn?n="$key":(C(t.index_ instanceof S0,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ue(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=ue(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+ue(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=ue(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+ue(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function bc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==le&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li extends Yh{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ws("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Li.getListenId_(e,s),a={};this.listens_[o]=a;const l=vc(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Hn(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=Li.getListenId_(e,n);delete this.listens_[s]}get(e){const n=vc(e._queryParams),s=e._path.toString(),i=new or;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Gn(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Es(a.responseText)}catch{xe("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&xe("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(){this.rootNode_=D.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(){return{value:null,children:new Map}}function ld(t,e,n){if(H(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=$(e);t.children.has(s)||t.children.set(s,Ui());const i=t.children.get(s);e=ee(e),ld(i,e,n)}}function Eo(t,e,n){t.value!==null?n(e,t.value):x0(t,(s,i)=>{const r=new X(e.toString()+"/"+s);Eo(i,r,n)})}function x0(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Me(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=10*1e3,M0=30*1e3,L0=5*60*1e3;class U0{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new D0(e);const s=wc+(M0-wc)*Math.random();ps(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Me(e,(i,r)=>{r>0&&bt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),ps(this.reportStats_.bind(this),Math.floor(Math.random()*2*L0))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ke||(Ke={}));function cd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function va(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ba(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ke.ACK_USER_WRITE,this.source=cd()}operationForChild(e){if(H(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new X(e));return new Fi(G(),n,this.revert)}}else return C($(this.path)===e,"operationForChild called for unrelated child."),new Fi(ee(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n){this.source=e,this.path=n,this.type=Ke.LISTEN_COMPLETE}operationForChild(e){return H(this.path)?new Rs(this.source,G()):new Rs(this.source,ee(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ke.OVERWRITE}operationForChild(e){return H(this.path)?new mn(this.source,G(),this.snap.getImmediateChild(e)):new mn(this.source,ee(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ke.MERGE}operationForChild(e){if(H(this.path)){const n=this.children.subtree(new X(e));return n.isEmpty()?null:n.value?new mn(this.source,G(),n.value):new As(this.source,G(),n)}else return C($(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new As(this.source,ee(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(H(e))return this.isFullyInitialized()&&!this.filtered_;const n=$(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function B0(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(P0(o.childName,o.snapshotNode))}),rs(t,i,"child_removed",e,s,n),rs(t,i,"child_added",e,s,n),rs(t,i,"child_moved",r,s,n),rs(t,i,"child_changed",e,s,n),rs(t,i,"value",e,s,n),i}function rs(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>H0(t,a,l)),o.forEach(a=>{const l=V0(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function V0(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function H0(t,e,n){if(e.childName==null||n.childName==null)throw zn("Should only compare child_ events.");const s=new V(e.childName,e.snapshotNode),i=new V(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(t,e){return{eventCache:t,serverCache:e}}function _s(t,e,n,s){return fr(new Wt(e,n,s),t.serverCache)}function ud(t,e,n,s){return fr(t.eventCache,new Wt(e,n,s))}function Bi(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function yn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qr;const W0=()=>(qr||(qr=new Oe(kE)),qr);class te{constructor(e,n=W0()){this.value=e,this.children=n}static fromObject(e){let n=new te(null);return Me(e,(s,i)=>{n=n.set(new X(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:G(),value:this.value};if(H(e))return null;{const s=$(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ee(e),n);return r!=null?{path:he(new X(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(H(e))return this;{const n=$(e),s=this.children.get(n);return s!==null?s.subtree(ee(e)):new te(null)}}set(e,n){if(H(e))return new te(n,this.children);{const s=$(e),r=(this.children.get(s)||new te(null)).set(ee(e),n),o=this.children.insert(s,r);return new te(this.value,o)}}remove(e){if(H(e))return this.children.isEmpty()?new te(null):new te(null,this.children);{const n=$(e),s=this.children.get(n);if(s){const i=s.remove(ee(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new te(null):new te(this.value,r)}else return this}}get(e){if(H(e))return this.value;{const n=$(e),s=this.children.get(n);return s?s.get(ee(e)):null}}setTree(e,n){if(H(e))return n;{const s=$(e),r=(this.children.get(s)||new te(null)).setTree(ee(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new te(this.value,o)}}fold(e){return this.fold_(G(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(he(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,G(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(H(e))return null;{const r=$(e),o=this.children.get(r);return o?o.findOnPath_(ee(e),he(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,G(),n)}foreachOnPath_(e,n,s){if(H(e))return this;{this.value&&s(n,this.value);const i=$(e),r=this.children.get(i);return r?r.foreachOnPath_(ee(e),he(n,i),s):new te(null)}}foreach(e){this.foreach_(G(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(he(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.writeTree_=e}static empty(){return new Je(new te(null))}}function gs(t,e,n){if(H(e))return new Je(new te(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Pe(i,e);return r=r.updateChild(o,n),new Je(t.writeTree_.set(i,r))}else{const i=new te(n),r=t.writeTree_.setTree(e,i);return new Je(r)}}}function Ec(t,e,n){let s=t;return Me(n,(i,r)=>{s=gs(s,he(e,i),r)}),s}function Ic(t,e){if(H(e))return Je.empty();{const n=t.writeTree_.setTree(e,new te(null));return new Je(n)}}function Io(t,e){return In(t,e)!=null}function In(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Pe(n.path,e)):null}function Cc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(le,(s,i)=>{e.push(new V(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new V(s,i.value))}),e}function Ft(t,e){if(H(e))return t;{const n=In(t,e);return n!=null?new Je(new te(n)):new Je(t.writeTree_.subtree(e))}}function Co(t){return t.writeTree_.isEmpty()}function qn(t,e){return hd(G(),t.writeTree_,e)}function hd(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(C(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=hd(he(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(he(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t,e){return _d(e,t)}function $0(t,e,n,s,i){C(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=gs(t.visibleWrites,e,n)),t.lastWriteId=s}function j0(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function q0(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&z0(a,s.path)?i=!1:Ge(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return G0(t),!0;if(s.snap)t.visibleWrites=Ic(t.visibleWrites,s.path);else{const a=s.children;Me(a,l=>{t.visibleWrites=Ic(t.visibleWrites,he(s.path,l))})}return!0}else return!1}function z0(t,e){if(t.snap)return Ge(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ge(he(t.path,n),e))return!0;return!1}function G0(t){t.visibleWrites=dd(t.allWrites,K0,G()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function K0(t){return t.visible}function dd(t,e,n){let s=Je.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Ge(n,o)?(a=Pe(n,o),s=gs(s,a,r.snap)):Ge(o,n)&&(a=Pe(o,n),s=gs(s,G(),r.snap.getChild(a)));else if(r.children){if(Ge(n,o))a=Pe(n,o),s=Ec(s,a,r.children);else if(Ge(o,n))if(a=Pe(o,n),H(a))s=Ec(s,G(),r.children);else{const l=Hn(r.children,$(a));if(l){const c=l.getChild(ee(a));s=gs(s,G(),c)}}}else throw zn("WriteRecord should have .snap or .children")}}return s}function fd(t,e,n,s,i){if(!s&&!i){const r=In(t.visibleWrites,e);if(r!=null)return r;{const o=Ft(t.visibleWrites,e);if(Co(o))return n;if(n==null&&!Io(o,G()))return null;{const a=n||D.EMPTY_NODE;return qn(o,a)}}}else{const r=Ft(t.visibleWrites,e);if(!i&&Co(r))return n;if(!i&&n==null&&!Io(r,G()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Ge(c.path,e)||Ge(e,c.path))},a=dd(t.allWrites,o,e),l=n||D.EMPTY_NODE;return qn(a,l)}}}function Y0(t,e,n){let s=D.EMPTY_NODE;const i=In(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(le,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Ft(t.visibleWrites,e);return n.forEachChild(le,(o,a)=>{const l=qn(Ft(r,new X(o)),a);s=s.updateImmediateChild(o,l)}),Cc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ft(t.visibleWrites,e);return Cc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function J0(t,e,n,s,i){C(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=he(e,n);if(Io(t.visibleWrites,r))return null;{const o=Ft(t.visibleWrites,r);return Co(o)?i.getChild(n):qn(o,i.getChild(n))}}function Q0(t,e,n,s){const i=he(e,n),r=In(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Ft(t.visibleWrites,i);return qn(o,s.getNode().getImmediateChild(n))}else return null}function X0(t,e){return In(t.visibleWrites,e)}function Z0(t,e,n,s,i,r,o){let a;const l=Ft(t.visibleWrites,e),c=In(l,G());if(c!=null)a=c;else if(n!=null)a=qn(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=f.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=f.getNext();return u}else return[]}function eI(){return{visibleWrites:Je.empty(),allWrites:[],lastWriteId:-1}}function Vi(t,e,n,s){return fd(t.writeTree,t.treePath,e,n,s)}function wa(t,e){return Y0(t.writeTree,t.treePath,e)}function Tc(t,e,n,s){return J0(t.writeTree,t.treePath,e,n,s)}function Hi(t,e){return X0(t.writeTree,he(t.treePath,e))}function tI(t,e,n,s,i,r){return Z0(t.writeTree,t.treePath,e,n,s,i,r)}function Ea(t,e,n){return Q0(t.writeTree,t.treePath,e,n)}function pd(t,e){return _d(he(t.treePath,e),t.writeTree)}function _d(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Ns(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,ks(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,jn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Ns(s,e.snapshotNode,i.oldSnap));else throw zn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const gd=new sI;class Ia{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Wt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ea(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:yn(this.viewCache_),r=tI(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(t){return{filter:t}}function rI(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function oI(t,e,n,s,i){const r=new nI;let o,a;if(n.type===Ke.OVERWRITE){const c=n;c.source.fromUser?o=To(t,e,c.path,c.snap,s,i,r):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!H(c.path),o=Wi(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===Ke.MERGE){const c=n;c.source.fromUser?o=lI(t,e,c.path,c.children,s,i,r):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=So(t,e,c.path,c.children,s,i,a,r))}else if(n.type===Ke.ACK_USER_WRITE){const c=n;c.revert?o=hI(t,e,c.path,s,i,r):o=cI(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Ke.LISTEN_COMPLETE)o=uI(t,e,n.path,s,r);else throw zn("Unknown operation type: "+n.type);const l=r.getChanges();return aI(e,o,l),{viewCache:o,changes:l}}function aI(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Bi(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(ad(Bi(e)))}}function md(t,e,n,s,i,r){const o=e.eventCache;if(Hi(s,n)!=null)return e;{let a,l;if(H(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=yn(e),u=c instanceof D?c:D.EMPTY_NODE,h=wa(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Vi(s,yn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=$(n);if(c===".priority"){C(Ht(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Tc(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=ee(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=Tc(s,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=Ea(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return _s(e,a,o.isFullyInitialized()||H(n),t.filter.filtersNodes())}}function Wi(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(H(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),_,null)}else{const _=$(n);if(!l.isCompleteForPath(n)&&Ht(n)>1)return e;const S=ee(n),B=l.getNode().getImmediateChild(_).updateChild(S,s);_===".priority"?c=u.updatePriority(l.getNode(),B):c=u.updateChild(l.getNode(),_,B,S,gd,null)}const h=ud(e,c,l.isFullyInitialized()||H(n),u.filtersNodes()),f=new Ia(i,h,r);return md(t,h,n,i,f,a)}function To(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Ia(i,e,r);if(H(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=_s(e,c,!0,t.filter.filtersNodes());else{const h=$(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=_s(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=ee(n),_=a.getNode().getImmediateChild(h);let S;if(H(f))S=s;else{const R=u.getCompleteChild(h);R!=null?Qh(f)===".priority"&&R.getChild(Zh(f)).isEmpty()?S=R:S=R.updateChild(f,s):S=D.EMPTY_NODE}if(_.equals(S))l=e;else{const R=t.filter.updateChild(a.getNode(),h,S,f,u,o);l=_s(e,R,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Sc(t,e){return t.eventCache.isCompleteForChild(e)}function lI(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=he(n,l);Sc(e,$(u))&&(a=To(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=he(n,l);Sc(e,$(u))||(a=To(t,a,u,c,i,r,o))}),a}function kc(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function So(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;H(n)?c=s:c=new te(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),S=kc(t,_,f);l=Wi(t,l,new X(h),S,i,r,o,a)}}),c.children.inorderTraversal((h,f)=>{const _=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!_){const S=e.serverCache.getNode().getImmediateChild(h),R=kc(t,S,f);l=Wi(t,l,new X(h),R,i,r,o,a)}}),l}function cI(t,e,n,s,i,r,o){if(Hi(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(H(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Wi(t,e,n,l.getNode().getChild(n),i,r,a,o);if(H(n)){let c=new te(null);return l.getNode().forEachChild(Bn,(u,h)=>{c=c.set(new X(u),h)}),So(t,e,n,c,i,r,a,o)}else return e}else{let c=new te(null);return s.foreach((u,h)=>{const f=he(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),So(t,e,n,c,i,r,a,o)}}function uI(t,e,n,s,i){const r=e.serverCache,o=ud(e,r.getNode(),r.isFullyInitialized()||H(n),r.isFiltered());return md(t,o,n,s,gd,i)}function hI(t,e,n,s,i,r){let o;if(Hi(s,n)!=null)return e;{const a=new Ia(s,e,i),l=e.eventCache.getNode();let c;if(H(n)||$(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Vi(s,yn(e));else{const h=e.serverCache.getNode();C(h instanceof D,"serverChildren would be complete if leaf node"),u=wa(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=$(n);let h=Ea(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,ee(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,D.EMPTY_NODE,ee(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Vi(s,yn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Hi(s,G())!=null,_s(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new ma(s.getIndex()),r=A0(s);this.processor_=iI(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(D.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(D.EMPTY_NODE,a.getNode(),null),u=new Wt(l,o.isFullyInitialized(),i.filtersNodes()),h=new Wt(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=fr(h,u),this.eventGenerator_=new F0(this.query_)}get query(){return this.query_}}function fI(t){return t.viewCache_.serverCache.getNode()}function pI(t){return Bi(t.viewCache_)}function _I(t,e){const n=yn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!H(e)&&!n.getImmediateChild($(e)).isEmpty())?n.getChild(e):null}function Nc(t){return t.eventRegistrations_.length===0}function gI(t,e){t.eventRegistrations_.push(e)}function Pc(t,e,n){const s=[];if(n){C(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Rc(t,e,n,s){e.type===Ke.MERGE&&e.source.queryId!==null&&(C(yn(t.viewCache_),"We should always have a full cache before handling merges"),C(Bi(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=oI(t.processor_,i,e,n,s);return rI(t.processor_,r.viewCache),C(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,yd(t,r.changes,r.viewCache.eventCache.getNode(),null)}function mI(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(le,(r,o)=>{s.push(jn(r,o))}),n.isFullyInitialized()&&s.push(ad(n.getNode())),yd(t,s,n.getNode(),e)}function yd(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return B0(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $i;class vd{constructor(){this.views=new Map}}function yI(t){C(!$i,"__referenceConstructor has already been defined"),$i=t}function vI(){return C($i,"Reference.ts has not been loaded"),$i}function bI(t){return t.views.size===0}function Ca(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return C(r!=null,"SyncTree gave us an op for an invalid query."),Rc(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Rc(o,e,n,s));return r}}function bd(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Vi(n,i?s:null),l=!1;a?l=!0:s instanceof D?(a=wa(n,s),l=!1):(a=D.EMPTY_NODE,l=!1);const c=fr(new Wt(a,l,!1),new Wt(s,i,!1));return new dI(e,c)}return o}function wI(t,e,n,s,i,r){const o=bd(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),gI(o,n),mI(o,n)}function EI(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=$t(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Pc(c,n,s)),Nc(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Pc(l,n,s)),Nc(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!$t(t)&&r.push(new(vI())(e._repo,e._path)),{removed:r,events:o}}function wd(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Bt(t,e){let n=null;for(const s of t.views.values())n=n||_I(s,e);return n}function Ed(t,e){if(e._queryParams.loadsAllData())return _r(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Id(t,e){return Ed(t,e)!=null}function $t(t){return _r(t)!=null}function _r(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ji;function II(t){C(!ji,"__referenceConstructor has already been defined"),ji=t}function CI(){return C(ji,"Reference.ts has not been loaded"),ji}let TI=1;class Ac{constructor(e){this.listenProvider_=e,this.syncPointTree_=new te(null),this.pendingWriteTree_=eI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Cd(t,e,n,s,i){return $0(t.pendingWriteTree_,e,n,s,i),i?qs(t,new mn(cd(),e,n)):[]}function on(t,e,n=!1){const s=j0(t.pendingWriteTree_,e);if(q0(t.pendingWriteTree_,e)){let r=new te(null);return s.snap!=null?r=r.set(G(),!0):Me(s.children,o=>{r=r.set(new X(o),!0)}),qs(t,new Fi(s.path,r,n))}else return[]}function js(t,e,n){return qs(t,new mn(va(),e,n))}function SI(t,e,n){const s=te.fromObject(n);return qs(t,new As(va(),e,s))}function kI(t,e){return qs(t,new Rs(va(),e))}function NI(t,e,n){const s=Sa(t,n);if(s){const i=ka(s),r=i.path,o=i.queryId,a=Pe(r,e),l=new Rs(ba(o),a);return Na(t,r,l)}else return[]}function Td(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Id(o,e))){const l=EI(o,e,n,s);bI(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(f,_)=>$t(_));if(u&&!h){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const _=OI(f);for(let S=0;S<_.length;++S){const R=_[S],B=R.query,K=Pd(t,R);t.listenProvider_.startListening(ms(B),Os(t,B),K.hashFn,K.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(ms(e),null):c.forEach(f=>{const _=t.queryToTagMap.get(gr(f));t.listenProvider_.stopListening(ms(f),_)}))}xI(t,c)}return a}function Sd(t,e,n,s){const i=Sa(t,s);if(i!=null){const r=ka(i),o=r.path,a=r.queryId,l=Pe(o,e),c=new mn(ba(a),l,n);return Na(t,o,c)}else return[]}function PI(t,e,n,s){const i=Sa(t,s);if(i){const r=ka(i),o=r.path,a=r.queryId,l=Pe(o,e),c=te.fromObject(n),u=new As(ba(a),l,c);return Na(t,o,u)}else return[]}function RI(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const S=Pe(f,i);r=r||Bt(_,S),o=o||$t(_)});let a=t.syncPointTree_.get(i);a?(o=o||$t(a),r=r||Bt(a,G())):(a=new vd,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=D.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,S)=>{const R=Bt(S,G());R&&(r=r.updateImmediateChild(_,R))}));const c=Id(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=gr(e);C(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=DI();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const u=pr(t.pendingWriteTree_,i);let h=wI(a,e,n,u,r,l);if(!c&&!o&&!s){const f=Ed(a,e);h=h.concat(MI(t,e,f))}return h}function Ta(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Pe(o,e),c=Bt(a,l);if(c)return c});return fd(i,e,r,n,!0)}function AI(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=Pe(c,n);s=s||Bt(u,h)});let i=t.syncPointTree_.get(n);i?s=s||Bt(i,G()):(i=new vd,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Wt(s,!0,!1):null,a=pr(t.pendingWriteTree_,e._path),l=bd(i,e,a,r?o.getNode():D.EMPTY_NODE,r);return pI(l)}function qs(t,e){return kd(e,t.syncPointTree_,null,pr(t.pendingWriteTree_,G()))}function kd(t,e,n,s){if(H(t.path))return Nd(t,e,n,s);{const i=e.get(G());n==null&&i!=null&&(n=Bt(i,G()));let r=[];const o=$(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=pd(s,o);r=r.concat(kd(a,l,c,u))}return i&&(r=r.concat(Ca(i,t,s,n))),r}}function Nd(t,e,n,s){const i=e.get(G());n==null&&i!=null&&(n=Bt(i,G()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=pd(s,o),u=t.operationForChild(o);u&&(r=r.concat(Nd(u,a,l,c)))}),i&&(r=r.concat(Ca(i,t,s,n))),r}function Pd(t,e){const n=e.query,s=Os(t,n);return{hashFn:()=>(fI(e)||D.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?NI(t,n._path,s):kI(t,n._path);{const r=RE(i,n);return Td(t,n,null,r)}}}}function Os(t,e){const n=gr(e);return t.queryToTagMap.get(n)}function gr(t){return t._path.toString()+"$"+t._queryIdentifier}function Sa(t,e){return t.tagToQueryMap.get(e)}function ka(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new X(t.substr(0,e))}}function Na(t,e,n){const s=t.syncPointTree_.get(e);C(s,"Missing sync point for query tag that we're tracking");const i=pr(t.pendingWriteTree_,e);return Ca(s,n,i,null)}function OI(t){return t.fold((e,n,s)=>{if(n&&$t(n))return[_r(n)];{let i=[];return n&&(i=wd(n)),Me(s,(r,o)=>{i=i.concat(o)}),i}})}function ms(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(CI())(t._repo,t._path):t}function xI(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=gr(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function DI(){return TI++}function MI(t,e,n){const s=e._path,i=Os(t,e),r=Pd(t,n),o=t.listenProvider_.startListening(ms(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)C(!$t(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!H(c)&&u&&$t(u))return[_r(u).query];{let f=[];return u&&(f=f.concat(wd(u).map(_=>_.query))),Me(h,(_,S)=>{f=f.concat(S)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(ms(u),Os(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Pa(n)}node(){return this.node_}}class Ra{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=he(this.path_,e);return new Ra(this.syncTree_,n)}node(){return Ta(this.syncTree_,this.path_)}}const LI=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Oc=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return UI(t[".sv"],e,n);if(typeof t[".sv"]=="object")return FI(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},UI=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},FI=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&C(!1,"Unexpected increment value: "+s);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},BI=function(t,e,n,s){return Aa(e,new Ra(n,t),s)},Rd=function(t,e,n){return Aa(t,new Pa(e),n)};function Aa(t,e,n){const s=t.getPriority().val(),i=Oc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Oc(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new _e(a,me(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new _e(i))),o.forEachChild(le,(a,l)=>{const c=Aa(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function xa(t,e){let n=e instanceof X?e:new X(e),s=t,i=$(n);for(;i!==null;){const r=Hn(s.node.children,i)||{children:{},childCount:0};s=new Oa(i,s,r),n=ee(n),i=$(n)}return s}function Xn(t){return t.node.value}function Ad(t,e){t.node.value=e,ko(t)}function Od(t){return t.node.childCount>0}function VI(t){return Xn(t)===void 0&&!Od(t)}function mr(t,e){Me(t.node.children,(n,s)=>{e(new Oa(n,t,s))})}function xd(t,e,n,s){n&&!s&&e(t),mr(t,i=>{xd(i,e,!0,s)}),n&&s&&e(t)}function HI(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function zs(t){return new X(t.parent===null?t.name:zs(t.parent)+"/"+t.name)}function ko(t){t.parent!==null&&WI(t.parent,t.name,t)}function WI(t,e,n){const s=VI(n),i=bt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,ko(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ko(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I=/[\[\].#$\/\u0000-\u001F\u007F]/,jI=/[\[\].#$\u0000-\u001F\u007F]/,zr=10*1024*1024,Dd=function(t){return typeof t=="string"&&t.length!==0&&!$I.test(t)},Md=function(t){return typeof t=="string"&&t.length!==0&&!jI.test(t)},qI=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Md(t)},zI=function(t,e,n,s){s&&e===void 0||Da(Xo(t,"value"),e,n)},Da=function(t,e,n){const s=n instanceof X?new c0(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Zt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Zt(s)+" with contents = "+e.toString());if(Rh(e))throw new Error(t+"contains "+e.toString()+" "+Zt(s));if(typeof e=="string"&&e.length>zr/3&&ar(e)>zr)throw new Error(t+"contains a string greater than "+zr+" utf8 bytes "+Zt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Me(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Dd(o)))throw new Error(t+" contains an invalid key ("+o+") "+Zt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);u0(s,o),Da(t,a,s),h0(s)}),i&&r)throw new Error(t+' contains ".value" child '+Zt(s)+" in addition to actual children.")}},Ld=function(t,e,n,s){if(!(s&&n===void 0)&&!Md(n))throw new Error(Xo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},GI=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ld(t,e,n,s)},KI=function(t,e){if($(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},YI=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Dd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!qI(n))throw new Error(Xo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ud(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!ed(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function at(t,e,n){Ud(t,n),QI(t,s=>Ge(s,e)||Ge(e,s))}function QI(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(XI(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function XI(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();cn&&we("event: "+n.toString()),Qn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI="repo_interrupt",eC=25;class tC{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new JI,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ui(),this.transactionQueueTree_=new Oa,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function nC(t,e,n){if(t.stats_=fa(t.repoInfo_),t.forceRestClient_||DE())t.server_=new Li(t.repoInfo_,(s,i,r,o)=>{xc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Dc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ue(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new gt(t.repoInfo_,e,(s,i,r,o)=>{xc(t,s,i,r,o)},s=>{Dc(t,s)},s=>{iC(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=BE(t.repoInfo_,()=>new U0(t.stats_,t.server_)),t.infoData_=new O0,t.infoSyncTree_=new Ac({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=js(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),La(t,"connected",!1),t.serverSyncTree_=new Ac({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);at(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function sC(t){const n=t.infoData_.getNode(new X(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ma(t){return LI({timestamp:sC(t)})}function xc(t,e,n,s,i){t.dataUpdateCount++;const r=new X(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Ti(n,c=>me(c));o=PI(t.serverSyncTree_,r,l,i)}else{const l=me(n);o=Sd(t.serverSyncTree_,r,l,i)}else if(s){const l=Ti(n,c=>me(c));o=SI(t.serverSyncTree_,r,l)}else{const l=me(n);o=js(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=vr(t,r)),at(t.eventQueue_,a,o)}function Dc(t,e){La(t,"connected",e),e===!1&&aC(t)}function iC(t,e){Me(e,(n,s)=>{La(t,n,s)})}function La(t,e,n){const s=new X("/.info/"+e),i=me(n);t.infoData_.updateSnapshot(s,i);const r=js(t.infoSyncTree_,s,i);at(t.eventQueue_,s,r)}function Fd(t){return t.nextWriteId_++}function rC(t,e,n){const s=AI(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=me(i).withIndex(e._queryParams.getIndex());RI(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=js(t.serverSyncTree_,e._path,r);else{const a=Os(t.serverSyncTree_,e);o=Sd(t.serverSyncTree_,e._path,r,a)}return at(t.eventQueue_,e._path,o),Td(t.serverSyncTree_,e,n,null,!0),r},i=>(yr(t,"get for query "+ue(e)+" failed: "+i),Promise.reject(new Error(i))))}function oC(t,e,n,s,i){yr(t,"set",{path:e.toString(),value:n,priority:s});const r=Ma(t),o=me(n,s),a=Ta(t.serverSyncTree_,e),l=Rd(o,a,r),c=Fd(t),u=Cd(t.serverSyncTree_,e,l,c,!0);Ud(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const S=f==="ok";S||xe("set at "+e+" failed: "+f);const R=on(t.serverSyncTree_,c,!S);at(t.eventQueue_,e,R),cC(t,i,f,_)});const h=$d(t,e);vr(t,h),at(t.eventQueue_,h,[])}function aC(t){yr(t,"onDisconnectEvents");const e=Ma(t),n=Ui();Eo(t.onDisconnect_,G(),(i,r)=>{const o=BI(i,r,t.serverSyncTree_,e);ld(n,i,o)});let s=[];Eo(n,G(),(i,r)=>{s=s.concat(js(t.serverSyncTree_,i,r));const o=$d(t,i);vr(t,o)}),t.onDisconnect_=Ui(),at(t.eventQueue_,G(),s)}function lC(t){t.persistentConnection_&&t.persistentConnection_.interrupt(ZI)}function yr(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),we(n,...e)}function cC(t,e,n,s){e&&Qn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Bd(t,e,n){return Ta(t.serverSyncTree_,e,n)||D.EMPTY_NODE}function Ua(t,e=t.transactionQueueTree_){if(e||br(t,e),Xn(e)){const n=Hd(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&uC(t,zs(e),n)}else Od(e)&&mr(e,n=>{Ua(t,n)})}function uC(t,e,n){const s=n.map(c=>c.currentWriteId),i=Bd(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];C(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Pe(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{yr(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(on(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();br(t,xa(t.transactionQueueTree_,e)),Ua(t,t.transactionQueueTree_),at(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Qn(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{xe("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}vr(t,e)}},o)}function vr(t,e){const n=Vd(t,e),s=zs(n),i=Hd(t,n);return hC(t,i,s),s}function hC(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Pe(n,l.path);let u=!1,h;if(C(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(on(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=eC)u=!0,h="maxretry",i=i.concat(on(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Bd(t,l.path,o);l.currentInputSnapshot=f;const _=e[a].update(f.val());if(_!==void 0){Da("transaction failed: Data returned ",_,l.path);let S=me(_);typeof _=="object"&&_!=null&&bt(_,".priority")||(S=S.updatePriority(f.getPriority()));const B=l.currentWriteId,K=Ma(t),fe=Rd(S,f,K);l.currentOutputSnapshotRaw=S,l.currentOutputSnapshotResolved=fe,l.currentWriteId=Fd(t),o.splice(o.indexOf(B),1),i=i.concat(Cd(t.serverSyncTree_,l.path,fe,l.currentWriteId,l.applyLocally)),i=i.concat(on(t.serverSyncTree_,B,!0))}else u=!0,h="nodata",i=i.concat(on(t.serverSyncTree_,l.currentWriteId,!0))}at(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}br(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Qn(s[a]);Ua(t,t.transactionQueueTree_)}function Vd(t,e){let n,s=t.transactionQueueTree_;for(n=$(e);n!==null&&Xn(s)===void 0;)s=xa(s,n),e=ee(e),n=$(e);return s}function Hd(t,e){const n=[];return Wd(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Wd(t,e,n){const s=Xn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);mr(e,i=>{Wd(t,i,n)})}function br(t,e){const n=Xn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Ad(e,n.length>0?n:void 0)}mr(e,s=>{br(t,s)})}function $d(t,e){const n=zs(Vd(t,e)),s=xa(t.transactionQueueTree_,e);return HI(s,i=>{Gr(t,i)}),Gr(t,s),xd(s,i=>{Gr(t,i)}),n}function Gr(t,e){const n=Xn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(on(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Ad(e,void 0):n.length=r+1,at(t.eventQueue_,zs(e),i);for(let o=0;o<s.length;o++)Qn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dC(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function fC(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):xe(`Invalid query segment '${n}' in query '${t}'`)}return e}const Mc=function(t,e){const n=pC(t),s=n.namespace;n.domain==="firebase.com"&&yt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&yt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||TE();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Wh(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new X(n.pathString)}},pC=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=dC(t.substring(u,h)));const f=fC(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const S=e.indexOf(".");s=e.substring(0,S).toLowerCase(),n=e.substring(S+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ue(this.snapshot.exportVal())}}class gC{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return H(this._path)?null:Qh(this._path)}get ref(){return new wt(this._repo,this._path)}get _queryIdentifier(){const e=bc(this._queryParams),n=ha(e);return n==="{}"?"default":n}get _queryObject(){return bc(this._queryParams)}isEqual(e){if(e=Fe(e),!(e instanceof Fa))return!1;const n=this._repo===e._repo,s=ed(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+l0(this._path)}}class wt extends Fa{constructor(e,n){super(e,n,new ya,!1)}get parent(){const e=Zh(this._path);return e===null?null:new wt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class xs{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new X(e),s=qi(this.ref,e);return new xs(this._node.getChild(n),s,le)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new xs(i,qi(this.ref,s),le)))}hasChild(e){const n=new X(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function jd(t,e){return t=Fe(t),t._checkNotDeleted("ref"),e!==void 0?qi(t._root,e):t._root}function qi(t,e){return t=Fe(t),$(t._path)===null?GI("child","path",e,!1):Ld("child","path",e,!1),new wt(t._repo,he(t._path,e))}function yC(t,e){t=Fe(t),KI("set",t._path),zI("set",e,t._path,!1);const n=new or;return oC(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function vC(t){t=Fe(t);const e=new mC(()=>{}),n=new Ba(e);return rC(t._repo,t,n).then(s=>new xs(s,new wt(t._repo,t._path),t._queryParams.getIndex()))}class Ba{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new _C("value",this,new xs(e.snapshotNode,new wt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new gC(this,e,n):null}matches(e){return e instanceof Ba?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}yI(wt);II(wt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC="FIREBASE_DATABASE_EMULATOR_HOST",No={};let wC=!1;function EC(t,e,n,s){t.repoInfo_=new Wh(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function IC(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||yt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),we("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Mc(r,i),a=o.repoInfo,l,c;typeof process<"u"&&nc&&(c=nc[bC]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Mc(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Fn(Fn.OWNER):new LE(t.name,t.options,e);YI("Invalid Firebase Database URL",o),H(o.path)||yt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=TC(a,t,u,new ME(t.name,n));return new SC(h,t)}function CC(t,e){const n=No[e];(!n||n[t.key]!==t)&&yt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),lC(t),delete n[t.key]}function TC(t,e,n,s){let i=No[e.name];i||(i={},No[e.name]=i);let r=i[t.toURLString()];return r&&yt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new tC(t,wC,n,s),i[t.toURLString()]=r,r}class SC{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(nC(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new wt(this._repo,G())),this._rootInternal}_delete(){return this._rootInternal!==null&&(CC(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&yt("Cannot call "+e+" on a deleted database.")}}function kC(t=qu(),e){const n=ta(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Vy("database");s&&NC(n,...s)}return n}function NC(t,e,n,s={}){t=Fe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&yt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&yt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Fn(Fn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Hy(s.mockUserToken,t.app.options.projectId);r=new Fn(o)}EC(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PC(t){bE(Kn),Wn(new dn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return IC(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Ut(sc,ic,t),Ut(sc,ic,"esm2017")}gt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};gt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};PC();var RC="firebase",AC="10.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ut(RC,AC,"app");const OC={apiKey:"AIzaSyCQ_dTBygFaT1UIVEzt1NjC1bbB7UkoJ70",authDomain:"notes-app-313.firebaseapp.com",databaseURL:"https://notes-app-313-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"notes-app-313",storageBucket:"notes-app-313.appspot.com",messagingSenderId:"582621094801",appId:"1:582621094801:web:94fc5a40b12aac1e217030"},xC=ju(OC),Lc=yE(xC),qd=kC(),DC=jd(qd),MC={name:"LoginPage",emits:["user-info"],data:function(){return{email:"",password:"",signupEmail:"",signupPassword:"",loginEmail:"",loginPassword:"",userId:"",signUpPage:!1,showPass:!1}},methods:{togglePage:function(){this.signUpPage=!this.signUpPage,this.signupEmail="",this.signupPassword="",this.loginEmail="",this.loginPassword="",this.showPass=!1},toggleLoginPassVisibility:function(){const t=this.$refs.loginPass;this.showPass?t.type="password":t.type="text",this.showPass=!this.showPass},toggleSignupPassVisibility:function(){const t=this.$refs.signupPass;this.showPass?t.type="password":t.type="text",this.showPass=!this.showPass},registerNewUser:function(t){t.preventDefault(),sw(Lc,this.signupEmail,this.signupPassword).then(e=>{yC(jd(qd,"UsersAuthList/"+e.user.uid),{Email:this.signupEmail}).then(()=>{this.email=this.signupEmail,this.password=this.signupPassword,this.togglePage(),this.loginEmail=this.email,this.loginPassword=this.password})}).catch(e=>{alert(e.code),alert(e.message)})},loginOldUser:function(t){t.preventDefault(),iw(Lc,this.loginEmail,this.loginPassword).then(e=>{vC(qi(DC,"UsersAuthList/"+e.user.uid)).then(n=>{n.exists()&&(console.log(n.val()),this.$emit("user-info",e.user.uid,n.val().Email,n.val().Notes))})}).catch(e=>{alert(e.code),alert(e.message)})}}},LC=m("section",{class:"overlay"},null,-1),UC={class:"wrapper"},FC={key:0,class:"signup-page"},BC=m("h1",{class:"signup-title"},"Sign up",-1),VC={class:"input-box pass-box"},HC=m("p",{class:"login-text"},"Already have an account?",-1),WC={key:1,class:"login-page"},$C=m("h1",{class:"login-title"},"Login",-1),jC={class:"input-box pass-box"},qC=m("p",null,"New user?",-1);function zC(t,e,n,s,i,r){return w(),E("span",null,[LC,m("section",UC,[t.signUpPage?(w(),E("form",FC,[BC,qe(m("input",{class:"input-box signup-email-input",type:"email",placeholder:"Email",required:"","onUpdate:modelValue":e[0]||(e[0]=o=>t.signupEmail=o)},null,512),[[sn,t.signupEmail]]),m("span",VC,[qe(m("input",{class:"signup-password",type:"password",placeholder:"Password",minlength:"6",required:"",ref:"signupPass","onUpdate:modelValue":e[1]||(e[1]=o=>t.signupPassword=o)},null,512),[[sn,t.signupPassword]]),t.showPass?A("",!0):(w(),E("span",{key:0,class:"material-symbols-outlined",onClick:e[2]||(e[2]=(...o)=>r.toggleSignupPassVisibility&&r.toggleSignupPassVisibility(...o))}," visibility_off ")),t.showPass?(w(),E("span",{key:1,class:"material-symbols-outlined",onClick:e[3]||(e[3]=(...o)=>r.toggleSignupPassVisibility&&r.toggleSignupPassVisibility(...o))}," visibility ")):A("",!0)]),m("button",{class:"signup-btn",type:"submit",onClick:e[4]||(e[4]=(...o)=>r.registerNewUser&&r.registerNewUser(...o))},"Sign up"),m("button",{class:"login-nav-btn",type:"button",onClick:e[5]||(e[5]=(...o)=>r.togglePage&&r.togglePage(...o))},"Login"),HC])):A("",!0),t.signUpPage?A("",!0):(w(),E("form",WC,[$C,qe(m("input",{class:"input-box login-email-input",type:"email",placeholder:"Email",required:"","onUpdate:modelValue":e[6]||(e[6]=o=>t.loginEmail=o)},null,512),[[sn,t.loginEmail]]),m("span",jC,[qe(m("input",{class:"login-password",type:"password",placeholder:"Password",minlength:"6",required:"",ref:"loginPass","onUpdate:modelValue":e[7]||(e[7]=o=>t.loginPassword=o)},null,512),[[sn,t.loginPassword]]),t.showPass?A("",!0):(w(),E("span",{key:0,class:"material-symbols-outlined",onClick:e[8]||(e[8]=(...o)=>r.toggleLoginPassVisibility&&r.toggleLoginPassVisibility(...o))}," visibility_off ")),t.showPass?(w(),E("span",{key:1,class:"material-symbols-outlined",onClick:e[9]||(e[9]=(...o)=>r.toggleLoginPassVisibility&&r.toggleLoginPassVisibility(...o))}," visibility ")):A("",!0)]),m("button",{class:"login-btn",type:"submit",onClick:e[10]||(e[10]=(...o)=>r.loginOldUser&&r.loginOldUser(...o))},"Login"),m("button",{class:"signup-nav-btn",type:"button",onClick:e[11]||(e[11]=(...o)=>r.togglePage&&r.togglePage(...o))},"Sign up"),qC]))])])}const GC=be(MC,[["render",zC]]),KC={name:"AppMain",components:{"hint-text":Sg,"note-editor":wy,pin:Ko,"pin-notes":Ay,"login-page":GC},props:{panel:{type:String,required:!0},isDark:{type:Boolean,required:!0}},emits:["bin-length"],data:function(){return{editorIsOpen:!1,id:"",pin:!1,title:"",content:"",theme:"ultramarine-blue",liked:!1,archived:!1,trashed:!1,taskStatus:!1,taskData:"",taskId:"",tasksList:[],images:[],storedNotes:[],alphabets:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"],randomAlphabet:"",randomAlphabet2:"",min:"",sec:"",emptyTrashConfirmPanel:!1,loginPage:!0,userId:""}},methods:{getUserInfo:function(t,e,n){this.loginPage=!1,console.log("user email : "+e),this.userId=t,n?Object.values(n).forEach(i=>{this.storedNotes.push(i)}):console.log("Database Is Empty!")},generateNoteId:function(){let t=Math.floor(Math.random()*26);this.randomAlphabet=this.alphabets[t],t=Math.floor(Math.random()*26),this.randomAlphabet2=this.alphabets[t];let e=new Date;e.getMinutes()<10?this.min="0"+e.getMinutes().toString():this.min=e.getMinutes().toString(),e.getSeconds()<10?this.sec="0"+e.getSeconds().toString():this.sec=e.getSeconds().toString(),this.id=this.randomAlphabet+this.randomAlphabet2+this.min+this.sec},postNotesToDB:async function(t){let e,n;this.tasksList.length===0?e=[{id:"",completed:!1,data:""}]:e=[...this.tasksList],this.images.length===0?n=[""]:n=[...this.images];const s={method:"PUT",header:{"Content-Type":"application/json"},body:JSON.stringify({id:this.id,pin:this.pin,title:this.title,content:this.content,tasks:[...e],theme:this.theme,liked:this.liked,archived:this.archived,trashed:this.trashed,images:[...n]})},i="https://notes-app-313-default-rtdb.asia-southeast1.firebasedatabase.app/UsersAuthList/"+this.userId+"/Notes/"+t.id+".json",r=await fetch(i,s);console.log(r||"Error Occured")},deleteNoteFromDB:async function(t){const e={method:"DELETE",header:{"Content-Type":"application/json"}},n="https://notes-app-313-default-rtdb.asia-southeast1.firebasedatabase.app/UsersAuthList/"+this.userId+"/Notes/"+t+".json",s=await fetch(n,e);console.log(s||"Error Occured")},openEditor:function(){this.editorIsOpen=!0},saveTheNote:function(t){if(this.id===""){this.generateNoteId();const e={id:this.id,pin:this.pin,title:this.title,content:this.content,tasks:this.tasksList,theme:this.theme,liked:this.liked,archived:this.archived,trashed:this.trashed,images:this.images};this.storedNotes.unshift(e),this.postNotesToDB(e)}else{const e=this.storedNotes.find(n=>n.id===this.id);if(e){this.storedNotes=this.storedNotes.filter(s=>s!==e);const n={id:this.id,pin:this.pin,title:this.title,content:this.content,tasks:this.tasksList,theme:this.theme,liked:this.liked,archived:this.archived,trashed:this.trashed,images:this.images};n.title.trim()===""&&n.content.trim()===""&&n.images.length===0&&n.tasks.length===0?this.deleteNoteFromDB(n.id):(this.storedNotes.unshift(n),this.postNotesToDB(n))}}if(t){this.generateNoteId();const e={id:this.id,pin:this.pin,title:this.title,content:this.content,tasks:this.tasksList,theme:this.theme,liked:this.liked,archived:this.archived,trashed:this.trashed,images:this.images};this.storedNotes.unshift(e),this.postNotesToDB(e)}this.resetValues(),this.closeEditor()},editNote:function(t){const e=this.storedNotes.filter(i=>i.id===t),n=e[0].tasks.filter(i=>i.data.trim()!==""),s=e[0].images.filter(i=>i!=="");this.id=t,this.pin=e[0].pin,this.title=e[0].title,this.content=e[0].content,this.tasksList=n,this.theme=e[0].theme,this.liked=e[0].liked,this.archived=e[0].archived,this.trashed=e[0].trashed,this.images=s,this.openEditor()},closeEditor:function(){this.editorIsOpen=!1},changePin:function(){this.pin=!this.pin},updateTitle:function(t){this.title=t},updateContent:function(t){this.content=t},updateLike:function(t){this.liked=t},changeTheme:function(t){this.theme=t},updateImages:function(t){this.images=t},deleteImage:function(t){this.images=this.images.filter(e=>e!==t)},addTask:function(){this.taskId=new Date().toISOString(),this.tasksList.unshift({data:this.taskData,completed:this.taskStatus,id:this.taskId}),this.clearTaskData()},clearTaskData:function(){this.taskData="",this.taskStatus=!1,this.taskId=""},deleteTask:function(t){this.tasksList=this.tasksList.filter(e=>e!==t)},changeTaskStatus:function(t){this.tasksList.find(e=>{t===e.id&&(e.completed=!e.completed)})},taskDataUpdate:function(t){this.taskData=t},taskStatusUpdate:function(t){this.taskStatus=t},copyNote:function(){this.saveTheNote(!0)},updateBin:function(t){this.trashed=t,this.saveTheNote(!1),this.checkBinLength()},updateArchive:function(t){this.archived=t,this.saveTheNote(!1)},resetValues:function(){this.id="",this.pin=!1,this.title="",this.content="",this.tasksList=[],this.taskData="",this.taskId="",this.taskStatus=!1,this.theme="ultramarine-blue",this.liked=!1,this.archived=!1,this.trashed=!1,this.images=[]},deleteNote:function(){const t=this.storedNotes.find(e=>e.id===this.id);this.storedNotes=this.storedNotes.filter(e=>e!==t),this.deleteNoteFromDB(this.id),this.resetValues(),this.closeEditor(),this.checkBinLength()},checkBinLength:function(){this.$emit("bin-length",this.recycleBin.length)},currentTheme:function(t){return t==="black"?["note",t,"black-box"]:t==="white"?["note",t,"white-box"]:["note",t]},emptyTrash:function(){this.storedNotes.filter(e=>e.trashed).forEach(e=>{this.deleteNoteFromDB(e.id)}),this.storedNotes=this.storedNotes.filter(e=>!e.trashed),this.checkBinLength(),this.emptyTrashConfirmPanel=!1},openTrashPanel:function(){this.emptyTrashConfirmPanel=!0},closeTrashPanel:function(){this.emptyTrashConfirmPanel=!1}},computed:{noteIsNew:function(){return this.id===""},allNotes:function(){return this.storedNotes.filter(t=>!t.trashed&&!t.archived&&!t.pin)},pinnedNotes:function(){return this.storedNotes.filter(t=>t.pin&&!t.trashed&&!t.archived)},likedNotes:function(){return this.storedNotes.filter(t=>t.liked&&!t.trashed&&!t.archived)},archiveNotes:function(){return this.storedNotes.filter(t=>!t.trashed&&t.archived)},recycleBin:function(){return this.storedNotes.filter(t=>t.trashed)},currentPanelNotes:function(){switch(this.panel){case"Notes":return this.allNotes;case"Favorite":return this.likedNotes;case"Archive":return this.archiveNotes;case"Trash":return this.recycleBin;default:return this.allNotes}},homePanelLength:function(){return this.allNotes.length+this.pinnedNotes.length}}},YC={class:"main"},JC=["onClick"],QC={key:0,class:"pin-btn"},XC={key:1},ZC={key:2},eT={key:0},tT={class:"checkbox"},nT=["onUpdate:modelValue"],sT={key:0,class:"material-symbols-outlined"},iT=["src"],rT={key:4},oT=m("span",{class:"material-symbols-outlined"},"add",-1),aT=[oT],lT=m("span",{class:"material-symbols-outlined"},"delete_forever",-1),cT=[lT],uT=m("h2",null,"Are you sure you want to delete all notes?",-1);function hT(t,e,n,s,i,r){const o=ye("login-page"),a=ye("hint-text"),l=ye("pin-notes"),c=ye("pin"),u=ye("note-editor");return w(),E("span",null,[t.loginPage?(w(),ui(o,{key:0,onUserInfo:r.getUserInfo},null,8,["onUserInfo"])):A("",!0),m("section",YC,[se(a,{currentPanelNotes:r.currentPanelNotes,panel:n.panel,"panel-length":r.homePanelLength,onOpenEditor:r.openEditor},null,8,["currentPanelNotes","panel","panel-length","onOpenEditor"]),n.panel==="Notes"?(w(),ui(l,{key:0,"pin-notes":r.pinnedNotes,onEditNote:r.editNote},null,8,["pin-notes","onEditNote"])):A("",!0),(w(!0),E(ve,null,Dt(r.currentPanelNotes,(h,f)=>(w(),E("div",{key:f,class:ce(r.currentTheme(h.theme)),id:"notes",onClick:_=>r.editNote(h.id)},[h.pin&&n.panel==="Notes"?(w(),E("button",QC,[se(c)])):A("",!0),h.title!==""?(w(),E("h2",XC,At(h.title),1)):A("",!0),h.tasks.length>0?(w(),E("div",ZC,[(w(!0),E(ve,null,Dt(h.tasks,(_,S)=>(w(),E("div",{key:S,class:"tasks-on-note"},[_.data!==""&&_.id!==""?(w(),E("span",eT,[m("button",tT,[qe(m("input",{type:"checkbox",style:{display:"none"},"onUpdate:modelValue":R=>_.completed=R},null,8,nT),[[Ei,_.completed]]),_.completed?(w(),E("span",sT,"done")):A("",!0)]),m("p",{class:ce(_.completed?"task-completed":"")},At(_.data),3)])):A("",!0)]))),128))])):A("",!0),h.images.length>0?(w(!0),E(ve,{key:3},Dt(h.images,(_,S)=>(w(),E("div",{key:S},[_!==""?(w(),E("img",{key:0,src:_,alt:"",class:"img-on-note"},null,8,iT)):A("",!0)]))),128)):A("",!0),h.content!==""?(w(),E("h3",rT,At(h.content),1)):A("",!0)],10,JC))),128)),n.panel==="Notes"?(w(),E("button",{key:1,onClick:e[0]||(e[0]=(...h)=>r.openEditor&&r.openEditor(...h)),class:"add-note-btn"},aT)):A("",!0),n.panel==="Trash"&&r.recycleBin.length>0?(w(),E("button",{key:2,onClick:e[1]||(e[1]=(...h)=>r.openTrashPanel&&r.openTrashPanel(...h)),class:"clear-trash-btn"},cT)):A("",!0),t.emptyTrashConfirmPanel?(w(),E("div",{key:3,class:ce(n.isDark?"clear-trash-panel":"clear-trash-panel-white")},[uT,m("span",null,[m("button",{class:ce(n.isDark?"delete-all-btn":"delete-all-btn-white"),onClick:e[2]||(e[2]=(...h)=>r.closeTrashPanel&&r.closeTrashPanel(...h))},"Cancel",2),m("button",{class:ce(n.isDark?"delete-all-btn":"delete-all-btn-white"),onClick:e[3]||(e[3]=(...h)=>r.emptyTrash&&r.emptyTrash(...h))},"Delete all",2)])],2)):A("",!0),t.emptyTrashConfirmPanel?(w(),E("div",{key:4,class:"overlay",onClick:e[4]||(e[4]=(...h)=>r.closeTrashPanel&&r.closeTrashPanel(...h))})):A("",!0)]),t.editorIsOpen?(w(),ui(u,{key:1,onTitleUpdate:r.updateTitle,onContentUpdate:r.updateContent,onLikeUpdate:r.updateLike,onChangeTheme:r.changeTheme,onImagesUpdate:r.updateImages,onDeleteImage:r.deleteImage,onCopyNote:r.copyNote,onBinUpdate:r.updateBin,onArchiveUpdate:r.updateArchive,onDeleteNote:r.deleteNote,onCancelTheNote:r.deleteNote,onAddTask:r.addTask,onDeleteTask:r.deleteTask,onChangeTaskStatus:r.changeTaskStatus,onTaskDataUpdate:r.taskDataUpdate,onTaskStatusUpdate:r.taskStatusUpdate,onCancelTask:r.clearTaskData,onChangePin:r.changePin,onSaveTheNote:e[5]||(e[5]=h=>r.saveTheNote(!1)),"note-is-new":r.noteIsNew,pin:t.pin,title:t.title,content:t.content,theme:t.theme,liked:t.liked,archived:t.archived,trashed:t.trashed,images:t.images,"task-data":t.taskData,"task-status":t.taskStatus,"tasks-list":t.tasksList},null,8,["onTitleUpdate","onContentUpdate","onLikeUpdate","onChangeTheme","onImagesUpdate","onDeleteImage","onCopyNote","onBinUpdate","onArchiveUpdate","onDeleteNote","onCancelTheNote","onAddTask","onDeleteTask","onChangeTaskStatus","onTaskDataUpdate","onTaskStatusUpdate","onCancelTask","onChangePin","note-is-new","pin","title","content","theme","liked","archived","trashed","images","task-data","task-status","tasks-list"])):A("",!0)])}const dT=be(KC,[["render",hT]]),fT={components:{"header-section":x_,"nav-bar":q_,notes:dT},data:function(){return{panel:"Notes",isDark:!0,emptyBin:!0}},methods:{changeNoteTheme:function(t){this.isDark=t},changePanel:function(t){this.panel=t},checkBinLength:function(t){t===0?this.emptyBin=!0:this.emptyBin=!1}}};function pT(t,e,n,s,i,r){const o=ye("header-section"),a=ye("notes"),l=ye("nav-bar");return w(),E("section",{class:ce(t.isDark?["main-container","black"]:["main-container","light"])},[se(o,{onNoteTheme:r.changeNoteTheme,emptyBin:t.emptyBin,panel:t.panel},null,8,["onNoteTheme","emptyBin","panel"]),se(a,{panel:t.panel,isDark:t.isDark,onBinLength:r.checkBinLength},null,8,["panel","isDark","onBinLength"]),se(l,{onChangePanel:r.changePanel,panel:t.panel},null,8,["onChangePanel","panel"])],2)}const _T=be(fT,[["render",pT]]);b_(_T).mount("#app");
