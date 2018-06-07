# Prototypal OO
- Prototypal Inheritance, Objects without classes, prototype delegation, aka OLOO (Objects linking to other Objects)
- Functional Programming - Enabled by lambdas with closure

# We're constructing a Mess.
- Constructors violate the open/closed principle because they couple all callers to the details of how your objects get instantiated.
- If you return an arbitrary object from a constructor function, it will break your prototype links, and the 'this' keyword will no longer be bound to the new object instance in the constructor.
- Constructors that aren't running in strict mode can be dangerous. If a caller forgets 'new' and you're not using strict mode or ES6 classes, anything you assign to 'this' will pollute the global namespace.
- In JavaScript, factory functions are constructor functions minus the 'new' requirement, global pollution danger and awkward limitations.
- JavaScript doesn't need constructor functions because any function can return a new object. With dynamic object extension, object literals and 'Object.create()'.

# Welcome to the Seventh Circle of Hell
- Classical Inheritance generally lets you inherit only from a single ancestor, forcing you into awkward taxonomies. If you're making the game Clue and start will two classes: Tool and Weapon you've already messed up and can't make the game.

# The Tight Coupling Problem
- Coupling between a child class and its parent is the tightest form of coupling in OO design, which is the opposite of reusable, modular code.
- Making small changes to a class creates rippling side-effects that breaks things.

# The Duplication by Necessity Problem
- The solution to taxonomy problems is to go back in time, build up new classes with subtle differences by changing up what inherits from what, but its too tightly coupled to properly extract and refactor. You end up duplicating code instead of reusing and violating Don't Repeat Yourself
- You can keep growing your subtly different jungle of classes, and as you add inheritance levels, your classes get more and more arthritic and brittle.
- Fixing a bug in one place, you fix it everywhere
- ES6 classes don't fix any of these problems, ES6 makes them worse.
- The 'class' keyword is not the most harmful feature in JavaScript.

# The Fallout
- These problems have a multiplying effect as your app grows.

# Step into the Light
- You never need Classes in JavaScript.
- The seminal work on classical OO design is anti-class Inheritance

# Good Code is Simple
## Removing constructors and classical inheritance out of JavaScript it becomes:
- Simpler(easier to read and write), and no more wrong design taxonomies
- More flexible(switch from new instances to recycling object pools or proxies)
- Gets more powerful and expressive(Inherit from multiple ancestors or from private state)

# The Better Option
- Code is the Tool. The program is the product.
- Your code is not a self expression of yourself. Good programming style requires you to pick the simpler, flexible and cleaner option.
- Like objects, closures are a mechanism for containing state. In JavaScript, a closure is created whenever a function accesses a variable defined outside the immediate function scope.

```
var counter = function counter() {
  var count = 0;
  return {
    getCount: function getCount() {
      return count;
    },
    increment: function increment() {
      count += 1;
    }
  };
};
```

# Functional Programming
- JavaScript makes it easy to assign functions to variables. pass them into other functions, return functions from other functions, compose functions, and so on.
- JavaScript also offers immutable values for primitive types, and features that make it easy to return new objects and arrays rather than manipulate properties of those that are passed as args.
- Functional Programming, programs are built mostly with a handful of very small, very reusable, very predictable pure functions.
- Pure functions have very few properties that make them extremely reusable and useful in a variety of applications.
- Idempotence: Given the same inputs, a pure function will always return the same output regardless of the number of times the function is called.
- Idempotence is an important feature for building RESTful web services, but also serves the very useful purpose of separating computation from dependency on both time and order of operations.
- Valuable for parallel and distributed computations, because of Idempotence, pure functions are a good fit for continuous data sets.

# Free from Side Effects
- Pure functions can be safely applied with no side-effects, meaning they do not mutate any shared state or mutable arguments, and other than their return value, they don't produce any observable output, including thrown exceptions, triggered events, I/O devices, etc...
- Pure functions are much less likely to conflict with each other or cause bugs in unrelated parts of the program.
- Pure functions produce stronger guarantees of encapsulation than objects without function purity, providing the same benefits as encapsulation in OOP

# Working in Functional Programming
-  Functional Programming has functions are that reusable. Haskell examples below

1. List utilities:
⋅⋅* head() — get first element
⋅⋅* tail() — get all but first elements
⋅⋅* last() — get last element
⋅⋅* length() — count of elements

2. Predicates / comparators (test an element, return boolean)
⋅⋅* equal()
⋅⋅* greaterThan()
⋅⋅* lessThan()

3. List transformations:
⋅⋅* map() ([x]) -> [y] take list x and apply a transformation to each element in that list, return new list y
⋅⋅* reverse() ([1, 2, 3]) -> [3, 2, 1]

4. List searches:
⋅⋅* find() ([x]) -> x take list x and return first element that matches a predicate
⋅⋅* filter() ([x]) -> [y] take list x and return all items matching predicate

5. List Reducers / folds:
⋅⋅* reduce() — ([x], function[, accumulator]) -> apply function to each element and accumulate the results as a single value
⋅⋅* any() — true if any values match predicate
⋅⋅* all() — true if all values match predicate
⋅⋅* sum() — total of all values
⋅⋅* product() — product of all values
⋅⋅* maximum() — highest value
⋅⋅* minimum() — lowest value
⋅⋅* concat() — take a list of lists and return a single, concatenated list in list order
⋅⋅* merge() — take a list of lists and return a single, merged list in element order

6. Iterators / Generators / Collectors (infinite lists)
⋅⋅* sample() — return current value of continuous input source (temperature, form input, toggle switch state, etc…)
⋅⋅* repeat() — (1) -> [1, 1, 1, 1, 1, 1,…]
⋅⋅* cycle() / loop() — When the end of the list is reached, wrap around to the beginning again.

# List as a Generic Interface
- You can view everything as a List. An element of a List, predicate used to test list values. Transformations based on list values.
- Generics are functions that are capable of working on a range of different data types. In JavaScript, many functions operate on collections are generic.
- The process of changing a function only works with a single type to one with many types is called 'lifting'.

# How to Stop Micro Managing Everything
- In OO and imperative programming, we micomanage everything. Reactive programming uses functional utilities like map, filter, and reduce to create and process data flows which propogates changes through the system: hence reactive.
- In OO, you might set up an object and turn that object into an event emitter and set up an event listener.
- When using reactive programming, you instead specify data dependencies in a more declarative fashion, and most of the heavy lifting is offloaded to a standard functional utilities.
- Every List is a stream: an array is a stream of values in element order. A form input can be a stream of values sampled with each change. A button is a stream of clicks.
- In reactive extensions nomenclature, you create observable streams and then process those streams using a set of functional utilities like the ones described above.
- Similar to Node streams, observables can feature optional shared 'backpressure'. Like generators your program can consume observable value at its own pace.
- You could collect a list of lists, merge them in the order they’re received, and then use any combination of the utility functions above to process them.
```
var messages = merge(twitter, fb, gplus, github)
messages.map(normalize) // convert to single message format
  .filter(selectHashtag) // cherry pick messages that use the tag
  .pipe(process.stdout) // stream output to stdout
```

# Better Async
- A promise is an object that provides a standard interface for dealing with values that may or not be available at the time the promise is used.
- A promise wraps a potential value that may be resolved in the future.
- A function call typically will return a promise that may resolve with some future value
```
fetchFutureStockPrices().then(becomeRich);

```
- .then() will only be called when stock prices become available, so when becomeRich runs the "future" prices are just the present ones.
- A promise is a stream that only emits a single value (or rejection).
- Observables can replace promises in your code and provide all of the standard functional utilities.
