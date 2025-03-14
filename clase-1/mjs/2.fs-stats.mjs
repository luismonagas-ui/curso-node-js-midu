/** @format */

import { statSync } from 'node:fs';

const stats = statSync('./archivo.txt');

console.log(
  stats.isFile(), // si es un fichero
  stats.isDirectory(), // si es un directorio
  stats.isSymbolicLink(), // si es un enlace simmbólico
  stats.size // si es un fichero
);
