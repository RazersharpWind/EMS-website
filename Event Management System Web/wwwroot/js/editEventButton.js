let editEventButtons = document.querySelectorAll('.edit-button');
const editDialog = document.getElementById('edit-dialog');
const addAttendeeDialogEdit = document.getElementById('add-attendee-dialog-edit');
const addAttendeeButtonEdit = document.getElementById('add-attendee-button-edit');
const cancelAttendeeButtonEdit = document.getElementById('cancel-attendee-button-edit');
const editEventName    = document.querySelector('.edit-event-subject input');
const editEventTime    = document.querySelector('.edit-event-time');
const editEventDate    = document.querySelector('.edit-event-date');
const editEventImage   = document.querySelector('.edit-event-image').firstElementChild;
const editEventDescribtion = document.querySelector('.edit-event-describtion textarea');
const confirmEditButton = document.getElementById("confirm-edit-button")
const editedEventId = document.getElementById('editedEvent-id-space')
const undoButton = document.getElementById('undo-button');
const editEventAttendees = document.querySelector('#edit-dialog .attendees-table');//tbody
var cardEventID;

//attendee table related
const confirmEditAttendeeButton = document.getElementById('confirm-attendee-button-edit');
const newAttendeeName = document.getElementById('attendee-name-e');
const newAttendeeID = document.getElementById('attendee-id-e');
const editedAttendeesTable = document.getElementById('update-attendees-table');
var addedAttendees = [];
let cardAttendeesEdited = {};

const undoButton = document.getElementById("undo-button");

undoButton.addEventListener("click", () => {
    editDialog.setAttribute("close", "");
    setTimeout(() => { editDialog.close() }, 300)
})


let clickedCard;

window.addEventListener("click", (e)=>{
    if(e.target.classList.contains("button")){
        clickedCard = e.target.parentElement.parentElement.parentElement;
    }
})

let editedCardHeader, editedCardDesc, editedCardDate, editedCardImage, editedCardTime;

editEventButtons.forEach((editEventButton) => {
    editEventButton.addEventListener('click', (e) => {
        editedEventId.textContent = e.target.parentElement.parentElement.parentElement.getAttribute('event-id');
        for (let index in editEvent) {
            if (editEvent[index].event_id.toString() === editedEventId.textContent) {
                cardEventID = editEvent[index].event_id;
                var year = editEvent[index].event_date.toString().split("T")[0].split("-")[0];
                var month = editEvent[index].event_date.toString().split("T")[0].split("-")[1];
                var day = editEvent[index].event_date.toString().split("T")[0].split("-")[2];
                var hour = editEvent[index].event_date.toString().split("T")[1].split(":")[0];
                var minute = editEvent[index].event_date.toString().split("T")[1].split(":")[1];
                var second = editEvent[index].event_date.toString().split("T")[1].split(":")[2];
                var date = new Date(year, month, day, hour, minute, second);
                var time = new Date(editEvent[index].event_time);
                editEventName.value = editEvent[index].event_name.toString();
                editEventDescribtion.value = editEvent[index].event_description.toString();
                editEventDate.value = year + "-" + month + "-" + day;
                editEventTime.value = time.getHours() + ":" + ((time.getMinutes() < 10 ? "0" : "") + time.getMinutes());
                editEventImage.src = editEvent[index].event_image.toString();
            }
        }

        //display attendees inside table
        for (var i = 0; i < attendeeList.length; i++) {
            if (attendeeList[i].event_id === parseInt(editedEventId.textContent)) {
                const attedeeTemplate =
                    `<td>${attendeeList[i].full_name}</td>
                            <td id="attendee-event-id"> <span></span> <span>${attendeeList[i].attendee_id}</span></td>
                            <td>${attendeeList[i].attendee_email}</td>
                            <td>Confirmed</td>
                            <td class="end">
                                <div class="attedees-management bi-chevron-up w-fit py-3 pl-3">
                                    <ul id="attedees-management-display" class="attedees-management-display bg-red-500">
                                        <li>Notify</li><hr class="w-5/6 bg-yellow-500 h-[2px]">
                                        <li class="kick-button text-red-600 font-bold">Kick</li>
                                    </ul>
                                </div>
                        </td>`

                const eventAttendee = document.createElement("tr");
                eventAttendee.className = "person";
                eventAttendee.innerHTML = attedeeTemplate;

                const attendeesTables = document.querySelectorAll(".update-attendees-table");
                attendeesTables.forEach((attedeesTable) => {
                    attedeesTable.append(eventAttendee)
                })
            }
        }

        editDialog.showModal();
        editDialog.removeAttribute("close", "");
    })
})

