/*************************************************
author: jorge juan perales			
date: september 2015					
summary: Javascript, Mars Rover Kata, iteration 1	
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

// give Rover some instructions
goForward(Rover);
goForward(Rover);
turnRight(Rover);
goForward(Rover);
// show Rover's current position
document.write(Rover.position);
