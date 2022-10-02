import { defineComponent, ref, onMounted, watch, openBlock, createBlock, resolveDynamicComponent } from "vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contenteditable",
  props: {
    "tag": String,
    "contenteditable": {
      type: [Boolean, String],
      default: true
    },
    "modelValue": String,
    "noHtml": {
      type: Boolean,
      default: true
    },
    "noNl": {
      type: Boolean,
      default: false
    }
  },
  emits: {
    "returned": String,
    "update:modelValue": String
  },
  setup(__props, { emit }) {
    const props = __props;
    function replaceAll(str, search, replacement) {
      return str.split(search).join(replacement);
    }
    const element = ref();
    function currentContent() {
      return props.noHtml ? element.value.innerText : element.value.innerHTML;
    }
    function updateContent(newcontent) {
      if (props.noHtml) {
        element.value.innerText = newcontent;
      } else {
        element.value.innerHTML = newcontent;
      }
    }
    function update(event) {
      emit("update:modelValue", currentContent());
    }
    function onPaste(event) {
      event.preventDefault();
      let text = (event.originalEvent || event).clipboardData.getData("text/plain");
      if (props.noNl) {
        text = replaceAll(text, "\r\n", " ");
        text = replaceAll(text, "\n", " ");
        text = replaceAll(text, "\r", " ");
      }
      window.document.execCommand("insertText", false, text);
    }
    function onKeypress(event) {
      if (event.key == "Enter" && props.noNl) {
        event.preventDefault();
        emit("returned", currentContent());
      }
    }
    onMounted(() => {
      var _a;
      updateContent((_a = props.modelValue) != null ? _a : "");
    });
    watch(() => props.modelValue, (newval, oldval) => {
      if (newval != currentContent()) {
        updateContent(newval != null ? newval : "");
      }
    });
    watch(() => props.noHtml, (newval, oldval) => {
      var _a;
      updateContent((_a = props.modelValue) != null ? _a : "");
    });
    watch(() => props.tag, (newval, oldval) => {
      var _a;
      updateContent((_a = props.modelValue) != null ? _a : "");
    }, { flush: "post" });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.tag), {
        contenteditable: __props.contenteditable,
        onInput: update,
        onBlur: update,
        onPaste,
        onKeypress,
        ref_key: "element",
        ref: element
      }, null, 40, ["contenteditable"]);
    };
  }
});
export { _sfc_main as default };
