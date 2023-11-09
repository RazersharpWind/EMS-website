const checkedB = document.getElementById("checked-number").firstElementChild.firstElementChild
let checkedAttendees = 0;
const selectAllButton = document.getElementById("select-all")


const handleLoading = (mutationsList, observer) => {
    console.log("Handle loading file")


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
        
        window.addEventListener("click",(e)=>{
            if(e.target == selectBox){
                if(checkedAttendees >= 0){
                    selectAllButton.classList.remove("hidden")
                }


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
                    if (checkedAttendees == 0) { selectAllButton.classList.add("hidden") }
                }
            }
            else if(e.target == selectAllButton){
                selectBox.checked = false;
                selectBox.parentElement.parentElement.style.color = "black"
                selectBox.parentElement.parentElement.style.backgroundColor = "white"
                checkedB.innerText = checkedAttendees
                checkedAttendees = 0
                selectAllButton.classList.add("hidden")
            }
        })

    })


}

config = {childList: true, subtree: true}

const observer = new MutationObserver(handleLoading)
observer.observe(document.getElementById("events-attendees"), config)
handleLoading();