# Data Structures
- Way of organizing info with optimal 'runtime complexity' for adding or removing data
- JavaScript natively implements several data structures. You will be asked about 'inferior' Data
Structures. For example a JS Array vs a Queue.

# Queue - First In First Out
- Queue Class
- Initialize an empty array. Only expose unshift and pop methods.
```
const q = new Queue();
q.add(1);
q.remove(); // returns 1;

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record)
  }

  remove() {
    return this.data.pop();
  }

}

```

# Stack - First In Last Out
- Push -> add a record to the stack
- Pop -> remove the "top" record on the Stack
- Peek -> return "top" record without popping it

```
class Stack {
  constructor() {
    this.data = [];
  }

  push(record){
    this.data.push(record);
  }

  pop(record){
    return this.data.pop();
  }

  peek(){
    return this.data[this.data.length - 1];
  }
}

```
