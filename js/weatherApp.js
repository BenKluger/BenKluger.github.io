function cToF(celsius) { //Better Display
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  return cToFahr;
}

$(document).ready(function () {
  //when it's finished loading

  //Get Location
  navigator.geolocation.getCurrentPosition(success, error);

  function success(pos){
    var lat = pos.coords.latitude; //to find the correct path you can console.log out pos and find the correct path
    var long = pos.coords.longitude;
    weather(lat, long)
  }

  function error(){
    console.log("Error");
  }

  function weather(lat, long) {
    var URL =
      `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;
    $.getJSON(URL, function (data) {
      console.log(data);
      updateDOM(data);
    });
  }




  function updateDOM(data) {
    var city = data.name;
    var temp = Math.round(cToF((data.main.temp))); //Convert the weather to Fahrenheit
    var desc = data.weather[0].description;
    var icon = data.weather[0].icon;
    var feeling = Math.round(cToF((data.main.feels_like)));
    var high = Math.round(cToF((data.main.temp_max)));
    var low = Math.round(cToF((data.main.temp_min)));

    $('#temp').html(temp);
    $("#city").html(city); //replace the id in the page with city with the data
    $('#desc').html(desc);
    $('#icon').attr('src', icon);
    $('#feelsLike').html(`Feels Like: ${feeling}&#176;` );
    $('#highNlow').html(`High: ${high}&#176;   Low: ${low}&#176;`);
  }
});
