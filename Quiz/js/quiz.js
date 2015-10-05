/****************************************
author: jorge juan perales			
date: september 2015					
summary: Javascript Quiz	
*****************************************/


var user = {}
var responses = []

function askName(string) {
	user.name = prompt('What is your name?');
}

askName();

// are zombies alive?
function isZombie(string) {
	var response = prompt('Are zombies alive? (Yes or No)');
	if(response.toLowerCase() === 'yes') {
		response = false;
	}else if(response.toLowerCase() === 'no') {
		response = true;
	}else{
		alert('You can only say yes or no');
		return isZombie();
	}

	responses.push(response);
}
isZombie();

// select your weapon
function whatWeapon(string) {
	var response = prompt('Does Spiderman use an axe, a net or a sword?');
	response = response.toLowerCase();
	switch(response){
		case 'axe':
			response = false;
		break;
		case 'net':
			response = true;
		break;
		case 'sword':
			response = false;
		break;
		default:
			alert('That\'s not a weapon!');
			return multipleChoice();
		break;
	}
	responses.push(response);
}
whatWeapon();

// find the average hit power
function hitPower(power) {
	var response = parseInt(prompt('Guess the hit power of a Batman punch (in kg/cm2):'));
	if(response < 50) {
		response = false;
	}else if(response >= 50 && response < 150) {
		response = true;
	}else {
		alert('That\'s too much!');
		response = false;
	}
	responses.push(response);
}
hitPower();

// how many years does a superhero live
function heroAge(lives) {
	var response = parseInt(prompt("How many years does a superhero live: 50, 200, or 500?"));
	switch(response) {
		case 50:
			response = false
		break;
		case 200:
			response = false
		break;
		case 500:
			response = true
		break;
		default:
			alert('That makes no sense!')
			response = false
		break;
	}
	responses.push(response);
}
heroAge();


function evaluate(responses) {
	var correctAnswers = []
	var incorrectAnswers = []

	for(var i = 0; i < responses.length; i += 1) {
		if(responses[i] === true) {
			correctAnswers.push(responses[i]);
		}else {
			incorrectAnswers.push(responses[i]);
		}
	}

	user['Correct answers'] = correctAnswers.length;
	user['Incorrect answers'] = incorrectAnswers.length;

	showResults();
}

function showResults() {
	if(user['Incorrect answers'] === 0) {
		alert(user.name + ', you got it all right, you are a master!');
	}else {
		alert(user.name + ', you got ' + user['Correct answers'] + ' correct answers and ' + user['Incorrect answers'] + ' incorrect answers.')
	}
}


evaluate(responses);














