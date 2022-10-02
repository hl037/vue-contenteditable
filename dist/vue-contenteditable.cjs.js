"use strict";var l=require("vue");const s=l.defineComponent({__name:"contenteditable",props:{tag:String,contenteditable:{type:[Boolean,String],default:!0},modelValue:String,noHtml:{type:Boolean,default:!0},noNl:{type:Boolean,default:!1}},emits:{returned:String,"update:modelValue":String},setup(u,{emit:d}){const n=u;function i(e,t,o){return e.split(t).join(o)}const a=l.ref();function c(){return n.noHtml?a.value.innerText:a.value.innerHTML}function r(e){n.noHtml?a.value.innerText=e:a.value.innerHTML=e}function f(e){d("update:modelValue",c())}function m(e){e.preventDefault();let t=(e.originalEvent||e).clipboardData.getData("text/plain");n.noNl&&(t=i(t,`\r
`," "),t=i(t,`
`," "),t=i(t,"\r"," ")),window.document.execCommand("insertText",!1,t)}function p(e){e.key=="Enter"&&n.noNl&&(e.preventDefault(),d("returned",c()))}return l.onMounted(()=>{var e;r((e=n.modelValue)!=null?e:"")}),l.watch(()=>n.modelValue,(e,t)=>{e!=c()&&r(e!=null?e:"")}),l.watch(()=>n.noHtml,(e,t)=>{var o;r((o=n.modelValue)!=null?o:"")}),l.watch(()=>n.tag,(e,t)=>{var o;r((o=n.modelValue)!=null?o:"")},{flush:"post"}),(e,t)=>(l.openBlock(),l.createBlock(l.resolveDynamicComponent(u.tag),{contenteditable:u.contenteditable,onInput:f,onBlur:f,onPaste:m,onKeypress:p,ref_key:"element",ref:a},null,40,["contenteditable"]))}});module.exports=s;
