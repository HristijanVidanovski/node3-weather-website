
const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1c233016f4dc691860dd60959cefd7ea&query=' + latitude + ',' + longitude + ''
   
    request({url, json:true}, (error, {body} = {}) => { //url:url ke tani samo url-shorthand sintaks-url ima vo global
//response se trgna i se pravi object-kako response se vraka samo body
        if (error) {
callback('Unable to connect to network', undefined)
} else if (body.error) { //response.body.error
callback('Unable to find location', undefined)
} else {
callback(undefined, {
   weather_descriptions: body.current.weather_descriptions[0], //response.body.current.weather_descriptions[0],
   temperature:  body.current.temperature,//response.body.current.temperature,
   region: body.location.region//response.body.location.region

})
}
    } )//request end
}// weather end

module.exports = forecast