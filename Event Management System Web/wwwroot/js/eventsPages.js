const hBtn = document.querySelector('.v-btn')
const vBtn = document.querySelector('.h-btn')
const cards = document.querySelectorAll('.event-card')


const views =
    [
        { ".events": ['grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 2xl:grid-cols-5', 'py-4'] },
        //<<<<< HEAD
        { '.event-card': ['flex flex-col col-3 bg-white border border-yellow-700 rounded-xl h-[22rem] w-full relative overflow-hidden', 'flex w-full bg-white border border-yellow-700 rounded-3xl h-full relative mb-4 overflow-hidden'] },
        //=====
        { '.event-card': ['flex flex-col col-3 bg-white border border-yellow-700 rounded-xl h-[22rem] w-full relative overflow-hidden', 'flex w-full bg-white border border-yellow-700 rounded-xl h-full relative mb-4 overflow-hidden'] },
        //>>>>> a1ed148d72d69df305a45de0fa3e6e90f713aea4
        { '.card-img': ['w-full bg-gray-500 overflow-hidden h-[40%] bg-gray-300', 'h-36 w-[25%] bg-gray-300'] },
        { '.card-date': ['w-14 h-14 bg-yellow-600 flex text-center rounded-lg absolute inset-x-[65%] inset-y-[26%] text-xl font-sans leading-tight text-white', 'w-16 h-16 bg-yellow-600 flex text-center rounded-lg absolute inset-x-[22%] inset-y-[28%] text-xl font-sans leading-tight text-white'] },
        { '.card-info': ['text-yellow-700 h-[60%] px-4 pt-7 pb-4 flex flex-col grow justify-between', 'flex grow justify-between items-center text-yellow-700 py-4 px-12 w-[75%]'] },

        { '.card-text': ['text-justify', 'h-16 flex flex-col justify-between my-auto'] },
        { '.card-buttons': ['flex place-content-between mt-2', 'flex flex-col w-32 h-24 place-content-between'] },
        { '.card-header': ['text-2xl', 'text-3xl'] },
        { '.button': ['h-10 mx-1 my-2 rounded-full border border-yellow-700 w-1/2', 'h-10 rounded-full border border-yellow-700 w-full mx-1'] },
    ]


{/* <div class="card-desc text-sm">توعية بخصوص مخاطر الدرونر و شروط استخدامها, و المجالات في ذلك</div>
<div class="card-buttons flex place-content-between">
    <button class="w-1/2 h-10 ml-1 my-2 rounded-full border border-yellow-700" type="">عرض</button>
    <button class="w-1/2 h-10 mr-1 my-2 rounded-full text-white bg-yellow-600 hover:bg-yellow-500 ease-linear duration-200" type="">تعديل</button>
</div> */}

const cardsView = (view) => {
    let v = 0, h = 1;
    if (view == "h") { h = 0; v = 1 }
    else { h = 1; v = 0 }
    views.forEach((e) => {
        let key = Object.keys(e)[0];
        let cardClass = e[key][v];
        let hClasses = e[key][h];
        // console.log(key);
        hClasses.split(' ').forEach((cl) => {
            if (cl != "" && document.querySelectorAll(key).length == 1) {
                // console.log(cl,'removed');
                document.querySelector(key).classList.remove(cl)
            }
            else if (cl != "" && document.querySelectorAll(key).length > 1) {
                document.querySelectorAll(key).forEach((query) => {
                    query.classList.remove(cl)
                })
            }
            else {
                // console.log(cl, " is empty");
            }

        })
        cardClass.split(' ').forEach((cl) => {
            if (cl != "" && document.querySelectorAll(key).length == 1) {
                // console.log(cl,'added');
                document.querySelector(key).classList.add(cl)
            }
            else if (cl != "" && document.querySelectorAll(key).length > 1) {
                document.querySelectorAll(key).forEach((query) => {
                    query.classList.add(cl)
                })
            }

            else {
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
    hBtn.addEventListener('click', () => {
        cardsView('h')
        hBtn.classList.add("bg-yellow-600")
        vBtn.classList.remove("bg-yellow-600")
        // console.log(cards);
    })

    vBtn.addEventListener('click', () => {
        cardsView('v')
        vBtn.classList.add("bg-yellow-600")
        hBtn.classList.remove("bg-yellow-600")
        // console.log(cards);
    })
})