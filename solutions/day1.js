"use strict";

const fs = require('fs');

const letterNumsToRealNums = {
    "zero": 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9
};

fs.readFile('../input/day1', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    let adjustedData = data.split("\n");
    let results = [];
    for (let i = 0; i<adjustedData.length; i++) {
        let item = String(adjustedData[i]);
        item = item.replaceAll(/[a-z]/ig,"");
        results.push(parseInt(item[0]+item[item.length-1]));
    }
    let sum = 0;
    for (let i = 0; i<results.length; i++) {
        sum = sum+results[i];
    }
    console.log(sum);
});