const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);
    const key = 'AIzaSyAZaQLwRHFIs6LjRCNth9JrChlIodXRsNA';
    const resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=${key}`);

    if (resp.data.results.length === 0){
        throw new Error()
    }

    const data = resp.data.results[0];
    const direccion = data.formatted_address;
    const lat = data.geometry.location.lat;
    const lng = data.geometry.location.lng;

    return{
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}

// const getLugarLatLng = async(dir) => {
//     const encodedUrl = encodeURI(dir);
    
//     const instance = axios.create({
//         baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
//         headers: {
//             "x-rapidapi-key": "76c8e39237msh47fccfb7415cbccp16ad8ejsn8dc0b07bc59c",
//             "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
//             "useQueryString": true
//         }
//     });
    
//     const resp = await instance.get();

//     if (resp.data.Results.length === 0){
//         throw new Error(`No hay resultados para ${dir}`)
//     }
    
//     const data = resp.data.Results[0];
//     const direccion = data.name;
//     const lat = data.lat;
//     const lng = data.lon;

//     return{
//         direccion,
//         lat,
//         lng
//     }
// }