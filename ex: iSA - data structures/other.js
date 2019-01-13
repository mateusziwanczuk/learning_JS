// 1. TODO: Posortuj tablicę względem powierzchni, malejąco

    /* .sort() : domyslnie sortuje alfabetycznie
        var numbers = [10, 30, 5, 4]

        numbers.sort();
            output: [10, 30, 4, 5]

        numbers.sort(function(prev, next){
            return a - b; // rosnaco
            return b - a; // malejaco
        }); */

    var sortedCountries = [...countries].sort(function(prev, next) {
        return next.area - prev.area;
    });
    console.log(sortedCountries);

    
/* 2. TODO: Posortuj tablicę względem liczby ludności, rosnąco, i zwróć tylko
    tablicę obiektów, które mają tylko nazwy krajów i ich populację */

    sortedCountries = [...countries]
    .sort(function(prev, next) {
        return prev.population - next.population;
    })
    .map(function(country){
        return {
            name: country.name, 
            population: country.population
        }
    })
    console.log(sortedCountries);


// 3. TODO: Dla każdego, zawołaj poniższą funkcję:

    countries.forEach(function helloFromCountry(country) {
        console.log('Greetings from ' + country.name);
    });


// 4. TODO: Znajdź kraj, którego domena to ".cn"

    var findDomainCn = countries.find(function (country) {
        return country.topLevelDomain.includes('.cn');
    });
    console.log(findDomainCn.name);
   

// 5. TODO: Zwróć sumę populacji krajów, które mają za sąsiada Polskę

    var polishNeighbours = countries.filter(function(country){
        return country.borders.includes('POL');
    });
    console.log(polishNeighbours);

    
// 6. TODO: Sprawdź, czy wszyscy sąsiedzi Chin, mają razem populację większą niż Chiny (zadanie na szóstkę!)

    var chinaNeighboursPopulation = countries
    .filter(function(country){
        return country.borders.includes('CHN');
    })
    .reduce(function(acc, country){
        return acc + country.population;
    }, 0);
    console.log('Czy populacja Chin jest wieksza niz jej sasiadow? :', chinaNeighboursPopulation > findDomainCn.population ? 'tak' : 'nie');
    

/* 7. TODO: Dana jest tablica users. Napisz funkcję, która jako parametr przyjmuje
      ID usera i usuwa element o usera o zadanym ID. */

    var users = [
        { id: 1, name: 'John'},
        { id: 5, name: 'Monica'},
        { id: 12, name: 'Luke'},
        { id: 17, name: 'Mike'}
    ];

    function removeUser(id) {
        var userIds = users.map(function(user) {
            return user.id
        });
        var userIndex = userIds.indexOf(id);
        console.log({id, userIds, userIndex});
        users.splice(userIndex, 1);
    }
    removeUser(12);
