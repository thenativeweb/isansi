# isansi

isansi checks whether a string uses ANSI color and style.

## Status

| Category         | Status                                                                                                                                   |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Version          | [![npm](https://img.shields.io/npm/v/isansi)](https://www.npmjs.com/package/isansi)                                                      |
| Dependencies     | ![David](https://img.shields.io/david/thenativeweb/isansi)                                                                               |
| Dev dependencies | ![David](https://img.shields.io/david/dev/thenativeweb/isansi)                                                                           |
| Build            | [![CircleCI](https://img.shields.io/circleci/build/github/thenativeweb/isansi)](https://circleci.com/gh/thenativeweb/isansi/tree/master) |
| License          | ![GitHub](https://img.shields.io/github/license/thenativeweb/isansi)                                                                     |

## Installation

```shell
$ npm install isansi
```

## Quick start

First you need to add a reference to isansi in your application.

```javascript
const isAnsi = require('isansi').default;
```

If you use TypeScript, use the following code instead:

```typescript
import isAnsi from 'isAnsi';
```

To check a string for a specific color or style, use the appropriate function of the `isAnsi` object.

```javascript
const text = chalk.green.bold('foo');

console.log(isAnsi.green(text));  // => true
console.log(isAnsi.bold(text));   // => true

console.log(isAnsi.red(text));    // => false
console.log(isAnsi.italic(text)); // => false
```

The module supports all colors and styles that are supported by [chalk](https://github.com/sindresorhus/chalk).

## Running the build

To build this module use [roboter](https://www.npmjs.com/package/roboter).

```shell
$ npx roboter
```
