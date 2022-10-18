// Defining Variables for Cloudinary API & Changing image in ProductUpload Handlebar
const apiKey = "xarndlhb"
const file = document.getElementById("file")
const img = document.getElementById("img")
const url = document.getElementById("image_url")
let storedData

file.addEventListener("change", ev => {
    const formdata = new FormData()
    formdata.append("file", ev.target.files[0])
    formdata.append("upload_preset", apiKey)
    fetch("https://api.cloudinary.com/v1_1/dj6n2zg0o/image/upload", {
        method: "post",
        body: formdata
    }).then(data => data.json()).then(data => {
        img.src = data.url
        url.innerText = data.url
        // Need to get image_url variable to newFormHandler function
        storedData = data
        console.log(storedData)
        return data.url
    })
});



// Form event listner - above was working
const newFormHandler = async (event) => {
    event.preventDefault();

    const {url} = storedData
    // const image_url = storedData.url
    // From Mini Project
    const name = document.querySelector('#name').value.trim();
    const initial_price = document.querySelector('#initial_price').value.trim();
    const description = document.querySelector('#description').value.trim();

    // Something is wrong with the fetch here. Not sure what. 
    if (name && initial_price && description) {
        // Mini Project - const response = await fetch(`/api/projects`,
        const response = await fetch(`/api/products`, {
            method: 'POST',
            // Need to be key value pairs
            body: JSON.stringify({ name, initial_price, description, image_url: url }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to create project');
        }
    }
};

document
  .querySelector('.new-product-form')
  .addEventListener('submit', newFormHandler);