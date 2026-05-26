# smallest-power-of-two

[![npm](https://img.shields.io/npm/v/smallest-power-of-two.svg)](https://www.npmjs.com/package/smallest-power-of-two)
[![CI](https://github.com/cinderblock/smallest-power-of-two/actions/workflows/ci.yml/badge.svg)](https://github.com/cinderblock/smallest-power-of-two/actions/workflows/ci.yml)

Find the smallest power of 2 with magnitude greater than or equal to the input. Zero runtime dependencies, ESM, TypeScript types.

## Install

```bash
npm install smallest-power-of-two
```

## Usage

```ts
import smallestPowerOfTwo from 'smallest-power-of-two';

smallestPowerOfTwo(1);   // 1
smallestPowerOfTwo(2);   // 2
smallestPowerOfTwo(3);   // 4
smallestPowerOfTwo(5);   // 8
smallestPowerOfTwo(124); // 128

smallestPowerOfTwo(0);   // 0 — special case

smallestPowerOfTwo(-5);  // -8 — negatives work too

smallestPowerOfTwo(1.1); // 2 — non-integers are ceil()'d first
```

## API

```ts
function smallestPowerOfTwo(lowerBound: number): number;
```

- Returns `0` for input `0` (and `-0`).
- Returns the smallest power of two `>= lowerBound` for positive inputs.
- For negatives, returns `-smallestPowerOfTwo(-lowerBound)`.
- Throws `TypeError` for non-numbers.
- Accuracy bounded by `Number.MAX_SAFE_INTEGER`; inputs beyond `2^53` may saturate.

## v2.0.0 — breaking change vs v1

v2 is **ESM only** (`"type": "module"`, `"exports"` field). If you need CommonJS interop, stay on v1.2.7. The function shape and behavior are unchanged.

## License

ISC — see [LICENSE](./LICENSE).
