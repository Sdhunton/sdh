// Practing Programming with JavaScript using the Console in a web browser
//console.log("Hello from myscript.js");
//console.log("Hello again!"); //Say Hello again to the user

/*
var name = prompt("What is your name?");
alert("Hello "+ name);
name = "Denise";
console.log("The user's name is "+name+"!");
*/

/*var name = prompt("What is your name");

console.log("Before");
	if(name){
		console.log("If block");
	}else{
		console.log("Else block");
	}
console.log("After");*/




/*
var count = 0;

console.log("Before");

while(count<10){
	console.log("Hello World!");
	console.log("Count is now: "+ count);
	count++;
}

while(prompt("What is your name?")){
	console.log("I got your name");
}*/

/*
for(var count=10;count ;count--){
	console.log("Hello World ", count);
}
console.log(count);
*/

//var friends = ["Sophie","Walston","Bruce","Nathan","Della"]; // This is an array in JavaScript
/*var friends = ["Sophie","Walston","Bruce","Nathan","Della", true, 1, null]; // This is an array in JavaScript with different types*/
//var friends = ["Sophie","Walston","Bruce","Nathan","Della", [true, 1, null]]; // This is a nested array in JavaScript
//console.log(friends);
//console.log(friends.length);
//console.log(friends[0]);//Subscripting to display only a select item using the index of the array
/*
var friendNo = 2;// Using a variable as an index
console.log(friends[friendNo]);//Subscripting with variables in the index of the array
*/

//ARRAYS
/*
var friends = ["Sophie","Walston","Bruce","Nathan","Della"]; // This is an array in JavaScript

for( var i=0; i < friends.length; i++ ) // or write //for( var i = 0; ;i=i+1 )// or for( var i = 0; ;i+=1 )
{
	console.log(friends[i]);//Subscripting with variables in the index of the array
};
*/

/*
//defining an object - the "{}" or parentheses define an item or item(s) as object(s)
var me = {
	//first_name: is the key, "Sheila" is the value
	first_name: "Sheila",
	last_name: "Psuedo",
	"Employee Number": 1  // Note that Employee Number is a string and must be in quotes
}; 


//me["first_name"] = "Sheila" // Using the subscript "[]" operator for an object
//Accessing the value for each object using the key.
console.log(me.first_name);
console.log(me.last_name);
console.log(me);  // Here "me" is an object
console.log(me["Employee Number"]); // Using the key as a subscript to access the value
console["log"](me); //Another way to access the values inside of the object me

var key ="first_name";
console.log(me[key]);  // Another was to access the value inside the object
*/


//LEARNING TO CREATE FUNCTIONS

var sayHello = function(){
	var message = "Hello";
		message = message + " World!";
		console.log(message);
	}

			//Adding arguments to a user-defined function
var debug = function(message){
	console.log("Debug", message);
}	

var doubleNumber = function(num){
	return num * 2;  //returne the value of num
}

debug(doubleNumber(707));// Evaluate 7 *2

sayHello();

var x=1;

//Here, the variable message will be replaced with the message inside the quotes
debug("x has been set")
sayHello();

x+=10;
var y = 100;
debug("x has been increased. y has been set");

sayHello();

