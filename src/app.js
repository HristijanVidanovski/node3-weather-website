// serverot celo vreme e aktiven, za da se deaktivira treba vo terminal  ctrl c
// za da se aktivira aplikacija od folder node src/app.js
//nodemon src/app.js -e js,hbs -- aktiviranje nodemon so hbs 

const express = require('express')
const hbs = require('hbs')
const path = require('path')
const app = express()

//geocode and forecast
const request = require('request')
 const geocode = require('./utils/geocode')
 const forecast = require('./utils/forecast')

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))


const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)



app.get('', (req, res) => {    // route do index.hbs
    res.render('index', {
        title: 'Weather',
        name: 'Hristijan',

    } )
})

app.get('/about', (req, res) => {// route do about.hbs
res.render('about', {
    title: 'About me',
    name: 'Hristijan',
})
})

app.get('/help', (req, res) => { // route do help.hbs
res.render('help', {
    name:'Hristijan',
    title: 'Help'
})
})

//web server// nema weather strana/preku js treba da se prati do 
app.get('/weather', (req, res) => {
    
if (req.query.adress) {
    geocode(req.query.adress, (error, { location, longitude, latitude } = {}) => { //locationData se zamenva so destructuring na obejct

        if (error) {
           return res.send({error: error})
        } 
        forecast(longitude,latitude, (error, { weather_descriptions, temperature } = {}) => { // location daata ne se koristi oti ke ima destructuring
           //forecastData se zamenva so destructuring
           if (error) {
              return res.send({error: error})
           }

           return res.send({
               location: location,
               forecast: weather_descriptions,
               temperature: temperature
           })

           })
    
          })
} else {
res.send({error: 'Please provide location'})
}  
})
console.log('test')

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})









//original
/*
// geocode and forecast response
app.get('/weather', (req, res) => {

    if (!req.query.adress) {
        return res.send({
            error: 'you must provide Location'
        })
    }

    geocode(req.query.adress, (error, { location, longitude, latitude } = {}) => { 
     
        if (error) {return res.send({ error})} 

        forecast(longitude,latitude, (error, { weather_descriptions, temperature } = {}) => { 
        
            if (error) {return res.send({error})} 
         
            return res.send({//rs
                adress: req.query.adress,
                location: location,
                weather_descriptions:  weather_descriptions,
                temperature: temperature
            })//rs


           })//forecast
    
          })//geocode
}) // end of get

/*



















/*app.get('*', (req, res) => { // route if page not found
    res.render('404', {
        name: 'Hristijan',
        title: '404',
        errorMessage: 'Page not found'
    })
})*/

/*
app.get('/products', (req, res) => {
    if (!req.query.search) {  // ako nema vo search vneseno
       return res.send({
            error: 'You must provide a search term'
        })
    }
    console.log(req.query.search)
res.send({
    products: [] //empry object
})
})
*/


















/*

//original
const path = require('path') // ne se instalira oti e node core module
const express = require('express')
const hbs = require('hbs')
const app = express()




// define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialspath = path.join(__dirname, '../templates/partials') //go nasocuva handlebar kon directory


//setup handlebars engine and views location
app.set('view engine', 'hbs' ) //arg1-express setting, arg2-value
app.set('views', viewsPath)
hbs.registerPartials(partialspath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))// so express se praj do koj folder da se napraj serve up

app.get('', (req, res) => {// setting route za index.hbs(dynamic template)
res.render('index', {
title: 'weather ',
name: 'Hristijan'
})//go serve index.hbs, so vtoriot argument se prakat vrednosti do dynamic page
})
//set-setirnje value za express setting


app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Hristijan'
    })
})// rpute za about.nbs dynamic page

app.get('/help', (req, res) => {
res.render('help', {
    helptext: 'Help text',
    title: 'HELP',
    name: 'Hristijan'
})
})//route za help.hbs duynamic page

app.get('/help/*', (req, res) => {//ako vo baraniot link ima help
res.render('404', {
    title: '404',
    name: 'Hristijan',
    errorMessage: 'article not found'
})
})


app.get('*', (req, res) => { //strana koja se pojavuva dokolku ne postoi baranata
//res.send(' my 404 page')
res.render('404', {
    title: '404',
    name: 'Hristijan',
    errorMessage: 'page not not found'
})
})


app.listen(3000, () => { // ednase pisi i se povikuva serverot da raboti, 3000 e port, mozi i fja da  se povika
    console.log('server is up on port 3000')
})*/



//static web
















//console.log(__dirname) // name of directory of script
//console.log(__filename)// name of file of script
//console.log(path.join(__dirname, '../public'))//path.join go povrzva linkot vo edna recenica. so ../ odi nanazad vo folderot
// path do public folder



/*
app.get('/help', (req, res) => {    // '/help' route do sakana strana
    res.send({//sending json-express go prepozna object i go praka kako strigify
        name: 'Hris', 
        age:27
    })

}) */
/*
app.get('/about', (req, res) => { // get kazva so da se napravi koga user ke otvori route
res.send('<h1>weather</h1>')
})*/
/*
app.get('/weather', (req, res) => {
    res.send({
        location: 'Bitola',
        forecast: 'Sunny'

    })
})*/

/*app.get('', (req, res) => {//route do strana, ne se pisi nisto oti e home page, nema/ /
    // prviot argument od fja sodrzi object so podatoci za request
    //vtoriot od fja sodrzi metodi za sto ke se prati to requestorot
    res.send('<h1 style = "color:blue">weather</h1>') // sending html
})*/