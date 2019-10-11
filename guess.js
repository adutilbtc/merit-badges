var guess=0;
var turns=0;
var answer=Math.floor(Math.random()*100)+1;
console.log(answer);
while (guess!=answer){
	guess=prompt("input guess 1-100");
	turns++;
	if (guess>answer){
		alert("too high");
	}
	else if (guess<answer){
		alert("too low");
	}
}
alert("you got it in "+turns+" turns");