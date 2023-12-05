function o(r){return new Promise((a,n)=>{if(typeof FileReader<"u"){const e=new FileReader;e.readAsDataURL(r),e.onload=function(t){a(t.target.result)}}else n("no support FileReader")})}export{o as r};
