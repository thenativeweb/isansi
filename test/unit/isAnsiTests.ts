import ansiStyles from 'ansi-styles';
import { assert } from 'assertthat';
import { isAnsi } from '../../lib/isAnsi';

suite('isAnsi', (): void => {
  test('supports the color and styles of ansi-styles.', async (): Promise<void> => {
    assert.that(isAnsi.reset).is.ofType('function');
    assert.that(isAnsi.bold).is.ofType('function');
    assert.that(isAnsi.dim).is.ofType('function');
    assert.that(isAnsi.italic).is.ofType('function');
    assert.that(isAnsi.underline).is.ofType('function');
    assert.that(isAnsi.inverse).is.ofType('function');
    assert.that(isAnsi.hidden).is.ofType('function');
    assert.that(isAnsi.strikethrough).is.ofType('function');

    assert.that(isAnsi.black).is.ofType('function');
    assert.that(isAnsi.red).is.ofType('function');
    assert.that(isAnsi.green).is.ofType('function');
    assert.that(isAnsi.yellow).is.ofType('function');
    assert.that(isAnsi.blue).is.ofType('function');
    assert.that(isAnsi.magenta).is.ofType('function');
    assert.that(isAnsi.cyan).is.ofType('function');
    assert.that(isAnsi.white).is.ofType('function');
    assert.that(isAnsi.gray).is.ofType('function');
    assert.that(isAnsi.grey).is.ofType('function');
    assert.that(isAnsi.redBright).is.ofType('function');
    assert.that(isAnsi.greenBright).is.ofType('function');
    assert.that(isAnsi.yellowBright).is.ofType('function');
    assert.that(isAnsi.blueBright).is.ofType('function');
    assert.that(isAnsi.magentaBright).is.ofType('function');
    assert.that(isAnsi.cyanBright).is.ofType('function');
    assert.that(isAnsi.whiteBright).is.ofType('function');

    assert.that(isAnsi.bgBlack).is.ofType('function');
    assert.that(isAnsi.bgRed).is.ofType('function');
    assert.that(isAnsi.bgGreen).is.ofType('function');
    assert.that(isAnsi.bgYellow).is.ofType('function');
    assert.that(isAnsi.bgBlue).is.ofType('function');
    assert.that(isAnsi.bgMagenta).is.ofType('function');
    assert.that(isAnsi.bgCyan).is.ofType('function');
    assert.that(isAnsi.bgWhite).is.ofType('function');
    assert.that(isAnsi.bgBlackBright).is.ofType('function');
    assert.that(isAnsi.bgRedBright).is.ofType('function');
    assert.that(isAnsi.bgGreenBright).is.ofType('function');
    assert.that(isAnsi.bgYellowBright).is.ofType('function');
    assert.that(isAnsi.bgBlueBright).is.ofType('function');
    assert.that(isAnsi.bgMagentaBright).is.ofType('function');
    assert.that(isAnsi.bgCyanBright).is.ofType('function');
    assert.that(isAnsi.bgWhiteBright).is.ofType('function');
  });

  test('returns true for a string with the desired color and style.', async (): Promise<void> => {
    const text = `${ansiStyles.green.open}${ansiStyles.bold.open}foo${ansiStyles.bold.close}${ansiStyles.green.close}`;

    assert.that(isAnsi.green(text)).is.true();
    assert.that(isAnsi.bold(text)).is.true();
  });

  test('returns false for a string without the desired color and style.', async (): Promise<void> => {
    const text = `${ansiStyles.red.open}${ansiStyles.italic.open}foo${ansiStyles.italic.close}${ansiStyles.red.close}`;

    assert.that(isAnsi.green(text)).is.false();
    assert.that(isAnsi.bold(text)).is.false();
  });
});
