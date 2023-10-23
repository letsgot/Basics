// let val : string | number = "abc";
// // val = 56;
// // val = true // error produces here
// console.log(val);

// Use case of union 
function add(a : number | string, b: number | string) : number | string {
    if(typeof a === 'number' && typeof b === 'number'){
        return a+b;
    }
    else{
        return a.toString() + b.toString();
    }
}

console.log(add(2,4));
console.log(add("abc","def"));

