# Data Structures: Objects and Arrays
- Numbers, Booleans, and Strings are how Data Structures are built.
- Objects allow us to group values, including other objects allowing for more complex structures.

# Data Sets
- We could use a string to represent machine memory, since strings can be any length.
- Instead the data type Array is specifically used for storing sequences of values.
- listofNums[0] -> Grabs 1st Element in Array

# Properties
- Almost all JS values have Properties
- Most common way to access these Properties are value.x or value[x]
- value.x fetches the property of value named "x". While value[x] tries to evaluate the expression x and uses the result as the property name.
- Elements in an Array are stored in Properties.

# Methods
- Both String and Array Objects contain a number of properties that refer to function values.
- Properties that contain functions are generally called "methods" of the value they belong to.

# Objects
- Values of the type Object are arbitrary collections of properties, that can be added or removed.

````
var day1 = {
  weresquirrel: false,
  events:["job", "tv", "gym", "pizza"]
};
````

- Curly Braces {} have two meanings in Javascript. At the start of a statement they start a block of statements. In any other position they describe an object.
- It is almost never useful to start a statement with a curly-brace obj.
- In typical programs there is no ambiguity between the two.
- Property Bindings, are similar to variable bindings. They grasp values, but other variables and properties might be holding onto the same values.
- Delete Operator is a unary operator that when applied to a property access expression will remove the named prop from the obj.
- the Binary In Operator returns a Boolean value that indicates whether the obj has the desired property.
- The difference between setting a property to undef vs deleting it is that in setting to undef the obj still has the the property. With deletion the obj will no longer have the prop and will return false.

# Mutability
- Obj Values can be modified. Numbers, Strings, Booleans are all Immutable - it is impossible to change an existing value of those types.
- You can combine them and derive new values from them, but when you take a specific string value that value will always be the same.
- Obj content can be modified by changing its properties.
```
let obj1 = {val: 10};
let obj2 = obj1
let obj3 = {val: 10};

obj1 == obj2 ==> True
obj1 == obj3 ==> False

```
- Obj1 and Obj2 grasp the same object which is why changing obj1 also changes the value of obj2.
- Obj3 grabs an entirely different obj which contains the same property as obj1, but is separate
- Bindings can also be changeable or constant, but this is separate from how their values behave. Even though number values don't change, you can use the 'let' binding to keep track of a changing number by changing the value it points at
- '==' operator will produce true only if both objs the precisely the same value. Comparing different objs will return false.

# The Lycan's Log
```
let journal = [];

function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}
```
- Instead of declaring properties like events: events, it just gives a property name. If a property name in a curly brace notation isn't followed by a value, the value is taken from the binding with the same name.

# Array Loops
```
for (let i = 0; i < JOURNAL.length; i++) {
  let entry = JOURNAL[i];
  // Do something with entry
}
```

- Simpler way to write loops in modern JS
```
for (let entry of JOURNAL) {
  console.log(`${entry.events.length} events.`);
}
```

# Further Arrayology
- We saw 'push' and 'pop' which add and remove elements at the end of an array.
- The corresponding methods for adding and removing things at the start of an array.
```
let todoList = [];
function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift();
}
function rememberUrgently(task) {
  todoList.unshift(task);
}
```
- To search for a specific value, arrays provide an indexOf method. To search from the end use lastIndexOf.
- Another fundamental array method is 'slice', which take start and end indices and returns an array that only has one element between them.
```
console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]
```
- When an end index is not given, 'slice' will take all the elements after the start index.
- The concat method can be used to glue arrays together
```
function remove(array, index) {
  return array.slice(0, index)
    .concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]

```
- If you pass 'concat' an arg that is not an array the value will be added to a new array, becoming a one element array.

# Strings and their Properties
- Values of type string, number, and Boolean are not objects. It doesn't actually store those properties.
- These types do have built-in properties. Every string value has a number of methods.(slice, indexOf).
- The difference is that string's indexOf can search for a string containing more than one character, where in the array method only looks for a single element.
- 'Trim' removes whitespace(spaces, newlines, tabs, etc) from the start and end of a string.
- 'Zeropad' => 'padStart' => (String(6).padStart(3, "0")); Output: 006
- 'split' on a parameter via string.split("") and join on a parameter via string.join("")
- A string can be repeated with 'repeat' => ("string".repeat(3)) Outputs: stringstringstring

# Rest Parameters
- It can be useful for a function to accept any number of arguments.
```
function max(...numbers) {
  let result = -Infinity;
  for ( let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
```
- When a function is called, the rest parameters is bound to an array containing all further arguments.
- You can use a similar three-dot notation to call a function with an array of arguments.
```
let numbers = [5, 1, 7];
console.log(max(...numbers));

```
- This spreads out the array into the function call, passing its elements as separate arguments.
- Square bracket array notation similarly allows the triple-dot operator to spread another array int othr new array;
```
let words = ["never", "fully"];
console.log(["will", ...words, "understand"]);
// → ["will", "never", "fully", "understand"]

```

# Destructuring
```
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}
```
- We'd rather have bindings for the elements of the arrays

```
function phi([n00, n01, n10, n11]) {
  return (n11 * n00 - n10 * n01) /
    Math.sqrt((n10 + n11) * (n00 + n01) *
              (n01 + n11) * (n00 + n10));
}
```
- This also works for bindings created with 'let', 'var', or 'const'.
```
let {name} = {name: "Faraji", age: 23};
console.log(name);
// → Faraji

```
- If you destructure null or undefined, you'll get an error.

# JSON
- Since Objs only grasp their value, rather than contain it, objects and arrays are stored in the computer memory. So an array with another array inside of it consists of at least one memory region for the inner and another for the outer.
- In order to send it to another computer you have to covert to a description that can be stored or sent.
- We can serialize the data, meaning it is converted into a flat description.
- JSON (Javascript Object Notation) is one serialization format.
- JSON is similar to arrays and objects, except all property names have to surrounded by double quotes, and only simple data expressions are allowed. No
function calls. binding, comments, or anything that involves computation
```
{
  "squirrel": false,
  "events": ["work", "touched tree", "pizza", "running"]
}

```
- JS functions JSON.stringify and JSON.parse convert the data to and from this format.
```
// Takes a JS value and returns a JSON-encoded string
let string = JSON.stringify({squirrel: false,
                             events: ["weekend"]});
console.log(string);
// → {"squirrel":false,"events":["weekend"]}

Takes a string and converts it to the value it encodes
console.log(JSON.parse(string).events);
// → ["weekend"]

```

# Summary
- Objects and Array provide ways to group multiple values into a single one.
- Most values in JS have properties. Properties are accessed using value.prop or value['prop'].
- Objects tend to use names for their properties and store more or less a fixed set of them.
- Arrays can contain a varying amount of conceptually identical values and use numbers as the names of their properties.
