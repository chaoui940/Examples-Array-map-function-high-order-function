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
	return person.first_name , person.last_name ;
});
console.log(fullNames);