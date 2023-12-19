//to upload any image we need two fundemantal variables, image contaienr and image loader


const imageContainer = document.getElementById('new-image-container')
const imageLoader = document.getElementById('image-upload')

imageLoader.addEventListener('change', (e)=> {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e)=> {
        const imageUrl = e.target.result;
        imageContainer.src = imageUrl;
    }
    reader.readAsDataURL(file);
    console.log(reader);
})


const editediImageContainer = document.getElementById('edited-image-container')
const editediImageLoader = document.getElementById('edited-image-upload')

editediImageLoader.addEventListener('change', (e)=> {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e)=> {
        const imageUrl = e.target.result;
        editediImageContainer.src = imageUrl
    }
    reader.readAsDataURL(file);
    console.log(reader);
})

