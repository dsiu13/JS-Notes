# The Secret Life of Objects
- Object Oriented Programming, a set of techniques that uses objects and related concepts as the central principle of program organization

# Encapsulation
- The idea of Obj oriented programming is to divide programs into smaller pieces each responsible for managing its own state
- This way, knowledge about that piece can be kept local and others working on the program do not have to be aware of it. Whenever local details change only the code around it needs to be updated.
- Different parts of a program interact with each other through interfaces(limited sets of functions or bindings that provide functionality at an abstract level)
- Many languages provide a way to distinguish public and private properties.
- It is common to add an underscore character at the start of a property that is private.
- Separating interface from implementation and is called Encapsulation.

# Methods
- Methods are properties that hold function values.
````
let rabbit = {};

rabbit.speak = function(line) {
  console.log("The Rabbit Says '${line}'")
};

rabbit.speak("I'm Alive.")
// → The rabbit says 'I'm alive.'
````
- Methods need to do something with the object it was called on. When a function is called as a method - looked up as a property and immediately called, as in object.method(), the binding 'this' in its body automatically points at the obj that it was called on.

````
function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("Oh my ears and whiskers, " +
                  "how late it's getting!");
// → The white rabbit says 'Oh my ears and whiskers, how
//   late it's getting!'
hungryRabbit.speak("I could use a carrot right now.");
// → The hungry rabbit says 'I could use a carrot right now.'
````
- 'this' is an extra parameter that is passed a different way. You can pass 'this' explicitly via call method.

````
speak.call(hungryRabbit, "Burp!");
// → The hungry rabbit says 'Burp!'
````
- Since each function has its own 'this' binding whose value is dependent on the way its called, you cannot refer to 'this' of the wrapping scope in a regular function defined with the 'function' keyword
- Arrow functions are different - they do not bind their own 'this', but can see 'this' binding of the scope around them.

````
function normalize() {
  console.log(this.coords.map(n => n / this.length));
}
normalize.call({coords: [0, 2, 3], length: 5});
// → [0, 0.4, 0.6]
````

# Prototypes
````
let empty = {};
console.log(empty.toString);
// → function toString(){…}
console.log(empty.toString());
// → [object Object]
````
- A prototype is another type of obj that is used as a fallback source of properties.
- When an object gets a request for a property that it does not have its prototype will be searched for the property. Object.prototype is the prototype of the empty object.
- Prototype relations of JavaScript form a tree-shaped structure, and at the root of this structure sits Object.prototype. It provides a few methods that show up in all objs.
- Many objs don't directly have Object.prototype as their prototype, but instead have another object, which gives its own default properties.
- Function derive from Function.prototype and Arrays from Array.prototype.
- Prototype objects will itself have a prototype, often Object.prototype.
- You can use Object.create to create an object with a specific prototype.
````
let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");
// → The killer rabbit says 'SKREEEE!'
````
- The property "speak(line)" in an object expression is a shorthand for defining a method. It creates a property called 'speak' and gives it a function as its value
-  "proto" rabbit acts as a container for the properties that are shared by all rabbits. An individual rabbit obj, like 'killer rabbit' contains properties that apply only to itself.


# Classes
- JavaScript prototype system can be interpreted as an informal take on an object-oriented concept called classes.
- A class defines the shape of a type of obj-what methods and properties it has. Such an object is called an 'instance' of that class.
- In order to create an instance of a given class, you have to make an object that derives from the proper prototype. You also need to make sure it itself has the properties that instance of this class are suppose. This is what a constructor function does.
````
function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}
````
- If you put the keyword 'new' in front of a function call, the function is treated as a constructor.
- This means that an object with the right prototype is automatically created, bound to 'this' in the function, and returned at the end of it.
- The appropriate prototype object for a constructor is found by taking the prototype property of the constructor function.

