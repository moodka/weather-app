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
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  // api call
  axios.get(apiUrl).then(refreshWeather);
  
}
function refreshWeather(response) {
  console.log('response', response);
  let temperatureElement = document.querySelector("#current-temperature-value");
  let temperature = Math.round(response.data.temperature.current);
  let descriptionElement = document.querySelector("#current-details");
  let description = response.data.condition.description;
  let humidityElement = document.querySelector("#humidity-strong");
  let humidity = response.data.temperature.humidity;
  let windElement = document.querySelector("#wind-strong");
  let wind = response.data.wind.speed;
  let dateTimeElement = document.querySelector("#date-strong");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");

  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}"></img>`
  temperatureElement.innerHTML = `${temperature}`;
  descriptionElement.innerHTML = ` ${description}`;
  humidityElement.innerHTML = `${humidity}%`;
  windElement.innerHTML = `${wind} km/h`;
  dateTimeElement.innerHTML = formatDate(date);
  
}

function formatDate(date) {  
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}



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

apiCall("Conwy");





