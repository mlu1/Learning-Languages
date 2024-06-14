//What is function decalration?
function suare(num){
    return num*num;
}

/*what is a function expression?
A function stored into a variable
*/
const square_values = function (num) {
    return num * num;
}

/*Q3 what are first class functions?
*/
function displaySquare(fn){
    console.log("Square is " + fn(5));
}
displaySquare(square_values)

/*
Q4  What is an IIFE (Immediately Invoked Function Expression)
    is a  JavaScript function that runs as soon as it is defined.
    The signature of it would be as below. For example
*/

(function add_values (num) {
    console.log(num+num)
    })(5);

(function(x){
    return (function(y){
        console.log(x) //1
    })(2);
})(1);
/*
Becasue of closure
*/

/*
  The primary reason to use an IIFE is to obtain data privacy because any variables
  declared within the IIFE cannot be accessed by the outside world. 
  i.e, If you try to access variables from the IIFE then it throws an error as below,
*/








