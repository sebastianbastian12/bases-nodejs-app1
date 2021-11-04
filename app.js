  //Aplicacion tablas de mutltiplcar//
  //fs.writeFile para grabar texto en un archivo//
  /* fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
      if (err) throw err;
      console.log(`tabla-${base}.txt creado`);
  }); */

  /*Esta es una manera de enviar info desde la consola o terminal
   pero no es la mas eficiente en terminos de posicionamiento de argtos
   const [, , arg3 = 'base=5'] = process.argv;
   const [, base] = arg3.split('=');*/

  //fs.writeFileSync para grabar texto en un archivo//

  const { crearArchivo } = require('./helpers/multiplicar');
  const argv = require('./config/yargs')
  console.clear();
  crearArchivo(argv.b, argv.l, argv.h)
      .then(nombreArchivo => console.log(nombreArchivo))
      .catch(err => console.log(err, 'No se pudo ejecutar codigo'));