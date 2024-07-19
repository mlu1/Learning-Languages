/*
    Explain this keyword?
*/

let user = {
    name:"Mluleki",
    age: 30,
    childObje:{
            newName:"Mluleki Coder",
            getDetails(){
            console.log(this.newName ,"and",this.name);
        },
    },
};

user.childObje.getDetails() //it will refer to it's immediate this

/*
    REPLACE WITH AN ARROW FUNCTION
*/

let users2 = {
    names:"Mluleki",
    ages:"35",
    getSuperDetails(){
        const nestedArrow = () =>console.log(this.name);
        nestedArrow();
    }
}

users2.getSuperDetails();

class User{
    constructor(n){
        this.name = n;
    }
    getName(){
        console.log(this.name)
    }
}

const users_2  = new User("Mluleki")
console.log(users_2)

/*
    Q1:whats the output? 
*/

const user_q1 = {
    firstName:"Mluleki",
    getName(){
        const firstName = "MluekiCool"
        return this.firstName
    }
}
console.log(user_q1.getName());

/*
    Q2: whats the result of accessing it's ref and why?
*/



function  makeUser(){
    return {
        name:"johns",
        refs:this,
    };
}

let user_q3 = makeUser()
console.log(user_q3.refs.name) //it is pointing to nothings

/*
    Fix it!
*/

function makeOver2(){
    return {
        name:"John",
        refs(){
            return this;
        }
    }
}

//function is inside an object and is poiting to 
let user10  = makeOver2();
console.log(user10.refs().name)



/*
    Whats the output?
*/
const user11 = {
    name: "Mluleki Mtande",
    logMessage(){
        console.log(this.name);
    },
};

setTimeout(user11.logMessage,1000) //output is undefined

setTimeout(function(){
    user11.logMessage();
},1000)

/*
    whats the output?
*/

const user12 ={
    name:"MLU",
    greet(){
        return `Hello,${this.name}`
    },
    farewell:() =>{
        return `Goodbye, ${this.name}`
    },
}

console.log(user12.greet());
console.log(user12.farewell());









