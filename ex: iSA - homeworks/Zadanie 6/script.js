/***************************************************

*Zadanie polega na przećwiczeniu DOM JS**

Stwórz mikro grę w JS. 

Gracz musi zebrać jak najwięcej punktów. 
Gra rozpoczyna się po wciśnieciu przycisku enter.
Gracz zdobywa punkty poprzez zbieranie owoców (kliknięcie myszką w owoc). 
Owoce pojawiają się w losowym miejscu na planszy co 0,5s.
Po kliknięciu myszką w owoc gracz zdobywa punkt, a owoc znika. 
Po ujawieniu się 20 owoców gra się kończy.
Gdy zniknie ostatni owoc lub zostanie kliknięty przez gracza to ukazuje się w alercie ile punktów uzyskał gracz na 20 możliwych.

Punktacja: **4 pkt**

* pojawiające owoce (1pkt)
* dodawanie punktów + znikanie owoców (1pkt)
* zakończenie gry po 20 elementach (0,5pkt)
* wyświetlenie wyniku gracza na koniec gry (0,5pkt)
* zmienianie się koloru tła strony (płynne) co 1s (0,5pkt) 
* rozpczęcie gry po przycisku enter (0,5pkt) 

Dodatkowa punktacja: **2 pkt**

* zamiast owoców mogą się też pokazywać bomby, po kliknięciu myszką w bombę gracz traci punkt, a bomba znika, gracz nie może zejść poniżej 0 punktów (1pkt)
* po wcisnięciu spacji gra się pauzuje, po ponownym wciśnieciu gra toczy się dalej (0,5pkt)
* po wciśnieciu ok na alercie na koniec gracz może znów zagrać (wcisnąć enter) (0,5pkt)

Termin wykonania: 20.01.2019.

****************************************************/

const fruits = ['🍏', '🍐', '🍊', '🍋', '🍓', '💣'];
const backgroundColors = ['AliceBlue', 'Beige', 'Lavender', 'LightCyan','MistyRose'];
const gameContainer = document.querySelector("#game");

let fruitsNum = 0;

function showFruit(){
    const fruitIndex = Math.floor(Math.random() * fruits.length);
    const fruitElement = document.createElement('div');
    fruitElement.classList.add('fruit');
    fruitElement.textContent = fruits[fruitIndex];
    fruitElement.style.left = Math.random() * 90 + '%';
    fruitElement.style.top = Math.random() * 90 + '%';
    gameContainer.prepend(fruitElement);
    fruitsNum++;
    if fruitElement.textContent === '💣') {
        showFruit();
        fruitsNum -= 1;
    }
}





