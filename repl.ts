const c = require('repl').start({ ignoreUndefined: true }).context;

import smallestPowerOfTwo from './src/smallest-power-of-two';

c.smallestPowerOfTwo = smallestPowerOfTwo;
