/*=====================================================
LINK: https://developer.mozilla.org /en-US/docs/Web/JavaScript/Reference/Global_Objects/String
=====================================================

Wskazówki do zadań:
- string.replace() - zmiana dowolnego znaku lub ciągu znaków
- string.split() - konwersja stringa do tablicy
- string.trim() - usunięcie whitespaces
- string.charAt() - odczytanie znaku na zadanym indeksie
- string.substring() - ekstrakcja części znaków ze stringa
- string.toLowerCase() - konwersja na małe litery
- string.toUpperCase() - konwersja na wielkie litery
- string.length - odczytanie ilości znaków */

// TODO: 1. Napisz funkcję, która przyjmuje parametr typu string, oraz zwraca liczbę jego znaków

    var str = 'something';

    function getLength(str) {
        return str.length;
    };

// TODO: 2. Napisz funkcję, która przyjmuje parametr typu string, a następnie zwraca go oczyszczonego z tzw. trailing spaces.
    
    var login = '  foobar   ' // nie usuwa spacji wewnatrz tekstu

    function trimLogin(Login) {
        login.trim();
    }

/* TODO: 3. Poniższe zmienne, rozbij na tablicę liter, oczekiwany wynik to: ['R','a','m','b','o']:
    - var nameOne = 'Rambo';
    - var nameTwo = 'R_a_m_b_o';
    - var nameThree = 'ROX1aOX1mOX1bOX1o';     */

    var nameOne = 'Rambo';
    var nameTwo = 'R_a_m_b_o';
    var nameThree = 'ROX1aOX1mOX1bOX1o'; 

    function splitter(str, separator) {
        return str.split(separator);
    }

    splitter(nameOne, separator: ' ');
    splitter(nameTwo, separator: '_');
    splitter(nameThree, separator: 'OX1');

/* TODO: 4. Stwórz nowe zmienne na podstawie stringa name = "EXPIRED", które zawierają odpowiednio:
    - pierwsze 3 litery tego stringa
    - ostatnie 3 litery tego stringa        */

    var text = 'EXPIRED';
    var text2 = text.substr(from: 0, length: 3);
    var text3 = text.substr(from: text.length - 3); // do konca

// TODO: 5. Napisz funkcję o nazwie capitalize, która jako parametr przyjmuje stringa i go "kapitalizuje"

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.substr(from: 1).toLowerCase();
    }

// TODO: 6. W zmiennej var url = 'users/{id}' podmień "{id}" na liczbę 3 i wynik przypisz do nowej zmiennej

    var urlToReplace = 'users/{id}';
    var replacedUrl = urlToReplace.split('{id}', 3);

/* TODO: 7. Napisz funkcję która przyjmuje parametr typu string, a następnie jednocześnie:
    - czyści go z whitespaceów
    - litery konwertuje na wielkie
    - zwraca 2 pierwsze znaki     */

    function setOperation(str) {
        return str
            .trim()
            .toUpperCase()
            .substr(from: 0, length: 2);
    }




