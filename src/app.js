function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;
  console.log('searchInput:', searchInputElement.value);
  apiCall(searchInputElement.value);
}
function apiCall(city) {
  console.log('city in apiCall:', city);
  let apiKey = "8a3be5990a44ba1ct658b7d148bofe73";  
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  // api call
  axios.get(apiUrl).then(displayTemperature);
  
}

function displayTemperature(response) {
  console.log('response', response);
  let temperatureElement = document.querySelector("#current-temperature-value");
  let temperature = Math.round(response.data.temperature.current);
  let description = response.data.condition.description;
  temperatureElement.innerHTML = `The temperature is ${temperature}°C (${description})`;
}

// get the current date and time
let now = new Date();
let dateStrong = document.querySelector("#date-strong");
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];
// display current date and time
dateStrong.innerHTML = `${day} ${month} ${date} ${hours}:${minutes} ${year},`;

// select the city search form
let searchAction = document.querySelector("#city-search-form");
// add an event listener to the city search form, at submit run citySearch function
searchAction.addEventListener("submit", search);


let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  oslo: {
    temp: -5,
    humidity: 20
  }
};

// let city = prompt("Please enter a city");
// city = city.toLowerCase();
// if (weather[city] !== undefined) {
//   let temperature = weather[city].temp;
//   let humidity = weather[city].humidity;
//   let celsiusTemperature = Math.round(temperature);
//   let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);


// alert(
//     `It is ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in ${city} with a humidity of ${humidity}%`
//   );
// } else {
//   alert(
//     `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney+${city}`
//   );
// }



