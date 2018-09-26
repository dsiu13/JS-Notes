const sum = (a: number, b: number) => {
  return a + b
}

const ans = sum(3, 5)

// Throws an error because typeof string doesn't work with string.
// It catches errors during "Compile Time".
// In JS, using JITC the error will show.
// "tsc --init" -> creates a tsconfig.json file
const ans = sum("hello", 5)

// Boolean
let isCool: boolean = true;

// number
let age: number = 21;

// string
let eyeColor: string = 'brown';
let favQuote: string = "i'm not old, i'm only ${age}";

// Array - 2 ways to declare arrays
let pets: string[] = ["dog", "cat", "fish"]
let pets2: Array<string> = ["pocket whale", "pygmy giraffe", "chimera"]

// object - always lowercase due to things like Object.keys
let wizard: object = {
  a: 'Harry'
}

// null and undefined
let noo: null = null;
let meh: undefined = undefined;

// Tuple
let basket: [string, number];
basket = ['basketball', 5]

// Enumerable
enum Size { Small = 1, Med = 2, Large = 3}
let sizeName: string = Size[2];

// Any - Be careful using "Any" Type
// Not taking advantage of static typing in TypeScript
let whatever: any = "nooooo!"

// Void - if your function doesn't return anything
let sing = (): void => {
  console.log("screams internally")
}

// Never
// Never tests two things: the 1st is that a function never returns anything.
// The 2nd is that a var under a type guard is never true
let error = (): never => {
  throw Error('Whoops');
}
