// functions
// a block of code which is used to execute some operations
// code reusability
// makes a very less code in less number of lines
// function will not work untill it is called or invoked

// function functionName(parameters){
//     body of statement
// }
// FUNCTION CALLING functionName(arguments)

// let a = 100;
// let b = 200;
// let c = 100
// console.log(a+b+c);

//! general function / function declaration
// a function which uses function keyword and function name both is called genral function
// function add(a,b){
//     console.log(a+b);
// }
// add(100 , 200 )
// add(10,20)
// add(500 ,500)
// add(200, 300)

// sub , div , mul , mod

// return keyword

// a function without return statement with parameter

// function add(a,b){
//     console.log(a+b);
// }
// add(100 , 200 )

// a function with return statement with parameter

// function total(x,y,z){
//     return x+y+z
// }
// console.log(total(10,20,30));

// a function without return statement without parameter

// function greet(){
//     console.log("hello good morning");
// }
// greet()

// a function with return statement without parameter

// function company(){
//     return "im working in IMB company"
// }
// console.log(company());

//! ananomous function / function expression
// a function which does not have any functionName we store the function in a variable   and print the variable

// let add = function(a,b){
//     console.log(a+b);
// }
// add(10,30)

// let greet = function(){
//     return "hello im ananomous function"
// }
// console.log(greet());

//! arrow function   => fater
// this function doesnot have function name , function keyword
// ()=>{

// }

// let add = (a,b)=>console.log(a+b);
// add(10,30)

// let x = ()=>
// {
//     return "im arrow function"
// }
// console.log(x());

// function func() {
//   function func1() {
//     var result = "hello there.";
//     console.log(result);
//     return result;
//   }
//   function func2() {
//     var result = "how y'all doin.";
//     console.log(result);
//     return result;
//   }
//   function func3() {
//     var result = "have a nice day y'all";
//     console.log(result);
//     return result;
//   }
//   func1();
//   func2();
//   func3();
// }
// func();


// function outerFunction(x) { 
//     function innerFunction(y) { 
//         return x + y; } 
//         return innerFunction; } 
//         const addFive = outerFunction(5); 
//         console.log(addFive(3));




// immediate invoked function  expression  iife

// (
//     function add(a,b){
//         console.log(a+b);
//     }
//     (10,20)
// )

// (
//     let x = ()=>
//         console.log("hello");
    
//     ()
// )

// (
//     function x (){
//         console.log("hello");
//     }
//     ()
// )


// HIGHER ORDER FUNCTION / CALL BACK FUNCTION 
// using one function we can do multiple task 
// passing another function as a parameter / argument into a function is called as call back function

// a function which accepts another function as a parameter or argument is called hof 

// function operation(a,b, task){
//     let result = task(a,b)
//     return result
// }

// let add = operation(10 , 20 , function(a,b){
//     return a+b
// })
// console.log(add);

// let sub = operation(500 , 100, function(a,b){
//     return a-b
// })
// console.log(sub);

// let mul = operation(10 , 20 , function(a,b){
//     return a*b
// })
// console.log(mul);

// let div = operation(10 , 20 , function(a,b){
//     return a/b
// })
// console.log(div);

// let mod = operation(10 , 20 , function(a,b){
//     return a%b
// })
// console.log(mod);


function formalGreeting(){
    console.log("hello good morning");
}

function casualGreeting(){
    console.log("hey watsupp buddy");
}

function greet(formal , casual , type){
    if (type==="formal"){
        formalGreeting()
    }

    else if (type==="casual"){
        casualGreeting()
    }
}
greet(formalGreeting , casualGreeting , "casual")
