# Function vs Block Scope

## Scopes from Functions
- Each function you declare creates a 'bubble' for itself, but no other structures
create their own scope bubbles
- The scope bubble for foo(..) includes identifiers **a, b, c and bar**
- **It doesn't matter** where in the scope a declaration appears, the variable or function belongs to the containing scope bubble, regardless.
- bar(..) has its own scope bubble. So does the global scope, which has just one identifier attached to it: foo.
- **a, b, c, and bar** all belong to the scope bubble of foo(..), they are not accessible outside of foo(..)
- All these identifiers (a, b, c, foo, and bar) are accessible inside of foo(..), and are also available inside of bar(..)
- Function scope encourages the idea that all variables belong to the function, and can be used and reused throughout the entirety of the function.
- This design approach can be quite useful, and can make full use of the "dynamic" nature of JavaScript variables to take on values of different types as needed.
- If you don't take careful precautions, variables existing across the entirety of a scope can lead to some unexpected pitfalls.
```
function foo(a) {
	var b = 2;

	// some code

	function bar() {
		// ...
	}

	// more code

	var c = 3;
}

```

## Hiding in Plain Scope
- The traditional way of thinking about functions is that you declare a function, and then add code inside it.
- The inverse thinking is equally powerful and useful: take any arbitrary section of code you've written, and wrap a function declaration around it, which in effect "hides" the code.
- **Least Authority** or **Least Exposure**. This principle states that in the design of software, you should expose only what is minimally necessary, and **hide** everything else.
- This principle extends to the choice of which scope to contain variables and functions. If all variables and functions were in the global scope, they would of course be accessible to any nested scope. But this would violate the "Least..." principle in that you are (likely) exposing many variables or functions which you should otherwise keep private, as proper use of the code would discourage access to those variables/functions.
- **var b** and **doSomethingElse()** are likely **private** details of how **doSomething()** works.
- Giving the enclosing scope "access" to b and doSomethingElse(..) is not only unnecessary but also possibly "dangerous", in that they may be used in unexpected ways, intentionally or not, and this may violate pre-condition assumptions of doSomething(..).
```
function doSomething(a) {
	b = a + doSomethingElse( a * 2 );

	console.log( b * 3 );
}

function doSomethingElse(a) {
	return a - 1;
}

var b;

doSomething( 2 ); // 15

```
- A more "proper" design would hide these private details inside the scope of doSomething(..)
- Now, **b** and **doSomethingElse(..)** are not accessible to any outside influence, instead controlled only by doSomething(..).
- The functionality and end-result have not been affected, but the design keeps private details private.
```
function doSomething(a) {
	function doSomethingElse(a) {
		return a - 1;
	}

	var b;

	b = a + doSomethingElse( a * 2 );

	console.log( b * 3 );
}

doSomething( 2 ); // 15

```

## Collision Avoidance
- Another benefit of "hiding" variables and functions inside a scope is to avoid unintended collision between two different identifiers with the same name but different intended usages. Collision results often in unexpected overwriting of values.
- The **i = 3** assignment inside of bar(..) overwrites, the **i** that was declared in foo(..) at the for-loop. This will result in an infinite loop, because **i** is set to a fixed value of **3** and it will always be less than 10.
- The assignment inside bar(..) needs to declare a local variable to use, regardless of what identifier name is chosen. var i = 3; would fix the problem (and would create the previously mentioned "shadowed variable" declaration for i).
- An additional, not alternate, option is to pick another identifier name entirely, such as var j = 3;. But your software design may naturally call for the same identifier name, so utilizing scope to "hide" your inner declaration is your best/only option in that case.
```
function foo() {
	function bar(a) {
		i = 3; // changing the `i` in the enclosing scope's for-loop
		console.log( a + i );
	}

	for (var i=0; i<10; i++) {
		bar( i * 2 ); // oops, infinite loop ahead!
	}
}

foo();

```

