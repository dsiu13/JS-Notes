# Ch 1: What is Scope?
- One of the most fundamental paradigms of nearly all programming languages is the ability to store values in variables, and later retrieve or modify those values.
- Leading to the questions: where are they stored? How does our program find them when it needs them?

# Compiler Theory
- JavaScript is a compiled language, it is not compiled well in advance like many other compiled languages.
- In traditional complied language processes, a chunk of source code(your program) will undergo three steps before execution.

### 1. Tokenizing/Lexing: Breaking up a string of characters into something meaningful to the language.
- The difference between Tokenizing and Lexing is based on if these tokens are id'd in a stateless or stateful way. If a the tokenizer were to invoke stateful parsing rules figure out if 'a' should be a token or apart of another token it would be Lexing

### 2. Parsing
- Taking a stream (array) of tokens and turning it into a tree of nested elements, which collectively represent the grammatical structure of the program. This tree is called an "AST" (Abstract Syntax Tree).
- The tree for var a = 2; might start with a top-level node called VariableDeclaration, with a child node called Identifier (whose value is a), and another child called AssignmentExpression which itself has a child called NumericLiteral (whose value is 2).

### 3. Code-Generation
#### Code generation is the process of taking an 'AST' and turning it into executable code.
- Simple overview of how JavaScript compiles code.
- JavaScript engines don't get the luxury of having plenty of time to optimize, because JavaScript compilation doesn't happen in a build step ahead of time.

# Understanding Scope
1. Engine: responsible for start-to-finish compilation and execution of our JavaScript program.
2. Compiler: one of Engine's friends; handles all the dirty work of parsing and code-generation
3. Scope: another friend of Engine; collects and maintains a look-up list of all the declared identifiers (variables), and enforces a strict set of rules as to how these are accessible to currently executing code.

```
var a = 2;

```
- The compiler will perform lexing to break it down into tokens, then parse it into a tree. The compiler will behave differently when it gets to code-generations.
1. Encountering **var a**, Compiler asks scope to see if a variable named **a** already exists, if yes it gets ignored. Otherwise the Compiler asks Scope to declare a new var for **a**
2. Compiler then produces code for Engine to later execute, handling the **a = 2** assignment. Engine asks Scope about accessibility, if not found it looks elsewhere.
Once found the Engine assigns the value of 2 to it, else Engine throws an error if it can't
- two distinct actions are taken for a variable assignment: First, Compiler declares a variable (if not previously declared in the current scope), and second, when executing, Engine looks up the variable in Scope and assigns to it, if found.

## Compiler Speak
- When Engine executes the code that Compiler produced for step (2), it has to look-up the variable a to see if it has been declared, and this look-up is consulting Scope. But the type of look-up Engine performs affects the outcome of the look-up.
- The Engine would be performing an "Left Hand Side" look-up for the **variable a**. The other type of look-up is called "Right Hand Side".
- LHS is trying to find the variable container itself. While RHS is retrieving or getting the value of
- RHS - console.log(a). Nothing is being assigned we're looking for a **value of a**
- LHS - a = 2; We don't care about the value, we only want to find the var as a target for the **= 2** assignment
- LHS and RHS don't literally mean left or right of the assignment operator **=**
- the function below has both LHS and RHS.
- the look up of the foo function is RHS.
- The argument being passed to a, which is 2 is LHS.
```
function foo(a) {
	console.log( a ); // 2
}

foo( 2 );

```

## Engine/Scope Conversation
- Engine has a RHS ref for 'foo'.
- Scope is asked if it exists, based on Compilers declaration.
- If it exists Scope gives it to Engine, and Engine executes it.
- Engine now has a LHS ref for 'a'. It asks Scope if it exists.
- Again scope looks if its been declared by the Compiler.
- Engine then assigns **2** to **a**
```
function foo(a) {
	console.log( a ); // 2
}

foo( 2 );

```

### Quiz
- **var c** is looked up - RHS
- **foo** function is assigned to **var c** - LHS
- lookup of **a** and assignment of **2 to var a** from argument passed in function call - LHS/RHS
- B is looked up, and then assigned the value of A - LHS
- A and B are looked up, get their values - RHS

#### RHS
- Retrieve the value of **A + B**
- Grab the value of **C**, which is a function
-
```
function foo(a) {
	var b = a;
	return a + b;
}

var c = foo( 2 );

```

## Nested Scope
- Scope is a set of rules for looking up variables by their identifier name.
- A block or function can be nested inside another block or function, scopes can be nested inside other scopes.
- if a variable cannot be found in the immediate scope, Engine consults the next outer containing scope, continuing until found or until the outermost (aka, global) scope has been reached.

#### Simple rules for traversing nested Scope:
- Engine starts at the currently executing Scope, looks for the variable there, then if not found, keeps going up one level, and so on.
- If the outermost global scope is reached, the search stops, whether it finds the variable or not.

## Errors
- LHS and RHS lookups behave differently where a var has not been declared
- For a RHS first lookup for **b**, it won't be found. It is an **undeclared var**
- When a RHS look-up fails to ever find a variable, anywhere in the nested Scopes, this results in a ReferenceError being thrown by the Engine.
- if the Engine is performing an LHS look-up and arrives at the top floor (global Scope) without finding it, and if the program is not running in "Strict Mode", then the global Scope will create a new variable of that name in the global scope, and hand it back to Engine.
- If strict mode is activate during a LHS there will be no variable creation

```
function foo(a) {
	console.log( a + b );
	b = a;
}

foo( 2 );

```

## Summary
- Scope is the set of rules that determines where and how a variable (identifier) can be looked-up. This look-up may be for the purposes of assigning to the variable, which is an LHS (left-hand-side) reference, or it may be for the purposes of retrieving its value, which is an RHS (right-hand-side) reference.
- LHS references result from assignment operations. Scope-related assignments can occur either with the = operator or by passing arguments to (assign to) function parameters.
- JavaScript Engine first compiles code before it executes
- Both LHS and RHS reference look-ups start at the currently executing Scope, and if need be (that is, they don't find what they're looking for there), they work their way up the nested Scope, one scope (floor) at a time, looking for the identifier, until they get to the global (top floor) and stop, and either find it, or don't.
- Unfulfilled RHS references result in ReferenceErrors being thrown. Unfulfilled LHS references result in an automatic, implicitly-created global of that name (if not in "Strict Mode" [^note-strictmode]), or a ReferenceError (if in "Strict Mode" [^note-strictmode]).
