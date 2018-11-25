'use strict';

/**
 * Find the smallest power of 2 with magnitude greater than or equal to input, unless 0.
 *
 * If the input is 0, 0 will be returned.
 *
 * If the input is negative, the result will be negative.
 *
 * @throws TypeError on invalid argument
 *
 * @param lowerBound Arbitrary lower bound
 *
 * @returns A power of 2, positive or negative, or 0. Eg: 0, 1, 2, 4, 8, 128, -4
 */
export default function smallestPowerOfTwo(lowerBound: number): number {
  // Handle bad type
  if (typeof lowerBound != 'number')
    throw TypeError('Invalid type: ' + typeof lowerBound);

  // Handle 0
  if (lowerBound === 0) return 0;

  // Handle negative values
  if (lowerBound < 0) return -smallestPowerOfTwo(-lowerBound);

  // Coerce to integer
  lowerBound = Math.ceil(lowerBound);

  // Find our result
  let i = 1;
  while (lowerBound > i) i *= 2;
  return i;
}
