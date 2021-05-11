const axios = require("axios");

// axios.get("https://randomuser.me/appi").then((response) => {
//   // Can’t read `myValue` of `undefined`
//   console.log(response.data.someProperty.myValue);
// }).catch((error) => {
//     if (error.response) {
//         console.log("SERVER", error.response);
//     } else {
//         console.log("OTHER", error);
//     }
// })

// Wrapping the whole code in an anonymous asynchronous function is the way to go 🤘
(async () => {
    try {
        const response = await axios.get("https://randomuser.me/appi");
        console.log(response.data.someProperty.myValue);
    } catch (error) {
        if (error.response) {
            console.log("SERVER", error.response);
        } else {
            console.log("OTHER", error);
        }
    }
})();
