//WeekDay Month TodayDate Year hh:mm:ss GMT+0400 (Gulf Standard Time)


let minsTime = document.getElementById('mins').firstElementChild;
let hrsTime = document.getElementById('hrs').firstElementChild;
let dayTime = document.getElementById('days').firstElementChild;


const eventDay = {
    name: "",
    date:
        `${document.getElementById('days').firstElementChild.textContent.split("/")[2].slice(0, 4)}-${document.getElementById('hrs').firstElementChild.textContent.split("/")[1].slice(-2)}-${document.getElementById('mins').firstElementChild.textContent.split("/")[0].slice(-2)}`,

    time: `${document.getElementById('hrs').firstElementChild.textContent.split("/")}:${document.getElementById('hrs').firstElementChild.textContent.split("/")}: ${document.getElementById('hrs').firstElementChild.textContent.split("/")}`,
}

console.log(`${document.getElementById('days').firstElementChild.textContent.split("/")[2].slice(0, 4)}-${document.getElementById('hrs').firstElementChild.textContent.split("/")[1].slice(-2)}-${document.getElementById('mins').firstElementChild.textContent.split("/")[0].slice(-2)}`)

setInterval(() => {
    let a = new Date(`${eventDay.date}`)
    let b = new Date()


    let days = parseInt((a - b) / 1000 / 60 / 60 / 24);
    let hrs = parseInt((a - b) / 1000 / 60 / 60) - (days * 24);
    let mins = (parseInt((a - b) / 1000 / 60)) - (days * 24 * 60) - (hrs * 60);
    let secs = (parseInt((a - b) / 1000)) - (days * 24 * 60 * 60) - (hrs * 60 * 60) - (mins * 60);

    if (days < 1) {
        dayTime.parentElement.lastElementChild.textContent = "Hrs"
        hrsTime.parentElement.lastElementChild.textContent = "Mins"
        minsTime.parentElement.lastElementChild.textContent = "Secs"
        hrs >= 10 ? dayTime.textContent = hrs : dayTime.textContent = "0" + hrs
        mins >= 10 ? hrsTime.textContent = mins : hrsTime.textContent = "0" + mins
        secs >= 10 ? minsTime.textContent = secs : minsTime.textContent = "0" + secs
    }
    else {
        days >= 10 ? dayTime.textContent = days : dayTime.textContent = "0" + days;
        hrs >= 10 ? hrsTime.textContent = hrs : hrsTime.textContent = "0" + hrs;
        mins >= 10 ? minsTime.textContent = mins : minsTime.textContent = "0" + mins;

    }
}
    , 1000)