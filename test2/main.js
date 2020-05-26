function countLongestWord(myString) {
        // setup	
	let splitString = myString.split(" ");
	let longestWord = 0;
	let theWord = "";
        // code
	for (let i = 0; i < splitString.length; i++) {
		if (splitString[i].length > longestWord) {
                        theWord = splitString[i];	
			longestWord = splitString[i].length;
		}
	}
	console.log(theWord);
	return longestWord;
}