## Global Name Space
- A particularly strong example of variable collision occurs in the global scope.
- Multiple libraries loaded into your program can quite easily collide with each other if they don't properly hide their internal/private functions and variables.
- Such libraries typically will create a single variable declaration, often an object, with a sufficiently unique name, in the global scope.
- This object is then used as a "namespace" for that library, where all specific exposures of functionality are made as properties of that object instead of top-level lexically scoped identifiers themselves.

## Module Management
- Another way to avoid collision is the **module** approach.
- Using these tools, no libraries ever add any identifiers to the global scope, but are instead required to have their identifier(s) be explicitly imported into another specific scope through usage of the dependency manager's various mechanisms.
- They simply use the rules of scoping as explained here to enforce that no identifiers are injected into any shared scope, and are instead kept in private, non-collision-susceptible scopes, which prevents any accidental scope collisions.

## Functions as Scopes
- While we can wrap a function around code, that hides any enclosed vars and functions from the outside scope inside that function's scope. It is not ideal.
- We have to declare a function named **foo()**, which itself pollutes the enclosing space(global scope). We also have to explicitly call the function by name(**foo()**). So our code executes.
- It would be more ideal if the function didn't need a name (or, rather, the name didn't pollute the enclosing scope), and if the function could automatically be executed.
```
var a = 2;

function foo() { // <-- insert this

	var a = 3;
	console.log( a ); // 3

} // <-- and this
foo(); // <-- and this

console.log( a ); // 2

```
- we can solve this problem with the following:
- Our wrapping function stars as (function...) its now a function expression instead of a function declaration.
- The easiest way to distinguish declaration vs. expression is the position of the word "function" in the statement. If "function" is the very first thing in the statement, then it's a function declaration. Otherwise, it's a function expression.
- The key difference we can observe here between a function declaration and a function expression relates to where its name is bound as an identifier.
- The name **foo** is not bound in the enclosing scope, but instead is bound only inside of its own function.
- **(function foo(){ .. })** as an expression means the identifier **foo** is found only in the scope where the .. indicates, not in the outer scope. Hiding the name foo inside itself means it does not pollute the enclosing scope unnecessarily.
```
var a = 2;

(function foo(){ // <-- insert this

	var a = 3;
	console.log( a ); // 3

})(); // <-- and this

console.log( a ); // 2

```

## Anonymous vs Named
- This is called an "anonymous function expression", because function()... has no name identifier on it. Function expressions can be anonymous, but function declarations cannot omit the name -- that would be illegal JS grammar
```
setTimeout(function() {
  console.log("Waited 1 Second");
  }, 1000 );

```
- Anonymous function expressions are quick and easy to type, and many libraries and tools tend to encourage this idiomatic style of code. However, they have draw-backs to consider:
1. Anon functions have no useful name display in stack traces, which makes debugging harder.
2. Without a name, if the function needs to refer to itself, for recursion, etc., the deprecated arguments.callee reference is unfortunately required. Another example of needing to self-reference is when an event handler function wants to unbind itself after it fires.
3. Anonymous functions omit a name that is often helpful in providing more readable/understandable code. A descriptive name helps self-document the code.

- Inline function expressions are powerful and useful -- the question of anonymous vs. named doesn't detract from that. Providing a name for your function expression quite effectively addresses all these draw-backs, but has no tangible downsides. The best practice is to always name your function expressions:
```
setTimeout( function timeoutHandler(){ // <-- Look, I have a name!
	console.log( "I waited 1 second!" );
}, 1000 );

```

## Invoking Function Expression Immediately (IIFE)
- We have a function expression by wrapping it in a ( ) pair, we can execute that function by adding another () on the end, like (function foo(){ .. })().
- The first enclosing ( ) pair makes the function an expression, and the second () executes the function.
- The most common form of IIFE is to use an anonymous function expression. - Naming an IIFE has all the aforementioned benefits over anonymous function expressions, so it's a good practice to adopt.
- Two ways to write IIFE:
1. (function(){ .. }()). The function expression is wrapped in ( ), and then the invoking () pair is on the outside right after it.
2. The invoking () pair is moved to the inside of the outer ( ) wrapping pair.

