/** @format */
import { dirname } from 'node:path';

import { createRequire } from 'node:module';

const basePath = dirname(import.meta.url);

const require = createRequire(basePath);

export const readJSON = (path) => require(path);
