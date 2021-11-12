
// Location Id
var x = document.getElementById("seconds");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

// weather api
function weatherBalloon( cityID ) {
    var key = '{6ce8d94424fd9b5a44c4f667b946cb5c}';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      console.log(data);
    })
    .catch(function() {
      // catch any errors
    });
  }
  
  window.onload = function() {
    weatherBalloon( 6167865 );
  }