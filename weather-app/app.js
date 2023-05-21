const request = require('request')
const url="http://api.weatherstack.com/current?access_key=9297c51545e2427cf198f3db5103773d&query=13.0827,80.2707"

request({url: url},(error,response) => {
    const data = JSON.parse(response.body)
    if (error){
        console.log("Unable to connect to weather service")
    } else if (data.error){
        console.log(data.error)
    }else{
    console.log(data.current.weather_descriptions[0])
    console.log(data.current.temperature)
    console.log(data.current.feelslike)
    }
})

const geocodeURL = "http://api.positionstack.com/v1/forward?access_key=a91e60b2f983c037f4bb15643f508965&query=CHENNAI"
request({url : geocodeURL, json : true}, (error, response) => {
    console.log(response.body.data[0])
})