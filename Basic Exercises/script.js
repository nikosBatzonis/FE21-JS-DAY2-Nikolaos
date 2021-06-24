"use strict";

// Basic-ex.1

const crystalGazer = (numChild, name, loc, job) =>
    console.log(
        `You will be a ${job} in ${loc} and married to ${name} with ${numChild} children`
    );

crystalGazer(2, "Aleksandra", "Vienna", "Web Developer");

// Basic-ex.2

const ageCalculator = (birthYear, currentYear) => {
    let ageOne = currentYear - birthYear;
    let ageTwo = ageOne--;
    console.log(`You are either ${ageTwo} or ${ageOne}
`);

    return;
};

ageCalculator(1982, 2021);

// Basic-ex.3

const ageCalculator = (birthYear) => {
    let currentYear = 2021;
    let ageOne = currentYear - birthYear;
    let ageTwo = ageOne--;
    console.log(`You are either ${ageTwo} or ${ageOne}
`);

    return;
};

ageCalculator(1982);

// Basic-ex.4

const convert = (degrees) => {
    let result = degrees * (Math.PI / 180);
    console.log(
        `If user passes ${degrees} degrees it shoulkd get result of ${result} radians`
    );
};

convert(90);

// Basic-ex.5

const calcAreaVolumeBox = (width, height, depth) => {
    let area = width * height;
    let volume = area * depth;
    let result = console.log(
        `The area of the box is: ${area}\nThe volume of the box is: ${volume}`
    );
    return result;
};

calcAreaVolumeBox(2, 2, 2);