const axios = require("axios");


// async / await. The wonderful syntax for asynchronous code which makes it look synchronous.

(async () => {
    const response = await axios.get("https://randomuser.me/api");
    console.log(response.data.results[0].name.first)
})()