````
function Rabbit(type) {
  this.type = type;
}
Rabbit.prototype.speak = function(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = new Rabbit("weird");
````

- All functions automatically get a property named 'prototype'. By default 'prototype' holds a plain empty obj that derives from Object.prototype. You can overwrite it or add properties to the existing object.
- Constructor names are capitalized to distinguish them from other Functions
- Prototype association with constructor(through prototype property) vs objects have a prototype(Object.getPrototypeOf). The actual prototype of a constructor is Function.prototype since constructors are Functions. Its prototype property holds the prototype used for instances created through it.

# Class Notation
````
class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");
````
- The 'Class' keyword starts a class declaration which allows us to define a constructor and a set of methods to call in a single place.
- Class declarations only allow methods - properties that hold functions - to be added to the prototype.
- Like Function, class can be used both in statement and in expression positions. When used as an expression it doesn't define binding, it just produces the constructor as a value. You can omit class name in a class expression

````
let object = new class { getWord() { return "hello"; } };
console.log(object.getWord());
// → hello
````

# Overriding Derived Properties
- When you add a property to an obj whether it is present in the prototype or not, it gets added to the obj itself. Giving it its own property. If there is a property with the same name in the prototype, this property will no longer affect the object, as its now hidden behind the objects own property.

````
Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
// → small
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
// → long, sharp, and bloody
console.log(blackRabbit.teeth);
// → small
console.log(Rabbit.prototype.teeth);
// → small
````
- Overwriting properties that exist in a prototype can be a useful thing to do. It can be used to express exceptional properties in instances of a more generic class of objects, while letting non exceptional objects simply take a standard value from their prototypes.


# Maps
- 'Map' is a data structure that associates values with other values.
````
let ages = {
  Boris: 39,
  Liang: 22,
  Júlia: 62
};

console.log(`Júlia is ${ages["Júlia"]}`);
// → Júlia is 62
console.log("Is Jack's age known?", "Jack" in ages);
// → Is Jack's age known? false
console.log("Is toString's age known?", "toString" in ages);
// → Is toString's age known? true
````
- Using plain objects as maps is dangerous. There are several possible ways to avoid this problem.
- The first way is to create objects with no prototype. If you pass 'null'
 to Object.create, the resulting object will not derive from Object.prototype.
 - Object property names must be strings. If you need a map whose keys can't easily be converted to strings - such as objects - you cannot use an object as your map.
 - Map has a class written for this exact purpose
 ````
 let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);

console.log(`Júlia is ${ages.get("Júlia")}`);
// → Júlia is 62
console.log("Is Jack's age known?", ages.has("Jack"));
// → Is Jack's age known? false
 ````
- The methods: 'set', 'get', and 'has' are part of the interface of the "Map" object.
- Object.keys only returns an object's own keys, not those in the prototype. As an alternative to the 'in' operator. You can use hasOwnProperty method.

# Polymorphism
- When you call the String function on an object, it will call the toString method on that object to try to create a meaningful string from it.
````
Rabbit.prototype.toString = function() {
  return `a ${this.type} rabbit`;
};

console.log(String(blackRabbit));
// → a black rabbit
````
- Polymorphic code can work with values of different shapes, as long as they support the interface it expects.

# Symbols
- It is possible for multiple interfaces to use the same property name for different things.
- Symbols are values created with the Symbol Function. Unlike strings, newly created symbols are unique.
````
let sym = Symbol("name");
console.log(sym == Symbol("name"));
// → false
Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);
// → 55
````
- The string you pass to Symbol is included when you convert it to a string, and can make it easier to recognize a symbol. Being both unique and useable as a property name makes symbols suitable for a defining interfaces that can peacefully live alongside other properties, regardless of name.
````
const toStringSymbol = Symb ol("toString");
Array.prototype[toStringSymbol] = function() {
  return `${this.length} cm of blue yarn`;
};

console.log([1, 2].toString());
// → 1,2
console.log([1, 2][toStringSymbol]());
// → 2 cm of blue yarn
````
- It is possible to include symbol properties in object expressions and classes by using square brackets around the property name. That causes property name to be evaluated.
````
let stringObject = {
  [toStringSymbol]() { return "a jute rope"; }
};
console.log(stringObject[toStringSymbol]());
// → a jute rope
````

