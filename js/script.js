/* eslint-disable */
'use strict';

// let a = 10,
//     b = a;

// b = b + 5;

// console.log(a); //10
// console.log(b); //15



// const obj = {
//     a: 2,
//     b: 3
// };

// const copyObj = obj; // передает ссылку
// copyObj.a = 15;

// console.log(obj); // a: 15, b: 3
// console.log(copyObj); // a: 15, b: 3

// criate new object # 1 for

// function copy(mainObj) {
//     let obj = {};

//     for (let key in mainObj) {
//         obj[key] = mainObj[key];
//     }
//     return obj;
// }

// const number = {
//     a: 2,
//     b: 5,
//     c: {
//         y: 10,
//         x: 15
//     }
// };

// const newNumbers = copy(number);

// newNumbers.b = 10; // new copy
// newNumbers.c.y = 20; // don't copy becose { {} }

// console.log(number);
// console.log(newNumbers);


// criate new object # 2 Object.assign

// const createNumber = {
//         a: 2,
//         b: 15,
//         c: {
//             y: 10,
//             x: 5
//         }
//     };

// const add = {
//     t: 10,
//     m: 88
// };

// const clone = Object.assign(createNumber, add);
// console.log(clone);

// criate new array # 3

// const array = [2, 4, 6, 7];
// const newArray = array.slice();

// newArray[1] = 'wewewewe';

// console.log(array);
// console.log(newArray);


// criate new array # 4 ...spered 

// const video = ['youtube', 'netflics', 'vk'],
//       blogs = ['wordPress', 'bitrix', 'joomla'],
//       praduction = [...video, ...blogs, 'feecbook', 'yandex.music'];

// console.log(video);
// console.log(blogs);
// console.log(praduction);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [20, 40 , 60];

// log(...num);

const array = ['a', 'b'];
const newArray = [...array];

const q = {
    a: 2,
    b: 5,
    c: 10
};

const newCopyQ = {...q};

