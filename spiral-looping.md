# Ideas about Spiral Looping

## Goal
To be able to loop through any matrix in a spiral manner, no matter how many rows or columns the matrix has.

## Some of Matrix Examples

### Matrix 3x3
```
[ 1, 2, 3]
[ 4, 5, 6]
[ 7, 8, 9]
```
### Matrix 3x4
```
[1, 2, 3, 4]
[5, 6, 7, 8]
[9,10,11,12]
```
### Matrix 5x3
```
[1, 2, 3]
[4, 5, 6]
[7, 8, 9]
[10, 11, 12]
[13, 14, 15]
```
### Matrix 5x4
```
[1, 2, 3, 4, 5]
[6, 7, 8, 9, 10]
[11, 12, 13, 14, 15]
[16, 17, 18, 19, 20]
```

## Idea
We define "milestones" (the 1st and last element in a row or column), and after that we control the position of the start, end and direction of a loop.

## Defining Milestones
Doing like this makes it possible to position a 'cursor' anywhere in a matrix and that way looping in all directions becomes easy.
```
let top = 0;
let bottom = matrix.length - 1;
let left = 0;
let right = matrix[0].length - 1;
```

## Navigating a matrix (the position of the 'cursor')
It is done by adding statements between 'for loops', like these:
### Moving the cursor one row downwards
```
top = top + 1;
```
### Moving the 'cursor' for one position to the left
```
right = right - 1;
```
### Positioning the 'cursor' one row up
```
bottom = bottom -1;
```
### Moving one position to the right
```
left = left + 1;
```
This way everything is obvious and logical, without too much abstraction.

## Looping Examples
### Horizontal: left to right
```
for (let i = left; i <= right; i++) {
    let el = matrix[top][i];
    finalArr.push(el);
}
```
### Horizontal: right to left
```
for (let i = right; i >= left; i--) {
    let el = matrix[bottom][i];
    finalArr.push(el);
}
```
### Vertical: downwards
```
for (let i = top; i <= bottom; i++) {
    let el = matrix[i][right];
    finalArr.push(el);
}
```
### Vertical: upwards
```
for (let i = bottom; i >= top; i--) {
    let el = matrix[i][left];
    finalArr.push(el);
}
```
---
## How to secure multiple passes through these steps?
### While loop
This is implemented by nesting all those "for loops" inside one "while loop", like this:
```
while (true) {
    for loop 1
    for loop 2
    ...
}
```
All this with the 'break statement' at appropriate positions:
```
let elCount = matrix.length * matrix[0].length;

...

if (finalArr.length === elCount) {
    break;
}
```
---
## Complete Implementation
At the link: [Spiral Loopin Through Matrix](mysecondtake.js)
