const request = require('request')
const url1 ="http://api.positionstack.com/v1/forward?access_key=a91e60b2f983c037f4bb15643f508965&query=chennai"
    request({url: url1,json: true},(error,response) => {
        console.log(response.body.data[0])
    })
const url ="http://api.weatherstack.com/current?access_key=9297c51545e2427cf198f3db5103773d&query=http://api.weatherstack.com/current?access_key=9297c51545e2427cf198f3db5103773d&query=http://api.weatherstack.com/current?access_key=9297c51545e2427cf198f3db5103773d&query=http://api.weatherstack.com/current?access_key=9297c51545e2427cf198f3db5103773d&query=13.0666,80.2247"
    request({url: url,json: true},(error,response) => {
        console.log(response.body.current)
    })