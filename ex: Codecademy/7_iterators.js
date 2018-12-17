
        /****************************************************/
        /****************************************************
        
            Exercises of JavaScript. Source: codecademy.com

        ****************************************************/
        /****************************************************/



/**************************************
    INTRODUCTION TO ITERATORS
**************************************/

const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
    console.log(artist + ' is one of my favorite artists.');
});
    /* output: 
    Picasso is one of my favorite artists.
    Kahlo is one of my favorite artists.
    Matisse is one of my favorite artists.
    Utamaro is one of my favorite artists. */

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
    return number * number;
});
    console.log(squareNumbers);
    // output: [ 1, 4, 9, 16, 25 ]

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
    return typeof thing === 'number';
});
    console.log(onlyNumbers);
    // output: [ 5, 3.14, 100 ]


/**************************************
    THE .forEach() METHOD
**************************************/

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(fruit => console.log(`I want to eat a ${fruit}.`));
    // .forEach() will execute the same code for each element of an array.


/**************************************
    THE .map() METHOD
**************************************/

const numbers2 = [1, 2, 3, 4, 5]; 
const bigNumbers2 = numbers2.map(number => {
    return number * 10;
});
    console.log(numbers2);
    console.log(bigNumbers2);
        // Notice that the elements in numbers were not altered and bigNumbers is a new array.

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
const secretMessage = animals.map(animal => animal[0]);
    console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(num => num/100);
    console.log(smallNumbers)
        // When .map() is called on an array, it takes an argument of a callback function and returns a new array!
        // .map() works in a similar manner to .forEach()— the major difference is that .map() returns a new array.


/**************************************
    THE .filter() METHOD
**************************************/

const randomNumbers2 = [375, 200, 3.14, 7, 13, 852];
const smallNumbers2 = randomNumbers2.filter(num => {
    return num < 250;
})

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter(word => {
    return word.length > 7;
})


/**************************************
    THE .filter() METHOD
**************************************/

const jumbledNums = [123, 25, 78, 5, 9]; 
const lessThanTen = jumbledNums.findIndex(num => {
    return num < 10;
});
    console.log(lessThanTen); // output: 3
    console.log(jumbledNums[3]); // output: 5
        // If there isn't a single element in the array that satisfies the condition in the callback, then .findIndex() will return -1.

const animals2 = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals2.findIndex(animal => {
    return animal === 'elephant';
});

const startsWithS = animals2.findIndex(animal => {
    return animal[0] === 's' ? true : false;
});


/**************************************
    THE .reduce() METHOD
**************************************/

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
    console.log('The value of accumulator: ', accumulator);
    console.log('The value of currentValue: ', currentValue);
    return accumulator + currentValue;
}, 10);
    console.log(newSum);
    // The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array. 


/**************************************
    ITERATOR DOCUMENTATION
**************************************/

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
    console.log(words.some(word => {
        return word.length < 6;
    }));

const interestingWords = words.filter((word) => {
    return word.length > 5
});
    console.log(interestingWords.every((word) => {return word.length > 5}));


/**************************************
    CHOOSE THE RIGHT ITERATOR
**************************************/

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
    cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
    const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
    const word = cities.reduce((acc, currVal) => {
        return acc + currVal[0]
    }, "C");
        console.log(word)

// Choose a method that will return a new array
    const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
    nums.every(num => num < 0);
    // OR nums.some(num => num < 0);
















