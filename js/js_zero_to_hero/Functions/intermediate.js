/**
 * Arrow function practice
 */
const isEven=(n)=>n%2==0
const isOdd =(x)=>x%2==1
const concatArrays = (n1,n2)=>(n1.concat(n2))

const multiplyArray = (array1,n)=>{
    const array2 = []
    for (let i =0;i<array1.length;i++){
        array2[i] = array1[i] *n
    }
    return array2
}

console.log(isEven(3))
console.log(isOdd(3))
console.log(concatArrays([1,2,3,3,4],[8,9,10]))
console.log(multiplyArray([1,2,3,3,4],3))


/**
 * Calculate sum using rest paramters
 * Calculate sum
 */

function CalculateSum(...numbers){
    let sum =0;
    for (let num of numbers){
        sum =sum+num
    }
    return sum
}

const sum1 =  CalculateSum(10,20,30,50)
console.log(sum1)

/**
 * Concat strings
 */
function concatString(seperator,...strings){
    return strings.join(seperator)
}

const concatStr = concatString('-','banana','apple','orange')
console.log(concatStr)

/**
 * Find Max
 */

function findMax(...rest){
    return Math.max(...rest)
}


function maximum(array7){
    let newMax = 0
    let currentMax = 0
    for(let i =0;i<array7.length;i++){
         currentMax = array7[i]
        for(let j =1;j<array7.length;j++){
            if(currentMax < array7[j]){
                newMax = array7[j]   
            }
        }    
    }
    return newMax
}
const maxi =findMax(10,30,15,90,69,100)
console.log(maxi)
console.log(maximum([1,12,3,45,7]))

/**
 * Function inside a function
 */

function outerFunc (){
    console.log("Outer Function is executed")
    function innerFunction(){
        console.log('innerFunction is executed')
    }
    return innerFunction()
}

outerFunc();