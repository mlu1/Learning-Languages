let title = 'Javascript Course'
console.log(title)
var subtitle = 'javaScript Course'

let str  = '  JavaAndScript  '
console.log(str.length)
let trimStr = str.trim(0)
console.log(trimStr)
console.log('After trim ',trimStr.length)
console.log(trimStr.toUpperCase())
console.log(trimStr.toLowerCase())
console.log(trimStr.slice(0,2))

/**
 * string manipulation
 */

let age = 35
let fullname = 'Mluleki Mtande'
myself = `The age is ${age} and name is ${fullname}`

let str1 = "the complete course"
let str2 = "javascript"
console.log(str1+str2)
console.log(myself)

console.log(typeof age)

/**
 * DATA TYPES
 */

let str3 = 'mlu';

console.log(typeof str3,str3);
console.log(typeof(str));

let num3 = "34";
console.log(typeof num3,num3);

let num4 = +num3
console.log(typeof num4,num4)

let num5 = "53"
console.log(parseInt(num5))

let num6 = 54+""

let num7 = 20
let num8 = 30

console.log(20+30)

let num9 = "10"
let num10 = "11"
console.log(num9+num10)

let num11 = "20";
let num12 = 50;
console.log(typeof (num11+num12))

/**
 * BigInt , null and 
 */

let myNum =  BigInt(122204885958595859302444444444)
console.log(typeof myNum,myNum)

let num13 = 12n
console.log(typeof num13)
console.log(num13.MAX_SAFE_INTEGER)


/**
 * undefined: declare a variable but not assing a value
 */
let fname
console.log(typeof(fname))

fname = 'mlu'
console.log(typeof fname,fname)


/**
 * null - nothing -no value stored in variables
 */

let ti = null;
console.log(ti)
console.log(typeof ti)
ti = "javascript"
console.log(typeof ti,ti)

/**
 * Boolean
 */
let flag = true
console.log(flag)

let num20 = 13 
let str20 = "13"

console.log(typeof(num20),typeof(str20))
console.log(num20 === str1) //compare datatypes + theri value

/**Truthy and falsy values*/

/** falsy values
 * 0 , "" ,null ,undefined, false
 */
console.log(Boolean(0)) 
console.log(Boolean(null)) 
console.log(Boolean(undefined)) 
console.log(Boolean(false))


/**
 * if else condition
 */

let myAge = 40

if(myAge >=18){
    console.log("Eligible for voting")
}
else{
    {
        console.log("You cannot vote")
    }
}

let num21 = 13

if(num21%2===0){
    console.log("even number")
}
else{
    console.log("Odd number")
}

/**
 * Ternary operations
 */
let isEven =  num21%2 ===0? "even input":"Odd number"
console.log(isEven)

let website = "Udemy"
let course_name = "Javascript"
let code_challenge = true

if(website === "Udemy"){
    if(course_name === "Javascript"){
        if(code_challenge){
            console.log('I can learn everyday')
        }
        else{
            console.log("challenge is not present")
        }
    }
    else{
        console.log("this is course is not javascript")
    }
}
else{
    console.log("I want to learn from Udemy")
}


/**
 * and or operator
 */

let courses_names = 'python'
let subtitle_names = true

if(course_name && subtitle_names){
    console.log('Good idea for learning')
}
else{
    console('I would not like to learn')
}


if(courses_names == "Javascript" || code_challenge ==false ){
    console.log("I want to learn this one")
}
else{
    console.log("I dont want to learn this course")
}

/**
 * More if statements
 */
let a = 10
if(a>10){
    console.log('Number is greater than 5')
}
else if(a ===10){
    console.log("Number is exactly 10")
}
else{
    console.log("Number is less than 10")
}

let greeting = 'evening'

if(greeting == 'morning'){
    console.log(greeting)
}

else if(greeting === 'afternoon'){
    console.log('Good afternoon')
}

else if(greeting === 'evening'){
    console.log("Goodnight")
}

else{
    console.log("Hellow")
}