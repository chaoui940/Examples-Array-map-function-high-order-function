let days = [ 
		'Saturday' ,
		'Sunday' ,
		'Monday' ,
		'Tuesday' ,
		'Wensday' ,
		'Thursday' , 
		'Friday' 
] ; 
// create an array with just 3 letters of previous array

let abv = days.map((days)=> {
	return days.substring(0 , 3);
})

console.log(abv)

// 
let people = [{
	first_name: "Riche",
	last_name: "Aboubaker"
},
{
	first_name: 'KADD',
	last_name: 'Missinsn'
},
{
	first_name: 'laala',
	last_name: 'Jason'
},
]

// create new array with the string full name of each person

let fullNames = people.map((person) => {
	return person.first_name +' '+ person.last_name ;
});
console.log(fullNames);

//
let animals = [{
  'name': 'cat',
  'size': 'small'
}, {
  'name': 'dog',
  'size': 'small'
}, {
  'name': 'lion',
  'size': 'medium'
}, {
  'name': 'elephant',
  'size': 'big'
}];
// Create a new array with just the names of the animals

let names = animals.map((cats)=> {
	return cats.name 
})
console.log(names);

//

let theNumbers = [4, 8, 15, 16, 23, 42];
// create a new array of objects with the properties value and index

let things = theNumbers.map((value , index)=> {
	return {
		value ,
		index
	}
})
console.log(things)

////
let starter = [2, 5, 10];
// Create a new array with each value multiplied by the next value
// The last value should be multiplied by the first value
// e.g. [2*5, 5*10, 10*2] == [10, 50, 20]
 let multiplied = starter.map((number, index)=> {
 	let nextindex = index + 1 ;
 	if (index==starter.length -1 ) {
 		nextindex = 0
 	}
 	return number * starter[nextindex];
 });
 console.log(multiplied);