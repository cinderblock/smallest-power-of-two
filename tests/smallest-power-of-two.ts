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
].forEach(([input, output, msg]) =>
  test(<string>msg || input + ' => ' + output, () => {
    expect(smallestPowerOfTwo(<number>input)).toEqual(output);
  })
);

[
  'test',
].forEach(v =>
  test('Called with invalid argument: ' + typeof v, () => {
    const f = smallestPowerOfTwo as (f: any) => number;
    expect(() => f(v)).toThrowError(TypeError('Invalid type: ' + typeof v));
  })
);
