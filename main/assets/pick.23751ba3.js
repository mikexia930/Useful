import{b as v,f as g}from"./_flatRest.7634532c.js";import{e as c,f as m,c as x,h as _}from"./hasIn.84fb846a.js";import{q as o,b8 as p}from"./index.611b52b0.js";function I(n,r,u,s){if(!o(n))return n;r=c(r,n);for(var f=-1,a=r.length,e=a-1,i=n;i!=null&&++f<a;){var t=m(r[f]),d=u;if(t==="__proto__"||t==="constructor"||t==="prototype")return n;if(f!=e){var l=i[t];d=s?s(l,t,i):void 0,d===void 0&&(d=o(l)?l:p(r[f+1])?[]:{})}x(i,t,d),i=i[t]}return n}function P(n,r,u){for(var s=-1,f=r.length,a={};++s<f;){var e=r[s],i=v(n,e);u(i,e)&&I(a,c(e,n),i)}return a}function h(n,r){return P(n,r,function(u,s){return _(n,s)})}var q=g(function(n,r){return n==null?{}:h(n,r)});const O=q;export{O as p};
