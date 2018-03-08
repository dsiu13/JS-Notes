# The Sum of a Range
- Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
- Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.
- As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior.

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

````
function rangeSum(x,y){
    var numArray = [];
    for(i=x; i <= y; i++){
     numArray.push(i)
    }
    console.log(numArray)
    var sum = 0;
    for(i=0; i <= numArray.length; i++){
      sum += numArray[i];
      console.log(sum);
    }

}
rangeSum(1,10)
````

# Reversing an Array
- Write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

````
var arr = [1, 2, 3, 4, 5]

function reverseArray(arr){
  var newArray = [];
  for(i=arr.length-1; i >= 0; i--){
    newArray.push(arr[i])
  }
  console.log(newArray)
};

reverseArray(arr)
````

````
var reverseArrayInPlace = function (array) {
    var arrLength = array.length;
    for (var i = 0; i < arrLength/2; i++) {
        var temp = array[i];
        array[i] = array[arrLength - 1 - i];
        array[arrLength - 1 - i] = temp;
    }
}
````
