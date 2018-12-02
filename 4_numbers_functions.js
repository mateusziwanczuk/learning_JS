/*====================================================
NUMBERS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
=====================================================
Wskazówki do zadań:
- Number.parseFloat(val) - konwersja stringa na liczbę
- val.toFixed() - dokładność liczb po przecinku
- val.toString() - konwersja number do string */

// TODO: 1. Napisz funkcję, która pobiera liczbę i zwraca ją skonwertowaną na string

    var num = 3;

    function numToString(number) {
        return number.toString();
    }

// TODO: 2. Napisz funkcję, która pobiera stringa i zwraca go skonwertowanego na number

    function stringToNum(str) {
        return parseFloat(str);
    }

/* TODO: 3. W poniższych zmiennych, doprecyzuj rozwinięcie dziesiętne. Nadpisz wartość zmiennych nową wartością.
    - var powerHorses = 233; do 3 liczb po przecinku
    - var score = 10.33344; do 2 liczb po przecinku */

    var powerHorses = 233;
    var score = 10.33344;

    function precise(number, decimal) {
        return parseFloat(number.toFixed(decimal));
    }

    precise(powerHorses, decimal: 3);
    precise(score, 2);

