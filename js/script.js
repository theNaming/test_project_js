/* eslint-disable */
'use strict';

const str = "some";
const strObj = new String(str);

// console.log(typeof (str));
// console.log(typeof (strObj));

console.dir([1, 2, 3]);

const solder = {
    health: 600,
    armor: 100,
    sayHello: function () {
        console.log('Hello');
    }
};

const jonh = Object.create(solder);

// const join = {
//     health: 100
// };

// Object.setPrototypeOf(join, solder);

// console.log(join.health);
// console.log(solder.health);

jonh.sayHello();
