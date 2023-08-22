//do the same thing but from another pages
const newEventButton = document.getElementById("dialog-button")

newEventButton.addEventListener('click', (e)=>{
    const t = {
        "الرئيسية": "Index",
        "التقارير": "Index",
        "الأخبار": "Index",
        "تواصل معنا": "Index",
    }
    console.log(e.target);
    window.location.href = `events.html?from${"Index"}=true`;
})