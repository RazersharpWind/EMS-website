const collapseButtonAction = () => {
    const coll = document.getElementsByClassName("collapsible");

    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.parentElement.nextElementSibling;
            if (content.style.display === "table") {
                content.style.display = "none";
            } else {
                content.style.display = "table";
            }
        });
    }
}

collapseButtonAction()