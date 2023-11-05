/* eslint-disable */
'use strict';

const customArray = {
    name: 'car',
    width: 192,
    height: 10,
    option: {
        color: 'black',
        gradient: 'purpul'
    },
    makeTest: function() {
        console.log('test');
    }
};

// delete customArray.makeTest;
// console.log(customArray);

// const {color, gradient} = customArray.option;

// console.log(color, gradient);

// customArray.makeTest();

// console.log(Object.keys(customArray).length);

let count = 0;

for (let key in customArray) {
    if (typeof(customArray[key]) === 'object') {
        for (let i in customArray[key]) {
            console.log(`Value ${i} is have properties ${customArray[key][i]}`);
        }
    } else {
        console.log(`Value ${key} is have properties ${customArray[key]}`);
        count++;
    }
}

console.log(count);