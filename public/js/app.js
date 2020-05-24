//connecting to html elements
const search = document.querySelector('input')
const weatherForm = document.querySelector('form')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')

weatherForm.addEventListener('submit', (e) => {
e.preventDefault() //ne treba da se otvora strana na sekoe go izvrsuva kodot
const location = search.value
messageOne.textContent = 'loading..'
messageTwo.textContent = null
messageThree.textContent = null


//http://localhost:3000
fetch('/weather?adress=' + encodeURIComponent(location) + '').then((response) => {
    response.json().then((data) => {

        if (data.error) {
            messageOne.textContent = data.error
        } else {
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
           messageThree.textContent = data.temperature + ' °C'
        }
      
    })
})
})






/*fetch('http://localhost:3000/weather?adress=' + encodeURIComponent(locatio) + '').then((response) => {
    response.json().then((data) => {
        messageOne.textContent = data.location
    })
})*/

/*weatherForm.addEventListener('submit', (e) => { // ko ke se napravi submit na form se izvrsuva fja
    //const location = search.value
    messageTwo = 'loading..'
    e.preventDefault()
    fetch('http://localhost:3000/weather?adress=' + encodeURIComponent(location) + '').then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageTwo.textContent = data.error   // go menuva tekstot
            } else {
                messageTwo.textContent = data.temperature
            }
        })
    })


})//weatherForm.addEventListener */



//





// original
/*
const search = document.querySelector('input') // se povrzuva so prviot element od html
//const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const weatherForm = document.querySelector('form')




weatherForm.addEventListener('submit', (e) => { // dokolku se napravi submit na formata, ke se izvrsidadenata fja

    e.preventDefault() // da ne pravi reload na page koja ke se pritisni submit, da se izvrsi samo submit

    const location = search.value
    messageTwo.textContent = 'Loading...'

fetch('http://localhost:3000/weather?adress=' + encodeURIComponent(location) + '').then((response) => {
    response.json().then((data) => {
        if (data.error) {
            messageTwo.textContent = data.error   // go menuva tekstot
        } else {
            messageTwo.textContent = data.temperature
        }
    })
})
})*/





//chalenge
/*fetch('http://localhost:3000/weather?adress=Bitola').then((response) => { // so fetch se pravi http request od browser
    response.json().then((data) => {
        if (data.error) {
console.log(data.error)
        } else {
console.log(data.temperature)


        }
    })
})*/