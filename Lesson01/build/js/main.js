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
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Dave: 13,
};
let prop = "Pizza";
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
console.log(todaysTransactions["Cake"]); // this is the downside of using index signatures, you can now access even undeclared Keys(they would return undefined), as far it is a string
const student = {
    name: "John",
    GPA: 4.0,
    classes: [100, 30],
};
// TS does not have a problem with this because of the index interface we provided
// console.log(student.notThere);
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
// Another method
Object.keys(student).map((key) => {
    console.log(`${key}: ${student[key]}`);
});
///////////////////////////
