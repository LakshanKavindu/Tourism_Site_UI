//........................... map .......................................


let map1;
let sriLanka = {lat: 7.8731, lng: 80.7718};


var place_dict = {
    "kandy"         : {lat: 7.2979493799574575, lng: 80.6326470932949}, // 7.2979493799574575, 80.6326470932949
    "anuradhapura"  : {lat: 8.326313507503343, lng: 80.42494014826822}, // 8.326313507503343, 80.42494014826822
    "adams_peak"    : {lat: 6.811857377478761, lng: 80.4993006268354}, // 6.811857377478761, 80.4993006268354
    "colombo"       : {lat: 6.929847862169719, lng: 79.86616185929286}, // 6.929847862169719, 79.86616185929286
    "ella"          : {lat: 6.868078408905711, lng: 81.04704659157136}, // 6.868078408905711, 81.04811947511585
    "polonnaruwa"   : {lat: 7.937172151970901, lng: 81.01489450507792}, // 7.937172151970901, 81.01489450507792
    "dambulla"      : {lat: 7.899551396006383, lng: 80.6961121318}, // 7.899551396006383, 80.6961121318
    "trincomalee"   : {lat: 8.597126046475813, lng: 81.18969828388362}, // 8.597126046475813, 81.18969828388362
    "sigiriya"      : {lat: 7.957501555955137, lng: 80.7604135970559 }, // 7.957501555955137, 80.7604135970559
    "yala"          : {lat: 6.335837092414975, lng: 81.39014463092262}, // 6.335837092414975, 81.39014463092262
    "galle"         : {lat: 6.06254781918449 , lng: 80.20890643406774}, // 6.06254781918449, 80.20890643406774
    "hikkaduwa"     : {lat: 6.137927794575136, lng: 80.09896008441281}, // 6.137927794575136, 80.09903835064003
    "hortan_plains" : {lat: 6.803047967660006, lng: 80.80906421021098}, // 6.803047967660006, 80.80906421021098
    "kalpitiya"     : {lat: 8.253363168136598, lng: 79.73981136239259}, // 8.253363168136598, 79.73981136239259
    "jaffna"        : {lat: 9.680848079116505, lng: 80.03240098560646}, // 9.680848079116505, 80.03240098560646
    "katunayake"    : {lat: 7.175785633298676, lng: 79.8937350928992}, // 7.175785633298676, 79.8937350928992
    "kithulgala"    : {lat: 6.997183437551736, lng: 80.41678897902746}, // 6.997183437551736, 80.41678897902746
    "knuckles"      : {lat: 7.447708836507933, lng: 80.78285416609123}, // 7.447708836507933, 80.78285416609123
    "minnariya"     : {lat: 8.033024765494202, lng: 80.82445701206794}, // 8.033024765494202, 80.82445701206794
    "negombo"       : {lat: 7.245278711789092, lng: 79.84127547787708}, // 7.245278711789092, 79.84127547787708
    "mirissa"       : {lat: 5.94499864296842 , lng: 80.45910350627251}, // 5.94499864296842, 80.45910350627251
    "nuwara_eliya"  : {lat: 6.9651670735664695, lng: 80.77940123569199}, // 6.9651670735664695, 80.77940123569199
    "pasikudah"     : {lat: 7.930425381656909, lng: 81.56113204920484}, // 7.930425381656909, 81.56113204920484
    "pinnawala"     : {lat: 7.301172689826606, lng: 80.38719921206254}, // 7.301172689826606, 80.38719921206254
    "ravana_ella"   : {lat: 6.959543779844184, lng: 80.85489778893783}, // 6.959543779844184, 80.85489778893783
    "arugam_bay"    : {lat: 6.841475718159539, lng: 81.83687386988116}, // 6.841475718159539, 81.83687386988116
    "sinharaja"     : {lat: 6.393841040606186, lng: 80.46811308137293}, // 6.393841040606186, 80.46811308137293
    "ambuluwawa"    : {lat: 7.161616507285269, lng: 80.5470398083653}, // 7.161616507285269, 80.5470398083653
    "dehiwala"      : {lat: 6.857140876447637, lng: 79.87442395438859}, // 6.857140876447637, 79.87442395438859
    "unawatuna"     : {lat: 6.009925965990579, lng: 80.24839456149734}, // 6.009925965990579, 80.24839456149734
    "nilaveli"      : {lat: 8.70439889505477 , lng: 81.19123331562672}, // 8.70439889505477, 81.19123331562672
    "matara"        : {lat: 5.958991226378884, lng: 80.5308344677896}, // 5.958991226378884, 80.5308344677896
    "udawalawa"     : {lat: 6.447924714756541, lng: 80.89265318322134}, // 6.447924714756541, 80.89265318322134
    "kataragama"    : {lat: 6.419078134777379, lng: 81.33379601205662}// 6.419078134777379, 81.33379601205662
}

countA = 0;
place_no = '';
            
function initMap(place,no1){
    map1 = new google.maps.Map(document.getElementById("map") , {
        center: sriLanka,
        zoom: 7.4,
    });

    // The marker
    marker = new google.maps.Marker({
        position: place_dict[place],
        map: map1,
    });

    countA++;

    showMainMap(countA,no1);

    //user location
    // let infoWindow = new google.maps.InfoWindow();
    // const locationButton = document.getElementById("location_button");
    // locationButton.addEventListener("click", () => {
    //     // Try HTML5 geolocation.
    //     if (navigator.geolocation) {
    //       navigator.geolocation.getCurrentPosition(
    //         (position) => {
    //           const pos = {
    //             lat: position.coords.latitude,
    //             lng: position.coords.longitude,
    //           };
    
    //         //   infoWindow.setPosition(pos);
    //         //   infoWindow.setContent("Location found.");
    //         //   infoWindow.open(map1);
    //         //   map1.setCenter(pos);

    //         marker2 = new google.maps.Marker({
    //             position: pos,
    //             map: map1,
    //         });
    //         },
    //         () => {
    //           handleLocationError(true, infoWindow, map.getCenter());
    //         }
    //       );
    //     } else {
    //       // Browser doesn't support Geolocation
    //       handleLocationError(false, infoWindow, map.getCenter());
    //     }
    // });
    // function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    //     infoWindow.setPosition(pos);
    //     infoWindow.setContent(
    //       browserHasGeolocation
    //         ? "Error: The Geolocation service failed."
    //         : "Error: Your browser doesn't support geolocation."
    //     );
    //     infoWindow.open(map);
    // }


    //user location end..................................


    
    window.initMap = initMap;

    // var marker;

    // if(no == 'all'){
    //     for(var i = 0; i < placesType.length; i++){
    //         marker = new google.maps.Marker({
               
    //             position: placesType[i],
    //             map: map1,
    //         });
    //     }
    // }
    // else{
    //     marker = new google.maps.Marker({
    //         position: placesType[no-1],
    //         map: map1,
    //     });
    // }
        
}

function showMainMap(countb,no){
    if(countb > 1){
        place_no += no;


        if(place_no.length > 3){

            if(place_no.slice(-2) == place_no.slice(-4,-2)){ 
                map1 = new google.maps.Map(document.getElementById("map") , {
                    center: sriLanka,
                    zoom: 7.4,
                });
                countb = 1;
                place_no = '';
            }
       }

        
    }
}



// function apb(a){
//     var place_box = document.querySelector(a);


    
//         place_box.classList.toggle("places_box_activate");
//         place_box.style.animation = "search_anim 2s ease";
    
// }

//..................................................................