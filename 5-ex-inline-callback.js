const double = (a, logger) => {
    const doubleOfA = a * 2;
    logger(a, doubleOfA);
}

double(3, (input, result) => {
    console.log(`The double of ${input} is ${result}`);
});


///////////////////////////////////////

// Your task is to program the function `multiply` so it can accept a logger which takes three arguments.
const multiply = (a, b, logger) => {
    // .....
    // logger(....)
}

// This is what your logger should say when you call `multiply(3,4);`.
"The result of multiplying 3 and 4 is 12";

// Your logger must be a function which accepts three arguments. For example, using the `alert()` method
//   we would have something like `const logger = (a, b, ab) => alert(`The result of multiplying ${a} and ${b} is ${ab}`);`
// We could also ignore some parameters, and say directly `const logger = (a, b, ab) => alert(`The result is ${ab}`);`
