var $ = require('jquery');
var token = "bb0521eb0ad7905fbfadf1c345a00988";
var currentWeather = "Vilnius";
var weatherForecast = "forecast/daily?q=Vilnius&mode=json&units=metric&cnt=10";

$(document).ready(getWeather(currentWeather));
// $(document).ready(getWeather(weatherForecast));

function getWeather(req){
$.getJSON(`http://api.openweathermap.org/data/2.5/weather?q=${req}&mode=json&units=metric&APPID=${token}`,function(result){
    // console.log(result)
    $('#city input').attr("value", result.name);
    $('#temperature p').html(result.main.temp + "°C");
    $('#humidity p').html(result.main.humidity + "%");
    $('#sky p').html(result.weather[0].description);
    $('<img />').attr({
            'id': 'photo',
            'src': `http://openweathermap.org/img/w/${result.weather[0].icon}.png`,
            'alt': 'JSFiddle logo',
            'title': 'JSFiddle logo',
            'width': 30,
            'height': 30
        }).appendTo('#sky p');
    // $("#photo").attr("src",`http://openweathermap.org/img/w/${result.weather[0].icon}.png`);
    })
}

$( "#search" ).on( "click", function(e) {
  // console.log($('input:text').val());
  e.preventDefault();
  getWeather($('input:text').val());
})
