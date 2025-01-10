let v1 = 7;
let v2 = true;
const globalv1 = "Im global";

/**
 * Multi-line Comment
 */

my_v1 = "helllo";
const pi = 3.14159;

if (pi < 4) {
  console.log("Yes,pi is less than 4");
} else if (pi === 4) {
  console.log("PI is equal to 4");
} else if (pi === 5) {
  console.log("PI is equal to 4");
} else {
  console.log("No, pi is greater than or equal to");
}

/**
 * For loops
 */
const anArray = ['Hello','Goodbye','Hello again','Goodbye again']
for (let i = 0; i < anArray.length; i++) {
  console.log(anArray[i]);
}

/**
 * for of loops
 */
for (let message of anArray){
    console.log(message)
}

/**
 * for in loops
 */

const myObj = {
    name:'Mlu',
    hairColor:'Brown',
    beard:true
};

for (let property in myObj){
    console.log(property + ': ' +myObj[property]) 
}

/**
 * for each
 */

anArray.forEach(x=>
    {
        console.log(x)
    }
);