const numbers = [13, 42, 1337];
// Create a new array with the numbers doubled
let numbersDoubled = numbers.map( number=>
  {
    return number * 2;
  } 
)
console.log(numbersDoubled)

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
// create a new array with the first 3 letters of each day
let day = days.map(number => {
  return number.substring(0,3)
})
console.log(day)
/////

const people = [{
  first_name: 'CJ',
  last_name: 'R.'
}, {
  first_name: 'Brendan',
  last_name: 'Eich'
}, {
  first_name: 'Kyle',
  last_name: 'Simpson'
}, {
  first_name: 'Douglas',
  last_name: 'Crockford'
}];
// Create a new array with the string full name of each person
let fullName = people.map(fname=> {
  return fname.first_name +' '+ fname.last_name
})
console.log(fullName)
///

const animals = [{
  name: 'cat',
  size: 'small'
}, {
  name: 'dog',
  size: 'small'
}, {
  name: 'lion',
  size: 'medium'
}, {
  name: 'elephant',
  size: 'big'
}];
// Create a new array with just the names of the animals

let nameAnimals=animals.map(animalname=> {
  return 'the name of animal is ' + animalname.name 
})
console.log(nameAnimals)
///
const theNumbers = [4, 8, 15, 16, 23, 42];
// create a new array of objects with the properties value and index
let specificNumbers = theNumbers.map((value,index) => {
  return 'the value is :' + value + ' and the index is :' + index 
}
);

console.log(specificNumbers)

////
const starter = [2, 5, 10];
// Create a new array with each value multiplied by the next value
// The last value should be multiplied by the first value
// e.g. [2*5, 5*10, 10*2] == [10, 50, 20]

let multipliedArray= starter.map((value,index) => {
  let nextIndex=1;
  let nextValue= value.nextIndex
  if (index > nextIndex) {
    nextIndex = 0 
  }
  return value*nextValue
})
console.log(multipliedArray)