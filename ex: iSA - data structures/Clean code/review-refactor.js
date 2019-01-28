var salonOpeningTime = 6;
carsAray = new Array();


var salonClosingHour = 20;

// function to add car or get car
function znajdzLubDodajSamochódDotablicyCars(carName,carSpeed,powerOfCar,carPrice,gear,add){
    if (add == true) {
        var carToAdd = {
            'carName':carName,
            'carSpeed':parseFloat(carSpeed),
            'carPowerByPS': parseFloat(powerOfCar),
            'carPrice': +carPrice,
            'carPowerByKW': parseFloat(powerOfCar) * 0.7,
            gearBox: "automatic", // could be only automatic or manual
        }
        arsAray.push(carToAdd);
        return;
    } else if (add==false) {
        var foundCar = carsAray.find(car => car.name==name);
        return foundCar;
        }
}
function getTotalSumOfPricesOfCarsArray(array) {
    var tempArray = [];


    for(var i=0; i < array.length;i++) {
        tempArray.push(array[i].carPrice);
    }
    var totalSumOfPricesOfCars =0;
    for(var i=0; i < array.length;i += 1) { totalSumOfPricesOfCars += tempArray[i]; }
    return totalSumOfPricesOfCars;
}

// dodaj samochód
znajdzLubDodajSamochódDotablicyCars('Mazda', '600', '300', "400", true);

// znajduje samochód
znajdzLubDodajSamochódDotablicyCars('Mazda', undefined, undefined, undefined, false);

console.log('czy działa', carsAray);

// show information if salon is open and has cars in carsArray
var cLen = carsAray.length;
if (cLen == 0) {
    if(salonOpeningTime > 6) {
        if(salonClosingHour < 20) console.log('Sklep otwarty, zapraszamy do zakupu ' + carsAray.length + ' samochódów');
    }
}