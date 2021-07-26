// asynchronous

const getUserSync = (id, callback) => {
    setTimeout(() => {
        const flight = id === 1 ? 'Garuda Indonesia' : 'Lion Air';
        callback({id, flight});
    }, 1000)
};

const flightOne = getUserSync(1, (result) => {
    console.log(result);
});

const flightTwo = getUserSync(2, (result) => {
    console.log(result);
});

const airport = 'Bandara Soekarno Hatta Cengkareng';
console.log(airport);