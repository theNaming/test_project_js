/* eslint-disable */
// 'use strict';

// const numberOfFilms = +prompt('How many movies have you seen so far ?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('One is last seen so far movies ?', ''),
//     b = prompt('How mach would you rate it ?', ''),
//     c = prompt('One is last seen so far movies ?', ''),
//     d = prompt('How mach would you rate it ?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// function changeFics() {
//     let name = 'Dima';
//     const age = '31';
// }


// 'use strict';

// function firstTask() {    
//     // Пишем решение вот тут
//     for(let i = 5; i <= 10; i++){
//         console.log(i);        
//     }
// }
// firstTask();

// function secondTask() {
//     point: for (let a = 20; a >= 10; a--) {
//         if (a === 13) break point;
//         console.log(a);
//     }
// }
// secondTask();

// function thirdTask() { 
//     for (let k = 2; k <= 10; k++){
//         if (k % 2 == 0) {
//             console.log(k);
//         }
//     }
// }

// thirdTask();

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let i = 2;
// while (i < 16) {
//     i++;
//     if (i % 2) console.log(i);
// }

// function fifthTask() {
//     const arrayOfNumbers = [];

//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers[i - 5] = i;
//     }

//     console.log(arrayOfNumbers);

//     return arrayOfNumbers;
// }

// fifthTask();


// //(*) Продвинутые задания на использование циклов и условий

// // Место для первой задачи
// //Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// //Должен получиться точно такой же массив
// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];    


//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }        

//     return result;
// }
// firstTask();

// //Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// //Для определения типа данных используйте typeof();
// //Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

// // Место для второй задачи
// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];    

//     for (let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] = data[i] * 2;
//         } else if (typeof(data[i]) === 'string') {
//             data[i] = `${data[i]} - done`;
//         }
//     }   
//     console.log(data);    
//     return data;
// }

// secondTask();


// // Место для третьей задачи
// //Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// //Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут
//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i];
//     }  

//     console.log(result)
//     // Не трогаем
//     return result;
// }

// thirdTask();

// //(**) Задача на формирование фигуры

// const lines = 5;
// let result = '';

// for (let i = 0; i < lines; i++) {
//     for (let j = 0; j < lines - i; j++){
//         result += ' ';
//     }
//     for (let j = 0; j < 2 * i + 1; j++){
//         result += '*'
//     }
//     result += '\n';
// }

// console.log(result);


// function firstTask() {
//     // Пишем решение вот тут
//     for (let i = 5; i <= 10; i++) {
//         console.log(i);
//     }
// }
// firstTask();

// function secondTask() {
//     point: for (let a = 20; a >= 10; a--) {
//         if (a === 13) break point;
//         console.log(a);
//     }
// }
// secondTask();

// function thirdTask() {
//     for (let k = 2; k <= 10; k++) {
//         if (k % 2 == 0) {
//             console.log(k);
//         }
//     }
// }

// thirdTask();

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let i = 2;
// while (i < 16) {
//     i++;
//     if (i % 2) console.log(i);
// }

// function fifthTask() {
//     const arrayOfNumbers = [];

//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers[i - 5] = i;
//     }

//     console.log(arrayOfNumbers);

//     return arrayOfNumbers;
// }

// fifthTask();


// const firstName = "qeschen open";

// console.log(firstName.indexOf("w"));


// const name = "Test connection";

// console.log(name.slice(5, 15));
// console.log(name.substring(5, 15));
// console.log(name.substr(5, 5));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2";
// console.log(parseInt(test));  
// console.log(parseFloat(test));



/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many movies have you seen so far ?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many movies have you seen so far ?', '');
    }
}

start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Last is movies show ?', ''),
            b = prompt('На сколько оцениваете его', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотренно довольно мало");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номер ${i}`);
    }
}

writeYourGenres();

// Код возьмите из предыдущего домашнего задания




