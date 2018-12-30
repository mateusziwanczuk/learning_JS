/****************************************************************************************************
 Część 0:
 Dodaj poprawnie plik 'script.js' do pliku index.html.
 Wyświetl w konsoli: 'Poprawnie dodany skrypt';*/

    console.log('Poprawnie dodany skrypt');

/****************************************************************************************************
 Część 1 Tablice:
 Input: [11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21, -53, 17, -21] */

    let nums = [11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21, -53, 17, -21];


 // 1.1 Policz sumę wszytskich elementów tablicy
 // Output: '1.1 Suma elementów w tablicy: 215'

    let total = 0;
    for (var i in nums){
        total += nums[i];
    }
    // console.log('1.1 Suma elementów w tablicy: ', total);
    console.log(`1.1 Suma elementów w tablicy: ${total}`);



 // 1.2 Policz sumę wartości bezwględnych w tablicy
 // Output: '1.2 Suma wartości bezwględnych z elementów w tablicy: 483'

    let absolute = nums.reduce((total, num) => total += Math.abs(num));
    console.log(`1.2 Suma wartości bezwzględnych z elementów w tablicy: ${absolute}`);



 // 1.3 Wyświetl tylko elementy większe lub równe od 20:
 // Output: '1.3 Elementy większe lub równe od 20: 50,20,21,100,20,44'

    let moreThan20 = nums.filter(num => {
        return num >= 20;
    });
    console.log(`1.3 Elementy większe lub równe 20: ${moreThan20}`);

    // const than20 = nums.filter(num => num >= 20 ? true : false);
    // console.log(`1.3 Elemeny większe lub równe od 20: ${than20}`);



 // 1.4 Wyświetl sumę elementów tylko ujemnych:
 // Output: '1.4 Sume elementów ujemnych: -134'

    let lessThan0Sum = nums.filter(num => num < 0 ? true : false)
        .reduce((total, num) => total += num);
    console.log(`1.4 Suma elementów ujemnych: ${lessThan0Sum}`);



 // 1.5* (+0,25pkt) Wyświetl sumę elemnetów na pozycjach parzystych:
 // Output: '1.5 Suma elementów parzystych: 193'
    
    let evenSum = nums.filter((num, index) => index %2 === 0 ? true : false)
        .reduce((total, num) => total += num);
    console.log(`1.5 Suma elementów parzystych: ${evenSum}`);



