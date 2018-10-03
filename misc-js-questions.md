# Standard JS Questions:

## 1. Explain javascript closures
- When JS code is run. the environment where it is executed is important.
- It's one of the following:
-  **Global(The default environment where your code is executed for the first time.)**.
- **Function code(Whenever the flow of execution enters a function body.)**
- We start in the global execution context. When the program calls a function:
- 1. JavaScript creates a new execution context, a local execution context
- 2. That local execution context will have its own set of variables, these variables will be local to that execution context.
- 3. The new execution context is thrown onto the execution stack. Think of the execution stack as a mechanism to keep track of where the program is in its execution
- A function ends when it encounters a **return statement** or **encounters a closing bracket }**
- On function end: Local execution pops off the stack execution.
- Then the functions sends the return value back to the calling context. The **calling context is the execution context that called this function, it could be the global execution context or another local execution context.**
- The calling execution context deals with the return value at that point. An object, an array, a function, a boolean, anything really. If there is no return statement, undefined is returned.
- The local execution context is destroyed after. All vars declared within the local execution context are erased.
-  If JS can’t find a variable in its local execution context, it will look for it in its calling context. And if not found there in its calling context. Repeatedly, until it is looking in the global execution context. (And if it does not find it there, it’s undefined)


```
1: function createCounter() {
2:   let counter = 0
3:   const myFunction = function() {
4:     counter = counter + 1
5:     return counter
6:   }
7:   return myFunction
8: }
9: const increment = createCounter()
10: const c1 = increment()
11: const c2 = increment()
12: const c3 = increment()
13: console.log('example increment', c1, c2, c3)

```

#### TL;DR: The key to remember is that when a function gets declared, it contains a function definition and a closure. The closure is a collection of all the variables in scope at the time of creation of the function.

## 2. Explain event bubbling
- Event Bubbling is the event starts from the deepest element or target element to its parents,
then all its ancestors which are on the way to bottom to top.
- all the modern browsers have event bubbling as the default way of event flow

## 3. Explain event delegation

## 4. What does apply() do
- Apply invokes the function immediately.
- apply() takes an array as its second argument and passes the members of that array as arguments

## 5. What does bind() do
- Use .Bind() when you want that function to later be called with a certain context, useful in events.
- it returns a function that is bound to the argument you pass to it when called.

## 6. Explain what the JS map function does. provide an example
- enumerates through each element in an array. arr = [1,2,3]
```
arr.map(x => x^2)

```

## 7. What is strict mode?

## 8. Whats the difference between a promise and a callback


# General/Presentation Layer Questions:

## What is a model in mvc

## Explain css specificity

## How do you centre something horizontally

## Explain what media queries are

## What are the pros and cons of a single page app

## How could you improve performance of a single page app

## Whats the difference between inline-block and inline

## How would you develop a mobile site for a website that didn’t already have one

## What is jsonp

## What is a doctype

## On a unix command line how would you run a long command you typed out already an hour ago

## What frontend tools do you normally use

## Where do you think ui’s are heading

## What motivates you, how do you learn


# Misc JS Challenge Questions

## Write a function that takes an integer and returns it doubled
```
function doubleInteger(i) {
    return i^2
}

```

## Write a function that takes a number and returns true if it's even and false if not
```
function isNumberEven(i) {
    if(i % 2 === 0){
      return True
    } else {
      return False
    }
}

```

## Write a function that returns a file extension
```

function getFileExtension(i) {

    // i will be a string, but it may not have a file extension.
    // return the file extension (with no period) if it has one, otherwise false

}

```

## What will be printed on the console? Why?
- **5**
```
(function() {
   var a = b = 5;
})();
console.log(b);

```

## Define a repeatify function on the String object. The function accepts an integer that specifies how many times the string has to be repeated. The function returns the string repeated the number of times specified.
```
console.log('hello'.repeatify(3));
//Should print hellohellohello.
```

## What will log out here
```
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}
test();

```
## 2nd Log Check
- Fix the question’s issue so that the last console.log() prints Aurelio De Rosa.

```
var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());

```

## The following recursive code will cause a stack overflow if the array list is too large. How can you fix this and still retain the recursive pattern?


## Alert check
```
var a = 'value';

(function() {
  alert(a);
  var a = 'value2';
})();

```

## The following code will output "my name is rex, Woof!" and then "my name is, Woof!" one second later, fix it so prints correctly the second time
```
var Dog = function (name) {
  this.name = name;
};

Dog.prototype.bark = function () {
  console.log('my name is '+ this.name + ', Woof!');
}

var rex = new Dog('rex');

rex.bark();

setTimeout(rex.bark, 1000);

```

## The following code outputs 100, a hundred times, fix it so it outputs every number with a 100ms delay between each
```
for (var i = 0; i < 100; ++i) {
  setTimeout(function() {
    console.log(i);
  }, 100);
}

```

## The following code is outputting the array but it's filled with every number, we just want the even numbers, what's gone wrong?
```
var evenNumbers = []

var findEvenNumbers = function (i) {
  if (i % 2 === 0)
    console.log(i, 'is an even number, adding to array!');
    evenNumbers.push(i);
}

for (var i = 0; i < 10; i++) {
  findEvenNumbers(i);
}

console.log(evenNumbers);
//outputs:
//0 "is an even number, adding to array!"
//2 "is an even number, adding to array!"
//4 "is an even number, adding to array!"
//6 "is an even number, adding to array!"
//8 "is an even number, adding to array!"
//[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

```

## The following is outputting 0, but if 42 = 16 and 22 = 4 then the result should be 12


```
var square = function (number) {
  result = number * number;
  return result;
}

result = square(4);
result2 = square(2);
difference = result - result2;

console.log(difference);

```

## Write a function that when passed an array of numbers it gives you the max difference between the largest and smallest number ONLY if the small number is in front of the large number, not behind it, so for example: [3,4,8,1] = 5, notice how the biggest difference is between 8 and 1, but because the 1 is after the 8 in the array it shouldn't count, so really the biggest gap is the 3 and the 8.
