# Part 1 - Higher Order Functions
- Functions are values.
- They can be assigned to variables or passed to other functions(Higher Order Functions)

```
function triple(x){
  return x * 3
}
```
## Function Expression
```
var triple = function(x) {
  return x * 3
}
```

```
var animals = [
  { name: 'Fluffykins', species: 'rabbit'},
  { name: 'Goldie', species: 'goldfish'},
  { name: 'Kaylee', species: 'dog'},
  { name: 'Penny', species: 'dog'},
  { name: 'Teddy', species: 'bear'},
  { name: 'Polly', species: 'bird'}
];

var dogs = []

for (var i = 0; i < animals.length; i++){
  if(animals[i].species === 'dog'){
   dogs.push(animals[i])
  }
};

```

- The Callback function and Filter function work together.

```
var dogs = animals.filter(function(animals){
  return animals.species === "dog"
})

var isDog = function(animal){
  return animals.species === "dog"
}
```

# Using Map
- Map takes a callback function just like Filter.
- The Callback function will be passed each item in the array
- Filter expects the callback function to return a true/false value.
- Map expects a transformed object to put into the new array.

```
var animals = [
  { name: 'Fluffykins', species: 'rabbit'},
  { name: 'Goldie', species: 'goldfish'},
  { name: 'Kaylee', species: 'dog'},
  { name: 'Penny', species: 'dog'},
  { name: 'Teddy', species: 'Bear'},
  { name: 'Carlos', species: 'fish'}
];

var names = [];
for (var i = 0; i < animals.length; i++){
  names.push(animals[i].name)
};

var names = animals.map(function(animal) {
  return animal.name
})

var names = animals.map((x) => x.name)
```

# Reduce
- Map, Filter, Reject, and Find are list transformations.

```
var orders = [
  { amount: 250 },
  { amount: 88 },
  { amount: 125 },
  { amount: 42 },
]

var totalAmount = totalAmount = orders.reduce(function(sum){

  })

```
