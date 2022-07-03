///////////////////////////////////////////////////////////////////////
//                      Inspiration for refactoring
// credits to: mishrarohit497
// https://leetcode.com/problems/spiral-matrix/discuss/2223139/java-0-ms-runtime
///////////////////////////////////////////////////////////////////////

// ! This solution satisfies requirement to work with 'asymetric' matrices also
//It doesn't have to be the same number of rows and columns

let spiralOrderMishra = function(matrix) {

    let output = [];

    // defining 'landmarks' like this makes possible
        // to position a 'pointer' anywhere in a matrix
    // that way looping in all directions becomes easy
    let left = 0;
    let right = matrix[0].length-1;
    let top = 0;
    let bottom = matrix.length-1;

    // looping from left to right: for(let i = left; i <= right; i++)
    // right to left: for(let = right; i >= left; i--)
    // vertical down: for(let = top; i <= bottom; i++)
    // vertical up: for(let = bottom; i >= top; i--)

    // this while loop is used to cycle through a nested for loops
    // until any of the break statements kicks in
    while(true) {

    // this loop outputs: [ 1, 2, 3]
    // ! in second turn, it adds final 5 to the array
        // he uses this loop everytime he needs horizontal looping
            // ? is it possible to add '5' in the last one
    for(let i = left; i <= right; i++){
        output.push(matrix[top][i]);
    }
    top = top +1;   // vertical looping, setting the cursor from top to the middle row

    // vertical looping that adds: 6, 9
    for(let i = top; i <= bottom; i++){
        output.push(matrix[i][right]);
    }
    right = right - 1; // moving the 'cursor' for one position to left
                        // to the middle column

    if(top > bottom || left > right)    // this one breaks the while loop
        break;

    // backward horizontal looping that adds: 8, 7
    for(let i = right; i >= left; i--){
        output.push(matrix[bottom][i]);
    }
    bottom = bottom -1; // positioning a 'pointer' one row up

    // vertical looping upwards, adding: 6, 9 ???
    for(let i = bottom; i >= top; i--){
        output.push(matrix[i][left]);
    }

    left = left + 1; // one position to the right

    if(top > bottom || left > right)
        break;
    }
    return output;
}

// Tests for Spiral Order Mishra
// let matrix = [[ 1, 2, 3],
//              [ 4, 5, 6],
//              [ 7, 8, 9]];

// console.log(spiralOrderMishra(matrix)); // [1,2,3,6,9,8,7,4,5]

// matrix = [[1, 2, 3, 4],
//           [5, 6, 7, 8],
//           [9,10,11,12]];

// console.log(spiralOrderMishra(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]

// matrix = [[1, 2, 3, 4, 5],
//           [6, 7, 8, 9, 10],
//           [11, 12, 13, 14, 15],
//           [16, 17, 18, 19, 20]];

// console.log(spiralOrderMishra(matrix));
// [1,2,3,4,5,10,15,20,19,18,17,16,11,6,7,8,9,14,13,12]
