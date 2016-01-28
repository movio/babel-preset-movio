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
