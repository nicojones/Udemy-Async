// you can make it async if you want.
function fetchData() {
  let placeName; // Name of the place where you live. It will be shown in the weather widget.
  const locationAPI = 'http://ip-api.com/json?fields=countryCode,city,lat,lon&lang=de';
  const wikipediaAPI = 'https://en.wikipedia.org/api/rest_v1/page/summary/' + 'PLACE_NAME???';
  const weatherAPI = 'https://api.openweathermap.org/data/2.5/onecall?lat=<LATITUDE???>&lon=<LONGITUDE???>&appid=ec6731a7e08dc09dab2c617166cab786'
  /*
     you can use `axios.get(....)`
     then you do all the logic...
     and you return the following structure:
     .then((...) => {
        return {
            place: <NAME OF YOUR PLACE, IN LOCAL LANGUAGE PROBABLY BEST>
            weather: <RESPONSE FROM WEATHER API>,
            wikipedia: <RESPONSE FROM WIKIPEDIA API>
        }
    });
    */
}
