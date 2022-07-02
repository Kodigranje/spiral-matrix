///////////////////////////////////////////////////////////////////////
// heavily inspired by: mishrarohit497
// https://leetcode.com/problems/spiral-matrix/discuss/2223139/java-0-ms-runtime
// ----------------------
// * DEBUG 5x4:
//
// [1,2,3,4,5,10,15,20,19,18,17,16,6...], instead of:
// [1,2,3,4,5,10,15,20,19,18,17,16,11,6...]
///////////////////////////////////////////////////////////////////////

let spiralOrder = function(matrix) {
    let finalArr = [];
    let count = 0;
    let elCount = matrix.length * matrix[0].length;
    // console.log(`elCount = ${elCount}`);     // DEBUG print

    // 1. define 'milestones'
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    // 2. a loop for every move
    // 2a. navigate 'cursor' accordingly

    while (true) {

        // 1st move - horizontal left to right
        for (let i = left; i <= right; i++) {
            let el = matrix[top][i];
            finalArr.push(el);
        }

        if (finalArr.length === elCount) {
            break;
        }

        // 'cursor' navigation: one step downwards
        top = top + 1;

        // 2nd move - vertical downwards
        for (let i = top; i <= bottom; i++) {
            let el = matrix[i][right];
            finalArr.push(el);
        }

        // 'cursor' navigation: one step left
        right = right - 1;

        // 3rd move - right to left
        for (let i = right; i >= left; i--) {
            let el = matrix[bottom][i];
            finalArr.push(el);
        }
    }

    return finalArr;
};

// Tests for Spiral Order 2nd Take
// let matrix = [[ 1, 2, 3],
//              [ 4, 5, 6],
//              [ 7, 8, 9]];

// console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

// matrix = [[1, 2, 3, 4],
//           [5, 6, 7, 8],
//           [9,10,11,12]];

// console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]

let matrix = [[1, 2, 3, 4, 5],
          [6, 7, 8, 9, 10],
          [11, 12, 13, 14, 15],
          [16, 17, 18, 19, 20]];

console.log(spiralOrder(matrix));
[1,2,3,4,5,10,15,20,19,18,17,16,11,6,7,8,9,14,13,12]
