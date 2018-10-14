# 'This' or That?
- **this** is a special identifier keyword that is automatically defined in the scope of every function.

## Why 'This
- **this** mechanism provides a more elegant way of implicitly "passing along" an object reference, leading to cleaner API design and easier re-use.

```
function identify() {
	return this.name.toUpperCase();
}

function speak() {
	var greeting = "Hello, I'm " + identify.call( this );
	console.log( greeting );
}

var me = {
	name: "Kyle"
};

var you = {
	name: "Reader"
};

identify.call( me ); // KYLE
identify.call( you ); // READER

speak.call( me ); // Hello, I'm KYLE
speak.call( you ); // Hello, I'm READER

```

## Confusions
- **this** does not refer to the function itself.
- **this** doesn't let a function get a reference to itself
- To reference a function object from inside itself, **this** by itself will typically be insufficient. You generally need a reference to the function object via a lexical identifier (variable) that points at it.
```
function foo(num) {
	console.log( "foo: " + num );

	// keep track of how many times `foo` is called
	this.count++;
}

foo.count = 0;

var i;

for (i=0; i<10; i++) {
	if (i > 5) {
		foo( i );
	}
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// how many times was `foo` called?
console.log( foo.count ); // 0 -- WTF?

```

#### 1st Function
- **foo function** is a ref that can be used to refer to the function itself.
#### 2nd Function
- The function callback passed to setTimeout(..) has no name identifier ( "anonymous function"), so there's no proper way to refer to the function object itself.
```
function foo() {
	foo.count = 4; // `foo` refers to itself
}

setTimeout( function(){
	// anonymous function (no name), cannot
	// refer to itself
}, 10 );

```

# Its Scope
- The next most common misconception about the meaning of **this** is that it somehow refers to the function's scope. In one sense there is some truth, but in the other sense, it's misguided.
- **this** does not refer to a function's lexical scope.
- The scope "object" is not accessible to JavaScript code. It's an inner part of the Engine's implementation.
-  You **cannot** use a **this** reference to look something up in a lexical scope. It is not possible.

## What's 'this'?
- **this** is not an author-time binding but a runtime binding.
- It is contextual based on the conditions of the function's invocation.
- The **this** binding has nothing to do with where a function is declared, but instead the manner in which the function is called.
- When a function is invoked, an activation record(execution context), is created. This record contains information about where the function was called from (the call-stack), how the function was invoked, what parameters were passed, etc.
- One of the properties of this record is the **this** reference which will be used for the duration of that function's execution.

# Summary
- The **this** binding is a constant source of confusion for the JavaScript developer who does not take the time to learn how the mechanism actually works.
- **this**, is neither a reference to the function itself, nor is it a reference to the function's lexical scope.
- **this** is a binding that is made when a function is invoked, and what it references is determined entirely by the call-site where the function is called.
