<template>
  <div>
    <p>Content Editable :</p>
    <contenteditable tag="div" :contenteditable="isEditable" v-model="message" :noNL="noNL" :noHTML="noHTML" :isEditable="isEditable" @returned="enterPressed" @keyup="keyUp" @keypress="keyPress" />
    <form action="">
      <input type="checkbox" id="editable" v-model="isEditable"/><label for="editable">Editable ?</label><br/>
      <input type="checkbox" id="nonl" v-model="noNL"/><label for="nonl">noNL ?</label><br/>
      <input type="checkbox" id="nohtml" v-model="noHTML"/><label for="nohtml">noHTML ?</label><br/>
      <label for="alt">Alternative input :</label>
      <input type="text" id="alt" v-model="message"/>
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

<script>
import { defineComponent, ref } from 'vue';
import contenteditable from 'vue-contenteditable';

export default defineComponent({
  name: 'HelloWorld',
  components : {
    contenteditable
  },
  setup(props){
    const r = {
      isEditable : ref(true),
      noNL : ref(false),
      noHTML : ref(false),
      message : ref(),
      event : ref(''),
      keyUpEv : ref(''),
      keyPressEv : ref(''),
    }
    return {
      ...r,
      enterPressed(ev){
        const currentdate = new Date();
        r.event.value = "Return pressed on: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + "  "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds()
                + " Content : " + ev
      },
      keyUp(ev){
        const currentdate = new Date();
        r.keyUpEv.value = "ev keyup : '"+ev.key+"'";
      },
      keyPress(ev){
        const currentdate = new Date();
        r.keyPressEv.value = "ev keypress : '"+ev.key+"'";
      }

    }
  }
});

</script>
