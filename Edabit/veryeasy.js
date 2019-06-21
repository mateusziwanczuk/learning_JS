/* ***************************************
 * ***************************************
 * 
 *          EDABIT EXERCICES
 * 
 * ***************************************
*************************************** */


// Create a function that takes two numbers as arguments and return their sum.

    function addition(a, b) {
        return a + b;
    }

        const addition = (a, b) => a + b;


// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

    function addition(num) {
        return ++num
    }

        const addition = (num) => num + 1

            // If used postfix, with operator after operand (for example, x++), then it returns the value before incrementing.
            // If used prefix with operator before operand (for example, ++x), then it returns the value after incrementing.
            //     // Postfix 
            //         var x = 3;
            //         y = x++; // y = 3, x = 4
            //     // Prefix
            //         var a = 2;
            //         b = ++a; // a = 3, b = 3


// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

    function lessThanOrEqualToZero(num) {
        return (num <=0 ? true : false);
    }

        function lessThanOrEqualToZero(num) {
            return num <= 0;
        }


// Create a function that accepts an array and returns the last item in the array.

    function getLastItem(arr) {
        return arr.pop();
    }

 
// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters 
// in the first string is equal to the total number of characters in the second string.

    function comp(str1, str2) {
        return str1.length === str2.length ? true : false;
    }

        function comp(str1, str2) {
            return str1.length === str2.length;
        }

            const comp = (str1, str2) => str1.length === str2.length;


// Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

    function isEvenOrOdd(num) {
        return (num % 2 == 0) ? "even" : "odd";
    }

        isEvenOrOdd = n => n % 2 ? 'odd' : 'even'


// Create a function that takes an array and a string as arguments and return the index of the string.

    function find_index(arr, str) {
        return arr.indexOf(str);
    }


// Create a function that takes a base number and an exponent number and returns the calculation.

    function calculateExponent(num, exp) {
        return Math.pow(num, exp);
    }

        const calculateExponent = (num, exp) => Math.pow(num, exp);


// Create a function that takes a number as an argument and returns the amount of digits it has.

    function findDigitAmount(num) {
        var n = num.toString();
        return n.length;
    }

        function findDigitAmount(num) {
            return num.toString().length;
        }

            const findDigitAmount = num => String(num).length;


// Create a function that takes a number (from 1 to 12) and return its corresponding month name as a string.

    function month_name(num) {
        switch(num){
            case 1:
                return "January";
            case 2: 
                return "February";
            case 3: 
                return "March";
            case 4:
                return "April";
            case 5:
                return "May";
            case 6: 
                return "June";
            case 7:
                return "July";
            case 8:
                return "August";
            case 9:
                return "September";
            case 10:
                return "October";
            case 11:
                return "November";
            case 12:
                return "December";
        }	
    }


// Create a function that takes a string and returns the word count. The string will be a sentence.

    function countWords(str){
        return str.split(' ').length
    }

        const countWords = str => str.split(' ').length;


// Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given.

function reverse(bool) {
    if(bool === true) {
        return false;
    } else if(bool === false) {
        return true;
    } else {
        return "boolean expected";
    }
}

    function reverse(bool) {
        if (typeof bool !== 'boolean') return "boolean expected"
        return !bool
    }


// Create a function that takes an array of numbers and returns the smallest number in the set.

    function findSmallestNum(arr) {
        return Math.min.apply(Math, arr);
    }

        function findSmallestNum(arr) {
            return Math.min(...arr);
        }


// Create a function that takes an array of numbers. Return the largest number in the array.

    function findLargestNum(arr) {
        return Math.max.apply(Math, arr);
    }

        function findLargestNum(arr) {
            return Math.max(...arr);
        }


// Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.

    function Go(num) {
        return "-".repeat(num);
    }

        const Go = num => '-'.repeat(num);


// Create a function to multiply all values in an array by the amount of values in that array.

    function MultiplyByLength(arr) {
        const newArr = arr.map(i => i * arr.length);	
        return newArr;
    }

        MultiplyByLength = arr => arr.map(x => x * arr.length);


