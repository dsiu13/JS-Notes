# Object Equality

## == vs ===
- Two Equal Signs, Will NOT check types and Triple Equal Signs Will Check Whether Both Sides are the Same Type.
- Two Equal Signs is "Tolerant", but Essentially Converts to its Convenient Type to have Both the Same Type, and then Preform the Comparison. // "1" == 1 Will Return True
- Triple Equals Compares Types and Values. If Both Sides are NOT the Same Type, False Will Always be Returned.
- In Triple Equals, Two Strings must have Identical Char Sets and in other Primatives (Integers, Booleans), Must Share Similar Values.

## Implicit Coercion - Comparison by using == does implicit type conversion under the hood. 
## Rules for implicit coercion are as follows
- If both operands are the same type use ===
- undefined == null
- If one operands is a string, while the is number, JS will convert the string to a number
- If one operand is a boolean, while the is non-boolean, JS will convert the boolean to number and then perform comparison
- While comparing a string or number to an object, try to convert the object to a primitive type and then try to compare

Be careful while comparing objects, identifiers must reference the same objects or same array.
  ````
var a = {a: 1};
var b = {a: 1};

a == b //false
a === b //false
````
````
var c = a;

a == c //true
a === c //true
````

## How Would You Compare Two Objects in JavaScript?
- JavaScript has two different approaches for testing equality.
- Primitives like strings and numbers are compared by their value, while objects like arrays, dates, and user defined objects are compared by their reference.
- This means it compares whether two objects are referring to the same location in memory.

- Equality check will check whether two objects have same value for same property. To check that, you can get the keys for both the objects.
- If the number of properties doesn't match, these two objects are not equal.
- Secondly, you will check each property whether they have the same value. If all the properties have same value, they are equal.

````
function isEqual(a, b) {
    var aProps = Object.getOwnPropertyNames(a),
        bProps = Object.getOwnPropertyNames(b);

    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
}
````

## Limitations
- If one of the Property values itself is an Object.
- If one of the Property values is NaN
- If one Object has a Property with Value with Undefined, while the second Object, doesn't have the Property.
