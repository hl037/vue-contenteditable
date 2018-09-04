vue-contenteditable
===================

This plugin provides a `<contenteditable/>` element supporting
`v-model`. It also provides some (optional) features, like preventing
html input / paste or new lines.

It is inpired by the nice (but limited by design)
<https://github.com/asconwe/vue-contenteditable-directive> .

Contrary to `vue-contenteditable-directive`, this plugin has full
support of v-model reactivity.

Should you use a content editable ?
-----------------------------------

The response is generally **NO**.

But\... there are edge cases where neither `<input/>` nor `<textarea>`
could suit, for example when you need a dynamic object size to adapt to
user input text size.

Installation
------------

### With a build system

``` {.sourceCode .}
npm install --save vue-contenteditable
```

In your `main.js` :

``` {.sourceCode .javascript}
import contenteditable from 'vue-contenteditable'
Vue.use(contenteditable)
```

### (Re)build

The needed files are already provided in `dist/`, but if you want to re
build, simlply run :

``` {.sourceCode .}
npm run build
```

### Directely in html

``` {.sourceCode .html}
<script src="contenteditable.min.js"></script>
```

Usage
-----

Where you need a `contenteditable` element :

``` {.sourceCode .javascript}
<template>
  <contenteditable tag="div" :contenteditable="isEditable" v-model="message" :noNL="true" @returned="enterPressed" />
</template>

<script>
export default {
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
```

### Props

`tag`

:   `String` Html element type (`p`, `div`\...)

`v-model`

:   `v-model` as usually used with `<input/>` and `<textarea/>`

`:contenteditable`

:   (Default : `true`) Forwarded to DOM\'s
    [contenteditable](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/contentEditable).

`noHTML`

:   (Default : `true`) Prevent insertion (either typed or pasted) of
    html text

`noNL`

:   (Default : `false`) Prevent insertion of new-lines. Also activate
    `returned` event emission

`v-on:...`

:   All comon input DOM events are forwarded, so that you can use `v-on`
    as usual.

### Events

`returned`

:   When the user press :kbd:Return and `noNL` is set, then it emits the
    `returned` event with the current value (as `String`) as argument.

License
-------

This code is provided as-is, under the terms of the MIT license (see
License file for more details).

A link to the original sources and contribution / pull request are
welcome if you enjoy / use / contribute to this module ! :)
