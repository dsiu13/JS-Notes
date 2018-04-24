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
