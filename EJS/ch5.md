# Higher-Order functions
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

- 2nd is more likely to be correct because summing a range of numvers isn't about loops and counters. its about ranges and sums

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
