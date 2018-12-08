
        /****************************************************/
        /****************************************************
        
            Exercises of JavaScript. Source: codecademy.com

        ****************************************************/
        /****************************************************/


function greetInSpanish() {
    console.log('Buenas Tardes.');
}
    greetInSpanish();


function sayThanks(name) {
    console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
  }
    sayThanks('Mateusz');
        // Use parameters as plaseholders for information that will be passed to the function when it is called.
    

function greeting (name = 'stranger') {
    console.log(`Hello, ${name}!`)
}
    greeting('Mateusz') // output: Hello, Mateusz
    greeting() // output: Hello, stranger!
        // I used "=" operator to assign the parameter "name" a default value of "stranger".


function myLanguages (lang1 = 'English', lang2 = 'French', lang3 = 'Spanish', lang4 = 'Polish', lang5 = 'Portuguese') {
    console.log(`I speak ${lang1}, ${lang2}, ${lang3}, ${lang4} and ${lang5}.`)
}
    myLanguages();