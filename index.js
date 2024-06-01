const { registrar, leer } = require ("./operaciones.js");

const [action, id, nombre, edad, tipo, color , enfermedad] = process.argv.slice(2);

if (action === "registrar") {
    registrar( id, nombre, edad, tipo, color, enfermedad);
}

if (action === "leer") {
    leer();
}