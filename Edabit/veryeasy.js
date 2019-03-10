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

        