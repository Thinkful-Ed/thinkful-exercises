```image
src: logo.svg
plain: true
```
### Question
10. Write a function that returns a new array of electric cars (make-model) in the cars array. The returned array should include a string with the make and model separated by a dash like this ['make-model', 'make-model'].

### Example

```code
lang: js
---
const cars = [{
make: 'BMW',
color: 'Black',
model: 'I3',
doors: '2'
electric: true
},
{
make: 'Toyota',
color: 'Silver',
model: 'Prius',
doors: '4'
electric: false
},
{
make: 'Nissan ',
color: 'Red',
model: 'Leaf',
doors: '2'
electric: true
}
];
 
 
getElectricCars(cars) //returns ['BMW-I3', 'Nissan-Leaf']
```
### You Code
```html
<iframe height="400px" width="100%" src="https://repl.it/@ricklopez/js-exercise-10?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
```
### Video Walkthrough
```video
src: '/assets/js-010.mp4'
```