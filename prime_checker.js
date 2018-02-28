



const test = require('./testing');

// Prime Checker
// Write a function that checks to see
// if a number is a prime number or not
// for all numbers [1...1000]
// Have it return true if it is,
// or false if it's not.

function isModBy(mod) {
  return function(number) {
    return number % mod === 0
  }
}
const isMod2 = isModBy(2)
const isMod3 = isModBy(3)

function primeChecker(number) {
  if (number <= 1) return false
  if (number <= 3) return true
  if (isMod2(number) || isMod3(number)) return false
  return checkTheRest(number)
}

console.log("prime check")
test.assert_true(primeChecker(2), "2 is prime")
test.assert_true(primeChecker(3), "3 is prime")
test.assert_true(primeChecker(7), "7 is prime")
test.assert_true(primeChecker(11), "11 is prime")
test.assert_true(primeChecker(997), "997 is prime")

test.assert_false(primeChecker(1), "1 is not prime")
test.assert_false(primeChecker(4), "4 is not prime")
test.assert_false(primeChecker(8), "8 is not prime")
test.assert_false(primeChecker(14), "14 is not pime")
test.assert_false(primeChecker(993), "993 is not prime")
test.assert_false(primeChecker(1000), "1000 is not prime")

function checkTheRest(number) {
  for (let i = 5; Math.pow(i,2) <= number; i+=6) {
    if (isModBy(i)(number) || isModBy(i+2)(number)) return false
  }
  return true
}

// find sqrt of max number, this is max i to test
// find first prime
// filter list to remove all other factors of prime
// find 2 is prime then remove all n % 2 === 0
// find 3 is prime then remove all n % 3 === 0
// find 5 is prime then remove all n % 5 === 0
// find 7 is prime then remove all n % 7 === 0
function range(begin, end) {
  return Array.apply(null, { length: end+1 })
              .map(Number.call, Number)
              .slice(begin)
}

var global_crap = 0
function generatePrimes([hd, ...tail], primes = []) {
  console.log(global_crap++)
  if (hd === undefined) return primes
  primes = [...primes, hd]
  return generatePrimes(tail.filter((number) => number % hd != 0), primes)
}

const rangeTo1000 = range(2, 1000) //999, 998, 15, <=9
const primes = generatePrimes(rangeTo1000)

const compareAgainstPrimes = function(primes) {
  return function(number) {
    return primes.includes(number)
  }
}

let primeCheckPreComp = compareAgainstPrimes(primes)

test.again()
console.log("Primes", primes)
console.log("prime check precomputed")
test.assert_true(primeCheckPreComp(2), "2 is prime")
test.assert_true(primeCheckPreComp(3), "3 is prime")
test.assert_true(primeCheckPreComp(7), "7 is prime")
test.assert_true(primeCheckPreComp(11), "11 is prime")
test.assert_true(primeCheckPreComp(997), "997 is prime")

test.assert_false(primeCheckPreComp(1), "1 is not prime")
test.assert_false(primeCheckPreComp(4), "4 is not prime")
test.assert_false(primeCheckPreComp(8), "8 is not prime")
test.assert_false(primeCheckPreComp(14), "14 is not pime")
test.assert_false(primeCheckPreComp(993), "993 is not prime")