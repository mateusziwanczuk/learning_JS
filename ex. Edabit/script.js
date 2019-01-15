/* ***************************************
 * ***************************************
 * 
 *          EDABIT EXERCICES
 * 
 * ***************************************
*************************************** */


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

        







