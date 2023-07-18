'use strict';

const numberOfFilms = +prompt('How many movies have you seen so far ?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('One is last seen so far movies ?', ''),
    b = prompt('How mach would you rate it ?', ''),
    c = prompt('One is last seen so far movies ?', ''),
    d = prompt('How mach would you rate it ?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);