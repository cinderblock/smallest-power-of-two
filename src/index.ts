/**
 * Smallest power of 2 with magnitude greater than or equal to the input.
 *
 * | input | output |
 * | ----- | ------ |
 * | `0`   | `0`    |
 * | `1`   | `1`    |
 * | `5`   | `8`    |
 * | `124` | `128`  |
 * | `-3`  | `-4`   |
 *
 * - Non-integer inputs are ceil()'d first (so `1.1 → 2`).
 * - Negative inputs return the negative power-of-two (so `-3 → -4`).
 * - Throws `TypeError` for non-numbers.
 *
 * Accuracy is limited by `Number.MAX_SAFE_INTEGER` — inputs beyond `2^53`
 * may saturate at `Infinity`.
 */
export default function smallestPowerOfTwo(lowerBound: number): number {
  if (typeof lowerBound !== 'number') {
    throw new TypeError('Invalid type: ' + typeof lowerBound);
  }

  // `0` and `-0` both return `0`.
  if (lowerBound === 0) return 0;

  if (lowerBound < 0) return -smallestPowerOfTwo(-lowerBound);

  lowerBound = Math.ceil(lowerBound);

  let i = 1;
  while (lowerBound > i) i *= 2;
  return i;
}
