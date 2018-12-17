
/* TODO: 1. Napisz funkcję, która wyświetla console.log z dowolnym tekstem */

    function showMessage() {
        console.log('Hello World');
    };

    showMessage();


/* TODO: 2. Napisz funkcję, która przyjmuje dwa parametry: firstName oraz lastName a 
    - zwraca stringa z powitaniem, np: 'Hello my dear Tomek!'
    - wynik funkcji przypisz do zmiennej o nazwie greeting
    - zadeklaruj funkcję jako function declaration oraz jako function expression */

    sayHello('Mateusz', 'Iwanczuk'); // musi byc string bo nie ma zdefiniowanej zmiennej

    function sayHello(firstName, lastName) {
        return 'Hello my dear' + firstName + '' + lastName;
    }; // mozna uzyc przed zadeklarowaniem jej w kodzie

    var greeting = function(firstName, lastName){
        return 'Hello my dear' + firstName + ' ' + lastName;
    } // mozna uzyc dopiero po zadeklarowaniu w kolejnych liniach


/* TODO: 3. Napisz funkcję, która przyjmuje dwa parametry: firstName oraz lastName. Następnie:
    - zwraca stringa z powitaniem (wykorzystaj z funkcję z TODO1!) a do powitania
      dokleja stringa "I love you!"*
    - oczekiwana zwrotka: "Hello my dear firstName lastName! I love you!" */


    function sayLovelyHello(firstName, lastName) {
        return sayHello(firstName, lastName) + ' ,i love you!';
    }

    sayLovelyHello('Matesz', 'Foo');


/* TODO: 4. Opakuj kod z tego pliku w IIFE.        */











