"use strict";

// Advanced

// Time Convert

const numberMinutes = (minutes) => {
    let hours = Math.floor(minutes / 60);
    //console.log(hours);
    let minute = minutes - hours * 60; // or minutes % 60
    //console.log(minute);
    console.log(`${minutes} minutes = ${hours} hour(s) and ${minute} minute(s)`);
};

numberMinutes(200);