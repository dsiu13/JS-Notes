# Ch 1: What is Scope?
- One of the most fundamental paradigms of nearly all programming languages is the ability to store values in variables, and later retrieve or modify those values.
- Leading to the questions: where are they stored? How does our program find them when it needs them?

# Compiler Theory
- JavaScript is a compiled language, it is not compiled well in advance like many other compiled languages.
- In traditional complied language processes, a chunk of source code(your program) will undergo three steps before execution.

### 1. Tokenizing/Lexing: Breaking up a string of characters into something meaningful to the language.
- The difference between Tokenizing and Lexing is based on if these tokens are id'd in a stateless or stateful way. If a the tokenizer were to invoke stateful parsing rules figure out if 'a' should be a token or apart of another token it would be Lexing

### 2. Parsing
- Taking a stream (array) of tokens and turning it into a tree of nested elements, which collectively represent the grammatical structure of the program. This tree is called an "AST" (Abstract Syntax Tree).
- The tree for var a = 2; might start with a top-level node called VariableDeclaration, with a child node called Identifier (whose value is a), and another child called AssignmentExpression which itself has a child called NumericLiteral (whose value is 2).

### 3. Code-Generation
- Process of taking an 'AST' and turning it into executable code.

- Simple overview of how JavaScript compiles code.
- JavaScript engines don't get the luxury of having plenty of time to optimize, because JavaScript compilation doesn't happen in a build step ahead of time.

# Understanding Scope
