
        /****************************************************/
        /****************************************************
        
            Exercises of JavaScript. Source: codecademy.com

        ****************************************************/
        /****************************************************/

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array */

// ARRAYS

let newYearResolutions = ['Learn JS', 'Learn more JS', 'Learn NodeJS'];
    console.log(newYearResolutions);
    /* 
            let newYearResolutions = [
            'Learn JS', 
            'Learn more JS', 
            'Learn NodeJS',
            ];
    */



// ACCESSING ELEMENTS

const hello = 'Hello World';   
    console.log(hello[6]); // output: W

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
const listItem = famousSayings[0];
    console.log(listItem); // output: 'Fortune favors...'
    console.log(famousSayings[2]); // output: 'Where there...'
    console.log(famousSayings[3]); // output: undefined
    // Arrays in JavaScript are zero-indexed, meaning the positions start counting from 0.



// UPDATE ELEMENTS

let seasons = ['Winter', 'Spring', 'Summer', 'Fall',];
seasons[3] = 'Autumn';
    console.log(seasons); // output: 'Fall' -> 'Autumn'



// ARRAYS WITH LET AND CONST

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
    condiments[0] = 'Mayo';
        console.log(condiments); // output: ["Mayo", "Mustard", "Soy Sauce", "Sriracha"]
            condiments = ['Mayo'];
                console.log(condiments); // output: ["Mayo"]
    utensils[3] = 'Spoon';
        console.log(utensils); // output: ["Fork", "Knife", "Chopsticks", "Spoon"]



// THE .LENGTH PROPERTY

console.log(utensils.length); // output: 4 -> 4 elements in array utensils.



// THE .PUSH() METHOD

const chores = ['wash dishes', 'do laundry', 'take out trash'];
    chores.push('to dust', 'others')
        console.log(chores);



// THE .POP() METHOD

const chores2 = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
    chores2.pop();
        console.log(chores2); // output: ['wash dishes', 'do laundry', 'take out trash', 'cook dinner']
        // .pop(), removes the last item of an array.



// MORE ARRAY METHODS
    // -----> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array    

    const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
        groceryList.shift();
            console.log(groceryList); // remove the first item from the array
        groceryList.unshift('popcorn');
            console.log(groceryList); // add 'popcorn' to the beginning of grocery list
        console.log(groceryList.slice(1, 4)); // returns 3 elements. Slice is not-mutating!
        console.log(groceryList);
        const pastaIndex = groceryList.indexOf('pasta');
            console.log(pastaIndex); // find index of a particular element



// ARRAYS AND FUNCTIONS

const concept = ['arrays', 'can', 'be', 'mutated'];
function changeArr(arr){
  arr[3] = 'MUTATED';
}
    changeArr(concept);
        console.log(concept); // output: ["arrays", "can", "be", "MUTATED"]
    function removeElement(newArr){
        newArr.pop();
    }
    removeElement(concept);
        console.log(removeElement(concept)); // output: undefined
    // Notice that in both cases, the change to the array was maintained outside of the function!



// NESTED ARRAYS

const numberClusters = [[1, 2], [3, 4], [5, 6]]; // 3 array elements
    const target = numberClusters[2][1]; // Acces the element '6' inside numberClusters
    // When an array contains another array it is known as a nested array.













