<img src="https://media.giphy.com/media/DfSXiR60W9MVq/giphy.gif" width="100%">

# Useless math game

Whant to practice some math? this game will not help you at all\
https://glowing-cheesecake-78c5c7.netlify.app/index.html

# Installation

Just clone the reposirtory and everything should work.

# Code Review

1. `index.html:22/60` - h4 has been placed above h3
1. `functions.js:8` - "(...)document.querySelector('.hint button');" can be written as "(...)hint.querySelector('button');" because ".hint" has already been created as a separate variable
1. `index.html:28-57` - Very similar code that could be created by a loop in javascript
1. `functions.js:94-100` - This code could be turned into a functions as it is used multiple times
1. `functions.js` - Remember to use descriptive variable names and comments in your code to make it easier to understand

Code reviewed by:
Douglas Lindahl
https://github.com/DouglasLindahl

# Testers

Tested by the following people:

1. Josef Forkman
2. Petter Jakobsson
