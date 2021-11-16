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
	return days.substring(0 , 2);
})

console.log(abv)