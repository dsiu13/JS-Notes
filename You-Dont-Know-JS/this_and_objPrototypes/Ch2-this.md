# 'this' all makes sense now

## Call-site
- **call-site**: the location in code where a function is called **(not where it's declared)**.
- In order to find a call-site we need to think about the **call-stack**
- We can use the debugger to see our call-stack instead of visualizing it.
```
function baz() {
    // call-stack is: `baz`
    // so, our call-site is in the global scope

    console.log( "baz" );
    bar(); // <-- call-site for `bar`
}

function bar() {
    // call-stack is: `baz` -> `bar`
    // so, our call-site is in `baz`

    console.log( "bar" );
    foo(); // <-- call-site for `foo`
}

function foo() {
    // call-stack is: `baz` -> `bar` -> `foo`
    // so, our call-site is in `bar`

    console.log( "foo" );
}

baz(); // <-- call-site for `baz`

```

## Rules
- We can inspect the call-site to see which of the following rules apply.

### Default Binding
- The first rule is the most common case of function calls: **standalone function invocation**.
- This rule is generally the default catch-all rule when none of the other rules apply.
- In the code below the variables declared in the global scope, as **var a = 2** are synonymous with global-object properties of the same name. They're not copies of each other, they are the same.
- When foo() is called, **this.a** resolves to our global variable a. Because in this case, the default binding for this applies to the function call, and so points **this** at the global object.
- **foo()** is called with a plain, un-decorated function reference
- If strict mode is on, the global object is not eligible for the default binding, so the this is instead set to undefined.
```
function foo() {
	console.log( this.a );
}

var a = 2;

foo(); // 2

```

### Implicit Binding
- Another rule to consider is: does the call-site have a context object, also referred to as an owning or containing object.
- **foo()** is declared and then later added as a reference property onto 'obj'. Regardless of whether foo() is initially declared on obj, or is added as a reference later (as this snippet shows), in neither case is the function really "owned" or "contained" by the 'obj' object.
- When **foo()** is called, it's preceded by an object reference to 'obj'. When there is a context object for a function reference, the **implicit binding** rule says that it's that object which should be used for the function call's **this** binding.
- 'obj' is the **this** for the foo() call, **this.a** is synonymous with **obj.a**.

```
function foo() {
	console.log( this.a );
}

var obj = {
	a: 2,
	foo: foo
};

obj.foo(); // 2

```

### Implicitly Lost
- One of the most common frustrations that **this** binding creates is when an implicitly bound function loses that binding, which usually means it falls back to the default binding, of either the global object or undefined, depending on strict mode.
- **bar** appears to be a reference to obj.foo, it's just another reference to **foo** itself. The call-site is what matters, and the call-site is bar(), which is a plain, un-decorated call and thus the default binding applies.
```
function foo() {
	console.log( this.a );
}

var obj = {
	a: 2,
	foo: foo
};

var bar = obj.foo; // function reference/alias!

var a = "oops, global"; // `a` also property on global object

bar(); // "oops, global"

```
- Parameter passing is just an implicit assignment, and since we're passing a function, it's an implicit reference assignment, so the end result is the same as the previous snippet.
- if the function you're passing your callback is not your own, its the same.

### Explicit Binding
- In **implicit binding** we have to mutate the object in question to include a reference on itself to the function, and use this property function reference to indirectly (implicitly) bind this to the object.
- "All" functions in the language have some utilities available to them (via their [[Prototype]] -- more on that later) which can be useful for this task.
- Functions have **call(..)** and **apply(..)** methods.
- JavaScript host environments sometimes provide functions which are special enough that do not have such functionality.
- The vast majority of functions provided, and certainly all functions you will create, do have access to **call(..)** and **apply(..)**.
```
function foo() {
	console.log( this.a );
}

var obj = {
	a: 2
};

foo.call( obj ); // 2

```
- Invoking foo with explicit binding by foo.call(..) allows us to force its this to be obj.
- If you pass a simple primitive value (of type string, boolean, or number) as the **this** binding, the primitive value is wrapped in its object-form (new String(..), new Boolean(..), or new Number(..), respectively). This is often referred to as "**boxing**".
- **this** binding, **call(..)** and **apply(..)** are identical. They do behave differently with their additional parameters.
- explicit binding alone still doesn't offer any solution to the issue of a function "losing" its intended this binding, or just having it paved over by a framework, etc.

### Hard Binding
- A variation of explicit binding does address our previous problem.
- We create a function bar() which, manually calls foo.call(obj), thereby forcibly invoking foo with obj binding for this.
- No matter how you later invoke the function bar, it will always manually invoke foo with obj. This binding is both explicit and strong, so we call it hard binding
- The most typical way to wrap a function with a hard binding creates a pass-thru of any arguments passed and any return value received.
```
function foo() {
	console.log( this.a );
}

var obj = {
	a: 2
};

var bar = function() {
	foo.call( obj );
};

bar(); // 2
setTimeout( bar, 100 ); // 2

// `bar` hard binds `foo`'s `this` to `obj`
// so that it cannot be overriden
bar.call( window ); // 2
```
- hard binding is such a common pattern, it's provided with a built-in utility as of ES5: **Function.prototype.bind**
- bind(..) returns a new function that is hard-coded to call the original function with the this context set as you specified.
- With ES6, the hard-bound function produced by bind(..) has a **.name** property that derives from the original target function.
- For example: bar = foo.bind(..) should have a bar.name value of "bound foo", which is the function call name that should show up in a stack trace.
```
function foo(something) {
	console.log( this.a, something );
	return this.a + something;
}

var obj = {
	a: 2
};

var bar = foo.bind( obj );

var b = bar( 3 ); // 2 3
console.log( b ); // 5

```

### 'new' Binding
- In traditional class-oriented languages, "constructors" are special methods attached to classes, that when the class is instantiated with a new operator, the constructor of that class is called.
```
something = newMyClass(..)

```
- JavaScript has a **new** operator, and the code pattern to use it looks basically identical to what we see in those class-oriented languages;
- n JS, constructors are just functions that are called with the **new** operator in front of them. They are not attached to classes, nor are they instantiating a class. They are not a special types of functions.
- When a function is invoked with new in front of it, otherwise known as a constructor call, the following things are done automatically:
1. a brand new object is created (aka, constructed) out of thin air
2. the newly constructed obj is [[Prototype]]-linked
3. the newly constructed object is set as the **this** binding for that function call
4. unless the function returns its own alternate object, the new-invoked function call will automatically return the newly constructed object.

## Everything in Order
-  **explicit** binding takes precedence over implicit binding, which means you should ask first if explicit binding applies before checking for implicit binding.
- **new** binding is more precedent than implicit binding

#### Why is new being able to override hard binding useful?
- The primary reason for this behavior is to create a function (that can be used with new for constructing objects) that essentially ignores the this hard binding but which presets some or all of the function's arguments.
- One of the capabilities of bind(..) is that any arguments passed after the first this binding argument are defaulted as standard arguments to the underlying function (technically called "partial application", which is a subset of "currying").

## Binding Exceptions
- The **this-binding** behavior can in some scenarios be surprising, where you intended a different binding but you end up with binding behavior from the default binding rule.

## Ignored 'This'
- If you pass **null** or **undefined** as a this binding parameter to call, apply, or bind, those values are effectively ignored, and instead the default binding rule applies to the invocation.
- It's common to use **apply(..)** for spreading out arrays of values as parameters to a function call.
- **bind(..)** can curry parameters (pre-set values)
```
function foo(a,b) {
	console.log( "a:" + a + ", b:" + b );
}

// spreading out array as parameters
foo.apply( null, [2, 3] ); // a:2, b:3

// currying with `bind(..)`
var bar = foo.bind( null, 2 );
bar( 3 ); // a:2, b:3

```
- Both these utilities require a this binding for the first parameter. If the functions in question don't care about this, you need a placeholder value, like **null**
- **'...' spread operator** which lets you syntactically "spread out" an array as parameters without needing apply(..).
- "danger" in always using null when you don't care about the this binding. If you ever use that against a function call and that function does make a **this** reference, the default binding rule means it might reference or change the global object (window in the browser).

## Safer 'this'
- A "safer" practice is to pass a specifically set up object for **this** which is guaranteed not to be an object that can create problematic side effects in your program.
- Not only functionally "safer", there's a sort of stylistic benefit to ø, in that it semantically conveys "I want the this to be empty" a little more clearly than null might


## Indirection
- Another thing to be aware of is you can (intentionally or not!) create "indirect references" to functions, and in those cases, when that function reference is invoked, the default binding rule also applies.
```
function foo() {
	console.log( this.a );
}

var a = 2;
var o = { a: 3, foo: foo };
var p = { a: 4 };

o.foo(); // 3
(p.foo = o.foo)(); // 2

```

## Softening Binding
```
if (!Function.prototype.softBind) {
	Function.prototype.softBind = function(obj) {
		var fn = this,
			curried = [].slice.call( arguments, 1 ),
			bound = function bound() {
				return fn.apply(
					(!this ||
						(typeof window !== "undefined" &&
							this === window) ||
						(typeof global !== "undefined" &&
							this === global)
					) ? obj : this,
					curried.concat.apply( curried, arguments )
				);
			};
		bound.prototype = Object.create( fn.prototype );
		return bound;
	};
}
```

## Lexical 'this'
- Arrow-functions are signified not by the function keyword, but by the => so called "fat arrow" operator.
- Instead of using the four standard this rules, arrow-functions adopt the this binding from the enclosing (function or global) scope.
- The arrow-function created in foo() lexically captures whatever foo()s **this** is at call-time.
- The lexical binding of an arrow-function cannot be overridden (even with new)
```
function foo() {
	// return an arrow function
	return (a) => {
		// `this` here is lexically adopted from `foo()`
		console.log( this.a );
	};
}

var obj1 = {
	a: 2
};

var obj2 = {
	a: 3
};

var bar = foo.call( obj1 );
bar.call( obj2 ); // 2, not 3!
```

## Summary
- Determining the this binding for an executing function requires finding the direct call-site of that function.

### four rules can be applied to the call-site, in this order of precedence:
1. Called with new? Use the newly constructed object.
2. Called with call or apply (or bind)? Use the specified object.
3. Called with a context object owning the call? Use that context object.
4. Default: undefined in strict mode, global object otherwise.
- Be careful of accidental/unintentional invoking of the default binding rule.
- Instead of the four standard binding rules, ES6 arrow-functions use lexical scoping for this binding, which means they adopt the **this** binding (whatever it is) from its enclosing function call. They are essentially a syntactic replacement of **self = this** in pre-ES6 coding.
