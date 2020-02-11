```image
src: logo.svg
plain: true
```
### Question
9. Define a function named carMakeIsKnown that receives object car as a parameter
The function should check the make property on car. If it is in the knowMakesArray, return true. Otherwise, return false.

### Example

```code
lang: js
---
const knownMakesArray = ['BMW', 'FORD', 'TOYOTA'];

carMakeIsKnown({make:'BMW', model:'I3'}); //true
carMakeIsKnown({make:'FORD', model:'F-150'}); //true
carMakeIsKnown({make:'TESLA', model:'X'}); // false

```
### You Code
```html
<iframe height="400px" width="100%" src="https://repl.it/@ricklopez/js-exercise-9?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
```
### Video Walkthrough
```video
src: '/assets/js-009.mp4'
```