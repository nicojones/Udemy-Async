const axios = require("axios");


// axios.get("https://en.wikipedia.org/api/rest_v1/page/summary/" + countryName)

axios.get("http://ip-api.com/json")
.then((response) => {
    console.log(response.data);
});


// Using the ip-api.com service, get the Wikipedia article BASED ON your IP location.
// That means, you need to get the data from ip-api, get the country, and .then() perform a
// request to the Wikipedia article.
