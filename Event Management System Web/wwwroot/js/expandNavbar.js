const expandButton = document.getElementById("expand-navbar");
const navigationBar = document.getElementById("nav-bar")
// const classes = ["fixed", "bg-yellow-600", "text-white","inset-x-0", "inset-y-0", "h-screen", "w-fit", "px-5" ,"py-5", "z-10"]

const navItems = document.querySelectorAll('.nav-item')



expandButton.addEventListener("click", ()=> {
    navigationBar.classList.toggle("inset-x-0")
    navigationBar.classList.toggle("bg-yellow-600")
    navigationBar.classList.toggle("expanded")
})

window.addEventListener("click", (e)=>{
    if(e.target != expandButton){
        navigationBar.classList.remove("inset-x-0")
        navigationBar.classList.remove("bg-yellow-600")
    }
    
})


//  px-4 on nav element
//  fixed, bg-red-500, inset-x-0, inset-y-0, h-screen, w-fit, px-5, py-5, z-10 for mobile