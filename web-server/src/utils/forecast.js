// const request = require('request')
// const forecast = (latitude,longitude,callback) =>{
//     const url = "http://api.weatherstack.com/current?access_key=9297c51545e2427cf198f3db5103773d&query="+latitude+","+longitude
//     request({url: url,json: true},(error,response) => {
//         if(error){
//             callback("Unable to connect to weather service",undefined)
//         }else if(response.body.error){
//             callback("Unable to find location",undefined)
//         }else{
//             callback(undefined,response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out.")
//         }
//     })
    
// }
// module.exports=forecast
const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast