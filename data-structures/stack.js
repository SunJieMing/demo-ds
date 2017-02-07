/*
  Implement a Stack class with the following methods: getLength(), push(), pop(), peek()

  A Stack is a data structure that implements the LIFO(Last In First Out) pattern.
  Imagine a stack of dinner plates.  The last plate you put on the stack is the first one you take off.
  Stacks are used for things like the ability to undo in an editor or go back in a browser.
  Stacks are somewhat pointless to implement in Javascript because their behavior is already included
  in arrays.  The purpose of this exercise is to familiarize yourself with the key concepts that define a Stack.


  1. getLength() should return the number of items on the stack

  2. push() should add an item to the top of the stack

  3. pop() should remove and return the top item off of the stack

  4. peek() should return the top item off of the stack without removing it
*/

class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  getLength() {
    return this.count;
  }

  push(item) {
    this.count++;
    this.items.push(item);
  }

  pop() {
    if (this.count === 0) return;
    this.count--;
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}

module.exports = Stack;
