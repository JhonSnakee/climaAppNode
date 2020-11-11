


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