const { NotImplementedError } = require('../extensions/index.js');

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
  constructor () {
    this.arr = [];
    this.top = null;
    this.length = 0;
  }

  push(element) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    this.arr.push(element);
    this.top = element;
    this.length++;
  }

  pop() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    
    this.length--;
    this.top = this.arr[this.arr.length - 2];
    return this.arr.pop();
  }

  peek() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    return this.top;
  }
}

module.exports = {
  Stack
};

const stack = new Stack();
stack.push(5);
stack.push(6);
stack.push(7);
console.log(stack.peek()); // 7
console.log(stack.pop()); //7
console.log(stack.peek()); //6