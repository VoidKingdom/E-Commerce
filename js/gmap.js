/*This is for the google api. lat and lng are for the store laction which use to be game world */
function initMap() {
    var location = {lat: 52.637289, lng: -1.133807};
    var map = new google.maps.Map(
        /*The zoom sets the default view for the google map and the location is set from the previous var */
        document.getElementById('map'), {zoom: 16, center: location});
    var marker = new google.maps.Marker({position: location, map: map});
}