// Create a function that accepts a string (of a persons first and last name) and returns a string with the first and last name swapped.

    function nameShuffle(str) {
        return str.split(' ').reverse().join(' ');
    }

        const nameShuffle = str => str.split(' ').reverse().join(' ');


// Create a function that takes a string and returns a string with its letters in alphabetical order.

    function AlphabetSoup(str) {
        var arr = str.split('');
        var sorted = arr.sort().join('');
        return sorted;
    }

        function AlphabetSoup(str) {
            return str.split('').sort().join('');
        }

            const AlphabetSoup = (str) => str.split('').sort().join('');


// Create a function that takes a string as its argument and returns the string in reversed order.

    function reverse(str) {
        return str.split('').reverse().join('');
    }

        const reverse = (str) => [...str].reverse().join('');


// Create a function that takes two strings and returns true if the first argument ends with the second argument; otherewise return false .

    function checkEnding(str1, str2) {
        return str1.endsWith(str2) ? true : false;
    }

        function checkEnding(str1, str2) {
            return str1.endsWith(str2);
        }

            const checkEnding = (str1, str2) => str1.endsWith(str2);

    
// Create a function that takes an array of strings. Return all words in the array that are exactly four letters.

    function isFourLetters(arr) {
        var words = arr.filter(str => str.length === 4);
        return words;
    }

        let isFourLetters = (arr) => arr.filter(word => word.length === 4);


// Create a function that takes two arguments (item, times). The first argument (item) is the item that needs repeating while the second 
// argument (times) is the number of times the item is to be repeated. Return the result in an array.

    function repeat(item, times) {
        let result = [];
        for(let i = 0; i < times; i++) {
        result.push(item)
    }
    return result;
    }

    
// Create a function that takes an array of numbers and returns only the even values.

    function noOdds(arr) {
        return arr.filter(x => x % 2 === 0);
    }


// Create a function that takes an array of numbers and return the first and last elements as a new array.

    const firstLast = arr => [arr.shift(), arr.pop()];


// Create a function that returns the number of argument it was called with.

    function numArgs() {
        return arguments.length;
    }


// Create a function that takes an array of students and returns an array of student names.

    function getStudentNames(students) {
        return students.map(student => {
            return student.name
        })
    }

        function getStudentNames(students) {
            return students.map(student => student.name)
        }


// There is a single operator in JavaScript capable of providing the remainder of a division operation. 
// Two numbers are passed as parameters. The first provider divided by the second parameter will have a remainder, possiby zero. Return that value.

    function remainder(x, y) {
        return x % y;
    }

        let remainder = (x, y) => x % y;


// Given two strings, firstName and lastName, return a single string in the format "last, first".

    function concatName(firstName, lastName) {
        return lastName.concat(', ', firstName);
    }

        const concatName = (firstName, lastName) => `${lastName}, ${firstName}`;


// Lara is at a carnival fair. She has decided to only play games which are profitable gambles.
// A profitable gamble is a game that yields a positive net profit, where net profit is calculated in the following manner: 
// net_outcome = probability_of_winning * prize - cost_of_playing.
// Create a function that takes in 3 parameters (probability of winning, prize value, and cost of playing) and returns whether or not the gamble is profitable.
// For instance, profitableGamble(0.2, 50, 9) should yield true, since the net profit is 0.2 * 50 - 9 = 1 and 1 > 0.

    function profitableGamble(prob, prize, pay) {
        return prob * prize - pay > 0 ? true : false
    }

    
// Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.

    let divisible = num => num % 100 === 0


// Write a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in s.

    function isPlural(word) {
        return word.charAt(word.length - 1) === 's'
    }

        function isPlural(word) {
            return word.endsWith("s");
        }


// Create a function that takes an argument of any data type and returns 1 if it's truthy and 0 if it's falsy.

    function isTruthy(input) {
        return input ? 1 : 0
    }


// Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:
// Total number of slices.
// Number of recipients.
// How many slices each person gets.

    function equalSlices(total, people, each){
        return (people * each <= total)
    }


// You are given 2 out of 3 of the angles in a triangle, in degrees.
// Write a function that classifies the missing angle as either "acute", "right", or "obtuse" based on its degrees.
// An acute angle is one smaller than 90 degrees.
// A right angle is one that is exactly 90 degrees.
// An obtuse angle is one greater than 90 degrees (but smaller than 180 degrees).
// For example: missingAngle(11, 20) should return "obtuse", since the missing angle would be 149 degrees, which makes it obtuse.

    function missingAngle(angle1, angle2) {
        let angle3 = 180 - (angle1 + angle2);
        if (angle3 < 90){
            return "acute"
        } else if (angle3 === 90){
            return "right"
        } else {
            return "obtuse"
        }
    }

        function missingAngle(angle1, angle2) {
            return angle1 + angle2 < 90 ? 'obtuse'
                : angle1 + angle2 > 90 ? 'acute'
                : 'right';
        }


// Create a function that takes in array of hurdle heights and a jumper's jump height, and determine whether or not the hurdler can clear all the hurdles. 
// A hurdler can clear a hurdle if their jump height is greater than or equal to the hurdle height. So for example, hurdleJump([1, 2, 4, 3, 2, 3], 4) should 
// return true, since 4 is greater than or equal to each element in the array. On the other hand, hurdleJump([1,2,2,1], 1) should return false, since the hurdler 
// cannot clear the second hurdle. Return true for the edge case of an empty array of hurdles. (Zero hurdles means that any jump height can clear them).

    function hurdleJump(hurdles, jumpHeight) {
        return jumpHeight >= Math.max(...hurdles)
    }


// A chessboard has rows numbered 1-8 and columns numbered A-H. In chess, rooks are pieces that can any number of squares horizontally or vertically.
// Given the location of your rook and your opponent's rook, determine whether or not you can capture your opponent's rook with your own. For this exercise, 
// assume there are no other pieces that are blocking. Your position and your opponent's position are represented as the first and second element of the 
// input array, respectively. For instance, in this example: canCapture(["A8", "E8"]) ➞ true your rook (at A8) can take your opponents rook (at E8) by moving horizontally.

    function canCapture([yourRook, opponentsRook]) {
        return yourRook.charAt(0) === opponentsRook.charAt(0) ||
            yourRook.charAt(1) === opponentsRook.charAt(1)
    }


// In semantic versioning a piece of software can be represented in a format like this example: 6.1.9. The first number is the major version.
// The second number is the minor version. The third number is the patch (bug fixes). Write three separate functions, one to retrieve each element 
// in the semantic versioning specification.

    function retrieveMajor(semver) {
        return semver.split(".")[0];
    }

    function retrieveMinor(semver) {
        return semver.split(".")[1];
    }

    function retrievePatch(semver) {
        return semver.split(".")[2];
    }


// Create a function that counts the number of syllables a word has. Each syllable is separated with a dash -.

    let numberSyllables = (word) => word.split('-').length



// Create a function that takes in an array and returns true if all its values are even, and false otherwise. Not a big deal, your friend says. He writes the following code:  
//     function checkAllEven(arr) {
//         return arr.every(x % 2 === 0)
//     }
// The code above leads to a Reference Error, with x being undefined. Fix the code above so that all tests pass:

    let isEvenNum = (num) => num % 2 === 0 
    let checkAllEven = (arr) => arr.every(isEvenNum)


// A palindrome is a word that is identical forward and backwards: mom, racecar, kayak. Given a word, create a function that checks whether it is a palindrome.

    let checkPalindrome = (str) => str === str.split('').reverse().join('')


// Create a function that takes in an initial word and filters out an array to contain words that start with the same letters as the initial word.

    function dictionary(initial, words) {
        return words.filter(word => word.startsWith(initial));
    }

// Create a function that adds a string ending to each member in an array.

    let addEnding = (arr, ending) => arr.map(el => el.concat(ending))


