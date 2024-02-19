// a+b

// a , b     operands
// + - * / % && || = < > ? <= >= != ++ -- == === += -= *=  operators

// arithmatic operator

// + , - , * , / , %

//! +

// let x = 10
// let y = 20

// let x = 10
// let y = "10"

// let x = "hello"
// let y = 10

// let x = "hello"
// let y = "world"

// let x = 10
// let y = true   //1

// let x = "hello"
// let y = true

// let x = true
// let y = true

// let x = "10"
// let y = true

// let x = 10
// let y = false

// let x = "false"
// let y = false

// let x = 10
// let y = null    // 0

// let x = "10"
// let y = null

// let x = "hello"
// let y = null

// let x = null
// let y = null

// let x = "null"
// let y = null

// let x = true
// let y = null

// let x = false
// let y = null

// let x = undefined       //  nothing
// let y = null          //     0    NAN   NOT A NUMBER

// let x = undefined
// let y = undefined

// let x = 10
// let y = undefined

// let x = "HELLO"
// let y = undefined

//  console.log(x+y);

//  let q=10
//  let w=20
//  let e="10"
//  let r=40
//  let t=40
//  console.log(e+q+w+r+t)

//! 2. comparation operator
// = ,  ==  , ===

// let num1 = 100;
// let num2 = 200;
// console.log(num1=num2);
// console.log(num1);
// console.log(num2);

//! == will compare only the values

// let num1 = 100;
// let num2 = 100;
// console.log(num1==num2);

//! === strict comparation ,  will check for datatypes and values  both

// let num1 =  100;
// let num2 = "100";
// console.log(num1===num2);

// ternary operator

// condition ? statement 1 : statement2 : statement3

// let marks = prompt("enter the marks")
// let result = marks>=35 ? "pass" : "fail"
// console.log(result);

// let age = prompt("Enter your age:");
// let eligibleage = age >= 18 ? "You are eligible to vote" : "You are not eligible to vote";
// console.log(eligibleage);

// const value = prompt("Enter the number or Alphabet or special characters");
// const res =
//   (value >= "A" && value <= "Z") || (value >= "a" && value <= "z")
//     ? "An alphabet"
//     : value >= "0" && value <= "9"
//     ? "A number"
//     : "A special Character";
// console.log(res);

// LOGICAL OPERATOR

// AND &&
// OR ||

// &&
// ALL THE CONDITIONS ARE TRUE THE OUTPUT WILL BE TRUE
// IF ONE CONDTION IS ALSO FALSE THE OUTPUT WILL BE FALSE

// let num1 = 100
// let num2 = 200

// console.log(num1<num2  && num1<=100 );

// ||
// if one conditions is also true the ouput will be true
// if all the conditions are false the output will be false

// let num1 = 100
// let num2 = 200

// console.log(num1>num2  || num1<=100 );

// const Height = prompt("Enter the Height in cm");
// const res =
//   Height >= "184"
//     ? "Taller"
//     : Height >= "154" && Height <= "183"
//     ? "Average"
//     : "Dwarf";
// console.log(res);


//! unary operator  ++ --

// increment and decrement 
// increment ++ 

// post increment 
// execute the value then increse 
// let a = 100;
// let b = a++
// console.log(a);
// console.log(b);

// pre incremnt 
// increse the value then execute 
// let a = 100;
// let b = ++a
// console.log(a);
// console.log(b);


// decrement --

// post decrement 
// first execute then decrese 
// let a = 100;
// let b = a--
// console.log(a);
// console.log(b);


// pre decrement 
// first decrease then execute 
// let a = 100;
// let b = --a
// console.log(a);
// console.log(b);

// relational operator 
// < , > , <= , >=  , != 

// assignment opeartor 
// += , -= , *= , /= , %=

// let a = 10 
// let b = 20 
// console.log(a+b);

let a = 10 ;
a+=20
console.log(a);