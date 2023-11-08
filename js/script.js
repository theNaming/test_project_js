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


// P.S. Функции вызывать не обязательно

// 'use strict';

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('How many movies have you seen so far ?', '').trim();

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('How many movies have you seen so far ?', '');
//     }
// }

// start();


// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Last is movies show ?', ''),
//             b = prompt('На сколько оцениваете его', '');

//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотренно довольно мало");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка");
//     }
// }

// detectPersonalLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номер ${i}`);
//     }
// }

// writeYourGenres();

'use strict';


function calculateVolumeAndArea(length) {
    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }

    let volume = 0,
        area = 0;

    volume = length * length * length;
    // length ** 3 - это тоже самое, что и выше или варианты через цикл.
    // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
    area = 6 * (length * length);

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

calculateVolumeAndArea(5);

function getCoupeNumber(seatNumber) {
    if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    return Math.ceil(seatNumber / 4);
    // тут очень много вариантов решения, но выбрал один из элегантных :)
}

getCoupeNumber(33);

// (**) Задача с собеседований на числа Фибоначчи
function fib(num) {
    if (typeof (num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
            // Без пробела в конце
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return result;
}

fib(5)



const q = {
    a: 2,
    b: 5,
    c: 10
};

const newCopyQ = { ...q };


