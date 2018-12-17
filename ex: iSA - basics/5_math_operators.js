/*
=====================================================
MATH: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math
=====================================================

Wskazówki do zadań:
- Math.random() - zwraca losową wartość w zakresie od 0 do 1
- Math.round(a) - zaokrągła wartość w górę lub w dół
- Math.max(a, b, c...) - zwraca największą wartość spośród przekazanych wartosci
- Math.pow(a, b) - podnosi wartość a do potegi b
*/
/* TODO: 1. Napisz funkcję, która przyjmuje dwa parametry.
    - pierwszy parametr to wartość, a drugi to potęga
    - funkcja ma zwracać wartość podniesioną do tej potęgi
 */

// TODO: 2. Napisz funkcję, która zwraca losową liczbę w zakresie od 0 do 1.

    function randomNumber() {
        return Math.random();
    }

// TODO: 3. Napisz funkcję, która zwraca losową liczbę w zakresie 0 do 10.
// TODO: 3. Napisz funkcję, która przyjmuje 3 parametry (liczby) i zwraca parametr z największą wartością

    function maxNumber () {
        return Math.max(2,5,8);
    }

// TODO: 4. Napisz metodę, która przyjmuje 1 parametr (liczbę) i zaokrągla tą liczbę do całosci.
// TODO: 5. Napisz funkcję, która przyjmuje dwie liczby i zwraca resztę z dzielenia tych liczb.
// TODO: 6. Napisz funkcję, która liczy pole koła (pi r^2). Wynik ma być podany z dokładnością do 2 cyfr po przecinku.

    function circleArea () {
        return Math.PI * Math.pow(r, 2);
        // return Math.PI * r * r;
    }

// TODO: 7. Napisz funkcję, która liczy deltę ( b^2 - 4ac). Wynik ma być zaokrąglony do całości.
/* TODO: 8. Zadeklaruj globalną zmienna var counter = 0;
    - następnie stwórz funkcję, która podbija wartość globalnej zmiennej o nazwie counter o jeden
      przy każdym wywołaniu.
    - następnie wywołają tą funkcję 3 razy i wyświetl w konsoli wartość zmiennej counter. */

    var counter = 0;


1






