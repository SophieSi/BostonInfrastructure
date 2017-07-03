/**
 * Created by t-xusi on 7/3/2017.
 */
function initMap(_data) {

    console.log(_data);
    var uluru = {lat: 42.3601, lng: -71.0589};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: uluru
    });

    // var marker = new google.maps.Marker({
    //     position: uluru,
    //     map: map
    // });

    if (map) {
        var markers = _data.map(function (location) {
            return new google.maps.Marker({
                position: location
            });
        });
    }

    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

    // if (map){
    //     _data.forEach(function (d) {
    //
    //         createMarker(d, map);
    //         // var marker = new google.maps.Marker({
    //         //     position: d,
    //         //     map: map
    //         // });
    //     });
    // }


}

function createMarker(meter, map) {
    var marker = new google.maps.Marker({
        map: map,
        // icon: place.icon,
        position: new google.maps.LatLng(meter.lat,meter.lng)
        // title: _info.name,
        // id:_info.id,
        // label: (Math.round(_info.em_star * 10) / 10).toString(),
        // icon: pinImage,
        // shadow: pinShadow

    });
}