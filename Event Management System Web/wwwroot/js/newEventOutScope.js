//do the same thing but from another pages
const newEventButton = document.getElementById("dialog-button")

    console.log(window.location.href.split("/"), window.location.href.split("/").indexOf("EMS"))
newEventButton.addEventListener('click', (e) => {
    console.log(e.target);
    if (window.location.href.split("/").indexOf("Events") == -1) {
        if (window.location.href.split("/").indexOf("EMS") == -1) { window.location.href = `EMS/Events?fromIndex=true`; }
        else { window.location.href = `Events?fromIndex=true`; }
    }

})

if (window.location.href != "EMS/Events") {
    window.addEventListener("load", (e) => {
        window.history.replaceState({}, "EMS/Events?fromIndex=true", document.querySelector("title").getAttribute("data-href"))
    })
}

