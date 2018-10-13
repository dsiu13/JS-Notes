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

In the above code snippet, the Engine executes the console.log(..) statement and goes looking for the three referenced variables a, b, and c. It first starts with the innermost scope bubble, the scope of the bar(..) function. It won't find a there, so it goes up one level, out to the next nearest scope bubble, the scope of foo(..). It finds a there, and so it uses that a. Same thing for b. But c, it does find inside of bar(..).

Had there been a c both inside of bar(..) and inside of foo(..), the console.log(..) statement would have found and used the one in bar(..), never getting to the one in foo(..).

Scope look-up stops once it finds the first match. The same identifier name can be specified at multiple layers of nested scope, which is called "shadowing" (the inner identifier "shadows" the outer identifier). Regardless of shadowing, scope look-up always starts at the innermost scope being executed at the time, and works its way outward/upward until the first match, and stops.
