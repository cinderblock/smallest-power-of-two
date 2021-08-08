import smallestPowerOfTwo from '../src/smallest-power-of-two';

test('Function loads', () => {
  expect(typeof smallestPowerOfTwo).toBe('function');
});

test('Called with no arguments', () => {
  const f = smallestPowerOfTwo as () => number;
  expect(f).toThrowError(TypeError('Invalid type: undefined'));
});

[
  [0, 0, 'Zero'],
  [-0, 0, 'Negative Zero'],
  [1, 1],
  [2, 2],
  [-1, -1],
  [-2, -2],
  // Test Floats
  [0.1, 1],
  [1.1, 2],
  // Test bigger numbers
  [124, 128],
  [912874, 0x100000],
].forEach(([input, output, msg]) =>
  test(<string>msg || input + ' => ' + output, () => {
    expect(smallestPowerOfTwo(input as number)).toEqual(output);
  }),
);

['test', true, null, {}, [], undefined, Symbol()].forEach(v =>
  test('Called with invalid argument: ' + typeof v, () => {
    const f = smallestPowerOfTwo as (f: unknown) => number;
    expect(() => f(v)).toThrowError(TypeError('Invalid type: ' + typeof v));
  }),
);

// Tests start to fail past 2 ** 53
for (let i = 1; i <= Number.MAX_SAFE_INTEGER /*/ + 1 /**/; i *= 2) {
  const t = i;
  test(`Test power of two to return itself. ${t}`, () => {
    expect(smallestPowerOfTwo(t)).toEqual(t);
  });
  test(`Test negative power of two to return itself. ${-t}`, () => {
    expect(smallestPowerOfTwo(-t)).toEqual(-t);
  });
  const next = i * 2;
  const t1 = t + 1;
  test(`Test power of two plus 1 to return next power of two. ${t1} => ${next}`, () => {
    expect(smallestPowerOfTwo(t1)).toEqual(next);
  });
  test(`Test negative power of two plus 1 to return next power of two. ${-t1} => ${-next}`, () => {
    expect(smallestPowerOfTwo(-t1)).toEqual(-next);
  });
}
