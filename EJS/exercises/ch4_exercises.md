# The Sum of a Range
- Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
- Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.

````
function rangeOne(x,y){
    var numArray = [];
    for(i=x; i <= y; i++){
     numArray.push(i)
    }
    console.log(numArray)
}
rangeOne(1,10)
````
