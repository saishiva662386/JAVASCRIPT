// CAR

// CAR IS A OBJECT

// KEYS /METHODS
// BRAND
// PRICE
// COLOR
// MODEL

// VALUES / PROPERTIES
// SPEED
// BREAKS
// MILAGE

// JAVA SCRIPT OBJECT IS SAME LIKE REAL WORLD OBJECTS
// object should be created in a key : value pair
// OBJECTS IN JS CAN BE CREATED IN MANY WAYS

// LITERALS WAY  { CURLEY / FLOWER BRACKETS}

// syntax
// keyword varaiableName = {
//     key : value1,(datatype)
//     key : value2,(datatype)
//     key : value3,(datatype)
//     ... ... value n(datatype)
// }

// let trainer = {
//     Name : "sudeep",
//     subject : "java",
//     address : "bangalore",
//     timmimg : 2,
//     salary : null ,
//     additionalSubjects : ["html" , "css" , "js"],
//     company :{
//         ibm : 2,
//         infosys : 3
//     },
//     status : undefined,
//     personalInformation : false
// };
// console.log(trainer);
// console.log(trainer.additionalSubjects[1])

// let employee = {
//   firstName: "Deepthi",
//   lastName: "Nair",
//   age: 28,
//   position: "Software Engineer",
//   skills: ["JavaScript", "React", "Node.js"],
//   city: "Bangalore",
//   email: "nair.deepu@gmail.com",
//   phone: "555-5678",
//   isStudent: false,
//   salary: 80000,
//   projects: ["ProjectA", "ProjectB", "ProjectC"],
//   addressDetails: {
//     street: "789 Tech Street",
//     zipCode: "560001",
//     state: "Karnataka",
//     country: "India",
//   },
// };
// console.log("First Name:", employee.firstName);
// console.log("Last Name:", employee.lastName);
// console.log("Age:", employee.age);
// console.log("Position:", employee.position);
// console.log("Skills:", employee.skills.join(", "));
// console.log("City:", employee.city);
// console.log("Contact Email:", employee.email);
// console.log("Contact Phone:", employee.phone);
// console.log("Is Student:", employee.isStudent);
// console.log("Salary:", employee.salary);
// console.log("Projects:", employee.projects.join(", "));
// console.log("Street:", employee.addressDetails.street);
// console.log("Zip Code:", employee.addressDetails.zipCode);
// console.log("State:", employee.addressDetails.state);
// console.log("Country:", employee.addressDetails.country);

// let Android = {
//   DeviceName: "redmi",
//   DeviceModel: "redmi 7",
//   version: 11.2,
//   RAM: "8gb",
//   Model: "ma52d5",
//   InternalStorage: [4, 64, 128],
//   BatteryStatus: "not charging",
//   batteryLevel: 85,
//   Sim1: "airtel",
//   sim2: "jio",
//   ipaddress: 16566896,
//   EMI1: 88985656656,
//   EMI2: 56366554566,
//   cpu: "octa-core1.5GHz",
//   Network: { wifi: "unavaible", bluetooth: "br.5b.3c9" },
//   Status: "active",
// };
// console.log(Android);
// console.log(Android.Model);
// console.log(Android.InternalStorage[2]);

// let person = {
//   firstName: "stephen",
//   lastName: "A",
//   age: 30,
//   isStudent: false,
//   address: { street: "123 Main St", city: "Anytown", zipCode: "12345" },
//   sayHello: function () {
//     console.log("Hello, my name is " + this.firstName + " " + this.lastName);
//   },
// };
// console.log(person.firstName);
// console.log(person["lastName"]);
// person.age = 31;
// person["isStudent"] = true;
// person.email = "StephenA.@gmail.com";
// person.sayHello();
// for (let key in person) {
//   console.log(key + ": " + person[key]);
// }

// let emp = {
//     empName : "chaithanya",
//     "emp-Sal" : 10000,
// emp_id : 1234,
//     "emp jobRole" : "trainer",
//     "@status" : true,
//     "#availability" : false,
//     "$address" : "bangalore",
//     "&subjects" : ["html" , "css" , "js"] ,
//     "*batches" : null,
//     "%priceOfCourse" : undefined ,
//     if : "1year" ,
//     else :"2year",
//     while : "3year",
//     class: "4year" ,
//       1 : 1000,
//       2 : 2000,
//       3 : 3000

// }
// console.log(emp["emp jobRole"]);
// console.log(emp["%priceOfCourse"]);
// console.log(emp["*batches"]);
// console.log(emp.class);
// console.log(emp.if);
// console.log(emp[1]);
// console.log(emp[2]);

// NESTED OBJECT

