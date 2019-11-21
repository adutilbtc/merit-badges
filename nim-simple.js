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
			
		}
		else if (next==1){ 
			count=userTurn(count);
		}
		next=nextSwitch(next);
	}
	declareWinner(next);
	again=playAgain(again);
}	
function cpuTurn(count){
	var cpuInput=Math.floor(Math.random()*3)+1;
	if(count+cpuInput>22){
	 cpuInput=1;
	}
	alert("cpu counts "+cpuInput);
	count+=cpuInput;
	alert("current count is "+count);
	return count;
	
}
function userTurn(count){
	var userInput=prompt("enter number 1-3");
	if(userInput!="1"&&userInput!="2"&&userInput!="3"){
		alert("invalid input, cheater");
	}
	else{
		count+=Number(userInput);
		alert("current count is "+count);
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
