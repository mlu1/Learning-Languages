//Functions in Javascript

//an anonymous function
function squares(m){
    return m*m;
}

const square = function(num){
    return num*num;
}

//Q3 -what is a First Class function
function displaySquare(fn){
    console.log("The sqaure is " + fn(5));
}

//displaySquare(squares)

//Q4 -What is IIFE? Immediately Invoked Function Expression
(function cube(num) {
    console.log(num*num*num)
})(5);


/*
    ALSO CAN GET TO KNOW WHAT IS A CLOSURE
*/
(function (x){
    return (function(y){
        console.log(x); //the output is 1 and not undefined. Firts it will search in the inner scope, if not found it will search in outer scope
    })(2);
})(1);


/*
    EXAMPLE ON FUNCTON SCOPE
*/
var num1 = 20, num2=2, name = "Roadside Coder"

function multiply(){
    return num1*num2
}

/*
    in this case multiply will take the num1 
    and num2 will take from global scope
*/

console.log("OUTPUT FROM multiply()"+multiply());

function getScore(){
    var num1=2,num2=3
    function add(){
        return name + " scored " + (num1 + num2) //num1 and num2 are taken from local scope ,but name is taken from  global scope
    }
    return add()
}

console.log(getScore());
/*
    What is the output of this function 
*/

for (let i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    },i*1000) //0 1 2 3 4
}

/*
    Q5 Function hoisting 
*/
functionName();
function functionName(){
    console.log(x)
    var x = 70
    console.log("Roadside Coder Hoisted")
}

/* 
    Q6 - Function Hisying - O/P Based Question
*/

var xx = 21;
function fun (){
    console.log("Q6 OUTPUT"+xx);
    var xx = 20;
}
fun()

/*
    Q10 Params vs Arguments
*/

//rest operator
function squared(num1,num2){
    console.log(num1 *num2)
}

var arr = [5,6]
//spread operator
squared(...arr)

const fn = (a,x,y,...numbers) =>{
    console.log(x,y)
};

fn(5,6,3,7,8,9)

/*
    Q12 Arrow function
*/
//Normal function
const add = function(firstName,secondName){
    return firstName+secondName
};

//Arrow function
const addings = (firstName,secondName) =>{
    return firstName +secondName
}

// 2 implicit "return" keyword
const cubes = (num) => num*num

function fn2(){
    console.log(arguments)
}

fn2(1,2,3)

const fnArr = () =>{
    console.log(arguments)
}

/*
    this keyword   
*/

let user = {
    username:"Mluleki Mtande",
    rc1:() => {
        console.log("Subscribe to " + this.username);
    },
    rc2(){
        console.log("Subscibe to " +this.username);
    },
}


user.rc1();
user.rc2();

























