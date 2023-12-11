//const expandButton = document.getElementById("expand-navbar");
//const navigationBar = document.getElementById("nav-bar")
// const classes = ["fixed", "bg-yellow-600", "text-white","inset-x-0", "inset-y-0", "h-screen", "w-fit", "px-5" ,"py-5", "z-10"]

//const navItems = document.querySelectorAll('.nav-item')



document.getElementById("expand-navbar").addEventListener("click", ()=> {
    document.getElementById("nav-bar").classList.toggle("inset-x-0")
    document.getElementById("nav-bar").classList.toggle("bg-yellow-600")
    document.getElementById("nav-bar").classList.toggle("expanded")
})

window.addEventListener("click", (e)=>{
    if (e.target != document.getElementById("expand-navbar")){
        document.getElementById("nav-bar").classList.remove("inset-x-0")
        document.getElementById("nav-bar").classList.remove("bg-yellow-600")
    }
    
})


//  px-4 on nav element
//  fixed, bg-red-500, inset-x-0, inset-y-0, h-screen, w-fit, px-5, py-5, z-10 for mobile