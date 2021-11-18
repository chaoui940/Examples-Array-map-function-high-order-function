const numbers = [1, 2, 3, 4, 5, 6];
// Create a number that is the sum of all the numbers in the array

let sum =numbers.reduce((suma,number)=>{
  return suma+=number
}
, 0 )
console.log(sum)

const fruits = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig'];
// Create an object with the fruit as a key and the number of occurences of that fruit as a value
let fruitSightings = fruits.reduce((fruitStock , fruit)=> {

  if (fruitStock.hasOwnProperty(fruit)) {
    fruitStock[fruit]++;
  }
    else {
       fruitStock[fruit]=1;
    }
    return fruitStock;
},{})
console.log(fruitSightings)


const prices = [29.76, 41.85, 46.5];
// Create a number that is the average price of all the prices in the array
// HINT: you will need to check the index to determine if you should return the sum or the average

let avergePrice = prices.reduce((average , price, index , array)=>{
  return average + price / array.length
},0)
console.log(avergePrice)
//////
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
let shortDay = days.reduce((shorten,day)=> {
  let firstThree = day.substring(0,3)
  shorten.push(firstThree)
  return shorten
},[])
console.log(shortDay)

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// create a new array with only the words with a length longer than 6

let longWords = words.reduce((longer,word)=>
    {
      if (word.length > 6 ) {
        longer.push(word)
      }
      return longer
    }
  ,[])
console.log(longWords)

////

const people = [{
  id: 1,
  first_name: 'CJ',
  last_name: 'R.'
}, {
  id: 2,
  first_name: 'Brendan',
  last_name: 'Eich'
}, {
  id: 3,
  first_name: 'Kyle',
  last_name: 'Simpson'
}, {
  id: 4,
  first_name: 'Douglas',
  last_name: 'Crockford'
}];
// Create an object where the keys are the id and the values are the people

let Persons=people.reduce((byId, person)=>{
      byId[person.id] = person
      return byId
          }
  ,{})
console.log(Persons)

////

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
// Create an object where the keys are the size and the values are an array of all animals that size

let animalBysize= animals.reduce((BySize,animal)=>{
  if (!BySize.hasOwnProperty(animal.size)){
   BySize[animal.size]= [];
  }

  BySize[animal.size].push(animal);

  return BySize
},{})
console.log(animalBysize)