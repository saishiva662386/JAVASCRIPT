// javascript promise is same like a real world promise
// there are two outputs  the promise is completd = success or not completed = failure
// success = promise is  resolved it will go to then() block
// failure = promise is rejected it will go to catch() block
// promise should be created with arrow function along with 2 parameters cumplusary

// let x = new Promise((resolve , reject)=>{
//     body
// })

// let num = "3"
// let x = new Promise((resolve , reject)=>{
//     if(num === 3){
//         resolve("true")
//     }
//     else{
//         reject("false")
//     }
// })
// x.then((msg)=>{
//     console.log(`the promise is resolved ${msg}`);
// }).catch((msg)=>{
//     console.log(`the promise is rejected ${msg}`);
// })

// let marks = prompt("Enter the Marks");

// let result = new Promise((resolve, reject) => {
//   if (marks >= 35) {
//     resolve("passed in exam");
//   } else {
//     reject("failed in exam");
//   }
// });
// result
//   .then((x) => {
//     console.log(`${x} now im going to do my higher studies`);
//   })
//   .catch((x) => {
//     console.log(`${x} i will write re-exam and clear all the subjects again`);
//   });

// let dose = prompt("enter the dose");
// let vaccinePromise = new Promise((resolve, reject) => {
//   if (dose === "0" || dose === "1" || dose === "2") {
//     resolve("Vaccination details resolved.");
//   } else {
//     reject("Invalid dose value provided.");
//   }
// });
// vaccinePromise
//   .then((msg) => {
//     if (dose === "0") {
//       console.log("You've to receive the first dose.");
//     } else if (dose === "1") {
//       console.log("You've to receive the second dose.");
//     } else if (dose === "2") {
//       console.log("You've completed the vaccination course.");
//     }
//   })
//   .catch((msg) => {
//     console.log(`Error: ${msg}`);
//   });

function getFirstDose() {
  return new Promise((resolve, reject) => {
    const response = prompt("Did you complete the 1st dose? (yes/no)");
    if (response && response.toLowerCase() === "yes") {
      resolve("1st dose completed");
    } else {
      reject("1st dose not completed");
    }
  });
}
function getSecondDose() {
  return new Promise((resolve, reject) => {
    const response = prompt("Did you complete the 2nd dose? (yes/no)");
    if (response && response.toLowerCase() === "yes") {
      resolve("2nd dose completed");
    } else {
      reject("2nd dose not completed");
    }
  });
}
getFirstDose()
  .then((result) => {
    console.log(result);
    return getSecondDose();
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
