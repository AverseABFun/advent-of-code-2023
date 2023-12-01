"use strict";
// No peeking!






























































































































































































































const fs = require('fs');

const letterNumsToRealNums = {
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
    let splitData = data.split("\n");
    let results = [];
    for (let i = 0; i<splitData.length; i++) {
        let item = String(splitData[i]);
        let digits = ["_"];
        for (let a = 0; a<999; a++) {
            digits[a] = digits[0];
        }
        for (let d = 0; d<Object.keys(letterNumsToRealNums).length; d++) {
            let digit = Object.keys(letterNumsToRealNums)[d];
            let startPoss = [];
            for (let o = 0; o<item.length; o++) {
                if (item[o] === digit[0]) {
                    startPoss.push(o);
                }
            }
            for (let pos = 0; pos < startPoss.length; pos++) {
                let startPos = startPoss[pos];
                if (startPos > -1) {
                    let numCorrect = 1;
                    for (let o = 1; o<digit.length; o++) {
                        if (digit[o] === item[startPos+o]) {
                            numCorrect++;
                        } else {
                            break;
                        }
                    }
                    if (numCorrect >= digit.length) {
                        digits[startPos] = letterNumsToRealNums[digit];
                    }
                }
            }
        }
        for (var s = 0; s<item.length; s++) {
            if (item[s].match((/[0-9]/i))) {
                digits[s] = item[s];
            }
        }
        console.log(String(splitData[i]));
        console.log(digits);
        digits = digits.join('').replaceAll("_","");
        if (digits.length>1) {
            results.push(parseInt(digits[0]+digits[digits.length-1]));
            console.log(parseInt(digits[0]+digits[digits.length-1]));
        } else {
            results.push(parseInt(digits[0]+String(digits[0])));
            console.log(parseInt(digits[0]+String(digits[0])));
        }
    }
    let sum = 0;
    for (let i = 0; i<results.length; i++) {
        sum = sum+results[i];
    }
    console.log(sum);
});