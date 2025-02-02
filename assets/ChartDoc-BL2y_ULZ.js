import{s as S}from"./index-BpqXbfbN.js";import{B as w,aS as D,s as j,a as B,c as E,b as a,m as x,aT as $,r as s,o as M,aU as A,k as F,w as I,h as p}from"./index-CJVisyIr.js";var J={root:{position:"relative"}},L={root:"p-chart"},N=w.extend({name:"chart",classes:L,inlineStyles:J}),T={name:"BaseChart",extends:j,props:{type:String,data:null,options:null,plugins:null,width:{type:Number,default:300},height:{type:Number,default:150},canvasProps:{type:null,default:null}},style:N,provide:function(){return{$pcChart:this,$parentInstance:this}}},O={name:"Chart",extends:T,inheritAttrs:!1,emits:["select","loaded"],chart:null,watch:{data:{handler:function(){this.reinit()},deep:!0},type:function(){this.reinit()},options:function(){this.reinit()}},mounted:function(){this.initChart()},beforeUnmount:function(){this.chart&&(this.chart.destroy(),this.chart=null)},methods:{initChart:function(){var t=this;D(()=>import("./auto.esm-B7Ao7w_R.js"),[]).then(function(o){t.chart&&(t.chart.destroy(),t.chart=null),o&&o.default&&(t.chart=new o.default(t.$refs.canvas,{type:t.type,data:t.data,options:t.options,plugins:t.plugins})),t.$emit("loaded",t.chart)})},getCanvas:function(){return this.$canvas},getChart:function(){return this.chart},getBase64Image:function(){return this.chart.toBase64Image()},refresh:function(){this.chart&&this.chart.update()},reinit:function(){this.initChart()},onCanvasClick:function(t){if(this.chart){var o=this.chart.getElementsAtEventForMode(t,"nearest",{intersect:!0},!1),n=this.chart.getElementsAtEventForMode(t,"dataset",{intersect:!0},!1);o&&o[0]&&n&&this.$emit("select",{originalEvent:t,element:o[0],dataset:n})}},generateLegend:function(){if(this.chart)return this.chart.generateLegend()}}};function g(e){"@babel/helpers - typeof";return g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(e)}function V(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable})),o.push.apply(o,n)}return o}function k(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?V(Object(o),!0).forEach(function(n){H(e,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):V(Object(o)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))})}return e}function H(e,t,o){return(t=R(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function R(e){var t=U(e,"string");return g(t)=="symbol"?t:t+""}function U(e,t){if(g(e)!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var n=o.call(e,t||"default");if(g(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var K=["width","height"];function q(e,t,o,n,u,d){return B(),E("div",x({class:e.cx("root"),style:e.sx("root")},e.ptmi("root")),[a("canvas",x({ref:"canvas",width:e.width,height:e.height,onClick:t[0]||(t[0]=function(y){return d.onCanvasClick(y)})},k(k({},e.canvasProps),e.ptm("canvas"))),null,16,K)],16)}O.render=q;const z={class:"col-span-12 xl:col-span-6"},G={class:"card"},Q=a("div",{class:"font-semibold text-xl mb-4"},"Linear",-1),W={class:"col-span-12 xl:col-span-6"},X={class:"card"},Y=a("div",{class:"font-semibold text-xl mb-4"},"Bar",-1),Z={class:"col-span-12 xl:col-span-6"},ee={class:"card flex flex-col items-center"},te=a("div",{class:"font-semibold text-xl mb-4"},"Pie",-1),re={class:"col-span-12 xl:col-span-6"},oe={class:"card flex flex-col items-center"},ae=a("div",{class:"font-semibold text-xl mb-4"},"Doughnut",-1),ne={class:"col-span-12 xl:col-span-6"},le={class:"card flex flex-col items-center"},se=a("div",{class:"font-semibold text-xl mb-4"},"Polar Area",-1),ie={class:"col-span-12 xl:col-span-6"},ce={class:"card flex flex-col items-center"},pe=a("div",{class:"font-semibold text-xl mb-4"},"Radar",-1),ge={__name:"ChartDoc",setup(e){const{getPrimary:t,getSurface:o,isDarkTheme:n}=$(),u=s(null),d=s(null),y=s(null),f=s(null),v=s(null),b=s(null),h=s(null),m=s(null),_=s(null),C=s(null);M(()=>{P()});function P(){const r=getComputedStyle(document.documentElement),i=r.getPropertyValue("--text-color"),l=r.getPropertyValue("--text-color-secondary"),c=r.getPropertyValue("--surface-border");f.value={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:r.getPropertyValue("--p-primary-500"),borderColor:r.getPropertyValue("--p-primary-500"),data:[65,59,80,81,56,55,40]},{label:"My Second dataset",backgroundColor:r.getPropertyValue("--p-primary-200"),borderColor:r.getPropertyValue("--p-primary-200"),data:[28,48,40,19,86,27,90]}]},_.value={plugins:{legend:{labels:{fontColor:i}}},scales:{x:{ticks:{color:l,font:{weight:500}},grid:{display:!1,drawBorder:!1}},y:{ticks:{color:l},grid:{color:c,drawBorder:!1}}}},d.value={labels:["A","B","C"],datasets:[{data:[540,325,702],backgroundColor:[r.getPropertyValue("--p-indigo-500"),r.getPropertyValue("--p-purple-500"),r.getPropertyValue("--p-teal-500")],hoverBackgroundColor:[r.getPropertyValue("--p-indigo-400"),r.getPropertyValue("--p-purple-400"),r.getPropertyValue("--p-teal-400")]}]},h.value={plugins:{legend:{labels:{usePointStyle:!0,color:i}}}},u.value={labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,backgroundColor:r.getPropertyValue("--p-primary-500"),borderColor:r.getPropertyValue("--p-primary-500"),tension:.4},{label:"Second Dataset",data:[28,48,40,19,86,27,90],fill:!1,backgroundColor:r.getPropertyValue("--p-primary-200"),borderColor:r.getPropertyValue("--p-primary-200"),tension:.4}]},b.value={plugins:{legend:{labels:{fontColor:i}}},scales:{x:{ticks:{color:l},grid:{color:c,drawBorder:!1}},y:{ticks:{color:l},grid:{color:c,drawBorder:!1}}}},y.value={datasets:[{data:[11,16,7,3],backgroundColor:[r.getPropertyValue("--p-indigo-500"),r.getPropertyValue("--p-purple-500"),r.getPropertyValue("--p-teal-500"),r.getPropertyValue("--p-orange-500")],label:"My dataset"}],labels:["Indigo","Purple","Teal","Orange"]},m.value={plugins:{legend:{labels:{color:i}}},scales:{r:{grid:{color:c}}}},v.value={labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",borderColor:r.getPropertyValue("--p-indigo-400"),pointBackgroundColor:r.getPropertyValue("--p-indigo-400"),pointBorderColor:r.getPropertyValue("--p-indigo-400"),pointHoverBackgroundColor:i,pointHoverBorderColor:r.getPropertyValue("--p-indigo-400"),data:[65,59,90,81,56,55,40]},{label:"My Second dataset",borderColor:r.getPropertyValue("--p-purple-400"),pointBackgroundColor:r.getPropertyValue("--p-purple-400"),pointBorderColor:r.getPropertyValue("--p-purple-400"),pointHoverBackgroundColor:i,pointHoverBorderColor:r.getPropertyValue("--p-purple-400"),data:[28,48,40,19,96,27,100]}]},C.value={plugins:{legend:{labels:{fontColor:i}}},scales:{r:{grid:{color:l}}}}}return A([t,o,n],()=>{P()},{immediate:!0}),(r,i)=>{const l=O,c=S;return B(),F(c,{class:"grid grid-cols-12 gap-8"},{default:I(()=>[a("div",z,[a("div",G,[Q,p(l,{type:"line",data:u.value,options:b.value},null,8,["data","options"])])]),a("div",W,[a("div",X,[Y,p(l,{type:"bar",data:f.value,options:_.value},null,8,["data","options"])])]),a("div",Z,[a("div",ee,[te,p(l,{type:"pie",data:d.value,options:h.value},null,8,["data","options"])])]),a("div",re,[a("div",oe,[ae,p(l,{type:"doughnut",data:d.value,options:h.value},null,8,["data","options"])])]),a("div",ne,[a("div",le,[se,p(l,{type:"polarArea",data:y.value,options:m.value},null,8,["data","options"])])]),a("div",ie,[a("div",ce,[pe,p(l,{type:"radar",data:v.value,options:C.value},null,8,["data","options"])])])]),_:1})}}};export{ge as default};
