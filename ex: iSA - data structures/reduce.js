// 1. TODO: Zwróć łączną liczbę ludności na świecie

    const worldPopulation = countries.reduce(function(acc, country) {
        return acc + country.population;
    }, 0);
    console.log(`World population: ${worldPopulation}`);


// 2. TODO: Zwróć obiekt, którego klucze to nazwy krajów, a wartości to populacja

    const countriesPopulation = countries.reduce(function(acc, country) {
        return Object.assign(acc, { [country.name]: country.population });
    }, {});
    console.log(countriesPopulation);


// 3. TODO: Zwróć stringa, którego zawiera wszystkie nazwy stolic są oddzielone spacją

    const capitals = countries.reduce(function(acc, country) {
        return acc + ' ' + country.capital;
    }, '');
    console.log(capitals);

// 4. TODO: Zwróć tablicę ze wszystkimi altSpellings

    const altSpellings = countries.reduce(function(acc, country) {
        return acc.concat(country.altSpellings)
    }, []);
    console.log(altSpellings);

