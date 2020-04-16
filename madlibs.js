/* Madlibs - JS - Only version
 * See flowchart: https://www.lucidchart.com/documents/view/1ac364ec-8af0-4668-b874-f3eba4b9e570
 * Traditional MadLibs game: Author creates a sentence, decides which words to get replaced, enters
 * parts of speech for those words. Gets player(s) who enter new words that match the parts of speech
 * without knowing the original sentence.  Then everyone gathers to read the new silly sentence. 
 */

// call Main
main();
/* Function Main
 * Manages game play: initializes variables and calls authorSetup and playerPopulate.  
 * Based on returned value of displayResult, recursively calls itself or alerts thanks and ends. 
 * All functions are within Main so that variables can be accessed without globals. 
 * @param none
 * @return none
 */
function main(){
	var sentenceString, sentence=[], toReplace, replaceIndex, replacement, replacements=[], newSentence, again=false;
	authorSetup();
	playerPopulate();
	again=displayResult();
	if(again==true){
		main();
	}
	else {
		alert("goodbye");
	}

  // initialize variables (in one line!)
  // function calls

  /* Functions */

  /* Function authorSetup
  
   * Author enters a sentence string. It is converted to an array. 
   * Author enters number of words to replace, then which ones, and replaces 
   * those words with their corresponding parts of speech in the array.
   * @param none
   * @return none
   */  
function authorSetup(){
	sentenceString=prompt("input a sentence for Mad Lib");
	 sentence=sentenceString.split(" ");
	toReplace=prompt("how many words are being replaced?");
	for (var i=0; i<toReplace; i++){
		replaceIndex=prompt("replace which word in sentence?");
		replaceIndex--;
		replacements[i]=replaceIndex;
		var partOfSpeech=prompt(" what part of speech is " +sentence[replaceIndex]);
		sentence[replaceIndex]=partOfSpeech;
	}
	alert("author go get player");
}
  /* Function playerPopulate
   * Ask player for replacement words.
   * @param none
   * @return none
   */
  function playerPopulate(){
	  for(var i=0; i<toReplace; i++){
		  replacement=prompt("enter a "+sentence[replacements[i]]);
		  sentence[replacements[i]]=replacement;
	  }
	 
  }
	
 /* Function displayResult
   * Creates a new sentence from the sentence array. 
   * Instructs player to get author so they can see the new sentence
   * Prompts to play again, returns confirm result.
   * @param none
   * @return again (boolean)
   */
 function displayResult(){
	 newSentence=sentence.join(" ");
	 alert("player, go get author ");
	 var ready=confirm( "click 'ok'to see new sentence");
	 alert(sentence);
	again=confirm("click ok to play again");
	 return again;
 }
// End Function Main
}
