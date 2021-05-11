const axios = require("axios");

// login().then((userId) => {
// 	// This is NOT the syntax!
// 	(getSettings(userId) && getContacts(userId) && getPosts(userId)).then(...);
// });


// Promise.all([ ... ]) takes several promises and requests data in parallel. This speeds up loading time ~40% or more.

login().then((userId) => {
	Promise.all([getSettings(userId), getContacts(userId), getPosts(userId)])
    .then(([settingsResponse, contactsResponse, postsResponse]) => {
        
        
    })
});
