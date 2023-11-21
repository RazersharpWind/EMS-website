const rightBtn = document.getElementById('right-btn')
const leftBtn = document.getElementById('left-btn')
const scrollable = document.getElementById('events-wrapper')

leftBtn.addEventListener('click', ()=>{
    scrollable.scrollLeft -= 200;
})

rightBtn.addEventListener('click', ()=>{
    scrollable.scrollLeft += 200;
})

console.log("G");