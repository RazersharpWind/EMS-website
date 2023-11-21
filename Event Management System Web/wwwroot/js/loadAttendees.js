const loadAttendees = () => {
    
    const attendeesEvents = document.getElementById("events-attendees")
    fetch("../edata.json")
        .then(res => res.json())
        .then(cards => {
            cards.sort(()=>{return -1})
            cards.forEach((card)=>{
                let attendeesEvent = document.createElement("div");
                for(let i =0; i < Object.keys(card["event-attendees"]).length; i++){
                    let eventClasses = 'event-status px-4 py-1 border border-red-500 rounded mr-2'
                    if(parseInt(card["event-date"].split("-")[2]) > 2023 || (parseInt(card["event-date"].split("-")[2]) == 2023 && parseInt(card["event-date"].split("-")[1]) >= 5)){
                        eventClasses = 'event-status px-4 py-1 border border-red-500 rounded hidden'
                    }


                    const attendeesEventTemp =
                    `
                    <div class="event-attendees-table-header flex justify-between border-black border-b pr-4 py-4 overflow-hidden">
                        <div class="flex justify-between items-center w-full">
                            <div class="flex">
                                <h2 class="text-xl mr-3">${card["event-name"]}</h2>
                                <div>${Object.keys(card["event-attendees"]).length}</div>
                            </div>
                            <div class="${eventClasses}">passed</div>
                        </div>
                            <button class="bi-chevron-down collapse-button"></button>
    
                    </div>
                    <table class="full-attendees-table w-full">
                        <thead>
                            <tr class="px-2">
                                <td>...</td>
                                <td class="font-bold underline">#ID</td>
                                <td class="font-bold underline">Name</td>
                                <td class="font-bold underline">Position</td>
                                <td class="font-bold underline">email</td>
                                <td class="font-bold underline">Phone number</td>
                                <td class="font-bold underline">Status</td>
                                <td class="font-bold underline">Manage</td>
                            </tr>
                        </thead>
                        <tbody class="attendees-table">
                            <!-- Attendees' cards will be dynamically populated here -->
                        </tbody>
                    </table>`
                    
                    attendeesEvent.classList.add("event-attendess-table", "my-6", "collapseable");
                    attendeesEvent.setAttribute("event-id", card["event-id"])
                    attendeesEvent.innerHTML=attendeesEventTemp;



                        // create a template for an event
                        // set an attribute that has the event id

                        // look around the file for the same id
                        // assign the attendees of the same event id to the selceted event
                }


                attendeesEvents.append(attendeesEvent)
            })


            // console.log(attendeesEvents.children.length);
            attendeesEvents.childNodes.forEach((ae)=>{
                // console.log(ae);
                cards.forEach((card)=>{
                    for(let j = 0; j < Object.keys(card["event-attendees"]).length; j++){
                        console.log(j, Object.keys(card["event-attendees"])[j], Object.values(card["event-attendees"])[j]);
                    //check if the node is an element or not (it maybe text)
                    if(ae.nodeType == Node.ELEMENT_NODE){
                        if(card["event-id"] == ae.getAttribute("event-id")){
                            // console.log(card["event-name"]);
                            // console.log(card["event-attendees"]);
                                const eventAttendeesTemp =
                                `<td>
                                    <input type="checkbox" class="select-box w-6 h-6 p-0 m-0 flex items-center justify-center ml-2" name="" id="">
                                </td>
                                <td>${card["event-id"] + Object.values(card["event-attendees"])[j]["attendee-id"]}</td>
                                <td>${Object.keys(card["event-attendees"])[j]}</td>
                                <td>${Object.values(card["event-attendees"])[j]["attendee-position"]}</td>
                                <td>${Object.values(card["event-attendees"])[j]["attendee-email"]}</td>
                                <td>${Object.values(card["event-attendees"])[j]["attendee-phone"]}</td>
                                <td>${Object.values(card["event-attendees"])[j]["attendee-status"]}</td>
                                <td class="relative">
                                    <button class="bi-three-dots manage-attendee-button p-2"></button>
                                    <div class="manage-attendee m-0 h-fit w-24 bottom-11 right-[50%] bg-white border drop-shadow rounded-lg absolute z-50" hidden>
                                        <ul class="w-full h-full">
                                            <li class=" cursor-pointer hover:bg-gray-100 px-2 h-7 flex items-center text-black">Remind</li>
                                            <hr class="my-1 w-16 bg-black">
                                            <li class=" cursor-pointer hover:bg-gray-100 px-2 h-7 flex items-center text-black">Invite</li>
                                            <hr class="my-1 w-16 bg-black">
                                            <li class=" cursor-pointer hover:bg-gray-100 px-2 h-7 flex items-center text-black">Kick</li>
                                        </ul>
                                    </div>
                                </td>`
;
                                const attendee = document.createElement("tr");
                                attendee.innerHTML = eventAttendeesTemp;
                                attendee.classList.add = "px-2";
                                // console.log(attendee);
                                if(![...ae.childNodes].includes(attendee)){
                                    ae.lastElementChild.lastElementChild.append(attendee)
                                }
                            
                            ae.lastElementChild.lastElementChild.append()
                        }
                        // console.log("-------");

                    }}
                })
            })
        })

        const loadingPage = document.getElementById('loadingPage');
        const spinner = document.getElementById("spinner")
        window.addEventListener('load', ()=>{
            // setTimeout(()=>{
                loadingPage.style.display = 'none';
            // },1500)
        })



}






loadAttendees()

