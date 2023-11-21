function handleAttendeesMutations(mutationsList, attendeesObserver){
    collapseButtonAction()

}

const attendeesObserver = new MutationObserver(handleAttendeesMutations)

const bconfig = { childList: true, subtree: true };

const eventsAttendees = document.getElementById("events-attendees")
attendeesObserver.observe(eventsAttendees, bconfig)