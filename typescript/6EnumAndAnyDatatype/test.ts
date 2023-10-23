// an enum in TypeScript is like a list of predefined values that you can use to represent a set of related options or choices. It allows you to give names to these values, making your code more readable and less error-prone.
// Imagine you have a situation where you want to represent different days of the week in your code. Instead of using numbers or strings directly, you can create an enum like this:
// enum DaysOfWeek {
//     Monday,
//     Tuesday,
//     Wednesday,
//     Thursday,
//     Friday,
//     Saturday,
//     Sunday
//   }

// return look like that 
// DaysOfWeek = {
//     Monday: 0,
//     Tuesday: 1,
//     Wednesday: 2,
//     Thursday: 3,
//     Friday: 4,
//     Saturday: 5,
//     Sunday: 6,
//     0: "Monday",
//     1: "Tuesday",
//     2: "Wednesday",
//     3: "Thursday",
//     4: "Friday",
//     5: "Saturday",
//     6: "Sunday"
// }

// Any data type in typescript 
let val : any = true;
val = 1;
val = "abc"  // all values are fine to work

val = [1,2,4,5]

console.log(val);

