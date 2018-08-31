(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /*# sourceMappingURL=contenteditable.vue.map */"; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();




















































function replaceAll(str, search, replacement) {
  return str.split(search).join(replacement);
}
var c = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{ref:"element",tag:"component",attrs:{"contenteditable":_vm.contenteditable},on:{"input":_vm.update,"blur":_vm.update,"paste":_vm.onPaste,"keypress":_vm.onKeypress,"keydown":_vm.fwdEv,"keyup":_vm.fwdEv,"mouseenter":_vm.fwdEv,"mouseover":_vm.fwdEv,"mousemove":_vm.fwdEv,"mousedown":_vm.fwdEv,"mouseup":_vm.fwdEv,"auxclick":_vm.fwdEv,"click":_vm.fwdEv,"dblclick":_vm.fwdEv,"contextmenu":_vm.fwdEv,"wheel":_vm.fwdEv,"mouseleave":_vm.fwdEv,"mouseout":_vm.fwdEv,"select":_vm.fwdEv,"pointerlockchange":_vm.fwdEv,"pointerlockerror":_vm.fwdEv,"dragstart":_vm.fwdEv,"drag":_vm.fwdEv,"dragend":_vm.fwdEv,"dragenter":_vm.fwdEv,"dragover":_vm.fwdEv,"dragleave":_vm.fwdEv,"drop":_vm.fwdEv,"transitionstart":_vm.fwdEv,"transitioncancel":_vm.fwdEv,"transitionend":_vm.fwdEv,"transitionrun":_vm.fwdEv,"compositionstart":_vm.fwdEv,"compositionupdate":_vm.fwdEv,"compositionend":_vm.fwdEv,"cut":_vm.fwdEv,"copy":_vm.fwdEv}})},staticRenderFns: [],_scopeId: 'data-v-52c9b494',
  name : 'contenteditable',
  props : {
    'tag' : String,
    'contenteditable' : {
      type : Boolean,
      default : true,
    },
    'value' : String,
    'noHTML' : {
      type : Boolean,
      default : true,
    },
    'noNL' : {
      type : Boolean,
      default : false,
    },
  },
  mounted: function mounted(){
    this.update_content(this.value);
  },
  computed : {
  },
  data: function data() {
    return {
    }
  },
  methods : {
    current_content: function current_content(){
      return this.noHTML ? 
        this.$refs.element.innerText
        :
        this.$refs.element.innerHTML;
    },
    update_content: function update_content(newcontent){
      if(this.noHTML) {
        this.$refs.element.innerText = newcontent;
      }
      else {
        this.$refs.element.innerHTML = newcontent;
      }
    },
    update: function update(event) {
      this.$emit('input', this.current_content());
    },
    onPaste: function onPaste(event) {
      event.preventDefault();
      var text = (event.originalEvent || event).clipboardData.getData('text/plain');
      if(this.noNL) {
        text = replaceAll(text, '\r\n', ' ');
        text = replaceAll(text, '\n', ' ');
        text = replaceAll(text, '\r', ' ');
      }
      window.document.execCommand('insertText', false, text);
      this.fwdEv(event);
    },
    onKeypress: function onKeypress(event) {
      if(event.key == 'Enter' && this.noNL) {
        event.preventDefault();
        this.$emit('returned', this.current_content);
      }
      this.fwdEv(event);
    },
    fwdEv: function fwdEv(event){
      this.$emit(event.type, event);
    }
  },
  watch : {
    value: function value(newval, oldval){
      if(newval != this.current_content()){
        this.update_content(newval);
      }
    }
  }
}

var contenteditable = {
  install: function install(Vue){
    Vue.component(c.name, c);
  }
};

var GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
}
if (GlobalVue) {
    GlobalVue.use(contenteditable);
}

export default contenteditable;
