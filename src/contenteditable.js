import c from './contenteditable.vue'

const contenteditable = {
  install(Vue){
    Vue.component(c.name, c)
  }
}

let GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
}
if (GlobalVue) {
    GlobalVue.use(contenteditable);
}

export default contenteditable

