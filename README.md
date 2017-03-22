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

// With ES2015 preset options
{
  "presets": ["movio", { "es2015": { "modules": false, "loose": true } }]
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

### Preset list

- [ES2015](https://babeljs.io/docs/plugins/preset-es2015/)
- [ES2016](https://babeljs.io/docs/plugins/preset-es2016/)
- [ES2017](https://babeljs.io/docs/plugins/preset-es2017/)
- [React](https://babeljs.io/docs/plugins/preset-react/)
- [Flow](https://babeljs.io/docs/plugins/preset-flow/)

### Plugin list

- [async-generator-functions](https://babeljs.io/docs/plugins/transform-async-generator-functions/)
- [class-properties](https://babeljs.io/docs/plugins/transform-class-properties/)
- [export-extensions](https://babeljs.io/docs/plugins/transform-export-extensions/)
- [function-bind](https://babeljs.io/docs/plugins/transform-function-bind/)
- [object-rest-spread](https://babeljs.io/docs/plugins/transform-object-rest-spread/)
- [regenerator](https://babeljs.io/docs/plugins/transform-regenerator/)

**Note** The `regenerator` transform plugin requires either the [Babel Polyfill](https://babeljs.io/docs/usage/polyfill/) or the [regenerator runtime](https://github.com/facebook/regenerator/tree/master/packages/regenerator-runtime) to work.

