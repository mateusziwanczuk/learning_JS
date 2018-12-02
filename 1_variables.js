3
// TODO: 1. Podepnij ten plik do pliku index.html
// TODO: 2. Zadeklaruj 2 zmienne typu string
// TODO: 3. Zadeklaruj 2 zmienne typu number
// TODO: 4. Zadeklaruj 2 zmienne typu boolean
// TODO: 5. Zadeklaruj zmienna typu undefined
// TODO: 6. Zadeklaruj zmienna typu null
// TODO: 7. Zadeklaruj tablicę zawierajacą zmienne typu string
// TODO: 8. Zadeklaruj tablicę zawierajacą zmienne różnego typu
// TODO: 9. Zadeklaruj obiekt o nazwie person zawierajacy pola:
//  - firstName
//  - lastName
//  - age
//  - country
// TODO: 10. Sprawdź typ co najmniej jeden zmiennej z poprzednich zadań
// TODO: 11. Nadpisz wartość dowolnej zmiennej zadeklarownej w poprzednim zadaniu

/********************************************/
/********************************************/

var myDiv = "<div id="my-id">Hello World</div>"; // ERROR
var myDiv = '<div id="my-id">Hello World</div>'; // OK
// one string or double string

var myX = myY = 5;
var myX = 5;
myY = 5;

/********************************************/
/********************************************/

// 2
var name = 'Mateusz';
var nick = 'mateuszmatzh';

// 3 
var age = 55;
var month = 6;

// 4
var isFree = true;
var isClosed = false;

// 5
var name = undefined;

// 6
var surname = null; 

// 7
var months = ['january', 'may', 'july'];

// 8
var myItems = [
    'jeden',
    2,
    3,
    'cztery', // przecinek na koncu - dobra praktyka
];

var myItems = ['jeden', 2, 3, 'cztery'] // bez przecinka na koncu


// 9
var person = {
    firstName: 'Janusz',
    lastName: 'Kowalski',
    age: 55,
    country: 'Poland',
} ;

// 10
typeof(person);

// 11
console.log(typeof(person));


