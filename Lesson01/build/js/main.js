"use strict";
// let username = "Daniel ";
// console.log(username);
// let a: number = 12;
// let b: number = 6;
// let c: number = 2;
// console.log(a / b);
// console.log(c * b);
// let myName: string = "dave";
// let myAge: number = 32;
// let canVote: boolean = true;
// let anything: boolean | number;
// const sum = (a: number, b: number) => a + b;
// let re: RegExp = /\w+/g;
// let stringArray: string[] = ["dave", "bob", "joe"];
// let numArr: number[] = [1, 2, 3, 4, 5];
// let mixedData: (string | number | boolean | null)[] = ["ada", 23, true, null];
// let ballersballers: (string | number)[] = ["bruno", 8, "fred", 13];
// mixedData.push(undefined); //wrong
// ballers.push(true); //wrong because of type true is boolean and it is not an element of ballers array
//Tuple
//a tuple is an array with a fixed number of elements and a fixed number of types.
let myTuple = ["dave", 32, true];
// interface mathFunction {
//   (a: number, b: number): number
// } // we can use the interface keyword too .
// let division: mathFunction = (a, b) => a / b;
// logMsg(division(8, 4));
// //optional parameters
// const addAll: mathFunction = (a, b, c) => {
//   return typeof c !== "undefined" ? a + b + c : a + b;
// };
const sumAll = (a, b, c) => {
    return typeof c !== "undefined" ? a + b + c : a + b;
    // return a + b + c;
};
console.log(sumAll(4, 2));
console.log(sumAll(3, 6));
//Rest parameters
const total = (...nums) => {
    // note that the Rest operaor should come last if you have to add other specific parameters
    return nums.reduce((prev, curr) => prev + curr);
};
const totalRest = (complex, ...nums) => {
    return nums.reduce((prev, curr) => prev + curr) + complex;
};
console.log(total(1, 2, 3, 4, 5));
console.log(totalRest(1, 2, 5));
// The Never keyword
const createError = (message) => {
    throw new Error(message); // we can see that typescriptn mautomatically infers that this function returns NEVER.
    // WE USE THE NEVER keyword for error functions.
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break; // without this line, this code will run inifitely, and thus the function returns never, but with limit checker we have just made the function return void
    }
};
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    return "number";
};
console.log(numberOrString(5));
console.log(typeof numberOrString);
//TYPE ASSETION AND TYPE CASTING
