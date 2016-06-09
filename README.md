# babel-preset-movio

> Babel preset recommended at Movio.

## Install

```sh
$ npm install --save-dev babel-preset-movio
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["movio"]
}
```

### Via CLI

```sh
$ babel script.js --presets movio
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["movio"]
});
```

### Plugin list

#### Syntax plugins

- [check-es2015-constants](http://babeljs.io/docs/plugins/check-es2015-constants/)
- [async-functions](http://babeljs.io/docs/plugins/syntax-async-functions/)
- [class-properties](http://babeljs.io/docs/plugins/syntax-class-properties/)
- [jsx](http://babeljs.io/docs/plugins/syntax-jsx/)
- [object-rest-spread](http://babeljs.io/docs/plugins/syntax-object-rest-spread/)


#### Transform plugins

- [es2015-arrow-functions](http://babeljs.io/docs/plugins/transform-es2015-arrow-functions/)
- [es2015-block-scoped-functions](http://babeljs.io/docs/plugins/transform-es2015-block-scoped-functions/)
- [es2015-block-scoping](http://babeljs.io/docs/plugins/transform-es2015-block-scoping/)
- [es2015-classes](http://babeljs.io/docs/plugins/transform-es2015-classes/)
- [es2015-computed-properties](http://babeljs.io/docs/plugins/transform-es2015-computed-properties/)
- [es2015-destructuring](http://babeljs.io/docs/plugins/transform-es2015-destructuring/)
- [es2015-for-of](http://babeljs.io/docs/plugins/transform-es2015-for-of/)
- [es2015-function-name](http://babeljs.io/docs/plugins/transform-es2015-function-name/)
- [es2015-literals](http://babeljs.io/docs/plugins/transform-es2015-literals/)
- [es2015-modules-commonjs](http://babeljs.io/docs/plugins/transform-es2015-modules-commonjs/)
- [es2015-object-super](http://babeljs.io/docs/plugins/transform-es2015-object-super/)
- [es2015-parameters](http://babeljs.io/docs/plugins/transform-es2015-parameters/)
- [es2015-shorthand-properties](http://babeljs.io/docs/plugins/transform-es2015-shorthand-properties/)
- [es2015-spread](http://babeljs.io/docs/plugins/transform-es2015-spread/)
- [es2015-sticky-regex](http://babeljs.io/docs/plugins/transform-es2015-sticky-regex/)
- [es2015-template-literals](http://babeljs.io/docs/plugins/transform-es2015-template-literals/)
- [es2015-typeof-symbol](http://babeljs.io/docs/plugins/transform-es2015-typeof-symbol/)
- [es2015-unicode-regex](http://babeljs.io/docs/plugins/transform-es2015-unicode-regex/)
- [exponentiation-operator](http://babeljs.io/docs/plugins/transform-exponentiation-operator/)
- [export-extensions](http://babeljs.io/docs/plugins/transform-export-extensions/)
- [async-to-generator](http://babeljs.io/docs/plugins/transform-async-to-generator/)
- [object-rest-spread](http://babeljs.io/docs/plugins/transform-object-rest-spread/)
- [strict-mode](http://babeljs.io/docs/plugins/transform-strict-mode/)
- [inline-environment-variables](http://babeljs.io/docs/plugins/transform-inline-environment-variables/)
- [merge-sibling-variables](http://babeljs.io/docs/plugins/transform-merge-sibling-variables/)
- [minify-booleans](http://babeljs.io/docs/plugins/transform-minify-booleans/)
- [react-jsx](http://babeljs.io/docs/plugins/transform-react-jsx/)
- [property-literals](http://babeljs.io/docs/plugins/transform-property-literals/)
- [regenerator](http://babeljs.io/docs/plugins/transform-regenerator/)

- [class-properties](https://babeljs.io/docs/plugins/transform-class-properties/)

**Note** The `regenerator` transform plugin requires either the [Babel Polyfill](http://babeljs.io/docs/usage/polyfill/) or the [regenerator runtime](https://github.com/facebook/regenerator/tree/master/packages/regenerator-runtime) to work.

**Recommended plugins for production** (if using React. Not included in preset)

- [react-constant-elements](http://babeljs.io/docs/plugins/transform-react-constant-elements/)
- [react-inline-elements](http://babeljs.io/docs/plugins/transform-react-inline-elements/)
