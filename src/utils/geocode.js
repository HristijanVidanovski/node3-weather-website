

const request = require('request')
const geocode = (adress, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + adress + '.json?access_token=pk.eyJ1IjoiaHJpc3RpamFuMTkiLCJhIjoiY2s5cHgwNzN0MGVtczNpcXBodGJ1cTFqMyJ9.OyAPajPH0fjYC1hFIbK-qg'
    var request = require('request')
    request(url, function (error, response, body) { 
        var body = JSON.parse(body)
        if(error) {
            return callback('Unable to connect to network service', undefined)
        } else if (body.features.length === 0) {
            return callback('Location not found', undefined)
        } else {
            callback(undefined, {
                latitude:body.features[0].center[1], //response.body.features[0].center[1]  //response.body.features[0].center[0]
                longitude: body.features[0].center[0],
                location: body.features[0].place_name //response.body.features[0].place_name
            })
        }            
    })
}
    module.exports = geocode



