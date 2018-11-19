//Importar axios
const axios = require("axios");


const getLugarLatLng = async(direccion) => {


    //Lugar que pasamos por parámetro, encodeURI lo convierte en parte de url amigable
    let encodedURL = encodeURI(direccion);

    //Version con async y await

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=AIzaSyA5mjCwx1TRLuBAjwQw84WE6h5ErSe7Uj8`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    let location = resp.data.results[0];
    let coords = location.geometry.location;



    //Promesa con axios para obtener los datos por json

    //Versión con axious promesa
    /* axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=AIzaSyA5mjCwx1TRLuBAjwQw84WE6h5ErSe7Uj8`)
        .then(resp => {

            //Con el stringify vemos los arrays y los objetos que nos devuelve y no "array [Array] como es por defecto"
            //  console.log(JSON.stringify(resp.data, undefined, 2));

            let location = resp.data.results[0];
            let coords = location.geometry.location;
            console.log("Dirección: ", location.formatted_address);
            console.log("Latitud: ", coords.lat);
            console.log("Longitud: ", coords.lng);

        })
        .catch(e => console.log("error " + e));
*/
    return {
        direccion: location.formatted_address,
        lat: coords.lat,
        lng: coords.lng
    }
}

module.exports = {
    getLugarLatLng
}