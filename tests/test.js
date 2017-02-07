const Stack = require('../data-structures/stack');

describe('stack', () => {
  const stack = new Stack(); 

  it('should have the methods: getLength(), push(), pop(), and peek()', () => {
    expect(stack.getLength).toBeDefined();
    expect(stack.push).toBeDefined();
    expect(stack.pop).toBeDefined();
    expect(stack.peek).toBeDefined();
  });

  it('should start empty (requires: getLength())', () => {
    expect(stack.getLength()).toBe(0);
  });

  it('should have a length of 1 after adding an item (requires: getLength(), push())', () => {
    stack.push(null);
    expect(stack.getLength()).toBe(1);
  });

  it('should have a length of 2 after adding a second item (requires: push(), getLength())', () => {
    stack.push(null);
    expect(stack.getLength()).toBe(2);
  });

  it('should have a length of 1 after pushing 2 items and popping 1 (requires: pop(), getLength())', () => {
    stack.pop();
    expect(stack.getLength()).toBe(1);
  });

  it('should return the top item on the stack when pop is called (requires: push(), pop())', () => {
    stack.push(42);
    expect(stack.pop()).toBe(42);
  });

  it('peek should return the top item of the stack without removing it (requires: push(), peek())', () => {
    stack.push(42);
    expect(stack.peek()).toBe(42);
    expect(stack.getLength()).toBe(2);
  });

  it('stack length should not go below 0 (requires: pop())', () => {
    for (var i = 0; i < 10; i++) {
      stack.pop();
    }
    expect(stack.getLength()).toBe(0);
  });

});
