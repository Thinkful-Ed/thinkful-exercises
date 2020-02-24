```image
src: logo.svg
plain: true
```
### Question
1. Complete the `Class` below and implement a queue with 2 stacks (inQueu & outQueue). Your queue should have an enqueue and a dequeue method and it should be "first in first out" (FIFO).

### Contraints
Optimize for the time cost of m calls on your queue. These can be any mix of enqueue and dequeue calls.

Assume you already have a stack implementation and it gives O(1) time push and pop.

### Example
```code
lang: js
---
const queue = new Queue();

queue.enqueue(1);
console.log(queue.instack); // [1]
queue.dequeue();
console.log(queue.instack); // []

```
### You Code
```html
<iframe height="400px" width="100%" src="https://repl.it/@ricklopez/js-exercise-11?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
```
### Video Walkthrough
```video
src: '/assets/js-011.mp4'
```