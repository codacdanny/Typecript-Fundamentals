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
let myTuple: [string, number, boolean] = ["dave", 32, true];

// //object
// let myObj: object;
// myObj = [];
// console.log(myObj);

// const exampleObj = {
//   prop1: "dave",
//   prop2: 32,
// };
// exampleObj.prop1 = true; //should be a string

// interface Example {
//   name?: string;
//   active: boolean;
//   albums: (string | number)[];
// }

// let evh: Example = {
//   // name: "Carlbenzos",
//   active: true,
//   albums: [3, 4, 1],
// };
// let test: Example = {
//   name: "Chibuzor",
//   active: false,
//   albums: ["none"],
// };

// const poorguitarist = (testguitarist: Example) => {
//   return testguitarist.name && testguitarist.albums
//     ? `hello ${
//         testguitarist.albums
//       } are you active? if yes ${testguitarist.name?.toUpperCase()}`
//     : "Hello";
// };

// console.log(poorguitarist(evh));

// //what is an enum?
// // an enum is a way to give more friendly names to sets of numeric values.

// enum Grade {
//   B,
//   C,
//   D,
//   E,
//   F,
// }

// //Type Aliases
// type stringOrNumber = string | number;
// type stringOrNumberArray = string | number[];

// type Person = {
//   name?: string;
//   active: boolean;
//   albums: stringOrNumberArray;
// };

// type UserId = stringOrNumber;

// //literal types

// let myName: true;
// let userName: "Dave" | "Bob" | "Joe";

// myName = true; // you have to assign the literal type as an actual vARIABLE TO HOLD WHAT EVER YOU WANT
// userName = "Joe";
// console.log(typeof userName);

//functions

// const add = (a: number, b: number): number => a + b; // we are puting the last/*there because the function returns a number and we have to put it there, if not tyoescript will habe to infer and that defeats the purpose of tyoescript */

// const logMsg = (message: any): void => {
//   // any function that does not return  any thing returns a type void
//   console.log(message);
// };

// logMsg("Hello");
// logMsg(add(2, 4));
// // logMsg(add('3', 5)); //this erors out in typescript because the add function parameters are only assigned the number type

// const subtract = (a: number, b: number): number => {
//   return a - b;
// };

// let us use the type keyword

// type mathFunction = (a: number, b: number, c?: number) => number; // now we can use this anytime we have a math operation.
// // interface mathFunction {
// //   (a: number, b: number): number
// // } // we can use the interface keyword too .
// // let division: mathFunction = (a, b) => a / b;
// // logMsg(division(8, 4));

// // //optional parameters
// // const addAll: mathFunction = (a, b, c) => {
// //   return typeof c !== "undefined" ? a + b + c : a + b;
// // };

// const sumAll: mathFunction = (a, b, c) => {
//   return typeof c !== "undefined" ? a + b + c : a + b;

//   // return a + b + c;
// };

// console.log(sumAll(4, 2));
// console.log(sumAll(3, 6));

// //Rest parameters

// const total = (...nums: number[]): number => {
//   // note that the Rest operaor should come last if you have to add other specific parameters
//   return nums.reduce((prev, curr) => prev + curr);
// };

// const totalRest = (complex: number, ...nums: number[]): number => {
//   return nums.reduce((prev, curr) => prev + curr) + complex;
// };

// console.log(total(1, 2, 3, 4, 5));
// console.log(totalRest(1, 2, 5));

// // The Never keyword
// const createError = (message: string) => {
//   throw new Error(message); // we can see that typescriptn mautomatically infers that this function returns NEVER.
//   // WE USE THE NEVER keyword for error functions.
// };

// const infinite = () => {
//   let i: number = 1;
//   while (true) {
//     i++;
//     if (i > 100) break; // without this line, this code will run inifitely, and thus the function returns never, but with limit checker we have just made the function return void
//   }
// };

// const numberOrString = (value: number | string): string => {
//   if (typeof value === "string") return "string";
//   return "number";
// };
// console.log(numberOrString(5));
// console.log(typeof numberOrString);

// //TYPE ASSETION AND TYPE CASTING
// //this simply means telling typescript the type of an element rather than allowing it to infer

// type One = string;
// type Two = number | string;
// type Three = "hello ";

// //convert to more or less specific type
// let a: One = "hello";
// let b = a as Two; // less specific type
// let c = a as Three;

// let d = <One>"world";
// let e = <string | number>"world";

// const addOrConcat = (
//   a: number,
//   b: number,
//   c: "add" | "concat"
// ): number | string => {
//   if (c === "add") return a + b;
//   return "" + a + b; // here we know that type coercion automatically converts this result to a string
// };

// const myVal: string = addOrConcat(2, 2, "concat") as string; //here we added the as STRING  so that typescript we overlook the fact that the addOrConcat function returns a union type  and not just a string

// //note that the addOrConcat function returns a string and here we are telling typesdcript that it is returning a number, this is wrong assertion.

// const letGo: number = addOrConcat(2, 2, "add") as number;

// // the DOM
// const myImg = document.querySelector("img")!; //this is a none null assertion operator
// const img = document.getElementById("#img") as HTMLImageElement;

// img.src; // this works because we specified the HTMLIMAGEELEMENT

// myImg.src; // This works because we specified the the null operator, the query selector infers that it is an HTMLImageElement.

// CLASSES

class Coder {
  constructor(
    public readonly name: string,
    readonly music: string,
    private age: number,
    protected lang: string
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    // we use the subclasses to access protected or private menbers
    return this.lang;
  }
}
const test = new Coder("Dave", "Rock", 30, "Typescript");
console.log(test.music);
console.log(test.getAge());
