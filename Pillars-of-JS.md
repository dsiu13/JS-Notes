# Prototypal OO
- Prototypal Inheritance, Objects without classes, prototype delegation, aka OLOO (Objects linking to other Objects)
- Functional Programming - Enabled by lambdas with closure

# We're constructing a Mess.
- Constructors violate the open/closed principle because they couple all callers to the details of how your objects get instantiated.
- If you return an arbitrary object from a constructor function, it will break your prototype links, and the 'this' keyword will no longer be bound to the new object instance in the constructor.
- Constructors that aren't running in strict mode can be dangerous. If a caller forgets 'new' and you're not using strict mode or ES6 classes, anything you assign to 'this' will pollute the global namespace.
- In JavaScript, factory functions are constructor functions minus the 'new' requirement, global pollution danger and awkward limitations.
- JavaScript doesn't need constructor functions because any function can return a new object. With dynamic object extension, object literals and 'Object.create()'.

# Welcome to the Seventh Circle of Hell
- Classical Inheritance generally lets you inherit only from a single ancestor, forcing you into awkward taxonomies. If you're making the game Clue and start will two classes: Tool and Weapon you've already messed up and can't make the game.

# The Tight Coupling Problem
- Coupling between a child class and its parent is the tightest form of coupling in OO design, which is the opposite of reusable, modular code.
- Making small changes to a class creates rippling side-effects that breaks things.

# The Duplication by Necessity Problem
- The solution to taxonomy problems is to go back in time, build up new classes with subtle differences by changing up what inherits from what, but its too tightly coupled to properly extract and refactor. You end up duplicating code instead of reusing and violating Don't Repeat Yourself
- You can keep growing your subtly different jungle of classes, and as you add inheritance levels, your classes get more and more arthritic and brittle.
- Fixing a bug in one place, you fix it everywhere
- ES6 classes don't fix any of these problems, ES6 makes them worse.
- The 'class' keyword is not the most harmful feature in JavaScript.

# The Fallout
- These problems have a multiplying effect as your app grows.

# Step into the Light
- You never need Classes in JavaScript.
- The seminal work on classical OO design is anti-class Inheritance

# Good Code is Simple
## Removing constructors and classical inheritance out of JavaScript it becomes:
- Simpler(easier to read and write), and no more wrong design taxonomies
- More flexible(switch from new instances to recycling object pools or proxies)
- Gets more powerful and expressive(Inherit from multiple ancestors or from private state)

# The Better Option
- Code is the Tool. The program is the product.
- Your code is not a self expression of yourself. Good programming style requires you to pick the simpler, flexible and cleaner option.
