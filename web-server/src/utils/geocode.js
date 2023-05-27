// const request = require('request')
// const geocode = (address, callback) => {
//     const url ="http://api.positionstack.com/v1/forward?access_key=a91e60b2f983c037f4bb15643f508965&query="+encodeURIComponent(address)
//     request({url: url,json: true},(error,response) => {
//         if (error){
//             callback('Unable to connect to location services!',undefined)
//         }else{
//             callback(undefined,{
//                 latitude: response.body.data[0].latitude,
//                 longitude: response.body.data[0].longitude,
//                 location: response.body.data[0].name
//             })
//         }
//     })
// }
// module.exports = geocode
const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode