/** @format */

const fs = require('node:fs/promises');

//Con callback
/* fs.readdir('.', (err, files) => {
  if (err) {
       console.log('Error al leer el directorio: ',err);
      return;;
  }

  files.forEach((file) => {
    console.log(file);
  });
}); */ process.on('exit', () => {
  //limpiar recursos
});

fs.readdir('.')
  .then((files) => {
    for (const file of files) console.log(file);
  })
  .catch((err) => {
    if (err) {
      console.log('Error al leer el directorio: ', err);
      return;
    }
  });

/* //Con asyc - await (para COMMON JS)
const readDirectory = async () => {
  try {
    const files = await fs.readdir('.');
    for (const file of files) {
      console.log(file);
    }
  } catch (err) {
    console.log('Error al leer el directorio: ',err);
      return;
  }
};

readDirectory(); */

//Con asyc - await (para COMMON JS)
/* const readDirectory = async () => {
  try {
    const files = await fs.readdir('.');
    for (const file of files) {
      console.log(file);
    }
  } catch (err) {
     console.log('Error al leer el directorio: ', err);
     return;
  }
};

readDirectory(); */
