const newEventButton2 = document.getElementById("dialog-button")

console.log(window.location.href.split("/"), window.location.href.split("/").indexOf("Admin"))
newEventButton2.addEventListener('click', (e) => {
    console.log(e.target);
    if (window.location.href.split("/").indexOf("Events") == -1) {
        if (window.location.href.split("/").indexOf("Admin") == -1) { window.location.href = `Admin/Events?fromIndex=true`; }
        else { window.location.href = `Admin?fromIndex=true`; }
    }

})

if (window.location.href != "Admin/Events") {
    window.addEventListener("load", (e) => {
        window.history.replaceState({}, "Admin/Events?fromIndex=true", document.querySelector("title").getAttribute("data-href"))
    })
}

