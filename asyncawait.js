


// async is a keyword which makes the function asyncrounous function (it will not maintain any order) 

// async will return promise 


// function add(a,b){
//     return a+b
// }
// console.log(add(10 , 20));


// async function add(a,b){
//     return a+b+c
// }
// add(10,20).then((x)=>{
//     console.log(x);
// }).catch((x)=>{
//     console.log("error");
// })



// await 

// it will wait for a promise to resolve 
// await should be written inside async function only 

// function add(a,b){
//     return a+b
// }

// async function cal(){
//     console.log("hello im cal function");

//     let sum = await add(10,20)
//     console.log(sum);
// }

// cal()



function hello(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("im java script function")
        } , 2000)
    })

}

async function msg(){
    console.log("im async function");
    let result = await hello()
    console.log(result);
}

msg()