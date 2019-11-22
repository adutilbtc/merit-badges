/*nim simple by Andrew*/
var games=0;
var again=true;
while(again==true){
	alert("welcome to nim");
	var count=0;
	var turns=0;
	var next=games%2;
	while(count<21){
		
		if(next==0){
			count=cpuTurn(count);
			alert("current count is "+count);
		}
		else if (next==1){ 
			count=userTurn(count);
			alert("current count is "+count);
		}
		next=nextSwitch(next);
	}
	declareWinner(next);
	again=playAgain(again);
}	
function cpuTurn(count){
	let turn=22;
	while(turn!=1 && count+turn>20){
		turn=Math.floor(Math.random()*3)+1;
	}
	alert("cpu counts "+turn);
	return count+=turn;
}
function userTurn(count){
	var userInput=prompt("enter number 1-3");
	if(userInput!="1"&&userInput!="2"&&userInput!="3"){
		alert("invalid input, cheater");
	}
	else{
		count+=Number(userInput);
		
		return count;
	}
}



function nextSwitch(next){
	if(next==0){
		return 1;
	}
	else if (next==1){
		return 0;
	}
	
}


function declareWinner(next){
	if(next==1){
		alert("you win");
		games++;
	}
	else if (next==0){
		alert("cpu wins");
		games++;
	}
}



function playAgain(again){
	again=prompt("playing again? y for yes");
	if(again=="y"){
		again= true;
		
	}
	else{
		alert("goodbye");
		again= false ;
	}
	return again;
}
