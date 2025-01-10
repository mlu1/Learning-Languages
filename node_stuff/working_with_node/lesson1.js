import {promises as fs} from 'fs'

fs.stat('./package.json').then(stats =>{
    console.log(`The file is ${stats.size} bytes`);
})

console.log('Here')