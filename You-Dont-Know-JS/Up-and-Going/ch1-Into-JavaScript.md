# Into JavaScript
- JavaScript has typed values, not typed variables.
- String, Number, Boolean, Null and Undefined, Object, and symbol (ES6)
- JavaScript provides a typeof Operators
```
var a;
typeof a; => "undefined"

a = "hello world";
typeof a; => "string"

a = 42;
typeof a; => "number"

a = true;
typeof a; => "boolean"

a = null;
typeof a; = "undefined"

a = {b: "c"};
typeof a = "object"

```
- The return value from the 'typeof' operator is always one of six string values.
- typeof 'abc' returns "string", and not string
- typeof null is an exception it returns "object"

# Objects
- An object type refers to a compound value where you can set properties(named locations) that each hold their own values of any type.
```
var obj = {
  a:"hello world",
  b: 42,
  c: true
}

obj.a;		// "hello world"
obj.b;		// 42
obj.c;		// true

obj["a"];	// "hello world"
obj["b"];	// 42
obj["c"];	// true
```
- Properties can either be accessed with dot notation(obj.a) or bracket notation(obj["a"]). Dot notation is preferred when possible.
- Bracket notation is useful if you have a property name with special characters(obj["hello!"]), such properties are referred to as keys, when accessed with bracket notation. Bracket notation is also useful if you want to access a property/key but the name is stored in another variable.
```
var obj = {
  a: "hello world",
  b: 42
};

var b = "a";

obj[b];
obj["b"];

```

# Array
- Array is an object that hold values of any type. Not particularly in named properties/keys, but in indexed positions.
```
var arr = [
  "hello world",
  42,
  true
]

arr[0]; => "hello world"
arr[1]; => 42
arr[2]; => true
arr.length; => 3

typeof arr; => object

```
- You can use arrays as a normal object with your own named properties, or you could use an 'object' but only give it numeric properties.
- The best and most natural approach is to use arrays for numerically positioned values and use objects for named properties.

# Functions
```
function foo() {
  return 42;
}

foo.bar = "hello"

typeof foo; => "function"
typeof foo(); => "number"
typeof foo.bar; => "string"

```
- Functions are subtypes of 'objects' -- typeof returns "function", which implies functions are a main type and can have properties. You will typically only use function object properties(foo.bar) in limited cases.

# Built-In Type Methods
- Built-In types and subtypes have behaviors exposed as properties and methods that are quite powerful and useful.
```
var a = "hello world";
var b = 3.14159;

a.length; => 11
a.toUpperCase(); => "HELLO WORLD"
b.toFixed(4); => "3.1416"

```
- There is a 'String' object wrapper form, called a "native" that pairs with the primitive "string" type. This object wrapper defines the toUpperCase() method on its prototype.
- When you use a primitive value like 'hello world' as an object, by referencing a property or method, JS 'boxes' the value to its object wrapper counterpart.
- a "string" can be wrapped by a 'String' object, a boolean and number can be wrapped by their corresponding object.

# Comparing Values
- Two main types of value comparison, equality and inequality. The result will be a boolean i.e true or false regardless of comparison type.
- Coercion comes in two forms in JavaScript - Explicit and Implicit.
- Explicit Coercion is simply you being able to see in the code that conversion from one type to another will occur.
- Implicit is when type conversion can happen as more of a non-obvious side effect of some other operation.

## Explicit Coercion
```
var a = "42"
var b = Number ( a );
a; => "42" // String
b; => 42 // Number
```

## Implicit Coercion
```
var a = "42";

var b = a * 1;	// "42" implicitly coerced to 42 here

a;				// "42"
b;				// 42 -- the number!

```

# Truthy & Falsy


## Falsy Values
- "" - Empty String
- 0, -0, NaN(Not a Number)
- null, Undefined
- false

## Truthy
- Any value that is not falsy is truthy.
- Strings
- Numbers
- Array
- Objects
- Functions

## Equality
- ==, ===, !==, !=, are equality operators.
- The difference between == and === is that == checks for value equality while ===
checks for both, value and type.
