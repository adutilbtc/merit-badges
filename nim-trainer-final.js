
/* 
 * Nim Simple - Mr. M.'s Version 
 * Note: Global variables have been passed as parameters.  This is not best practice, but helpful for tracking.
 */

/* Initialize Globals */
var again=true, games=0, count=0, next=0;

/* Main */
var gameType=null;
alert("Let\'s play Nim!");
while (again == true) {
	count=0;
	turn=0;
	gameType=prompt("[t]rainer or [s]imple?");
	next=games%2;
	while (count < 21){
		if (next == 0) {
			count = cpuTurn(count);
			alert("Count is now "+count);
		}
		else {
			count = userTurn(count);
			alert("Count is now "+count);
		}
		if (count < 21) next=nextSwitch(next);
	}
	again = declareWinner(next);
}
alert("Nice playing with you!");

/* Functions */

/* CPU Turn -- random turn but not purposely losing or going over 21 */
function cpuTurn(count){
	let goodTurn = false;
	let turn=0;
	while (goodTurn == false) {
		turn = Math.floor(Math.random()*3)+1;
		if (turn == 1 || turn > 1 && count+turn < 21) goodTurn = true;
	}
	alert("CPU counts "+turn);
	count += turn;
	return count;
}

/* User Turn: prevents entering invalid turns */
function userTurn(count) {
	let goodTurn = false;
	let turn=0;
	while (goodTurn == false) {
		turn = prompt("Enter 1, 2 or 3");
		if (turn > 0 && turn < 4 && Math.floor(turn)==turn) goodTurn=true;
		else alert("Invalid input. Enter 1,2 or 3.");
	}
	count += parseInt(turn);
	return count;
}

/* Next Switch: changes turns */
function nextSwitch(next){
	if (next==0) next = 1;
	else next = 0;
	return next;
}

/* Declare Winner: Specifies winner value and asks for play again input */
function declareWinner(next){
	if (next==0) winner = "You";
	else winner = "I";
	alert(winner + " won!");
	games++;
	again = confirm("Press OK to play, Cancel to quit.");
	return again;
}
function cpuTrainer(count){
	if(count%4!=0) turn=4-(count%4);
	else if (count==20) turn=1;
	else turn=Math.floor(Math.random()*3)+1;
	alert("cpu counts "+turn);
	count+=turn;
	return count;
}
function pickGame(gameType){
	gameType=prompt("[t]rainer or [s]imple?");
	if(gameType=="t") cpuTrainer(count);
	else if(gameType=="s") cpuTurn(count);
	return gameType;
}
