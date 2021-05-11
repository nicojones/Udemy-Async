const axios = require("axios");

// For the curious-minded.

// Promise.all
// Promise.allSettled,
// Promise.race

Promise.race([
    axios.get("https://randomuser.me/api?gender=male"),
    axios.get("https://randomuser.me/api?gender=female"),
]).then((response) => {
    console.log(response.data)
    
}).catch((error) => {
    console.log("ERROR", error)
})
