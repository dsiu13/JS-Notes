# Hoisting

## Works
- function declaration
- invoking the function before its declared also works
```
function sayHi() {
  console.log('hi!')
}

sayHi()
```
- This works
```
sayHi()
function sayHi() {
  console.log('hi!')
}


```

## A function expression does not get hoisted
- Cannot invoke the function before the function expression.
- You can wrap a function declaration in () to turn it into a function expression. It will not have hoisting though.
```
var sayHi = function() {
  console.log('hi!')
}

sayHi()

```
