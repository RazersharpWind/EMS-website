const hBtn = document.querySelector('.v-btn')
const vBtn = document.querySelector('.h-btn')
const cards = document.querySelectorAll('.event-card')


const views =
[
    {".events"       :['grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 2xl:grid-cols-5 z-0', 'py-4']},
    {'.event-card'   :['flex flex-col col-3 bg-white border border-yellow-700 rounded-3xl h-[340px] w-[90%] relative justify-between', 'flex w-full bg-white border border-yellow-700 rounded-3xl h-full relative mb-4']},
    {'.card-img'     :['h-36 w-full rounded-t-3xl bg-gray-300 overflow-hidden', 'h-36 w-[25%] rounded-r-3xl bg-gray-300 overflow-hidden']},
    {'.card-date'    :['w-14 h-14 bg-yellow-600 flex text-center rounded-lg absolute inset-x-[65%] inset-y-[25%] text-xl font-sans leading-tight text-white', 'w-16 h-16 bg-yellow-600 flex text-center rounded-lg absolute inset-x-[22%] inset-y-[28%] text-xl font-sans leading-tight text-white']},
    {'.card-info'    :['h-fit text-yellow-700 px-4 pt-7 pb-4 flex flex-col grow justify-between','flex grow justify-between items-center text-yellow-700 py-4 px-12']},

    {'.card-header'  :['h-1/2 text-xl font-bold mb-4 text-justify hyphens-auto', 'text-3xl']},
    {'.card-text'    :['justify-between','h-16 flex flex-col justify-between my-auto']},
    {'.card-buttons' :['w-full flex place-content-between h-fit my-2', 'flex flex-col w-32 h-24 place-content-between']},
    {'.button'       :['show-button button outline-0 w-1/2 h-10 mx-1 rounded-full border border-yellow-700','rounded-full border w-full h-10 border-yellow-700']},
]


{/* <div class="card-desc text-sm">توعية بخصوص مخاطر الدرونر و شروط استخدامها, و المجالات في ذلك</div>
<div class="card-buttons flex place-content-between">
    <button class="w-1/2 h-10 ml-1 my-2 rounded-full border border-yellow-700" type="">عرض</button>
    <button class="w-1/2 h-10 mr-1 my-2 rounded-full text-white bg-yellow-600 hover:bg-yellow-500 ease-linear duration-200" type="">تعديل</button>
</div> */}

const cardsView = (view) => {
    let v = 0, h=1;
    if (view == "h"){h = 0; v = 1}
    else{h = 1; v=0}
    views.forEach((e) => {
        let key = Object.keys(e)[0];
        let cardClass = e[key][v];
        let hClasses = e[key][h];
        // console.log(key);
        hClasses.split(' ').forEach((cl) => {
            if(cl != "" && document.querySelectorAll(key).length == 1){
                // console.log(cl,'removed');
                document.querySelector(key).classList.remove(cl)
            }
            else if(cl != "" && document.querySelectorAll(key).length > 1){
                document.querySelectorAll(key).forEach((query)=>{
                    query.classList.remove(cl)
                })
            }
            else{
                // console.log(cl, " is empty");
            }
    
        })
        cardClass.split(' ').forEach((cl) => {
            if(cl != "" && document.querySelectorAll(key).length == 1){
                // console.log(cl,'added');
                document.querySelector(key).classList.add(cl)
            }
            else if(cl != "" && document.querySelectorAll(key).length > 1){
                document.querySelectorAll(key).forEach((query)=>{
                    query.classList.add(cl)
                })
            }
    
            else{
                // console.log(cl, " is empty");
            }
        })
        // console.log(document.querySelector(Object.keys(e)[0]));
    
    
        // document.querySelector(key).classList.add( ...e[key][0].split(' ').join(',').split(',') )
        // document.querySelector(key).classList.remove( ...e[key][1].split(' ').join(',').split(',') )
        
    })
    
}


cardsView("v")



cards.forEach((card) => {
    hBtn.addEventListener('click', ()=>{
        cardsView('h')
        hBtn.classList.add("bg-yellow-600")
        vBtn.classList.remove("bg-yellow-600")
        // console.log(cards);
    })
    
    vBtn.addEventListener('click', ()=>{
        cardsView('v')
        vBtn.classList.add("bg-yellow-600")
        hBtn.classList.remove("bg-yellow-600")
        // console.log(cards);
    })
})