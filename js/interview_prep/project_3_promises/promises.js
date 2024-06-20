
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
    });
}

function shareTheVideo(video){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(`Share the ${video} video`)
        },1000)
    });
}

importantAction('Mluleki')
.then((res) =>{
    console.log(res);
    likeTheVideo("super").then((res) =>{
        console.log(res);
    shareTheVideo("good").then((res) =>{
        console.log(res);
    });
    });
})
.catch((err) => console.error(err)); 
console.log("stop");


