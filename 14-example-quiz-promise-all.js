const axios = require("axios");

const getWikipediaArticle = (articleName1, articleName2) => {
    Promise.all([
        axios.get("https://en.wikipedia.org/api/rest_v1/page/summary/" + articleName1),
        axios.get("https://en.wikipedia.org/api/rest_v1/page/summary/" + articleName2)
    ]).then(([response1, response2]) => {
        console.log(response1.data.extract);
        console.log(" ----- ");
        console.log(response2.data.extract);
    }).catch((error) => {
        // ignore it.
    })
}

getWikipediaArticle("Moscow", "Berlin");
