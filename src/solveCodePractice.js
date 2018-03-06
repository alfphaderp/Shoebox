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

// Solve Code Practice Questions
function solveCodePractice() {
	/* 
	Note: this doesn't actually solve the problems, but pulls a jedi mind
	trick and swaps the question and answer tabs, then runs the code inside
	the new "question" tab, which returns the result from the answer tab
	*/
	
	// Iterate through every navigation tab to swap tabs and select "answer"
	var navTabs = document.getElementsByClassName("nav nav-tabs");
	for(var i = 0; i < navTabs.length; i++) {
		var tabs = navTabs[i].getElementsByTagName("li");
		navTabs[i].insertBefore(tabs[0], tabs[2]);
		tabs[0].className += "active";
		tabs[1].className -= "active";
	}
}

solveCodePractice();