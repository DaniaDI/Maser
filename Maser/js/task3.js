  // here i wanna explain the iteration and function okeyy by Dania ..
      
    
function sum(arr) { //arr parameter 
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

/* numbers =[10,20 ,30,40,50] this is the array of numbers
       1- sum func. will take the array and loop through it to add all the numbers and return the sum so i=0 take 10 then added to sum =0+10=10 then
        i=1 take 20 added to sum =10+20=30 
        then i=2 take 30 added to sum =30+30=60 
        then i=3 take 40 added to sum =60+40=100
        then i=4 take 50 added to sum =100+50=150 so the final result is 150 */


//here i used the sum function created above
function average(arr) {
    let total = sum(arr); 
    return total / arr.length;
}

//another solution for average function
function avg(arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}
/* expalin iteration avg func.:
    numbers =[10,20 ,30,40,50] this is the array of numbers
    1- avg func. will take the array and loop through it to add all the numbers and return the average so i=0 take 10 then added to sum =0+10=10 then
    i=1 take 20 added to sum =10+20=30
    then i=2 take 30 added to sum =30+30=60 
    then i=3 take 40 added to sum =60+40=100
    then i=4 take 50 added to sum =100+50=150 so the final result is 150 then divide it by the length of the array which is 5 so the final result is 30
*/

function maximum(arr) {
    let max = arr[0]; // first element of the array while be the max value
    for (let i = 1; i < arr.length; i++) { 
        if (arr[i] > max) { // the num in arr looped is greater than the max value then swap
            max = arr[i];
        }
    }
    return max;
}
/*explain iteration max func.:
    numbers =[10,20 ,30,40,50] this is the array of numbers
    1- maximum func. will take the array and loop through it to find the maximum number and return it so i=0 take 10 then compare it with max =10 then
    i=1 take 20 then compare it with max =20 then
    then i=2 take 30 then compare it with max =30 then
    then i=3 take 40 then compare it with max =40 then
    then i=4 take 50 then compare it with max =50 so the final result is 50
*/

//same logic for max function
function minimum(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
/* expalin iteration min func.:
    numbers =[10,20 ,30,40,50] this is the array of numbers
    1- minimum func. will take the array and loop through it to find the minimum number and return it so i=0 take 10 then compare it with min =10 then
    i=1 take 20 then compare it with min =20 then
    then i=2 take 30 then compare it with min =30 then
    then i=3 take 40 then compare it with min =40 then
    then i=4 take 50 then compare it with min =50 so the final result is 10
*/

let numbers = [10, 20, 30, 40, 50];
console.log("Sum: " + sum(numbers));
console.log("Average: " + average(numbers));
console.log("Average2: " + avg(numbers));
console.log("Maximum: " + maximum(numbers));
console.log("Minimum: " + minimum(numbers));

 