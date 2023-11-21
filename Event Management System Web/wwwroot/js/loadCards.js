const eventsContainer = document.querySelector(".events")

const cardsData = []

fetch("edata.json").then(response => response.json()).then(data => {
    data.forEach((card)=>{
        let shoretedDesc = "";
        let badge = ''
        // if(String(card["event-description"]).length > 55){shoretedDesc = String(card["event-description"]).slice(0,55)+"..."}
        // else{shoretedDesc = card["event-description"]}
        shoretedDesc = card["event-description"]
        cardsData.push(card)
        if(parseInt(String(card["event-date"]).split("-")[2]) >= 2023){
            if(parseInt(String(card["event-date"]).split("-")[1]) < 7){
                badge = `<div class="event-badge absolute top-4 left-4 bg-red-600 rounded w-12 text-xs text-white p-0.5 text-center py-1">Over</div>`
            }
            else{badge = ''}
        }
        else{
            badge = `<div class="event-badge absolute top-4 left-4 bg-red-600 rounded w-12 text-xs text-white p-0.5 text-center py-1">منتهي</div>`

        }
        const eventTemplate =
        `<div class="event-card flex flex-col col-3 bg-white border border-yellow-700 rounded-xl h-[52rem] w-full relative overflow-hidden" event-id=${card['event-id']} data-event-date="${card["event-date"]}" event-time="${card["event-time"]}" attendees-list="${Object.keys(card["event-attendees"])}">
            <div class="card-img rounded-xl overflow-hidden w-full h-[40%] bg-gray-300 relative">
                <img class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover m-auto min-w-full min-h-full w-auto h-auto" src=${card["event-image"]} alt="">
            </div>
            <div class="card-date w-14 h-14 bg-yellow-600 flex rounded-lg absolute right-[16%] top-[30%] text-white text-center">
                <div class="text-2xl leading-none flex flex-col justify-center my-auto font-semibold w-full h-full">
                    <h3 class="text-2xl h-fit p-0 m-0 leading-none">${String(card["event-date"]).split("-")[0]}</h3>
                    <p class="text-[1rem] h-fit p-0">${monthes[parseInt(String(card["event-date"]).split("-")[1])-1]}</p>
                </div>
            </div>
            ${badge}
            <div class="card-info text-yellow-700 h-[60%] px-4 pt-7 pb-4 flex flex-col grow justify-between">
                <div class="card-text text-justify">
                    <div class="card-header h-fit font-bold text-xl">${card['event-name']}</div>
                    <div class="card-desc h-10 overflow-hidden text-sm mt-2">${shoretedDesc}</div>
                </div>

                <div class="card-buttons flex place-content-between mt-2">
                    <button id="show-button" class="show-button button outline-0 h-10 mx-1 my-2 rounded-full border border-yellow-700 w-1/2" type="">View</button>
                    <button id="edit-button" class="edit-button button outline-0 text-white bg-yellow-600 hover:bg-yellow-500 ease-linear duration-200 h-10 mx-1 my-2 rounded-full border border-yellow-700 w-1/2" type="">Modify</button>
                </div>
            </div>
        </div>`

        const parser = new DOMParser();
        const doc = parser.parseFromString(eventTemplate, "text/html");
        const loadedCard = doc.querySelector(".event-card")
        eventsContainer.append(loadedCard)
    })


    cardsData.sort((a,b)=> b["event-id"] - a["event-id"])
    console.log(cardsData);

})


