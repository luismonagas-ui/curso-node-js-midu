/** @format */

const fs = require('node:fs/promises');

Promise.all([
  fs.readFile('./archivo.txt', 'utf-8'),
  fs.readFile('./archivo2.txt', 'utf-8'),
]).then(([text, secondText]) => {
  console.log('Leyendo el primer archivo...');
  console.log('primer texto:', text);
  console.log('Leyendo el segundo archivo...');
  console.log('segundo texto:', secondText);
});