# The Iterator interface
- The object given to a for/of loop is expected to be iterable. It has a method named with the Symbol.iterator symbol.
````
class Matrix {
  constructor(width, height, content = (x, y) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = content(x, y);
      }
    }
  }

  get(x, y) {
    return this.content[y * this.width + x];
  }
  set(x, y, value) {
    this.content[y * this.width + x] = value;
  }
}
````
- The class stores its content in a single array of width x height elements. The elements are stored row-by-row.
- The constructor function takes a width, height, and an optional content function that will be used to fill in the initial values. There are 'get' and 'set' methods to retrieve and update elements within the matrix.
- When looping over the matrix you are usually interested in the position of the elements as well as the elements itself.
````
class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }

  next() {
    if (this.y == this.matrix.height) return {done: true};

    let value = {x: this.x,
                 y: this.y,
                 value: this.matrix.get(this.x, this.y)};
    this.x++;
    if (this.x == this.matrix.width) {
      this.x = 0;
      this.y++;
    }
    return {value, done: false};
  }
}
````
- The class tracks the progress of iterating over a matrix in its x and y properties. The 'next' method starts by checking whether the bottom of the matrix has been reached.
````
let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
for (let {x, y, value} of matrix) {
  console.log(x, y, value);
}
// → 0 0 value 0,0
// → 1 0 value 1,0
// → 0 1 value 0,1
// → 1 1 value 1,1
````

# Getters, Setters, and Statics
- Interfaces often consist mostly of methods, but it is okay to include properties that hold non-function values.
- Map objects have the 'size' property that tell you how many keys are stored in it.
- Even properties that are accessed directly may hide a method call.
- Such methods are called 'getters' and they are defined by writing 'get' in front of the method name in an obj expression or class declaration.
````
let varyingSize = {
  get size() {
    return Math.floor(Math.random() * 100);
  }
};

console.log(varyingSize.size);
// → 73
console.log(varyingSize.size);
// → 49
````
- when you read from this object's size property, the associated method is called. You can do a similar thing when a property is written to using a 'setter'.
````
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }

  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);
// → 71.6
temp.fahrenheit = 86;
console.log(temp.celsius);
// → 30
````
- Inside a class declaration, methods that have static written before their name are stored on the constructor.

# Inheritance
- Some matrices are known to be symmetric. If you mirror a symmetric matrix around its top-left to bottom-right diagonal, it stays the same.
- Javascript's prototype obj makes it possible to create a new class, but with new definitions for some of its properties. In object oriented programming terms, this is called inheritance. The new class inherits properties and behaviors from the old class.
````
class SymmetricMatrix extends Matrix {
  constructor(size, content = (x, y) => undefined) {
    super(size, size, (x, y) => {
      if (x < y) return content(y, x);
      else return content(x, y);
    });
  }

  set(x, y, value) {
    super.set(x, y, value);
    if (x != y) {
      super.set(y, x, value);
    }
  }
}

let matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(matrix.get(2, 3));
// → 3,2
````
- The use of the word 'extends' indicates the constructor calls its superclass' constructor through the 'super' keyword.
- Inheritance allows us to build slightly different data types from existing data types with ease.
- Encapsulation and Polymorphism can be used to separate pieces of code from each other, reducing the tangledness of the program. Inheritance ties classes together.

# Instanceof operator
- Javascript provides the instanceof operator to know whether an object was derived from a specific class.
````
console.log(
  new SymmetricMatrix(2) instanceof SymmetricMatrix);
// → true
console.log(new SymmetricMatrix(2) instanceof Matrix);
// → true
console.log(new Matrix(2, 2) instanceof SymmetricMatrix);
// → false
console.log([1] instanceof Array);
// → true
````
- Almost every object is an instance of Object.

# Summary
- Objects do more than hold their own properties. They have prototypes, which are other objects.
- Simple objects have Object.prototype as their prototype.
- Constructors, are functions whose name start with a capital letter. They are used to with the 'new' operator to create new objects. The new object's prototype will be the object found in the prototype property of the constructor.
- You can define 'getters' and 'setters' to secretly call methods every time an object's property is accessed. 
- Static methods stored in a class' constructor rather than its prototype.
- The instanceof operator can, given an object and a constructor, tell you whether that object is an instance of that constructor.
- One useful thing to do with objects is to specify an interface for them and tell everybody that they are supposed to talk to your object only through that interface. The rest of the details that make up your object are now encapsulated, hidden behind the interface.
- More than one type may implement the same interface. Code written to use an interface automatically knows how to work with any number of different objects that provide the interface. This is called polymorphism.
- When implementing multiple classes that differ in only some details, it can be helpful to write the new classes as subclass of an existing class, inheriting part of its behavior.
