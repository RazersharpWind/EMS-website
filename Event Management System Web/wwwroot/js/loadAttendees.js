const loadAttendees = () => {
    const attendeesEvents = document.getElementById("events-attendees")
    fetch("./en-attendees.json")
        .then(res => res.json())
        .then(data => {
            data.forEach((d)=>{
                const attendeesEventTemp =
                `
                <div class="event-attendees-table-header flex justify-between border-black border-b pr-4 py-6">
                    <h2 class="text-2xl">${d["event-name"]}</h2>
                    <button class="bi-chevron-down collapse-button"></button>
                </div>
                <table class="full-attendees-table w-full">
                    <thead>
                        <tr class="px-2">
                            <td>...</td>
                            <td class="font-bold underline">#ID</td>
                            <td class="font-bold underline">Name</td>
                            <td class="font-bold underline">Position</td>
                            <td class="font-bold underline">Email</td>
                            <td class="font-bold underline">Phone Number</td>
                            <td class="font-bold underline">Status</td>
                            <td class="font-bold underline">Manage</td>
                        </tr>
                    </thead>
                    <tbody class="attendees-table">
                        <!-- Attendees' data will be dynamically populated here -->
                    </tbody>
                </table>

                    `
                const attendeesEvent = document.createElement("div");
                attendeesEvent.classList.add("event-attendess-table", "my-6", "collapseable");
                attendeesEvent.setAttribute("event-id", d["event-id"])
                attendeesEvent.innerHTML=attendeesEventTemp;

                attendeesEvents.append(attendeesEvent)


                    // create a template for an event
                    // set an attribute that has the event id
                    
                    // look around the file for the same id
                    // assign the attendees of the same event id to the selceted event


            })
            // console.log(attendeesEvents.children.length);
            attendeesEvents.childNodes.forEach((ae)=>{
                // console.log(ae);
                data.forEach((eventD)=>{
                    //check if the node is an element or not (it maybe text)
                    if(ae.nodeType == Node.ELEMENT_NODE){
                        if(eventD["event-id"] == ae.getAttribute("event-id")){
                            // console.log(eventD["event-name"]);
                            // console.log(eventD["event-attendees"]);
                            eventD["event-attendees"].forEach((eventAttendees)=>{
                                const eventAttendeesTemp =
                                `<td>
                                    <input type="checkbox" class="select-box w-6 h-6 p-0 m-0 flex items-center justify-center mr-2" name="" id="">
                                </td>
                                <td>${eventD["event-id"] + eventAttendees["attendee-id"]}</td>
                                <td>${eventAttendees["attendee-name"]}</td>
                                <td>${eventAttendees["attendee-position"]}</td>
                                <td>${eventAttendees["attendee-email"]}</td>
                                <td>${eventAttendees["attendee-phone"]}</td>
                                <td>${eventAttendees["attendee-status"]}</td>
                                <td class="relative">
                                    <button class="bi-three-dots manage-attendee-button py-2 pl-4"></button>
                                    <div class="manage-attendee m-0 h-fit w-24 top-10 right-10 z-10 bg-white border drop-shadow rounded-lg absolute" hidden>
                                        <ul class="w-full h-full">
                                            <li class="hover:bg-gray-100 px-2 h-9 flex items-center text-black">Reminde</li>
                                            <hr class="my-1 w-16 bg-black">
                                            <li class="hover:bg-gray-100 px-2 h-9 flex items-center text-black">Allow</li>
                                            <hr class="my-1 w-16 bg-black">
                                            <li class="hover:bg-gray-100 px-2 h-9 flex items-center text-black">Kick</li>
                                        </ul>
                                    </div>
                                </td>`
;
                                const attendee = document.createElement("tr");
                                attendee.innerHTML = eventAttendeesTemp;
                                attendee.classList.add = "px-2";
                                // console.log(attendee);
                                ae.lastElementChild.lastElementChild.append(attendee)
                            })
                            ae.lastElementChild.lastElementChild.append()
                        }
                        // console.log("-------");

                    }
                })
            })
        })
}

loadAttendees()

