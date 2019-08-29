# isansi

isansi checks whether a string uses ANSI color and style.

## Installation

```shell
$ npm install processenv
```

## Quick start

First you need to add a reference to isansi in your application.

```javascript
var isAnsi = require('isansi').default;
```

If you use TypeScript, use the following code instead:

```typescript
import isAnsi from 'isAnsi';
```

To check a string for a specific color or style, use the appropriate function of the `isAnsi` object.

```javascript
var text = chalk.green.bold('foo');

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
