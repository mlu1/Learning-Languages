import fs from 'fs'
let newPerson ={
    name:'bill',
    age:44,
    hairColor:'yellow'
}

let headerLine =Object.keys(newPerson).join(','); 
let personLine = Object.values(newPerson).join(',')

let data = headerLine + '\n' +personLine

fs.appendFile('./people2.csv',data,(err)=>{
    console.log('File appended')
})

fs.appendFile('./new-file.txt',JSON.stringify(newPerson),(err)=>{
    console.log('FUCK')
})


fs.writeFile('./new-file.txt',JSON.stringify({a:1,b:2,c:3}),(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('FINISHED WRITING FILE')
    }
})

fs.readFile('./people.csv','utf-8',(err,contents)=>{
    let lines = contents.split('\n');
    //console.log(lines);
    let propertyNames = lines[0].split(',')
    let peopleLines = lines.slice(1)
    let people = [];
   
    for(let line of peopleLines){
        let propertyValues = line.split(',')
        let person = {};
        for (let [index,propertyName] of propertyNames.entries()){
             person[propertyName] =  propertyValues[index] 
        }
        people.push(person)
    }
    console.log(people)
})

