/** @format */

//objeto process

//recuperar argumentos de entrada por terminal
console.log(process.argv);

//controlar el proceso y su salida
//process.exit(0);

//podemos controlar eventos del proceso
/* process.on('exit', () => {
  //limpiar recursos
}); */

//current working directory
process.cwd();

//platform
console.log(process.env, NODE_ENV);
