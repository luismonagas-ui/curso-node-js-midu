/** @format */

import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';

const basePath = dirname(fileURLToPath(import.meta.url));
const relativePath = './data/text2.txt';
const dataPath = join(basePath, relativePath);

console.log(dataPath);
const stats = fs.statSync(dataPath);

/* fs.readFile(dataPath, 'utf-8', function (err, data) {
  if (err) {
    console.error('Error al leer el archivo');
    return;
  }
  const arr = data.split('\n');
  arr.forEach(function (v) {
    console.log(v);
  });
}); */