//attendee table related

addAttendeeButtonEdit.addEventListener("click", () => {
    addAttendeeDialogEdit.setAttribute("open", "");
    addAttendeeDialogEdit.removeAttribute("close");
})

cancelAttendeeButtonEdit.addEventListener("click", () => {
    addAttendeeDialogEdit.removeAttribute("open");
    addAttendeeDialogEdit.setAttribute("close", "");
})

confirmEditAttendeeButton.addEventListener("click", (e) => {
    //noAttendee.textContent = "";
    var attendee_id, attendee_email;
    for (var i = 0; i < attendeeList.length; i++) {
        if (attendeeList[i].attendee_id === parseInt(newAttendeeID.value) && attendeeList[i].full_name === newAttendeeName.value) {
            attendee_id = attendeeList[i].attendee_id;
            attendee_email = attendeeList[i].attendee_email;
        }
    }
    console.log(attendee_id)
    let attendee =
        `<td>${newAttendeeName.value}</td>
    <td id="attendee-event-id"> <span></span> <span>${attendee_id}</span></td>
    <td>${attendee_email}</td>
    <td>Confirmed</td>
    <td class="end">
        <div class="attedees-management bi-chevron-up w-fit py-3 pr-3">
            <ul id="attedees-management-display">
                <li>Notify</li><hr class="w-5/6 bg-yellow-500 h-[2px]">
                <li class="kick-button text-red-600 font-bold">Kick</li>
            </ul>
        </div>
    </td>`

    //create an object named by the attendee and push it to the card
    cardAttendeesEdited[newAttendeeName.value] = attendee
    for (let i = x; i < Object.keys(cardAttendeesEdited).length; i++) {
        let newAttendee = document.createElement("tr")
        newAttendee.classList.add("person")
        newAttendee.innerHTML = attendee
        editedAttendeesTable.append(newAttendee)
        x++;
    }

    var attendeeData = {};
    attendeeData.Name = newAttendeeName.value;
    attendeeData.Id = parseInt(newAttendeeID.value);
    addedAttendees.push(attendeeData);
    console.log(addedAttendees)

    e.target.parentElement.parentElement.removeAttribute("open")
    e.target.parentElement.parentElement.setAttribute("close", "")
    newAttendeeName.value = "";
    newAttendeeID.value = "";
})

document.addEventListener('keydown', function (event) {
    const key = event.key; // const {key} = event; in ES6+
    if (key === "Escape") {
        editDialog.setAttribute("close", "");
        setTimeout(() => { editDialog.close() }, 300)
        $("#update-attendees-table").empty();
        addedAttendees = [];
        cardAttendeesEdited = {};
    }
});

undoButton.addEventListener('click', () => {
    editDialog.setAttribute("close", "");
    // dialog.removeAttribute("open")
    setTimeout(() => { editDialog.close() }, 300)
    //the dialog.close() method close the dialog immediately therefore we won't be able to apply the transiton unless we wait for the same duration as the transition
    $("#update-attendees-table").empty();
    addedAttendees = [];
    cardAttendeesEdited = {};
    window.location.reload();
})

function handleEditMutations(mutationsList, observer) {
    // Handle the mutations here, react to changes
    editEventButtons = document.querySelectorAll('.edit-button');
    showButtons = document.querySelectorAll('.show-button');
    const attendeesTable = document.getElementById("attendees-table")
    //openEdit()
}

  // Configuration for the observer
    const editEventsConfig = { childList: true, subtree: true };

  // Create a new MutationObserver instance
    const editEventsObserver = new MutationObserver(handleEditMutations);

  // Start observing the document with the specified configuration
    editEventsObserver.observe(document, editEventsConfig);


