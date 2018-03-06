/*
MIT License

Copyright (c) 2018 alfphaderp

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// Solve multiple choice questions
function solveMultipleChoice() {
	// Return the number of correctly solved questions
	function getSolvedQuestions() {
		return document.getElementsByClassName("alert alert-success").length;
	}
	
	// Iterate through all multiple choice questions in each form
	var forms = document.getElementsByTagName("form");
	for(var i = 0; i < forms.length; i++) {
		var labels = forms[i].getElementsByTagName("label");
		
		// Skip form if it is not a multiple choice question
		if(labels.length > 0) {
			var button = forms[i].getElementsByClassName("btn btn-success")[0];
			
			// Clear all forms to prevent false positives when checking
			for(var j = 0; j < labels.length; j++) {
				labels[j].getElementsByTagName("input")[0].checked = false;
				button.click();
			}
			
			// Try every possible answer until a the correct one is found
			var j = 0;
			var solvedQuestions = getSolvedQuestions();
			while(getSolvedQuestions() == solvedQuestions) {
				labels[j].getElementsByTagName("input")[0].checked = true;
				button.click();
				j++;
			}
			console.log("A multiple choice question has been solved!");
		}
	}
	console.log("All multiple choice questions have been solved!");
}

solveMultipleChoice();