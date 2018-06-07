# What is an "algorithm"?
- A set of steps for a computer program to accomplish a task

### What makes a good algorithm?
- Correctness: it solves a problem
- Efficiency: it solves a problem *efficiently*

### How do you measure efficiency?
- Meausre how long it takes to run the code but this is limiting because it only tells you about the implementation of the pgoram in a certain programming language on a particular computer and just for the input it was given
- Better way: **asymptotic analysis**: allows algorithms to be compared independently of a particular programming language or hardware

---

#### A Guessing Game

Example: The computer is going to randomly select an integer from 1 to 16. You have to guess the number by making guesses until you find the number that the computer chose.

**Linear Search**
- You can guess all the numbers consecutively in a row

**Binary Search**
- Divide and conquer

---

#### Route-finding

Example: Pac Man is a computer game in which the main character is controlled by clicking on destinations in a maze. The pgoram needs to determine the precise set of movements that the character should follow to get to where the user clicked and then animate those movements. There may be multiple paths for the character to follow and so the pgoram needs to choose the best of those paths.
- Algorithm needs to determine which of the surrounding squares are closer to the goal
- We can do that by assigning a "cost" to each square that represents the minimum number of steps the character would have to take to get from that vertex to the goal

Solution
- Start on the goal square. How far is the goal from the goal? Zero steps. Mark that goal with the number zero.
- Find all squares in the maze that are exactly one step away from the goal. Mark them with number 1.
- Find all squares that are exactly two steps away (and have not been marked) and mark these squares with the number 2
- Keep marking squares in the maze in order of increasing distance from the goal
- Eventually the algorithm marks the square where the character starts. The program can then find a path to the goal by choosing a sequence of squares from the start  such that the numbers on the squares always decrease along the path.

<img width="421" alt="screen shot 2017-05-14 at 10 51 08 am" src="https://cloud.githubusercontent.com/assets/6924712/26036492/862ddfc6-3893-11e7-856e-bafc4fada826.png">

---

#### Example Algorithms in your life
- Cooking recipes: set of instructions that can be followed precisely in order to achieve a desired result!
- Finding best route to get to work
- Algorithm for your mornining routine

---

# Binary Search

- Binary search is an efficient algorithm for finding an item from an ordered list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one.
- When describing an algorithm to a fellow human being, an incomplete description is often good enough. Some details may be left out of a recipe for a cake; People might intuitively know how to fill in the missing details, but computer programs do not. That's why we need to describe computer algorithms completely.

### English Pseudocode for binary search (for number guessing game)
1. Let *min = 1* and *max = n*
  - min: current minimimum reasonable guess for this round
  - max: current maximum reasonable guess
  - n: input to the problem, which is the highest possible number your opponent is thinking of
2. Guess the average of *max* and *min*, rounded down so that it is an integer
3. If you guess the number, stop. You found it!
4. If the guess was too low, set *min* to be one larger than the guess
5. If the guess was too high, set *max* one smaller than the guess
6. Go back to step two

### Implementing binary search of an array

Example:
- We want to know whether the number 67 is prime. If 67 is in the array, it's prime.
- We want to know how many primes are smaller than 67. If we find position of 67 in the array, we can figure out how many smaller primes exist.

Here's a javascript array of the first 25 prime numbers, in order:

```
var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
```

- Position of an element in an array is known as its index. Array indices start at 0 and count upwards.
- *Linear Search*: Read array of prime numbers from left to right, one at a time until we find the number 67 and see that it is at array index 18. We now know that 67 is prime. We also know that there are 18 elements which come before 67 in the array, meaning there are 18 prime numbers smaller than 67.
- *Binary Search*:
  - Let min = 0, max = 24
  - Average of max and min rounded down: 12
  - Guess was too low, setting min to be one higher than the guess
  - Let min = 13, max = 24
  - Average of max and min rounded down: 18
  - Guess was right! Stop!

Linear Search took 19 guesses and binary search took 2 guesses.

---

### Human Pseudocode (mixes English with features in programming languages) for binary search (for number guessing game)
1. Let `min = 0` and `max = n-1`
  - array: inputs
  - n: number of elements in array
  - target: number being searched for
  - output: index of target in array
2. Compute `guess` as average of `max` and `min`, rounded down
3. If `array[guess]` equals `target`, then stop. You found it! Return `guess`.
4. If the guess was too low, that is, `array[guess]` < `target`, then set `min = guess + 1`
5. Otherwise, the guess was too high. Set `max = guess - 1`
6. Go back to step 2.

---

### Implementing Pseudocode
- How would we turn that pseudocode into a JavaScript program? We should create a function, because we're writing code that accepts an input and returns an output, and we want that code to be reusable for different inputs.
- The parameters to the function—let's call it `binarySearch` — will be the array and target value, and the return value of the function will be the index of the location where the target value was found.
- Step 6 says to go back to Step 2: This sounds like a loop. A while loop is a better choice since the binary search does not go into sequential order to make for-loop convenient
- What should happen if the number you are looking for is not in the array?
  - Figure out what index the `binarySearch` function should return in this case
  - It should be a number that cannot be a legal index into the array: -1
  - When max becomes less than `min` we know that the target number is not in the sorted array

  *Modified pseudocode* for binary search that handles the case in which the target number is not present

  1. Let `min = 0` and `max = n - 1`
  2. If `max < min`, then stop: `target` is not present in array. Return `-1`.
  3. Compute `guess` as the average of `max` and `min`, rounded down
  4. If `array[guess]` equals `target`, then stop. You found it! Return `guess`
  5. If the guess was too low, that is `array[guess] < target`, then set `min = guess + 1`
  6. Otherwise, guess was too high. Set `max = guess - 1`
  7. Go back to step 2.
