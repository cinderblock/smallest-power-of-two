import { start } from 'repl';

const c = start({ ignoreUndefined: true }).context;

import smallestPowerOfTwo from './src/smallest-power-of-two';

c.smallestPowerOfTwo = smallestPowerOfTwo;
