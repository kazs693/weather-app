function displayTemperature(response) {
  console.log(response);
  console.log(response.data.temperature.current);

  let temperature = Math.round(response.data.temperature.current);
  let city = response.data.city;

  let h1 = document.querySelector("h1");
  h1.innerHTML = `The temperature in ${city} is ${temperature}℃`;
}

let apiKey = "233d7725d7of806acc300f5t46cfc23b";
let city = "Sydney";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);

// https://codesandbox.io/p/devbox/js-search-engine-challenge-forked-qscypf?file=%2Fsrc%2Findex.js%3A22%2C14&workspaceId=ws_5M2A8311m2625puNB3k4TK
