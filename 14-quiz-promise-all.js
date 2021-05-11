const axios = require("axios");

const randomTourist = (placeName) => {
    Promise.all([]);

    axios.get("https://en.wikipedia.org/api/rest_v1/page/summary/" + placeName);
    axios.get("https://randomuser.me/api?seed=" + placeName);
}

randomTourist("Barcelona")

/**
 * Expected response
 * Noelle from United States went to Barcelona: Barcelona is a city on the coast of northeastern Spain......."
 */
