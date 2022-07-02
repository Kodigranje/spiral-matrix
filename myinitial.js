import { rowFwd, rowBckwd, matriceDown } from "./helpers.js" ;

function spiralOrder(matrix) {

    let outputArr = [];
    const height = matrix.length;
    const width = matrix[0].length;

    let part1 = rowFwd(matrix[0], width - 1);
    outputArr.push(part1);

    let part2 = matriceDown(matrix, width - 1);
    outputArr.push(part2);

    let part3 = rowBckwd(matrix[height - 1], width - 2);
    outputArr.push(part3);

    let part4 = rowFwd(matrix[height - 2], width - 1);
    outputArr.push(part4);

    // flatten the array
    let outputArrFlat = outputArr.flat();

    return outputArrFlat;
  }

// Tests for Spiral Order
let matrix = [[ 1, 2, 3],
             [ 4, 5, 6],
             [ 7, 8, 9]];

console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

matrix = [[1, 2, 3, 4],
          [5, 6, 7, 8],
          [9,10,11,12]];

console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]
