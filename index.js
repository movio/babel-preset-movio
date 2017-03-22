import presetES2015 from 'babel-preset-es2015';
import presetES2016 from 'babel-preset-es2016';
import presetES2017 from 'babel-preset-es2017';
import presetReact from 'babel-preset-react';
import presetFlow from 'babel-preset-flow';
import transformAsyncGeneratorFunctions from 'babel-plugin-transform-async-generator-functions';
import transformClassProperties from 'babel-plugin-transform-class-properties';
import transformExportExtensions from 'babel-plugin-transform-export-extensions';
import transformFunctionBind from 'babel-plugin-transform-function-bind';
import transformObjectRestSpread from 'babel-plugin-transform-object-rest-spread';
import transformRegenerator from 'babel-plugin-transform-regenerator';

export default function (context, opts = {}) {
  return {
    presets: [
      opts.es2015 !== false && [presetES2015.buildPreset, opts.es2015],
      opts.es2016 !== false && presetES2016,
      opts.es2017 !== false && presetES2017,
      opts.react !== false && presetReact,
      opts.flow !== false && presetFlow,
    ],
    plugins: [
      transformAsyncGeneratorFunctions,
      transformClassProperties,
      transformExportExtensions,
      transformFunctionBind,
      transformObjectRestSpread,
      transformRegenerator,
    ],
  };
}
