"use strict";

// Intermediate

// Capitalize

(function(message) {
    console.log(`${message.charAt(0).toUpperCase() + message.slice(1)}`);
})("i am a web developer");

//or

// const message = "i am a web developer";

// (function(message) {
//     console.log(`${message.charAt(0).toUpperCase() + message.slice(1)}`);
// })(message);

// Average Grade

const grades = (math, physics, english) => {
    let sum = math + physics + english;
    let avg = sum / 3;
    return `Sum: ${sum}\nAverage: ${avg}`;
};
console.log(grades(3, 4, 5));