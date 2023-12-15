let map;
// 25.23299003801918, 55.35581019974286
async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
    const gcaa = { lat: 25.23299003801918, lng: 55.35581019974286 }
    const gcaa2 = { lat: 24.422404126154678, lng: 54.44967597301334 }
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker")
    const infoWindow = new google.maps.InfoWindow()

    map = new Map(document.getElementById("map"), {
    center: gcaa,
    zoom: 7,
    mapId: "DEMO_MAP_ID"
    });

    const marker = new AdvancedMarkerElement({
    map: map,
    position: gcaa,
    title: "Gcaa dubai",

    })
    const marker2 = new AdvancedMarkerElement({
    map: map,
    position: gcaa2,
    title: "Gcaa AbuDhabi",

    })

    // document.querySelector(".db").addEventListener("click",(e)=>{
    //     infoWindow.close();
    //     infoWindow.setContent("GCAA-Dubai branch");
    //     infoWindow.open(map, marker);
    // })

    marker.addListener("click", () => {
        infoWindow.close();
        infoWindow.setContent("GCAA Dubai branch");
        infoWindow.open(map, marker);
      });
      marker2.addListener("click", () => {
        infoWindow.close();
        infoWindow.setContent("GCAA-AbuDhabi branch");
        infoWindow.open(map, marker2);
      });




}

window.initMap = initMap