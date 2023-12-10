
let service2;
let map;
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 25.23321, lng: 55.356064 },
        zoom: 10,
        mapTypeControl: false,
    });
    const card = document.getElementById("pac-card");
    const input = document.getElementById("location-finder");
    const biasInputElement = document.getElementById("use-location-bias");
    const results = document.getElementById("results")
    const strictBoundsInputElement = document.getElementById("use-strict-bounds");
    const options = {
        fields: ["formatted_address", "geometry", "name"],
        strictBounds: false,
    };

    



    //map.controls[google.maps.ControlPosition.TOP_LEFT].push(card);



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
            document.getElementById("results").appendChild(li);

            li.addEventListener("click", () => {
                document.getElementById("location-finder").value = li.innerText;
                document.getElementById("results").classList.add("hidden", "flex")


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

    const service = new google.maps.places.AutocompleteService();

    window.addEventListener("click", (e) => {
        if (e.target == document.getElementById("location-finder")) {
            document.getElementById("results").classList.remove("hidden")
            service.getQueryPredictions({ input: document.getElementById("location-finder").value }, displaySuggestions);
        }
        else {
            document.getElementById("results").classList.add("hidden")
        }
    })

    document.getElementById("location-finder").addEventListener("input", () => {
        document.getElementById("results").classList.remove("hidden")
        service.getQueryPredictions({ input: document.getElementById("location-finder").value }, displaySuggestions);
        document.getElementById("results").innerHTML = "";
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
}



window.initMap = initMap;


