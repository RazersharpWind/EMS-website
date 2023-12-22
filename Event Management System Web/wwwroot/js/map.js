
let service2;
let map;

let editingService2;
let editingMap;


function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 25.23321, lng: 55.356064 },
        zoom: 10,
        mapTypeControl: false,
    });

    editingMap = new google.maps.Map(document.getElementById("edit-event-map"), {
        center: { lat: 25.23321, lng: 55.356064 },
        zoom: 10,
        mapTypeControl: false,
    });


    let resultss = document.getElementById("results");
    let editingResultss = document.getElementById("edit-event-results");






    const displaySuggestions = function (predictions, status) {
        if (status != google.maps.places.PlacesServiceStatus.OK || !predictions) {
            alert(status);
            return;
        }

        predictions.forEach((prediction) => {
            const li = document.createElement("li");
            let icon = `
             <div class="flex items-center h-fit w-full overflow-hidden">
                <img class="h-8 w-8" src="https://thumbs.dreamstime.com/b/web-186775053.jpg" />
                <p class='grow'>${prediction.description}</p>
             </div>
                        `

            li.innerHTML = icon;
            //li.appendChild(document.createTextNode(prediction.description));

            li.classList.add("cursor-pointer", "hover:bg-gray-200", "px-2", "py-0.5", "flex")
            resultss.appendChild(li);

            li.addEventListener("click", () => {
                document.getElementById("location-finder").value = li.innerText;
                resultss.classList.add("hidden", "flex")


                const request = {
                    query: li.textContent,
                    fields: ["name", "geometry"],
                };

                service2 = new google.maps.places.PlacesService(map);
                service2.findPlaceFromQuery(request, (results, status) => {
                    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
                        for (let i = 0; i < results.length; i++) {
                            createMarker(results[i]);
                        }

                        map.setCenter(results[0].geometry.location);
                    }

                });





            })
        });
    };

    const displaySuggestions2 = function (predictions, status) {
        if (status != google.maps.places.PlacesServiceStatus.OK || !predictions) {
            alert(status);
            return;
        }

        predictions.forEach((prediction) => {
            const li = document.createElement("li");
            let icon = `
             <div class="flex items-center h-fit w-full overflow-hidden">
                <img class="h-8 w-8" src="https://thumbs.dreamstime.com/b/web-186775053.jpg" />
                <p class='grow'>${prediction.description}</p>
             </div>
                        `

            li.innerHTML = icon;
            //li.appendChild(document.createTextNode(prediction.description));

            li.classList.add("cursor-pointer", "hover:bg-gray-200", "px-2", "py-0.5", "flex")
            editingResultss.appendChild(li);

            li.addEventListener("click", () => {
                document.getElementById("edit-location-finder").value = li.innerText;
                editingResultss.classList.add("hidden", "flex")


                const request = {
                    query: document.getElementById("edit-location-finder").value,
                    fields: ["name", "geometry"],
                };


                editingService2 = new google.maps.places.PlacesService(editingMap);
                editingService2.findPlaceFromQuery(request, (results, status) => {
                    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
                        for (let i = 0; i < results.length; i++) {
                            createMarker(results[i]);
                        }

                        editingMap.setCenter(results[0].geometry.location);
                    }

                });




            })
        });
    };



    const service = new google.maps.places.AutocompleteService();
    const editingService = new google.maps.places.AutocompleteService();

    window.addEventListener("click", (e) => {
        if (e.target == document.getElementById("location-finder") && e.target.children.length > 0) {
            resultss.classList.remove("hidden")
            service.getQueryPredictions({ input: document.getElementById("location-finder").value }, displaySuggestions);
        }
        else if (e.target != document.getElementById("location-finder")) {
            resultss.classList.add("hidden")
        }

        if (e.target == document.getElementById("edit-location-finder") && e.target.children.length > 0) {
            editingResultss.classList.remove("hidden");
            editingService.getQueryPredictions({ input: document.getElementById("edit-location-finder").value }, displaySuggestions2);
        }
        else if (e.target != document.getElementById("edit-location-finder")) {
            editingResultss.classList.add("hidden")
        }




    })

    document.getElementById("location-finder").addEventListener("input", () => {
        document.getElementById("results").classList.remove("hidden")
        service.getQueryPredictions({ input: document.getElementById("location-finder").value }, displaySuggestions);
        document.getElementById("results").innerHTML = "";
    })


    document.getElementById("edit-location-finder").addEventListener("input", () => {
        document.getElementById("edit-event-results").classList.remove("hidden")
        service.getQueryPredictions({ input: document.getElementById("edit-location-finder").value }, displaySuggestions2);
        document.getElementById("edit-event-results").innerHTML = "";
    })



}


function createMarker(place) {
    if (!place.geometry || !place.geometry.location) return;

    const marker = new google.maps.Marker({
        map,
        position: place.geometry.location,
    });

    google.maps.event.addListener(marker, "click", () => {
        infowindow.setContent(place.name || "");
        infowindow.open(map);
    });

    const marker2 = new google.maps.Marker({
        editingMap,
        position: place.geometry.location,
    });

    google.maps.event.addListener(marker2, "click", () => {
        infowindow.setContent(place.name || "");
        infowindow.open(editingMap);
    });

}



window.initMap = initMap;


