const userOptionButton = document.querySelector(".user-options-wrapper");
const userOptionContent = document.querySelector(".user-options")

window.addEventListener("click", (e)=>{
    if(e.target.classList.contains("user-options-wrapper")){
        console.log("TEs");
        userOptionContent.toggleAttribute("clicked")
    }
    else{
        userOptionContent.removeAttribute("clicked")
    }
})