const lugar = require("./lugar/lugar");
const clima = require('./clima/clima');
//Para obtener los parámetros pasados por comando
const argv = require("yargs").options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


let getInfo = async(direccion) => {

    try {
        let coords = await lugar.getLugarLatLng(direccion);
        let temperatura = await clima.getClima(coords.lat, coords.lng);

        return `La temperatura en ${coords.direccion} es de ${temperatura}`;
    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`;
    }

}

getInfo(argv.direccion).then(resp => console.log(resp)).catch(e => console.log(e));

//lugar.getLugarLatLng(argv.direccion).then(resp => console.log(resp)).catch(e => console.log(e));
//clima.getClima(9.90, -84.09).then(resp => console.log(resp)).catch(e => console.log(e));