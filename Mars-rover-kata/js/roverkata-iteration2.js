/*************************************************
author: jorge juan perales			
date: september 2015					
summary: Javascript, Mars Rover Kata, iteration 2	
**************************************************/



// create the object
var Rover = {
	position: [0, 0],
	direction: 'N'
}

// create a grid
var numRows = 10;
var numCols = 10;
var grid = [];
for(var i = 0; i < numRows; i++) {
	grid[i] = new Array(numCols);
}

// ACTIONS
function goForward(rover) {

	switch(rover.direction) {
		case 'N':
			rover.position[0]++
			break;
		case 'E':
			rover.position[1]++
			break;
		case 'S':
			rover.position[0]--
			break;
		case 'W':
			rover.position[1]--
			break;
	}

	//wrap Rover from one edge of the grid to another
	if(rover.position[0] > 10) {
		rover.position[0] = 0;
	}else if(rover.position[0] < 0) {
		rover.position[0] = 10;
	}

	if(rover.position[1] > 10) {
		rover.position[1] = 0;
	}else if(rover.position[1] < 0) {
		rover.position[1] = 10;
	}
}

function goBack(rover) {
	switch(rover.direction) {
		case 'N':
			rover.position[0]--
			break;
		case 'E':
			rover.position[1]--
			break;
		case 'S':
			rover.position[0]++
			break;
		case 'W':
			rover.position[1]++
			break;
	}

	//wrap from one edge of the grid to another
	if(rover.position[0] > 10) {
		rover.position[0] = 0;
	}else if(rover.position[0] < 0) {
		rover.position[0] = 10;
	}

	if(rover.position[1] > 10) {
		rover.position[1] = 0;
	}else if(rover.position[1] < 0) {
		rover.position[1] = 10;
	}
}

function turnLeft(rover) {
	switch(rover.direction) {
		case 'N':
			rover.direction = 'W'
			break;
		case 'E':
			rover.direction = 'N'
			break;
		case 'S':
			rover.direction = 'E'
			break;
		case 'W':
			rover.direction = 'S'
			break;
	}
}

function turnRight(rover) {
	switch(rover.direction) {
		case 'N':
			rover.direction = 'E'
			break;
		case 'E':
			rover.direction = 'S'
			break;
		case 'S':
			rover.direction = 'W'
			break;
		case 'W':
			rover.direction = 'N'
			break;
	}
}

// receive and perform instructions
function setInstructions(rover) {
	var str = prompt('Enter instructions (f: forward, b: back, r: right, l: left):');
	var instructions = str.split("");
	for(var i in instructions) {
		switch(instructions[i]) {
			case 'f':
				goForward(rover);
				break;
			case 'b':
				goBack(rover);
				break;
			case 'r':
				turnRight(rover);
				break;
			case 'l':
				turnLeft(rover);
				break;
		}
	}
	console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

setInstructions(Rover);

