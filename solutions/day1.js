"use strict";

const fs = require('fs');

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