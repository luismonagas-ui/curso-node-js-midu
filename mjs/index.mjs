/** @format */

// .js --> por defecto utiliza CommonJS
// .mjs ---> para utlizar ES Modules
// .cjs ---> forzar utlizar CommonJS

import { sum, mult } from './sum.mjs';

console.log(sum(2, 5));

console.log(mult(2, 5));
