function handleMutations(mutationsList, observer) {
    // Handle the mutations here, react to changes
    // console.log("Something changed in the document!");
    editEventButtons = document.querySelectorAll('.edit-button');
    showButtons = document.querySelectorAll('.show-button');
    const attendeesTable = document.getElementById("attendees-table")


    // console.log(editEventButtons);
    openEdit()
    openShow()
    manageAttendee()
    kickAttendee()
    loadNews()
    // You can perform any actions here based on the changes, for example, updating or reloading specific elements.
  }

  // Configuration for the observer
  const config = { childList: true, subtree: true };

  // Create a new MutationObserver instance
  const observer = new MutationObserver(handleMutations);

  // Start observing the document with the specified configuration
  observer.observe(document, config);




  const attconfig = { childList: true, subtree: true };

function handleAttendeesMutations(mutationsList, observer){
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

attendeesObserver.observe(document.getElementById("attendees-table"), attconfig)