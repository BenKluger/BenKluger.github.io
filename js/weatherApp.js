$(document).ready(function () {
  //when it's finished loading

  function weather() {
    var URL =
      "https://fcc-weather-api.glitch.me/api/current?lat=53.70&lon=-1.24";
    $.getJSON(URL, function (data) {
      console.log(data);
      updateDOM(data);
    });
  }

  weather();

  function updateDOM(data) {
    var city = data.name;
    var temp = data;

    $("#city").html(city); //replace the id in the page with city with the data
  }
});
