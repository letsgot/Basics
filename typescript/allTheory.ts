// Type Annotation

// let a: number = 34;
// console.log(a);

// Restrict Data Type --------------------------------------

// let fullName: string = "Allen";
// fullName = 54; // show error -> Type 'number' is not assignable to type 'string'
// fullName = "Samuel";
// console.log(fullName);

// let num: number = 22;
// num = "Sam"; // show error
// num = 55;
// console.log(num);

// Array ----------------------------------------------------------------

// const data: string[] = [];
// data.push(1); // show error -> Argument of type 'number' is not assignable to parameter of type 'string'.
// data.push("0", "jdnkjcsdj");
// console.log(data);

// Function --------------------------------------------------------------------

// function sum(a: number, b: number): number {
//     return a + b
// }
// console.log(sum(1, 5));

///------------------------------------------------------------------

// function sum(a: number, b: string): string {
//     return a + b
// }
// console.log(sum(1, "5"));

// Tuples -----------------------------------------------------------------------

// let address: [number, string, number];
// address = ["545" , 54 , 54] // show error
// address = [220 , "54" , 54 ,"shjvd"] // show error -> Source has 4 element(s) but target allows only 3.
// address = [55, "New York", 54];


// Object ---------------------------------

// let person: { name: string };
// person = { name: "Nex" }
// person = {name: "Nex" , age: 14} // show error -> Object literal may only specify known properties, and 'age' does not exist in type '{ name: string; }'.

// Optional value -------------------------------

// let anotherPerson: { name: string, age?: number};
// anotherPerson = { name: "Nex", age: 25 }
// anotherPerson = { name: "Nex"} // valid
// console.log(anotherPerson)

// Optional value in Function ------------------------------------
// Always put required parameters first

// function Sum(a: number, b?: number) {
//     return b ? a + b : a
// }

// console.log(Sum(9025));
// console.log(Sum(9025 , 25));

// Interfaces -------------------------------------------------------------

interface Person { // can give optional too
    name: string;
    age: number;
    id: number;
}

let p: Person;

p = { name: "Den", age: 52, id: 301 };

// Union --------------------------------------------------------

interface Student {
    name: string;
    rollNum: number;
    age: number;
}

// let Candidate: Person | Student; // Union

// Candidate = { name: "Finn" , age: 14 , rollNum: 51 };
// Candidate = { name: "Finn" , age: 14 , id: 22 };
// Candidate = { name: "Finn" , age: 14 , rollNum: 51 , id: 22};

// Intersection --------------------------------------------------------

// let Cand2 : Person & Student ; // Intersection

// Cand2 =  { name: "Finn" , age: 14 , rollNum: 51 , id: 8026 }; // All keys must be present of both interfaces


// Type Alias  ------------------------------------------------------

// type Count = number | string;
// let c: Count;

// c = 97;
// c = "werew";
// c = true; // not valid

// Never Type -----

// type  X = string & boolean; // never

// const n: [] = [];
// n.push("hgvn"); // never

// Any type --------------

// let A : any;
// A = 163;
// A = "163";
// A = true;

// Generics ---------------------------------

// function gen<T>(a: T, b: T) {
//     return [a, b]
// }
// console.log(gen<number>(1, 2));
// console.log(gen<string>("1", "2"));
// console.log(gen<Array<number>>([1], [2]));


// Enum --------------------------------

// enum Size { small, medium, large }; // starts with small = 0 and go so on....
// const enum Size { small, medium, large }; // const make compiled js code smaller
// let mySize: Size = Size.medium;
// console.log(mySize)


// Literals -- limits value -----------------------------------------------

// let quantity: number // can take any number
// let quantity2: 50 = 50 // can only  take 50
// let quantity2: 50 = 52 // show error

//--------------

// let weight: 20 | 50 = 20;
//--------------
// type Quantity = 20 | 50;
// let weight: Quantity = 20;
