
        /****************************************************/
        /****************************************************
        
            Exercises of JavaScript. Source: codecademy.com

        ****************************************************/
        /****************************************************/


// BLOCK AND SCOPE

const city = 'New York City';
const logCitySkyline = () => {
    let skyscraper = 'Empire State Building';
    return 'The stars over the ' + skyscraper + ' in ' + city;
};
    console.log(logCitySkyline());
    // A block is the code found inside a set of curly braces {}.
    // Block help us group one or more statements together and serve as an important structural marker for our code.
   
    

// GLOBAL SCOPE

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

const callMyNightSky = () => {
    return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
};
    console.log(callMyNightSky());
    // In global scope, variables are declared outside of blocks. These variables are called global variables. 
    // Because global variables are not bound inside a block, they can be accessed by any code in the program, including code in blocks.



// BLOCK SCOPE

const logVisibleLightWaves = () => {
    const lightWaves = 'Moonlight';
    console.log(lightWaves);
};
    logVisibleLightWaves();

const logSkyColor = () => {
    let color = 'blue';
    console.log(color); 
}
    logSkyColor(); // output: blue
    // console.log(color); -> ReverenceError

    // When a variable is defined inside a block, it is only accessible to the code within the curly braces {}. 
    // We say that variable has block scope because it is only accessible to the lines of code within that block.



// SCOPE POLLUTION

let num = 50;
const logNum = () => {
    num = 100; // sic! forgot to use the 'let' keyword
    console.log(num);
};
    logNum(); // output: 100
    console.log(num); // output: 100

const satellite2 = 'The Moon';
const galaxy2 = 'The Milky Way';
let stars2 = 'North Star'; 
const callMyNightSky2 = () => {
    stars2 = 'Sirius';
    return 'Night Sky: ' + satellite2 + ', ' + stars2 + ', ' + galaxy2;
};
    console.log(callMyNightSky2()); 
    console.log(stars2) // 'North Star' -> 'Sirius'

    // It's best practice to not define variables in the global scope.



// PRACTICE GOOD SCOPING

const logSkyColor2 = () => {
    const dusk2 = true;
    let color2 = 'blue';
    if (dusk2) {
        let color2 = 'pink';
        console.log(color2); // output: pink
    }
    console.log(color2); // output: blue
};
    // console.log(color2); // output: ReferenceError
    // If a variable does not need to exist outside a block— it shouldn’t!













