/**
 * Testing Colors
 */

/**
 * Animation
 */
import { clear } from 'console';
import readline from 'readline';

function clearConsole(){
    process.stdout.write('\u001B[2J\u001B[0;0f')
}

clearConsole();

function getLoadingMessgae(){
    return percentage >=100
        ?green(`Loading ... ${percentage}% Complete`):
        yellow(`Loading ....${percentage}%`)
}


let perCentLoaded = 0;

function getProgressBar(percentage){
    
}

process.stdout.write(`Loading ...${perCentLoaded}%`);


function moveCursorToBottom(){
    readline.cursorTo(process.stdout,0,process.stdout.rows - 1);
}

let interal = setInterval(()=>{
    readline.cursorTo(process.stdout,0,0);
    readline.clearLine(process.stdout,0);
    perCentLoaded +=5;
    process.stdout.write(`Loading ...${perCentLoaded}%`);
    
    if(perCentLoaded>=100){
        clearInterval(interal)
        moveCursorToBottom();
    }
},100);

console.log(`\x1b[38;5;mHello colors 1!\x1b[0m`);
console.log(`\x1b[48;5;39mHello colors 2!\x1b[0m`);
console.log(`\x1b[38;5;226;48;5;39mHello colors 3!\x1b[0m`);
console.log(`\x1b[38;5;9mHello colors 4!\x1b[0m`);
console.log(`\x1b[38;2;255;150;0mHello colors 4!\x1b[0m`);


function _addColor(string_input,numberCode){
    return `\x1b[${numberCode}m${string_input}\x1b[0m`
}

let colors4Bit = {
    black:0,
    red:1,
    green:2,
    yellow:3,
    blue:4,
    magenta:5,
    cyan:6,
    white:7
}

let variants = {
    foreground:3,
    background:4,
    'foreground-bright':9,
    'background-brignht':10,
}

function createColor(color,variant){
    return function(string){
        return addColor(string,color,variant);
    }
}

let blue = createColor('blue');
let red = createColor('red');
let yellowBg = createColor('yellow','background')
let greenBg = createColor('green','')

function addColor(strcolor,color,variant = 'foreground'){
    let colorCode =colors4Bit[color] || 7;
    let variantCode = variants[variant] || 3
    return _addColor(strcolor,`${variantCode}${colorCode}`)
}

let name1 = 'Mlu';
let greeting = 'Hello,'+addColor(name1,'red','foreground-bright') + '!'
let coloredString = addColor('Hello','34')
console.log(coloredString)
console.log(greeting)

let name2 = 'Nozi'
let more_greeting = 'Hello, '+yellowBg(name2) + '!'  
console.log(more_greeting)
