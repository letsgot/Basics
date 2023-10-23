
// Normal way to define objects
// let person : {name : string; age : number; email : string} = {
//     name : " Vivek",
//     age : 20,
//     email : "abc2gmail.com"
// }

// console.log(person);


// let say type is common for two objects 
// {name : string; age : number; email : string}

type objType = {name : string; age : number; email : string}

let person : objType = {
    name : " Vivek",
    age : 20,
    email : "abc2gmail.com"
}

let user : objType = {
    name : " Rohan",
    age : 24,
    email : "efg2gmail.com"
}

console.log(person);
console.log(user);

