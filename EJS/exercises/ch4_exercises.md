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
function reverseArrayInPlace (array) {
    var arrLength = array.length;
    for (var i = 0; i < arrLength/2; i++) {
        var temp = array[i];
        array[i] = array[arrLength - 1 - i];
        array[arrLength - 1 - i] = temp;
    }
}
````

# A List
- Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

```
// Your code here.

function arrayToList(array){

  class LinkedList {
    constructor(val) {
      this.head = null;
      this.length = 0;
      this.addToHead(val);
      };

      addToHead(val) {
        const newNode = {val}
        newNode.next = this.head;
        this.head = newNode;
        this.length++
        return this;
      }
    }

    removeFromHead() {
      if (this.length === 0) {
        return undefined;
      }

    const val = this.head.val;
    this.head = this.head.next;
    this.length--;

    return val;

    }


};

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
```
