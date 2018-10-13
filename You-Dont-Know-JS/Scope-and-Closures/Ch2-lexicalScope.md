# Lexical Scope
- We defined **scope** as the set of rules that govern how the Engine can look up a variable by its identifier name and find it, either in the current Scope, or in any of the Nested Scopes it's contained within.
- Two models for how scope works:
1. The most common is called **Lexical Scope**, and is used by a majority of languages
2. The other model is **Dynamic Scope**

## Lex-time
- **Lexical scope** is scope that is defined at **lexing time**. In other words, lexical scope is based on where variables and blocks of scope are authored, by you, at write time, and thus is (mostly) set in stone by the time the lexer processes your code.
```
1.  function foo(a) {

2.  	var b = a * 2;

  	function bar(c) {
  	3.	console.log( a, b, c );
  	}

  	bar(b * 3);
  }

  foo( 2 ); // 2 4 12

```
1. Encompasses the global scope, and has just one identifier in it
2. Encompasses the scope of foo, which includes the three identifiers: a, bar and b.
3. Encompasses the scope of bar, and it includes just one identifier: c.
- Scope bubbles are defined by where the blocks of scope are written, which one is nested inside the other, etc. In the next chapter, we'll discuss different units of scope, but for now, let's just assume that each function creates a new bubble of scope.

## Look-ups
- The structure and relative placement of these scope bubbles fully explains to the Engine all the places it needs to look to find an identifier.
- In the above code snippet, the Engine executes the console.log(..) statement and goes looking for the three referenced variables a, b, and c.
- It starts with the innermost scope bubble, the scope of the bar(..) function. It won't find a there, so it goes up one level, out to the next nearest scope bubble, the scope of foo(..). It finds a there, and so it uses that a. Same thing for b. But c, it does find inside of bar(..).
- Scope look-up stops once it finds the first match. The same identifier name can be specified at multiple layers of nested scope, which is called "shadowing" (the inner identifier "shadows" the outer identifier).
- Regardless of shadowing, scope look-up always starts at the innermost scope being executed at the time, and works its way outward/upward until the first match, and stops.

## Cheating Lexical
- Cheating lexical scope leads to poorer performance.

### eval()
- eval() takes in a string as an argument and treats the content of the strings as if it had actually been authored code.
- you can programmatically generate code inside of your authored code, and run the generated code as if it had been there at author time
- The Engine will not "know" or "care" that the previous code in question was dynamically interpreted and thus modified the lexical scope environment.

### with - deprecated
- **with** is typically explained as a short-hand for making multiple property references against an object without repeating the object reference itself each time.
- The **with** statement takes an object, one which has zero or more properties, and treats that object as if it is a wholly separate lexical scope, and thus the object's properties are treated as lexically defined identifiers in that "scope".
- Even though a with block treats an object like a lexical scope, a normal var declaration inside that with block will not be scoped to that with block, but instead the containing function scope.

## Performance
- Both eval(..) and with cheat the otherwise author-time defined lexical scope by modifying or creating new lexical scope at runtime.
- Using **eval** or **with** causes the engine to expend more effort. Since it cannot know at lexing time exactly what code you may pass to **eval** or **with**

## Summary
- Lexical scope means that scope is defined by author-time decisions of where functions are declared.
- The lexing phase of compilation is essentially able to know where and how all identifiers are declared, and thus predict how they will be looked-up during execution.
- Two mechanisms in JavaScript can "cheat" lexical scope: **eval(..)** and **with**.
- **eval** can modify existing lexical scope (at runtime) by evaluating a string of "code" which has one or more declarations in it.
- **with** creates a whole new lexical scope (again, at runtime) by treating an object reference as a "scope" and that object's properties as scoped identifiers.
- These mechanisms hinder the Engine's ability to perform compile-time optimizations regarding scope look-up, because the Engine has to assume pessimistically that such optimizations will be invalid.
