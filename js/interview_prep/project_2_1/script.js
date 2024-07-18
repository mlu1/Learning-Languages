/*
    Q1 objects questions!
*/

const user  = {
    name:'Mluleki',
    age:35,
    "like this video":true
};
user.name = "Mtande"
console.log(user.name)

for (key in user){
    console.log(user[key])
}


const func = (function(a){
    delete a;
    return a;
})(3);

console.log(func)

const property  =  "firstName"
const name = "Mluleki"
const users = {
    [property]:name
}

console.log(users)

/*
    Q1 what will be the output?
*/
const obj = {
    a:"one",
    b:"two",
    a:"three"
}
console.log(obj)

/*
    Create a function multiplyByTwo(obj)
    that multiplys all numeric property values of num by 2 
*/
let nums = {
    a:100,
    b:200,
    title:"My nums",
}

function multiplyByTwo(obj){
    for (key in obj){
        if(typeof(obj[key])){
            obj[key] *= 2;
        }
    }
}

multiplyByTwo(nums)
console.log(nums)


/*
    Q3 - Whats the output of the following code? 
*/

const a  = {

};
const b = {
    key:"b"
}
const c = {
    key: "c"
}

a[b] = 123;
a[c] = 456;

console.log(a)
//The output is 456 because the the "key" is overlapped in the second assignment.

/*
    Q4 - How do you convert this object into a string?
*/

const users_2= {
    name:"Mlu",
    age: 35
}

const strobj = JSON.stringify(user)
const Objstr = JSON.parse(strobj)

//local storage

localStorage.setItem("test",strobj);

/*
    Q5 - Whats the output?
    
*/
console.log(..."Lydia")
//it will spread all the characters of this array

const user3 = {
    name:"Lydia",
    age:21
}

const admin = {
    admin:true,
    ...user3
}
console.log(admin)


/*
    what is the output? 
*/
const settings = {
    username :"Mluleki",
    level:18,
    health:80
}

//the following code will only stringify level and health
const data =JSON.stringify(settings,["level","health"]);
console.log(data)

/*
    whats the output?
*/

const shape = {
    radius:10,
    diameter(){
        return this.radius*2;
    },
    perimeter: () => 2*Math.PI * this.radius
};

console.log(shape.diameter());
console.log(shape.perimeter());// this one points to the window object


/*
    What is destructuring
*/

let user4  = {
    name5:"Mlu",
    age :35,
    fullName:{
        first:"Mlue",
        last:"Mtande"

    }
}
const { name5 } = user4
console.log(name5)
const {fullName:{first}} = user4
console.log(first)

function getItems(fruitList,favouriteFruit,...args){
        return [...fruitList,...args,favouriteFruit]
}
console.log(getItems(["banana","apple"],"pear","orange"))


/*
    Whats the output?
*/
//Reference to d
let cc = {greeting:"Hey"}
let dd
dd = cc
dd =cc.greeting = "Hello";
console.log(dd.greeting)