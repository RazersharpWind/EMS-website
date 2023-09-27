const cardsSection = document.getElementsByClassName('events')[0];
const orginalChildren = document.querySelector('.event-card')?.children;
let originalClasses = document.querySelector('.event-card').classList

const dialog = document.getElementById('creation-dialog')
const alertMessage = document.getElementById('alert')

const confirmEventBtn = document.getElementById('confirm-button')
const canelButton = document.getElementById('cancel-button')
const createEventButton = document.getElementById('dialog-button')
const editButton = document.getElementById("edit-button")
const confirmUpdateButton = document.getElementById("confirm-edit-button");

//to create a shorter list by turning the list into an object
let cardAttendees = {};

let eventName, eventTime, eventDate, eventDescribtion, eventImage;

let getData = (eventName, eventDate, eventTime, eventDescribtion, eventImage) => {
    const monthes = ["JAN", 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

    let newCard = document.createElement('div')
    //clone the card
    for(let i =0; i < orginalChildren.length; i++){
        let child = orginalChildren[i].cloneNode(true)
        newCard.append(child)
    }
    newCard.className = originalClasses

    //decalre card parts
    let newCardHeader = newCard.lastElementChild.firstElementChild.firstElementChild;
    let newCardDescribiton = newCard.lastElementChild.firstElementChild.lastElementChild;
    let newCardDate = newCard.children[1].firstElementChild;
    let newCardImage = newCard.firstElementChild.firstElementChild;
    let newCardAttendeesList = cardAttendees;

    //define card values
    newCardHeader.textContent       = eventName;
    newCardDescribiton.textContent  = eventDescribtion;
    newCardImage.src                = eventImage.src
    newCardDate.innerHTML           = `
        <h3 class="text-2xl leading-none my-auto">${eventDate.split('-')[2]}
        <span class="text-lg leading-none">${monthes[eventDate.split('-')[1]-1]}</span>
        </h3>`;



    newCard.setAttribute("event-id", eventId.textContent)
    newCard.setAttribute("attendees-list", Object.keys(cardAttendees))
    console.log(Object.keys(cardAttendees));

    //short describiton length
    // if(newCardDescribiton.textContent.length > 61){
    //     newCard.lastElementChild.firstElementChild.lastElementChild.textContent = eventDescribtion.slice(0,62) + '.....'
    // }


    //insert the card at the first position
    // cardsSection.append(newCard)
    cardsSection.insertBefore(newCard, cardsSection.firstElementChild)
    // newCard = document.createElement('div')

}


createEventButton.addEventListener('click', ()=>{
    dialog.showModal()
    dialog.removeAttribute("close")
    dialog.setAttribute("open" ,"")
    //eventId.textContent = Math.floor(1000+Math.random()*8999);
    document.querySelectorAll(".attendee-event-id").forEach((attendee)=>{
        attendee.firstElementChild.innerText = eventId.textContent
    })
})

const resetValues = (eventName, eventDate, eventTime, eventDescribtion, eventImage) => {
    eventName = document.querySelector('.new-event-subject input').value = "";
    eventTime = document.querySelector('.new-event-time').value = "";
    eventDate = document.querySelector('.new-event-date').value = "";
    eventDescribtion = document.querySelector('.new-event-describtion textarea').value = "";
    eventImage = document.getElementById('image-container').src = "";
    document.getElementById('pac-input').value = "";
    $("#attendees-table").empty();
    eventAttendees = [];
    cardAttendees = {};
}

canelButton.addEventListener('click', ()=>{
    dialog.setAttribute("close" ,"");
    // dialog.removeAttribute("open")
    setTimeout(()=>{dialog.close()},300)
    //the dialog.close() method close the dialog immediately therefore we won't be able to apply the transiton unless we wait for the same duration as the transition
    resetValues(eventName, eventDate, eventTime, eventDescribtion, eventImage);
    window.location.reload();
})

console.log(cardsSection.children.length);
if(cardsSection.children.length == 0){
    cardsSection.textContent = "ما فيه أحداث حالياً الله يسلمك"
}

//to create a new button in case if clicked from another page than events.html
document.addEventListener("DOMContentLoaded", () => {
    // Check if the query parameter "fromIndex" is set to true
    const urlParameters = new URLSearchParams(window.location.search)
    const fromIndex = urlParameters.get('fromIndex')
    if (fromIndex === "true") {
      // Call your desired function when navigating from index.html
      performFunction();
    }
  });
function performFunction() {
    // Function logic goes here
    dialog.showModal()
    //eventId.textContent = Math.floor(1000+Math.random()*8999);
    document.getElementById("attendee-event-id").firstElementChild.innerText = eventId.textContent
    dialog.removeAttribute("close")
}
