 /*goole map*/ 
 function initMap() {
        var myLatLng = {lat: 22.979919, lng: 120.220703};

        var map = new google.maps.Map(document.getElementById('map'), {
          center:{lat: 22.979919, lng: 120.13},
          scrollwheel: false,
          zoom:12
        });

        var marker = new google.maps.Marker({
          map: map,
          position: myLatLng,
          title: 'Hello World!'
        });
      }


