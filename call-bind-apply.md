# Call, Bind, & Apply
- Call invokes the function and allows you to pass in arguments one by one.
- Apply invokes the function and allows you to pass in arguments as an array.
- Bind returns a new function, allowing you to pass in a this array and any number of arguments.
- Use .Bind() when you want that function to later be called with a certain context, useful in events.
- Use .Call() or .Apply() when you want to invoke the function immediately, and modify the context.
- Call/Apply call the function immediately, whereas bind returns a function that when later executed will have the correct context
set for calling the original function. This way you can maintain context in async callbacks, and events.


## Call
- Call Invokes the Function and Allows us to Pass in Arguments One By One.

````
// Monica Obj with Methods
var monica = {
  name: 'Monica Geller',
  total: 400,
  deductMontlyFee: function(fee){
     this.total = this.total - fee;
     return this.name + ' remaining balance is '+ this.total;
  }
}

// Rachel Obj with no Methods
var rachel = {name: 'Rachel Green', total: 1500};

// We Pass the Method in the Monica Obj to the Rachel Obj via Call.
// Now We Target the Rachel Obj and Pass the Method an Argument.

var a = monica.deductMontlyFee.call(rachel, 200);
console.log(a) // Returns a Total of 1300;

````

## Apply
````
function personContainer() {
  var person = {
     name: "James Smith",
     hello: function() {
       console.log(this.name + " says Hello " + arguments[1]);
     },
     goodbye: function(){
      console.log(this.name + " says Goodbye " + arguments[0]);
    }
  }
  person.hello.apply(person, arguments);
  person.goodbye.apply(person, arguments);
}
personContainer("Earth", "Mars");
````

## Bind
````
var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};

function say() {
    console.log('Hello ' + this.firstName + ' ' + this.lastName);
}

var sayHelloJon = say.bind(person1);
var sayHelloKelly = say.bind(person2);

sayHelloJon(); // Hello Jon Kuperman
sayHelloKelly(); // Hello Kelly King
````
