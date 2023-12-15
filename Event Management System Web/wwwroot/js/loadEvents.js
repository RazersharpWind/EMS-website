let selector =  document.getElementById("selector");
const eventsContainer = document.querySelector(".events")
console.log(eventsContainer.children);
const sort = () => {

let cardsData = []
const monthes = ["JAN", 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

if(selector.value == "category"){
    cardsData.sort((a, b)=> a["event-category"].localeCompare(b["event-category"]));
    fetch(".././edata.json").then(response => response.json()).then(data => {
        cardsData=[]; eventsContainer.innerHTML = '';
        data.forEach((card)=>{cardsData.push(card)})
        cardsData.sort((a, b)=> a["event-date"].localeCompare(b["event-date"]));
        cardsData.forEach((ca)=>{
            let shoretedDesc = "";
            if(String(ca["event-description"]).length > 61){shoretedDesc = String(ca["event-description"]).slice(0,55)+"..."}
            else{shoretedDesc = ca["event-description"]}

            const eventTemplate =
            `<div class="event-card flex flex-col col-3 bg-white border border-yellow-700 rounded-2xl h-[340px] w-[100%] relative justify-between overflow-hidden" attendees-list="${Object.keys(ca["event-attendees"])}" event-date="${ca["event-date"]}"  event-id="${ca["event-id"]}" event-time="${ca["event-time"]}" data-viewedEvent-location=${ca["event-location"]}>
                <div class="card-img h-36 w-full bg-gray-300 overflow-hidden">
                    <img src=${ca["event-image"]} alt="">
                </div>
    
                <div class="card-date w-14 h-14 bg-yellow-600 flex rounded-lg absolute inset-x-[65%] inset-y-[25%]  text-white text-center">
                    <div class="text-2xl leading-none flex flex-col justify-center my-auto font-semibold w-full h-full">
                        <h3 class="text-2xl h-fit p-0 m-0 leading-none">${String(ca["event-date"]).split("-")[0]}</h3>
                        <p class="text-[1rem] h-fit p-0">${monthes[parseInt(String(ca["event-date"]).split("-")[1])-1]}</p>
                    </div>
                </div>
    
                <div class="card-info h-2/3 text-yellow-700 px-4 pt-7 pb-4 flex flex-col grow justify-between">
                    <div class="card-text justify-between">
                        <div class="card-header h-1/2 text-xl font-bold mb-4 text-justify hyphens-auto">${ca["event-name"]}</div>
                        <div class="card-desc h-1/2 overflow-y-auto text-xs mt-2 text-justify">${shoretedDesc}</div>
                    </div>
    
                    <div class="card-buttons w-full flex place-content-between h-fit my-2">
                        <button id="show-button" class="w-1/2 show-button mx-1 button outline-0 h-10 rounded-full border border-yellow-700" type="">View</button>
                        <!-- h-10 mx-1 my-2 rounded-full border border-yellow-700 w-1/2 -->
                        <button id="register-button" class="w-1/2 register-button mx-1 button outline-0 h-10 rounded-full text-white bg-yellow-600 hover:bg-yellow-500 ease-linear duration-200" type="">Register</button>
                    </div>
                </div>
            </div>`

            const parser = new DOMParser();
            const doc = parser.parseFromString(eventTemplate, "text/html");
            const loadedCard = doc.querySelector(".event-card");
            eventsContainer.append(loadedCard)

            console.log(ca);
        })
        console.log(eventsContainer);
    })
}
else if(selector.value == "newest"){
    cardsData.sort((a, b)=> a["event-date"].localeCompare(b["event-date"]));
    fetch(".././edata.json").then(response => response.json()).then(data => {
        cardsData=[]; eventsContainer.innerHTML = '';
        data.forEach((card)=>{cardsData.push(card)})
        cardsData.forEach((ca)=>{
            let shoretedDesc = ca["event-description"];
            // if(String(ca["event-description"]).length > 61){shoretedDesc = String(ca["event-description"]).slice(0,55)+"..."}
            // else{shoretedDesc = ca["event-description"]}
    
            const eventTemplate =
            `<div class="event-card flex flex-col col-3 bg-white border border-yellow-700 rounded-2xl h-[340px] w-[100%] relative justify-between overflow-hidden" attendees-list="${Object.keys(ca["event-attendees"])}" event-date="${ca["event-date"]}"  event-id="${ca["event-id"]}" event-time="${ca["event-time"]}" data-viewedEvent-location="${ca["event-location"]}" ">
                <div class="card-img h-36 w-full bg-gray-300 overflow-hidden">
                    <img src=${ca["event-image"]} alt="">
                </div>
    
                <div class="card-date w-14 h-14 bg-yellow-600 flex rounded-lg absolute inset-x-[65%] inset-y-[25%]  text-white text-center">
                    <div class="text-2xl leading-none flex flex-col justify-center my-auto font-semibold w-full h-full">
                        <h3 class="text-2xl h-fit p-0 m-0 leading-none">${String(ca["event-date"]).split("-")[0]}</h3>
                        <p class="text-[1rem] h-fit p-0">${monthes[parseInt(String(ca["event-date"]).split("-")[1])-1]}</p>
                    </div>
                </div>
    
                <div class="card-info h-2/3 text-yellow-700 px-4 pt-7 pb-4 flex flex-col grow justify-between">
                    <div class="card-text justify-between">
                        <div class="card-header h-1/2 text-xl font-bold mb-4 text-justify hyphens-auto">${ca["event-name"]}</div>
                        <div class="card-desc h-1/2 overflow-y-auto text-xs mt-2 text-justify">${shoretedDesc}</div>
                    </div>
    
                    <div class="card-buttons w-full flex place-content-between h-fit my-2">
                        <button id="show-button" class="w-1/2 show-button mx-1 button outline-0 h-10 rounded-full border border-yellow-700" type="">View</button>
                        <!-- h-10 mx-1 my-2 rounded-full border border-yellow-700 w-1/2 -->
                        <button id="register-button" class="w-1/2 register-button mx-1 button outline-0 h-10 rounded-full text-white bg-yellow-600 hover:bg-yellow-500 ease-linear duration-200" type="">Register</button>
                    </div>
                </div>
            </div>`
    
            const parser = new DOMParser();
            const doc = parser.parseFromString(eventTemplate, "text/html");
            const loadedCard = doc.querySelector(".event-card");
            eventsContainer.append(loadedCard)
    
            console.log(ca);
        })



        console.log(eventsContainer);
    })
    cardsData.sort((a, b)=> a["event-category"].localeCompare(b["event-date"]));
    //used to compare dates
}
}
// console.log(cardsData);

sort()
selector.addEventListener("change", sort)
