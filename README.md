# smallest-power-of-two

[![CircleCI](https://circleci.com/gh/cinderblock/smallest-power-of-two.svg?style=svg)](https://circleci.com/gh/cinderblock/smallest-power-of-two) [![Coverage Status](https://coveralls.io/repos/github/cinderblock/smallest-power-of-two/badge.svg?branch=master)](https://coveralls.io/github/cinderblock/smallest-power-of-two?branch=master)

Simple library to find the smallest power of 2 with magnitude greater than or equal to input, unless 0.

No nondev dependencies.

## Usage

```bash
yarn add smallest-power-of-two
```

```js
const smallestPowerOfTwo = require('smallest-power-of-two').default;
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
yarn setup
```

### Testing

```bash
yarn test
```

This will run the jest test suite.

### Formatting

Ensure code is formatted with our style.

```bash
yarn format
```

This is generally unnecessary with "Format On Save" features of most editors.
VS Code should work immediately.

#### REPL

Start a repl with functions `smallestPowerOfTwo` loaded into the running context.

```bash
yarn repl
```

### Versioning and Publishing

Just run any single npm/yarn version command.

```bash
# Any of these work. Other variations work too.
yarn version
yarn version --minor
npm version major
```

This will automatically run prettier and tests, ensure git worktree is clean, update version number, git commit and tag, build, publish, and git push to origin in a single command.

### Build

Build ES3 and `.d.ts` files from source.
Done automatically before publishing.
Useful for finding bugs in code before committing.

```bash
yarn build
```
