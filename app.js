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

      function addMarkerToGroup(group, coordinate, html) {
        var marker = new H.map.Marker(coordinate);
        // add custom data to the marker
        marker.setData(html);
        group.addObject(marker);
      }
      
      /**
       * Add two markers showing the position of Liverpool and Manchester City football clubs.
       * Clicking on a marker opens an infobubble which holds HTML content related to the marker.
       * @param  {H.Map} map      A HERE Map instance within the application
       */
      function addInfoBubble(map) {
        var group = new H.map.Group();
      
        map.addObject(group);
      
        // add 'tap' event listener, that opens info bubble, to the group
        group.addEventListener('tap', function (evt) {
          // event target is the marker itself, group is a parent event target
          // for all objects that it contains
          var bubble =  new H.ui.InfoBubble(evt.target.getPosition(), {
            // read custom data
            content: evt.target.getData()
          });
          // show info bubble
          ui.addBubble(bubble);
        }, false);
      
        addMarkerToGroup(group, {lat: 19.54, lng: -99.123},
          '<div><a href=\'http://www.mcfc.co.uk\' >Manchester City</a>' +
          '</div><div >City of Manchester Stadium<br>Capacity: 48,000</div>');
      
        addMarkerToGroup(group, {lat: 19.53, lng: -99.133},
          '<div ><a href=\'http://www.liverpoolfc.tv\' >Liverpool</a>' +
          '</div><div >Anfield<br>Capacity: 45,362</div>');
      
      }

        
      var recibido=document.getElementById('denuncia');
      console.log(recibido);

    function publicar() {
        var recibido=document.getElementById('denuncia');
        console.log(recibido);
        var db = firebase.firestore();

        db.collection("users").add({
          denuncia: recibido.value
        }).then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        }).catch(function(error) {
          console.error("Error adding document: ", error);
        });  

        var ref = firebase.database().ref("users");
        ref.once("value")
        .then(function(snapshot) {
            var denuncia = snapshot.child("denuncia").val(); // {first:"Ada",last:"Lovelace"}
            document.write(`<div class="section container">
            <div class="card">
                <div class="card-body"><p>`+denuncia+`</p>
                </div>
            </div>
        </div>`);
            
  });   

    }
    
      

    function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}