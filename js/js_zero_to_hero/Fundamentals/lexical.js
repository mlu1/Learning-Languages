function outer(){
    const number_outer = 20 
    function inner(){
        const num = 4;
        console.log(num) //inner function
        console.log(number_outer)
    }
    inner();
}

outer()

let num1 = 20;

function outer_func(){
    console.log(num1);
    const num3  = 60
    function inner_func(){
        /**
         * if num3 is present  in the inner function or not
         * if present then print value
         * else find that variable within that lexical environment
         */
        const num3 = 0
        console.log(num3);
    }
    inner_func();
}

outer_func()
