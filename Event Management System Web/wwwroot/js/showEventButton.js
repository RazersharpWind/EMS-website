const viewDialog = document.getElementById("view-dialog");
let showButtons = document.querySelectorAll('.show-button');
const closeButton = document.getElementById("close-button")
const viewEventImage = document.querySelector('#view-dialog .new-event-image').firstElementChild
const viewEventHeader = document.querySelector('#view-dialog .new-event-subject h4')
const viewEventDesc = document.querySelector('#view-dialog .new-event-describtion h4')
const viewEventDate = document.querySelector('.new-event-when h4')
const viewEventId = document.getElementById('event-id-space');




const openShow = () =>{
    showButtons.forEach((showButton)=>{
        showButton.addEventListener("click", (e)=>{
            viewDialog.showModal();
            viewDialog.removeAttribute("close" )
            viewEventImage.src = e.target.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.src;
            viewEventHeader.textContent = e.target.parentElement.parentElement.parentElement.lastElementChild.firstElementChild.firstElementChild.textContent
            viewEventDesc.textContent = e.target.parentElement.parentElement.parentElement.lastElementChild.firstElementChild.lastElementChild.textContent
            viewEventDate.textContent = e.target.parentElement.parentElement.parentElement.children[1].firstElementChild.textContent
            viewEventId.textContent = e.target.parentElement.parentElement.parentElement.getAttribute('event-id');
    
        })
    })
}
openShow()
// const closeEvent = () => {
//     viewDialog.setAttribute("close" ,"")
//     setTimeout(()=>{viewDialog.close()},300)
// }



// make every close button work
document.querySelectorAll('.cancel-button').forEach((cButton) => {
    cButton.addEventListener('click', ()=>{
        cButton.parentElement.parentElement.parentElement.parentElement.setAttribute("close" ,"")
        setTimeout(()=>{cButton.parentElement.parentElement.parentElement.parentElement.close()},300)
    })
})


