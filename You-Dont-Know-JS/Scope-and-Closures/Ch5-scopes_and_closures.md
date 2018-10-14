# Scope Closure
- Closures are a result of writing code that relies on lexical scope. You do not even really have to intentionally create closures to take advantage of them.
- Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.

## Breakdown of Closure
-  Function bar() has access to the variable a in the outer enclosing scope because of lexical scope look-up rules.
- **bar()** referencing **a** is via lexical scope look-up rules, and those rules are only part of what closure is.
- **closure defined in this way is not directly observable**
```
function foo() {
	var a = 2;

	function bar() {
		console.log( a ); // 2
	}

	bar();
}

foo();

```
# Closure Example
- **bar()** has lexical scope access to the inner scope of **foo()**. When we pass **bar()** a value, we return the function object itself that **bar** references.
- After foo() is executed, the return value from **bar()** is assigned to the **var baz**
- Closure prevents foo() from going into the Garbage Collector.
- The inner scope is in still "in use", and does not go away. The function bar() itself is still using it.
- bar() has a lexical scope closure over that inner scope of foo(), which keeps that scope alive for bar() to reference at any later time.
- **bar() still has a reference to that scope, and that reference is called closure**.
- Closure lets the function continue to access the lexical scope it was defined in at author-time.

```
function foo() {
	var a = 2;

	function bar() {
		console.log( a );
	}

	return bar;
}

var baz = foo();

baz(); // 2 -- Whoa, closure was just observed, man.

```
- Whenever and wherever you treat functions (which access their own respective lexical scopes) as first-class values and pass them around, you are likely to see those functions exercising closure.
- An IIFE is not itself an example of closure, it creates scope, and it's one of the most common tools we use to create scope which can be closed over. So IIFEs are related to closure, but don't exercise closure themselves.

## Loops and Closures
- Our loops terminates at 6(i<=5). We are not grabbing **i** at each iteration, but **i** at its final iteration, since the loop finishes before our timeout.
- All 5 of those functions, though defined separately in each loop iteration, all are closed over the same shared global scope, which has only one **i** in it. In order to have the code run as intended, we need more **Closure**
```
for (var i=1; i<=5; i++) {
	setTimeout( function timer(){
		console.log( i );
	}, i*1000 );
}
```
- It's not enough to have a scope to close over if that scope is empty.
- It needs its own variable, a copy of the i value at each iteration.
```
for (var i=1; i<=5; i++) {
	(function(){
		var j = i;
		setTimeout( function timer(){
			console.log( j );
		}, j*1000 );
	})();
}

```

## Block Scoping Revisited
- **let** essentially turns a block into a scope that we can close over.
- There's a special behavior defined for **let declarations** used in the head of a for-loop.The variable will be declared not just once for the loop, but each iteration. It be initialized at each subsequent iteration with the value from the end of the previous iteration.
```
for (var i=1; i<=5; i++) {
	let j = i;
	setTimeout( function timer(){
		console.log( j );
	}, j*1000 );
}

```

## Modules
- There is no observable closure.
- We have private data vars - **something** and **another**, and inner functions - **doSomething()** and **doAnother()**
```
function foo() {
	var something = "cool";
	var another = [1, 2, 3];

	function doSomething() {
		console.log( something );
	}

	function doAnother() {
		console.log( another.join( " ! " ) );
	}
}

```

### Module Example
- This is the pattern in JavaScript we call **module**.
- CoolModule() is a function, and has to invoked for there to be a module instance. Without execution the inner scope and closures do not occur.
- CoolModule() returns an object, the object has references to our inner functions, but not our inner data vars.
- **doSomething()** and **doAnother()** have closure over the inner scope of the module instance. When we move those functions outside the lexical scope, we create a condition where closure can be seen and used.
- Two requirements for the module pattern to be used:
1. There must be an outer enclosing function, and it must be invoked at least once (each time creates a new module instance).
2. The enclosing function must return back at least one inner function, so that this inner function has closure over the private scope, and can access and/or modify that private state.
- An object with a function property on it alone is not a module. An object which is returned from a function invocation which only has data properties on it and no closured functions is nota module.
```
function CoolModule() {
	var something = "cool";
	var another = [1, 2, 3];

	function doSomething() {
		console.log( something );
	}

	function doAnother() {
		console.log( another.join( " ! " ) );
	}

	return {
		doSomething: doSomething,
		doAnother: doAnother
	};
}

var foo = CoolModule();

foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3

```
- Modules are just functions, so they can receive parameters
- By retaining an inner reference to the public API object inside your module instance, you can modify that module instance from the inside, including adding and removing methods, properties, and changing their values.
```
var foo = (function CoolModule(id) {
	function change() {
		// modifying the public API
		publicAPI.identify = identify2;
	}

	function identify1() {
		console.log( id );
	}

	function identify2() {
		console.log( id.toUpperCase() );
	}

	var publicAPI = {
		change: change,
		identify: identify1
	};

	return publicAPI;
})( "foo module" );

foo.identify(); // foo module
foo.change();
foo.identify(); // FOO MODULE
```

## Modern Modules
- Modules[name] = impl.apply(impl, deps). This invokes the definition wrapper function for a module (passing in any dependencies), and storing the return value, the module's API, into an internal list of modules tracked by name.
```
var MyModules = (function Manager() {
	var modules = {};

	function define(name, deps, impl) {
		for (var i=0; i<deps.length; i++) {
			deps[i] = modules[deps[i]];
		}
		modules[name] = impl.apply( impl, deps );
	}

	function get(name) {
		return modules[name];
	}

	return {
		define: define,
		get: get
	};
})();

```


## Future Modules
- ES6 adds first-class syntax support for the concept of modules. When loaded via the module system, ES6 treats a file as a separate module.
- Each module can both import other modules or specific API members, as well export their own public API members.
- ES6 Module APIs are **static** (the APIs don't change at run-time).
- ES6 modules **do not** have an "inline" format, they must be defined in separate files (one per module).

### bar.js
```
function hello(who) {
	return "Let me introduce: " + who;
}

export hello;
```

### foo.js
```
// import only `hello()` from the "bar" module
import hello from "bar";

var hungry = "hippo";

function awesome() {
	console.log(
		hello( hungry ).toUpperCase()
	);
}

export awesome;

```

### imports
- **import** imports one or more members from a module's API into the current scope, each to a bound variable (hello in our case).
- Module imports an entire module API to a bound variable (foo, bar in our case). export exports an identifier (variable, function) to the public API for the current module.
- These operators can be used as many times in a module's definition as is necessary.
- The contents inside the module file are treated as if enclosed in a scope closure, just like with the function-closure modules seen earlier.
```
// import the entire "foo" and "bar" modules
module foo from "foo";
module bar from "bar";

console.log(
	bar.hello( "rhino" )
); // Let me introduce: rhino

foo.awesome(); // LET ME INTRODUCE: HIPPO
```

## Summary
- **Closure is when a function can remember and access its lexical scope even when it's invoked outside its lexical scope**.
- Modules require two key characteristics:
1. an outer wrapping function being invoked, to create the enclosing scope.
2. the return value of the wrapping function must have a reference to at least one inner function that has closure over the inner scope of the wrapper.
