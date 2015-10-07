// JS NOTES

//JS IN A WEB PAGE
	// INLINING
	<button onclick="alert('You clicked!')">Click me</button>

	// SCRIPT TAG
	<script type="text/javascript">
		var theButton = document.getElementByTagName('button')[0];
		theButton.onclick = fuction() {alert('You clicked!')};
	</script>

	// REMOTELY LINKED
	<script type="text/javascript" src="js/demo.js"></script>

	/* The defer attribute tells the browser it should load the script in 
	parallel (i.e without suspending the parsing procedure) but not 
	execute its contents until the document is completely parsed. 
	The async attribute makes the browser to load the script in parallel 
	and execute as soon as the script is loaded. */
	<script defer type="text/javascript" src="js/demo.js"></script>
	<script async type="text/javascript" src="js/demo.js"></script>

// VARIABLES
	// JS is a dymamically typed language (allow any kind of data to fit
	// in any variable and types can be easily changed)

	// Names can contain letters (uppercase and lowercase), numbers,
	// and the symbols _ and $.
	// Names cannot start with a number.

// DATA TYPES
	// Boolean: true or false
	// Number: 1.0, 10, .5, 0xAB
	// String: "Hello", 'hi'
	// Object: {name: 'Conan', str: 50}, ['sword', 'helmet'], null
	// Function: function(a, b) {return a * b};
	// undefined: undefined
	typeof true;
	typeof 'Hello';

// OBJECTS AND ARRAYS
	// ACCESSING VALUES
	var character = {name: 'Conan', str: 100};
	character.str;
	character.name; //=> Conan
	// index notation:
	character['name']; //=> Conan

	var inventory = [];
	inventory.push('rope');
	inventory.push('batarang');
	inventory.push('darts');
	inventory[1]; //=> batarang


var a = 10;
++a; // pre-increment: 
a++; // post-increment:

// THE CONDITIONAL OPERATOR
<condition> ? <expression_if_true> : <expression_if_false>

var aNumber = 7;
var evenOrOdd = (aNumber % 2 === 0) ? 'even' : 'odd'
console.log(aNumber + ' is ' + evenOrOdd);


// CONDITIONALS
	// IF, ELSE IF, ELSE
	// SWITCH
	var command = prompt('Show help');
	switch(command) {
		case 'prompt':
			alert('one');
		break;

		case 'alert':
			alert('two');
		break;

		default:
			alert('three');
		break;
	}
	
	switch(month) {
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
		  alert('31 days');
		break;

		case 2:
		  alert('28 / 29 days');
		break;

		default:
		  alert('30 days');
		break;
	}

//LOOPS
	// WHILE
	//  While loops are not usually used for passing through and entire collection. 
	//	Rather, they are usually used for looking for some specific value.
	var ratings = [1, 3, 1, 1, 5, 4, 3, 2, 2, 2, 3, 3, 1, 1, 2, 4, 5, 1, 2];
	var index = 0;
	var found = ratings[index] > 3;
	while (!found) {
	  index++;
	  found = ratings[index] > 3;
	}
	var result = index;

	// FOR
	// As rule of thumb, use for loops when passing through collections 
	// and the while syntax when looking for something.

























