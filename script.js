$(document).ready(function(){
    $("#form-submit").submit(function(event){
        performSearch(event);
    });
    
});

function performSearch(event) {
    var request;
    event.preventDefault();
        
    request = $.ajax({
        url:'https://api.openweathermap.org/data/2.5/weather',
        type : "GET",
        data : {
            q: $("#city").val(),
            appid : '128b2a70fd3d8d83854ae6d95ec1a1eb',
            units : 'metric'
        }
    });

    request.done(function(response){
        formatSearch(response);
    });
        
}
function formatSearch(jsonOjbect) {
    var city_name = jsonOjbect.name;
    var city_weather = jsonOjbect.weather[0].main;
    var city_temp = jsonOjbect.main.temp;

    $("#city-name").text(city_name);
    $("#city-weather").text(city_weather);
    $("#city-temp").text(city_temp+ "Celsius");




}