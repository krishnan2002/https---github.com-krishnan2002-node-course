const request = require('request')
const geocode = (address, callback) => {
    const url ="http://api.positionstack.com/v1/forward?access_key=a91e60b2f983c037f4bb15643f508965&query="+encodeURIComponent(address)
    request({url: url,json: true},(error,response) => {
        if (error){
            callback('Unable to connect to location services!',undefined)
        }else{
            callback(undefined,{
                latitude: response.body.data[0].latitude,
                longitude: response.body.data[0].longitude,
                location: response.body.data[0].name
            })
        }
    })
}
module.exports = geocode