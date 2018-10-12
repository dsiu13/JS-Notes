# Runetime Complexity
## Describes the performance of an algorithm
- How much more processing power/time is required to run your algorithm
to run your algorithm if we double the inputs?

## String Reverse
- Each additional character = 1 more step through the loop.
- A direct 1:1 relationship between input elements and amount of work to process it
- This would be 'N' or 'Linear' runtime.
```
function reverse(str){
  let reversed = '';

  for(let character of str){
    reversed = character + reversed;
  }

  returned reversed;
}

<!-- 'abc' => 'cba' -->

```

## Steps
- As 'n' increases, we have to do way more work or (n * n) things total
- Our runtime would be N^2 or Quadratic run time
- inputs = 2 => 4 things
- inputs = 3 => 9 things
- inputs = 4 => 16 things
```
function steps(n) {
  for(let row = 0; row < n; row++) {
    let stair = '';

    for(let col = 0; col < n; col++){
      stair += '#';
    } else {
      stair += ' ';
    }
    console.log(stair)
  }
}

```

# Common Runtimes

## Constant Time - 1
- No matter how many elements we're working with, the algorithm will always take the same amount of time.

## Logarithmic - log(n)
- You have this if doubling the number of elements you are iterating over doesn't double the amount of work. Always assume that searching operations are log(n)

## Linear Time - n
- Iterating through all elements in a collection of data. if you see a loop spanning from '0' to any array.length, you probably have 'n' or linear runtime

## Quasilinear -  n*log(n)
- You have this is doubling the number of elements you iterate through doesn't double the amount of work. Always assume that any sorting operation is n*log(n)

## Quadratic Time - n^2
- Every element in a collection has to be compared to every other element. 'The handshake problem'

## Exponential Time - 2^n
- If you add a 'single' element to a collection, the processing power required doubles

# Big 'O' Notation
- O(n) -> Linear
- O(1) -> Constant
- O(n^2) -> Quadratic

## Identifying Runtime Complexity
- Iterating with a simple for loop through a single collection? -> Probably O(n)
- Iterating through half a collection? -> Still O(n). There are no constants in runtime
- Iterating through two 'different' collections with separate for loops? -> O(n + m)
- Two nest for loops iterating over the same collection? -> O(n^2)
- Two nested for loops iterating over different collections? -> 0(n * m)
- Sorting? -> 0(n*log(n))
- Searching a SORTED array? -> O(log(n))

## Space Complexity
- How much more memory is required by doubling the problem set?
