
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

/*
importantAction('Mluleki')
    .then((res) =>{
        console.log(res);
        return likeTheVideo("super");
    }).then((res) => {
        console.log(res)
        return shareTheVideo("cool")
    }).then((resr) =>{
        console.log(res)
    }).catch((err) =>console.log());

console.log("stop");
*/
/*
Promise.all([
    importantAction("Mluleki"),
    likeTheVideo("Interview Questions"),
    shareTheVideo("Last")
]).then((res) =>{
    console.log();
}).catch((err) =>{
    console.error("Error:Promises failed",err)
});
*/

/* 
    Awaits
*/
const result = async() =>{
try{
    const message1 = await importantAction("Mluleki is the best");
    const message2 = await likeTheVideo("Mluleki is the best");
    const message3 = await shareTheVideo("Mluleki is the best");
    console.log({message1,message2,message3});
}catch(error){
    console.log("Promises failed",error)
    }
}
result();
console.log("stop")