var code = [];
var colors = ["w", "b", "c", "y", "g", "r"];
var guess = [];
var feedback = [];
var turns=0;
main();
function main() {
	if(feedback[3]!="b"&&guess[0]!="q"){
	code = setupCode();
	guess = getGuess();
	feedback = analyzeGuess();
	console.log(guess, feedback);
		turns++;
	}
	else if(feedback[3]=="b"){
		alert("congrats you got it in "+turns+" guesses");
	}
	else alert("quitter");
}
function setupCode() {
	let code = [];
	for (var peg = 0; peg < 4; peg++) {
		color = Math.floor(Math.random() * 6);
		code[peg] = colors[color];
	}
	console.log(code);
	return code;
}
function getGuess() {
	let guess = [];
	var guessString = prompt(
		"enter four colors of your guess seperated by commas no spaces"
	);
	guess = guessString.split(",");
	return guess;
}
function analyzeGuess() {
	let feedback = [];
	let guessedCode = [];
	let goodGuesses = [];
	for (var i = 0; i < 4; i++) {
		if (guess[i] == code[i]) {
			feedback.push("b");
			guessedCode.push(i);
			goodGuesses.push(i);
		}
	}
	for (var g = 0; g < 4; g++) {
		if (!goodGuesses.includes(g)) {
			for (var c = 0; c < 4; c++) {
				if (!guessedCode.includes(c)) {
					if (guess[g] == code[c]) {
						feedback.push("w");
						guessedCode.push(c);
						goodGuesses.push(g);
						break;
					}
				}
			}
		}
	}
	return feedback;
}
