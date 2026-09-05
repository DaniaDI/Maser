
// task1.1:///////////////////////////////////////////
myval=24;
console.log(myval);

mystr="Hello World";
console.log(mystr);

mybool=true;
console.log(mybool);

mynull=null;
console.log(mynull);

myundefined=undefined;
console.log(myundefined);

// myundefined2;
// console.log(myundefined2);

mysymbol=Symbol("mySymbol");
console.log(mysymbol);

mynum=123;
console.log(mynum);

mybigint=9007199254740991n;
console.log(mybigint);
// task1.2:///////////////////////////////////////////

let a; //declared but not initialized
let b = null;//declared and initialized with null
console.log(a); // explain : since a is declared but not initialized, it is undefined. itd default value of uninitialized variables .
console.log(b); // here b is declared and initialized with null, so it will print null.
console.log(typeof a); // typeof operator returns the type of the variable.here a undefined because it is not initialized
console.log(typeof b); // typeof operator returns the type of the variable.here b null

/*
difference between undefined and null:
- undefined is a type, while null is an object like a 
- undefined is the default value of uninitialized variables, while null is a value that can be assigned to variables like b in above .
*/


// task2.1:///////////////////////////////////////////

console.log(1 + "2"); //12 (string) :"12" because + operator is used for string concatenation when one of the operands is a string..
console.log("5" - 3); // 2 (number) becouse "5" is converted to number 5 and 5-3= 2 because - operator is only for numbers.
console.log(true + 1); // 2 (number) becoue true mean value 1 and false mean value 0 so 1+1 =2
console.log(false + "1"); //"false1" (string) : "false1"
console.log(null + 1); // 1 (number) because null is converted to 0 when used in arithmetic operations, so 0 + 1 = 1
console.log(undefined + 1); // NaN  because undefined is not a number, so the result of adding it to a number is NaN (Not a Number).


//task2.2:///////////////////////////////////////////
let strNum = "42";
let result1 = Number(strNum); 
let num = 3.99;
let result2 = String(num); 
let zero = 0;
let result3 = Boolean(zero); 
console.log(typeof result1, typeof result2, typeof result3);// Output: number string boolean

let result4 = parseInt("42"); // convert to integer -> 42
let result5 = parseFloat("3.14"); // convert to floating-point number -> 3.14
console.log(typeof result4, typeof result5); // Output: number number


//task3.1:///////////////////////////////////////////
let totalSeconds = 3725;

let hours = Math.floor(totalSeconds / 3600); // 1 hour = 3600 seconds , Math.floor() is used to round down to the nearest whole number.
let minutes = Math.floor((totalSeconds % 3600) / 60);//
let seconds = totalSeconds % 60;//
console.log(`${hours}h ${minutes}m ${seconds}s`); // -> 1h 2m 5s



//task3.2:///////////////////////////////////////////

let x = 5; //x=5
console.log(x++); // 5 (post-increment: uses the current value, then increments)
console.log(x); // 6 (x is now 6)
console.log(++x); // 7 (pre-increment: increments, then uses the new value)
console.log(x); // 7 (x is still 7)


//task4.1:///////////////////////////////////////////

console.log(0 == false); //  true  
console.log(0 === false); // false because === checks for both value and type, and 0 is a number while false is a boolean.
console.log("" == false); // true
console.log("" === false); // false because === checks for both value and type, and "" is a  empty string while false is a boolean.
console.log(null == undefined); // true 
console.log(null === undefined); //  false => null and undefined are equal in value but not in type.

//task4.2:///////////////////////////////////////////
// comparison operator
//  A number is between 18 and 65 (inclusive) :
     let age = 30;
     console.log(age >= 18 && age <= 65);  

//  A string is NOT empty (its length is greater than 0)
     let str = "Hello, World!";
        console.log(str.length > 0); //sol
        
     let isNotEmpty = str.length > 0; //sol1
          console.log(isNotEmpty); // true

     if (str.length > 0) { //sol2 
        console.log(true); // true
     }
     if (str !== null && str.length > 0) { //sol3
        console.log(true); // true
     }

   

//  A variable score is either exactly 100 OR exactly 0
     let score = 100;
     let score1 =0;
     console.log(score === 100 || score === 0); // true

     let isValid = score === 100 || score === 0;
     console.log(isValid); // true
     if (score === 100 || score === 0) {
        console.log(true); // true
     }

//  A value is null OR undefined used == check once 
     let value = null;
     let val  = undefined;
    //all optional sol :
     console.log(value == null || value == undefined); // true
     console.log(val == null || val == undefined);
     
     console.log(value == null); // true
     console.log(val == undefined); // true

//task5.1:///////////////////////////////////////////


let name = "";                          // falsy value (empty string)
let displayName = name || "Guest";      
console.log(displayName);               // "Guest" name is falsy

let user = { loggedIn: true };          //{ loggedIn: true } is a truthy value
let status = user && user.loggedIn;    
console.log(status);                    // true  user is truthy, user.loggedIn

let count = null;                       // null is a falsy value
let safeCount = count ?? 0;             //  (nullish coalescing) only null or undefined so safeCount will be 0
console.log(safeCount);                 // 0 

// task5.2:///////////////////////////////////////////


let temperature = 35;
let advice;
if (temperature > 30) {
advice = "Stay hydrated!";
} else {
advice = "Enjoy the weather!";
}

let advice2 = temperature > 30 ? "Stay hydrated!" : "Enjoy the weather!";// Using ternary operator (?:)

let advice3 = (temperature > 30) && "Stay hydrated!" || "Enjoy the weather!";// Using logical OR (||)
let advice4 = (temperature > 30 && "Stay hydrated!") || "Enjoy the weather!";// Using logical AND (&&) and OR (||)

console.log(advice);  // output: "Stay hydrated!"
console.log(advice2);  // output: "Stay hydrated!"
console.log(advice3);  // output: "Stay hydrated!"
console.log(advice4);  // output: "Stay hydrated!"

//task6.1:///////////////////////////////////////////

function calculate(a, operator, b) {
     // i used switch statement to handle different operators  also we can use if else statement but switch is more readable and easier .

    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) {
                return "Error: Division by zero";
            }
            return a / b;
        case "%":
            return a % b;
        case "^":
            return Math.pow(a, b); //  used here pow bcs Math.pow() is a built-in JavaScript function that calculates the power of a number. It takes two args: the base (a) and the exponent (b).
            
        case "**":
            return a ** b;
        case "sqrt":
            if (a < 0) { // Check for negative numberr 
                return "Error: Cannot take square root of negative number";
            }
            return Math.sqrt(a);
        default:
            return "Error: Unknown operator";
    }
}
console.log(calculate(10, "+", 3)); // 13
console.log(calculate(10, "-", 3)); // 7
console.log(calculate(10, "*", 3)); // 30
console.log(calculate(10, "/", 0)); // "Error: Division by zero"
console.log(calculate(10, "%", 3)); // 1
console.log(calculate(10, "^", 3)); // 1000
console.log(calculate(10, "**", 3)); // 1000
console.log(calculate(10, "sqrt", 3)); // "Error: Cannot take square root of negative number"


 // in if else statement we can use if else if else statement to handle different operators but switch is more easer 
    
function calculate(a, operator, b) {
    if (operator === "+") {
        return a + b;
    } else if (operator === "-") {
        return a - b;
    } else if (operator === "*") {
        return a * b;
    } else if (operator === "/") {
        if (b === 0) {
            return "Error: Division by zero";
        }
        return a / b;
    }
    return "Error: Unknown operator";
}


