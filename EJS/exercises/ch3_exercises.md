# Minimum
- Write a function that takes in two arguments and returns the smallest.
````
function min(x,y){
 if(x < y){
   return x
 } else {
   return y
 }
};
console.log(min(1,3))
````

# Recursion
- Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.
````
function isEven(num){
  if (num > 1){
    return isEven(num - 2);
  } else if (num == 1){
    return false;
  } else if (num == 0){
    return true;
  }
};
````

# Bean Counting
- Write two functions.
- One that takes a single string as an argument and returns a number that indicates the number of upper case B's
- The 2nd takes two parameters, the first being a string, the second being the char to count.
## Function 1
````
function countB(str){
  var count = 0;
  var length = str.length
  for(i=0;i<length;i++){
    if(str.charAt(i) === "B"){
      count ++
    }
  }
  return (count);
}
````

## Function 2
````
function countChar(str, char){
  var count = 0;
  var length = str.length
  for(i=0;i<length;i++){
    if(str.charAt(i) === char){
      count ++
    }
  }
  return (count);
}

````
