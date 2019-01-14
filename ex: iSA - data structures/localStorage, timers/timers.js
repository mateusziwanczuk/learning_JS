/* Napisz dowolna funkcje z console.log:
    a) Wywolaj ja po czasie 8 sek. raz
    b) Nastepnie powyzszy timeout przypisz do zmiennej
    c) Wyczysc timeout. Upewnij sie, ze console.log przestal wyswietlac po 8 sek. */

var showOnce = setTimeout(function(){
    console.log('Hello')
}, 1000);

var showMore = setInterval(function(){
    console.log('Hello World')
}, 1000);

clearTimeout(showOnce);
clearInterval(showMore);

/***************************************** */

var body = document.querySelector('body');

function stroboskop() {
   body.classList.toggle('effect');
}

// setInterval(stroboskop, 50);