/****************************************************************************************************
 
 Część 2 Pętle + funkcje:

 /* 2.1 Napisz funkcję, która przyjmuje 2 argumenty (2 obiekty z kluczami name oraz age)
 i zwraca ten obiekt, która ma większą wartość age. Następnie ze zwróconego obiektu wyświetl jego imię.
 Input: {name: 'Jasio', age: 8} , {name: 'Kazio', age: 11}
 Output: '2.1 Starszy jest: Kazio' */

    const object1 = {
        name: 'Jasio',
        age: 8,
    }

    const object2 = {
        name: 'Kazio',
        age: 11,
    }

    function findOlder(object1, object2) {
        let older = object1.age > object2.age ? object1 : object2;
        return older.name;
    }
    console.log('2.1 Starszy jest:', findOlder(object1, object2));



 /* 2.2 Napisz pętle, która iteruje od 1 do 50 i na każdej wielokrotności 3 wyświetl Fizz, na każdej wielokrotności 5 Buzz,
 a na wielokrotności 3 i 5 FizzBuzz;
 Output: '2.2: Fizz Buzz Fizz Fizz Buzz Fizz FizzBuzz Fizz Buzz Fizz Fizz Buzz Fizz FizzBuzz Fizz Buzz Fizz Fizz Buzz Fizz FizzBuzz Fizz Buzz'  */

    let multiple = '';
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            multiple += 'FizzBuzz ';
        }
        else if (i % 3 === 0) {
            multiple += 'Fizz ';
        } 
        else if (i % 5 === 0) {
            multiple += 'Buzz ';
        }
    }
    console.log('2.2:', multiple);



 /* 2.3 Napisz funkcję, która przyjmuje 3 parametry (2x number, 1x string jako operator (dostępne +,-,/,*) i zwraca wartość wyniku:
 Input: 1, '+', 2    Output: '2.3.1: 3'
 Input: 20, '-', 3   Output: '2.3.2: 17'
 Input: -1, '*', 8   Output: '2.3.3: -8'
 Input: 4, '/', 2    Output: '2.3.4: 2'
 Input: 5, '!', 5    Output: '2.3.5: Nieznany operator'
 Input: 4, '/', 0    Output: '2.3.6: Nie można dzielić przez zero' */

    function calculate(num1,operator, num2) {
        if (operator === '+') {
            return num1 + num2;
        }
        else if (operator === '-') {
            return num1 - num2;
        }
        else if (operator === '*') {
            return num1 * num2;
        }
        else if (operator === '/' && num2 === 0 ) {
            return 'Nie można dzielić przez zero!';
        } 
        else if (operator === '/') {
            return num1 / num2;
        }
        else {
            return '2.3.5: Nieznany operator';
        }
    }
    console.log('2.3.1: ', calculate(1, '+', 2));
    console.log('2.3.2: ', calculate(20, '-', 3));
    console.log('2.3.3: ', calculate(-1, '*', 8));
    console.log('2.3.4: ', calculate(4, '/', 2));
    console.log(calculate(5, '!', 5));
    console.log('2.3.6:', calculate(4, '/', 0));



 /* 2.4 Napisz funkcję, która przyjmuje 2 parametry (znak, liczbę), która wyświetli ciąg znaków połączony '-' ale nie więcej niż 10 znaków.
 Input: $, 5         Output: $-$-$-$-$
 Input: $, 17        Output: $-$-$-$-$-$-$-$-$-$ */

    function sequence(sign, num) {
        let total = sign;
        for (let i = 1; i < num; i++) {
            if (i >= 10) {
                return total;
            } 
            else {
                total += `-${sign}`;
            }
        }
        return `${total}`;
    }
    console.log(sequence('$', 5));
    console.log(sequence('$', 17));



 /* 2.5* (+0,25pkt) Napisz pętle, która zwróci dany ciąg znaków w konsoli (dokładnie w takiej strukturze).
 Output: '2.5:
 *
 * *
 * * *
 * * * *
 * * * * *
 */

    let stars = '';
    for (let i = 0; i < 5; i++) {
        console.log('2.5:', stars += '* ');
    }



