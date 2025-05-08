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
    "my Hobbies":['learning','football','criket'],
    country:'eSwatini'
}

console.log(obj["name"])
console.log(obj["age"])
console.log(obj.name)
console.log(obj["my Hobbies"])

/**
 * 2.1 Add remove objects
 */

const cars = {} 
cars.name = 'Toyota'
cars.model = 'Camry'
cars.year = 2002
cars['color'] = 'Black'

console.log(cars)
delete cars.color
console.log(cars)

for(let key in cars){
    console.log(cars[key])
}

console.log(Object.keys(cars).length)

for(let key of Object.keys(cars)){
    console.log(`${key} : ${cars[key]}`)
}

const arrayObject = [{
    name:'Alice',age:20},
    {name:'Bob',age:22},
    {name:'Mluleki',age:35}
]

for(let obj of arrayObject){
    console.log(obj.age)
}

/**
 * Spread Operator
 * clone or copy array
 */
const originalArray = [32,22,11];
const copiedArray = [...originalArray] //copy original value to copied array
console.log(copiedArray)

/**
 * merge array
 */

const array23 = [10,20,30]
const array24 = [40,50,60] 
const array25 = [70,80,90] 

const mergedArray = [...array23,...array24,...array25]
console.log(mergedArray)

/**
 * add element
 */
const arr26 = [10,20,30]
const newArrays = [...arr26,76,54,43]


console.log(newArrays)

/**
 * copy object
 * merge objects
 * add propeties
 */

const originalObj = {name:'Mlu',age:22}
const copiedObj = {...originalObj}
console.log(copiedObj)


console.log('Merge Objects')
const obj1 ={name:'Mlu'}
const obj2 = {age:35}

const mergedObj = {...obj1,...obj2}
console.log(mergedObj)

const upDate = {...mergedObj,gender:'male'}
console.log(upDate)

/**
 * Destructuring
 */

const {name,age,country} = obj
console.log(age)

const student ={
    fname:'mlu',
    lname:'mtande'
}

/**
 * rename variables
 */
const {fname:first,lname:last} = student
console.log(first)


/**
 * Nested objects
 */

const personalDetails ={
    myname:'mluleki',
    age:35,
    address:{
        city:'New York',
        mycountry:'USA'
    }
}

const {myname:personalName,address:{city,mycountry}} = personalDetails
console.log(personalName)
console.log(city)
console.log(mycountry)



