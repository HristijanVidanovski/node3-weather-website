
const request = require('request')
const geocode = (adress, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(adress) + '.json?access_token=pk.eyJ1IjoiaHJpc3RpamFuMTkiLCJhIjoiY2s5cHgwNzN0MGVtczNpcXBodGJ1cTFqMyJ9.OyAPajPH0fjYC1hFIbK-qg' // encodeURIComponent(adress) - ako se vnesat !? ke javi greska, vraka string
    request({ url, json:true }, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to network service', undefined) // error dobiva messag za izlez, data e undefined
        } else if (body.features.length === 0) { //(response.body.features.length === 0)
    callback('Location not found', undefined) // za data koga nema nemora da se pisi undefined
        } else {
            callback(undefined, {
                latitude: body.features[0].center[0], //response.body.features[0].center[0]
                longitude: body.features[0].center[1], //response.body.features[0].center[1]
                location: body.features[0].place_name //response.body.features[0].place_name
            })
        }
    })//end of request
    }// end of  geocode function

    
    module.exports = geocode
        
        
    
       
    