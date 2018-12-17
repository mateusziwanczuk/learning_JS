/* TODO.1 Napisz instrukcję IF  / ELSE, która:
 - wyświetli console.log("Cześć, jestem junior devem!") w przypadku,
  jeśli zmienna developer jest równa 'junior js dev'
 - a jeśli nie jest, to wyświetli ("Jednak nie junior dev:( ");
 */

    var developer = 'junior js dev';

    if (developer === 'junior js dev') {
    console.log('Czesc, jestem junior devem!'); } 
    else {
    console.log('Jednak nie junior dev =(');
    }

/* TODO.2: Napisz instrukcję IF / ELSE IF / ELSE, która:
    - wyświetli console.log("Czas na emeryturę!") jeśli Twój wiek jest >= 67
    - wyświetli console.log("Średni wiek!") jeśli Twój wiek jest < 67 i > 33
    - wyświetli console.log("Czas na emeryturę!") jeśli Twój wiek jest <= 33 i > 18
    - wyświetli console.log("Hej młodziaku!") jeśli Twój wiek jest <= 18
 */

    var age = 80;

    if (age >= 67) {
        console.log('Jestes dinozaurem!')
    } 
    else if (age > 33) {
        console.log('Sredni wiek!')
    } 
    else if (age > 18) {
        console.log('Piekny mlody i bogaty')
    } 
    else {
        console.log("Dzieciak!")
    }

    // (age < 67 && age > 33) - nie musi byc, bo spelnienie warunku konczy dalsze sprawdzanie,


/* TODO.3: Napisz funkcję, która zwraca true jeśli:
    - wartość zmiennej skill jest równa 'javaScript' lub 'HTML' lub 'CSS' */

    var skill = 'javaScript';

    /* 
    function checkSkill() {
        if (skill === 'javaScript' || skill === 'HTML' || skill === 'CSS') {
            return true;
        }
        else {
            return false;
        }
    }
    */ 

    function checkSkill() {
        return skill === 'javaScript' || skill === 'HTML' || skill === 'CSS';
    }
    

/* TODO.4: Napisz funkcję, która przyjmuje jako parametr stringa i zwraca true jeśli:
 - wartość przyjętego parametru jest różna od słowa JavaScript */

    var name = 'Mateusz';

    /*
    function isJavaScript() {
        if (name !== skill) {
        return true;
        }
    }
    console.log(isJavaScript());
    */

    function isJavaScript(str) {
        return str !== 'Javascript';
    }
    console.log(isJavaScript());


/* TODO.5: Napisz funkcję isShopOpen, która przyjmuje jako parametr liczbę i zwraca true jeśli:
 - wartość parametru jest mniejsza niż 23 i większa od 6 */

    function isShopOpen(hour){
        return hour > 6 && hour < 23;
    }

/* TODO.6: Wykorzystując funkcję isShopOpen i negację (!), napisz funkcję isShopClosed
    - która zwraca true, jeśli sklep jest zamknięty (czyli neguje wartość zwróconą z isShopOpen)
 */

    function isShopOpen(hour){
        return !isShopOpen(hour);
    }

/* TODO.7: Wykorzystując SWITCH, napisz funkcję, która jako parametr przyjmuje stringa o nazwie day i:
 - która wyrzuca w konsoli wymyślony tekst, w zależności czy "case" jest spełniony
 - case mają odpowiadać kolejnym dniom: "Monday", "Tuesday", "Wednesday" etc...
 - ma być parę przynajmniej przypadków (np. Monday, Tuesday, Saturday)
 - w przypadku jeśli case nie pasuje do żadnego przypadku, to funkcja ma wyświetlić w konsoli tekst: "Taki dzień nie istnieje!";
 */

    function checkDay(day){
        switch(day) {
            case 'Monday': 
                console.log('Do pracy rodacy');
        }
    }


/* TODO.8: Wykorzystując TERNARY OPERATOR:
    - przypisz do zmiennej price wartość: '2.00$' jeśli isMember = true a jeśli nie to '10.00$';
        czy
  */

  var isMember = true;
  var price = isMember ? '2.00$' : '10,00$';















