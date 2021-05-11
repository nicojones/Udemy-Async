const axios = require("axios");

let randomUser;

axios.get("http://ip-api.com/json")
.then((response) => {
    randomUser = response.data.results[0];
    return randomUser;
}).then((user) => {
    return user.location.country;
}).then((countryName) => {
    return axios.get("https://en.wikipedia.org/api/rest_v1/page/summary/" + countryName)
}).then((result) => {
    return result.data.extract
}).then((extract) => {
    console.log("Extract for random country", extract);
}).catch((error) => {
    console.log("Our code failed")
});

// This masterpiece of chained promises makes code easy to follow.

// Note: Whether your .then(() => { ... }) returns a VALUE or a PROMISE, the Promise will transform it if necessary so that
//       another `.then()` can be concatenated. In other words, if you return a value it will be converted into a promise.
