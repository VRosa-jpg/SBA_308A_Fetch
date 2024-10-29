
console.log("JS IS WORKING")

// Select the elements we are going to use
const button = document.querySelector("#pickYourDog");
const breedInput = document.querySelector("#breedInput");
const imageDiv = document.querySelector("#dogPicture"); // Make sure to use the correct ID with "#"
const middle_class = document.querySelector('.middle')

// Add an event listener to the button
button.addEventListener('click', async () => {
  let breed = breedInput.value;

  try {
    // Make the GET request using axios
    let response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);

    console.log(response); // Log the full response for debugging
    let dogPic = response.data.message; // Access the image URL from the response
    console.log(dogPic); // Log the image URL

    // Now, it must be displayed
    imageDiv.innerHTML = `<img src="${dogPic}" alt="A random dog of breed ${breed}">`;
  } catch (error) {
    console.error("Error fetching dog image:", error); // Log any errors
    imageDiv.innerHTML = "<p>Sorry, we couldn't find a dog image.</p>";
  }
});

middle_class.addEventListener('reload', async () => {
    
})
