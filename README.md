
# vue-contenteditable

This plugin provides a `<contenteditable/>` element supporting `v-model`. It also provides some (optional) features, like preventing html input and paste, or new lines.

It is inpired by the nice (but limited by design) https://github.com/asconwe/vue-contenteditable-directive .

Contrary to `vue-contenteditable-directive`, this plugin has full support of v-model reactivity.

npm package : https://www.npmjs.com/package/vue-contenteditable

github repository : https://github.com/hl037/vue-contenteditable

## Should you use a content editable ?

The response is generally "no".

But... there are edge cases where neither `<input/>` nor `<textarea>` could suit, for example when you need a dynamic object size to adapt to the user input text's size.

------

## Installation

NOTE : Versions 3.0.0+ are only compatible with VueJS v3+. For VueJS v2, please install the version 1.0.2.

### With a build system

I recommand using pnpm + vite for any vue project. When using another package manager, you could encounter problems due to several Vue instances (errors like "Missing ref owner context"). Nevertheless, this package should work with any package manager.

```
    pnpm add vue-contenteditable
```

or

```
    yarn add vue-contenteditable
```

or

```
    npm install --save vue-contenteditable
```


### (Re)build

The needed files are already provided in `dist/`, but if you want to re-build, simply run :

Install the dependencies :
```
pnpm i
```

Build and typescript declarations:
```
pnpm build
```

### Directely in html

```html
 <script src="contenteditable.umd.js"></script>
```

------

## Global registration

This is optionnal, and I would not do it myself, but you can register the `contenteditable` component globally so that you don't need to import it:

In your `main.js` :

```javascript
import contenteditable from 'vue-contenteditable'
Vue.use(contenteditable)
```

## Usage

For advance usages, please refer to the samples provided in the git repository. There are examples writen in js and ts, one using vue-cli, two using vite.

### SFC Composition style

```javascript
<template>
  <contenteditable tag="div" :contenteditable="isEditable" v-model="message" :no-nl="true" :no-html="true" @returned="enterPressed" />
</template>
 
<script setup>
import { defineProps, ref, computed, onMounted, watch } from 'vue';
import contenteditable from 'vue-contenteditable'; // Not needed it registered globally

const isEditable = ref(true);
const message = ref("hello")

function enterPressed(){
  alert('Enter Pressed');
}
</script>
```

### Option style

```javascript
<template>
  <contenteditable tag="div" :contenteditable="isEditable" v-model="message" :no-nl="true" :no-html="true" @returned="enterPressed" />
</template>
 
<script>
import contenteditable from 'vue-contenteditable'; // Not needed it registered globally
export default {
  components : {
    contenteditable
  }, // Not needed it registered globally
  data() {
    return {
      isEditable: true,
      message: "hello"
    }
  },
  methods : {
    enterPressed(){
      alert('Enter Pressed');
    }
  }
}
</script>
```


### Props

Prop name | Type | Default | Description
----------|------|---------|------------
`tag` | `String` | `"div"` | Html element type (`p`, `div`...)
`v-model` | `String` | | `v-model` as usually used with `<input/>` and `<textarea/>`
`contenteditable` | `Boolean` | `true` | Forwarded to DOM's `contenteditable` https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/contentEditable.
`no-html` | `Boolean` | `true` | Prevent insertion (either typed or pasted) of html text
`no-nl` | `Boolean` | `false` | Prevent insertion of new-lines. Also activate `returned` event emission

### Events

`returned`
  When the user press <kbd>⏎</kbd> and `no-nl` is set, then it emits the `returned` event with the current value (as a `String`) as argument.

  All js events on the element can be transparantly listened to (the sample projects provide an example).

## Changelogs

### 4.0.2
  
  * Add String as contenteditable type (To support non-standard values)

### 4.0.0

  * API **breaking** change : `noNL` and `noHTML` renamed to `noNl` and `noHtml` to enable using dashed prop names (`no-nl` and `no-html` in templates).
  * Build with vite instead of vue-cli : simpler build and less dev dependencies
  * Smaller package (previous version bundled vue... Oops.

### 3.0.0
  
  * Vue 3 support
  * Typescript support

## License

This code is provided as-is, under the terms of the MIT license (see License file for more details).

A link to the original sources and contribution / pull request is welcome if you enjoy / use / contribute to this module ! :)



