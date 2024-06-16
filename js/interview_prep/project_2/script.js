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
       console.log(count)//count =1     
    }
    console.log(count)//count=0
})()
