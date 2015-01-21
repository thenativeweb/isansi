'use strict';

var assert = require('assertthat'),
    chalk = require('chalk');

var isAnsi = require('../lib/isAnsi');

suite('isAnsi', function () {
  test('is an object.', function (done) {
    assert.that(isAnsi, is.ofType('object'));
    done();
  });

  test('supports the color and styles of chalk.', function (done) {
    assert.that(isAnsi.bold, is.ofType('function'));
    assert.that(isAnsi.dim, is.ofType('function'));
    assert.that(isAnsi.italic, is.ofType('function'));
    assert.that(isAnsi.underline, is.ofType('function'));
    assert.that(isAnsi.inverse, is.ofType('function'));
    assert.that(isAnsi.hidden, is.ofType('function'));
    assert.that(isAnsi.strikethrough, is.ofType('function'));

    assert.that(isAnsi.black, is.ofType('function'));
    assert.that(isAnsi.red, is.ofType('function'));
    assert.that(isAnsi.green, is.ofType('function'));
    assert.that(isAnsi.yellow, is.ofType('function'));
    assert.that(isAnsi.blue, is.ofType('function'));
    assert.that(isAnsi.magenta, is.ofType('function'));
    assert.that(isAnsi.cyan, is.ofType('function'));
    assert.that(isAnsi.white, is.ofType('function'));
    assert.that(isAnsi.gray, is.ofType('function'));

    assert.that(isAnsi.bgBlack, is.ofType('function'));
    assert.that(isAnsi.bgRed, is.ofType('function'));
    assert.that(isAnsi.bgGreen, is.ofType('function'));
    assert.that(isAnsi.bgYellow, is.ofType('function'));
    assert.that(isAnsi.bgBlue, is.ofType('function'));
    assert.that(isAnsi.bgMagenta, is.ofType('function'));
    assert.that(isAnsi.bgCyan, is.ofType('function'));
    assert.that(isAnsi.bgWhite, is.ofType('function'));

    done();
  });

  test('returns true for a string with the desired color and style.', function (done) {
    var text = chalk.green.bold('foo');

    assert.that(isAnsi.green(text), is.true());
    assert.that(isAnsi.bold(text), is.true());
    done();
  });

  test('returns false for a string without the desired color and style.', function (done) {
    var text = chalk.red.italic('foo');

    assert.that(isAnsi.green(text), is.false());
    assert.that(isAnsi.bold(text), is.false());
    done();
  });
});
