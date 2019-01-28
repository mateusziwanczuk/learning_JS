var openingHours = 6;
var closingHours = 20;
var cars = [];

var KW_POWER_FACTOR = 0.7;
var gearBox = {
    AUTOMATIC: 'automatic',
    MANUAL: 'manual',
};

function addCar(car) {
    cars.push({
        ...car,
        kw: car.ps * KW_POWER_FACTOR,
    });
}

function getCar(name) {
    return cars.find(car => car.name === name);
}

function getSumOfPrices() {
    return cars.reduce((acc, car) => acc + car.price, 0);
}

function showWelcomeMessage() {
    if (cars.length !== 0 && isSalonOpen(hour)) {
        console.log('Sklep otwarty, zapraszamy do zakupu ' + carsAray.length + ' samochódów');
    }
}

function isSalonOpen(hour) {
    return hour > openingHours && hour < closingHours;
}

addCar({
    name: 'Mazda',
    speed: 500,
    ps: 300,
    price: 400,
    gearBox: gearBox.MANUAL,
});
getCar('Mazda');
showWelcomeMessage();