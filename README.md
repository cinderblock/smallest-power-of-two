# smallest-power-of-two

[![](https://github.com/cinderblock/smallest-power-of-two/workflows/Main/badge.svg) ![](https://github.com/cinderblock/smallest-power-of-two/workflows/Test%20All%20Versions/badge.svg)](https://github.com/cinderblock/smallest-power-of-two/actions)
[![Coverage Status](https://coveralls.io/repos/github/cinderblock/smallest-power-of-two/badge.svg?branch=master)](https://coveralls.io/github/cinderblock/smallest-power-of-two?branch=master)

Simple library to find the smallest power of 2 with magnitude greater than or equal to input, unless 0.

No non-dev dependencies.

## Usage

```bash
npm install --save smallest-power-of-two
# Or yarn
yarn add smallest-power-of-two
# Alternatively, install from Github directly
npm install --save cinderblock/smallest-power-of-two
```

```js
// const smallestPowerOfTwo = require('smallest-power-of-two').default;
import smallestPowerOfTwo from 'smallest-power-of-two';

smallestPowerOfTwo(1); // 1
smallestPowerOfTwo(2); // 2
smallestPowerOfTwo(3); // 4
smallestPowerOfTwo(4); // 4
smallestPowerOfTwo(5); // 8

// 0 is special
smallestPowerOfTwo(0); // 0

// Negative numbers work too!
smallestPowerOfTwo(-5); // -8
```

## Development

### Setup

Assumes VS Code. Insignificant errors if not.

```bash
npm i
```

### Testing

```bash
npm test
```

This will run the jest test suite.

### Formatting

Ensure code is formatted with our style.

```bash
npm run format
```

This is generally unnecessary with "Format On Save" features of most editors.
VS Code should work immediately.

#### REPL

Start a repl with functions `smallestPowerOfTwo` loaded into the running context.

```bash
npm run repl
```

### Versioning and Publishing

Just run any single `npm`/`yarn` version command.

```bash
# Any of these work. Other variations work too.
npm version major
yarn version
yarn version --minor
```

This will automatically run prettier and tests, ensure git worktree is clean, update version number, git commit and tag, build, publish, and git push to origin in a single command.

### Build

Build ES3 and `.d.ts` files from source.
Done automatically before publishing.
Useful for finding bugs in code before committing.

```bash
npm run build
```

## Changelog

### v1.2.0

- Export modules
- Npm@7
