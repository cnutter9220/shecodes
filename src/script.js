let now = new Date();

let h2 = document.querySelector("h2");

let hours = now.getHours();
let minutes = now.getMinutes();

let days = ["Sun", "Monday", "Tues", "Wed", "Thurs", "Fri", "Sat"];
let day = days[now.getDay()];

h2.innerHTML = `${day}, ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");

  let h3 = document.querySelector("h3");
  h3.innerHTML = `${searchInput.value}`;
  let city = `${searchInput.value}`;
  let apiKey = "d2185f173373f92f11bda027689fbcd1";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    let city = `${searchInput.value}`;
    let message = `${temperature} degrees in ${city}`;
    let h4 = document.querySelector("h4");
    h4.innerHTML = message;
  }

  axios.get(apiUrl).then(showTemperature);
}

let form = document.querySelector("#search-form");

form.addEventListener("submit", search);
