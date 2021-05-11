// What we would like to have - but wouldn't work

doSomeQuickStuff();
downloadRecentPosts();
downloadNotifications();
showUnreadNotifications();
doSomeOtherQuickStuff();

// What we would like to have - it makes a bit more sense.

doSomeQuickStuff();
downloadRecentPosts();
downloadNotifications().then {  // <-- not real syntax. 
    showUnreadNotifications(); // <-- We would like this to be executed AFTER downloadNotifications() has completed...
}
doSomeOtherQuickStuff();
