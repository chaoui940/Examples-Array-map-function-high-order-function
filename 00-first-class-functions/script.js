// 01 - Define a function called getName that returns your name as a string.

function getName() {
	let myname='aboubaker'
	return myname
};
// 02 - Define a function called greet that takes in 2 parameters:
// getNameFn - a function that returns your name
// greeting - a string greeting, e.g. 'Hello', 'Goodbye' etc.
// The function should log `Some greeting, your-name-here` by invoking the getNameFn
// Invoke your function several times with different greetings
function greet (getNameFn , greeting) {
	console.log(greeting,getNameFn())
}
greet(getName,'Hello People');
greet(getName, 'Hello.. this is another');

// 03 - Define a function called makeAdder that takes in 1 parameter:
// number - any valid number
// makeAdder should return a function that takes in 1 parameter:
// other_number - any valid number
// The returned function should return the sum of the two numbers
function makeAdder (number) {
	return (other_number) => {
		return number + other_number ;
	}
}


// 04 - Use your makeAdder function to create a function that adds 10 to a number
// Invoke your function several times with different numbers, log the result

let tenAdder = makeAdder(10);

console.log(tenAdder(2));
console.log(tenAdder(20));

let tweAdder = makeAdder(20);

console.log(tweAdder(2));
console.log(tweAdder(20));