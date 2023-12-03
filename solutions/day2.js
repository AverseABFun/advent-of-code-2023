"use strict";
// No peeking!






























































































































































































































const fs = require('fs');

let amounts = {
    'red': 12,
    'green': 13,
    'blue': 14
};

let kinds = {
    'r': 'red',
    'g': 'green',
    'b': 'blue'
};

function sum(arr) {
    let s = 0;
    for (let i = 0; i<arr.length; i++) {
        s += arr[i];
    }
    return s;
}

fs.readFile('../input/day2testcases', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    let splitData = data.split("\n");
    let dataList = [];
    for (let i = 0; i<splitData.length; i++) {
        let item = splitData[i];
        item = item.replace("Game ", "");
        item = item.replaceAll(/[ac-fh-qs-z ]/gi,"");
        item = item.split(":");
        let id = parseInt(item[0]);
        let itemData = item[1];
        itemData = itemData.split(";");
        for (let f = 0; f<itemData.length; f++) {
            itemData[f] = itemData[f].split(",");
            for (let g = 0; g<itemData[f].length; g++) {
                let tempObj = {};
                if (itemData[f][g][1].match(/[0-9]/)) {
                    tempObj.num = parseInt(itemData[f][g][0]+itemData[f][g][1]);
                    tempObj.kind = kinds[itemData[f][g][2]];
                } else {
                    tempObj.num = parseInt(itemData[f][g][0]);
                    tempObj.kind = kinds[itemData[f][g][1]];
                }
                tempObj.possible = tempObj.num <= amounts[tempObj.kind];
                itemData[f][g] = tempObj;
            }
            itemData[f].possible = itemData[f].map((value)=>value.possible).every(x => x);
        }
        itemData.possible = itemData.map((value)=>value.possible).every(x => x);
        itemData.id = id;
        itemData.minimum = {
            red: Math.max(itemData.map((val)=>val.map((val2)=>val2.kind === 'red' ? val2.num : 0)).map((val)=>Math.max(val))),
            blue: Math.max(itemData.map((val)=>val.map((val2)=>val2.kind === 'blue' ? val2.num : 0)).map((val)=>Math.max(val))),
            green: Math.max(itemData.map((val)=>val.map((val2)=>val2.kind === 'green' ? val2.num : 0)).map((val)=>Math.max(val))),
        };
        console.log(itemData.minimum)
        itemData.power = itemData.minimum.red * itemData.minimum.green * itemData.minimum.blue;
        dataList.push(itemData);
    }
    console.log(sum(dataList.map((val)=>val.power)))
    let selected = dataList.map((val)=>val.possible ? val : null);
    let s = 0;
    for (let i = 0; i<selected.length; i++) {
        if (selected[i]) {
            s = s+selected[i].id;
        }
    }
    console.log(s);
});