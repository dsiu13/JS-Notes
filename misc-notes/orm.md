# What is an ORM?
- Object Relational Mapping is a way of accessing a relational database using an object-oriented programming language.
- ORM is a way for Javascript programs to manage DB's by "Mapping" database tables to classes and instances of classes to rows in those tables.
- If you have a Class called "Users", you should have a table called "Users"

```
class User {
  // ORM
}

const user = User.Find(1) // Runs SELECT * FROM users WHERE id = 1

const newUser = new User("Bob Smith", 42)
newUser.save() // Runs INSERT INTO users (name, age) VALUES ("Bob Smith", 42)

newUser.id
```

- A ORM is designed to provide access to the basic CRUD functionality.
- The "User" object can handle a lot of the database integration.
- It knows how to create the required tables and schema, insert records based on instances, update or delete the row corresponding to an instance, and find rows and return them.
- ORMs help cut down on repeating code, and implement conventional patterns that are organize and sensical
- The most important thing is the encapsulation of Database logic and SQL into an object. It is a trust between an object and the programmer, when you say user.save() you know it has been saved, whether it was an INSERT or an UPDATE or the specific database implementation, Mongo or SQL, none of it matters. The object fully encapsulates the persistance and database, and you just trust it. You hide the details and simplify the rest of your program. Once an ORM is designed, how it works no longer matters to the rest of the application. That's what makes building complex and large database-backed applications powerful.
