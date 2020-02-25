#Associative Arrays

- In javascript you can define your own object.
- You can assign methods and properties, pre-written or self-defined.
- Methods are things that are something. When you call them object.methodName(). The function invokes.
- Properties are things that are something. They have a value. A number, string, or boolean. object.property, you get or set this value.
- In JS, objects are also Associative arrays. The property.
- We can call theStatus.Home or theStatus["Home"]
```
let theStatus = new Object

let theStatus = {};

theStatus.Home = "normal"

theStatus.Home

theStatus["Home"]

```
- You can access each property by entering the name of the property as a string.
- Key Value pairs. JS automatically creates a associative array for each object.

#Loops
```
var x = [the array];
for (var i = 0; i<x.length; i++) {
  do something with x[i]
};

```

#Hash Tables
- Hash tables are a way to implement the map data structure
- The average time for lookups are not tied to the number of elements
- O(n) for Space. 0(1) for Search, Insert, and Delete
- A key is run through a hash function. The function maps strings to numbers. The number corresponds to numbers in an array.
- A hash function needs to consistent. It should always give the same number. It should map diff words to diff numbers
- If two words get mapped to the same number this is a collision.
- You can store both values in the same number to avoid them. Then iterate through it to find the key
```


```
