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

// class Coder {
//   constructor(
//     public readonly name: string,
//     readonly music: string,
//     private age: number,
//     protected lang: string
//   ) {
//     this.name = name;
//     this.music = music;
//     this.age = age;
//     this.lang = lang;
//   }

//   public getAge() {
//     // we use the subclasses to access protected or private menbers
//     return this.age;
//   }
// }
// const test = new Coder("Dave", "Rock", 30, "Typescript");
// console.log(test.music);
// console.log(test.getAge());

// //Class extension

// class WebDev extends Coder {
//   constructor(
//     public computer: string,
//     name: string,
//     music: string,
//     age: number,
//     lang: string
//   ) {
//     super(name, music, age, lang);
//     this.computer = computer;
//   }

//   public getLang() {
//     return ` ${this.name} uses ${this.lang} on a ${this.computer} computer.`; //we accessed the the protected members because we are withing trhe subclsses, but once we try it outside the classes we get an error.
//     //note that we can't access the private members outside the class.
//   }
// }

// const Dany = new WebDev("PC", "Dany", "Rock", 30, "Typescript");
// console.log(Dany.getLang());

// // APPKYING AN INTERFACE TO A CLASS

// interface Musician {
//   name: string;
//   instrument: string;
//   play(action: string): string;
// }

// class Guitarist implements Musician {
//   name: string;
//   instrument: string;

//   constructor(name: string, instrument: string) {
//     this.name = name;
//     this.instrument = instrument;
//   }

//   play(action: string): string {
//     return `${this.name} plays ${this.instrument} by ${action}`;
//   }
// }

// const great = new Guitarist("Nonso", "drums");

// console.log(great.play("beats"));

// /////////////////////////

// class Peeps {
//   static count: number = 0;
//   // the static keyword applies directly to the class and  not to the instances of the class
//   public id: number;
//   constructor(public name: string) {
//     this.name = name;
//     this.id = ++Peeps.count;
//   }
// }

// const p1 = new Peeps("Dave");
// const p2 = new Peeps("Dany");
// const p3 = new Peeps("Nonso");
// const p4 = new Peeps("Chidi");

// console.log(Peeps.count);

// /////////////////
// class Bands {
//   private dataState: string[];

//   constructor() {
//     this.dataState = [];
//   }

//   public get data(): string[] {
//     return this.dataState;
//   }

//   public set data(value: string[]) {
//     if (!value.every((el) => typeof el === "string")) {
//       throw new Error("Inputed parameters is not an array of strings");
//     }
//     for (const el of value) {
//       if (typeof el !== "string") {
//         throw new Error("Inputed parameters is not an array of strings");
//       }
//     }
//     this.dataState = value;
//   }
// }

// const PreBand = new Bands();
// PreBand.data = "test".split("");

// console.log(PreBand.data);

// INDEX SIGNATURES
// This is an idex s=signature, the onjects keys here we allowed to be strings only, any data type is allowed except the boolean, but for the values we can allow all data types, we can even use unions.

// interface TransactionObj {
//   [key: string]: number;
// }

// interface TransactionObj {
//   [key: string]: number; // we are further modifying this and rendering lines 337-339 useless, so we can add key value pairs automatically
//   Pizza: number;
//   Books: number;
//   Job: number;
// }

// const todaysTransactions: TransactionObj = {
//   Pizza: -10,
//   Books: -5,
//   Job: 50,
//   Dave: 13,
// };

// let prop: string = "Pizza";

// const todaysNet = (transactions: TransactionObj): number => {
//   let total = 0;
//   for (const transaction in transactions) {
//     total += transactions[transaction];
//   }
//   return total;
// };

// console.log(todaysNet(todaysTransactions));
// console.log(todaysTransactions["Cake"]); // this is the downside of using index signatures, you can now access even undeclared Keys(they would return undefined), as far it is a string

// ///////////////////////////

// interface Student {
//   //[key: string]: number | string | number[] | undefined; //
//   name: string;
//   GPA: number;
//   classes?: number[];
// }

// const student: Student = {
//   name: "John",
//   GPA: 4.0,
//   classes: [100, 30],
// };

// // TS does not have a problem with this because of the index interface we provided
// // console.log(student.notThere);
// for (const key in student) {
//   console.log(`${key}: ${student[key as keyof Student]}`);
// }
// // Another method

