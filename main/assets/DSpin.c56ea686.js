import{_ as B}from"./_plugin-vue_export-helper.cdc0426e.js";import{d as E,B as k,aS as T,n as A,aT as V,a2 as b,Y as P,a as r,_ as o,Q as $,aU as Q,P as N,o as R,a5 as Y,au as x,a3 as q,aR as U,at as F}from"./index.611b52b0.js";import{d as G}from"./debounce.4e8b63b0.js";import{j as H}from"./lib.75e6cd80.js";var J=globalThis&&globalThis.__rest||function(t,n){var e={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&n.indexOf(i)<0&&(e[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,i=Object.getOwnPropertySymbols(t);a<i.length;a++)n.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(t,i[a])&&(e[i[a]]=t[i[a]]);return e},K=function(){return{prefixCls:String,spinning:{type:Boolean,default:void 0},size:String,wrapperClassName:String,tip:N.any,delay:Number,indicator:N.any}},l=null;function L(t,n){return!!t&&!!n&&!isNaN(Number(n))}function M(t){var n=t.indicator;l=typeof n=="function"?n:function(){return r(n,null,null)}}const c=E({name:"ASpin",inheritAttrs:!1,props:H(K(),{size:"default",spinning:!0,wrapperClassName:""}),setup:function(){return{originalUpdateSpinning:null,configProvider:k("configProvider",T)}},data:function(){var n=this.spinning,e=this.delay,i=L(n,e);return{sSpinning:n&&!i}},created:function(){this.originalUpdateSpinning=this.updateSpinning,this.debouncifyUpdateSpinning(this.$props)},mounted:function(){this.updateSpinning()},updated:function(){var n=this;A(function(){n.debouncifyUpdateSpinning(),n.updateSpinning()})},beforeUnmount:function(){this.cancelExistingSpin()},methods:{debouncifyUpdateSpinning:function(n){var e=n||this.$props,i=e.delay;i&&(this.cancelExistingSpin(),this.updateSpinning=G(this.originalUpdateSpinning,i))},updateSpinning:function(){var n=this.spinning,e=this.sSpinning;e!==n&&(this.sSpinning=n)},cancelExistingSpin:function(){var n=this.updateSpinning;n&&n.cancel&&n.cancel()},renderIndicator:function(n){var e="".concat(n,"-dot"),i=V(this,"indicator");return i===null?null:(Array.isArray(i)&&(i=i.length===1?i[0]:i),b(i)?P(i,{class:e}):l&&b(l())?P(l(),{class:e}):r("span",{class:"".concat(e," ").concat(n,"-dot-spin")},[r("i",{class:"".concat(n,"-dot-item")},null),r("i",{class:"".concat(n,"-dot-item")},null),r("i",{class:"".concat(n,"-dot-item")},null),r("i",{class:"".concat(n,"-dot-item")},null)]))}},render:function(){var n,e,i,a=this.$props,d=a.size,u=a.prefixCls,m=a.tip,f=m===void 0?(i=(e=this.$slots).tip)===null||i===void 0?void 0:i.call(e):m,w=a.wrapperClassName,g=this.$attrs,S=g.class,C=g.style,O=J(g,["class","style"]),y=this.configProvider,D=y.getPrefixCls,I=y.direction,s=D("spin",u),h=this.sSpinning,j=(n={},o(n,s,!0),o(n,"".concat(s,"-sm"),d==="small"),o(n,"".concat(s,"-lg"),d==="large"),o(n,"".concat(s,"-spinning"),h),o(n,"".concat(s,"-show-text"),!!f),o(n,"".concat(s,"-rtl"),I==="rtl"),o(n,S,!!S),n),_=r("div",$($({},O),{},{style:C,class:j}),[this.renderIndicator(s),f?r("div",{class:"".concat(s,"-text")},[f]):null]),v=Q(this);if(v&&v.length){var p,z=(p={},o(p,"".concat(s,"-container"),!0),o(p,"".concat(s,"-blur"),h),p);return r("div",{class:["".concat(s,"-nested-loading"),w]},[h&&r("div",{key:"loading"},[_]),r("div",{class:z,key:"container"},[v])])}return _}});c.setDefaultIndicator=M;c.install=function(t){return t.component(c.name,c),t};const W={name:"DSpin"},X={class:"spin-content"};function Z(t,n,e,i,a,d){const u=c;return R(),Y(u,q(t.$attrs,{size:"small"}),{tip:x(()=>[U(t.$slots,"tip")]),default:x(()=>[F("div",X,[U(t.$slots,"default")])]),_:3},16)}const sn=B(W,[["render",Z]]);export{sn as D};
