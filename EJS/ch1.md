# Numbers
- JS uses a fixed number of bits "64", to store a single number value.
- Fractional Numbers are written by using a dot.
- Scientific Notation via "e"

# Arithmetic Operators
- PEMDAS

# Special Numbers
- Infinity & -Infinity. Infinity - 1 is still Infinity.
- NaN(Not a Number) The Result of any Arithmetic Operation that doesn't yield a meaningful result.

# Strings
- Represent Text and are enclosed by Single or Double Quotes.
- Newlines cannot be put in quotes, strings have to stay on a single line
- You can escape certain characters using a backslash(\).
- When a n appears after a backslash(\n) its interpreted as a newline (\t) is a new tab.
- You can use another backslash to escape a backslash(\\).
- Strings cannot be divided, multiplied, or subtracted.
- They can be concatenated though via the "+" operator.

# Unary Operators
- Not all operators are symbols.
- Operators that use two values are called Binary Operators, while those that take only one are Unary Operators.
- The Minus Operator can be used as both a Binary and Unary Operator.

# Boolean values
- Two Values Only - True or False
- Strings can be compared based on Unicode Standard.
- Only One Value in JS that is not equal to itself - NaN

# Logical Operators
- && is a Binary Operator and Represents Logical "and"
- ! is a Unary Operator and flips the value of the given value.
- || is "or"
- Low to High Precedence - || -> && -> Comparison Ops(<, >, ==)
- Ternary Operators, console.log( true ? 1 : 2); -> 1
- Also called a Conditional Operator. The value left of the question mark "picks" what other two values will come out. When true the middle is chosen, when false, the value on the right is chosen.

# Undefined values
- Null and Undefined are used to denote the absence of a meaningful value.
- Null means an assigned Value of Null
- Undefined, no value has been assigned

# JS Type Conversion
- If an operator is applied to the "wrong" type of value, JS will try to convert that value to the type it wants, based on a set of rules. This is called "type coercion"
- 0, "", NaN, are always False.
- Type Coercion does not occur with === or !==

# Short-Circuiting of Logical Operators
- || and && convert the value on the left side to a Boolean type in order to decide what to do.
- This functionality allows it to fall back to a default value.
- The expression to their right is evaluted only when needed. This is called short-circuit evalution.
