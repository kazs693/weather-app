let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

// write your code here

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function askForCity() {
  let currentCity = prompt(`Enter your city`).trim().toLowerCase();
  if (weather[currentCity]) {
    alert(
      `It is currently ${Math.round(
        weather[currentCity].temp
      )}°C (${celsiusToFahrenheit(
        Math.round(weather[currentCity].temp)
      )}°F) in ${currentCity} with a humidity of ${
        weather[currentCity].humidity
      }%`
    );
  } else {
    alert(
      `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${currentCity}`
    );
  }
}
askForCity();
