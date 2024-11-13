const BASE_URL = 'https://anime-facts-rest-api.herokuapp.com/api/v1'

// Show facts on page
const facts = document.querySelector(".facts")
// Whenever they click here a new pic and cat shows up
const button = document.querySelector("button")


async function change() {

  console.log("Hello")

  fetch(`${BASE_URL}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
  
}
