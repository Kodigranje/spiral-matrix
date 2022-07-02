# Ideas about Spiral Looping

## Matrix 3x3
```
[ 1, 2, 3]
[ 4, 5, 6]
[ 7, 8, 9]
```

## Matrix 5x4
```
[1, 2, 3, 4, 5]
[6, 7, 8, 9, 10]
[11, 12, 13, 14, 15]
[16, 17, 18, 19, 20]
```

## Misrarohit solution
```

```
## Setting controls (landmarks)
```
// defining 'landmarks' like this makes possible
        // to position a 'pointer' anywhere in a matrix
    // that way looping in all directions becomes easy

    let left = 0;
    let right = matrix[0].length-1;
    let top = 0;
    let bottom = matrix.length-1;
```

## Navigating a matrix
It is done by statements like these:
```
top = top + 1;   // moving the cursor from top to the middle row

right = right - 1; // moving the 'cursor' for one position to the left (to the middle column)

bottom = bottom -1; // positioning a 'cursor' one row up

left = left + 1; // one position to the right
```
