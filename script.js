var userFormEl = document.querySelector('#user-form');
var cityInputEl = document.querySelector('#search');
var forcastEl = document.querySelector('#forcast');
//var locationSearchTerm = document.querySelector('#location');





let loc = document.getElementById("location");
let tempValue = document.getElementById("temperature");
let humidity = document.getElementById("humidity");
let windSpeed = document.getElementById("wind-speed")
let uv = document.getElementById("uv")
let climate = document.getElementById("climate")


 var formSubmitHandler = function(event) {
     event.preventDefault();

     var searchTerm = cityInputEl.value.trim();

     if (searchTerm) {
         getCity(searchTerm);

         loc.textContent = '';
         cityInputEl.value = '';
     } else {
         alert('Please enter a valid City')
     }
 };

 var getCity = function (name) {
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + searchTerm + '&appid=2ac382e894c8dfd8170abc00caca0a7f';
  
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            displayCity(data, name);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to OpenWeatherAPI');
      });
/*
      loc.textContent = (data.name)
      tempValue.textContent = 'Temperature: '(data.main.temp)
      humidity.textContent = 'Humidity: '(data.main.humidity)
      windSpeed.textContent = 'Windspeed: '(data.wind.speed)
      uv.textContent = "UV" */
  };

  var displayCity = function() {
      loc.textContent = searchTerm;
      tempValue.textContent = 'Temperature: '(data.main.temp)
      humidity.textContent = 'Humidity: '(data.main.humidity)
      windSpeed.textContent = 'Windspeed: '(data.wind.speed)
      uv.textContent = "UV" 

  }

  userFormEl.addEventListener('submit', formSubmitHandler);
    