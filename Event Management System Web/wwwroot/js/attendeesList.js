let attendee;

const addAttendeeDialog = document.getElementById("add-attendee-dialog");
// const addAttendeeButton = document.getElementById("add-attendee-button");
// to apply it in all dialogs
const addAttendeeButton = document.getElementById("add-attendee-button");
const cancelAttendeeButton = document.getElementById("cancel-attendee-button")
const confirmAttendeeButton = document.getElementById("confirm-attendee-button")
const attendeeName = document.getElementById("attendee-name")
const attendeeID = document.getElementById("attendee-ID")
const attendeesTable = document.getElementById("attendees-table")
const noAttendee = document.createElement("tr");
var eventAttendees = new Array();
attendeesTable.appendChild(noAttendee)
noAttendee.textContent = "No attendees"



let cardAttendeesObject = {} //to store each data about each attendee since attendeeCard will be empty after each rendering (for matter of creation)
addAttendeeButton.addEventListener("click", ()=>{
    addAttendeeDialog.setAttribute("open", "");
    addAttendeeDialog.removeAttribute("close");
})




cancelAttendeeButton.addEventListener("click", ()=>{
    addAttendeeDialog.removeAttribute("open");
    addAttendeeDialog.setAttribute("close", "");
})

let x = 0;



confirmAttendeeButton.addEventListener("click", (e) => {
    noAttendee.textContent = ""
    const attendeeId = Math.floor(10+Math.random()*89);
    attendee =
    `<td>${attendeeName.value}</td>
    <td id="attendee-event-id"> <span></span> <span>${eventId.textContent}${attendeeId}</span></td>
    <td>${attendeeID.value}</td>
    <td>مؤكد</td>
    <td class="end">
        <div class="attedees-management bi-chevron-up w-fit py-3 pr-3">
            <ul id="attedees-management-display">
                <li>Notify</li><hr class="w-5/6 bg-yellow-500 h-[2px]">
                <li class="kick-button text-red-600 font-bold">Kick</li>
            </ul>
        </div>
    </td>`
    // cardAttendeesList.push(attendee)


    // let updatedAttendees= [];
    // console.log(clickedCard);
    // clickedCard.getAttribute("attendees-list").split(",").forEach((t)=>{
    //     updatedAttendees.push(t)
    // })

    //create an object named by the attendee and push it to the card
    cardAttendees[attendeeName.value] = attendee
    for(let i = x; i < Object.keys(cardAttendees).length; i++){
        let newAttendee = document.createElement("tr")
        newAttendee.classList.add("person")
        // newAttendee.innerHTML = cardAttendees[Object.keys(cardAttendees)[i]]
        newAttendee.innerHTML = attendee
        attendeesTable.append(newAttendee)
        // console.log(Object.keys(cardAttendees)[i])
        x++;
    }

    var attendeeData = {};
    attendeeData.Name = attendeeName.value;
    attendeeData.Id = parseInt(attendeeID.value);
    eventAttendees.push(attendeeData);

    // attendeesTable.append(newAttendee)
    e.target.parentElement.parentElement.removeAttribute("open")
    e.target.parentElement.parentElement.setAttribute("close", "")
    // addAttendeeDialog.removeAttribute("open");
    // addAttendeeDialog.setAttribute("close", "");
})




const manageAttendee = () => {
    const attedeesManageButtons = document.querySelectorAll(".attedees-management");

    

    attedeesManageButtons.forEach((attedeesManageButton)=>{
        window.addEventListener("click", (e)=>{
            if(e.target == attedeesManageButton){
                attedeesManageButton.firstElementChild.setAttribute("clicked","")
            }
            else{
                attedeesManageButton.firstElementChild.removeAttribute("clicked")
            }
        })
    })
}

const kickAttendee = () => {
    let kickAttendeeButtons = document.querySelectorAll(".kick-button");
    kickAttendeeButtons.forEach((kickAttendeeButton)=>{
        // console.log(kickAttendeeButton);
        kickAttendeeButton.addEventListener('click', (e)=>{
            e.target.parentElement.removeAttribute("clicked")
            // e.target.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
            const removedAttendee = e.target.parentNode.parentNode.parentNode.parentNode
            const attendeesParent = e.target.parentNode.parentNode.parentNode.parentNode.parentNode
            const removedAttendeeName = String(clickedCard.getAttribute("attendees-list")).split(",")[String(clickedCard.getAttribute("attendees-list")).split(",").indexOf(removedAttendee.firstElementChild.textContent)]
            const updatedAttendeesList= []
            String(clickedCard.getAttribute("attendees-list")).split(",").forEach((name)=>{
                // console.log(name, removedAttendee.firstElementChild.textContent);
                if(name != removedAttendeeName){
                    updatedAttendeesList.push(name)
                }
            })

            clickedCard.setAttribute("attendees-list", updatedAttendeesList)
            attendeesParent?.removeChild(removedAttendee)
            // .classList.add("hidden");
            // console.log(e.target.parentElement.parentElement.parentElement.parentElement);
            // e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove(e.target.parentElement.parentElement.parentElement.parentElement)
        })
    })
    // console.log(kickAttendeeButtons);
}
manageAttendee()