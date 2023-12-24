const collapseButtonAction = () => {
    const collapseButtons = document.querySelectorAll(".collapse-button");
    const collapeables = document.querySelectorAll('.collapseable')

    collapeables.forEach((btn) => {
        btn.classList.add('overflow-hidden');
    })

    window.addEventListener("click", (e) => {
        if (e.target.classList.contains("collapse-button") && e.target.parentElement.parentElement.getAttribute("clicked") != "") {
            // e.target.parentElement.parentElement.classList.replace("h-20","h-fit");
            //console.log("a");
            e.target.parentElement.parentElement.setAttribute("clicked", "");
            e.target.classList.replace("bi-chevron-down","bi-chevron-up")
            
            //console.log(e.target.parentElement.parentElement);
        }
        else if (e.target.classList.contains("collapse-button") && e.target.parentElement.parentElement.getAttribute("clicked") == "") {
            //console.log("b");
            // e.target.parentElement.parentElement.classList.replace("h-fit","h-20");
            e.target.parentElement.parentElement.removeAttribute("clicked")
            e.target.classList.replace("bi-chevron-up", "bi-chevron-down")
        }
        else {
            //console.log("c");
            e.target.parentElement.parentElement.removeAttribute("clicked")
            e.target.classList.replace("bi-chevron-up", "bi-chevron-down")

            // e.target.parentElement.parentElement.classList.replace("h-fit","h-20");
        }
    })

    // h-20 overflow-hidden

    //console.log(collapeables);
}



//const collapseButtonAction = () => {
//    const coll = document.getElementsByClassName("collapse-button");

//    for (var i = 0; i < coll.length; i++) {
//        coll[i].addEventListener("click", function () {
//            this.classList.toggle("active");
//            console.log("GAGADGAG")
//            var content = this.parentElement.parentElement;
//            if (content.classList.contains("h-fit")) {
//                content.classList.replace("h-fit", "h-48");
//                content.classList.add("bg-blue-500");
//            } else {
//                content.classList.replace("h-48", "h-fit");
//                content.classList.remove("bg-blue-500");
//            }
//        });
//    }
//}

collapseButtonAction()