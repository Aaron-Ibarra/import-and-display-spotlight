export function renderAnimalInvasions(animalInvasion) {
    const invasionEl = document.createElement('div');

    const statement = document.createElement('h4');
    statement.textContent = 'All they want is';

    const animal = document.createElement('h2');
    animal.textContent = `The species of ${animalInvasion.animal} is invading`;

    const location = document.createElement('p');
    location.textContent = `the city of ${animalInvasion.location}`;

    const motives = document.createElement('ul');
    for (let motive of animalInvasion.motives) {
        const currentMotive = document.createElement('li');
        currentMotive.textContent = motive;
        motives.append(currentMotive);
    }

    invasionEl.append(animal, location, statement, motives);
    return invasionEl;
}

export function renderAccountInfo(accountInfo) {
    const accountEl = document.createElement('div');

    const heading = document.createElement('h2');
    heading.textContent = `Account Information for: ${accountInfo.firstName} ${accountInfo.lastName}`;

    const email = document.createElement('p');
    email.textContent = `email: ${accountInfo.email}`;

    accountEl.append(heading, email);
    return accountEl;
}
export function renderCars(cars) {
    const carEl = document.createElement('div');

    const heading = document.createElement('h2');
    heading.textContent = `Boy oh Boy I really want a ${cars.carMake}`;

    const model = document.createElement('p');
    model.textContent = `more specifically a ..... uhhh, ${cars.carModel}`;

    const year = document.createElement('p');
    year.textContent = `from uhhh that year um, uhhh I guess ${cars.carYear}. I dont know anything about cars`;

    carEl.append(heading, model, year);
    return carEl;
}

export function renderMovies(movies) {
    const movieEl = document.createElement('div');

    const movieTitle = document.createElement('h2');
    movieTitle.textContent = movies.movieTitle;

    const movieGenre = document.createElement('p');
    movieGenre.textContent = `the ${movies.movieGenre}`;

    const movieRevenue = document.createElement('p');
    movieRevenue.textContent = `I heard it made ${movies.movieRevenue}`;

    movieEl.append(movieTitle, movieGenre, movieRevenue);
    return movieEl;
}
