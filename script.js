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