
const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f60cd3281a0114e7beb912760f177652&query=' + latitude + ',' + longitude + ''
    request(url, function (error, response, body) { 
    var body = JSON.parse(body)
    if(error) {
        return callback(error, undefined)
    }
    return callback(undefined, {
    city: body.location.name,
    country: body.location.country,
    temperature: body.current.temperature
    })
})
   
}
module.exports = forecast