/****************************************************************************************************
 Część 3 Obiekty:

 /* 3.1 Napisz obiekt 'pacient' z kluczami: name, surname, status oraz changeStatus. Pierwsze trzy mają przyjmować zmienną
 typu string a ostatnia ma być metodą (funkcją), która zmienia status danego pacjenta.
 Input: pacient.status = 'chory' pacient.changeStatus
 Output: '3.1 pacient.status: zdrowy'
 Input: pacient.status = 'zdrowy' pacient.changeStatus
 Output: '3.1 pacient.status: chory' */

    const pacient = {
        name: 'name',
        surname: 'surname',
        status: '',
        changeStatus: function() {
            this.status === 'zdrowy' ? '3.1 pacient.status: chory' : '3.1 pacient.status: zdrowy';
        }
    }

    pacient.status = 'zdrowy';
    pacient.changeStatus();
    console.log('3.1 pacient.status:', pacient.status);

    pacient.status = 'chory';
    pacient.changeStatus();
    console.log('3.1 pacient.status:', pacient.status);
        // ^^^^ doesn't work :( 



 /* 3.2 Napisz pętle, która stworzy tablicę obiektów z kluczami name oraz price. Wartość name powinna być
 taka sama jak wartość tablicy natomiast price ma wstawiać losową liczbę (maksymalnie 3 cyfrowa).
 Input: ['IPhone 4S', 'Samsung S5', 'Huawei 5', 'LG 7']
 Output: '3.2: [
 {name: 'IPhone 4S', price: losowa liczba <= 999},
 {name: 'Samsung S5', price: losowa liczba <= 999},
 {name: 'Huawei 5', price: losowa liczba <= 999},
 {name: 'LG 7', price: losowa liczba <= 999}
 ]' */ 

    const phones = ['IPhone 4S', 'Samsung S5', 'Huawei 5', 'LG 7'];
    const models = phones.map(phone => {
        return {name: phone, price: Math.round(Math.random() * 999),
        }
    });
    console.log('3.2: ', models);



 /* 3.3 Napisz pętle wyświetlającą nazwę pizzy i jej składniki w nawiasie oraz po myślniku cenę.
 Input: [
 {name: 'Margarita', price: 15, ingredients: ['ser', 'sos', 'oregano']},
 {name: 'Roma', price: 18, ingredients: ['ser', 'sos', 'szynka', 'pieczarki']},
 {name: 'Salami', price: 18, ingredients: ['ser', 'sos', 'salami']}
 ]
 Output: '3.3:
 Margarita (ser, sos, oregano) - 15
 Roma (ser, sos, szynka, pieczarki) - 18
 Salami (ser, sos, salami) - 18' */

    const pizza = [
        {name: 'Margarita', price: 15, ingredients: ['ser', 'sos', 'oregano']},
        {name: 'Roma', price: 18, ingredients: ['ser', 'sos', 'szynka', 'pieczarki']},
        {name: 'Salami', price: 18, ingredients: ['ser', 'sos', 'salami']}
    ];
    for (let i = 0; i < pizza.length; i++) {
        console.log('3.3: ', pizza[i].name, '(', (pizza[i].ingredients).join(', '), ')', '-', pizza[i].price);
    }



 /* 3.4 Wyświetl wartość w konsoli z obiektu labyrinth:
 a) 'Garfield'
 b) 'elephant'
 c) 'flying'
 Input: labirynth = {
        animals: [
            { name: 'Pluto', species: 'dog' },
            { name: 'Garfield', species: 'cat' },
            { name: 'Simba', species: 'lion' },
            { name: 'Maniek', species: 'elephant' }
        ],
        nonAnimals: [
            { name: 'R2D2', species: 'robot', skills: ['fixing', 'flying'] },
            { name: 'C3PO', species: 'robot', skills: ['talking'] }
        ],
        showAnimals: function() { console.log(this.animals) },
        showNonAnimals: function() { console.log(this.nonAnimals) }
    }
 Output: '3.4: a) Garfield b) elephant c) flying' */

    labirynth = {
        animals: [
            { name: 'Pluto', species: 'dog' },
            { name: 'Garfield', species: 'cat' },
            { name: 'Simba', species: 'lion' },
            { name: 'Maniek', species: 'elephant' }
        ],
        nonAnimals: [
            { name: 'R2D2', species: 'robot', skills: ['fixing', 'flying'] },
            { name: 'C3PO', species: 'robot', skills: ['talking'] }
        ],
        showAnimals: function() { 
            console.log(this.animals) 
        },
        showNonAnimals: function() { 
            console.log(this.nonAnimals) 
        }
    }
    console.log(`3.4: a) ${labirynth.animals[1].name} b) ${labirynth.animals[3].species} c) ${labirynth.nonAnimals[0].skills[1]}`)



 /* 3.5* (+0,25pkt) Utwórz obiekt o nazwie SoftwareUsers z kluczami users i addUser. W users ma być tablicą użytkowników (obiektów z kluczami
 name, surname, id) - pusta na początku. W addUser ma być funkcją przyjmująca dwa argumenty name i surname,
 która dodaje nowego użytkownika do tablicy w users z *unikatowym* id.
 Input: SoftwareUsers.add('Jan', 'Kowalski') SoftwareUsers.add('Janina', 'Kowalska')
 Output: '3.5:
 [{ name: 'Jan', surname: 'Kowalski', id: 1},
 { name: 'Janina', surname: 'Kowalska', id: 2}] */




