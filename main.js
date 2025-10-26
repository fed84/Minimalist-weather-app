import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

const today = dayjs();
const dateString = today.format("ddd");
document.querySelector(".day").innerHTML = dateString;
const timeString = today.format("H:m");
document.querySelector(".time").innerHTML = timeString;

function getWeatherFetch() {
  const searchButton = document.querySelector(".search-button");
  const searchInput = document.querySelector(".search-input");
  searchButton.addEventListener("click", async () => {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=ee042d15f58e41e196b163711252610&q=${searchInput.value}&aqi=no`
    );
    const weatherData = await response.json();
    document.querySelector(".city").innerHTML = weatherData.location.name;
    document.querySelector(".country").innerHTML = weatherData.location.country;
    document.querySelector(".temp").innerHTML =
      weatherData.current.temp_c + "°C";
    document.querySelector(".desc").innerHTML =
      weatherData.current.condition.text;
    document.querySelector(".desc").innerHTML =
      weatherData.current.condition.text;
    document.querySelector(".humidity").innerHTML =
      weatherData.current.humidity + "%";
    document.querySelector(".wind").innerHTML =
      weatherData.current.wind_kph + " km/h";
    document.querySelector(".feels").innerHTML =
      weatherData.current.feelslike_c + "°C";
    document.querySelector(".image").src = weatherData.current.condition.icon;
  });
}

getWeatherFetch();


