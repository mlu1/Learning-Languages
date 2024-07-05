'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
    // Write your code here
    
    for (let i=1;i<=n;i++){
        if (i%3 == 0 && i%5==0){
        
            console.log('FizzBuzz');
        }else if (i%3 == 0 && i%5 !=0){
            console.log('Fizz');
        }else if (i%3 != 0 && i%5 ==0){
            console.log('Buzz')
        }else{
            console.log(i)
        }
    }
        
}


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    
    var consonents = []
    let result
    const a = s.split("");
     for (var i = 0; i < a.length; i++) {
        if (a[i] === 'a' || a[i] ==='e' || a[i] ==='i' || a[i] ==='o' ||
            a[i] === 'u') {
                console.log(a[i])
        }
        else{
            consonents.push(a[i])
        }
    }
    
    for (var j = 0; j < consonents.length; j++) {
        console.log(consonents[j])
    }
    

