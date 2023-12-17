const searchEventInput = document.getElementById("searchEventInput");
let events = document.getElementById("events").children;

searchEventInput.addEventListener("input", () => {
    let o = 0;
    [...events].forEach(event => {
        let eventHeader = event.lastElementChild.firstElementChild.firstElementChild.innerText;
        if (eventHeader.includes(searchEventInput.value)) {
            event.classList.remove('hidden')
            o++
        }

        else {
            event.classList.add("hidden")
        }
    });
    console.log(o);
    if (o == 0) {
        document.getElementById("Empty").innerText = "No events matched... Search again";
    }
    else {
        document.getElementById("Empty").innerText = "";
    }
})