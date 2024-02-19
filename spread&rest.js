

// spread opeartor (...)
// it is used to expand / spread the values in an iteratable objects , arrays etc .. 
// we are spreading 0 to more number of values 

// const arr1 = [1,2,3,4, 5]

// const arr2 = [6,7,8,9,10]

// console.log(arr1.concat(arr2));


// let z = [arr1 , arr2]

// console.log(z);

// const arr3 = [...arr1 , ...arr2]
// console.log(arr3);



//! REST PARAMETER ...

// rest parameter will work with infinite numbers of parameters 

function sum(...x){

    let total = 0;
    for(let a of x){
        total= total+a
    }
    return total
}
console.log(sum(10,20,50, 100 , 200 , 400, 100 , 200 , 400 , 1000,
    10 , 20, 30 , 40 , 50 , 60 ));


    // spread is like unpacking 
    // rest is like packing 