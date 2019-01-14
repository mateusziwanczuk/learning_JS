localStorage.setItem('string', 'awesome string');
localStorage.setItem('number', 3);
localStorage.setItem('object', JSON.stringify({a:'one', b: 1}));
localStorage.setItem('array', JSON.stringify(['one', 'two']));

var myString = localStorage.getItem('string');
console.log(myString);

var myNumber = localStorage.getItem('number');
console.log(myNumber);

var myObject = JSON.parse(localStorage.getItem('object'));
console.log(myObject);

var myArray = JSON.parse(localStorage.getItem('array'));
console.log(myArray);


// Do Storage mozemy wrzucac tylko stringi. Jesli chcemy wrzucic obiekt lub tablice, musimy ja sprowadzic do stringa:
    // JSON.stringify(object);

// Aby z powrotem zrzucic obiekt w postaci stringa do obiektu, uzywamy:
    // JSON.parse(stringObject);

