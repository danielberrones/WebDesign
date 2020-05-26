function determineStringEnding(myString,ending) {
	if (ending in myString) {
		console.log(true);
	} else {
		console.log(false);
	}
}

determineStringEnding("This is a string.","his");
