const fs = require ("fs")

const fileContent = fs.readFileSync("citas.json", "utf8")
const citasParse = JSON.parse (fileContent)

const registrar = (nombre, edad, tipo, color, enfermedad) => {
    const id = Math.floor(Math.random () * 100).toString();
    if (!nombre || !edad || !tipo || !color || !enfermedad){
        console.error ("Ingresa todos los datos");
        return;
    }

citasParse.push({id, nombre, edad, tipo, color, enfermedad});
fs.writeFileSync ("citas.json", JSON.stringify(citasParse));

}

const leer = () => {
    console.log (citasParse);
}
module.exports = {registrar, leer}