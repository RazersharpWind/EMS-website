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

// const editEventAttendees = e.target.parentElement.parentElement.parentElement.getAttribute("attendees-list");

// console.log(editEventButtons);

let editedCardHeader, editedCardDesc, editedCardDate, editedCardImage, editedCardTime;

const openEdit = () => {
    editEventButtons.forEach((editEventButton)=>{
        editEventButton.addEventListener('click',(e)=>{
            editedCardHeader = e.target.parentElement.parentElement.parentElement.lastElementChild.firstElementChild.firstElementChild;
            editedCardDesc = e.target.parentElement.parentElement.firstElementChild.lastElementChild;
            editedCardDate = e.target.parentElement.parentElement.parentElement.children[1].firstElementChild;
            editedCardTime = e.target.parentElement.parentElement.parentElement;
            editedCardImage = e.target.parentElement.parentElement.parentElement.firstElementChild.firstElementChild;
            editedEventId.textContent = e.target.parentElement.parentElement.parentElement.getAttribute('event-id');



            editEventName.value = editedCardHeader.textContent;
            editEventImage.src = editedCardImage.src
            editEventDescribtion.value = e.target.parentElement.parentElement.parentElement.lastElementChild.firstElementChild.lastElementChild.textContent
            editEventTime.value = editedCardTime.getAttribute("event-time")

            console.log(parseInt(monthes.indexOf(e.target.parentElement.parentElement.parentElement.children[1].firstElementChild.lastElementChild.innerText)));

            editEventDate.value = `${String(e.target.parentElement.parentElement.parentElement.getAttribute("data-event-date")).split("-")[2]}-${String(e.target.parentElement.parentElement.parentElement.getAttribute("data-event-date")).split("-")[1]}-${String(e.target.parentElement.parentElement.parentElement.getAttribute("data-event-date")).split("-")[0]}`

            // if(parseInt(monthes.indexOf(e.target.parentElement.parentElement.parentElement.children[1].firstElementChild.lastElementChild.innerText))+1 < 10){
            //     // editEventDate.value = `2023-0${parseInt(monthes.indexOf(e.target.parentElement.parentElement.parentElement.children[1].firstElementChild.lastElementChild.innerText))+1}-${e.target.parentElement.parentElement.parentElement.children[1].firstElementChild.firstElementChild.innerText}`
                
            // }
            // else{
            //     // editEventDate.value = `2023-${parseInt(monthes.indexOf(e.target.parentElement.parentElement.parentElement.children[1].firstElementChild.lastElementChild.innerText))+1}-${e.target.parentElement.parentElement.parentElement.children[1].firstElementChild.firstElementChild.innerText}`
            // }



            document.querySelectorAll(".attendee-event-id").forEach((attedee)=>{
                attedee.firstElementChild.innerText = eventId.textContent
            })


            // console.log(e.target.parentElement.parentElement.parentElement.getAttribute("attendees-list"));---------------------------------------

            
            // console.log("---");


            // console.log([e.target.parentElement.parentElement.parentElement.getAttribute("attendees-list").split(",")])







            editDialog.showModal();
            editDialog.removeAttribute("close" ,"");

        })
    })
}
//wrap then in order to not repeat the whole code in anotgher file
openEdit()








confirmEditButton.addEventListener("click", ()=>{
    editedCardHeader.textContent = editEventName.value;
    editedCardDesc.textContent = editEventDescribtion.value
    // editedCardDate.textContent = editEventDate.value
    editedCardDate.innerHTML = `
    <h3 class="text-2xl leading-none my-auto">${editEventDate.value.split('-')[2]}
    <span class="text-lg leading-none">${monthes[editEventDate.value.split('-')[1]-1]}</span>
    </h3>`;
    editedCardImage.src = editEventImage.src


    

    editDialog.setAttribute('close', '');
    setTimeout(()=>{editDialog.close()},300)
    // editEventDate.value
    // editEventImage.src
    // editEventDescribtion.value
})


// editEventAttendees.forEach((editDialogAttendeesList)=>{
    // editDialogAttendeesList.addEventListener()
    // editDialogAttendeesList.appendChild(cardAttendees[Object.keys(cardAttendees)])
// })


// editEventButtons.forEach((editEventButton)=>{
//     editEventButton.addEventListener("click",(e)=>{
//         console.log(cardAttendees );
//     })
// })


const attendeesTables = document.querySelectorAll(".attendees-table");



window.addEventListener("click", (e)=>{
    if(e.target.classList.contains("edit-button")){
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
                            <td>مؤكد</td>
                            <td class="end">
                                <div class="attedees-management bi-chevron-up w-fit py-3 pl-3 py-3">
                                    <ul id="attedees-management-display">
                                        <li>إعلام</li><hr class="w-5/6 bg-yellow-500 h-[2px]">
                                        <li class="kick-button text-red-600 font-bold">طرد</li>
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