# Functions

# Defining a Functions
- A function definition is just a regular variable definition where the value given to the variable happens to be a function.
- For Example
````
var square = function(x) {
  return x * x;
}
````
- A function is created by an expression that starts with the keyword function.
- Function have a set of parameters, and a body, which contain the statement that is to be executed when a function is called. The function body is always wrapped in {}.
- A function can have multiple paras or none at all.
- A return statement comes across such a statement it immediately jumps out of the current function and gives the return value to the code that called the function. Calling return without an expression returns Undefined.

# Parameters and Scopes
- Parameters to a function behave like regular variables, but their initial values are given by the "caller" of the function, not the code in the function.
- Variables and Parameters are "local" to the function. This only applies to the parameters to variables declared with the var keyword inside the function body.
- Variables created outside the function body are "global". It is possible to access these variables within a function body as long as a local variable with the same name has not been declared.

# Nested Scopes
- JS distinguishes not just between global and local variables.
- Functions can be created within other functions, producing degrees of locality.
- Functions are the only things that create a new scope. You can use free-standing blocks

# Functions as values
- Function Variables simply act as names for a specific piece of the program.
- A function value can do all the things other values can do, it is possible to store a function in a new place, pass it as an argument. A variable that holds a function can be assigned a new value.

# Declaration Notation
- Instead of using the var keyword, the function keyword can be used.

# The Call Stack
- Because a function has to jump back to the place of the call when it returns, the comp must remember the context from which the function is called. This is the "call stack".
- Storing this stack requires space in memory. When the stack grows too big, the computer will fail or "blow the stack".

# Optional Arguments
- If you pass too may, any extra arguments are ignored in JS.
- The downside is that you can acciently pass the wrong number and will not know.
- The upside is that you can use this to have a function take "optional arguments".

# Closures
- Being able to reference a specific instance of local variables in an enclosing function is called a "closure".
