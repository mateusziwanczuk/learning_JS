// 1. TODO: Zmapuj tablicę countries tak, aby zwrócić tablicę samych nazw krajów

var countriesNames = countries.map(function(country){
    return country.name;
});
console.log(countriesNames);

    /* bad code - for loop
        var countryNames = [];
        for (var i = 0; i < countries.length; i++){
            countryNames.push(countries[i].name);
        }
    */ 


// 2. TODO: Zmapuj tablicę countries, oczekiwany string w tablicy wynikowej:
// "NAME ma powierzchnię AREA km2 a populacja wynosi POPULATION ludzi"
// Przykład: "Afganistan ma powierzchnię 652230 km2 a populacja wynosi 27657145 ludzi"

var countryInfo = countries.map(function(country){
    return `${country.name} ma powierzchnie ${country.area} km2 a populacja wynosi ${country.population} ludzi.`
});
console.log(countryInfo);


// 3. TODO: Zmapuj tablicę countries, oczekiwane obiekty w tablicy wynikowej:
/*
    kraj: NAME, (wielkimi literami!)
    stolica: CAPITAL
    region: REGION,
    sasiedzi: TUTAJ STRING Z WSZYSTKIMI SASIADAMI (borders) - jeśli sasiadów nie ma, to sasiedzi = 'BRAK'
    domena: 'Domena internetowa to TOPLEVELDOMAIN'
    strefaCzasowa: "Strefa czasowa UTC+XX:XX" (lub więcej jeśli są)
    numerKierunkowy: "48" (lub więcej jeśli są)
*/

var newCountries = countries.map(function(country){
    return {
        kraj: country.name.toUpperCase(),
        stolica: country.capital.toUpperCase(),
        region: country.region.toUpperCase(),
        sasiedzi: country.borders.length > 0 ? countries.borders.join() : 'BRAK',
    }
})                     
console.log(newCountries);