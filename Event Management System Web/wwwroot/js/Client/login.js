const loginDialog = document.getElementById("loginDialog");
const loginButton = document.getElementById("loginButton");
const guestMode = document.querySelector(".guest-button");

loginButton.addEventListener("click", ()=>{
    const windowHeight = window.innerHeight
    window.scrollTo(0, 0)
    loginDialog.showModal()
    loginDialog.setAttribute("open", "")
    loginDialog.removeAttribute("close")
})

guestMode.addEventListener("click", ()=> {
    setTimeout(()=>{
        loginDialog.close()
    },300)
    loginDialog.setAttribute("close","")
})


const loadingPage = document.getElementById('loadingPage');
const spinner = document.getElementById("spinner")

// window.addEventListener('load', ()=>{
    //setTimeout(()=>{
    //    loadingPage.style.display = 'none';
    //},1500)
// })