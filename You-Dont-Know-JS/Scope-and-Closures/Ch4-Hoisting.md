# Hoisting
- Considering the following code.
- Not all code in JS is interpreted line-by-line, top-to-bottom order
- Both variables and functions, are processed first, before any part of your code is executed.
- With var a = 2;, JavaScript thinks of it as two statements: **var a;** and **a = 2;**. The first statement, the declaration, is processed during the compilation phase. The second statement, the assignment, is left in place for the execution phase.
- The egg (declaration) comes before the chicken (assignment).
- **Only the declarations themselves are hoisted**, while any assignments or other executable logic are left in place. Hoisting is per-scope.
- Function declarations are hoisted. Function expressions are not.

- This snippet is being handle as **var a** and **a = 2; console.log(a)**
- The first part is the compilation and the second part is the execution.
```
a = 2;

var a;

console.log( a );

// output - 2
```

- This snippet handles it as **var a**, and **console.log(a), a = 2;**
- Variable and function declarations are "moved" from where they appear in the flow of the code to the top of the code. This gives rise to the name "Hoisting".
```
console.log( a );

var a = 2;

// output - undefined
```

## Functions First
- Both function declarations and variable declarations are hoisted.
- Function declarations are hoisted before normal variables.
- While multiple/duplicate **var** declarations are effectively ignored, subsequent function declarations do override previous ones.
- Function declarations that appear inside of normal blocks typically hoist to the enclosing scope

```
foo(); // 1

var foo;

function foo() {
	console.log( 1 );
}

foo = function() {
	console.log( 2 );
};

```

## Summary
- All declarations in a scope, regardless of where they appear, are processed first before the code itself is executed. You can visualize this as declarations (variables and functions) being "moved" to the top of their respective scopes, which we call "hoisting".
- Declarations themselves are hoisted, but assignments, even assignments of function expressions, are not hoisted.
