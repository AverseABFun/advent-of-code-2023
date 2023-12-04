"use strict";
// No peeking!






























































































































































































































const fs = require('fs');

function checkSite(splitData, x, y) {
    if (!splitData[y][x].match(/[0-9]/)) {
        return false;
    }
    if (splitData[y][x+1].match(/[0-9]/)) {
        if (splitData[y][x+2].match(/[0-9]/)) {
            return [[x,y],[x+2,y]]
        } else {
            return [[x,y],[x+1,y]]
        }
    } else if (splitData[y][x-1].match(/[0-9]/)) {
        if (splitData[y][x-2].match(/[0-9]/)) {
            return [[x,y],[x-2,y]]
        } else {
            return [[x,y],[x-1,y]]
        }
    } else {
        return [[x,y],[x,y]]
    }
}

let poss = [
    [0,1],
    [0,-1],
    [1,0],
    [-1,0],
    [1,1],
    [1,-1],
    [-1,1],
    [-1,-1]
];

fs.readFile('../input/day3testcases', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    let splitData = data.split("\n");
    for (let y = 0; i<splitData.length; y++) {
        for (let x = 0; i<splitData[y].length; x++) {
            if (splitData[y][x].match(/[\!\@\#\$\%\^\&\*\(\)\<\>\,\?\/\\\`\~\{\}\[\]]/)) {
                for (let p = 0; p<poss.length; p++) {
                    let xD, yD = poss[p];
                    checkSite(splitData,x+xD, y+yD)
                }
            }
        }
    }
})