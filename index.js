var test = require('./testing');

function reverseString(str) {
  return str.split('').reduce((acc, value) => [value, ...acc],[]).join('')
}
test.assert("gnirts", reverseString("string"), "can reverese a string")

function removeDups(arr) {
  return arr.reduce((acc, element) => {
    if (!acc.includes(element)) return acc.concat(element)
    return acc
  },[])
}
test.assert([1,2,3,4,5], removeDups([1,1,2,2,3,4,5]), "can remove duplicates from a list")

function findPeek(list) {
  let value
  list.forEach((element, index, arr) => {
    if (!value && arr[index-1] < element && arr[index+1] < element) value = index
    if (index === arr.length-1 && !value) value = arr
  });
  return value
}
test.assert(3, findPeek([1,2,3,4,3,5,2]), "can find a peek integer in an unsorted list")
let sortedList = [1,2,3,4,5,6]
test.assert(sortedList, findPeek(sortedList), "when it cant find a peek integer in a sorted list")

function findSingle(list) {
  return list.reduce((value, element, index, arr) => {
    if (!value && arr[index-1] < element && arr[index+1] > element) return index
    return value
  }, null);
}
test.assert(4, findSingle([1,1,2,2,3,4,4]), "can find single element in list of doubles")

function reduceToSinlge(number) {
  let number_str = `${number}`
  if (number_str.length == 1) return number
  return reduceToSinlge(number_str.split('').reduce((a,b) => Number(a) + Number(b)))
}
test.assert(2, reduceToSinlge(38), "can reduce multi digit integer to single integer using addition of digits")
test.assert(3, reduceToSinlge(36218019), "can reduce large multi digit integer to single integer using addition of digits")

function addDigits(num) {
  if (num == 0) return num
  if (num % 9 == 0) return 9
  return num % 9
}
test.assert(0, addDigits(0), "This should work?")
test.assert(2, addDigits(38), "Can this work?")
test.assert(9, addDigits(36), "Can this break?")
test.assert(9, addDigits(9), "Does this work?")
test.assert(1, addDigits(1), "How about this?")
test.assert(9, addDigits(38178), "How about this large one?")
test.assert(3, addDigits(36218019), "How does this work?")