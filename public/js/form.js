// Uploading Image to Cloudinary API & Retrieving URL
const apiKey = "xarndlhb"
const file = document.getElementById("file")
const img = document.getElementById("img")
const url = document.getElementById("image_url")
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
    })
});