/****************************************************************************************************
 Część 4 String:

 4.1 Napisz funkcję, która zwraca stringa z dużą pierwszą literę.
 Input: uppercaseFirstLetter('kamil') Output: '4.1.1: Kamil'
 Input: uppercaseFirstLetter(12) Output: '4.1.2: to nie jest string' */

    function uppercaseFirstLetter(str) {
        return typeof str === 'string' ? `4.1.1: ${str.charAt(0).toUpperCase()}${str.substr(1)}` : `4.1.2: To nie jest string.`
    };
    console.log(uppercaseFirstLetter('kamil'));
    console.log(uppercaseFirstLetter(12));



 /* 4.2 Wyczyść podane stringi z znaków '$' (użyj pętli, zwróć tablicę).
 Input: ['K$$ami$$l', '$$Jan$ek', 'Kr$$z$ych$u', 'M$$ich$$ał$']
 Output: '4.2: ['Kamil', 'Janek', 'Krzychu', Michał']' */

    const names = ['K$$ami$$l', '$$Jan$ek', 'Kr$$z$ych$u', 'M$$ich$$ał$'];
    const correctNames = names.map(name => name.replace(/\$/g, ''));
    console.log('4.2: ', correctNames);



 /* 4.3 Rozdziel podane stringi na dwa odrębne (zwróć tablicę):
 Input: ['Jan Kowalski', 'Janina Kowalska', 'Kamil Stoch']
 Output: '4.3: ['Jan', 'Kowalski', 'Janina', 'Kowalska', 'Kamil', 'Stoch']' */

    let newNamesArray = [];
    let namesArray = ['Jan Kowalski', 'Janina Kowalska', 'Kamil Stoch'].map(name => {
        const [firstName, lastName] = name.split(' ');
        newNamesArray.push(firstName);
        newNamesArray.push(lastName);
    });
    console.log('4.3: ', newNamesArray);



 /* 4.4 Dodaj dodatkowy klucz do obiektu 'fullName', który będzie zawierał połączenie dwóch stringów.
 Input: [{name: 'Jan', surname: 'Kowalski'}, {name: 'Janina', surname: 'Kowalska'}]
 Output: '4.4: [{name: 'Jan', surname: 'Kowalski', fullName: 'Jan Kowalski'},
 {name: 'Janina', surname: 'Kowalska', fullName: 'Janina Kowalska'}]' */

    const persons = [
        {name: 'Jan', surname: 'Kowalski',},
        {name: 'Janina', surname: 'Kowalska'},
    ];
    persons.forEach(person => {
        person['fullName'] = `${person.name} ${person.surname}`;
    });
    console.log('4.4: ', persons)


    
 /* 4.5* (+0,25pkt) Stwórz metodą createInitials, która przyjmuje obiekt z dwoma kluczami name i surname
 oraz zwraca inicjały:
 Input: createInitials({name: 'Jan', surname: 'Kowalski'})   Output: '4.5.1: JK'
 Input: createInitials({name: 'Jan', surname: null})         Output: '4.5.2: J'
 Input: createInitials({name: null, surname: 'Kowalski'})    Output: '4.5.3: K'
 Input: createInitials({name: null, surname: null})          Output: '4.5.4: XX' */

    function createInitials(person) {
        if(person.name && person.surname) {
            return `${person.name.charAt(0)}${person.surname.charAt(0)}`
        } else if(person.name === null && person.surname === null) {
            return 'XX'
        } else if(person.name === null) {
            return person.surname.charAt(0);
        } else {
            return person.name.charAt(0);
        }
    }
    console.log('4.5.1: ', createInitials({name: 'Jan', surname: 'Kowalski'}));
    console.log('4.5.2: ', createInitials({name: 'Jan', surname: null}));
    console.log('4.5.3: ', createInitials({name: null, surname: 'Kowalski'}));
    console.log('4.5.4: ', createInitials({name: null, surname: null}));
    