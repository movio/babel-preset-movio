const presetES2015 = require('babel-preset-es2015');
const presetES2016 = require('babel-preset-es2016');
const presetES2017 = require('babel-preset-es2017');
const presetReact = require('babel-preset-react');
const presetFlow = require('babel-preset-flow');
const transformAsyncGeneratorFunctions = require('babel-plugin-transform-async-generator-functions');
const transformClassProperties = require('babel-plugin-transform-class-properties');
const transformExportExtensions = require('babel-plugin-transform-export-extensions');
const transformFunctionBind = require('babel-plugin-transform-function-bind');
const transformObjectRestSpread = require('babel-plugin-transform-object-rest-spread');
const transformRegenerator = require('babel-plugin-transform-regenerator');

module.exports = function generatePreset(context, opts = {}) {
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
};

