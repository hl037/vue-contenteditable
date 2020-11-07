<template>
  <component
    :is="tag"
    :contenteditable="contenteditable"
    @input="update"
    @blur="update"
    @paste="onPaste"
    @keypress="onKeypress"
    @keydown="fwdEv"
    @keyup="fwdEv"
    @mouseenter="fwdEv"
    @mouseover="fwdEv"
    @mousemove="fwdEv"
    @mousedown="fwdEv"
    @mouseup="fwdEv"
    @auxclick="fwdEv"
    @click="fwdEv"
    @dblclick="fwdEv"
    @contextmenu="fwdEv"
    @wheel="fwdEv"
    @mouseleave="fwdEv"
    @mouseout="fwdEv"
    @select="fwdEv"
    @pointerlockchange="fwdEv"
    @pointerlockerror="fwdEv"
    @dragstart="fwdEv"
    @drag="fwdEv"
    @dragend="fwdEv"
    @dragenter="fwdEv"
    @dragover="fwdEv"
    @dragleave="fwdEv"
    @drop="fwdEv"
    @transitionstart="fwdEv"
    @transitioncancel="fwdEv"
    @transitionend="fwdEv"
    @transitionrun="fwdEv"
    @compositionstart="fwdEv"
    @compositionupdate="fwdEv"
    @compositionend="fwdEv"
    @cut="fwdEv"
    @copy="fwdEv"
    ref="element"
  >
  </component>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "@vue/composition-api";

function replaceAll(str, search, replacement) {
  return str.split(search).join(replacement);
}

export default defineComponent({
  props: {
    tag: { type: String, default: "div" },
    value: { type: String, default: "" },
    contenteditable: {
      type: Boolean,
      default: true
    },
    noHTML: {
      type: Boolean,
      default: true
    },
    noNL: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const element = ref(null);
    function current_content() {
      return props.noHTML ? element.value.innerText : element.value.innerHTML;
    }
    function update_content(newcontent) {
      if (props.noHTML) {
        element.value.innerText = newcontent;
      } else {
        element.value.innerHTML = newcontent;
      }
    }
    function update(event) {
      context.emit("input", current_content());
    }
    function onPaste(event) {
      event.preventDefault();
      let text = (event.originalEvent || event).clipboardData.getData(
        "text/plain"
      );
      if (props.noNL) {
        text = replaceAll(text, "\r\n", " ");
        text = replaceAll(text, "\n", " ");
        text = replaceAll(text, "\r", " ");
      }
      window.document.execCommand("insertText", false, text);
      fwdEv(event);
    }
    function onKeypress(event) {
      if (event.key == "Enter" && props.noNL) {
        event.preventDefault();
        context.emit("returned", current_content);
      }
      fwdEv(event);
    }
    function fwdEv(event) {
      context.emit(event.type, event);
    }
    onMounted(() => update_content(props.value));

    watch(
      () => props.value,
      newval => {
        if (newval != current_content()) {
          update_content(newval);
        }
      }
    );
    return { element, update, update_content, onKeypress, onPaste, fwdEv };
  }
});
</script>

<style scoped></style>
