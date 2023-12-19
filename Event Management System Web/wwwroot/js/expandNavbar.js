

window.addEventListener("click", (e) => {
    console.log(e.target == document.getElementById("expand-navbar").firstElementChild, e.target, document.getElementById("expand-navbar").firstElementChild)
    if (e.target != document.getElementById("expand-navbar").firstElementChild) {
        document.getElementById("nav-bar").classList.remove("inset-x-0")
        document.getElementById("nav-bar").classList.remove("bg-yellow-600")
    }
    else if (e.target == document.getElementById("expand-navbar").firstElementChild) {
        document.getElementById("nav-bar").classList.toggle("inset-x-0")
        document.getElementById("nav-bar").classList.toggle("bg-yellow-600")
        document.getElementById("nav-bar").classList.toggle("expanded")
    }

})

