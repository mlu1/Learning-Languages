
//map filter reduce
//what is map?

const nums = [1,2,3,4]

//map
const multiplyThree = nums.map((num,i,arr) => {
    return num*3;
})

console.log(multiplyThree)

//filter
const moreThanTwo = nums.filter((num) => {
    return num>2;
})

console.log(moreThanTwo)

//reduce
const sum = nums.reduce((acc,curr,i,arr) => {
    return acc +curr
},0)

console.log(sum)

Array.prototype.myMap  = function(cb){
    let temp = [];
    for (let i = 0;i<this.length;i++){
        temp.push(cb(this[i],i,this));
    }
    return temp
};


const customMap = nums.myMap((num) =>{
    return num *3;
})

console.log(customMap)

// what is the difference between map and forEach?
const arr = [2,5,3,4,7]

const mapResult = arr.map((ar) =>{
    return ar+2;
})

const forEachResult = arr.forEach((ar,i) =>{
    arr[i] = ar+3;
})

console.log(mapResult)
console.log(arr)

// Some filter questions!
let students = [
    {name:"Plyush",rollNumber:31,marks:80},
    {name:"Jenny",rollNumber:15,marks:69},
    {name:"Kaushal",rollNumber:16,marks:35},
    {name:"Dilpret",rollNumber:7,marks:55},
];

/*
    Question 1: Return only names of students in Capital
*/
//Method 1
let names = []
for (let i=0;i<students.length;i++){
    names.push(students[i].name.toUpperCase())
}
console.log(names)

//Method 2
const names2 = students.map((stu) => stu.name.toUpperCase())
console.log(names2)

/*
    Question 2 - Return only details of those  who scored more than 60
*/
const details = students.filter((stu) =>stu.marks >60)
console.log(details)

/*
    Question 2 - Return only details of those  who scored more than 60
*/
const details2 = students.filter((stu)=>stu.marks>60 && stu.rollNumber>16)
console.log(details2)


/*
    Question 3 - sum of all the scores
*/

sum_scores = students.reduce((acc,curr) =>acc+curr.marks,0)
console.log(sum_scores)


/*
    Question 3 - Return only the names of students who scored more than 60
*/

const names_2 = students.filter((stu) => stu.marks > 60).map((stu)=>stu.name);
console.log(names_2)


/*
    Question 6 - Return total marks for students with marks greater than 60
                 after 20 marks have been added to those who scored less than 60
*/


const totalMarks = students.map((stu)=>{
    if (stu.marks < 60){
            stu.marks +=20;
    }
    return stu
}).filter((stu)=>stu.marks>60).reduce((acc,curr)=>acc+curr.marks,0)

console.log(totalMarks)
