// you can make it async if you want.
function fetchData() {
  let placeName;
  return axios
    .get('http://ip-api.com/json?fields=countryCode,city,lat,lon&lang=de')
    .then((place) => {
      placeName = place.data.city
      return Promise.all([
        axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${place.data.lat}&lon=${place.data.lon}&appid=ec6731a7e08dc09dab2c617166cab786`,
        ),
        axios.get('https://en.wikipedia.org/api/rest_v1/page/summary/' + placeName),
      ])
    })
    .then(([_weather, _wikipedia]) => {
      console.log(_weather.data)
      return {
        weather: _weather.data,
        place: placeName,
        wikipedia: _wikipedia.data,
      }
    });
}
