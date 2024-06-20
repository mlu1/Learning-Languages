/*
    Promises in Javascript
    Question 1- What's the ouput?

*/
/*
const promise1 = new Promise((resolve,reject) =>{
    console.log(1);
    resolve(2);
    console.log(3)
})

promise1.then((res)=>{
    console.log(res)
});
*/


/*
    Because Javascript will execute synchronous code 
    before asychronous code. 
    since .then is an asynchronous code then it will 
    execute after all sybchronous code is finished.
    ######OUTPUT#####
    1
    3
    end
    2
*/
/*
    Question 2


const fn = () =>new Promise((resolve,reject) =>{
    console.log(1)
    resolve("success");
    }); 

console.log("middle");

fn().then((res) =>{
    console.log(res);
    });
    
console.log("end")
*/

/*
    Question 4
    what is the output?
    Promise chaining
*/

function job(){
    return new Promise(function(resolve,reject){
        reject();
    })
}

function jobs(state){
    return new Promise(function(resolve,reject){
        if (state){
            resolve("success");
        }
        else{
            reject("error");
        }
    });
}

/*
let promise = job();
promise
.then(function(){
    console.log("Success 1")
})
.then(function(){
    console.log("Success 2")
})
.then(function(){
    console.log("Success 3")
}).catch(function(){
    console.log("Error 1")
}).then(function(){
    console.log("Success 4")
})

promise
    .then(function (data) {
        console.log(data);

        return jobs(false);
    })
    .catch(function (error) {
        console.log(error);
        return "Error caught";
    })
    .then(function (data) {
        console.log(data)
        return jobs(data)
    })
    .catch(function (error) {
        console.log(error);    
    });
*/

//%%%%%%%%%%%%---LONGER CHAINS---%%%%%%%%%%%%%%%%%
/*
    1.success
    2. Defeat
    3. error
    4. Error caught
*/

let promise = jobs(true)
promise
.then(function(data){
    console.log(data); //success
    return jobs(true);
})
.then(function(data){
    if (data != "victory"){
        throw "Defeat";
    }
    return jobs(true)
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error) //Defeat
    return jobs(false)
}).then(function(data){
    console.log(data);
    return jobs(true);
}).catch(function(error){
    console.log(error);
    return "Error caught!"
}).then(function(data){
    console.log(data)
    return new Error("test")
}).then(function(data){
    console.log("Success",data.message)
}).then(function(data){
}).catch(function(){
    console.log("Error",data.message)
})

/*
    Promise Chaining
    Ques 7 -Promise Cheating
*/

const firstPromise = new Promise((resolve,reject) =>{
    resolve("First!")
})

const secondPromise = new Promise((resolve,reject) =>{
    resolve(firstPromise)
})

secondPromise
    .then((res) =>{
        return res;
    })
    .then(res => console.log(res))

