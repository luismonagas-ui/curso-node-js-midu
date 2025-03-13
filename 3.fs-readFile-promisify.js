/** @format */

const fs = require('node:fs');

//El promisify, solo en los módulos nativos
//que no tienen promesas nativas
const { promisify } = require('node:util');

const readFilePromise = promisify(fs.readFile);

console.log('Leyendo el primer archivo...');
readFilePromise('./archivo.txt', 'utf-8').then((text) => {
  console.log('primer texto:', text);
});

console.log('----> Hacer cosas mientras lee eel archivo...');

console.log('Leyendo el segundo archivo...');
readFilePromise('./archivo2.txt', 'utf-8').then((text) => {
  console.log('segundo texto:', text);
});
