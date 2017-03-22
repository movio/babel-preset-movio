const presetLatest = require('babel-preset-latest');
const presetStage2 = require('babel-preset-stage-2');
const presetReact = require('babel-preset-react');
const presetFlow = require('babel-preset-flow');
const transformExportExtensions = require('babel-plugin-transform-export-extensions');

exports.default = function generatePreset(context, opts = {}) {
  return {
    presets: [
      opts.react !== false && presetReact,
      opts.flow !== false && presetFlow,
      opts.latest !== false && [presetLatest(context, opts.latest)],
      opts.stage2 !== false && presetStage2,
    ].filter(Boolean),
    plugins: [
      transformExportExtensions,
    ],
  };
};

module.exports = exports.default;
