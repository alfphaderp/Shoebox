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

/*
This script swaps the question and answer tabs of code practice problems and
runs the answers inside the question tab
*/

// TODO: Finish optimizing with jQuery

// Solve Code Practice Questions
function solveCodePractice() {
	// Iterate through every navigation tab
	var navTabs = $("ul.nav.nav-tabs");
	for(var i = 0; i < navTabs.length; i++) {
		var tabs = $(navTabs[i]).find("li");
		
		// Select answer tab
		$($(navTabs[i]).find("a")[1]).trigger("click");
		
		// Swap tabs
		navTabs[i].insertBefore(tabs[0], tabs[2]);

		// Rename tabs
		tabs[0].getElementsByTagName("span")[0].innerHTML = "Answer";
		tabs[1].getElementsByTagName("span")[0].innerHTML = "Question";
	}
	
	// WIP
}

solveCodePractice();
