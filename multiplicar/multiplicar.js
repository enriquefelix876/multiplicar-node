const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {

            reject(`El valor introducido '${base}' no es un número`);
            return;

        } else if (!Number(limite)) {
            reject(`El valor introducido '${limite}' no es un número`)
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base*i}\n`;
        }

        data = new Uint8Array(Buffer.from(data));

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
}

let listarTabla = (base, limite) => {

    console.log('========================='.green);
    console.log(`Tabla del ${base}`.green);
    console.log('========================='.green);

    return new Promise((resolve, reject) => {

        if (!Number(base)) {

            reject(`El valor introducido '${base}' no es un número`);
            return;

        } else if (!Number(limite)) {
            reject(`El valor introducido '${limite}' no es un número`)
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base*i}\n`;
        }

        resolve(data);

    });

}

module.exports = {

    crearArchivo,
    listarTabla

}