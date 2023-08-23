const collapseButtonAction = () => {
    const collapseButtons = document.querySelectorAll(".collapse-button");
    const collapeables = document.querySelectorAll('.collapseable')

    collapeables.forEach((btn)=>{
        btn.classList.add('overflow-hidden');
    })

    window.addEventListener("click", (e)=> {
        if(e.target.classList.contains("collapse-button") && e.target.parentElement.parentElement.getAttribute("clicked")!=""){
            // e.target.parentElement.parentElement.classList.replace("h-20","h-fit");
            e.target.parentElement.parentElement.setAttribute("clicked", "")
            console.log(e.target.parentElement.parentElement);
        }
   else if(e.target.classList.contains("collapse-button") && e.target.parentElement.parentElement.getAttribute("clicked")==""){
            // e.target.parentElement.parentElement.classList.replace("h-fit","h-20");
            e.target.parentElement.parentElement.removeAttribute("clicked")
        }
        else{
            e.target.parentElement.parentElement.removeAttribute("clicked")
            // e.target.parentElement.parentElement.classList.replace("h-fit","h-20");
        }
    })

    // h-20 overflow-hidden

    console.log(collapeables);
}

// collapseButtonAction()