let b = new Date()
//WeekDay Month TodayDate Year hh:mm:ss GMT+0400 (Gulf Standard Time)

const eventDay = {
    name: "Clear Sky",
    date: '2023-09-30',
    time: "00:00:00",
    attendees: 52,
}

let minsTime = document.getElementById('mins')?.firstElementChild;
let hrsTime  = document.getElementById('hrs')?.firstElementChild;
let dayTime  = document.getElementById('days')?.firstElementChild;

setInterval(()=>{
    let a = new Date(`${eventDay.date}T${eventDay.time}`)
    let b = new Date()
    // let todayDate        = parseInt(b.getTime()/1000/60/60/24);
    // let todayHours       = parseInt(a.toString().split(' ')[4].split(':')[0]);
    // let todayMins        = parseInt(a.toString().split(' ')[4].split(':')[1]);
    // let todaySeconds     = parseInt(a.toString().split(' ')[4].split(':')[2]);
    // const eventDayDate   = parseInt(eventDay.date.split('/')[0])
    // const eventHrs       = parseInt(eventDay.time.split(':')[0])
    // const eventMins      = parseInt(eventDay.time.split(':')[1])
    // const eventSecs      = parseInt(eventDay.time.split(':')[2])

    let days = parseInt((a-b)/1000/60/60/24)
    let hrs  = parseInt((a-b)/1000/60/60)-(days*24)
    let mins = (parseInt((a-b)/1000/60))-(days*24*60)-(hrs*60)
    let secs = (parseInt((a-b)/1000))-(days*24*60*60)-(hrs*60*60)-(mins*60)
    
    if(days < 1){
        dayTime.parentElement.lastElementChild.textContent = "Hrs"
        hrsTime.parentElement.lastElementChild.textContent = "Mins"
        minsTime.parentElement.lastElementChild.textContent= "Secs"
        hrs  >= 10 ? dayTime.textContent  = hrs  : dayTime.textContent  = "0" + hrs
        mins >= 10 ? hrsTime.textContent  = mins : hrsTime.textContent  = "0" + mins
        secs >= 10 ? minsTime.textContent = secs : minsTime.textContent = "0" + secs
    }
    else{
        days >= 10 ? dayTime.textContent  = days : dayTime.textContent  = "0" + days
        hrs  >= 10 ? hrsTime.textContent  = hrs  : hrsTime.textContent  = "0" + hrs
        mins >= 10 ? minsTime.textContent = mins : minsTime.textContent = "0" + mins

    }
    }
,1000)