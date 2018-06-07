# JS Questions: Conceptual

1. How is JS different from other languages?
- Loosely typed, defined variables don't need a type declared. i.e boolean, string, num
- JS automatically assigns type and type conversion can occur.

2. JS timers and limits of timers.
- Timers can execute functions after a certain of time or repeat at given intervals.
- setTimeout(func, delay) or setInterval(func,delay)
- Timer events run in a single thread, so multiple timers may cause problems for other timers.

3. Virtual destructor in JS
- JS doesn't have a destructor. There is no function to 'free' objs.
- It uses a garbage collector that runs at regular intervals.

4. Are scope and context the same?
- Scope is the lifetime or access of a variable when a function is invoked.
- Context is related to the object. Context is the value of 'this' keyword that the obj owns during execution.

5. JS interaction with html or the DOM.
- JS can change html or DOM elements. As well as html attributes, styles, or even in data validation from forms.

# JS Questions: Syntax

1. "===" is there such a thing?
- "==" checks for equality in value only and does not care about type.
- "===" checks for equality in both value and type.

2. 'this' keyword
- It is used to reference the object that currently owns the code you are in.

3. Write two ways in which a var can be assigned to an empty obj.
```
var a = new Object();
var b = {};
```

# JS Questions: Programs

1. Given the below code, what line of JavaScript would allow icecream.getFlavor to return the value of foo.color, without using the word “icecream”?

```
var icecream= {
    flavor: "vanilla",
    getFlavor : function(){
      //make this function return icecream.flavor
      //without using the word: "icecream"
    }
  }
```

- Use return this.flavor

2. Implement the Fibonacci number calculator in JavaScript. Take a number as input from the user, and then print out the Fibonacci value for that number.

```
// With loops
var looping = function(n) {
   var a = 0, b = 1, f = 1;
   for(var i = 2; i <= n; i++) {
       f = a + b;
       a = b;
       b = f;
   }
   return f;
};

        // With Recursion
var recursive = function(n) {
   if(n <= 2) {
       return 1;
   } else {
       return this.recursive(n - 1) + this.recursive(n - 2);
   }
};

```

## It should execute in the fastest way possible
```
var array = ['0', '1', '1', '2', '3', '5', '8', '13', '21', '34', '55', '89', '144', /* etc*/];
var fibonacci = function (n) {
    return array[n];
};
console.log(fibonacci(10));

```
