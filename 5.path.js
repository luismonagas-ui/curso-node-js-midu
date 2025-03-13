/** @format */

const path = require('node:path');

//barra separadora de carpetas según SO
//console.log(path.sep);

//unir rutas

const filePath = path.join('/content', 'subfolder', 'text.txt');
//console.log(filePath);

const base = path.basename('/tmp/midu-secret-files/password.txt', '.txt');
//console.log(base);

//console.log(__dirname, __filename);

//console.log(process.cwd());

console.log(__dirname, __filename);