// Create a function that returns true if a string contains any spaces.

    let hasSpaces = (str) => str.includes(" ")


// Given a number and an object with min and max properties, return true if the number lies within the given range (inclusive).

    let isInRange = (num, range) => num <= range.max && num >= range.min


// Write two functions:
// toInt() : A function to convert the integer value of a string.
// toStr() : A function to transform a string into an integer.

    let toInt = (str) => Number(str);
    let toStr = (int) => `${int}`;


// Given a number and an object with min and max properties, return true if the number lies within the given range (inclusive).

    const isInRange = (num, range) => num >= range.min && num <= range.max;


// Create a function to remove all null values from an array.

    function removeNull(arr) {
        return arr.filter((i) => i !== null)
    }

        let removeNull = (arr) => arr.filter((i) => i !== null)


// Create a function that returns the total number of parameters passed in.

    function numberArgs(/* fill-in */) {
        return arguments.length
    }

        const numberArgs = (...args) => args.length;


// Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.

    function countdown(start) {
        let arr = []
        for (let i = start; i >= 0; i--) {
            arr.push(i)
        }
        return arr
    }


// Write two functions:
// firstArg() should return the first parameter passed in.
// lastArg() should return the last parameter passed in.
// Return undefined if the function takes no parameters.

    function firstArg() {
        return arguments[0];
    }

    function lastArg() {
        return arguments[arguments.length-1];
    }


// Create a function that returns the ASCII value of the passed in character.

    let ctoa = (c) => c.charCodeAt(0)


// Create a function that repeats each character in a string n times.

    function repeat(str, n) {
        return str
            .split('')
            .map(c => c.repeat(n))
            .join('');
    }


// Create a function that returns true if an input string contains only uppercase or only lowercase letters.

    function sameCase(str) {
        let strUp = str.toUpperCase()
        let strLow = str.toLowerCase()
        return strUp === str || strLow === str ? true : false
    }

        const sameCase = str =>
        str.toUpperCase() === str || str.toLowerCase() === str;


// Write a function that transforms all letters from [a,m] to 0 and letters from [n,z] to 1 in a string.

    function convertBinary(str) {
        return str
            .replace(/[a-m]/gi, '0')
            .replace(/[n-z]/gi, '1');
    }


// Create a function replaces all the vowels in a string with a specified character.

    function replaceVowels(str, ch) {
        return str.replace(/[aeoiu]/g, ch)
    }


// Create a function that filters out an array to include numbers who only have a certain number of digits.

    function filterDigitLength(arr, num) {
        return arr.filter(n => String(n).length === num);
    }


// Create a function that removes the first and last characters from a string. If the string is 2 or fewer characters long, 
// return the string itself (See Example #4).

    const removeFirstLast = (str) => str.length > 2 
        ? str.slice(1, str.length - 1) 
        : str


// Write a function that takes the base and height of a triangle and return its area.

    const triArea = (a, h) => (a * h) / 2


// Create a function that returns true if an integer is divisible by 5, and false otherwise.

    const divisibleByFive = n => n % 5 === 0 


// You've got chickens (2 legs), cows (4 legs) and pigs (4 legs) on your farm. Return the total number of legs on your farm.

    const animals = (chickens, cows, pigs) => {
        return chickens * 2 + cows * 4 + pigs * 4
    }

        function animals(chickens, cows, pigs) {
            return chickens * 2 + (cows + pigs) * 4;
        }


// Create a function that returns true if a string is empty and false otherwise.

    const isEmpty =s => s === '';


// Create a function to concatenate two integer arrays.

    const concat = (arr1, arr2) => arr1.concat(arr2)

        const concat = (arr1, arr2) => [...arr1,...arr2]


// Create a function that returns the smaller number.

    const smallerNum = (n1, n2) => Number(n1) < Number(n2) ? n1 : n2


// Create a function that takes an array and returns the difference between the smallest and biggest numbers.

    const differenceMaxMin = arr => Math.max(...arr) - Math.min(...arr)


