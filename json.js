

// json = java script object notation 

// to transfer the data from one computer to another 
// from client to server or server to client 

// it is used to store and transfer the data , formatting tool , language 

// json is a text format and can be used in all other languages also
// like c , c++ , java , python , perl , php , js.....

// keys also should be written in double quatations 


// create json file with .json extension 
// always start with { }  , [ ]







// let emp = {
//     empNane : "smith",
//     empId : 1234,
//     empLoc : "bangalore"
// }

// console.log(emp);


// two important methods of json 
// JSON.stringify()
// JSON.parse()


let emp = {
    empName : "smith",
    empId : 1234,
    empLoc : "bangalore",
    age : undefined,
    address : function(){
        
    }
}
console.log(emp);

let x = JSON.stringify(emp)
console.log(x);


console.log(JSON.parse(x));

