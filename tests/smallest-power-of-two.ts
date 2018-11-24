import smallestPowerOfTwo from '../src/smallest-power-of-two';

test('Function loads', () => {
  expect(typeof smallestPowerOfTwo).toBe('function');
});

test('Called with no arguments', () => {
  const f = smallestPowerOfTwo as () => number;
  expect(f).toThrowError(TypeError('Invalid type: undefined'));
});
