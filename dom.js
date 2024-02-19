// DOCUMENT OBJECT MODEL

// it will represet the entire html document
// the movement we create html file and run it in the browser they immediately bcome members of dom

// html tag is the rool element of html
// document is the root element of dom

// console.log(document);
// console.log(document.all);

// console.log(document.all[6]);

// console.log(document.contentType);

// console.log(document.links);

// console.log(document.URL);

// console.log(document.doctype);

// console.log(document.head);

// console.log(document.body);

// create a DOM

// let x = document.createElement("b")
// x.innerText = " im bold tag from javascript"
// document.body.append(x)

// let div1 = document.createElement("div")
// div1.style.background ="red"
// div1.style.height="100vh"
// div1.style.width="100%"

// document.body.append(div1)

// let div1 = document.createElement("div");
// div1.style.width = "200px";
// div1.style.height = "200px";
// div1.style.display = "inline-block";
// div1.style.marginRight = "10px";
// div1.style.backgroundColor = "red";
// document.body.append(div1);
// let div2 = document.createElement("div");
// div2.style.width = "200px";
// div2.style.height = "200px";
// div2.style.display = "inline-block";
// div2.style.marginRight = "10px";
// div2.style.backgroundColor = "purple";
// document.body.append(div2);
// let div3 = document.createElement("div");
// div3.style.width = "200px";
// div3.style.height = "200px";
// div3.style.display = "inline-block";
// div3.style.backgroundColor = "green";
// document.body.append(div3);




//! METHODS OF DOM 
// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.getElementsByName()
// document.querySelector()
// document.querySelectorAll()

//! document.getElementById() 


// let x = document.getElementById("para")
// console.log(x);
// x.style.background="red"

// let y = document.getElementById("div1")
// y.style.background="blue"


// let y = document.getElementsByClassName("div1")
// y[0].style.background="blue"
// y[1].style.background="blue"
// y[2].style.background="blue"

// let z = document.getElementsByClassName("heading")
// z[0].style.background="red"


//! document.getElementsByTagName()

// let art = document.getElementsByTagName("article")
// art[0].style.background="red"
// art[1].style.background="blue"


// let div1 = document.getElementsByTagName("div")
// div1[0].style.background="green"
// div1[1].style.background="yellow"



//! document.getElementsByName()

// let x = document.getElementsByName("hello")
// x[0].style.background="green"


// let y = document.getElementsByName("para")
// y[0].style.background="red"




// document.querySelector()
// let x = document.querySelector("#para")
// x.style.background="red"

// let y = document.querySelector(".jsp")
// y.style.background="green"

// let z = document.querySelector("section")
// z.style.background="blue"



// document.querySelectorAll( )

// let x = document.querySelectorAll("#para")
// console.log(x);
// x[0].style.background="red"
// x[1].style.background="red"

// let y = document.querySelectorAll(".jsp")
// y[0].style.background="blue"
// y[1].style.background="blue"

// let z = document.querySelectorAll("section")
// z[0].style.background="yellow"
// z[1].style.background="yellow"




// EVENTS OF DOM 

// ONCLICK 


// let x = ()=>{
//     document.body.style.background="red"
// }


// ONDBL CLICK 

// let y = ()=>{
//     document.body.style.background="blue"
// }



// ONMOUSEOVER 
// ONMOUSEOUT 



// let copy = ()=>{
//     alert("im copied")
// }


// let paste = ()=>{
//     alert("im pasted")
// }\


// function displayDate() { 
//     let x = new Date(); 
//     console.log('Current Date and Time:', x); 
// } 



//in js 
// function displayDate() { 
   // Get the current date 
//     var currentDate = new Date(); 
     // Format the date as a string 
//     var dateString = currentDate.toLocaleDateString() + ' ' + currentDate.toLocaleTimeString(); document.write('Current date and time: ' + dateString); 
// } 



// Date()

// function d(){
//     document.write(new Date())
// }




