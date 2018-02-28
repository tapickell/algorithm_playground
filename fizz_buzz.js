var test = require('./testing');

//  range(1, 100) == [1...100]
function range(begin, end) {
  return Array.apply(null, { length: end+1 })
              .map(Number.call, Number)
              .slice(begin)
}




// FizzBuzz
// Write a script that prints the numbers 1 to 100 in the console.
// But for multiples of three, print Fizz instead of the number.
// For multiples of five, print Buzz.
// For numbers which are multiples of both three and five, print FizzBuzz.













let zero = function() {
  for (let index = 1; index <= 101; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      console.log("FizzBuzz")
    } else if (index % 3 === 0) {
      console.log("Fizz")
    } else if (index % 5 === 0) {
      console.log("Buzz")
    } else {
      console.log(index)
    }
  }
}

console.log("function index 0")
zero()
test.again()

let one = function() {
  var is_fizz = function (number) {
    return number % 3 == 0
  }
  var is_buzz = function (number) {
    return number % 5 == 0
  }

  range(1, 100).forEach(element => {
    let str = ""
    if (is_fizz(element)) str = str + "Fizz"
    if (is_buzz(element)) str = str + "Buzz"
    if (str == "") str = element
    console.log(str)
  })
}

console.log("function index 1")
one()
test.again()

let two = function() {
  var fizz = function (number) {
    return (number % 3 == 0) ? "Fizz" : ""
  }
  var buzz = function (number) {
    return (number % 5 == 0) ? "Buzz" : ""
  }
  var empty = function (str, element) {
    return (str == "") ? element : ""
  }

  range(1, 100).forEach(element => {
    let str = ""
    str = str + fizz(element)
    str = str + buzz(element)
    str = str + empty(str, element)
    console.log(str)
  })
}

console.log("function index 2")
two()
test.again()

let three = function() {
  range(1, 100).map(function(val, index) {
    console.log((index % 3 ? '' : 'Fizz')+(index % 5 ? '' : 'Buzz') || index)
  })
}

console.log("function index 3")
three()
test.again()

let what = function() {
  const pattern = [, , 'fizz', , 'buzz', 'fizz', , , 'fizz', 'buzz', , 'fizz', , , 'fizzbuzz']
  for (let i = 0; i < 100; console.log(pattern[i++ % 15] || i)){
    // nope
  }
}

console.log("function index WHAT?")
what()
test.done()
