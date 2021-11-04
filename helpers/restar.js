const fs = require('fs');
const archivoResta = async(elRestado, subtractor) => {
    try {
        console.log('======================');
        console.log(`Resta de numero 1 al `, subtractor);
        console.log('======================');
        let result = '';
        for (i = 1; i <= subtractor; i++) {
            result += `${elRestado} - ${i} = ${elRestado-i}\n`;
        }
        console.log(result);
        fs.writeFileSync(`Resta-${elRestado}.txt`, result);
        return (`Resta-${elRestado}.txt restado ${subtractor} veces`);


    } catch (error2) {
        throw error2;
    }
}

module.exports = {
    archivoResta
}