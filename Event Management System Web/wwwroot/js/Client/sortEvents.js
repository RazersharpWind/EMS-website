fetch("../edata.json")
    .then(response => response.json())
    .then(events => {
        const a = document.getElementById('selector');
        if(a.value == "النوع"){
            events.sort((a, b)=>a["event-category"].localeCompare(b["event-category"]))
            console.log(events);
        }

})
