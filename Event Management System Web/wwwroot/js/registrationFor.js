const registrationDialog = document.getElementById("registration-dialog");

const registeredEventSubject = document.querySelector('.event-summary-subject');
const registeredEventBrief = document.querySelector('.event-summary-brief');
const registeredEventDate = document.querySelector('.event-summary-date');
const registeredEventImage = document.querySelector('.event-summary-image').firstElementChild;
const registeredEventSummary = document.getElementById("event-summary");


function regProcess(){




const confirmRegistrationButton = document.querySelector(".confirm-register-button")


const registerationButtons = document.querySelectorAll(".register-button");
const cancelButton = document.querySelector(".cancel-button");

registerationButtons.forEach((registerationButton)=>{
    registerationButton.addEventListener("click", (e)=>{
        const clickedEventCard = e.target.parentElement.parentElement.parentElement
        registrationDialog.showModal()
        registrationDialog.removeAttribute("close")

        const clickedHeader = clickedEventCard.lastElementChild.firstElementChild.firstElementChild;
        const clickedDesc = clickedEventCard.lastElementChild.firstElementChild.lastElementChild;
        const clickedDate = clickedEventCard.children[1].firstElementChild;
        const clickedImage = clickedEventCard.firstElementChild.firstElementChild;
        const clickedTime = clickedEventCard.getAttribute("event-time");
        const clickedId = clickedEventCard.getAttribute("event-id");

        document.getElementById("registered-event-subject").lastElementChild.textContent = `${clickedHeader.textContent}`


        registeredEventSubject.textContent = clickedHeader.textContent;
        registeredEventBrief.textContent = clickedDesc.textContent;
        registeredEventDate.textContent = clickedDate.textContent;
        registeredEventImage.src = clickedImage.src;
        registeredEventSummary.setAttribute("event-id", clickedId);
        registeredEventSummary.setAttribute("event-Time", clickedTime);;
        registeredEventSummary.setAttribute("event-date", clickedDate.innerText);;


    })
})

cancelButton.addEventListener('click', ()=>{
    registrationDialog.setAttribute("close", "")
    setTimeout(()=>{registrationDialog.close()},300)
})



confirmRegistrationButton.addEventListener("click", (e)=>{
    const attendeeId = Math.floor(10+Math.random()*89);
    const attendeeName = document.getElementById("attendee-name").value;
    const attendeeEmail = document.getElementById("attendee-email").value;
    const attendeePhone = document.getElementById("attendee-phone").value;
    const confirmRegistration = document.getElementById("registration-loader");
    console.log(e.target.parentElement.parentElement.firstElementChild.firstElementChild);

    const registrationConfirmationTemp = `
    <div class="registration-confirmation flex flex-col-reverse md:flex-col w-full h-full px-4 py-16 overflow-y-scroll overflow-x-hidden">
        <div class="registration-details w-full md:w-1/2 px-4 flex flex-col justify-center self-center text-left">
            <img src="https://cdn-icons-png.flaticon.com/512/6459/6459980.png" alt=done" class="w-16" />
            <h4 class="registered-event-id text-md text-gray-400 mb-4">your id: 
            ${String(attendeeId) + e.target.parentElement.parentElement.firstElementChild.firstElementChild.getAttribute("event-id")}
            </h4>
            <h2 class="text-4xl font-bold mb-1">Hayak Allah !</h2>
            <p class="text-xl mb-8">We're honor to see you<span class="registered-name">${attendeeName}</span></p>
            <div class="registered-info">
                <p>
                    at
                    <a class="underline registered-event-location" href="${e.target.parentElement.parentElement.firstElementChild.firstElementChild.children[3].lastElementChild.firstElementChild.href}" target="_blank">المركز الإماراتي للتنمية</a>
                </p>
                <div class="registered-event-date-time flex p-0">
                    <div class="registered-event-time flex w-1/2">
                        <i class="bi-house mr-2"></i>
                        <p class="registered-event-time">${e.target.parentElement.parentElement.firstElementChild.firstElementChild.getAttribute("event-time")}</p>
                    </div>
                    <div class="registered-event-date flex w-1/2">
                        <i class="bi-house mr-2"></i>
                        <p class="registered-event-time">${e.target.parentElement.parentElement.firstElementChild.firstElementChild.getAttribute("event-date")}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="registration-qr-code w-full md:w-1/2 flex flex-col items-center justify-center">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${String(attendeeId) + e.target.parentElement.parentElement.firstElementChild.firstElementChild.getAttribute("event-id")}" class="w-1/2 mb-8" alt="qr">
            <p class="text-lg">Show up the QR code to check in</p>
        </div>
    </div>
    <button class="done-button"><i class="bi-x text-xl absolute inset-0 m-auto mb-8 w-fit h-fit"></i></button>`


    //when someone register i will take his name email and number and genereate a new id for him/her, after that the data will be in an object thatwill be unshifted to the JSON file
    // for(let i =0; i <attendeesLi.length; i++){
    //     if(attendeesLi[i]["event-name"] == registeredEventSubject.textContent){
    //         console.log("same");
    //         attendeesLi[i]["event-attendees"][attendeeName] = {
    //             "attendee-id": attendeeId,
    //             "attendee-email": attendeeEmail,
    //             "attendee-staus": `مؤكد`
    //         }
    //     }
    // }
    // attendeesLi[0]["event-attendees"] = {attendeeName: {
    //     "attendee-id": attendeeId,
    //     "attendee-email": attendeeEmail,
    //     "attendee-staus": `مؤكد`
    // }};

    // console.log(attendeesLi);


    attendeeName
    attendeeEmail
    attendeePhone
if(attendeeName != "" && attendeeEmail != "" && attendeePhone != ""){
    //THIS TIMEOUT IS JUST FOR TESTING PURPOSES, THE REGISTRATION PROCESS WILL TAKE SOME TIME BUT LESS THAN 2 SECONDS PROPBALY 
    confirmRegistration.setAttribute("loading", "")

    setTimeout(()=>{
        // confirmRegistration.classList.add()

        //to print the confirmation dialog
        confirmRegistration.innerHTML = registrationConfirmationTemp;
        const doneButton = document.querySelector(".done-button")
        doneButton.addEventListener("click", ()=>{
            registrationDialog.setAttribute("close", "")
            setTimeout(()=>{
                registrationDialog.close();
                confirmRegistration.innerHTML = "";
                confirmRegistration.className = ''
            },300)
            
        })

    },2000)

}

})


}

regProcess()




