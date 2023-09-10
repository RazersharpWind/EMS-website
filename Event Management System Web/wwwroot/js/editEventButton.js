let editEventButtons = document.querySelectorAll('.edit-button');
const editDialog = document.getElementById('edit-dialog');

const editEventName    = document.querySelector('.edit-event-subject input');
const editEventTime    = document.querySelector('.edit-event-time');
const editEventDate    = document.querySelector('.edit-event-date');
const editEventImage   = document.querySelector('.edit-event-image').firstElementChild;
const editEventDescribtion = document.querySelector('.edit-event-describtion textarea');
const confirmEditButton = document.getElementById("confirm-edit-button")
const editedEventId = document.getElementById('editedEvent-id-space')

const editEventAttendees = document.querySelector('#edit-dialog .attendees-table');//tbody
// const monthes = ["JAN", 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']


let clickedCard;

window.addEventListener("click", (e)=>{
    if(e.target.classList.contains("button")){
        clickedCard = e.target.parentElement.parentElement.parentElement;
    }
})



let editedCardHeader, editedCardDesc, editedCardDate, editedCardImage, editedCardTime;

const openEdit = () => {
    editEventButtons.forEach((editEventButton)=>{
        editEventButton.addEventListener('click', (e) => {
            editedEventId.textContent = e.target.parentElement.parentElement.parentElement.getAttribute('event-id');
            for (let index in editEvent) {
                if (editEvent[index].event_id.toString() === editedEventId.textContent) {
                    var year = editEvent[index].event_date.toString().split("T")[0].split("-")[0];
                    var month = editEvent[index].event_date.toString().split("T")[0].split("-")[1];
                    var day = editEvent[index].event_date.toString().split("T")[0].split("-")[2];
                    var hour = editEvent[index].event_date.toString().split("T")[1].split(":")[0];
                    var minute = editEvent[index].event_date.toString().split("T")[1].split(":")[1];
                    var second = editEvent[index].event_date.toString().split("T")[1].split(":")[2];
                    var date = new Date(year, month, day, hour, minute, second);
                    var time = new Date(editEvent[index].event_time.toString())
                    editEventName.value = editEvent[index].event_name.toString();
                    editEventDescribtion.value = editEvent[index].event_description.toString();
                    editEventDate.value = year + "-" + month + "-" + day;
                    editEventTime.value = time.getHours() + ":" + time.getMinutes();
                    editEventImage.src = editEvent[index].event_image.toString();
                }
            }

            document.querySelectorAll(".attendee-event-id").forEach((attedee)=>{
                attedee.firstElementChild.innerText = eventId.textContent
            })

            //console.log(editedEventId.textContent);
            editDialog.showModal();
            editDialog.removeAttribute("close" ,"");

        })
    })
}
//wrap then in order to not repeat the whole code in anotgher file
openEdit()


//confirmEditButton.addEventListener("click", ()=>{
//    editedCardHeader.textContent = editEventName.value;
//    editedCardDesc.textContent = editEventDescribtion.value
//    // editedCardDate.textContent = editEventDate.value
//    editedCardDate.innerHTML = `
//    <h3 class="text-2xl leading-none my-auto">${editEventDate.value.split('-')[2]}
//    <span class="text-lg leading-none">${monthes[editEventDate.value.split('-')[1]-1]}</span>
//    </h3>`;
//    editedCardImage.src = editEventImage.src


    

//    editDialog.setAttribute('close', '');
//    setTimeout(()=>{editDialog.close()},300)
//    // editEventDate.value
//    // editEventImage.src
//    // editEventDescribtion.value
//})

const attendeesTables = document.querySelectorAll(".attendees-table");



window.addEventListener("click", (e)=>{
    let editButton = ""
    if(e.target.classList.contains("edit-button")){
        editButton = e.target;
        attendeesTables.forEach((attedeesTable)=>{
            attedeesTable.innerHTML = ""
        })
        //to show attendees based on the attribute that is extracted from JSON file
        cardsData.forEach((cardData) => {
            // console.log(cardData['event-attendees'])
            const cardAttribute = e.target.parentElement.parentElement.parentElement.getAttribute("attendees-list").split(",");
            // console.log(cardAttribute);
            if(cardAttribute.length > 1){
                for(let i =0; i <= cardAttribute.length; i++){
                    if(cardData['event-attendees'][cardAttribute[i]]){
                        // console.log(cardData['event-attendees'][cardAttribute[i]]);
                        // console.log(Object.keys(cardData['event-attendees'])[i]);
                        const attedeeTemplate =
                        `<td>${Object.keys(cardData['event-attendees'])[i]}</td>
                            <td id="attendee-event-id"> <span></span> <span>${eventId.textContent}${cardData['event-attendees'][cardAttribute[i]]['attendee-id']}</span></td>
                            <td>${cardData['event-attendees'][cardAttribute[i]]['attendee-email']}</td>
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
    
                        attendeesTables.forEach((attedeesTable)=>{
                            // attedeesTable.append(eventAttendee)
                            clickedCard.getAttribute("attendees-list").split(",").forEach((name)=>{
                                if(eventAttendee.firstElementChild.textContent == name){
                                    attedeesTable.append(eventAttendee)
                                }
                            })

                        })
    
    
                    }
                }
            }
            else{
                attendeesTables.forEach((attedeesTable)=>{
                    attedeesTable.innerHTML = "<p>لايوجد حضور</p>"
                })
            }
        })
    }
})



function handleEditMutations(mutationsList, observer) {
    // Handle the mutations here, react to changes
    // console.log("Something changed in the document!");
    editEventButtons = document.querySelectorAll('.edit-button');
    showButtons = document.querySelectorAll('.show-button');
    const attendeesTable = document.getElementById("attendees-table")
    openEdit()
}

  // Configuration for the observer
    const editEventsConfig = { childList: true, subtree: true };

  // Create a new MutationObserver instance
    const editEventsObserver = new MutationObserver(handleEditMutations);

  // Start observing the document with the specified configuration
    editEventsObserver.observe(document, editEventsConfig);


