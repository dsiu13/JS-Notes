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
// You can never have a functional end point with never
let error = (): never => {
  throw Error('Whoops');
}

// interface
// ? - may or may not be part of the Object
interface RobotArmy {
    count: number,
    type: string,
    magic?: string
}

let fightRobotArmy = (robots: RobotsArmy)  => {
  console.log("Fight")
}

// Type
type RobotArmy {
    count: number,
    type: string,
    magic: string
}

// Type Assertions
// You can override a type in any way you want
type CatArmy {
    count: number,
    type: string,
    magic: string
}

let dog = {} as CatArmy
dog.count

// Function
let fightRobotArmy = (robots: RobotsArmy): void  => {
  console.log("Fight")
}

// Classes
class Animal {
  private sing: string = 'lalalalla'
  constructor(sound:string){
    this.sing = sound;
  }

  greet() {
    return 'Hello ${this.sing}'
  }

}

let lion = new Animal("Rawr")
lion.greet()
