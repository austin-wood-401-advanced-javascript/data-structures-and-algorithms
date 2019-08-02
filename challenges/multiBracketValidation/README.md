### Multi Bracket Validation!
### Author: Austin Wood


## Challenge: 
* Write a function that will take in a string and check if the brackets in the string are balanced.
* It should check for three kinds of brackets () [] {} 

## Solution: 
* Split the sting with .split method and check each index in the new array against an object that contain the various brackets. 
* If there is a match increment the value of the object with the matching bracket.
* Check that each value in the object is zero and return that boolean

### Links and Resources
* [submission PR](https://github.com/austin-wood-401-advanced-javascript/data-structures-and-algorithms/pull/8)
  
#### To Test Run
* npm test

#### UML
* [Whiteboard](https://github.com/austin-wood-401-advanced-javascript/data-structures-and-algorithms/blob/master/challenges/multiBracketValidation/assets/8_1_19%2C%207_53%20PM%20Office%20Lens.jpg)
