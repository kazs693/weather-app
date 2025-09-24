let now = new Date();

function currentTime(date) {
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentday = weekdays[date.getDay()];
  let currenthour = date.getHours().toString().padStart(2, "0");
  let currentminutes = date.getMinutes().toString().padStart(2, "0");

  let timeNow = `${currentday} ${currenthour}:${currentminutes}`;

  return timeNow;
}

let time = document.querySelector("#current-time");
time.innerHTML = `${currentTime(now)}`;

function changeCity(event) {
  event.preventDefault();
  let input = document.querySelector("#city");

  let searchCity = document.querySelector("#search-city");
  searchCity.innerHTML = `${input.value}`;
}
let form = document.querySelector("form");
form.addEventListener("submit", changeCity);
