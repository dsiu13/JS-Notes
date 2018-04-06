# Higher-Order Functions
- Two ways of constructing a software design: simple or complex

````
let total = 0, count = 1;
while(count <= 10){
  total += count;
  count += 1;
}

console.log(total);
````

````
console.log(sum(range(1,10)));
````

- 2nd is more likely to be correct because summing a range of numbers isn't about loops and counters. its about ranges and sums

# Abstraction
- These kinds of vocabularies are usually called "abstraction"
- "Abstraction" hide details and give us the ability to talk about problems at a higher or more abstract level

# Abstracting Repetition
- Plain functions are a good way to build abstraction, sometimes they fall short
- It is common to do something a given number of times. You can write a "for loop"
- Can we abstract doing something n times as a function?, if we want to do something else we can pass our action as a function value
````
for (let i = 0; i < 10; i++){
  console.log(i);
}

function repeat(n, action){
  for (let i = 0; i < n; i++){
    action(i)
  }
}

repeat(3, console.log);
````
- This is structured like a for loop. Describes the kind of loop and then gives a body. The body is written as a function value.
````
let labels = [];
repeat(5, i => {
  labels.push('Unit ${i + 1}');
  });
  console.log(labels);

````

# Higher-Order Functions
- Functions that operate on other functions either by taking them as arguments or by returning them are called Higher Order Functions.
- Higher-Order functions allow us to abstract over actions, not just values.

````
function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true
````

# Function that changes other Functions

````
function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}
noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1
````

# Function new type of control flow
````
function unless(test, then) {
  if (!test) then();
}

repeat(3, n => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});
// → 0 is even
// → 2 is even
````

# Script Data Set
````
{
  name: "Coptic",
  ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
  direction: "ltr",
  year: -200,
  living: false,
  link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
}
````
- the object tells you the name, & unicode char ranges.
- The ranges prop contains an array of unicode char ranges with a lower and upper bound.

# Filtering Arrays
````
function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

console.log(filter(SCRIPTS, script => script.living));
// → [{name: "Adlam", …}, …]
````
- Function uses argument named "test", a function value to fill a "gap" in the computation
- The filter function builds a new array with only elements that pass the test instead of deleting them. This function is "Pure", it does not modify the given array.

# Transforming with Maps
- We have an array of objects representing scripts, produced by filtering the SCRIPTS array somehow.
- The MAP method transforms an array by applying a function to all of its elements and building a new array from the return values.

````
function map(array, transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}

let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
console.log(map(rtlScripts, s => s.name));
// → ["Adlam", "Arabic", "Imperial Aramaic", …]
````

# Summarzing with Reduce
- Reduce sometimes called fold, it builds a value by repeatedly taking a single element from the array and combining it with the previous value.
- The parameters for reduce are a combining function and a start value.
````
function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
// → 10
````
- the standard array method reduce, if your array contains at least one element you are allowed to leave off the "start" arg. The method will take the first element of the array as its start value and start reducing at the second.

- reduce twice to find the script with the most chars
````
function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}

console.log(SCRIPTS.reduce((a, b) => {
  return characterCount(a) < characterCount(b) ? b : a;
}));
// → {name: "Han", …}
````
- the characterCount function reduces the ranges assigned to a script by summing their sizes.

# Composability
- An example without higher-order functions
````
let biggest = null;
for (let script of SCRIPTS) {
  if (biggest == null ||
      characterCount(biggest) < characterCount(script)) {
    biggest = script;
  }
}
console.log(biggest);
// → {name: "Han", …}
````

- Higher-Order functions start to shine when you need to compose operations.
````
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

console.log(Math.round(average(
  SCRIPTS.filter(s => s.living).map(s => s.year))));
// → 1185
console.log(Math.round(average(
  SCRIPTS.filter(s => !s.living).map(s => s.year))));
// → 209
````

# Strings and character codes
- charCodeAt - gives you a code unit, not a full character code.
- codePointAt - does give a full Unicode character
- if you have a char, you can use codePointAt(0) to get its code

# Recognizing Text
- countBy function expects a collection, and a grouping function. it returns an array of objects, each of which names a group and tells you the number of elements within the group.
- findIndex, it finds the first value for which the given function returns true. Returns -1 when no element is found.


# Summary
- Being able to pass function values is useful in Javascript. It allows us to write functions that model computations with "gaps". Code that calls these functions can fill in the gaps with function values.
- Arrays provide a number of useful higher-order methods. You can use forEach to loop over the elements in an array.
- Filter returns a new array containing only elements that pass the predicate function.
- Transforming an array by putting each element through a function is done via "Map".
- You can reduce to combine all the elements in an array in to a single value.
- The some method tests whether any element matches a given predicate function.
- findIndex finds the position of the first element that matches a predicate
