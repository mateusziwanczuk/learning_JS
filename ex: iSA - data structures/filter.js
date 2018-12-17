// 1. TODO. Wyłap kraje, których powierzchnia jest większa niż 1000000 km2 lub mniejsza niż 30000 km2

var areaCountries = countries.filter(function(country){
    return country.area > 1000000 || country.area < 30000;
});
    console.log(areaCountries);


// 2. TODO. Wyłap kraje, których powierzchnia jest mniejsza niż 5000000 km2 i liczba ludności większa od 10 mln.

var areaCountries2 = countries.filter(function(country){
    return country.area < 5000000 && country.population > 10000000;
});
    console.log(areaCountries2);


// 3. TODO. Wyłap kraje, które mają co najmniej 3 sasiądów

var borderCountries = countries.filter(function(country){
    return country.borders.length >= 3;
});
    console.log(borderCountries);


// 4. TODO. Wyłap kraje, których region to europa

var europeCountries = countries.filter(function(country){
    return country.region === 'Europe';
});
    console.log(europeCountries);


// 5. TODO. Wyłap kraje, których stolica zaczna się na literę przekazaną w parametrze

function filterByLetter(letter){
    return function(country){
        return country.capital.startsWith(letter);
    }
}
function filterCountriesByLetter(letter){
    return countries.filter(filterByLetter(letter));
}
var newCountries = countries.filter(filterByLetter('Y'));


// 7. TODO. Wyłap kraje, które za sasiąda mają Niemców

var gerCountries = countries.filter(function(country){
    return country.borders.includes('DEU');
});
    console.log(gerCountries);


// 8. TODO: Sprawdź, czy czy jakikolwiek kraj ma stolicę na literę "Y"

var yCountries = countries.some(function(country){
    return country.capital[0] === 'Y';
    // return country.capital.startsWith('Y');
});
    console.log(yCountries);


// 9. TODO: Sprawdź, czy wszystkie kraje mają populację powyżej 50 tys.

var allCountries = countries.every(function(country){
    return country.population > 50000;
});
    console.log(allCountries);


// 10. Wyfiltruj kraje, ktore maja za sasiada Rosje i powierzchnie wieksza niz 300000 km2.

var rusCountries = countries.filter(function(country){
    return country.borders.includes('RUS') && country.area > 300000;
});
    console.log(rusCountries)


// 11. W zadaniu 5 sparametryzuj klucz dla ktorego zczytujesz pierwsza litere, obecnie to stolica na sztywno.

/*
    function filterByLetter(letter, key){
        return function(country){
            return country[key].startsWith(letter);
        }
    }
    function filterCountriesByLetter(letter, key){
        return countries.filter(filterByLetter(letter, key));
    }
    var newCountries = countries.filter(filterByLetter('Y'));
    
    filterCountriesByLetter('M', 'name');
*/






