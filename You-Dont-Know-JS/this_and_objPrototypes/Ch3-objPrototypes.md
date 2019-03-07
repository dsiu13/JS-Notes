<!-- Chapter 3: Objects -->

## Objects
- Objects come in two forms: declarative (literal) and the constructed.
- Constructed form and literal form result in the exact same sort of obj.
- The difference is you can add one or more key/value pairs to the literal declaration.
- It is uncommon to use the **Constructed** form for object creation.

#### Literal
```
var myObj = {
  key: value
};

```
#### Constructed
```
var myObj = new Object();
myObj.key = value;
```

## Type
- Objs are the general building blocks for JS. There are one of the 6 primary types: **string**, **number**, **Boolean**, **null**, **undefined**, **object**
- Simple Primitives (str, num, boolean, null, and undef) are **not** themselves objects.
- Null is sometimes referred to as an object type, due to an error of **typeof** returning "object" when used on null
- Not everything is JS is an object.
- Complex primitives are a special object sub-type: Functions are an example.
- Functions are said to be "first class" but are just normal objects.
- Arrays are also a form of objects with extra behavior.

## Built-In objects
- There are several other object sub-types, usually referred to as built-in objects. For some of them, their names seem to imply they are directly related to their simple primitives counter-parts, but in fact, their relationship is more complicated.
- String, Number, Boolean, Object, Function, Array, Date, RegExp, Error
- These built-ins have the appearance of being actual types, even classes, if you rely on the similarity to other languages such as Java's String class.
- in JS, these are built-in functions. Each of these built-in functions can be used as a constructor (a function call with the **new** operator
```
var strPrimitive = "I am a string";
typeof strPrimitive;							// "string"
strPrimitive instanceof String;					// false

var strObject = new String( "I am a string" );
typeof strObject; 								// "object"
strObject instanceof String;					// true

// inspect the object sub-type
Object.prototype.toString.call( strObject );	// [object String]

```
