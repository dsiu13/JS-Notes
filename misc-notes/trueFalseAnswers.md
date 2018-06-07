# Definitions
## Falsy: In Javascript 6 Things are Falsy and they are
- False
- Null
- Undefined,
- '' // An Empty String
- 0
- NaN

## Truthy: There are only two truthy things
- True and Everything that is not False


````
1. Question: Is 'false' is false?
Answer: No. Because, it's a string with length greater than 0. Only an empty string is false.
````

````
2. Question: Is ' ' is false?
Answer: No. Because, it's not an empty string. There is a white space in it.
````

````
3. Question: What about {}?
Answer: True. It's an object. An object without any property is an object can't be falsy.
````
````
4. Question: Tell me about []?
Answer: This is also truthy. It's an array object (array is child of object) is truthy.
````

````
5. Question: You talked bout '' to be falsy. What about new String('')?
Answer: Though you are passing empty string to the string constructor, it is creating an String object. More precisely a instance of String object. It becomes an object. Hence, it is not false. so, it is truthy.
````

````
6. Question: Tell me about new Boolean(false)
Answer: truthy. As it creates an instance of the Boolean object which is an object. Object is truthy.
````

````
7. Question: Boolean(function(){})
Answer: true if you pass a truthy value to Boolean, it will be true.
````

````
8. Question: Boolean(/foo/)
Answer: true
````

````
9. Question: true%1
Answer: 0. When you are trying to find reminder of true, true becomes 1 and reminder of 1 while dividing by 1 is 0. you will get same result if you doe false%1
````

````
10. Question: ''%1
Answer: 0
````

````
11. Question: As [] is true, []==true should also be true. right?
Answer: You are right about first part, [], empty array is an object and object is always truthy. Hence, if you use if([]){console.log('its true')} you will see the log.

However, special case about == (double equal) is that it will do some implicit coercion.

Since left and right side of the equality are two different types, JavaScript can't compare them directly . Hence, under the hood, JavaScript will convert them to compare. first right side of the equality will be cooereced to a number and number of true would be 1.

After that, JavaScript implementation will try to convert [] by usingtoPrimitive (of JavaScript implementation). since [].valueOf is not primitive will use toString and will get ""

Now you are comparing "" == 1 and still left and right is not same type. Hence left side will be converted again to a number and empty string will be 0.

Finally, they are of same type, you are comparing 0 === 1 which will be false.
```
