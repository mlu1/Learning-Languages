/*
    Synchronous vs Asynchronous code
*/
console.log("start")
setTimeout(() => {
    console.log("Get dream Job ASAP")
},10);

console.log("finish")

function importantAction(username,cb){
    setTimeout(() => {
        cb(`Subscribe to ${username}`);
    },100)
}

function likeTheVideo(video,cb){
    setTimeout(() => {
        cb(`Like the ${video} video`);
    },500)
}

function shareTheVideo(video,cb){
    setTimeout(() => {
        cb(`Share the ${video} video`)
    },1000)
}

const message = importantAction('Mluleki',function(message)
{
    console.log(message)
    likeTheVideo("Video has been liked?", (action) => {
        console.log(action);
    shareTheVideo("Javascript Interview Questions",(action)=>{
        console.log(action);
        });
    });
});

console.log(message);
console.log("stop");
/*
    PROMISES
*/
console.log("Start promises")

const sub = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        const result  = true;
        if(result)resolve("Already subscribed!");
        else  reject(new Error("You are not subscribed"));
    },2000);
})

sub
  .then((res) => {
    console.log(res)
  })
  .catch((err) =>{
    console.error(err)
});

console.log("Stop promises!")
/*
    Promise with no conditions 
*/

console.log("start")
const subs = Promise.reject("Subscribed to Mluleki Wenkaba Mtande")
console.log(subs)

subs
    .then((res) =>{
        console.log(res)
    }).catch((err) =>{ 
        console.log(err)
    })

console.log("stop")