These two forms are identical in functionality. It's purely a stylistic choice which you prefer.
```
  var a = 2;

(function foo(){

	var a = 3;
	console.log( a ); // 3

})();

console.log( a ); // 2

////////////////////////////////

var a = 2;

(function IIFE(){

	var a = 3;
	console.log( a ); // 3

})();

console.log( a ); // 2
```

## Blocks as Scopes
- Block Scoping: Declaring variables as close as possible, as local as possible, to where they will be used.
- Block scope is a tool to extend the earlier "Principle of Least Privilege Exposure" from hiding information in functions to hiding information in blocks of our code.

## Try/Catch
- **err** only exists in the catch clause and will throw an error when you try to reference it elsewhere.
```
try {
	undefined(); // illegal operation to force an exception!
}
catch (err) {
	console.log( err ); // works!
}

console.log( err ); // ReferenceError: `err` not found

```

## Let
- The **let** keyword attaches the variable declaration to the scope of whatever block (commonly a { .. } pair) it's contained in. In other words, let implicitly hijacks any block's scope for its variable declaration.
- Using **let** to attach a variable to an existing block is somewhat implicit. It can confuse you if you're not paying close attention to which blocks have variables scoped to them.
- Creating explicit blocks for block-scoping can address some of these concerns, making it more obvious where variables are attached and not. Explicit code is preferable over implicit or subtle code.
- Declarations made with **let** will **not hoist** to the entire scope of the block they appear in. These declarations will not "exist" in the block until the declaration statement.
```
var foo = true;

if (foo) {
	let bar = foo * 2;
	bar = something( bar );
	console.log( bar );
}

console.log( bar ); // ReferenceError

```


## Garbage Collection
- Declaring explicit blocks for variables to locally bind to is a powerful tool that you can add to your code toolbox.
- someReallyBigData will persist after process() runs because the on.click has closure over the entire scope.
```
function process(data) {
	// do something interesting
}

var someReallyBigData = { .. };

process( someReallyBigData );

var btn = document.getElementById( "my_button" );

btn.addEventListener( "click", function click(evt){
	console.log("button clicked");
}, /*capturingPhase=*/false );

```
- We can use block scoping to address this:
```
function process(data) {
	// do something interesting
}

// anything declared inside this block can go away after!
{
	let someReallyBigData = { .. };

    process( someReallyBigData );

}

var btn = document.getElementById( "my_button" );

btn.addEventListener( "click", function click(evt){
	console.log("button clicked");
}, /_capturingPhase=_/false );

```

## 'LET' loops
- **let** in the for-loop header binds the i to the for-loop body. It will
rebind it to each iteration of the loop making sure to re-assign at the end of the previous loop.
- **let** declarations attach to arbitrary blocks rather than to the enclosing function's scope (or global), there can be gotchas where existing code has a hidden reliance on function-scoped var declarations, and replacing the var with let may require additional care when refactoring code.
```
for (let i=0; i<10; i++) {
	console.log( i );
}

console.log( i ); // ReferenceError

```


## Const
- **const** also creates a block-scoped variable, but whose value is fixed (constant). Any attempt to change that value at a later time results in an error.


# Summary
- Functions are the most common unit of scope in JavaScript. Variables and functions that are declared inside another function are essentially "hidden" from any of the enclosing "scopes", which is an intentional design principle of good software.
- Functions are not the only unit of scope. **Block-scope** refers to the idea that variables and functions can belong to an arbitrary block (generally, any { .. } pair) of code, rather than only to the enclosing function.
- The **let** keyword allows declarations of variables in any arbitrary block of code. if (..) { let a = 2; } will declare a variable a that essentially hijacks the scope of the if's { .. } block and attaches itself there.
