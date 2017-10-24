# Program Structure

# Expressions and Statements
- Fragments of Code that produce a value is called an expression.
- An expression between parentheses is also an expression, as is a binary operator applied to two expressions or a unary operator.
- If an expression corresponds to a sentence fragment, a JS statement corresponds to a full sentence.
- An expression can be content to just produce a value, which can then be used by the enclosing expression.
- Every statement thats needs a semi colon gets terminated by one.

# Variables
- To catch and hold variables JS uses a thing called variables.
- The special keyword "var", creates a variable.
- After a Variable has been defined, its name can be used as an expression.
- Variable Names can be anything that is not a "reserved word". They may not include spaces, and cannot start with a digit, or have any punctuation except for $ or an underscore
- When a var points to a value it is not tied to that value forever. The = operator can be used at any time on existing variables to disconnect from their current value and point them to a new one.
- More like tentacles rather than boxes. They do not contain values but rather grasp them.
- Two variables can refer to the same value. A program can only access the values that it still has a gold on.

# Keywords and Reserved Words
- These words cannot be used as var names.
````
break case catch class const continue debugger
default delete do else enum export extends false
finally for function if implements import in
instanceof interface let new null package private
protected public return static super switch this
throw true try typeof var void while with yield
````

# The Environment
- The Collection of Vars and their values that exist at a given time is called the Environment.
- When a program starts up, this environment is not empty. It always contains variables that are part of the language standard.

# Functions
- A lot of values provided in the default environment have the type function.
- A function is a piece of program wrapped in a value. Such values can be applied in order to run a wrapped program.
- Executing a function is called invoking, calling, or applying it.
- You can call a function by putting () after an expression that produces a function value.

# Return Values
- Showing a Dialog Box or Writing Text to the screen is a side effect.
- A lot of functions are useful because of the side effects they produce. They may also produce values.
- When a function produces a value it is said to return that value.

# Control Flow
- When a program contains more than one statement, they are executed from top to bottom.

# Conditional Execution
- In JS conditional execution is written with "if"
- The keyword "if" executes or skips a statement depending on the value of a Boolean Expression

# While and Do Loops
- Looping Control flow allows us to go back to some point in the program, and repeat it with our current program state.
- Many JS programs wrap every single loop or "if" body in braces.
- Breaking a Loop, other than having a condition produce false, a Loop can be broken with "break" statement.

# Indentation
- Not needed, but makes code cleaner and easier to read.

# Switch
- A construct that is intended to solve such a dispatch.
````
if (variable == "value1") action1();
else if (variable == "value2") action2();
else if (variable == "value3") action3();
else defaultAction();
````

````
switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}
````
