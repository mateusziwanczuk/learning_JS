
        /****************************************************/
        /****************************************************
        
            Exercises of JavaScript. Source: codecademy.com

        ****************************************************/
        /****************************************************/


// FUNCTION DECLARATIONS

function greetInSpanish() {
    console.log('Buenas Tardes.');
}
    greetInSpanish();



// CALLING A FUNCTION

function sayThanks(name) {
    console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
  }
    sayThanks('Mateusz');
        // Use parameters as plaseholders for information that will be passed to the function when it is called.
    


// PARAMETERS AND ARGUMENTS

function greeting (name = 'stranger') {
    console.log(`Hello, ${name}!`)
}
    greeting('Mateusz') // output: Hello, Mateusz
    greeting() // output: Hello, stranger!
        // I used "=" operator to assign the parameter "name" a default value of "stranger".



// DEFAULT PARAMETERS

function myLanguages (lang1 = 'English', lang2 = 'French', lang3 = 'Spanish', lang4 = 'Polish', lang5 = 'Portuguese') {
    console.log(`I speak ${lang1}, ${lang2}, ${lang3}, ${lang4} and ${lang5}.`)
}
    myLanguages();



// RETURN

function rectangleArea(width, height) {
    let area = width * height;
}
    rectangleArea(5, 7) // output: undefinded - The function worked fine, and the computer did calculate the area as 35, but we didn't capture it. We need to return the result.

function rectangleArea2(width,height) {
    return width * height;
}
    console.log(rectangleArea2(5,4)); // output: 20



// HELPER FUNCTIONS

function multiplyByNineFifths(number){
    return number * (9/5);
}
    function getFahrenheit(celcius) {
        return multiplyByNineFifths(celcius) + 32;
    }
        console.log(getFahrenheit(15)); // output: 59



// FUNCTION EXPRESSIONS

const plantNeedsWater = function(day) {
    if(day === 'Wednesday') {
        return true;
    } else {
        return false;
    }
};
    plantNeedsWater('Tuesday');
    console.log(plantNeedsWater('Tuesday'));
    // Unlike function declarations, function expressions are not hoisted so they cannot be called before they are defined.



// ARROW FUNCTIONS

const plantNeedsWater2 = (day) => {
    if (day === 'Wednesday') {
        return true;
    } else {
        return false;
    }
};
    plantNeedsWater2('Tuesday');
    console.log(plantNeedsWater2('Tuesday'));
    // 'fat arrow' ()=>



// CONCISE BODY ARROW FUNCTIONS

const plantNeedsWater3 = day => day === 'Wednesday' ? true : false;
    plantNeedsWater3('Tuesday');
    console.log(plantNeedsWater3('Tuesday'));