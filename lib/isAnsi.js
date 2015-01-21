'use strict';

var chalk = require('chalk');

var isAnsi = {};

Object.keys(chalk.styles).forEach(function (style) {
  var styleBegin = chalk.styles[style].open,
      styleEnd = chalk.styles[style].close;

  isAnsi[style] = function (text) {
    var positionBegin = text.indexOf(styleBegin),
        positionEnd = text.indexOf(styleEnd);

    return (positionBegin !== -1) && (positionEnd !== -1) && (positionBegin < positionEnd);
  };
});

module.exports = isAnsi;
