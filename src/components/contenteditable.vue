
<style scoped>

</style>

<template>
  <component
    :is="tag"
    :contenteditable="contenteditable"
    @input="update"
    @blur="update"
    @paste="onPaste"
    @keypress="onKeypress"
    ref="element"
  >
  </component>
</template>

<script lang="ts">


import { defineComponent, ref, computed, onMounted, watch } from 'vue';

function replaceAll(str: string, search: string, replacement: string) {
  return str.split(search).join(replacement);
}

export default defineComponent({
  name : 'contenteditable',
  props : {
    'tag' : String,
    'contenteditable' : {
      type : Boolean,
      default : true,
    },
    'modelValue' : String,
    'noHTML' : {
      type : Boolean,
      default : true,
    },
    'noNL' : {
      type : Boolean,
      default : false,
    },
  },
  emits : {
    'returned' : String,
    'update:modelValue' : String,
  },
  setup(props, {emit} ){
    const element = ref<HTMLElement | null>(null)
    
    function currentContent(){
      return props.noHTML ? 
        element.value!.innerText
        :
        element.value!.innerHTML
    }
    function updateContent(newcontent: string){
      if(props.noHTML) {
        element.value!.innerText = newcontent;
      }
      else {
        element.value!.innerHTML = newcontent;
      }
    }
    function update(event: any) {
      emit('update:modelValue', currentContent());
    }
    function onPaste(event: any) {
      event.preventDefault();
      let text = (event.originalEvent || event).clipboardData.getData('text/plain');
      if(props.noNL) {
        text = replaceAll(text, '\r\n', ' ');
        text = replaceAll(text, '\n', ' ');
        text = replaceAll(text, '\r', ' ');
      }
      window.document.execCommand('insertText', false, text);
    }
    function onKeypress(event: any) {
      if(event.key == 'Enter' && props.noNL) {
        event.preventDefault();
        emit('returned', currentContent());
      }
    }
    onMounted(() =>{
      updateContent(props.modelValue ?? '')
    })
    watch( () => props.modelValue, (newval, oldval) => {
      if(newval != currentContent()){
        updateContent(newval ?? '')
      }
    })
    return {
      update,
      onPaste,
      onKeypress,
      element,
    }
  },
})
</script>

