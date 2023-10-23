// A tuple in TypeScript is like a list where you can store different kinds of things, but you have to say how many things you want to store and what type each thing should be. It's like having specific slots for different items.
// For example, you can create a tuple to store information about a person like
// let personInfo: [string, number, boolean];
// personInfo = ["John", 30, true];
// normal tuple 
var arr = ["abc", 35, 65, true];
arr[0] = "def"; // possible 
// arr[0] = 956; // not possible index wise type check in tuple 
console.log(arr);
