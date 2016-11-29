// INCREMENT BY 10
// Write a for loop that uses a counter variable initialized at 5 and then increments it by 10 every time it executes. Use console.log() to output the value of the counter variable each time through the loop. Stop execution of the loop if the counter variable's value is greater than 120.
// for (var i=5; i<=120; i=i+10) {
// 	console.log(i)
// }
for (var i=5; i<=120; i=i+10) 
{	console.log(i)
}

// DECREMENT BY DIVISION 
// Write a for loop with a counter variable initialized at 4096. Each time the loop executes divide the counter variable's value by 2. Use console.log() to output its value every time. When the counter variable's value is 1, stop execution.
for (var i=4096; i>+1; i=i/2) {
	console.log(i)
}

// ARRAY ITERATION
// Create an array that contains the names of American Presidents. 
// Loop over that array with a for loop, and use 
// string concatenation with console.log() 
// to output the order and name of each President (see example below).

var presidents = ["George Washington", "John Adams", "Thomas Jefferson", "James Madison", "James Monroe", "John Quincy Adams", "Andrew Jackson", "Martin Van Buren", "William Henry Harrison", "John Tyler", "James Knox Polk", "Zachary Taylor", "Millard Fillmore", "Franklin Pierce", "James Buchanan", "Abraham Lincoln", "Andrew Johnson", "Ulysses S. Grant", "Rutherford Birchard Hayes", "James Abram Garfield", "Chester Alan Arthur", "Grover Cleveland", "Benjamin Harrison", "Grover Cleveland", "William McKinley", "Theodore Roosevelt", "William Howard Taft", "Woodrow Wilson", "Warren Gamaliel Harding", "Calvin Coolidge", "Herbert Clark Hoover", "Franklin Delano Roosevelt", "Harry S. Truman", "Dwight David Eisenhower", "John Fitzgerald Kennedy", "Lyndon Baines Johnson", "Richard Milhous Nixon", "Gerald Rudolph Ford", "James Earl Carter, Jr.", "Ronald Wilson Reagan", "George Herbert Walker Bush", "William Jefferson Clinton", "George Walker Bush", "Barack Hussein Obama", "Donald Trump"];

// This only works with arrays
for (var i=0; i<presidents.length; i++){
	console.log ("President #" + (i + 1) + " was " + presidents[i])
}

// Tthis is same but works with ALL objects.
// (The "in" enables you to add things later. It looks inside the object & grabs each key.)

// for (var i in presidents){
// 	console.log ("President #" + (i + 1) + " was " + presidents[i])
// }

// Array = object where keys/properties are numbers starting with 0 (0, 1, 2, ....)
// An object = a key + a value.  It's an unordered list where you have a key and then a value.
// Object = presidents
// The KEY/PROPERTY of 0 corrresponds with the VALUE of George Washington.

// console.log(array[prop])
// array[prop] = value

// = is an assignment
// == is equality/comparison (is it pretty similar?)
// === is strict equality (is it exactly equal in every way?)
// ALWAYS use 3, never 2. (w/ one exception we might learn later)
// == & === will always return either true or false

// 1 == '1' - true (because 1 & '1' are very similar)
// 1 === '1' - false (because they aren't exactly the same. 1 is a number. '1' is a string.)

// OBJECT ITERATION
// You can use another kind of for loop to iterate over objects. 
// Iterate over the object below and use console.log() to output the names of the keys in the object.

// This is called a "for ... in loop".  
// (iterate = loop = list all the keys/properties like argentine in a loop, one after another.

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in:
// var obj = {a:1, b:2, c:3};
    
// for (var prop in obj) {
//   console.log("obj." + prop + " = " + obj[prop]);
// }

// // Output:
// // "obj.a = 1"
// // "obj.b = 2"
// // "obj.c = 3"

// object = antSpecies
// key = prop = argentine, army, fire, etc.
// in = magic that makes it treat as object

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var key in antSpecies){
	console.log(key)
}


























