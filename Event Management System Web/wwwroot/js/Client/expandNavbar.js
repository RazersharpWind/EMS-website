const navBarButton = document.getElementById("expand-navbar").firstElementChild;
const navBar = document.getElementById("links");
const mainLinks = document.getElementById("g-links");
window.addEventListener("click",(e)=>{
    if(e.target == navBarButton){
        navBar.classList.replace("-left-80", "left-0")
        // console.log(e.target);
    }
    else if(e.target != navBarButton && navBar.lastElementChild.querySelectorAll("li")){
        navBar.classList.replace("left-0", "-left-80")
        console.log(e.target);
        console.log([...navBar.lastElementChild.querySelectorAll("li")].includes(e.target));
    }


    if(e.target == mainLinks || e.target == mainLinks.lastElementChild){
        e.target.classList.replace("hidden", "block")
    };
});
