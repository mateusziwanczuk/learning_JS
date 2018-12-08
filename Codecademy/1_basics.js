
        /****************************************************/
        /****************************************************
        
            Exercises of JavaScript. Source: codecademy.com

        ****************************************************/
        /****************************************************/



console.log('Property called length stores the number of characters in that string.'.length);
    // The '.' is another operator - dot operator.


console.log('This method returns a string in all capital letters.'.toUpperCase());
console.log('JavaScript'.startsWith('J'));
console.log('     This method removes whitespace.    '.trim());

    // When we use console.log() we're calling the .log() method on the console object.

console.log(Math.random());
    // Prints a random number between 0 and 1.
console.log(Math.random() * 50);
    // Prints a random number between 0 and 50.
console.log(Math.floor(Math.random() * 50));
    // Evaluate to a decimal. Answer is a whole number (1-50). 
console.log(Number.isInteger(99));
console.log(Number.isInteger(99.5436271));
    // Checks if a number is an integer.

        // 7 fundamental data types in JS: strings, numbers, booleans, null, undefined, symbol, and object.


/****************************
    VARIABLES
****************************/

var favoriteFood = 'pizza';
    console.log(favoriteFood);
var myAge = 23;
    console.log(myAge);
        // myAge: camelCasing

let changeMe = true;
changeMe = false;
console.log(changeMe);

const name = 'Mateusz';
console.log(name);
/* name = 'Janusz';
    output: Uncaught TypeError: Assignment to constant variable.

    A 'const' variable cannot be reassigned because it is constant. */


/****************************
    MATHEMATICAL OPERATORS
****************************/

let m = 23;

m = m + 1;
    console.log(m); // output: 24
m += 1;
    console.log(m); // output: 25
m -=  3;
    console.log(m); // output: 22
m *= 2;
    console.log(m); // output: 44
m /= 11;
    console.log(m); // output: 4
m++;
    console.log(m); // output: 5
m--;
    console.log(m); // output: 4


/****************************
    STRING CONCATENATION
****************************/

let myName = 'Mateusz'
    console.log('My name is ' + myName + '.');
let myCity = 'Warsaw';
    console.log(`My name is ${myName}. My favorite city is ${myCity}.`);
    // A template literal is wrapped by backticks ` . 


/****************************
    TYPEOF OPERATOR
****************************/

let newVariable = 'Playing around with typeof.';
    console.log(typeof newVariable);
    console.log(typeof 1);
newVariable = 1;
    console.log(typeof 1);
    console.log(typeof newVariable);


/****************************
    CONDITIONAL STATEMENTS
****************************/

let sale = true;
sale = false;
    if (sale) {
        console.log('Time to buy!');
    }
    else {
        console.log('Wait for a sale.');
    }

let tempDegrees = 15;
    if (tempDegrees < 15) {
        console.log('Stay in home.');
    }
    else {
        console.log('Go outside!');
    }

let stopLight = 'green'
let pedestrians = 2;
    if (stopLight === 'green' && pedestrians === 0) {
        console.log('Go!');
    }
    else {
        console.log('Stop');
    }
    //  && : the and operator

let day = 'saturday';
    if (day === 'saturday' || day === 'sunday') {
        console.log('Weekend');
    }
    else {
        console.log('Go to work.');
    }
    // || : the or operator

let isHoliday = false;
    isHoliday ? console.log('Go on holiday!') : console.log('Keep working.');

let isCorrect = true;
    isCorrect ? console.log('Well done!') : ('Try again!');

let season = 'summer';
    if (season === 'spring') {
        console.log('It\'s spring! The trees are budding!');
    } 
    else if (season === 'winter') {
        console.log('It\'s winter! Everything is covered in snow.')
    }
    else if (season === 'fall'){
        console.log('It\'s fall! Leaves are falling!');
    }
    else if (season === 'summer'){
        console.log('It\'s sunny and warm because it\'s summer!');
    }
    else {
        console.log('Invalid season.');
    }

/* --------------- SWITCH ---------------- */

let finalPosition = 'first place';
    switch (finalPosition) {
        case 'first place':
            console.log('You get the gold medal!');
            break;
        case 'second place':
            console.log('You get the silver medal!');
            break;
        case 'third place':
            console.log('You get the bronze medal!');
            break;
        default:
            console.log('No medal awarded.');
            break;
    }

    /*  
        The 'break' keyword tells the computer to exit the block and not execute any more code or
        check any other cases inside the code block. Note: Without the break keyword at the end of each 
        case, the program would execute the code for all matching cases and the default code as well. 
        This behavior is different from if/else conditional statements which execute only one block of code.
    */

