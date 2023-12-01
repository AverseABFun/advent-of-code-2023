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
            let startPos = -1;
            for (let o = 0; o<item.length; o++) {
                if (item[o] === digit[0]) {
                    startPos = o;
                }
            }
            if (startPos !== -1) {
                let numCorrect = 1;
                for (let o = 1; o<digit.length; o++) {
                    if (digit[o] === item[startPos+o]) {
                        numCorrect++;
                    } else {
                        numCorrect -= Infinity;
                    }
                }
                console.log(`${digit} is correct at position ${i+1}`);
                if (numCorrect === digit.length) {
                    digits[startPos] = letterNumsToRealNums[digit];
                }
            }
        }
        item = item.replaceAll(/[a-z]/ig,"");
        for (var s = 0; s<item.length; s++) {
            digits[s] = item[s];
        }
        digits = digits.join('').replaceAll("_","");
        results.push(parseInt(digits[0]+digits[digits.length-1]));
    }
    let sum = 0;
    for (let i = 0; i<results.length; i++) {
        sum = sum+results[i];
    }
    console.log(sum);
});