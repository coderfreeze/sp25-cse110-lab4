let statistics = {
    redCars: 21,
    blueCars: 45, 
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

const keys = Object.keys(statistics);
for (let i = 0; i < keys.length; i++) {
    if (keys[i].charAt(0) === 'r' || statistics[keys[i]] % 2 === 1) {
        console.log(statistics[keys[i]]);
    } 
}