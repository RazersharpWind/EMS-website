const breifEventsSection = document.querySelector(".last-events");
const lastThreeEvents = []
// const monthes = ["JAN", 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']


fetch("edata.json").then(response => response.json()).then(data => {
    console.log(data);
    for(let i = 0; i < 5; i++){
        lastThreeEvents.push(data[i]);
        const eventTemplate =
            `<div class="event-card mr-8 bg-white border border-yellow-700 rounded-3xl w-[16rem] h-[22rem] relative overflow-hidden" event-id=${lastThreeEvents[i]['event-id']} attendees-list="${Object.keys(lastThreeEvents[i]["event-attendees"])}">
                <div class="card-img w-full rounded-t-3xl overflow-hidden h-[40%] bg-gray-300">
                    <img class="" src=${lastThreeEvents[i]["event-image"]} alt="">
                </div>
                <div class="card-date w-14 h-14 bg-yellow-600 flex rounded-lg absolute inset-x-[65%] inset-y-[25%]  text-white text-center">
                    <div class="text-2xl leading-none flex flex-col justify-center my-auto font-semibold w-full h-full">
                        <h3 class="text-2xl h-fit p-0 m-0 leading-none">${String(lastThreeEvents[i]["event-date"]).split("-")[0]}</h3>
                        <p class="text-[1rem] h-fit p-0">${monthes[parseInt(String(lastThreeEvents[i]["event-date"]).split("-")[1])-1]}</p>
                    </div>
                </div>
                <div class="card-info text-yellow-700 h-[60%] px-4 pt-7 pb-4 flex flex-col grow justify-between">
                    <div class="card-text text-left">
                        <div class="card-header h-fit font-bold text-lg">${lastThreeEvents[i]['event-name']}</div>
                        <div class="card-desc h-1/2 text-xs mt-2">${lastThreeEvents[i]["event-description"]}</div>
                    </div>
            
                    <div class="card-buttons flex place-content-between mt-2">
                        <button id="show-button" class="show-button button outline-0 h-10 mx-1 my-2 rounded-full border border-yellow-700 w-1/2" type="">View</button>
                        <button id="edit-button" class="edit-button button outline-0 text-white bg-yellow-600 hover:bg-yellow-500 ease-linear duration-200 h-10 mx-1 my-2 rounded-full border border-yellow-700 w-1/2" type="">Edit</button>
                    </div>
                </div>
            </div>`


        const parser = new DOMParser()
        const doc = parser.parseFromString(eventTemplate, "text/html")
        const ele = doc.querySelector(".event-card")
        breifEventsSection.append(ele)
    }
})


{/* <div class="card-date w-14 h-14 bg-yellow-600 flex text-center rounded-lg absolute inset-x-[65%] inset-y-[26%] text-xl font-sans leading-tight text-white">
    <h3 class="text-2xl leading-none my-auto">${String(lastThreeEvents[i]["event-date"]).split("-")[0]}
        <span class="text-lg leading-none">${monthes[parseInt(String(lastThreeEvents[i]["event-date"]).split("-")[1])-1]}</span>
    </h3>
</div> */}
