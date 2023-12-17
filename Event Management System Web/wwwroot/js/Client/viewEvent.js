const viewDialog = document.getElementById("view-event-dialog");
const closeViewedEvent = document.getElementById('viewed-event-close-button')

const viewDialogLoad = () => {
    const viewDialogButtons = document.querySelectorAll(".show-button");
    viewDialogButtons.forEach((viewDialogButton)=> {
        viewDialogButton.addEventListener("click", (e)=>{


            const viewedEventHeader = e.target.parentElement.parentElement.firstElementChild.firstElementChild;
            const viewedEventBrief = e.target.parentElement.parentElement.firstElementChild.lastElementChild;
            const viewedEventDate = e.target.parentElement.parentElement.parentElement.getAttribute("event-date");
            const viewedEventTime = e.target.parentElement.parentElement.parentElement.getAttribute("event-time");
            const viewedEventImage = e.target.parentElement.parentElement.parentElement.firstElementChild.firstElementChild;
            const viewedEventLocation = e.target.parentElement.parentElement.parentElement.getAttribute("data-viewedEvent-location")



            const viewDialogHeader = document.querySelector(".viewed-event-title").lastElementChild;
            const viewDialogBrief = document.querySelector(".viewed-event-brief h3");
            const viewDialogDate = document.querySelector(".viewed-event-date").lastElementChild;
            const viewDialogTime = document.querySelector(".viewed-event-time").lastElementChild;
            const viewDialogImage = document.querySelector(".viewed-event-image");
            const viewDialogLocation = document.querySelector(".viewed-event-location").lastElementChild;


            viewDialogHeader.textContent = viewedEventHeader.textContent;
            viewDialogBrief.textContent = viewedEventBrief.textContent;
            viewDialogDate.textContent = viewedEventDate;
            viewDialogTime.textContent = viewedEventTime;
            viewDialogImage.src = viewedEventImage.src;
            viewDialogLocation.href = viewedEventLocation;
            viewDialogLocation.textContent = "";
            /*(viewedEventLocation.split("/")[5].split("+")).join(" ");*/





            viewDialog.showModal()
            viewDialog.removeAttribute("close")
            console.log(viewDialogButton);
        })
    })

    closeViewedEvent.addEventListener("click", ()=>{
        viewDialog.setAttribute("close", "")
        setTimeout(()=>{
            viewDialog.close()
        },300)
    })
}


viewDialogLoad()