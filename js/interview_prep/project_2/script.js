/*Closures in JavaScript
    a function that references variables in  the outer scope
    Lexical Scope- A variable defined outside a function can be 
    accessed inside a function
*/
//global
function local(){
    //local
    var username = 'Mluleki';
    console.log(username)
}

function subscribe(){
    var name = "Mluleki";
    //inner scope 2
    function displayName(){
        //inner scope
        console.log(name)
    }
    displayName()
}

var middlename = 'Wenkaba';
function makeFunc(){
    var lastname = "Mozilla";
    function displayName(num){
        console.log(lastname,num,middlename)
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();
local();
subscribe();
makeFunc()(5)

/* Closure scope chain
The inner function can access its parents' variable 
check example below*/
var e  = 10;
function sum(a){
    return function(b){
        return function(c){
            //outer function
           return function(d){
                //local scope (will have access to all the variables)
                return a+b+c+d+e
            }
        }
    }
}

console.log(sum(1)(2)(3)(4))
let count = 0;
(function printCount(){
    if (count === 0){
       let count = 1;
       console.log(count)//count =1  shadowing
    }
    console.log(count)//count=0
})()

/*
Write a function that would allow you to do this
*/
function createBase(num){
    return function(innerNum){
        console.log(innerNum+num)
    };
}

var addSix = createBase(6)
addSix(10) //returns 16
addSix(21) //returns 27

/*
    Time optimization by converting to closure function.
*/

function find(index){
    let a = []
    for (let i=0;i<1000000;i++){
        a[i] = i*i
    }
    return function(index){
        console.log(a[index])
    }    
}

const closure = find()
console.time("6")
closure(6)//49
console.timeEnd("6")
console.time("50")
closure(50)//49
console.timeEnd("50")

/*
    THE MOST FAMOUS JS QUESTION EVER!
    At first the output is 
    3 3 3 because var is function scoped. 

    without using let , how can we convert this function to give an output of 0,1,2
    hint: use closure as shown in b. 
*/

function a(){
    for (var i = 0;i<3;i++){
        setTimeout(function log(){
            console.log(i);
        },i=1000);
    }
}

for(var i=0;i<3;i++){
    function innerFunction(i){
        setTimeout(function log(){
            console.log(i);
        },i * 1000);
    }
    innerFunction(i)
}

/*
    How would you use a clousre to create a private counter?
*/

function counter(){
    //Define a private counter
    var _counter = 0;
    
    function add(increment){
        _counter += increment;
    }
    function  retrieve(){
        return "Counter=" +_counter;
    }
    return {
        add,
        retrieve,
    };
}



const c =counter();
c.add(5)
c.add(15)
console.log(c.retrieve())

/*
What is module pattern? 
*/
var Module = (function(){
    function privateMethod(){
        console.log("private")
    }

    return {
        publicMethod:function(){
        /*/this function can call a private method
            privateMethod
        */
            console.log("public")
        },
        };
    })()

    Module.publicMethod()
    
/*
    Make this run only once
*/

let view;
function likeTheView(){
    let called = 0;
    return function(){
        if (called > 0){
            console.log("Already Subscribed!")
        } else{
            view = "Mluleki";
            console.log("Subscribe to ",view)
            called++;
        }
    };
}

let isSubscribed  = likeTheView();
isSubscribed()
/*
    explicit and implicit binding , running a function once
*/
function once (func,context){
    let ran;
    //return a closure
    return function(){
        if (func){
            ran  = func.apply(context || this,arguments);
            func = null    
        }
        return ran
        };
    }

const hello = once((a,b) => console.log("hello",a,b))
hello(1,2);

/*
    Impleming a caching/Memorie Function
    VERY IMPORTANT QUESTIONS
*/

function myMemorize(fn,context){
    //store data the cache
    const res = {};
    return function (...args){
        var argsCache = JSON.stringify(args)
    
        if (!res[argsCache]){
            res[argsCache] = fn.call(context || this, ...args);
        }
        return res[argsCache]
    }
}

const clumsyProduct = (n1,n2) =>{
    for (let i =1; i<= 1000000;i++){}
    return n1 *n2
};

const memoryClumsyProduct = myMemorize(clumsyProduct)

console.time("First call")
console.log(memoryClumsyProduct(9477,7649))
console.timeEnd("First call")

console.time("First call")
console.log(memoryClumsyProduct(9477,7649))
console.timeEnd("First call")

/*
    Closures in Javascript
    What is the difference between Clousre and Scope
    ***whenever you create a function within another function.
    the inner function is a closure
    ** but the scope in javascript defines which variables you have access to
*/

/*
    Currying
    A function that returns one argument at a time and returns 
    example f(a,b) into f(a)(b)
*/

function f(a,b){
    console.log(a,b)
}
//gets converted to

function fb(a){
    return function (b){
     return `${a} ${b}`
    }
}
console.log(fb(5)(6))
/*
    Currying Questions
    //Question 1 -sum(2)(6)(1)
    --sum all the parameters in the arguments
      the simple implementation   
*/
/*function sum(a,b,c){
    return a+b+c
}
console.log(2,6,1)
*/

function sums(a){
    return function (b) {
        return function (c) {
            return a+b+c;
        };
    };
}

console.log(sums(2)(6)(1))

/*
    The function evaluate can be written in the several ways
    evaluate("sum")(4)(3)
    evaluate("multiply")(4)(3)
    evaluate("divide")(4)(3)
    evaluate("substract")(4)(3)
*/

function evaluate(operation_param){
    return function (a) {
        return function (b) {
            if(operation_param === "sum") return a+b;
            else if(operation_param ==="multiply") return a*b;
            else if (operation_param ==="divide") return a/b;
            else if (operation_param === "substract") return a-b;
            else return "Invalid Operation"
            };
        };
}

const div = evaluate("divide")
console.log(div(10)(2))
console.log(evaluate("sum")(2)(2))
console.log(evaluate("substract")(2)(2))
console.log(evaluate("multiply")(2)(2))

/*
    Currying in Javascript 
    what is Infinite Currying
    console.log(add(5)(2)(5))
*/

//implement this function
/*
    this looks like a recursive function that will check the value
    if a is given , if given it will calculate (a+b) othwerwise it will
    return the value of a  
*/
function adds(a){
   return function (b) {
    //if b has any arguments
    if(b) return adds(a+b);
    return a;
   };
}

console.log(adds(5)(2)(4)(8)())
/*
    Currying vs Partial Application
*/

function sumz(a){
    return function(b,c){
        return a+b+c
    }
}
const x = sumz(10)
console.log(x(5,6))
console.log(x(3,2))
// or
console.log(sumz(20)(1,4))
/*
    DOM manipulation
*/
function updateElemetText(id){
    return function(content){
        document.querySelector(`#`+id).textContent = content;
    };
}
const updateHeader = updateElemetText("heading")
updateHeader('Hello Chinelo')

/*
    curry() implementation
    Converts f(a,b,c) into a f(a)(b)(c)
    currying means that the number of arguments 
    should be equal to the number of arguments
*/

function curry(func){
    return function curriedFunc(... args){
        if (args.length >= func.length){
            return func(... args);
        }else{
            return function(... next){
                return curriedFunc(... args,...next);
            };
        }
    };
}

const sumzs =(a,b,c,d) => a+b+c+d;
const totalSum = curry(sumzs);
console.log(totalSum(1)(6)(5)(6));