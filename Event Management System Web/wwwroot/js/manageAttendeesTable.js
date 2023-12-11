const checkedB = document.getElementById("checked-number").firstElementChild.firstElementChild
let checkedAttendees = 0;
const unSelectAllButton = document.getElementById("unselect-all")


const handleLoading = (mutationsList, observer) => {
    //console.log("Handle loading file")



    const attendeesSelectBox = document.querySelectorAll(".select-box");
    const attendeeRows = document.querySelectorAll(".manage-attendee");
    const manageAttendeeButtons = document.querySelectorAll(".manage-attendee-button");

    const kickSelected = document.getElementById("kickSelected");
    const remindSelected = document.getElementById("remindSelected");

    manageAttendeeButtons.forEach((manageAttendeeButton)=>{
        window.addEventListener("click", (e)=>{
            if(e.target == manageAttendeeButton){
                e.target.nextElementSibling.toggleAttribute("hidden")
            }
            else if(e.target != manageAttendeeButton && manageAttendeeButton.nextElementSibling.getAttribute("hidden") != ""){
                manageAttendeeButton.nextElementSibling.setAttribute("hidden", "")
            }
        })
    })


    attendeesSelectBox.forEach((selectBox)=>{

        window.addEventListener("click",(e)=>{
            if (e.target == selectBox) {
                if (checkedAttendees >= 0) {
                    unSelectAllButton.classList.remove("hidden");
                }


                if (selectBox.checked) {
                    //console.log("checked");
                    e.target.parentElement.parentElement.style.color = "white";
                    e.target.parentElement.parentElement.style.backgroundColor = "rgb(202,138,4)";
                    checkedAttendees++;
                    checkedB.innerText = checkedAttendees;
                }
                else {
                    //console.log("Gerg");
                    e.target.parentElement.parentElement.style.color = "black";
                    e.target.parentElement.parentElement.style.backgroundColor = "white";
                    checkedAttendees--;
                    checkedB.innerText = checkedAttendees;
                    if (checkedAttendees == 0) { unSelectAllButton.classList.add("hidden"); }
                }
            }

            else if (e.target == unSelectAllButton) {
                selectBox.checked = false;
                selectBox.parentElement.parentElement.style.color = "black";
                selectBox.parentElement.parentElement.style.backgroundColor = "white";
                checkedB.innerText = checkedAttendees;
                checkedAttendees = 0;
                unSelectAllButton.classList.add("hidden");
            }

            else if (e.target == kickSelected) {
                if (selectBox.checked && checkedAttendees - 1 > 0) {
                    selectBox.parentElement.parentElement.classList.add("hidden");
                    checkedAttendees--;
                    checkedB.innerText = checkedAttendees;
                }
                else if (selectBox.checked && checkedAttendees - 1 == 0) {
                    selectBox.parentElement.parentElement.classList.add("hidden");
                    unSelectAllButton.classList.add("hidden");
                    checkedAttendees--;
                    checkedB.innerText = checkedAttendees;
                }
            }

        })

    })


    const manageButtons = document.querySelectorAll(".manage-attendee-buttons");
    console.log(manageButtons)

    manageButtons.forEach((mb) => {

        mb.childNodes.forEach((mbb) => {
            mbb.addEventListener("click", (e) => {
            switch (mbb.innerText) {
                case "Kick":
                    console.log("Kick him");
                    e.target.parentElement.parentElement.parentElement.parentElement.classList.add("hidden")
                    break;

                case "Remind":
                    console.log("Remind him");
                    break;

                case "Invite":
                    console.log("Invite him");
                    break;
                default:
                    console.log("Hala")
                }

            })
        })


        console.log(mb);
    })
 



}

config = {childList: true, subtree: true}

const observer = new MutationObserver(handleLoading)
observer.observe(document.getElementById("events-attendees"), config)
handleLoading();