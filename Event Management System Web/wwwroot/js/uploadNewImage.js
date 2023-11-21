
const newImageContainer = document.getElementById("new-image");
const newImageLoader = document.getElementById("new-image-upload-button");

newImageLoader.addEventListener("change", (e)=>{
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) =>{
        const imageUrl = e.target.result;
        newImageContainer.firstElementChild.lastElementChild.firstElementChild.src = imageUrl;
        console.log(imageUrl);
    }
    reader.readAsDataURL(file);
})