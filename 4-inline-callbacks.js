const sayHello = function (name) {
    console.log(`Hello, ${ name }!`);
}

// =>
const sayGoodbye = (name) => {
    console.log(`Goodbye, ${ name }!`);
}

function apologize() {
    console.log("I'm sorry!");
}

function greeter(loggingFunction) {
    const names = ["John", "Sarah", "Peter", "Laura"];
    const randomName = names[Math.floor(Math.random() * names.length)];

    loggingFunction(randomName);
}

//
// These are all examples of callback functions:

// traditional syntax (anonymous)
greeter(function() {console.log(`Hello, ${ name }, I'm anonymous!`)})
// named function
greeter(sayHello)
// arrow notation (anonymous, inline)
greeter(name => console.log(`Hello, ${ name }, I'm anonymous!`))
// arrow notation (anonymous, wrapped in braces)
greeter(name => {
    console.log(`Hello, ${ name }, I'm anonymous!`)
})
