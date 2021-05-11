function id(_id) {
  return document.getElementById(_id);
}

function temp(_kelvin) {
  return Math.round(_kelvin - 273.15) + "&deg;C";
}

(function () {
  // General info
  const todayHTML = id("today");
  const weatherHTML = id("weather");
  const weatherIconHTML = id("weather-icon");
  const todayDateHTML = id("today-date");
  const locationHTML = id("location");
  const temperatureHTML = id("temperature");
  const pressureHTML = id("pressure");
  const windHTML = id("wind");
  const humidityHTML = id("humidity");

  const wikipediaHTML = id("wikipedia");

  // Forecast
  const forecastHTML = [
    [id("0-name"), id("0-temp"), id("0-icon")],
    [id("1-name"), id("1-temp"), id("1-icon")],
    [id("2-name"), id("2-temp"), id("2-icon")],
    [id("3-name"), id("3-temp"), id("3-icon")],
  ];

  fetchData().then(({ weather, wikipedia, place }) => {
    document.body.classList.remove("loading");

    const dateObj = new Date();
    const locale = "en-US";
    todayDateHTML.innerHTML = dateObj.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    todayHTML.innerHTML = dateObj.toLocaleDateString(locale, {
      weekday: "long",
    });

    temperatureHTML.innerHTML = temp(weather.current.temp);
    locationHTML.innerHTML = place;
    windHTML.innerHTML = weather.current.wind_speed + " km/h";
    humidityHTML.innerHTML = weather.current.humidity + "%";
    pressureHTML.innerHTML = weather.current.pressure + " hPa";
    weatherHTML.innerHTML = weather.current.weather[0].main;
    weatherIconHTML.style.backgroundImage = `url(icons/${weather.current.weather[0].main}.svg)`;

    for (let i = 0; i < 4; ++i) {
      dateObj.setDate(dateObj.getDate() + 1);
      forecastHTML[i][0].innerHTML = dateObj.toLocaleDateString(locale, {
        weekday: "short",
      });
      forecastHTML[i][1].innerHTML = temp(weather.daily[i].temp.day);
      forecastHTML[
        i
      ][2].style.backgroundImage = `url(icons/${weather.daily[i].weather[0].main}.svg)`;
    }

    wikipediaHTML.innerHTML = wikipedia.extract;
  });
})();
