import { expect, test } from 'bun:test';

import smallestPowerOfTwo from './index.js';

test('export shape: default is a function', () => {
  expect(typeof smallestPowerOfTwo).toBe('function');
});

test('called with no arguments throws TypeError', () => {
  const f = smallestPowerOfTwo as () => number;
  expect(() => f()).toThrow(new TypeError('Invalid type: undefined'));
});

const tabulated: Array<[number, number, string?]> = [
  [0, 0, 'zero'],
  [-0, 0, 'negative zero'],
  [1, 1],
  [2, 2],
  [-1, -1],
  [-2, -2],
  // floats are ceil'd first
  [0.1, 1, '0.1 ceils to 1'],
  [1.1, 2, '1.1 ceils to 2 then rounds up to 2'],
  // larger inputs
  [124, 128],
  [912874, 0x100000],
];
for (const [input, output, label] of tabulated) {
  test(label ?? `${input} => ${output}`, () => {
    expect(smallestPowerOfTwo(input)).toBe(output);
  });
}

const bogusInputs: Array<[string, unknown]> = [
  ['string', 'test'],
  ['boolean', true],
  ['object', null], // typeof null === 'object'
  ['object', {}],
  ['object', []],
  ['undefined', undefined],
  ['symbol', Symbol()],
];
for (const [ty, value] of bogusInputs) {
  test(`bogus input typeof=${ty} throws TypeError`, () => {
    const f = smallestPowerOfTwo as (v: unknown) => number;
    expect(() => f(value)).toThrow(new TypeError(`Invalid type: ${ty}`));
  });
}

// Walk every power of two up to MAX_SAFE_INTEGER. Each pwr should be its own
// answer; pwr+1 should jump to the next power.
test('powers of two up to MAX_SAFE_INTEGER are self-fixed; pwr+1 rounds to next', () => {
  for (let i = 1; i <= Number.MAX_SAFE_INTEGER; i *= 2) {
    expect(smallestPowerOfTwo(i)).toBe(i);
    expect(smallestPowerOfTwo(-i)).toBe(-i);

    const next = i * 2;
    if (!Number.isFinite(next)) break;
    expect(smallestPowerOfTwo(i + 1)).toBe(next);
    expect(smallestPowerOfTwo(-(i + 1))).toBe(-next);
  }
});
