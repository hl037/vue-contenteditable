<template>
  <div>
    <p>Content Editable :</p>
    <contenteditable :tag="tag" :contenteditable="isEditable" v-model="message" :no-nl="noNL" :no-html="noHTML" @returned="enterPressed" @keyup="keyUp" @keypress="keyPress" />
    <form action="">
      <input type="checkbox" id="editable" v-model="isEditable"/><label for="editable">Editable ?</label><br/>
      <input type="checkbox" id="nonl" v-model="noNL"/><label for="nonl">noNL ?</label><br/>
      <input type="checkbox" id="nohtml" v-model="noHTML"/><label for="nohtml">noHTML ?</label><br/>
      <label for="alt">Alternative input :</label>
      <input type="text" id="alt" v-model="message"/><br/>
      <label for="alt">Element type (tag prop) :</label>
      <input type="text" id="tag" v-model="tag"/>
    </form>
      <p>Content :</p>
      <p>{{message}}</p>
      <p>"returned" Event :</p>
      <p>{{event}}</p>
      <p>"keyUp" Event (directly set on the element) :</p>
      <p>{{keyUpEv}}</p>
      <p>"keyPress" Event (caught and re-emitted) :</p>
      <p>{{keyPressEv}}</p>
      
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue';
import contenteditable from 'vue-contenteditable';

const isEditable = ref(true);
const noNL = ref(false);
const noHTML = ref(false);
const message = ref('');
const event = ref('');
const keyUpEv = ref('');
const keyPressEv = ref('');
const tag = ref('div');
  
function enterPressed(ev: any){
  const currentdate = new Date();
  event.value = "Return pressed on: " + currentdate.getDate() + "/"
          + (currentdate.getMonth()+1)  + "/" 
          + currentdate.getFullYear() + "  "  
          + currentdate.getHours() + ":"  
          + currentdate.getMinutes() + ":" 
          + currentdate.getSeconds()
          + " Content : " + ev
}

function keyUp(ev: any){
  const currentdate = new Date();
  keyUpEv.value = "ev keyup : '"+ev.key+"'";
}

function keyPress(ev: any){
  const currentdate = new Date();
  keyPressEv.value = "ev keypress : '"+ev.key+"'";
}

</script>
