// synchronous

const getUserSync = (id) => {
    const flight = id === 1 ? 'Garuda Indonesia' : 'Lion Air';
    return { id, flight}
};

const flightOne = getUserSync(1);
console.log(flightOne);

const flightTwo = getUserSync(2);
console.log(flightTwo);

const airport = 'Bandara Soekarno Hatta Cengkareng';
console.log(airport);