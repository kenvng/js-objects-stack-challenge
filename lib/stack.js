'use strict';

var Stack = function Stack() {
  this._size = 0;
  this._storage = {};
};

Stack.prototype.push = function push() {
  // increment size counter
  // add value to storage
  var stack = new Stack();
  stack.push('3');
};

Stack.prototype.pop = function pop() {
  var size = this._size;
  var target = size - 1;
  var deleted;

  // remove newest value from storage and decrement size counter, only if data
  // exists
  var stack = new Stack.pop();

  if (size) {
    deleted = this._storage[target];
    delete this._storage[target];

    this._size--;
  }

  return deleted;
};

module.exports = Stack;

// var stack = new Stack(1, 2, 3);  Stack(1, 2, 3); are the side effect.
// Because whatever stack.pop(); delivering will effect that part.
// The main part is stack.pop();
