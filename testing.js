const util = require('util')

function isObject(value) {
  return typeof value === "object" && value != null
}

function convertObjectToJSON(value) {
  if (isObject(value)) return JSON.stringify(value)
  return value
}

function deepEqual(value1, value2) {
  if (isObject(value1) && isObject(value2)) {
    return convertObjectToJSON(value1) === convertObjectToJSON(value2)
  }
  return value1 === value2
}

module.exports = {
  assert: function(expected, actual, message = "Test") {
    if (expected === actual) {
      console.log('👍  ' + message)
    } else {
      diff = "expected: " + util.inspect(expected) + "\n   actual: " + util.inspect(actual)
      console.log('💩  ' + message + " => Assertion failed no match\n   " + diff)
    }
  },
  assert_true: function(actual, message) {
    this.assert(true, actual, message)
  },
  assert_false: function(actual, message) {
    this.assert(false, actual, message)
  },
  again: function() {
    console.log('\n"Do or do not, there is no try" -Yoda\n')
  },
  done: function() {
    console.log('\n"Much to learn, you still have" -Yoda\n')
  }
};


// In Bash
// create a file
// create a folder
// delete a folder
// move a file
// copy a file
// go up one directory
// list files in a directory
// see what directory you are in
// what does `history` do ??