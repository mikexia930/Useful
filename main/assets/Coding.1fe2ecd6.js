import{X as J,d as C,B as D,b as k,cP as rt,o as m,a5 as v,a4 as e,c as N,a3 as R,W as l,cR as j,D as s,j as lt,b9 as pt,i as xt,a as i,au as h,at as y,av as ut,a6 as O}from"./index.611b52b0.js";import{b as S}from"./config.f9e89767.js";import{U as ft,_ as A}from"./UIWithTitle.30bc1e52.js";import{a as dt,u as mt,b as _t,c as yt,d as ht,e as vt,U as wt}from"./PortExport.vue_vue_type_script_setup_true_lang.c939a6dc.js";import{g as w}from"./lib.75e6cd80.js";import{E as kt,a as H}from"./DConfirm.15e4c3c0.js";import{d as Ct}from"./copyLib.49c87afd.js";import{a as bt,_ as $t,E as Ft}from"./Interface.48732bbd.js";import{f as B}from"./forEach.99eaac2d.js";import{_ as It}from"./DCodeMirror.vue_vue_type_script_setup_true_lang.00149625.js";import{u as jt}from"./ModuleAutoSaveLib.04e12bb3.js";import{_ as V}from"./_plugin-vue_export-helper.cdc0426e.js";import{D as St}from"./DCheckbox.vue_vue_type_script_setup_true_lang.29ca96b9.js";import"./dateLib.63528a18.js";import"./dayjs.min.6c47bd3a.js";import"./advancedFormat.16ff0fee.js";import"./isPlainObject.4756aa4c.js";import"./index.410413ae.js";import"./hasIn.84fb846a.js";import"./identity.ef62d0c1.js";import"./toNumber.d0d01f72.js";import"./memoize.c79247e9.js";import"./index.fcfefed5.js";import"./messageLib.15acb5c4.js";import"./randomLib.04c6c9cc.js";import"./stringify.15412eb9.js";import"./cloneDeep.87697a00.js";import"./Modal.a2e097dd.js";import"./styleChecker.fdf7553f.js";import"./codemirror.4373ef55.js";const p=J({folders:[],item:{}}),Dt={[S.Config]:"coding_config",[S.Folder]:"coding_folder",[S.Content]:"coding_content",[S.Env]:"coding_env"};var P=(t=>(t.C="text/x-csrc",t.CPP="text/x-c++src",t.CSharp="text/x-csharp",t.Css="text/css",t.Dockerfile="text/x-dockerfile",t.ErLang="text/x-erlang",t.Go="text/x-go",t.Html="text/html",t.Java="text/x-java",t.Javascript="text/javascript",t.Json="application/json",t.Kotlin="text/x-kotlin",t.Less="text/x-less",t.Lua="text/lua",t.Markdown="text/markdown",t.Nginx="text/x-nginx-conf",t.PHP="text/x-php",t.Protobuf="text/x-protobuf",t.Python="text/x-python",t.Ruby="text/x-ruby",t.Sass="text/x-scss",t.Shell="text/x-sh",t.Sql="text/x-sql",t.Scala="text/x-scala",t.Swift="text/x-swift",t.Text="text",t.Xml="application/xml",t.Yaml="application/x-yaml",t))(P||{});const q={["text/x-csrc"]:{types:["text/x-csrc"],suffixes:[".c",".h"]},["text/x-c++src"]:{types:["text/x-c++src"],suffixes:[".cpp"]},["text/x-csharp"]:{types:["text/x-csharp"],suffixes:[".cs",".aspx"]},["text/css"]:{types:["text/x-csrc"],suffixes:[".css"]},["text/x-dockerfile"]:{types:["text/x-dockerfile"],suffixes:[""]},["text/x-erlang"]:{types:["text/x-erlange"],suffixes:[".erl",".hrl"]},["text/x-go"]:{types:["text/x-go"],suffixes:[".go"]},["text/html"]:{types:["text/html"],suffixes:[".html",".htm"]},["text/x-java"]:{types:["text/x-java"],suffixes:[".java",".jsp"]},["text/javascript"]:{types:["text/javascript"],suffixes:[".ts",".js",".jsx",".vue"]},["text/x-kotlin"]:{types:["text/x-kotlin"],suffixes:[".kt"]},["text/x-less"]:{types:["text/x-less"],suffixes:[".less"]},["text/lua"]:{types:["text/lua"],suffixes:[".lua"]},["text/markdown"]:{types:["text/markdown"],suffixes:[".md"]},["text/x-nginx-conf"]:{types:["text/x-nginx-conf"],suffixes:[".conf"]},["text/x-php"]:{types:["text/x-php"],suffixes:[".php"]},["text/x-protobuf"]:{types:["text/x-protobuf"],suffixes:[".proto"]},["text/x-python"]:{types:["text/x-python"],suffixes:[".py"]},["text/x-ruby"]:{types:["text/x-ruby"],suffixes:[".rb",".ruby"]},["text/x-scss"]:{types:["text/x-scss"],suffixes:[".sass"]},["text/x-sh"]:{types:["text/x-sh"],suffixes:[".sh"]},["text/x-sql"]:{types:["text/x-sql"],suffixes:[".sql"]},["text/x-scala"]:{types:["text/x-scala"],suffixes:[".scala"]},["text/x-swift"]:{types:["text/x-swift"],suffixes:[".swift"]},text:{types:["text","text/plain"],suffixes:[".txt"]},["application/xml"]:{types:["application/xml"],suffixes:[".xml"]},["application/x-yaml"]:{types:["application/x-yaml"],suffixes:[".yaml",".yml"]},["application/json"]:{types:["application/json"],suffixes:[".json"]}};function Ut(){return{content:{mode:"text",content:""},isSaved:0}}const Mt={name:"CodingExport"},Tt=C({...Mt,setup(t){const o=D("contentIdentity"),x=D("contentName"),a=k(()=>({module:kt.Typing,identity:o.value})),_=k(()=>{var $,F;const{mode:c,content:u}=p.item[o.value].content,r={name:x.value,content:u,suffix:""},b=rt(x.value);return r.suffix=b.suffix||((F=($=q[c])==null?void 0:$.suffixes)==null?void 0:F[0])||"",r.name=`${b.name}${r.suffix}`,r});return(c,u)=>(m(),v(dt,{module:a.value,data:_.value,type:e(H).CUSTOM,types:[e(H).CUSTOM]},null,8,["module","data","type","types"]))}}),Nt={name:"CodingLang"},Bt=C({...Nt,props:{mode:{}},emits:["update:mode"],setup(t,{emit:o}){const x=t,a=k(()=>{const c=[];return B(P,(u,r)=>{c.push({label:r,value:u})}),c}),_=k({get:()=>x.mode,set:c=>o("update:mode",c)});return(c,u)=>(m(),v(bt,{"show-search":!0,style:{"min-width":"120px"},select:_.value,"onUpdate:select":u[0]||(u[0]=r=>_.value=r),options:a.value},null,8,["select","options"]))}}),qt={class:"coding-content"},Pt={name:"CodingEditor"},gt=C({...Pt,setup(t){const o=D("contentIdentity");return jt(p,o,["content"]),(x,a)=>(m(),N("div",qt,[(m(),v(It,R(x.$attrs,{"is-use-format":!0,mode:e(p).item[e(o)].content.mode,key:e(o),"textarea-key":e(o),value:e(p).item[e(o)].content.content,"onUpdate:value":a[0]||(a[0]=_=>e(p).item[e(o)].content.content=_)}),null,16,["mode","textarea-key","value"]))]))}});const Ot=V(gt,[["__scopeId","data-v-f2de871f"]]),At={class:"warp_bigger coding_area"},Ht={class:"show_area"},Jt={class:"tw-text-sm"},Rt={class:"tw-flex tw-justify-end tw-items-center"},Vt={key:0},Wt={class:"tw-ml-4"},Xt={class:"tw-ml-2"},zt={class:"tw-ml-2"},Gt={class:"tw-ml-2"},Kt={class:"tw-ml-2"},Yt={name:"ModuleCoding"},Qt=C({...Yt,setup(t){const o=D("storeIDB"),x=k(()=>{switch(l.os){case j.Mac:return w("coding.notice.quick.mac");case j.Linux:case j.Unix:case j.Win:default:return w("coding.notice.quick.win")}}),{curContentIdentity:a,curContentName:_,curContentFolderIdentity:c,curFolders:u,curHistoryFolders:r,addFolder:b,renameFolder:$,deleteFolder:F,sortFolder:W,createContent:X,saveContent:z,showContent:G,renameContent:K,copyContent:Y,deleteContent:Q,autoSaveContent:Z,importContent:E}=mt(o,Dt,p,Ut());s("contentFolderIdentity",c),s("contentIdentity",a),s("contentName",_),s("historyFolders",r),s("folders",u),s("addFolder",b),s("renameFolder",$),s("deleteFolder",F),s("showContent",G),s("copyContent",Y),s("renameContent",K),s("deleteContent",Q),s("sortFolder",W),s("saveContent",z),s("autoSaveContent",Z);const I=J({support:[],accept:""});lt(()=>{let f=[],n=[];B(q,d=>{const{suffixes:M,types:T}=d;f=[...f,...T],n=[...n,...M]}),I.support=f,I.accept=pt(n,",")});function L(){X()}function tt(f){l.loading=!0;const{name:n,content:d,type:M,isSave:T,folderIdentity:at}=f;let g="";B(q,(it,ct)=>{if(it.types.includes(M))return g=ct,!1});const nt=g||P.Text;E(n,{content:d,mode:nt},T,at).then(()=>{l.loading=!1}).catch(()=>{l.loading=!1})}const U=xt(!1);function et(){U.value=!0}function st(){Ct(p.item[a.value].content.content||"")}function ot(f){p.item[a.value].content.mode=f}return(f,n)=>(m(),N("div",At,[i(wt,{collapse:e(l).historyDrawer.collapse,"onUpdate:collapse":n[2]||(n[2]=d=>e(l).historyDrawer.collapse=d),history:e(l).historyDrawer},{default:h(()=>[y("div",Ht,[i(ft,{title:e(w)("module.coding")},{titleLeft:h(()=>[i(St,null,{anchor:h(()=>[i($t,{type:e(Ft).ExclamationCircleOutlined,size:"sm"},null,8,["type"])]),default:h(()=>[y("span",Jt,ut(x.value),1)]),_:1})]),titleRight:h(()=>[y("div",Rt,[e(a)?(m(),N("span",Vt,[i(_t,{"store-item-data":e(p).item[e(a)]},null,8,["store-item-data"])])):O("",!0),y("span",Wt,[i(Bt,{mode:e(p).item[e(a)].content.mode||"","onUpdate:mode":ot},null,8,["mode"])]),y("span",Xt,[i(yt,{"support-types":I.support,accept:I.accept,onSelect:L,onContent:tt},null,8,["support-types","accept"])]),y("span",zt,[i(A,{name:e(w)("coding.code.format"),onClick:et},null,8,["name"])]),y("span",Gt,[i(A,{type:"primary",name:e(w)("tags.copy"),onClick:st},null,8,["name"])]),y("span",Kt,[i(Tt)]),i(ht,R({class:"tw-ml-2"},f.$attrs),null,16),e(l).historyDrawer.collapse?(m(),v(vt,{key:1,class:"tw-ml-2",visible:e(l).historyDrawer.visible,"onUpdate:visible":n[0]||(n[0]=d=>e(l).historyDrawer.visible=d)},null,8,["visible"])):O("",!0)])]),default:h(()=>[(m(),v(Ot,{key:e(a),"is-format":U.value,"onUpdate:isFormat":n[1]||(n[1]=d=>U.value=d)},null,8,["is-format"]))]),_:1},8,["title"])])]),_:1},8,["collapse","history"])]))}});const Zt=V(Qt,[["__scopeId","data-v-7169411a"]]),Se=C({__name:"Coding",setup(t){return(o,x)=>(m(),v(Zt))}});export{Se as default};
