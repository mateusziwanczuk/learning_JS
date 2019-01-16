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