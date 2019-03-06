/* ***************************************
 * ***************************************
 * 
 *          EDABIT EXERCICES
 * 
 * ***************************************
*************************************** */

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. 
// For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

    function addUp(num) {
        var sum = 0;
        for (var i = 0; i <= num; i++){
            sum += i;
        }
        return sum;
    }


// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

    function minMax(arr) {
        var min = Math.min(...arr);
        var max = Math.max(...arr);
        return [min, max];
    }

        function minMax(arr) {
            return [Math.min(...arr), Math.max(...arr)];
        }


// Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts 
// a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 
// 0 based, meaning December is the 11th month while January is 0.

    function timeForMilkAndCookies(date) {
        var day = date.getDate();
        var month = date.getMonth();
        return (month == 11 && day == 24) ? true : false;
    }


// Create a function that takes an array of non-negative numbers and strings and return a new array without the strings.

    function filterArray(arr) {
        var filtered = arr.filter(function(item){
            return (typeof item === 'number')
        });
        return filtered;
    }

        onst filterArray = arr => arr.filter(i => typeof i === 'number')


// Create a function that takes two strings as arguments and returns the number of times the first string is found in the second string.

    function charCount(myChar, str) {
        var count = 0;
        for(var i = 0; i < str.length; i++){
        if(str.charAt(i) === myChar){
        count++;
            }
    }
        return count;
    }

        function charCount(myChar, str) {
            return [...str].filter(x => x === myChar).length;
        }


// Create a function that takes a string and returns a string in which each character is repeated once.

    function doubleChar(str) {
        return str.split('').map((letter) => letter += letter).join('');
    }

        function doubleChar(str) {
            return str
                .split('')
                .map( (char) => char + char)
                .join('')
        }


// Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.

    function getAbsSum(arr){
        return arr.reduce((count, num) => count + Math.abs(num), 0)
    }


// Create a function that: - Takes a number, a string, and an array as parameters (in that order) - Adds up points based on how many times the number 
// or string is in the array - For example: - If the number is in the array x times, then that is x points - If the string is in the array y times, 
// then that is y+1 points - Returns total number of points calculated

    function stretchTruth(num,str,arr) {
        var x = 0, y = 1;
        for (var i in arr) {
            if (arr[i] === num) x++;
            if (arr[i] === str) y++;
        }
        return x+y;
    }


// Create a function that takes a string and returns the number (count) of vowels contained within it.

    function countVowels(str) {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
      return str.split('').filter(letter => {
        return vowels.includes(letter);
      }).length;
    }

        function countVowels(str) {
            return str.split('').filter(x => 'aeiouAEIOU'.includes(x)).length;
        }

        
// Create a function that takes an integer and returns the factorial of that integer. That is, the integer multiplied by all positive 
// lower integers.

    function factorial(int) {
        if (int < 0) 
            return -1;
        else if (int == 0) 
            return 1;
        else {
            return (int * factorial(int - 1));
        }
    }


// Write a function that takes four string arguments. You will be comparing the first string to the three next strings. Verify if 
// the first string starts with the second string, includes the third string, and ends with the fourth string. If the first string 
// passes all checks, return the string "My head, body, and tail.", otherwise, return "Incomplete.".

    const verifySubstrs = (mainStr, head, body, tail) => {
        return (
            mainStr.startsWith(head) && 
            mainStr.includes(body) && 
            mainStr.endsWith(tail) 
            ? 'My head, body, and tail.' : 'Incomplete.'
    )}


// Given a number n, write a function that returns PI to n decimal places.

    function myPi(n) {
        let Pi = Math.PI;
        let fixedPi = Pi.toFixed(n);
        let fixedPiNum = parseFloat(fixedPi);
        return fixedPiNum;
    }

        function myPi(n) {
            return parseFloat(Math.PI.toFixed(n))
        }


// Create a function that takes a string and returns a new string with all vowels removed.

    let silenceTrump = s => s.replace(/[aeiou]/gi, '')

        function silenceTrump(str) {
            let newStrNoVowels = str.replace(/[aeiou]/ig,'')
            return newStrNoVowels;
        }


// Create a function that takes an array of numbers and returns the following statistics: Minimum Value, Maximum Value, Sequence Length, Average Value

    function minMaxLengthAverage(arr) {
        const min = Math.min(...arr);
        const max = Math.max(...arr);
        const length = arr.length;
        const average = arr => arr.reduce((acc, curVal) => acc + curVal, 0) / length;
        return [min, max, length, average(arr)];
    }

        function minMaxLengthAverage(arr) {
            return [Math.min(...arr), Math.max(...arr), arr.length, arr.reduce((a, b) => a + b) / arr.length];
        }


// Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.

    function findLargestNums(arr) {
        var result = arr.map(Math.max.apply.bind(Math.max, null));
        return result;
    }

        function findLargestNums(arr) {
            return arr.map(x => Math.max(...x));
        }


// Create a function that takes an array of numbers and returns the mean value.

    function mean(arr) {
        const average = arr => arr.reduce((acc, curVal) => acc + curVal, 0) / arr.length;
        return Math.round(average(arr) * 100) / 100;
    }

        function mean(arr) {
            return parseFloat((arr.reduce((a, b) => a + b) / arr.length).toFixed(2));
        }


// Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).

    function formatPhoneNumber(numbers) {
        numbers.splice(0,0,'(');
        numbers.splice(4,0,') ');
        numbers.splice(8,0,'-');
        return numbers.join('');
    }


// Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.

    function isAvgWhole(arr) {
        return Number.isInteger(arr.reduce((x,y) => x + y) / arr.length)
    }

    