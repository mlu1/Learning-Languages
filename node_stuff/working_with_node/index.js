import fs from 'fs'


fs.stat('./package.json',(err,stats)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(`The file is ${stats.size} bytes`)
    }
});

console.log('Here')