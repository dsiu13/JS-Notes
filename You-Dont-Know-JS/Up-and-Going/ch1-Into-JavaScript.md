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
```
var a = "42";
var b = 42;

a == b;			// true
a === b;		// false
```
- In the a == b, JS sees there is no type match. It goes through an ordered series of steps to coerce one or both values, until both match.
- The a === b produces false, because coercion is not allowed.

## Inequality
- <, >, <=, >= are operators for inequality, also known as relational comparison
- JS string values can also be compared for inequality
```
var a = 41;
var b = "42";
var c = "43";

a < b;		// true
b < c;		// true

```

# Variables
- In JavaScript, variable names must be valid identifiers.
- An identifier must start with a-z, A-Z, $, or _
- The same rules apply to a property name as to a variable identifier. Certain words cannot be used as variables, but are OK as property names. These are called "reserved words," and include the JS keywords.

## Function Scopes
- 'Var' lets you declare a variable that will belong to the current function scope or global if outside any function.

## Hoisting
- When a var appears inside a scope, that declaration is taken to belong to the entire scope and can be used everywhere throughout. This is called Hoisting.
- when a var declaration is conceptually "moved" to the top of its enclosing scope. This process is more accurately explained by how code is compiled.
```
var a = 2;

foo();					// works because `foo()`
						// declaration is "hoisted"

function foo() {
	a = 3;

	console.log( a );	// 3

	var a;				// declaration is "hoisted"
						// to the top of `foo()`
}

console.log( a );	// 2
```
- It's much more common and accepted to use hoisted function declarations.

## Nested Scopes
```
function foo() {
	var a = 1;

	function bar() {
		var b = 2;

		function baz() {
			var c = 3;

			console.log( a, b, c );	// 1 2 3
		}

		baz();
		console.log( a, b );		// 1 2
	}

	bar();
	console.log( a );				// 1
}

foo();

```
- 'c' is not available inside of bar(), because its declared only inside the inner baz() scope
- Accessing a variable in a scope where its not available will throw 'ReferenceError'
- Setting a variable that hasn't been declared, will either create a variable in the top-level global scope (bad!) or throw an error, depending on "strict mode"

### Don't do this. Bad Practice.
- Always formally declare your variables
```
function foo() {
	a = 1;	// `a` not formally declared
}

foo();
a;			// 1 -- oops, auto global variable :(

```

- ES6 lets you declare variables that belong to individual blocks. Using the 'lets' keyword.
```
function foo() {
	var a = 1;

	if (a >= 1) {
		let b = 2;

		while (b < 5) {
			let c = b * 2;
			b++;

			console.log( a + c );
		}
	}
}

foo();
// 5 7 9

```
- By using 'let' instead of 'var', var b will belong only to the if statement and not the whole foo() function scope.
- var c belongs only to the while loop.
- Block scoping is useful for managing your variable scopes.

# Conditionals

## Else if
```
if (a == 2) {
	// do something
}
else if (a == 10) {
	// do another thing
}
else if (a == 42) {
	// do yet another thing
}
else {
	// fallback to here
}

```
## Switch Case
```
switch (a) {
	case 2:
		// do something
		break;
	case 10:
		// do another thing
		break;
	case 42:
		// do yet another thing
		break;
	default:
		// fallback to here
}

```
- break is important if you want only the statement(s) in one case to run. Omitting break from a case, means that if the case matches or runs, execution will continue with the next case's statements regardless of that case matching.

```
switch (a) {
	case 2:
	case 10:
		// some cool stuff
		break;
	case 42:
		// other stuff
		break;
	default:
		// fallback
}
```
- If 'a' is either 2 or 10, the code will execute.

## Ternary Operator or Conditional Operator
```
var a = 42;

var b = (a > 41) ? "hello" : "world";

// similar to:

// if (a > 41) {
//    b = "hello";
// }
// else {
//    b = "world";
// }

```
- The conditional operator doesn't have to be used in an assignment, but that's definitely the most common usage.

## Strict Mode
- ES6 added strict mode, which tightens the rules for certain behaviors.
- You can use strict mode for an individual function.
```
function foo() {
	"use strict";

	// this code is strict mode

	function bar() {
		// this code is strict mode
	}
}

// this code is not strict mode
```

```
"use strict";

function foo() {j
	// this code is strict mode

	function bar() {
		// this code is strict mode
	}
}

// this code is strict mode
```
- One key difference (improvement!) with strict mode is disallowing the implicit auto-global variable declaration from omitting the var

```
function foo() {
	"use strict";	// turn on strict mode
	a = 1;			// `var` missing, ReferenceError
}

foo();

```

## Functions as Values
- Functions themselves can be values, and passed to or returned from other functions.
- A function value should be thought of as an expression, much like any other value or expression
```
var foo = function() {
	// Code
};

var x = function bar(){
	// Code
};

```
- The first function expression assigned to foo variable is an 'anonymous' because it has no 'name'
- The second expression is named 'bar', referenced as x. Named expression are preferable, thought anon function are common.

## Immediately Invoked Function Expressions(IIFEs)
- Functions need to be invoked for them to executed. Another way to execute a function expression is IIFE.
```
(function IIFE(){
	console.log( "Hello!" );
})();
// "Hello!"

```

- The outer parenthesis that surround the function is a nuance of JS grammar needed to prevent it from being treated as normal function declaration.
- The final (), is what invokes the function.
```
function foo() { .. }

// `foo` function reference expression,
// then `()` executes it
foo();

// `IIFE` function expression,
// then `()` executes it
(function IIFE(){ .. })();

```

- Because an IIFE is just a function, and functions create variable scope, using an IIFE in this fashion is often used to declare variables that won't affect the surrounding code outside the IIFE
```
var a = 42;

(function IIFE(){
	var a = 10;
	console.log( a );	// 10
})();

console.log( a );		// 42

```

- IFFE can also have return Values
```
var x = (function IIFE(){
	return 42;
})();

x;	// 42

```

## Closures
- Closure is a way to 'remember' and continue to access a function's scope(its variables) even once its finished running

```
function makeAdder(x) {
	// parameter `x` is an inner variable

	// inner function `add()` uses `x`, so
	// it has a "closure" over it
	function add(y) {
		return y + x;
	};

	return add;
}

```

- The reference to the inner add(..) function that gets returned with each call to the outer makeAdder(..) is able to remember whatever x value was passed in to makeAdder(..).

```
// `plusOne` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
var plusOne = makeAdder( 1 );

// `plusTen` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
var plusTen = makeAdder( 10 );

plusOne( 3 );		// 4  <-- 1 + 3
plusOne( 41 );		// 42 <-- 1 + 41

plusTen( 13 );		// 23 <-- 10 + 13
```

-
