const presetLatest = require('babel-preset-latest');
const presetStage1 = require('babel-preset-stage-1');
const presetReact = require('babel-preset-react');
const presetFlow = require('babel-preset-flow');

exports.default = function generatePreset(context, opts = {}) {
  return {
    presets: [
      opts.react !== false && presetReact,
      opts.flow !== false && presetFlow,
      opts.latest !== false && presetLatest(context, opts.latest).presets,
      opts.stage1 !== false && presetStage1,
    ].filter(Boolean),
  };
};

module.exports = exports.default;
