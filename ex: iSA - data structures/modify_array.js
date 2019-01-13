var names = ['Janek', 'Bolek', 'Rysiu'];

// 1. TODO. Do tablicy names dodaj parę imion na koniec tablicy

    names.push('Seba', 'Janusz');
    console.log(names);

// 2. TODO. Z tablicy names usuń imię z końca tablicy

    names.pop();
    console.log(names);

// 3. TODO. Z tablicy names usuń imię z początku tablicy

    names.shift();
    console.log(names);

// 4. TODO. Do tablicy names dodaj parę imion na początek tablicy

    names.unshift('Mateusz', 'Borys');
    console.log(names);

// 5. TODO: Do tablicy names, dołącz tablicę englishNames (zmodyfikuj)

    var englishNames = ['Monica', 'Jessica', 'John'];
    var names = names.concat(englishNames);
    console.log(names);

// 6. TODO: Skopiuj tablicę names bez referencji

    var copiedNames = [...names];
    console.log(copiedNames);


// .shift(): wyciaga pierwszy element
// .unshift(): dodaje pierwszy element

// .pop(): usuwa element z konca tablicy
// .push(el): dodaje na koniec tablicy