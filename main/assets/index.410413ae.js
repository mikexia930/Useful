import{d as Q,P as F,i as x,F as q,b as r,a as f,Q as V,e as Ke,_ as O,Z as we,A as In,b3 as qe,S as pe,D as _e,B as me,k as N,$ as Fe,an as re,U as Oe,H as Ee,O as tn,aQ as Re,K as an,b2 as ln,ap as Pn,M as _n,aq as xn,ar as Sn,cT as He,n as wn,u as un,I as On,N as Ne,a4 as xe,T as En}from"./index.611b52b0.js";import{T as rn,c as Ie,O as Me}from"./Interface.48732bbd.js";import{d as Rn}from"./hasIn.84fb846a.js";import{_ as An}from"./index.fcfefed5.js";import{K as kn,w as Te}from"./lib.75e6cd80.js";var fe={adjustX:1,adjustY:1},de=[0,0],Ln={topLeft:{points:["bl","tl"],overflow:fe,offset:[0,-4],targetOffset:de},topCenter:{points:["bc","tc"],overflow:fe,offset:[0,-4],targetOffset:de},topRight:{points:["br","tr"],overflow:fe,offset:[0,-4],targetOffset:de},bottomLeft:{points:["tl","bl"],overflow:fe,offset:[0,4],targetOffset:de},bottomCenter:{points:["tc","bc"],overflow:fe,offset:[0,4],targetOffset:de},bottomRight:{points:["tr","br"],overflow:fe,offset:[0,4],targetOffset:de}};const Fn=Ln;var Nn=globalThis&&globalThis.__rest||function(t,e){var i={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(i[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(t);n<a.length;n++)e.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(t,a[n])&&(i[a[n]]=t[a[n]]);return i};const ft=Q({props:{minOverlayWidthMatchTrigger:{type:Boolean,default:void 0},arrow:{type:Boolean,default:!1},prefixCls:F.string.def("rc-dropdown"),transitionName:String,overlayClassName:F.string.def(""),openClassName:String,animation:F.any,align:F.object,overlayStyle:{type:Object,default:void 0},placement:F.string.def("bottomLeft"),overlay:F.any,trigger:F.oneOfType([F.string,F.arrayOf(F.string)]).def("hover"),alignPoint:{type:Boolean,default:void 0},showAction:F.array,hideAction:F.array,getPopupContainer:Function,visible:{type:Boolean,default:void 0},defaultVisible:{type:Boolean,default:!1},mouseEnterDelay:F.number.def(.15),mouseLeaveDelay:F.number.def(.1)},emits:["visibleChange","overlayClick"],slots:["overlay"],setup:function(e,i){var a=i.slots,n=i.emit,c=i.expose,o=x(!!e.visible);q(function(){return e.visible},function(y){y!==void 0&&(o.value=y)});var d=x();c({triggerRef:d});var p=function(v){e.visible===void 0&&(o.value=!1),n("overlayClick",v)},h=function(v){e.visible===void 0&&(o.value=v),n("visibleChange",v)},m=function(){var v,K=(v=a.overlay)===null||v===void 0?void 0:v.call(a),A={prefixCls:"".concat(e.prefixCls,"-menu"),onClick:p,getPopupContainer:function(){return d.value.getPopupDomNode()}};return f(we,null,[e.arrow&&f("div",{class:"".concat(e.prefixCls,"-arrow")},null),Ie(K,A,!1)])},g=r(function(){var y=e.minOverlayWidthMatchTrigger,v=y===void 0?!e.alignPoint:y;return v}),S=function(){var v,K=(v=a.default)===null||v===void 0?void 0:v.call(a);return o.value&&K?Ie(K[0],{class:e.openClassName||"".concat(e.prefixCls,"-open")},!1):K},b=r(function(){return!e.hideAction&&e.trigger.indexOf("contextmenu")!==-1?["click"]:e.hideAction});return function(){var y=e.prefixCls,v=e.arrow,K=e.showAction,A=e.overlayStyle,H=e.trigger,w=e.placement,I=e.align,T=e.getPopupContainer,Y=e.transitionName,k=e.animation,M=e.overlayClassName,P=Nn(e,["prefixCls","arrow","showAction","overlayStyle","trigger","placement","align","getPopupContainer","transitionName","animation","overlayClassName"]);return f(rn,V(V({},P),{},{prefixCls:y,ref:d,popupClassName:Ke(M,O({},"".concat(y,"-show-arrow"),v)),popupStyle:A,builtinPlacements:Fn,action:H,showAction:K,hideAction:b.value||[],popupPlacement:w,popupAlign:I,popupTransitionName:Y,popupAnimation:k,popupVisible:o.value,stretch:g.value?"minWidth":"",onPopupVisibleChange:h,getPopupContainer:T}),{popup:m,default:S})}}});var Tn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"};const Dn=Tn;function Ye(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?Object(arguments[e]):{},a=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(n){return Object.getOwnPropertyDescriptor(i,n).enumerable}))),a.forEach(function(n){jn(t,n,i[n])})}return t}function jn(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var Be=function(e,i){var a=Ye({},e,i.attrs);return f(In,Ye({},a,{icon:Dn}),null)};Be.displayName="EllipsisOutlined";Be.inheritAttrs=!1;const Vn=Be;function Bn(t,e,i,a){var n=i?i.call(a,t,e):void 0;if(n!==void 0)return!!n;if(t===e)return!0;if(pe(t)!=="object"||!t||pe(e)!=="object"||!e)return!1;var c=Object.keys(t),o=Object.keys(e);if(c.length!==o.length)return!1;for(var d=Object.prototype.hasOwnProperty.bind(e),p=0;p<c.length;p++){var h=c[p];if(!d(h))return!1;var m=t[h],g=e[h];if(n=i?i.call(a,m,g,h):void 0,n===!1||n===void 0&&m!==g)return!1}return!0}function Ce(t,e,i,a){return Bn(qe(t),qe(e),i,a)}var on=Symbol("menuContextKey"),sn=function(e){_e(on,e)},ne=function(){return me(on)},cn=Symbol("ForceRenderKey"),$n=function(e){_e(cn,e)},vn=function(){return me(cn,!1)},fn=Symbol("menuFirstLevelContextKey"),dn=function(e){_e(fn,e)},zn=function(){return me(fn,!0)},Ae=Q({name:"MenuContextProvider",inheritAttrs:!1,props:{mode:{type:String,default:void 0},overflowDisabled:{type:Boolean,default:void 0},isRootMenu:{type:Boolean,default:void 0}},setup:function(e,i){var a=i.slots,n=ne(),c=N({},n);return e.mode!==void 0&&(c.mode=Fe(e,"mode")),e.isRootMenu!==void 0&&(c.isRootMenu=Fe(e,"isRootMenu")),e.overflowDisabled!==void 0&&(c.overflowDisabled=Fe(e,"overflowDisabled")),sn(c),function(){var o;return(o=a.default)===null||o===void 0?void 0:o.call(a)}}});const Wn=sn;function De(t){return t&&t.length?Rn(t):[]}var Gn=Symbol("siderCollapsed"),Se="$$__vc-menu-more__key",pn=Symbol("KeyPathContext"),$e=function(){return me(pn,{parentEventKeys:r(function(){return[]}),parentKeys:r(function(){return[]}),parentInfo:{}})},Un=function(e,i,a){var n=$e(),c=n.parentEventKeys,o=n.parentKeys,d=r(function(){return[].concat(re(c.value),[e])}),p=r(function(){return[].concat(re(o.value),[i])});return _e(pn,{parentEventKeys:d,parentKeys:p,parentInfo:a}),p},mn=Symbol("measure"),Qe=Q({setup:function(e,i){var a=i.slots;return _e(mn,!0),function(){var n;return(n=a.default)===null||n===void 0?void 0:n.call(a)}}}),ze=function(){return me(mn,!1)};const qn=Un;function yn(t){var e=ne(),i=e.mode,a=e.rtl,n=e.inlineIndent;return r(function(){return i.value!=="inline"?null:a.value?{paddingRight:"".concat(t.value*n.value,"px")}:{paddingLeft:"".concat(t.value*n.value,"px")}})}var Hn=0,Yn=function(){return{id:String,role:String,disabled:Boolean,danger:Boolean,title:{type:[String,Boolean],default:void 0},icon:F.any,onMouseenter:Function,onMouseleave:Function,onClick:Function,onKeydown:Function,onFocus:Function}};const ke=Q({name:"AMenuItem",inheritAttrs:!1,props:Yn(),slots:["icon","title"],setup:function(e,i){var a=i.slots,n=i.emit,c=i.attrs,o=an(),d=ze(),p=pe(o.vnode.key)==="symbol"?String(o.vnode.key):o.vnode.key;Oe(pe(o.vnode.key)!=="symbol","MenuItem",'MenuItem `:key="'.concat(String(p),'"` not support Symbol type'));var h="menu_item_".concat(++Hn,"_$$_").concat(p),m=$e(),g=m.parentEventKeys,S=m.parentKeys,b=ne(),y=b.prefixCls,v=b.activeKeys,K=b.disabled,A=b.changeActiveKeys,H=b.rtl,w=b.inlineCollapsed,I=b.siderCollapsed,T=b.onItemClick,Y=b.selectedKeys,k=b.registerMenuInfo,M=b.unRegisterMenuInfo,P=zn(),B=x(!1),z=r(function(){return[].concat(re(S.value),[p])}),X={eventKey:h,key:p,parentEventKeys:g,parentKeys:S,isLeaf:!0};k(h,X),Ee(function(){M(h)}),q(v,function(){B.value=!!v.value.find(function(u){return u===p})},{immediate:!0});var U=r(function(){return K.value||e.disabled}),te=r(function(){return Y.value.includes(p)}),oe=r(function(){var u,l="".concat(y.value,"-item");return u={},O(u,"".concat(l),!0),O(u,"".concat(l,"-danger"),e.danger),O(u,"".concat(l,"-active"),B.value),O(u,"".concat(l,"-selected"),te.value),O(u,"".concat(l,"-disabled"),U.value),u}),se=function(l){return{key:p,eventKey:h,keyPath:z.value,eventKeyPath:[].concat(re(g.value),[h]),domEvent:l,item:N(N({},e),c)}},ye=function(l){if(!U.value){var s=se(l);n("click",l),T(s)}},ge=function(l){U.value||(A(z.value),n("mouseenter",l))},Z=function(l){U.value||(A([]),n("mouseleave",l))},ce=function(l){if(n("keydown",l),l.which===kn.ENTER){var s=se(l);n("click",l),T(s)}},ve=function(l){A(z.value),n("focus",l)},$=function(l,s){var E=f("span",{class:"".concat(y.value,"-title-content")},[s]);return(!l||ln(s)&&s.type==="span")&&s&&w.value&&P&&typeof s=="string"?f("div",{class:"".concat(y.value,"-inline-collapsed-noicon")},[s.charAt(0)]):E},be=yn(r(function(){return z.value.length}));return function(){var u,l,s,E;if(d)return null;var C=(l=e.title)!==null&&l!==void 0?l:(s=a.title)===null||s===void 0?void 0:s.call(a),D=tn((E=a.default)===null||E===void 0?void 0:E.call(a)),R=D.length,j=C;typeof C>"u"?j=P&&R?D:"":C===!1&&(j="");var W={title:j};!I.value&&!w.value&&(W.title=null,W.visible=!1);var ae={};e.role==="option"&&(ae["aria-selected"]=te.value);var le=Re(a,e,"icon");return f(An,V(V({},W),{},{placement:H.value?"left":"right",overlayClassName:"".concat(y.value,"-inline-collapsed-tooltip")}),{default:function(){return[f(Me.Item,V(V(V({component:"li"},c),{},{id:e.id,style:N(N({},c.style||{}),be.value),class:[oe.value,(u={},O(u,"".concat(c.class),!!c.class),O(u,"".concat(y.value,"-item-only-child"),(le?R+1:R)===1),u)],role:e.role||"menuitem",tabindex:e.disabled?null:-1,"data-menu-id":p,"aria-disabled":e.disabled},ae),{},{onMouseenter:ge,onMouseleave:Z,onClick:ye,onKeydown:ce,onFocus:ve,title:typeof C=="string"?C:void 0}),{default:function(){return[Ie(le,{class:"".concat(y.value,"-item-icon")},!1),$(le,D)]}})]}})}}});var ee={adjustX:1,adjustY:1},Qn={topLeft:{points:["bl","tl"],overflow:ee,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:ee,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:ee,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:ee,offset:[4,0]}},Xn={topLeft:{points:["bl","tl"],overflow:ee,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:ee,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:ee,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:ee,offset:[4,0]}},Zn={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};const Xe=Q({name:"PopupTrigger",inheritAttrs:!1,props:{prefixCls:String,mode:String,visible:Boolean,popupClassName:String,popupOffset:Array,disabled:Boolean,onVisibleChange:Function},slots:["popup"],emits:["visibleChange"],setup:function(e,i){var a=i.slots,n=i.emit,c=x(!1),o=ne(),d=o.getPopupContainer,p=o.rtl,h=o.subMenuOpenDelay,m=o.subMenuCloseDelay,g=o.builtinPlacements,S=o.triggerSubMenuAction,b=o.isRootMenu,y=o.forceSubMenuRender,v=o.motion,K=o.defaultMotions,A=vn(),H=r(function(){return p.value?N(N({},Xn),g.value):N(N({},Qn),g.value)}),w=r(function(){return Zn[e.mode]}),I=x();q(function(){return e.visible},function(k){Te.cancel(I.value),I.value=Te(function(){c.value=k})},{immediate:!0}),Ee(function(){Te.cancel(I.value)});var T=function(M){n("visibleChange",M)},Y=r(function(){var k,M,P=v.value||((k=K.value)===null||k===void 0?void 0:k[e.mode])||((M=K.value)===null||M===void 0?void 0:M.other),B=typeof P=="function"?P():P;return B?Pn(B.name,{css:!0}):void 0});return function(){var k=e.prefixCls,M=e.popupClassName,P=e.mode,B=e.popupOffset,z=e.disabled;return f(rn,{prefixCls:k,popupClassName:Ke("".concat(k,"-popup"),O({},"".concat(k,"-rtl"),p.value),M),stretch:P==="horizontal"?"minWidth":null,getPopupContainer:b.value?d.value:function(X){return X.parentNode},builtinPlacements:H.value,popupPlacement:w.value,popupVisible:c.value,popupAlign:B&&{offset:B},action:z?[]:[S.value],mouseEnterDelay:h.value,mouseLeaveDelay:m.value,onPopupVisibleChange:T,forceRender:A||y.value,popupAnimation:Y.value},{popup:a.popup,default:a.default})}}});var gn=function(e,i){var a=i.slots,n=i.attrs,c,o=ne(),d=o.prefixCls,p=o.mode;return f("ul",V(V({},n),{},{class:Ke(d.value,"".concat(d.value,"-sub"),"".concat(d.value,"-").concat(p.value==="inline"?"inline":"vertical")),"data-menu-list":!0}),[(c=a.default)===null||c===void 0?void 0:c.call(a)])};gn.displayName="SubMenuList";const bn=gn,Jn=Q({name:"InlineSubMenuList",inheritAttrs:!1,props:{id:String,open:Boolean,keyPath:Array},setup:function(e,i){var a=i.slots,n=r(function(){return"inline"}),c=ne(),o=c.motion,d=c.mode,p=c.defaultMotions,h=r(function(){return d.value===n.value}),m=x(!h.value),g=r(function(){return h.value?e.open:!1});q(d,function(){h.value&&(m.value=!1)},{flush:"post"});var S=r(function(){var b,y,v=o.value||((b=p.value)===null||b===void 0?void 0:b[n.value])||((y=p.value)===null||y===void 0?void 0:y.other),K=typeof v=="function"?v():v;return N(N({},K),{appear:e.keyPath.length<=1})});return function(){var b;return m.value?null:f(Ae,{mode:n.value},{default:function(){return[f(_n,S.value,{default:function(){return[xn(f(bn,{id:e.id},{default:function(){return[(b=a.default)===null||b===void 0?void 0:b.call(a)]}}),[[Sn,g.value]])]}})]}})}}});var Ze=0,et=function(){return{icon:F.any,title:F.any,disabled:Boolean,level:Number,popupClassName:String,popupOffset:Array,internalPopupClose:Boolean,eventKey:String,expandIcon:Function,onMouseenter:Function,onMouseleave:Function,onTitleClick:Function}};const Pe=Q({name:"ASubMenu",inheritAttrs:!1,props:et(),slots:["icon","title","expandIcon"],setup:function(e,i){var a=i.slots,n=i.attrs,c=i.emit,o,d;dn(!1);var p=ze(),h=an(),m=pe(h.vnode.key)==="symbol"?String(h.vnode.key):h.vnode.key;Oe(pe(h.vnode.key)!=="symbol","SubMenu",'SubMenu `:key="'.concat(String(m),'"` not support Symbol type'));var g=He(m)?m:"sub_menu_".concat(++Ze,"_$$_not_set_key"),S=(o=e.eventKey)!==null&&o!==void 0?o:He(m)?"sub_menu_".concat(++Ze,"_$$_").concat(m):g,b=$e(),y=b.parentEventKeys,v=b.parentInfo,K=b.parentKeys,A=r(function(){return[].concat(re(K.value),[g])}),H=x([]),w={eventKey:S,key:g,parentEventKeys:y,childrenEventKeys:H,parentKeys:K};(d=v.childrenEventKeys)===null||d===void 0||d.value.push(S),Ee(function(){var L;v.childrenEventKeys&&(v.childrenEventKeys.value=(L=v.childrenEventKeys)===null||L===void 0?void 0:L.value.filter(function(_){return _!=S}))}),qn(S,g,w);var I=ne(),T=I.prefixCls,Y=I.activeKeys,k=I.disabled,M=I.changeActiveKeys,P=I.mode,B=I.inlineCollapsed,z=I.antdMenuTheme,X=I.openKeys,U=I.overflowDisabled,te=I.onOpenChange,oe=I.registerMenuInfo,se=I.unRegisterMenuInfo,ye=I.selectedSubMenuKeys,ge=I.expandIcon,Z=m!=null,ce=!p&&(vn()||!Z);$n(ce),(p&&Z||!p&&!Z||ce)&&(oe(S,w),Ee(function(){se(S)}));var ve=r(function(){return"".concat(T.value,"-submenu")}),$=r(function(){return k.value||e.disabled}),be=x(),u=x(),l=r(function(){return X.value.includes(g)}),s=r(function(){return!U.value&&l.value}),E=r(function(){return ye.value.includes(g)}),C=x(!1);q(Y,function(){C.value=!!Y.value.find(function(L){return L===g})},{immediate:!0});var D=function(_){$.value||(c("titleClick",_,g),P.value==="inline"&&te(g,!l.value))},R=function(_){$.value||(M(A.value),c("mouseenter",_))},j=function(_){$.value||(M([]),c("mouseleave",_))},W=yn(r(function(){return A.value.length})),ae=function(_){P.value!=="inline"&&te(g,_)},le=function(){M(A.value)},he=S&&"".concat(S,"-popup"),We=r(function(){return Ke(T.value,"".concat(T.value,"-").concat(z.value),e.popupClassName)}),Cn=function(_,G){if(!G)return B.value&&!K.value.length&&_&&typeof _=="string"?f("div",{class:"".concat(T.value,"-inline-collapsed-noicon")},[_.charAt(0)]):f("span",{class:"".concat(T.value,"-title-content")},[_]);var J=ln(_)&&_.type==="span";return f(we,null,[Ie(G,{class:"".concat(T.value,"-item-icon")},!1),J?_:f("span",{class:"".concat(T.value,"-title-content")},[_])])},Le=r(function(){return P.value!=="inline"&&A.value.length>1?"vertical":P.value}),Mn=r(function(){return P.value==="horizontal"?"vertical":P.value}),Kn=r(function(){return Le.value==="horizontal"?"vertical":Le.value}),Ge=function(){var _=ve.value,G=Re(a,e,"icon"),J=e.expandIcon||a.expandIcon||ge.value,ue=Cn(Re(a,e,"title"),G);return f("div",{style:W.value,class:"".concat(_,"-title"),tabindex:$.value?null:-1,ref:be,title:typeof ue=="string"?ue:null,"data-menu-id":g,"aria-expanded":s.value,"aria-haspopup":!0,"aria-controls":he,"aria-disabled":$.value,onClick:D,onFocus:le},[ue,P.value!=="horizontal"&&J?J(N(N({},e),{isOpen:s.value})):f("i",{class:"".concat(_,"-arrow")},null)])};return function(){var L,_;if(p)return Z?(_=a.default)===null||_===void 0?void 0:_.call(a):null;var G=ve.value,J=function(){return null};return!U.value&&P.value!=="inline"?J=function(){return f(Xe,{mode:Le.value,prefixCls:G,visible:!e.internalPopupClose&&s.value,popupClassName:We.value,popupOffset:e.popupOffset,disabled:$.value,onVisibleChange:ae},{default:function(){return[Ge()]},popup:function(){return f(Ae,{mode:Kn.value,isRootMenu:!1},{default:function(){return[f(bn,{id:he,ref:u},{default:a.default})]}})}})}:J=function(){return f(Xe,null,{default:Ge})},f(Ae,{mode:Mn.value},{default:function(){return[f(Me.Item,V(V({component:"li"},n),{},{role:"none",class:Ke(G,"".concat(G,"-").concat(P.value),n.class,(L={},O(L,"".concat(G,"-open"),s.value),O(L,"".concat(G,"-active"),C.value),O(L,"".concat(G,"-selected"),E.value),O(L,"".concat(G,"-disabled"),$.value),L)),onMouseenter:R,onMouseleave:j,"data-submenu-id":g}),{default:function(){return f(we,null,[J(),!U.value&&f(Jn,{id:he,open:s.value,keyPath:A.value},{default:a.default})])}})]}})}}});function hn(t,e){if(t.classList)return t.classList.contains(e);var i=t.className;return" ".concat(i," ").indexOf(" ".concat(e," "))>-1}function Je(t,e){t.classList?t.classList.add(e):hn(t,e)||(t.className="".concat(t.className," ").concat(e))}function en(t,e){if(t.classList)t.classList.remove(e);else if(hn(t,e)){var i=t.className;t.className=" ".concat(i," ").replace(" ".concat(e," ")," ")}}var nt=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"ant-motion-collapse",i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return{name:e,appear:i,css:!0,onBeforeEnter:function(n){n.style.height="0px",n.style.opacity="0",Je(n,e)},onEnter:function(n){wn(function(){n.style.height="".concat(n.scrollHeight,"px"),n.style.opacity="1"})},onAfterEnter:function(n){n&&(en(n,e),n.style.height=null,n.style.opacity=null)},onBeforeLeave:function(n){Je(n,e),n.style.height="".concat(n.offsetHeight,"px"),n.style.opacity=null},onLeave:function(n){setTimeout(function(){n.style.height="0px",n.style.opacity="0"})},onAfterLeave:function(n){n&&(en(n,e),n.style&&(n.style.height=null,n.style.opacity=null))}}};const tt=nt;var at=function(){return{id:String,prefixCls:String,disabled:Boolean,inlineCollapsed:Boolean,disabledOverflow:Boolean,forceSubMenuRender:Boolean,openKeys:Array,selectedKeys:Array,activeKey:String,selectable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},motion:Object,theme:{type:String,default:"light"},mode:{type:String,default:"vertical"},inlineIndent:{type:Number,default:24},subMenuOpenDelay:{type:Number,default:.1},subMenuCloseDelay:{type:Number,default:.1},builtinPlacements:{type:Object},triggerSubMenuAction:{type:String,default:"hover"},getPopupContainer:Function,expandIcon:Function,onOpenChange:Function,onSelect:Function,onDeselect:Function,onClick:[Function,Array],onFocus:Function,onBlur:Function,onMousedown:Function,"onUpdate:openKeys":Function,"onUpdate:selectedKeys":Function,"onUpdate:activeKey":Function}},nn=[];const ie=Q({name:"AMenu",inheritAttrs:!1,props:at(),slots:["expandIcon","overflowedIndicator"],setup:function(e,i){var a=i.slots,n=i.emit,c=i.attrs,o=un("menu",e),d=o.prefixCls,p=o.direction,h=o.getPrefixCls,m=x({}),g=me(Gn,x(void 0)),S=r(function(){return g.value!==void 0?g.value:e.inlineCollapsed}),b=x(!1);On(function(){b.value=!0}),Ne(function(){Oe(!(e.inlineCollapsed===!0&&e.mode!=="inline"),"Menu","`inlineCollapsed` should only be used when `mode` is inline."),Oe(!(g.value!==void 0&&e.inlineCollapsed===!0),"Menu","`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.")});var y=x([]),v=x([]),K=x({});q(m,function(){for(var u={},l=0,s=Object.values(m.value);l<s.length;l++){var E=s[l];u[E.key]=E}K.value=u},{flush:"post"}),Ne(function(){if(e.activeKey!==void 0){var u=[],l=e.activeKey?K.value[e.activeKey]:void 0;l&&e.activeKey!==void 0?u=De([].concat(xe(l.parentKeys),e.activeKey)):u=[],Ce(y.value,u)||(y.value=u)}}),q(function(){return e.selectedKeys},function(u){u&&(v.value=u.slice())},{immediate:!0,deep:!0});var A=x([]);q([K,v],function(){var u=[];v.value.forEach(function(l){var s=K.value[l];s&&(u=u.concat(xe(s.parentKeys)))}),u=De(u),Ce(A.value,u)||(A.value=u)},{immediate:!0});var H=function(l){if(!!e.selectable){var s=l.key,E=v.value.includes(s),C;e.multiple?E?C=v.value.filter(function(R){return R!==s}):C=[].concat(re(v.value),[s]):C=[s];var D=N(N({},l),{selectedKeys:C});Ce(C,v.value)||(e.selectedKeys===void 0&&(v.value=C),n("update:selectedKeys",C),E&&e.multiple?n("deselect",D):n("select",D)),M.value!=="inline"&&!e.multiple&&w.value.length&&z(nn)}},w=x([]);q(function(){return e.openKeys},function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:w.value;Ce(w.value,u)||(w.value=u.slice())},{immediate:!0,deep:!0});var I,T=function(l){clearTimeout(I),I=setTimeout(function(){e.activeKey===void 0&&(y.value=l),n("update:activeKey",l[l.length-1])})},Y=r(function(){return!!e.disabled}),k=r(function(){return p.value==="rtl"}),M=x("vertical"),P=x(!1);Ne(function(){(e.mode==="inline"||e.mode==="vertical")&&S.value?(M.value="vertical",P.value=S.value):(M.value=e.mode,P.value=!1)});var B=r(function(){return M.value==="inline"}),z=function(l){w.value=l,n("update:openKeys",l),n("openChange",l)},X=x(w.value),U=x(!1);q(w,function(){B.value&&(X.value=w.value)},{immediate:!0}),q(B,function(){if(!U.value){U.value=!0;return}B.value?w.value=X.value:z(nn)},{immediate:!0});var te=r(function(){var u;return u={},O(u,"".concat(d.value),!0),O(u,"".concat(d.value,"-root"),!0),O(u,"".concat(d.value,"-").concat(M.value),!0),O(u,"".concat(d.value,"-inline-collapsed"),P.value),O(u,"".concat(d.value,"-rtl"),k.value),O(u,"".concat(d.value,"-").concat(e.theme),!0),u}),oe=r(function(){return h()}),se=r(function(){return{horizontal:{name:"".concat(oe.value,"-slide-up")},inline:tt,other:{name:"".concat(oe.value,"-zoom-big")}}});dn(!0);var ye=function u(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],s=[],E=m.value;return l.forEach(function(C){var D=E[C],R=D.key,j=D.childrenEventKeys;s.push.apply(s,[R].concat(re(u(xe(j)))))}),s},ge=function(l){n("click",l),H(l)},Z=function(l,s){var E=K.value[l].childrenEventKeys,C=w.value.filter(function(R){return R!==l});if(s)C.push(l);else if(M.value!=="inline"){var D=ye(xe(E));C=De(C.filter(function(R){return!D.includes(R)}))}Ce(w,C)||z(C)},ce=function(l,s){m.value=N(N({},m.value),O({},l,s))},ve=function(l){delete m.value[l],m.value=N({},m.value)},$=x(0),be=r(function(){return e.expandIcon||a.expandIcon?function(u){var l=e.expandIcon||a.expandIcon;return l=typeof l=="function"?l(u):l,Ie(l,{class:"".concat(d.value,"-submenu-expand-icon")},!1)}:null});return Wn({store:m,prefixCls:d,activeKeys:y,openKeys:w,selectedKeys:v,changeActiveKeys:T,disabled:Y,rtl:k,mode:M,inlineIndent:r(function(){return e.inlineIndent}),subMenuCloseDelay:r(function(){return e.subMenuCloseDelay}),subMenuOpenDelay:r(function(){return e.subMenuOpenDelay}),builtinPlacements:r(function(){return e.builtinPlacements}),triggerSubMenuAction:r(function(){return e.triggerSubMenuAction}),getPopupContainer:r(function(){return e.getPopupContainer}),inlineCollapsed:P,antdMenuTheme:r(function(){return e.theme}),siderCollapsed:g,defaultMotions:r(function(){return b.value?se.value:null}),motion:r(function(){return b.value?e.motion:null}),overflowDisabled:x(void 0),onOpenChange:Z,onItemClick:ge,registerMenuInfo:ce,unRegisterMenuInfo:ve,selectedSubMenuKeys:A,isRootMenu:x(!0),expandIcon:be,forceSubMenuRender:r(function(){return e.forceSubMenuRender})}),function(){var u,l,s=tn((u=a.default)===null||u===void 0?void 0:u.call(a)),E=$.value>=s.length-1||M.value!=="horizontal"||e.disabledOverflow,C=M.value!=="horizontal"||e.disabledOverflow?s:s.map(function(R,j){return f(Ae,{key:R.key,overflowDisabled:j>$.value},{default:function(){return R}})}),D=((l=a.overflowedIndicator)===null||l===void 0?void 0:l.call(a))||f(Vn,null,null);return f(Me,V(V({},c),{},{onMousedown:e.onMousedown,prefixCls:"".concat(d.value,"-overflow"),component:"ul",itemComponent:ke,class:[te.value,c.class],role:"menu",id:e.id,data:C,renderRawItem:function(j){return j},renderRawRest:function(j){var W=j.length,ae=W?s.slice(-W):null;return f(we,null,[f(Pe,{eventKey:Se,key:Se,title:D,disabled:E,internalPopupClose:W===0},{default:function(){return ae}}),f(Qe,null,{default:function(){return[f(Pe,{eventKey:Se,key:Se,title:D,disabled:E,internalPopupClose:W===0},{default:function(){return ae}})]}})])},maxCount:M.value!=="horizontal"||e.disabledOverflow?Me.INVALIDATE:Me.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(j){$.value=j}}),{default:function(){return[f(En,{to:"body"},{default:function(){return[f("div",{style:{display:"none"},"aria-hidden":!0},[f(Qe,null,{default:function(){return[C]}})])]}})]}})}}});var lt=function(){return{title:F.any}};const je=Q({name:"AMenuItemGroup",inheritAttrs:!1,props:lt(),slots:["title"],setup:function(e,i){var a=i.slots,n=i.attrs,c=ne(),o=c.prefixCls,d=r(function(){return"".concat(o.value,"-item-group")}),p=ze();return function(){var h,m;return p?(h=a.default)===null||h===void 0?void 0:h.call(a):f("li",V(V({},n),{},{onClick:function(S){return S.stopPropagation()},class:d.value}),[f("div",{title:typeof e.title=="string"?e.title:void 0,class:"".concat(d.value,"-title")},[Re(a,e,"title")]),f("ul",{class:"".concat(d.value,"-list")},[(m=a.default)===null||m===void 0?void 0:m.call(a)])])}}});var ut=function(){return{prefixCls:String,dashed:Boolean}};const Ve=Q({name:"AMenuDivider",props:ut(),setup:function(e){var i=un("menu",e),a=i.prefixCls,n=r(function(){var c;return c={},O(c,"".concat(a.value,"-item-divider"),!0),O(c,"".concat(a.value,"-item-divider-dashed"),!!e.dashed),c});return function(){return f("li",{class:n.value},null)}}});ie.install=function(t){return t.component(ie.name,ie),t.component(ke.name,ke),t.component(Pe.name,Pe),t.component(Ve.name,Ve),t.component(je.name,je),t};ie.Item=ke;ie.Divider=Ve;ie.SubMenu=Pe;ie.ItemGroup=je;export{ft as D,Vn as E,ie as M,ke as _,Pe as a,tt as c};
