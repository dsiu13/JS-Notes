# Data Structures: Objects and Arrays
- Numbers, Booleans, and Strings are how Data Structures are built.
- Objects allow us to group values, including other objects allowing for more complex structures.

# Data Sets
- We can use a string to represent machine memory, since strings can be any length.
- Instead the data type Array is specifically used for storing sequences of values.
- listofNums[0] -> Grabs 1st Element in Array

# Properties
- Almost all JS values have Properties
- Most common way to access these Properties are value.x or value[x]
- value.x fetches the property of value named "x". While value[x] tries to evaluate the expression x and uses the result as the property name.
- Elements in an Array are stored in Properties.

# Methods
- Both String and Array Objects contain a number of properties that refer to function values.
- Properties that contain functions are generally called "methods" of the value they belong to.

# Objects
- Values of the type Object are arbitrary collections of properties, that can be added or removed.

````
var day1 = {
  weresquirrel: false,
  events:["job", "tv", "gym", "pizza"]
};
````

- Curly Braces {} have two meanings in Javascript. At the start of a statement they start a block of statements. In any other position they describe an object.
- It is almost never useful to start a statement with a curly-brace obj.
- In typical programs there is no ambiguity between the two.
- Property Bindings, are similar to variable bindings. They grasp values, but other variables and properties might be holding onto the same values.
- Delete Operator is a unary operator that when applied to a property access expression will remove the named prop from the obj.
- the Binary In Operator returns a Boolean value that indicates whether the obj has the desired property.
- The difference between setting a property to undef vs deleting it is that in setting to undef the obj still has the the property. With deletion the obj will no longer have the prop and will return false.

# Mutability
- Obj Values can be modified. Numbers, Strings, Booleans are all Immutable - it is impossible to change an existing value of those types.
- You can combine them and derive new values from them, but when you take a specific string value that value will always be the same.
- Obj content can be modified by changing its properties.

# Objects as Maps
- A Map is a way to go from values in one domain to corresponding values in another domain.

# The Argument Object
- Whenever a function is called, a special var named "arguments" is added to the environment.
- Some functions can take any number of arguments. These typically loop over the values in the argument obj.

# The Global Object
- The Space in which global variables live. Each global var is present as a property of this object.
