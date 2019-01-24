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

Termin wykonania: 27.01.2019.

****************************************************/

const countPoints = document.querySelector("#points p");
const fruits = ['🍏', '🍐', '🍊', '🍋', '🍓', '💣'];

var elements;
var fruitsOn = 0;
var points = 0;
var pause = false;
var enter = false;


function createFruit() {
    const gameContainer = document.getElementById('game');
    const fruitEl = document.createElement("div");
    const fruitIndex = Math.floor(Math.random() * fruits.length);
        gameContainer.prepend(fruitEl);
    fruitEl.classList.add("fruit");
    fruitEl.style.top = `${Math.random() * 80}%`; 
    fruitEl.style.left = `${Math.random() * 80}%`;
    fruitEl.textContent = fruits[fruitIndex];
    fruitsOn++;
};

function addElementsListeners() {
    elements = document.querySelectorAll(".fruit");
    elements.forEach(function(el) {
        el.addEventListener('click', clickOn);
    });
};

function removeElementsListeners() {
    elements = document.querySelectorAll(".fruit");
    elements.forEach(function(el) {
        el.removeEventListener('click', clickOn);
    });
};

function changeBackground() {
    const backgroundColors = ['AliceBlue', 'Beige', 'Lavender', 'LightCyan','MistyRose', 'AliceBlue', 'Beige', 'Lavender', 'LightCyan','MistyRose'];
    const body = document.querySelector('body');
    var index = 0;
    const time = setInterval(function() {
        if (index === backgroundColors.length) {
            index = 0;
            clearInterval(time);
        } else {
            index++;
            body.style.background = backgroundColors[index];
        };
    }, 1000);
};

function gameTime() {
    const time = setInterval(function(){
        if (fruitsOn === 20) {
            clearInterval(time);
            alert(`Your score: ${points} / 20 points`);
            addEventListener('keydown', startGame);
            removeElementsListeners();
        } else if (pause) {
            removeElementsListeners();
        } else {
            addElementsListeners();
            createFruit();
        }
    }, 500);
};

function startGame(e) {
    if (e.keyCode === 13) {
        if (enter) {
            points = 0;
            fruitsOn = 0;
            elements.forEach(element => element.remove());
            countPoints.innerHTML = `POINTS: ${points}`;
        };
        !enter ? enter = true : enter;
        gameTime();
        changeBackground();
        removeEventListener('keydown', startGame);
    };
};

function clickOn() {
    if (this.textContent !== '💣') {
        this.remove();
        points++;
        countPoints.innerHTML = `POINTS: ${points}`;
    } else {
        this.remove();
        points > 0 ? points = points - 1 : points;
        countPoints.innerHTML = `POINTS: ${points}`;
    }
};

addEventListener('keydown', startGame);
addEventListener('keydown', function(e) {
    if (e.keyCode === 32) {
        !pause ? pause = true : pause = false;
    };
});










