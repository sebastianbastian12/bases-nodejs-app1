const { archivoResta } = require('./helpers/restar');
console.clear();
let elRestado = 50;
let subtractor = 15;

archivoResta(elRestado, subtractor)
    .then(argto => console.log(argto))
    .catch(err2 => console.log(err2, 'ERROR DE CODIGO!!'));