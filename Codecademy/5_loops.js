
        /****************************************************/
        /****************************************************
        
            Exercises of JavaScript. Source: codecademy.com

        ****************************************************/
        /****************************************************/


// THE FOR LOOP

for (let counter = 0; counter < 4; counter++) {
    console.log(counter);
};
    // The initialization is let counter = 0, so the loop will start counting at 0.
    // The stopping condition is counter < 4, meaning the loop will run as long as the iterator variable, counter, is less 4.
    // The iteration statement is counter++. This means after each loop, the value of counter will increase by 1. 
    // The code block is inside of the curly braces, console.log(counter), will execute until the condition evaluates to false. 

    /* Create a program that loops from 5 to 10 and logs each number to the console. */
    for (let counter = 5; counter < 11; counter++) {
        console.log(counter);
    } 



// LOOPING IN REVERSE

for (let counter = 3; counter >= 0; counter--) {
    console.log(counter)
};



// LOOPING THROUGH ARRAYS

const vacationSpots = ['Mexico', 'Peru', 'Spain'];
for (let i = 0; i < vacationSpots.length; i++ ){
  console.log('I would love to visit ' + vacationSpots[i]);
}



// NESTED LOOPS

const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < yourArray.length; j++) {
        if (myArray[i] === yourArray[j]) {
            console.log('Both loops have the number: ' + yourArray[j])
        }
    }
}; // output: Both loops have the number: 19

let myFollowers = ['Brajan', 'Seba', 'Mati', 'Janusz'];
let yourFollowers = ['Andrzej', 'Seba', 'Mati'];
let mutualFollowers = [];

for (let i = 0; i < myFollowers.length; i++) {
    for (let j = 0; j < yourFollowers.length; j++) {
        if (myFollowers[i] === yourFollowers[j]) {
        mutualFollowers.push(myFollowers[i]);
        console.log(mutualFollowers); // output: Seba, Mati
        }
    }
};



// THE WHILE LOOP

    // A for loop that prints 1, 2, and 3
    for (let counterOne = 1; counterOne < 4; counterOne++){
        console.log(counterOne);
    }
    
    // A while loop that prints 1, 2, and 3
    let counterTwo = 1;
    while (counterTwo < 4) {
        console.log(counterTwo);
        counterTwo++;
    }






















