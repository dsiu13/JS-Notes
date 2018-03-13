# Flattening
- Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
## Starter Code
````
let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]
````

````
let arrays = [[1, 2, 3], [4, 5], [6]];

var concatArray = arrays[0].concat(arrays[1], arrays[2])
console.log(concatArray)

function reduce(array, combine, start) {
  
}
````
