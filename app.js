// Initialize the platform object:
var platform = new H.service.Platform({
    'app_id': '{k5mquz6TwHCC5Lve78dP}',
    'app_code': '{rElMl16oZpxgWhfXZUIvig}'
    });

    function orderMarkers() {
        var zIndex = 1,
            // create a set of markers
            marker = new mapsjs.map.Marker(
                {lat: 19.5133, lng: -99.1233}
            ),
            marker2 = new mapsjs.map.Marker(
                {lat: 19.5236, lng: -99.102}
            ),
            marker3 = new mapsjs.map.Marker(
                {lat: 19.5112, lng: -99.1233}
            ),
            marker4 = new mapsjs.map.Marker(
                {lat: 19.51, lng: -99.12}
            );
      
        // add markers to the map
        map.addObjects([marker, marker2, marker3, marker4]);
      
        map.addEventListener('tap', function (evt) {
          if (evt.target instanceof mapsjs.map.Marker) {
            // increase z-index of the marker that was tapped
            evt.target.setZIndex(zIndex++);
          }
        });
      }
      var platform = new H.service.Platform({
        app_id: 'devportal-demo-20180625',
        app_code: '9v2BkviRwi9Ot26kp2IysQ',
        useHTTPS: true
      });
      var pixelRatio = window.devicePixelRatio || 1;
      var defaultLayers = platform.createDefaultLayers({
        tileSize: pixelRatio === 1 ? 256 : 512,
        ppi: pixelRatio === 1 ? undefined : 320
      });
      
      var map = new H.Map(document.getElementById('map'),
        defaultLayers.normal.map,{
        center: {lat: 19.51, lng: -99.12},
        zoom: 13,
        pixelRatio: pixelRatio
      });
      var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
      orderMarkers();


    var db = firebase.firestore();

    db.collection("users").add({
      first: "Alan",
      middle: "Mathison",
      last: "Turing",
      born: 1912
    }).then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    }).catch(function(error) {
      console.error("Error adding document: ", error);
    });

    function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}