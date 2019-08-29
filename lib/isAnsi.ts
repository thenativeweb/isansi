import ansiStyles from 'ansi-styles';
import { EscapeCode } from 'ansi-styles/escape-code';

const isAnsiFactory = (codePair: EscapeCode.CodePair): ((text: string) => boolean) => {
  const styleBegin = codePair.open,
        styleEnd = codePair.close;

  return function (text: string): boolean {
    const positionBegin = text.indexOf(styleBegin),
          positionEnd = text.indexOf(styleEnd);

    return (positionBegin !== -1) && (positionEnd !== -1) && (positionBegin < positionEnd);
  };
};

const isAnsi = {
  reset: isAnsiFactory(ansiStyles.reset),
  bold: isAnsiFactory(ansiStyles.bold),
  dim: isAnsiFactory(ansiStyles.dim),
  italic: isAnsiFactory(ansiStyles.italic),
  underline: isAnsiFactory(ansiStyles.underline),
  inverse: isAnsiFactory(ansiStyles.inverse),
  hidden: isAnsiFactory(ansiStyles.hidden),
  strikethrough: isAnsiFactory(ansiStyles.strikethrough),
  black: isAnsiFactory(ansiStyles.black),
  red: isAnsiFactory(ansiStyles.red),
  green: isAnsiFactory(ansiStyles.green),
  yellow: isAnsiFactory(ansiStyles.yellow),
  blue: isAnsiFactory(ansiStyles.blue),
  magenta: isAnsiFactory(ansiStyles.magenta),
  cyan: isAnsiFactory(ansiStyles.cyan),
  white: isAnsiFactory(ansiStyles.white),
  gray: isAnsiFactory(ansiStyles.gray),
  grey: isAnsiFactory(ansiStyles.grey),
  redBright: isAnsiFactory(ansiStyles.redBright),
  greenBright: isAnsiFactory(ansiStyles.greenBright),
  yellowBright: isAnsiFactory(ansiStyles.yellowBright),
  blueBright: isAnsiFactory(ansiStyles.blueBright),
  magentaBright: isAnsiFactory(ansiStyles.magentaBright),
  cyanBright: isAnsiFactory(ansiStyles.cyanBright),
  whiteBright: isAnsiFactory(ansiStyles.whiteBright),
  bgBlack: isAnsiFactory(ansiStyles.bgBlack),
  bgRed: isAnsiFactory(ansiStyles.bgRed),
  bgGreen: isAnsiFactory(ansiStyles.bgGreen),
  bgYellow: isAnsiFactory(ansiStyles.bgYellow),
  bgBlue: isAnsiFactory(ansiStyles.bgBlue),
  bgMagenta: isAnsiFactory(ansiStyles.bgMagenta),
  bgCyan: isAnsiFactory(ansiStyles.bgCyan),
  bgWhite: isAnsiFactory(ansiStyles.bgWhite),
  bgBlackBright: isAnsiFactory(ansiStyles.bgBlackBright),
  bgRedBright: isAnsiFactory(ansiStyles.bgRedBright),
  bgGreenBright: isAnsiFactory(ansiStyles.bgGreenBright),
  bgYellowBright: isAnsiFactory(ansiStyles.bgYellowBright),
  bgBlueBright: isAnsiFactory(ansiStyles.bgBlueBright),
  bgMagentaBright: isAnsiFactory(ansiStyles.bgMagentaBright),
  bgCyanBright: isAnsiFactory(ansiStyles.bgCyanBright),
  bgWhiteBright: isAnsiFactory(ansiStyles.bgWhiteBright)
};

export default isAnsi;
