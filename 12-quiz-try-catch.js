const axios = require("axios");

const getWikipediaArticle = (articleName) => {
  axios
    .get("https://en.wikipedia.org/api/rest_v1/page/summary/" + articleName)
    .then((response) => {
      console.log(response.data.extract);
    });
};

// QUIZ - async/await.



// Rewrite the function using async/await, and DO NOT FORGET to add error handling!
getWikipediaArticle("Udemyththn");