// Create a function that returns the next element in an arithmetic sequence. In an arithmetic sequence, each element is formed 
// by adding the same constant to the previous element.

    let nextElement= arr => arr[arr.length - 1] + (arr[1] - arr[0])


// A number added with its additive inverse equals zero. Create a function that returns an array of additive inverses.

    const additiveInverse = arr => arr.map(i => -i)


// This is a reverse coding challenge. Normally you're given explicit directions with how to create a function. Here, you must 
// generate your own function to satisfy the relationship between the inputs and outputs. Your task is to create a function that, 
// when fed the inputs below, produce the sample outputs shown.

    const mysteryFunc = (arr, num) => arr.map(i => i % num)


// Write a function that partitions the array into two subarrays: one with all even integers, and the other with all odd integers. 
// Return your result in the following format: [[evens], [odds]]

    const evenOddPartition = arr => [
        arr.filter(x => x % 2 == 0),
        arr.filter(y => y % 2 != 0) 
    ]


// Create a function that returns the product of all odd integers in an array.

    const oddProduct = arr => arr
        .filter(i => i % 2 !== 0)
        .reduce((a, b) => a * b)


// Create a function that removes the first and last characters from a string.

    const removeFirstLast = str => str.length <= 2 ? str : str.slice(1, -1)


// Write a function that maps files to their extension names.

    function getExtension(arr) {
        return arr.map(x => x.split(".").pop())
    }


// Create a function to extract the name of the subreddit from its URL.

    function subReddit(link) {
        return link.map(x => x.split(".").pop())
    }


// Write a function that returns true if all integers in an array are factors of a number, and false otherwise.

    const checkFactors = (factors, num) => factors.every(factor => num % factor === 0)
    
    
// Create a function that finds the maximum range of a triangles third edge.
    
    const nextEdge = (side1, side2) => (side1 + side2) - 1 
    
    
// Write a function to reverse an array.
    
    const reverse = arr => arr.reverse()
    
    
// Create a function that takes a name and returns a greeting. Don't use a normal function but use an "arrow function".
    
    const helloName = name => `Hello ${name}!`
    
    
// Write a function to check whether an array contains a particular element.
    
    const check = (arr, el) => arr.includes(el)
    
    
// Create a function that gets an object arguments with height, width and length of a box and returns the volume of the box.
    
    const volumeOfBox = (sizes) => sizes.height * sizes.width * sizes.length;


// Write a function that validates whether two strings are identical. Make this validator case insensitive.

    const match = (s1, s2) => s1.toLowerCase() === s2.toLowerCase()
    
    
// Write a function that returns true if k^k == n for input (n, k).
    
    const kToK = (n, k) => Math.pow(k, k) === n
    
    
// Create a function that goes through the array, incrementing (+1) for each odd number and decrementing (-1) for each even number.
    
    const transform = arr => {
	    return arr.map(i => i % 2 === 0 ? i - 1 : i + 1)
    }
    
    
// Write a regular expression that matches a string if it contains at least one digit.
    
    let x = /\d/;


// Write a function that returns true if there exists at least one number that is larger than or equal to n.

    function existsHigher(arr, n) {
        return arr.some(el => el >= n)
    }


// Write a function that returns true if an object is empty, and false otherwise.

    const isEmpty = obj => Object.keys(obj).length === 0;


// Write a function that returns true if a word can be found in between the start and end word in a dictionary.

    function isBetween(first, last, word) {
	    return [...arguments].sort()[1] === word;
    }


// Write a function that turns a comma-delimited list into an array of strings.

    function toArray(str) {
    	return str.length > 0 ? str.split(", ") : [];
    }


// In this exercise you will have to: 
   // - Take a list of names, 
   // Add "Hello" to every name, 
   // Make one big string with all greetings.
   // The solution should be one string with a comma in between every "Hello (Name)".

    function greetPeople(names) {
	    return names.map(name => `Hello ${name}`).join(", ")
    }

 
