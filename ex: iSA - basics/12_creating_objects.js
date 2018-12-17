/* 1.TODO: Stwórz obiekt o nazwie superman, który posiada następujące właściwości:
- właściwość canFly o wartości true
- właściwość strength o wartości 80
- właściwość speed o wartości 300
- właściwość city o wartości 'Metropolis'
- właściwość alterEgo o wartości 'Clark Kent'
- właściwość isImmortal o wartości true
- właściwość origin o wartości 'Krypton'

- metodę sayRealName która zwraca stringa 'I am Clark Kent from Krypton!' wypisane wielkimi literami, użyj właściwość
  origin oraz alterEgo!
- metodę setStrength, która przymuje parametr z nową wartością strength i nadpisze obecna
    wartość strength (tak zwany setter)
- metodę kick, która zwraca wartość strength przemnożoną razy 1.2
- metodę punch, która zwraca wartość strength przemnożoną razy 0.7
- metodę combo, która sumuje wartości zwrócone przez metody kick i punch (musisz zawołać te metody)
- metodę isFastHero która zwraca true lub false, w zależności czy właściwość speed jest większa od 250

Następnie:
    1) odczytaj propercje canFly, strength i alterEgo.
    2) usuń propercję city
    3) nadpisz wartość strength na dwa sposoby - za pomocą użycia metody setStrength oraz bezpośrednio modyfikując wartość superman.strength = xxx
    4) Zawołaj metody kick, punch, combo, isFastHero na obiekcie superman i upewnij się czy zwracają dobre wartości
*/

var superman = {
    canFly: true,
    strength: 80,
    speed: 300,
    city: 'Metropolis',
    alterEgo: 'Clark Kent',
    isImmortal: true,
    origin: 'Krypton',
    sayRealName: function (){
        return `I am ${this.alterEgo} from ${this.origin}!`;
    },
    setStrength: function (strength){
        return this.strength = strength;
    },
    kick: function(){
        return this.strength * 1.2;
    },
    punch: function(){
        return this.strength * 0.7;
    },
    combo: function(){
        return this.kick() + this.punch();
    },
    isFastHero: function(){
        return this.speed > 250;
    },
}
    
console.log(superman.sayRealName());
console.log(superman.canFly, superman.strength, superman.alterEgo);

delete superman.city;

superman.strength = 90;
superman.setStrength;

console.log(superman.kick());
console.log(superman.punch());
console.log(superman.combo());
console.log(superman.isFastHero());
   

/* 2. TODO: Skopiuj powyższy przykład i podmień klucze tak, aby powstał obiekt Batman, zmień mnożniki w metodzie kick i punch */


/* 3. TODO: Stocz walkę bohaterów!
Napisz funkcję isBatmanStronger, w której sięgniesz po obu bohaterów.
Funkcja zwraca true jeśli jego wartość zwrócona w metodzie COMBO dla Batmana
ma większą wartość niż COMBO dla Supermana

*/