// let course = {
//   "full Stack": {
//     frontend: {
//       coresubjects: ["html", "css", "javascrip"],
//       frameworks: ["bootstrap", "reactjs", "angularjs"],
//     },
//     backend: {
//       coresubjects: ["java", "python", "javascript"],
//       frameworks: ["j2ee", "django", "nodejs", "expressjs"],
//     },
//     dataBase: ["sql", "mongodb", "mysql", "plsql"],
//   },
//   courseFees: 50000,
//   batchcode: 1001,
//   Duration: "5months",
// };
// console.log(course["full Stack"].backend.coresubjects[1]);
// console.log(course.batchcode);

// let course = {
//   "full-stack development": {
//     frontend: {
//       core_sub: ["html", "css", "js"],
//       frameworks: ["bootstrap", "reactjs", "vanillajs"],
//     },
//     backend: {
//       core_sub: ["java", "python", "js"],
//       frameworks: ["spring boot", "django", "node.js"],
//     },
//     database: ["mysql", "oraclesql", "mongodb"],
//   },
//   "course*fee": 40000,
//   duration: "6months",
//   batchcode: "co_1234MG",
// };
// console.log(course["full-stack development"].database[2]);
// console.log(course["full-stack development"].frontend.core_sub[1]);

// INBUILT NEW AND OBJECT KEYWORD

// let employee = new Object()
// employee.id = 1234,
// employee.Name = "smith"
// employee.Salary = null
// employee.address = "bangalore"

// console.log(employee);
// console.log(employee.address);

//  constructor function

// function employee(empid, empName, Empsalary, empAddress) {
//   this.empid = empid;
//   this.empName = empName;
//   this.Empsalary = Empsalary;
//   this.empAddress = empAddress;
// }

// let emp1 = new employee(1234, "smith", 10000, "banglore");
// console.log(emp1);

// let emp2 = new employee(1221, "allen", 30000, "delhi");
// console.log(emp2);

// let emp3 = new employee(1342, "mark", 60000, "pune");
// console.log(emp3);

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = function () {
//     console.log(
//       `Hello, my name is ${this.name} and I am ${this.age} years old.`
//     );
//   };
// }
// const person1 = new Person("Yoshitha", 25);
// const person2 = new Person("Lawrence", 30);
// person1.greet();
// person2.greet();



//! METHODS OF OBJECTS 

// 1. Object.assign()

// let x = {
//   userName : "chaithanya"
// }
// console.log(x);

// let y = {
//   password : 12345
// }
// console.log(y);

// let a = {
//   mailId :'chai@123.com'}

// let z = Object.assign(x,y,a)
// console.log(z);



// 2. Object.keys()

// let x = { userName: "Benitta" }; 
// console.log(x); 
// let y = { password: 1234567 }; 
// let a = { mailId: "ben10.com" }; 
// let z = Object.assign(x, y, a); 
// console.log(z); 
// let keysZ = Object.keys(z); 
// console.log("Keys of z:", keysZ); 


// 3. Object.values()
// let valuesZ = Object.values(z); 
// console.log("Values of z:", valuesZ); 



// 4. Object.entries() object to array 

// let employee = {
//     firstName: "Deepthi",
//     lastName: "Nair",
//     age: 28,
//     position: "Software Engineer"
// }

// let x = Object.entries(employee)
// console.log(x);


// 5. Object.fromEntries()  array into object 
// let entries =
//  [ 
//   ['firstName', 'Aditi'], 
//   ['lastName', 'R'], 
//   ['age', 21], 
//   ['email', 'raditi.p@gmail.com'] 
// ]; 
// let person = Object.fromEntries(entries); console.log(person); 



// Object.seal()
// let employee = {
//   firstName: "Deepthi",
//   lastName: "Nair",
//   age: 28,
//   position: "Software Engineer"
// }

// employee.address = "banglore"
// employee.salary = 15000

// console.log(Object.seal(employee));

// employee.position = "devloper"
// employee.jobrole = "HR DEPARMENT"

// Object.isSealed()
// console.log(Object.isSealed(employee));


// Object.freeze()

// let employee = {
//   firstName: "Deepthi",
//   lastName: "Nair",
//   age: 28,
//   position: "Software Engineer"
// }
// console.log(Object.freeze(employee));

// employee.jobrole = "HR DEPARMENT"
// employee.position = "devloper"
// console.log(employee);

// Object.isFrozen()
// console.log(Object.isFrozen(employee));


// Object.isExtensible()


// let employee = {
//   firstName: "Deepthi",
//   lastName: "Nair",
//   age: 28,
//   position: "Software Engineer"
// }

// console.log(Object.isExtensible(employee));


// Object.preventExtensions()
// let x = Object.preventExtensions(employee)
// employee.jobrole = "HR DEPARMENT"
// employee.position= "tester"
// console.log(employee);

// console.log(Object.isExtensible(employee));