
// Array ? 

// collection of multiple datatypes stored in variable 

// array literals   []
        //  0      1      2        3        4
// let arr = [10 , 90.86 , "hello" , 'hi' , `goodmorning` , true , false , null , undefined,
//  function(){} , ["nested array"]  , {} , Date , Math , Symbol() , BigInt ]

// console.log(arr);

// console.log(arr[4]);

// METHODS OF ARRAY 

// 1. CONCAT 
// MERGING OF ARRAYS 

// let x = ["hello " , 25]
// console.log(x);
// let y = [ true , null]
// console.log(y);
// let z = ["apple" , "orange"]
// console.log(z);

// console.log(x.concat(y , z));

// indexof()
// last indexof()
// slice()
// join()
// length()
// reverse()
// includes()


// let fruits = [ "apple" , "orange" , "kiwi" , "banana" , "gova"]


// let fruits=["apple","banana","guava","pappaya","mango"] 
// let index=fruits.indexOf("guava"); 
// console.log(index); 
// let fruits = ["apple", "banana", "guava", "papaya", "mango" , "guava"]; 
// let lastIndex = fruits.lastIndexOf("guava"); 
// console.log(lastIndex); 
// let fruits = ["apple", "banana", "guava", "papaya", "mango"] 
// let slicedFruits = fruits.slice(1, 2); 
// console.log(slicedFruits); 
// let fruits = ["apple", "banana", "guava", "papaya", "mango"] 
// let res=fruits.join(); 
// console.log(res); 
// let fruits = ["apple", "banana", "guava", "papaya", "mango"] 
// let len=fruits.length; 
// console.log(len) 
// let fruits = ["apple", "banana", "guava", "papaya", "mango"]; 
// let reversedFruits = fruits.reverse(); 
// console.log(reversedFruits); 
// let fruits = ["apple", "banana", "guava", "papaya", "mango"]; let 
// res = fruits.includes("guava"); 
// console.log(res) 


// push 
// pop 
// shift 
// unshift 


// let fruits = ["apple", "banana", "guava", "papaya", "mango"] 
// console.log(fruits.push("orange"));
// console.log(fruits);

// console.log(fruits.pop());
// console.log(fruits);



// let fruits = ["apple", "banana", "guava", "papaya", "mango"]
// console.log(fruits.shift());
// console.log(fruits);


// console.log(fruits.unshift("pomogranut"));
// console.log(fruits);



//! splice(indexnumber , delete count , new element)

// let fruits = ["apple", "banana", "guava", "papaya", "mango"]
// console.log(fruits.splice(0, 0  , "chocolate"));
// console.log(fruits);


// tosting()
// let fruits = ["apple", "banana", "guava", "papaya", "mango"]
// console.log(fruits);
// console.log(fruits.toString());

// flat()

// let x = [[10,20] , [30,40] , [[50,60]]]
// console.log(x);
// console.log(x.flat().flat());


// let fruits = ["apple", "banana", "guava", "papaya", "mango"]
// console.log(fruits.sort());

// let num = [9, 6, 4 , 8 , 7  , 1, 2]
// console.log(num.sort());




// forin 
// forof 
// foreach 


// FORIN

// forin loop will iterate index numbers of each elements in an array 
// let arr  = ["apple", "banana", "guava", "papaya", "mango" ]

// for(let a in arr){
//         console.log(a);
// }


// FOROF 
// forof loop will iterate values of each elemnts in an array 
// for(let a of arr){
//         console.log(a);
// }


// function iterate(index , values){
//         console.log(values);
//         console.log(index);
// }

// arr.forEach(iterate)



//! map reduce filter 

// map 
        // let nums = [1, 2 , 3, 4, 5, 6 , 7, 8 , 9, 10]

        // function double(x){
        //         // return x*x
        //         return x+2
                
        // }
        // let result = nums.map(double)
        // console.log(result);


// let nums = [2, 3, 4, 5, 6, 8, 10]; 
// function cube(x) 
// { return x * x * x; } 
// let result = nums.map(cube); 
// console.log(result); 

// let numbers = [4, 9, 16, 25]; 
// let newArr = numbers.map(Math.sqrt) 
// console.log(newArr); 


//! reduce (2 parameter)

            
// let nums = [1, 2 , 3, 4, 5, 6 , 7, 8 , 9, 10 ]
// let arr = [" hello" , " hi" , " good morning"]
// function red(a,b){
//         return a+b
        // return a*b
// }

// let result = arr.reduce(red)
// console.log(result);



// filter 

// let age = [10 ,11, 12 , 15 , 16 , 18 , 20 , 25 , 30 , 42 , 50]

// function adult(x){
//         return x >= 18
// }

// let result = age.filter(adult)
// console.log(result);


