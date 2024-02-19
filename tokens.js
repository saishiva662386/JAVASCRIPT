
// keywords and variables 
// three main keywords which is used to declare a variable 
// var let const 


//! syntax : keyword  variableName    =  datatypes(variable values)


// var 

// var  company ; // declaration of a variable name by using var keyword 

// company = "ibm"   // initialiazation of a variable (assigning a value to a variable name )

// var company = "IBM"

// var company   // redeclaration of same variable name using var key word
//  company  = "capgemini"   // reinitialiazation of same variable name 

// var company //redeclaration of same variable name using var key word
// company = "delloite"  // reinitialiazation of same variable name 

// var keyword will allow declaration and redeclaration with initialiazation and reinitialiazation for the same variable name 
// we can redeclare the same variable name along with the var keyword n number of times and update the values 
// console.log(company);



// LET 


// let sweet ;  // declaration of a variable name by using let keyword 

// sweet = "ladoo"  // initialiazation of a variable (assigning a value to a variable name )

// let sweet = "ladoo";

// let sweet  //redeclaration of same variable name using let key word is not possible 


// sweet  = "gulab jamun" // reinitialiazation of same variable name is possible

// console.log(sweet);


// CONST 


// const fruits = "apple" ; // declaration and initialiazation should be done at a time 

// fruits = "orange"

// redeclaration and reinitialization is not allowed  

// console.log(fruits);


//! scope of keywords (availability of variables to use)

// global scope 
// local / block  scope 

// global scope => var 
// {
//     var x = 10;
//     // console.log(x);
// }
// console.log(x);

// let is local scope only inside the block 

// let x = 500
{
    // const x = 10;
    // console.log(x);
}
// console.log(x);

