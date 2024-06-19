
console.log("start")
function importantAction(username){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(`Subscribe to ${username}`);
        },0)
    })   
}

function likeTheVideo(video){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(`Like the ${video} video`);
        },500)
    })
}

function shareTheVideo(video,cb){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(`Share the ${video} video`)
        },1000)
    })
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

//console.log(message);
//console.log("stop");