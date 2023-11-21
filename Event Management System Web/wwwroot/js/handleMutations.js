function handleEventsMutations(mutationsList, eventsObserver) {
    // Handle the mutations here, react to changes
    // console.log("Something changed in the document!");
    const attendeesTable = document.getElementById("attendees-table")


    // console.log(editEventButtons);
    manageAttendee()
    kickAttendee()
    // You can perform any actions here based on the changes, for example, updating or reloading specific elements.
  }

  // eventsConfiguration for the eventsObserver
  const eventsConfig = { childList: true, subtree: true };

  // Create a new MutationeventsObserver instance
  const eventsObserver = new MutationObserver(handleEventsMutations);

  // Start observing the document with the specified eventsConfiguration
  eventsObserver.observe(document, eventsConfig);




  const atteventsConfig = { childList: true, subtree: true };

function handleAttendeesMutations(mutationsList, eventsObserver){
  let a = attendeesTable.firstElementChild
  if(attendeesTable.children.length != 0){
    noAttendee.textContent = "";
    console.log("Hala");
  }
  else{
    noAttendee.textContent = "لا حضور";
  }

}
const attendeesObserver = new MutationObserver(handleAttendeesMutations);

attendeesObserver.observe(document.getElementById("attendees-table"), atteventsConfig)