/*
    Q1: what is going to be the output?
*/

function abc (){
    //console.log(a,b,c) //the output is undefined, function has been initialised but variable has not been 
    var a =10;
    const c = 30;
    let b = 20
}
/*
    Answer: b and c will be hoisted but in temporal deadzone. they are in the scope
    but not yet decalred
*/
abc()

/*
    Q2: Implicit and explicit binding  
*/

var obj ={
    name:"Mluleki",
    display:function(){
        console.log(this.name)
    },
};

var obj1 = {
    name:"ABC"
}

//explicit binding using call
obj.display.call(obj1) // output is ABC
obj.display() // output is 

/*
    Q3: Implement Caching /Memorize Function in Javascript 
*/

function myMemoize(fn,context){
    const res = {};
    return function(...args){
        var argsCache = JSON.stringify(args)
        if(!res[argsCache]){
            res[argsCache] = fn.call(context || this, ...args)  
        }
        return res[argsCache]
        
    };
}

const clumsyProduct = (num1,num2) =>{
    for (let i = 1; i<100000;i++){
        return num1+num2;
        }
    }
const memoizeClumzyProduct = myMemoize(clumsyProduct)

console.time("First call");
console.log(memoizeClumzyProduct(9467,7649))
console.timeEnd("First call")

console.time("Second call");
console.log(memoizeClumzyProduct(9467,7649))
console.timeEnd("Second call")

/*
    Q4: Output Based Question on Event Loops
*/
console.log("a")
setTimeout(()=>console.log("set"),0);
Promise.resolve(()=>console.log("pro")).then((res) => res());
console.log("b")

//a
//b
//pro
//set

/*
    Q5: infinite Currying 
*/
function add(a){
    return function (b){
        if (b) return add(a+b);
        return a;
    };
}

console.log(add(5)(2)(4)(8)())
/*
    so basically the  function will keep calling add until there no more
    params.
*/

/*
    Q6: implement this code
*/

const calc = {
    total:0,
    add(a) {
        this.total +=a
        return this
    },
    multiply(a){
        this.total *=a;
        return this;
    },
    subtract(a){
        this.total -=a;
        return this
    },
};

const result  = calc.add(10).multiply(5).subtract(30).add(10);
console.log(result.total)
