(function(n,i){typeof exports=="object"&&typeof module!="undefined"?module.exports=i(require("vue")):typeof define=="function"&&define.amd?define(["vue"],i):(n=typeof globalThis!="undefined"?globalThis:n||self,n.contenteditable=i(n.Vue))})(this,function(n){"use strict";return n.defineComponent({__name:"contenteditable",props:{tag:String,contenteditable:{type:Boolean,default:!0},modelValue:String,noHtml:{type:Boolean,default:!0},noNl:{type:Boolean,default:!1}},emits:{returned:String,"update:modelValue":String},setup(u,{emit:f}){const o=u;function r(e,t,a){return e.split(t).join(a)}const l=n.ref();n.onMounted(()=>{console.log({"element.value":l.value})});function d(){return o.noHtml?l.value.innerText:l.value.innerHTML}function c(e){o.noHtml?l.value.innerText=e:l.value.innerHTML=e}function m(e){f("update:modelValue",d())}function p(e){e.preventDefault();let t=(e.originalEvent||e).clipboardData.getData("text/plain");o.noNl&&(t=r(t,`\r
`," "),t=r(t,`
`," "),t=r(t,"\r"," ")),window.document.execCommand("insertText",!1,t)}function s(e){e.key=="Enter"&&o.noNl&&(e.preventDefault(),f("returned",d()))}return n.onMounted(()=>{var e;c((e=o.modelValue)!=null?e:"")}),n.watch(()=>o.modelValue,(e,t)=>{e!=d()&&c(e!=null?e:"")}),n.watch(()=>o.noHtml,(e,t)=>{var a;c((a=o.modelValue)!=null?a:"")}),(e,t)=>(n.openBlock(),n.createBlock(n.resolveDynamicComponent(u.tag),{contenteditable:u.contenteditable,onInput:m,onBlur:m,onPaste:p,onKeypress:s,ref_key:"element",ref:l},null,40,["contenteditable"]))}})});
