const presetES2015 = require('babel-preset-es2015');
const presetES2016 = require('babel-preset-es2016');
const presetES2017 = require('babel-preset-es2017');
const presetStage2 = require('babel-preset-stage-2');
const presetStage3 = require('babel-preset-stage-3');
const presetReact = require('babel-preset-react');
const presetFlow = require('babel-preset-flow');
const transformExportExtensions = require('babel-plugin-transform-export-extensions');

exports.default = function generatePreset(context, opts = {}) {
  return {
    presets: [
      opts.react !== false && presetReact,
      opts.es2015 !== false && [presetES2015.buildPreset, opts.es2015],
      opts.es2016 !== false && presetES2016,
      opts.es2017 !== false && presetES2017,
      opts.flow !== false && presetFlow,
      opts.stage2 !== false && presetStage2,
      opts.stage3 !== false && presetStage3,
    ].filter(Boolean),
    plugins: [
      transformExportExtensions,
    ],
  };
};

module.exports = exports.default;
