"use strict";

// Challenge a)

// ATM

const ATM = function(bill) {
    let arr = [100, 50, 20, 10];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        while (bill >= arr[i]) {
            bill = bill - arr[i];
            sum++;
            // console.log(bill);
        }
        if (sum > 0) {
            console.log(`${sum} ${arr[i]}`);
            sum = 0;
        }
    }
};

// console.log(ATM(280));

// Challenge b,c)

const ATM2 = function(bill) {
    let arr = [100, 50, 20, 10];
    let amount = [2, 2, 2, 50];
    let sum = 0;
    let minus = 0;
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i] * amount[i];
    }
    // console.log(total);

    if (bill > total) {
        console.log(`Not enough MONEY!!!!`);
    } else {
        for (let i = 0; i < arr.length; i++) {
            while (bill >= arr[i] && sum < amount[i]) {
                minus = amount[i];
                bill = bill - arr[i];
                sum++;
                minus--;
            }
            // console.log(minus);
            if (sum > 0) {
                console.log(`${sum} ${arr[i]}`);
                sum = 0;
            }
            if (minus == 1) {
                console.log(
                    `Client inform: No more ${arr[i]}. the rest will be ${arr[i + 1]}.`
                );
                console.log(`Bank inform: refill ${arr[i]}`);
            }
        }
    }
};

console.log(ATM2(380));