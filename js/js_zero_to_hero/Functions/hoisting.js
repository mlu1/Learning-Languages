/**
 * 1.0 What is hoisting and Temporal Dead Zone
 *     1.1 Hoisting is calling a value before it can be initialized
 *     1.2 Temporal deadzone is the phase between creation of scope and the actual declarion
 *          of the variable using let of const keyword.
 */
myFunc() //THIS FUNCTION IS HOISTED

function myFunc(){
    console.log('Hello There')
}

/**
 * The output if you use var is hoisted but undefined, but with let it will give an error.
 *  With const the output will be reference error
 */

console.log(myNum)
const myNum = 10
