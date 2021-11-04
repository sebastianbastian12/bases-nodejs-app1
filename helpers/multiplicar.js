const fs = require('fs');
const crearArchivo = async(base = 5, listar = false, limite = 10) => {

    try {

        let salida = '';
        for (i = 1; i <= limite; i++) {
            salida += `${base} x ${i} = ${base * i} \n`;
        }
        if (listar) {
            console.log('=====================');
            console.log(` Tabla del`, base);
            console.log('=====================');

            console.log(salida);
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            return (`tabla-${base}.txt creado`);
        } else {
            throw 'No hay lista especificada';
        }

    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo
}