const axios = require("axios");

// axios.get("https://randomuser.me/api").then((response) => {
//     console.log(response.data.resssssssults[0].email);
// }).catch((error) => {
//     console.log("GOTCHA! ", error);
// })

try {
  axios.get("https://randomuser.me/api").then((response) => {
    console.log(response.data.resssssssults[0].email);
  });
} catch (error) {
  console.log("GOTCHA! ", error);
}
