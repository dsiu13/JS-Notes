# ES6 Interview Questions

# 1. Explain scoping in JavaScript! Enumerate the different types of scopes you know about. (6 points)
- The scope of variables determines where you can access them in your code.
1. Global Scope: Global variables and constants that can be accessed from anywhere in your code.
2. **Local scope**: can be local to a function or a block
3. **Block Scope**: Variables and constants defined inside a block using **let** and **const** have block scope. They are accessible/visible inside the block they are defined in.
4. **Function Scope**: variables are accessible/visible inside the function they are defined in.
- When var, let, or const are used in global or module scope, their scope is obviously going to be global or module

# 2. Explain hoisting with one or more examples including var and let variables. What is the temporal dead zone? (6 points)
- Variable declarations are hoisted to the top of their scope.
- Both function and block scoped variables are hoisted to the top of their scope.
- Block scoped variable: its value is inaccessible before the intended location of its declaration. This is called the temporal dead zone. Accessing a variable in its temporal dead zone results in a thrown error.

### Block Scope
- **x** is hoisted to the top of the block
```
{
  console.log(x);
  let x = 3; // temporal deadzone
}

> x is not defined
```

# 3. Explain the role of the 'prototype' property via an example.
- JavaScript functions defined using the ES5 syntax have prototypes
- ES6 arrow functions don’t have prototypes. Methods defined using the concise method syntax don’t have prototypes.
- Prototypes become important once a function is used for instantiation. In JavaScript terminology, these functions are constructor functions.
- A prototype may contain functions that are available in every instance of created by the constructor functions.
```
function Wallet() {
    this.amount = 0;
}

Wallet.prototype.deposit = function( amount ) {
    this.amount += amount;
}
Wallet.prototype.withdraw = function( amount ) {
    if ( this.amount >= amount ) {
        this.amount -= amount;
    } else {
        throw 'Insufficient funds.';
    }
}

let myWallet = new Wallet();
myWallet.deposit( 100 );
myWallet.amount

```

# 4. Extend your example from question 3 to demonstrate prototypal inheritance.
```
function BoundedWallet( maxAmount ) {
    Wallet.call( this );               
    this.maxAmount = maxAmount;        
}

BoundedWallet.prototype = Object.create( Wallet.prototype );
BoundedWallet.prototype.constructor = BoundedWallet;

BoundedWallet.prototype.deposit = function( amount ) {
    if ( this.amount + amount > this.maxAmount ) {
        throw 'Insufficient wallet capacity';
    }
    Wallet.prototype.deposit.call( this, amount );
}

```

# 5. Use the ES6 class syntax to rewrite the code you wrote in questions 3/4.
1. class keyword, class name, and braces to define a constructor function
2. a properly working constructor using the concise method syntax
3. at least one method using the concise method syntax
4. proper usage of the extends keyword
5. proper usage of super in the constructor of the child class
6. at least one redefined method. It is optional to access the shadowed base class method using super. In this example, super.deposit( amount ); accessed the deposit method of the Wallet class
7. some code demonstrating instantiation, which should be unchanged compared to the ES5 prototypal inheritance syntax
```

class Wallet {                             
   constructor() { this.amount = 0; }    
   deposit( amount ) { this.amount += amount; }   
   withdraw( amount ) {
       if ( this.amount >= amount ) {
           this.amount -= amount;
       } else {
           throw 'Insufficient funds.';
       }
   }                                     
}

class BoundedWallet extends Wallet {      
   constructor( maxAmount ) {
       super();                           
       this.maxAmount = maxAmount;
   }
   deposit( amount ) {
       if ( this.amount + amount > this.maxAmount ) {
           throw 'Insufficient wallet capacity';
       }
       super.deposit( amount );
   }                                     
}

let myWallet = new Wallet();               
myWallet.deposit( 100 );
myWallet.amount                         
> 100

```

# 6. Explain 'this'
- In JavaScript, this is a global or function scoped variable
- When used in global scope, this equals the global object, which is window in the browser.
- When used inside a function, the value of this is dynamically determined when the function is called and its value equals the context of the function.
```
class C { f() {
  return this;
  }
}

class D extends C {}

const d = new D();
console.log( d.f() === d );
> true

```

# 7. Context Binding
```
let f = function() {
    console.log( this );
}

f.bind( {a: 5} )();
> {a: 5}
```

# 8. Truthiness Explain the difference between == and === in general. when two values are:
1. of the same type (for all types)
2. null and undefined,
3. NaN to itself
4. 5 to '5'
5. Symbol.for( 'a' ) to Symbol.for( 'a' ) (6 points)
- == converts its operands to the same type, while === is type safe, and is only equal when the types and values are equal.
- Six datatypes - boolean, null, undefined, int, string, and symbol
