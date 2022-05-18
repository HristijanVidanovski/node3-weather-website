
//connecting to html elements
const search = document.querySelector('input')
const weatherForm = document.querySelector('#formWeather')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
weatherForm.addEventListener('submit', (e) => {
e.preventDefault() 
const location = search.value
messageOne.textContent = 'loading..'
messageTwo.textContent = null
messageThree.textContent = null
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




