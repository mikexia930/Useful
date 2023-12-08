import{y as ae,d as D,m as L,o as g,c as I,F as a,ah as z,k as l,ag as e,a8 as A,z as se,I as T,as as le,G as U,H as F,aa as re,ab as i,s as C,aw as ie,ai as ce}from"./index.286357e0.js";import{d as N}from"./routeLib.4927cad7.js";import{U as pe}from"./UIWithTitle.8dc65e39.js";import{_ as H,u as de,b as me,c as ue,d as _e,e as ge,U as ve}from"./UICreateImport.vue_vue_type_script_setup_true_lang.2128243a.js";import{g as s}from"./lib.5173e56c.js";import{_ as v}from"./DButton.vue_vue_type_script_setup_true_lang.793ae897.js";import{_ as j}from"./DSpin.f68cef5b.js";import{s as P,E as q}from"./Interface.d7af1223.js";import{d as B}from"./copyLib.d7a7b067.js";import{D as fe}from"./DInput.vue_vue_type_script_setup_true_lang.5ea82556.js";import{_ as J}from"./_plugin-vue_export-helper.cdc0426e.js";import{u as xe}from"./ModuleAutoSaveLib.f0f70820.js";import"./dateLib.63528a18.js";import"./dayjs.min.6c47bd3a.js";import"./advancedFormat.16ff0fee.js";import"./forEach.78ceb588.js";import"./identity.bfdea954.js";import"./index.55a51bb0.js";import"./pick.e9f1a41d.js";import"./_baseIsEqual.ecb1efce.js";import"./hasIn.0707db01.js";import"./memoize.64cb1933.js";import"./isEmpty.bacb74f3.js";import"./config.f197c6bf.js";import"./findIndex.8a999be9.js";import"./randomLib.04c6c9cc.js";import"./stringify.15412eb9.js";import"./styleChecker.9da7f8d9.js";const o=ae({folders:[],item:{}}),M=".regex",he={[N.Config]:"regex_config",[N.Env]:"regex_env",[N.Folder]:"regex_folder",[N.Content]:"regex_content"};function ye(){return{isSaved:0,content:{origin:"",replace:{isOpen:!1,content:""},result:"",regex:"",isGlobal:!0,isIgnoreCase:!0}}}var k=(c=>(c.Origin="origin",c.Result="result",c))(k||{}),m=(c=>(c.Exec="exec",c.Test="test",c.Search="search",c.Replace="replace",c.Match="match",c.MatchAll="matchAll",c.Split="split",c))(m||{});const Ce={class:"content_side"},ke={class:"data_title"},we={class:"data_content"},$e={name:"RegexSide"},K=D({...$e,props:{from:{},value:{}},emits:["update:value","copy","clear"],setup(c,{emit:t}){const p=c,d=L(()=>p.from===k.Origin?s("regex.originValue"):s("regex.resultValue")),w=L({get:()=>p.value,set:f=>t("update:value",f)});function x(){t("copy",p.from)}function u(){t("clear",p.from)}return(f,$)=>(g(),I("div",Ce,[a("div",ke,[a("span",null,z(d.value),1),a("span",null,[l(v,{size:"small",type:"primary",name:e(s)("tags.copy"),onClick:x},null,8,["name"]),l(v,{class:"tw-ml-1",size:"small",name:e(s)("tags.clear"),onClick:u},null,8,["name"])])]),a("div",we,[l(H,{placeholder:d.value,value:w.value,"onUpdate:value":$[0]||($[0]=n=>w.value=n)},null,8,["placeholder","value"])])]))}}),be={class:"tw-h-full"},Ie={class:"regex-work-content"},Re={key:0,class:"regex-work regex-work-half tw-pr-2"},Oe={class:"regex-work-title"},Fe={class:"tw-ml-1"},Se={class:"regex-work-textarea"},Ue={class:"regex-work-title"},De={class:"tw-text-sm"},Ne={class:"tw-ml-1"},Me={class:"regex-work-textarea"},ze={class:"regex-work-block"},Te={class:"tw-ml-2"},Ae={class:"tw-ml-2"},Be={class:"regex-work-btn"},Ee={name:"RegexOperate"},Ge=D({...Ee,setup(c){const t=A("contentIdentity"),p=se("");function d($){const{content:n}=o.item[t.value],{isGlobal:r,isIgnoreCase:E,origin:h,regex:S,replace:G}=n;if(!h)P(q.Warning,s("regex.notice.emptyOrigin"));else if(!S)P(q.Warning,s("regex.notice.emptyRegex"));else{let R="";r&&(R+="g"),E&&(R+="i"),$===m.Exec&&(R+="d");try{let _,y;switch(p.value=`/${S}/${R}`,_=new RegExp(S,`${R}`),$){case m.Exec:y=_.exec(h);break;case m.Test:y=_.test(h);break;case m.Search:y=h.search(_);break;case m.Match:y=h.match(_);break;case m.MatchAll:y=[...h.matchAll(_)];break;case m.Split:y=h.split(_);break;case m.Replace:y=h.replace(_,G.content);break}n.result=JSON.stringify(y)}catch(_){n.result=(_==null?void 0:_.message)||String(_)||s("regex.notice.regexErr")}}}function w(){B(p.value)}function x(){p.value="",o.item[t.value].content.regex=""}function u(){B(o.item[t.value].content.replace.content)}function f(){o.item[t.value].content.replace.content=""}return($,n)=>(g(),I("div",be,[a("div",Ie,[e(o).item[e(t)].content.replace.isOpen?(g(),I("div",Re,[a("div",Oe,[a("span",null,z(e(s)("regex.replace.label")),1),a("span",null,[l(v,{type:"primary",size:"small",name:e(s)("tags.copy"),onClick:u},null,8,["name"]),a("span",Fe,[l(v,{size:"small",name:e(s)("tags.clear"),onClick:f},null,8,["name"])])])]),a("div",Se,[l(H,{placeholder:e(s)("regex.replace.label"),value:e(o).item[e(t)].content.replace.content,"onUpdate:value":n[0]||(n[0]=r=>e(o).item[e(t)].content.replace.content=r)},null,8,["placeholder","value"])])])):T("",!0),a("div",{class:le(["regex-work",{"tw-w-full":!e(o).item[e(t)].content.replace.isOpen,"regex-work-half":e(o).item[e(t)].content.replace.isOpen,"tw-pl-2":e(o).item[e(t)].content.replace.isOpen}])},[a("div",Ue,[a("span",null,z(e(s)("regex.operate.label")),1),a("span",null,[l(fe,null,{anchor:U(()=>[l(v,{type:"primary",size:"small",name:e(s)("tags.copy"),onClick:w},null,8,["name"])]),default:U(()=>[a("span",De,z(e(s)("regex.notice.copyRegex")),1)]),_:1}),a("span",Ne,[l(v,{size:"small",name:e(s)("tags.clear"),onClick:x},null,8,["name"])])])]),a("div",Me,[l(H,{placeholder:e(s)("regex.operate.label"),value:e(o).item[e(t)].content.regex,"onUpdate:value":n[1]||(n[1]=r=>e(o).item[e(t)].content.regex=r)},null,8,["placeholder","value"])])],2)]),a("div",ze,[a("div",null,[l(j,{name:e(s)("regex.operate.isGlobal"),checked:e(o).item[e(t)].content.isGlobal,"onUpdate:checked":n[2]||(n[2]=r=>e(o).item[e(t)].content.isGlobal=r)},null,8,["name","checked"]),a("span",Te,[l(j,{name:e(s)("regex.operate.isIgnoreCase"),checked:e(o).item[e(t)].content.isIgnoreCase,"onUpdate:checked":n[3]||(n[3]=r=>e(o).item[e(t)].content.isIgnoreCase=r)},null,8,["name","checked"])]),a("span",Ae,[l(j,{name:e(s)("regex.replace.isUse"),checked:e(o).item[e(t)].content.replace.isOpen,"onUpdate:checked":n[4]||(n[4]=r=>e(o).item[e(t)].content.replace.isOpen=r)},null,8,["name","checked"])])]),a("div",Be,[e(o).item[e(t)].content.replace.isOpen?(g(),F(v,{key:0,name:e(s)("regex.work.replace"),onClick:n[5]||(n[5]=r=>d(e(m).Replace))},null,8,["name"])):(g(),I(re,{key:1},[l(v,{name:e(s)("regex.work.exec"),onClick:n[6]||(n[6]=r=>d(e(m).Exec))},null,8,["name"]),l(v,{name:e(s)("regex.work.test"),onClick:n[7]||(n[7]=r=>d(e(m).Test))},null,8,["name"]),l(v,{name:e(s)("regex.work.search"),onClick:n[8]||(n[8]=r=>d(e(m).Search))},null,8,["name"]),l(v,{name:e(s)("regex.work.match"),onClick:n[9]||(n[9]=r=>d(e(m).Match))},null,8,["name"]),l(v,{name:e(s)("regex.work.matchAll"),onClick:n[10]||(n[10]=r=>d(e(m).MatchAll))},null,8,["name"]),l(v,{name:e(s)("regex.work.split"),onClick:n[11]||(n[11]=r=>d(e(m).Split))},null,8,["name"])],64))])])]))}});const Ve=J(Ge,[["__scopeId","data-v-7ebf8682"]]),je={class:"tw-h-full tw-w-full"},He={class:"regex-show"},Je={class:"tw-pr-2"},Le={class:"tw-pl-2"},Pe={class:"regex-operate"},qe={name:"RegexEditor"},Ke=D({...qe,setup(c){const t=A("contentIdentity"),p=A("contentName");xe(o,t,["content"],p);function d(x){const{origin:u,result:f}=o.item[t.value].content;switch(x){case k.Origin:B(u);break;case k.Result:B(f);break}}function w(x){const{content:u}=o.item[t.value];switch(x){case k.Origin:u.origin="";break;case k.Result:u.result="";break}}return(x,u)=>(g(),I("div",je,[a("div",He,[a("div",Je,[(g(),F(K,{key:e(k).Origin,from:e(k).Origin,value:e(o).item[e(t)].content.origin,"onUpdate:value":u[0]||(u[0]=f=>e(o).item[e(t)].content.origin=f),onCopy:d,onClear:w},null,8,["from","value"]))]),a("div",Le,[(g(),F(K,{key:e(k).Result,from:e(k).Result,value:e(o).item[e(t)].content.result,"onUpdate:value":u[1]||(u[1]=f=>e(o).item[e(t)].content.result=f),onCopy:d,onClear:w},null,8,["from","value"]))])]),a("div",Pe,[l(Ve)])]))}});const Qe=J(Ke,[["__scopeId","data-v-45d07577"]]),Xe={class:"warp_bigger regex_area"},Ye={key:0,class:"show_area"},Ze={class:"tw-flex tw-justify-end tw-items-center"},We={key:0},et={class:"tw-ml-4"},tt={name:"ModuleRegex"},nt=D({...tt,setup(c){const t=A("storeIDB"),{curContentIdentity:p,curContentName:d,curContentFolderIdentity:w,curFolders:x,curHistoryFolders:u,curIsSaved:f,addFolder:$,renameFolder:n,deleteFolder:r,sortFolder:E,createContent:h,saveContent:S,showContent:G,renameContent:R,copyContent:_,deleteContent:y,autoSaveContent:Q,importContent:X,getContent:Y,saveFolder:Z,saveContentItem:W}=de(t,he,o,ye());i("contentIsSaved",f),i("contentFolderIdentity",w),i("contentIdentity",p),i("contentName",d),i("historyFolders",u),i("folders",x),i("addFolder",$),i("renameFolder",n),i("deleteFolder",r),i("showContent",G),i("copyContent",_),i("renameContent",R),i("deleteContent",y),i("sortFolder",E),i("saveContent",S),i("autoSaveContent",Q),i("getContent",Y),i("saveFolder",Z),i("saveContentItem",W);function ee(){h()}function te(V){C.loading=!0;const{name:b,content:O,isSave:ne,folderIdentity:oe}=V;X(b,O,ne,oe,M).then(()=>{C.loading=!1}).catch(()=>{C.loading=!1})}return(V,b)=>(g(),I("div",Xe,[l(ve,{collapse:e(C).historyDrawer.collapse,"onUpdate:collapse":b[2]||(b[2]=O=>e(C).historyDrawer.collapse=O),history:e(C).historyDrawer,suffix:e(M)},{default:U(()=>[e(p)?(g(),I("div",Ye,[l(pe,{title:e(s)(`module.${e(C).module}`),contentName:e(d),"onUpdate:contentName":b[1]||(b[1]=O=>ie(d)?d.value=O:null),"is-has-name":!0},{titleRight:U(()=>[a("div",Ze,[e(p)?(g(),I("span",We,[l(me,{"store-item-data":e(o).item[e(p)]},null,8,["store-item-data"])])):T("",!0),a("span",et,[l(ue,{"support-types":["text/plain"],accept:[e(M)],"store-item-data":e(o).item[e(p)],suffix:e(M),onSelect:ee,onContent:te},null,8,["accept","store-item-data","suffix"])]),l(_e,ce({class:"tw-ml-2"},V.$attrs),null,16),e(C).historyDrawer.collapse?(g(),F(ge,{key:1,class:"tw-ml-2",visible:e(C).historyDrawer.visible,"onUpdate:visible":b[0]||(b[0]=O=>e(C).historyDrawer.visible=O)},null,8,["visible"])):T("",!0)])]),default:U(()=>[(g(),F(Qe,{key:e(p)}))]),_:1},8,["title","contentName"])])):T("",!0)]),_:1},8,["collapse","history","suffix"])]))}});const ot=J(nt,[["__scopeId","data-v-ebc24e50"]]),Dt=D({__name:"Regex",setup(c){return(t,p)=>(g(),F(ot))}});export{Dt as default};
