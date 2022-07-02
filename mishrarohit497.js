///////////////////////////////////////////////////////////////////////
// credits to: mishrarohit497
// https://leetcode.com/problems/spiral-matrix/discuss/2223139/java-0-ms-runtime
///////////////////////////////////////////////////////////////////////

let spiralOrderMishra = function(matrix) {

    let lst = [];
    let left = 0;
    let right = matrix[0].length-1;
    let top = 0;
    let bottom = matrix.length-1;

    while(true) {

    for(let i = left; i <= right; i++){
        lst.push(matrix[top][i]);
    }
    top = top +1;

    for(let i=top;i<=bottom;i++){
        lst.push(matrix[i][right]);
    }
    right = right -1;

    if(top>bottom || left>right)
        break;

    for(let i=right;i>=left;i--){
        lst.push(matrix[bottom][i]);
    }
    bottom = bottom -1;

    for(let i = bottom; i >= top; i--){
        lst.push(matrix[i][left]);
    }
    left = left +1;

    if(top > bottom || left > right)
        break;
    }
    return lst;
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
