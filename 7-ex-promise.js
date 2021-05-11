const axios = require("axios");

// Getting a wikipedia article and displaying its "extract" (summary)
axios.get("https://en.wikipedia.org/api/rest_v1/page/summary/Paris").then((response) => {
    console.log(response.data.extract);
});

// Getting information on our location based on the IP.
axios.get("http://ip-api.com/json").then()
