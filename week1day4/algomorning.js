//Code Flow - Functions
var x = 5;
    
function setX(newValue) {
    x = newValue; 
    x=15
}
    
console.log(x); 5
setX(15);
console.log(x);15

5,15


//The Return of return

var x = 5;
    
function addToX(amount) {
    return x + amount;
    console.log("hello there");
}
    
console.log(x);5
var result = addToX(-10);
console.log(result);-10+5=5
console.log(x);5

5,-5,5


//palindrome?

function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) {
        var right = arr.length-1-left;
        if(arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);