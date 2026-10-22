let getWeather = async (city) => {
 try {
  const res = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`) 
  let userData = await res.json()
  return userData
  } catch (error) {
    console.log(error);
  }
}

let showWeather = async (city) => {
  try {
    const data = await getWeather(city)
       if (!data) {
      alert("Something went wrong, please try again later.");
      return;
  }
  document.getElementById("location").textContent = data.name ?? "N/A";
document.getElementById("weather-main").textContent = data.weather?.[0]?.main ?? "N/A";
document.getElementById("weather-icon").src = data.weather?.[0]?.icon ?? "";
document.getElementById("main-temperature").textContent = data.main?.temp ?? "N/A";
document.getElementById("feels-like").textContent = data.main?.feels_like ?? "N/A";
document.getElementById("humidity").textContent = data.main?.humidity ?? "N/A";
document.getElementById("wind").textContent = data.wind?.speed ?? "N/A";
document.getElementById("wind-gust").textContent = data.wind?.gust ?? "N/A";
} catch (error) {
alert("Something went wrong, please try again later.");
  }
}
document.getElementById("get-weather-btn").addEventListener("click", () => {
  const citySelect = document.getElementById("city-select");
  const selectedCity = citySelect.value;

  if (selectedCity === "") {
    return;
  }

  showWeather(selectedCity);
});
