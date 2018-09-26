var sum = function (a, b) {
    return a + b;
};
var ans = sum(3, 5);
// Throws an error because typeof string doesn't work with string.
// It catches errors during "Compile Time".
// In JS, using JITC the error will show.
// "tsc --init" -> creates a tsconfig.json file
var ans = sum("hello", 5);
// Boolean
var isCool = true;
// number
var age = 21;
// string
var eyeColor = 'brown';
var favQuote = "i'm not old, i'm only ${age}";
// Array - 2 ways to declare arrays
var pets = ["dog", "cat", "fish"];
var pets2 = ["pocket whale", "pygmy giraffe", "chimera"];
// object - always lowercase due to things like Object.keys
var wizard = {
    a: 'Harry'
};
// null and undefined
var noo = null;
var meh = undefined;
// Tuple
var basket;
basket = ['basketball', 5];
// Enumerable
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Med"] = 2] = "Med";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
