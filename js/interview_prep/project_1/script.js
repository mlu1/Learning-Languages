/*
//What is function decalration?
function square(num){
    return num*num;
}

what is a function expression?
A function stored into a variable

const square_values = function (num) {
    return num * num;
}


    Q3 what are first class functions?

function displaySquare(fn){
    console.log("Square is " + fn(5));
}
//displaySquare(square_values)


Q4  What is an IIFE (Immediately Invoked Function Expression)
    is a  JavaScript function that runs as soon as it is defined.
    The signature of it would be as below. For example


(function add_values (num) {
    console.log(num+num)
    })(5);

(function(x){
    return (function(y){
        console.log(x) //1
    })(2);
})(1);

Becasue of closure the inner function is able to
access other variables that are not in this function. 
See example below



var n1 = 20,
    n2 =3,
    names = 'Mluleki';


function multiply(){
    return n1 *n2;
}

console.log(multiply());

function getScore(){
    var n1 = 2,
    n2 = 3

    function add(){
        return names + " scored " + (n1 + n2);   
    }
    return add();
}

console.log(getScore()); //returns 5



  The primary reason to use an IIFE is to obtain data privacy because any variables
  declared within the IIFE cannot be accessed by the outside world. 
  i.e, If you try to access variables from the IIFE then it throws an error as below,


Q7
if you use let , the answer will be 0,1,2,3,4,5
var doesnt have a block scope so the answer will be 5,5,5,5,5



for(let i = 0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    },i * 1000);
}

//this is  considere a global scope
var a = 5
console.log(5)


{
    var b = 4
    let c =5
    const d = 7 
}
console.log(b)

    The block scoped above can work since we use var
    But the c will be not defined  outside of the block
    and also d will be undefined outside of the scope.



this then leads to shadowing , check the example below

function test(){
    let p ="Hello"
    if (true){
        let p ="Hi";
        console.log(p);
    }
    console.log(p)
}

test();

 
    variable declaration , we can use var to define a variable,
    but we cannot redefine a variable using let as it will give errors
    Also re-inialisation of algorithms 
    const a = 5
    a = 6
    will give an error because const can never be updated.



    Hoisting!
    In the first example the var can  printed out and will be undefined.
    it is hoisted to the top of the function. In the second scenario, the block 
    can be hoisted but in temporal dead zone.
    The output when counts is used will give an error!

//example 1 
console.log(count)
var count = 1;

//example 2 
console.log(counts)
let counts = 1;

INTERVIEW QUESTION I GOT
    Question :What will be the output of the following function!!
    Answer: undefined
    Why: The variable is called without being declared , it is hoisted


function abc(){
    console.log(a);
    var a  = 10; 
}
abc();
  

    Part 2 of this question, the guy added more variables
    Answer: b is undefined, c is undefined, a  is undefiend
    b,c are in the temporal dead zone ( the state where variables are in the scope,
    but not yet declared)


function dbc(){
    console.log(a,b,c);
    const c  = 30;
    let b = 20;
    var a = 10;
}
dbc();


    Hoisting functions
    -Functions are hoisted completly
    -The function fun will return undefined this is because
     the variable xz will be hoisted in local scope. Check local scope first

functionName();
console.log(x);

function functionName(){
    var x = 5;
    console.log("Mluleki Coder")
}

var xz  = 21;
var fun = function(){
    console.log(xz);
    var xz  = 20;
}
fun()


    Simple bubble sort algorithm 


function bubbleSort(arr){
    var len = arr.length;
    for (var i=len-1;i>=0;i--){
        for (var j = 1;j<=i;j++){
            if(arr[j-1] > arr[j]){
                var temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

var array = [5, 3, 8, 4, 2];
bubbleSort(array);
console.log(array); // Output: [2, 3, 4, 5, 8]


    Params vs Arguments

function squares(x_values){//params (values received in the function definition)
    console.log(x_values)
}
squares(10) //these are called arguments


    Spread vs Rest operators
    Spread operator is to 

*
function multiply(...nums){
    console.log(nums[0]*nums[1])
}
var arr = [5,6]
//multiply(5,6)
multiply(...arr)


    Another interview question.
    What will be output of the code below?
    it will throw an error because the spread parameters
    must be the last parameter.

const fn = (a,x,y,...numbers) =>{
    console.log(x,y,numbers)
}

fn(5,6,3,7,8,9)

Callback functions
    passing a function inside another function
*/

/*
Arrow functions 
*///convert this function

const add = function(firstName,secondName){
    return firstName+secondName;
}

//to arrow function
const add2 = (firstName,secondName) => {
    return firstName+secondName
}

const add3 = (num) =>{
    return num+num1
}

// implicit  "return" keyword
const add4 = (num) => num1+num2

//3 arguments
function fn(){
    console.log(arguments);  
}
fn(1,2,3)

//convert to arrow function but it throws an error 
/*
const fnArr = () =>{
    console.log(arguments)
};
fnArr()
*/

//4 - "this" keyword
const person={
    name:'Mluleki',
    lastname:'Mtande',
    greet: function(){
        console.log('Hello,' + this.name + ' '+this.lastname)  
    }
};
person.greet();


let user={
    userName:'Mluleki Mtande',
    rc1:() =>{
        console.log("Subscribe to " + this.userName) //undefinded
    },
    rc2(){
        console.log("Subscribe to " + this.userName) //
    },
};

user.rc1()
user.rc2()








