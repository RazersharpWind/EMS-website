const checkedB = document.getElementById("checked-number").firstElementChild
let checkedAttendees = 0;

const handleLoading = (mutationsList, observer) => {
    const attendeesSelectBox = document.querySelectorAll(".select-box");
    const attendeeRows = document.querySelectorAll(".manage-attendee");
    const manageAttendeeButtons = document.querySelectorAll(".manage-attendee-button");

    manageAttendeeButtons.forEach((manageAttendeeButton)=>{
        window.addEventListener("click", (e)=>{
            if(e.target == manageAttendeeButton){
                e.target.nextElementSibling.toggleAttribute("hidden")
                console.log(e.target.nextElementSibling);
            }
            else if(e.target != manageAttendeeButton && manageAttendeeButton.nextElementSibling.getAttribute("hidden") != ""){
                console.log(e.target);
                manageAttendeeButton.nextElementSibling.setAttribute("hidden", "")
            }
        })
    })


    attendeesSelectBox.forEach((selectBox)=>{
        selectBox.addEventListener("click", (e)=>{
            if(selectBox.checked){
                console.log("checked");
                e.target.parentElement.parentElement.style.color = "white"
                e.target.parentElement.parentElement.style.backgroundColor = "rgb(202,138,4)"
                checkedAttendees++;
                checkedB.innerText = checkedAttendees
            }
            else{
                console.log("Gerg");
                e.target.parentElement.parentElement.style.color = "black"
                e.target.parentElement.parentElement.style.backgroundColor = "white"
                checkedAttendees--;
                checkedB.innerText = checkedAttendees
            }
        })
    })


}

config = {childList: true, subtree: true}

const observer = new MutationObserver(handleLoading)
observer.observe(document.getElementById("events-attendees"), config)

