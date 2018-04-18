# Chapter 1: Into Programming

# Statements
- In a computer language, a group of words, numbers, and operators that performs a specific task is a statement in JavaScript.
```
a = b * 2;

```
- The characters 'a' and 'b' are called variables
- 2 is a value itself, called a literal value
- = and * are operators
- The statement a = b * 2 tells the computer to get the current stored value in the variable and then multiply is by 2.
- Programs are just collections of many such statements, which together describe all the steps that it takes to perform your programs purpose.

# Expressions
- Statements are made up of one or more expressions. An expression is any reference to a variable or value, set of variables or values combined with operators.
```
a = b * 2

```
## This statement has four expressions in it:
- 2 is a literal value expressions
- b is a variable expression, which means to retrieve its current value
- b * 2 is an arithmetic expression, which means to do the multiplication
- a = b * 2 is an assignment expression, which means to assign the result of b * 2 expression to var a

- A general expression that stands alone is also called an expression statement. For example: b * 2; This is generally not common or useful.
- A more common expression statement is a call expression statement. The entire statement is the function call expression itself: alert(a);

# Executing a Program
- For some computer languages, this translation of commands is typically done from top to bottom, line by line, every time the program is run, which is usually called interpreting the code.
- For other languages, the translation is done ahead of time, called compiling the code, so when the program runs later, what's running is actually the already compiled computer instructions ready to go.
- It's typically asserted that JavaScript is interpreted, because your JavaScript source code is processed each time it's run.The JavaScript engine actually compiles the program on the fly and then immediately runs the compiled code.

# Operators
- Operators are how we perform actions on variables and values.

# Values & Types
- string, number, boolean are value Types

# Converting between Types
- if you have a 'number' type but need to print it on the screen, you need to convert it to a string. Displaying the number will make it a string, preforming math operations on it requires it to be a number.
- the "==" loose equality operator will convert to a matching data type.

# Variables
- Most useful programs need to track a value as it changes over the course of the program, undergoing different operations as called for by your program's intended tasks.
- The easiest way is to assign a value to a symbolic container, called a variable -- so called because the value in this container can vary over time as needed.
- In some programming languages you declare a variable(container) to hold a specific type of value(number, string, etc).
- Static typing, aka "type enforcement" is cited as a benefit for program correctness by preventing unintended value conversion.
- Other languages emphasize types for values instead of variables. "Weak typing" or dynamic typing. This allows for program flexibility by allowing a variable to hold any type of value at any time
- JavaScript uses dynamic typing, meaning variables can hold values of any type without any type enforcement.

# Blocks
- We often need to group a series of statements together called a "block".
- In javascript a block is defined by wrapping one or more statements inside a curly-brace pair.
- Typically blocks are attached to some other control statements
```
var amount = 99.99;

// is amount big enough?
if (amount > 10) {			// <-- block attached to `if`
	amount = amount * 2;
	console.log( amount );	// 199.98
}
```

# Conditionals
- JavaScript defines a list of specific values that are considered "falsy" because when coerced to a boolean, they become false -- these include values like 0 and "". Any other value not on the "falsy" list is automatically "truthy"

# Loops
- Repeating a set of actions until a certain condition fails
- A loop includes the test condition as well as a block. Each time the loop block executes, its called an iteration
```
while (numOfCustomers > 0) {
	console.log( "How may I help you?" );

	// help the customer...

	numOfCustomers = numOfCustomers - 1;
}

// versus:

do {
	console.log( "How may I help you?" );

	// help the customer...

	numOfCustomers = numOfCustomers - 1;
} while (numOfCustomers > 0);

```
- The difference between the two loops is whether the conditional is tested before the first iteration (while) or after the iteration (do...)


# Function
- A function is a named section of code that can be called by name.
```
function printAmount() {
	console.log( amount.toFixed( 2 ) );
}

var amount = 99.99;

printAmount(); // "99.99"

amount = amount * 2;

printAmount(); // "199.98"

```
- Functions can optionally take arguments (aka parameters) -- values you pass in. And they can also optionally return a value back.

```
function printAmount(amt) {
	console.log( amt.toFixed( 2 ) );
}

function formatAmount() {
	return "$" + amount.toFixed( 2 );
}

var amount = 99.99;

printAmount( amount * 2 );		// "199.98"

amount = formatAmount();
console.log( amount );			// "$99.99"

```

# Scope
- In JavaScript, each function has its own scope.
- Scope is basically a collection of variables as well as the rules for how those variables are accessed by name. Only code within that function can access that function's scoped variables.
- A variable name has to be unique within the same scope -- there can't be two different a variables sitting right next to each other. But the same variable name a could appear in different scopes
```
function one() {
	// this `a` only belongs to the `one()` function
	var a = 1;
	console.log( a );
}

function two() {
	// this `a` only belongs to the `two()` function
	var a = 2;
	console.log( a );
}

one();		// 1
two();		// 2

```
- scope can be nested inside another scope. If one scope is nested inside another, code inside the innermost scope can access variables from either scope.
```
function outer() {
	var a = 1;

	function inner() {
		var b = 2;

		// we can access both `a` and `b` here
		console.log( a + b );	// 3
	}

	inner();

	// we can only access `a` here
	console.log( a );			// 1
}

outer();

```

- Lexical scope rules say that code in one scope can access variables of either that scope or any scope outside of it. The code inside the inner() function has access to both variables a and b, but code in outer() has access only to a -- it cannot access b because that variable is only inside inner().
