# Regular Expressions
- Fast way to work with strings of text.
- By formulating a regex with special syntax you can: search for text in a string, replace substrings in a string, and extract info from a string.

# What does a Regular Expression look like?
- A regex is an object, which can be defined in two ways.
- The first is by instantiating a new RegExp object using
```
const re1 = new RegExp('hey')

```
- The second is using regular expression literal form:
- 'hey' is called the pattern.
```
const re1 = /hey/

```

# How does it work?
- The regular expression we defined as 're1' is simple. It searches the string 'hey' without any limits, and it doesn't matter where 'hey' is located within the string.

# Anchoring
- /hey/ matches 'hey' wherever it was put inside the string.
- If you want to match strings that start with 'hey', use the
'^' operator.
- If you want to match strings that end with 'hey', use the
'$' operator.
- If you combine both of them: /^hey$/.test('hey'), to exactly match 'hey'.
- To match a string that starts with a substring and ends with another you can use
```
/^hey.*joe$/.test('hey joe')
/^hey.*joe$/.test('heyjoe')
/^hey.*joe$/.test('hey how are you joe')
/^hey.*joe$/.test('hey joe!')
```

# Match items in ranges.
- Instead of matching a particular string you can match any character in a range using
```
/[a-z]/ //a, b, c, ... , x, y, z
/[A-Z]/ //A, B, C, ... , X, Y, Z
/[a-c]/ //a, b, c
/[0-9]/ //0, 1, 2, 3, ... , 8, 9

```

## Combined
```
/^[A-Za-z0-9]$/ 

```
