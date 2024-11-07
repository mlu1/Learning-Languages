/**
 * 1.1 Find target index in array
 */

function findIndex(array1,target){
    for(let i =0;i<array1.length;i++){
        if(array1[i] === target){
            return i
        }
    }
    return -1
}

const inputArray = [10,22,31,24,25,6,17]
const targetIndex = 24
const found = findIndex(inputArray,24)
console.log(found)

/**
 * 1.1 Arrow functions
 */
const greet = (name)=>{
    console.log(`Hello ${name}`)
}

/**
 * IIFE
 */

(function(names){
    console.log(`Hello ${names}`)
})('David')


greet('Charles')