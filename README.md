
# vue-contenteditable

This plugin provides a `<contenteditable/>` element supporting `v-model`. It also provides some (optional) features, like preventing html input and paste, or new lines.

It is inpired by the nice (but limited by design) https://github.com/asconwe/vue-contenteditable-directive .

Contrary to `vue-contenteditable-directive`, this plugin has full support of v-model reactivity.

New in version 3.0.0 : Typescript support !

## Should you use a content editable ?

The response is generally **NO**.

But... there are edge cases where neither `<input/>` nor `<textarea>` could suit, for example when you need a dynamic object size to adapt to user input text size.

## Installation

NOTE : Version 3.0.0 is only compatible with VueJS v3+. For VueJS v2, please install the version 1.0.2.

### With a build system

```
    npm install --save vue-contenteditable
```

or

```
    yarn add vue-contenteditable
```


In your `main.js` :

```javascript

    import contenteditable from 'vue-contenteditable'
    Vue.use(contenteditable)
```

Or simply register in the `components` field of each component using it. 

### (Re)build

The needed files are already provided in `dist/`, but if you want to re-build, simlply run :

(To install the dependencies)
```yarn```

**Due to a limitation in the vue cli plugin order, you have to manually edit the `package.json` to put the lines :**
```
    "@hl037/vue-cli-plugin-ts-bundler": "hl037/vue-cli-plugin-ts-bundler.git"
```
**At the end of the "devDependencies" object**


```
    yarn build
    yarn bundleDts
```

The last command is for typescript support.

### Directely in html

```html

	 <script src="contenteditable.min.js"></script>
```

## Usage

```javascript
    <template>
      <contenteditable tag="div" :contenteditable="isEditable" v-model="message" :noNL="true" :noHTML="true" @returned="enterPressed" />
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

For advance usages, please refer to the samples provided in the git repository. There is an example written in ts and one in js. These samples demonstrate all the the features of the component.

### Props

Prop name | Type | Default | Description
----------|------|---------|------------
`tag` | `String` | `"div"` | Html element type (`p`, `div`...)
`v-model` | `String` | | `v-model` as usually used with `<input/>` and `<textarea/>`
`contenteditable` | `Boolean` | `true` | Forwarded to DOM's `contenteditable` https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/contentEditable.
`noHTML` | `Boolean` | `true` | Prevent insertion (either typed or pasted) of html text
`noNL` | `Boolean` | `false` | Prevent insertion of new-lines. Also activate `returned` event emission

### Events

`returned`
  When the user press <kbd>⏎</kbd> and `noNL` is set, then it emits the `returned` event with the current value (as a `String`) as argument.

  All js events on the element can be transparantly listened to (the sample projects provide an example).

## License

This code is provided as-is, under the terms of the MIT license (see License file for more details).

A link to the original sources and contribution / pull request is welcome if you enjoy / use / contribute to this module ! :)



