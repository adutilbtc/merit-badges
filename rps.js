/* rps by Andrew */ 
var rpsWords=["rock","paper","scissors"];
var setwinner=[[0,1,1],[0,2,0],[1,0,0],[1,2,1],[2,1,0],[2,0,1]];
var outOf=prompt("best out of?");
var turns=0;
var scoreKepper=[0,0];
for(let turn=0; turn<outOf; turn++){
	let pChoice=userTurn();
	if (pChoice=="q"){
		turn=outOf;
	}
	else{
		let cChoice=cpuTurn();
	}
	if (pChoice==cChoice){
		alert("we both chose "+cChoice);
		turn--;
	}
	else{
		let winner=turnWinner(cChoice,pChoice);
		updateScore();
	}
}
 winner=gameWinner(scoreKepper);




function userTurn(){
	pChoice=prompt("you're up enter [r]ock,[p]aper or [s]cissors");
	return pChoice;
}
function cpuTurn(){
	cChoice=Math.floor(Math.random()*3)+1;
	alert("cpu chose "+cChoice);
	return cChoice;
}
function turnWinner(cChoice, pChoice){
	for(let index=0; index<6; index++){
		if (setWinner[index][0]==userTurn&&setWinner[index][1]==cpuTurn){
			return setWinner[index][2];
		}
		else{
			alert("invalid input, you forfiet the round");
			return 1;
		}
	}
}
function updateScore(){

return score;
}
function gameWinner(scoreKepper){
}