const yargs = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es el numero base para multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla de multiplicar en consola'
    })
    .option('h', {
        alias: 'limite',
        type: 'number',
        default: 10,
        describe: 'Numero de veces que la base sera multiplicada'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw `La base debe ser un numero y no un string`;
        }
        return true;
    })
    .argv;


module.exports = yargs;