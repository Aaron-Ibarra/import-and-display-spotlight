/* Imports */

import { getAccountInfo, getAnimalInvasion, getCars, getMovies } from './fetch-utils.js';
import {
    renderAccountInfo,
    renderAnimalInvasions,
    renderCars,
    renderMovies,
} from './render-utils.js';

/* Get DOM Elements */
const domainList = document.getElementById('domain-list');

/* State */

/* Events */
window.addEventListener('load', async () => {
    const animalInvaders = await getAnimalInvasion();
    const accountInfo = await getAccountInfo();
    const cars = await getCars();
    const movies = await getMovies();
    console.log(animalInvaders);

    displayInvasions(animalInvaders);
    displayAccountInfo(accountInfo);
    displayCars(cars);
    displayMovies(movies);
});

/* Display Functions */
function displayInvasions(invaders) {
    console.log(invaders);
    for (let animalInvasion of invaders) {
        const currentInvasion = renderAnimalInvasions(animalInvasion);
        domainList.append(currentInvasion);
    }
}

function displayAccountInfo(accounts) {
    for (let account of accounts) {
        const currentAccount = renderAccountInfo(account);
        domainList.append(currentAccount);
    }
}

function displayCars(cars) {
    for (let car of cars) {
        const currentCar = renderCars(car);
        domainList.append(currentCar);
    }
}

function displayMovies(movies) {
    for (let movie of movies) {
        const currentMovie = renderMovies(movie);
        domainList.append(currentMovie);
    }
}
