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
