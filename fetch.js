
// console.log(window);


// it is used to get the data from the data base through https request and responce 

// fetch method will return promise 

// use then methods if fetch is success or catch method is fetch is failure 

// let x = fetch(url)

// window.fetch("https://api.github.com/users").then((x)=>x.json()).then((y)=>console.log(y))


window.fetch("data.json").then((x)=>x.json()).then((y)=>console.log(y))