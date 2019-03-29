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


