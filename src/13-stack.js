/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor(...args) {
    this.store = [...args.reverse()];
  }

  push(element) {
    return this.store.unshift(element);
  }

  pop() {
    return this.store.shift();
  }

  peek() {
    return this.store[0];
  }
}

module.exports = Stack;
