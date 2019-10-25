/* Guess advanced by Andrew */
var games=0;
var again=true;
var totalTurns=0;
while(playAgain==true){
	games++;
	var turns = 0;
	var guess = 0;
	var answer = Math.floor(Math.random()*100)+1;
 console.log(answer);
	while (guess != answer){
		guess = prompt("Guess my number (1-100).");
		if (guess == "q"){
			alert("You quit.");
			break;
		}
		if (validate(guess) == true){
			turns++;
			if (guess < answer){
				alert("Too low!");
			}
			else if (guess > answer){
				alert("Too high!");
			}
		}
		else alert("Invalid guess, try again.");
	}
	if (guess=="q"){
		alert("quitting");
		break;
	}
}


/* Function validate
 * Ensures guess is a valid integer within answer range
 * @param guess
 * @return boolean
 */
function validate(guess){
	if (guess > 0 && guess < 101){
		return true;
	}
	else {
		return false;
	}
	if (guess==answer){
		(gameStats(turns));
}
/*function gameStats
*gives curent stats
*@param turns, totalTurns
*@return none
*/
function gameStats(turns){
	var averageTurns=totalTurns/games;
	alert("You guessed my number in "+turns+" turns.");
	totalTurns=totalTurns+turns;
	alert("you won "+games+"with an average of "+averageTurns+" turns per game"); 
}
/*function playAgain(again)
*checks for play again
*@param again
*@return boolean
*/
function playAgain(again){
	 again=prompt("playing again? y for yes");
	if(again=="y"){
		return true;
	}else{
			alert("goodbye");
		}
}
