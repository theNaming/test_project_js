/* eslint-disable */
'use strict';

function learnJS(lern, callback) {
    console.log(`Я учу, ${lern}`);
    callback();
}

function done() {
    console.log('Привет я коллбэК функция');
}

learnJS('JavaScript', done);