/**
 * 1: Loops
 * 1.1 For loop
 */

for (let i = 0;i<=10;i++){
    console.log(i)
}

/**
 * 1.2 While loop
 */

let j = 0;

while(j<=10){
    console.log(j)
    j++
}

/**
 * 1.3 Do while
 */

let k = 0;
do{
    console.log("Inside Do While loop");
    k= k+2;
}while(k<10)


 /** 
  * 1.4 Break and Continue
  * */   

for(let l = 0;l<10;l++){
    if(l===5){
        break
    }
    else{
        console.log(`waiting for break ${l}`)
    }
}

/**
 * 1.5 Introductiion to Array
 */

let oddNumbers = [1,3,5,7,9]
let num14 = 12

console.log(Array.isArray(oddNumbers))
console.log(typeof oddNumbers)


let fruits = ['banana','apple','mangoes','watermelon','orange']
let mixedArray = [1,1.3,'banana','apple','dog',2n]

console.log(fruits)
console.log(mixedArray)

/**
 * 1.6 Array Methods
 */

fruits.forEach(fruit=>{
    console.log(fruit)
})

let removedFruit = fruits.pop();
console.log('Removed fruit',removedFruit)

/**
 * 1.7 index of a specifi item on a list
*/
let findApple = fruits.indexOf('apple')
console.log(findApple)

let hasWaterMelon = fruits.includes('orange')
console.log(hasWaterMelon)

let sliceFruits = fruits.slice(1,3)
console.log(sliceFruits)

let joinedFruit = fruits.join(', ')
console.log(joinedFruit)

/**
 * 1.8 Iterate through arrays
 */

for (let y = 0;y<fruits.length;y++){
    console.log(y)
}

for (let fruit of fruits){
    console.log(fruit)
}

let firstnames = ['Alice','Bob','Charlie','David','Mary']

for (let name in firstnames){
    console.log(firstnames[name])
}


let x = 0
while(x<firstnames.length){
    console.log(firstnames[x])
    x++
}

const array1 = ['blue','yellow','white','pink']
const array2 = []

for(let n=0;n<array1.length;n++){
    array2.push(array1[n].toUpperCase())
}
console.log(array2)


/**
 * 1.9 Array Destructure
 */
let [a,b,...rest] = array1
console.log(Array.isArray(rest))
console.log(typeof a,a)


/**
 * 2.0 Objects
 */

const obj ={
    name:'Mluleki',
    age:35,
    "my Hobbies":['learning','football','criket']
}

console.log(obj["name"])
console.log(obj["age"])
console.log(obj.name)
console.log(obj["my Hobbies"])