// Object.keys(student).map((key) => {
//   console.log(`${key}: ${student[key as keyof typeof student]}`);
// });

// const logStudentKey = (student: Student, key: keyof Student): void => {
//   console.log(`Student ${key}: ${student[key]}`);
// };

// logStudentKey(student, "name");
// ///////////////////////////

// // interface Incomes {
// //   [key: string]: number;
// // }
// //creating index signature with Types
// type Streams = "salary" | "bonus" | "sideHustle";

// type Incomes = Record<Streams, number | string>;

// const monthlyIncomes: Incomes = {
//   salary: 500,
//   bonus: 100,
//   sideHustle: 250,
// };

// for (const revenue in monthlyIncomes) {
//   console.log(monthlyIncomes[revenue as keyof Incomes]);
// }
////////////////////////////////
// Geneeric types
//Generics are used to create reusable components, they are used to create components that can work with a variety of data types instead of a single one. It is like creating a reusable variable that can hold any type of data.

const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && arg !== null && !Array.isArray(arg);
};
console.log(isObj(true));
console.log(isObj(Array(3)));
console.log(isObj({ cow: "moo" }));
console.log(isObj(undefined));

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};

console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("Danny"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: "danny" }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
console.log(isTrue(!null));
console.log(isTrue(!!null));
console.log(isTrue(!!undefined));
console.log(isTrue(!undefined));

interface HasID {
  id: number;
}

const process = <T extends HasID>(user: T): T => {
  return user;
};

console.log(process({ id: 1, name: "Danny" })); // without the ID there would be an error

const getUsersProperty = <T extends HasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};

const dataArray = [
  {
    userId: 1,
    id: 987,
    title: "Title 1",
    body: "Body 1",
  },
  {
    userId: 2,
    id: 234,
    title: "Title 2",
    body: "Body 2",
  },
  {
    userId: 3,
    id: 567,
    title: "Title 3",
    body: "Body 3",
  },
  {
    userId: 4,
    id: 456,
    title: "Title 4",
    body: "Body 4",
  },
];

console.log(getUsersProperty(dataArray, "id"));

class StateObject<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }
  get state(): T {
    return this.data;
  }
  set state(value: T) {
    this.data = value;
  }
}

const store = new StateObject<string | number>(4);
console.log("store.state", store.state);
store.state = "2";
console.log(store.state);

///////////////////////////
//UTILITY TYPES

// Partial

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "compsci123",
  title: "final project",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 95 }));
// the Partial utility type gave us the ability to update only one key value pair of the Assignment.
const assignGraded: Assignment = updateAssignment(assign1, { grade: 67 });

//REQUIRE amd Readonly Utility types

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  //send to database
  return assign;
};

const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};

//assignVerified.grade = 100; // this will not work because the Readonly utility type makes the object immutable

recordAssignment({ ...assignGraded, verified: true }); // this will work because we are not trying to change the assignVerified object);

//RECORD UTILITY TYPE

const hexColrorMap: Record<string, string> = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
};

type Students = "Sara" | "kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "F";

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "A",
  kelly: "B",
};

interface Grade {
  assign1: number;
  assign2: number;
}
const gradeData: Record<Students, Grade> = {
  Sara: { assign1: 100, assign2: 100 },
  kelly: { assign1: 90, assign2: 90 },
};

// Pick and Ommit Utility Types

type AssignResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignResult = {
  studentId: "Lb54",
  grade: 78,
};

type AssignPreview = Omit<Assignment, "grade" | "verified">;

const score2: AssignPreview = {
  studentId: "Lb54",
  title: "kid",
};

//Exclude and Extract
//These types only usually work with string union types, it also does not work with interfaces

type adjustedGrade = Exclude<LetterGrades, "U">;
type readjustGrade = Extract<LetterGrades, "A" | "C" | "B">;

//Nonnullable

type AllPossibleGrades = "Daniel" | "John" | null | undefined;

type NamesOnly = NonNullable<AllPossibleGrades>;

//const names: NamesOnly = undefined; // this does not work because of =the nullable utility type
//console.log(names);

//Return type

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type returnTest = ReturnType<typeof createNewAssign>; //now when ever we change what the createnew Assign is returning it will automatically be updated in the returnTest variable

//Awaited Utility types - this helps us with the returnType of a promise

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>; // here this gives us the ability to ge the direct result of the promise no just the promise type
fetchUsers().then((data) => console.log(data));
