export { rowFwd, rowBckwd, matriceDown };

let rowFwd = function(row, num) {
    let outputArr = [];

    for (let i = 0; i < num; i++) {
        let el = row[i];
        outputArr.push(el);
    }
    return outputArr;
};

// Tests Row Fwd
// let row = [ 1, 2, 3];

// console.log(rowFwd(row, 2)); // [ 1, 2 ]
// console.log(rowFwd(row, 3)); // [ 1, 2, 3 ]
// console.log( rowFwd(row, 0)); // [ ]

let rowBckwd = function(row, num) {
    let outputArr = [];

    for (let i = num; i >= 0; i--) {
        let el = row[i];
        outputArr.push(el);
    }
    return outputArr;
};

// Tests Row Backward
// let row = [ 1, 2, 3];

// console.log(rowBckwd(row, 2)); // [ 3, 2 ]
// console.log(rowBckwd(row, 3)); // [ 3, 2, 1 ]
// console.log( rowBckwd(row, 0)); // [ ]

// let matriceUp = function(matrix, colStart) {
//     const height = matrix.length;

//     let finalArr = [];

//     for (let row = height - 1; row >= 0 ; row--) {
//             let el = matrix[row][colStart];
//             finalArr.push(el);
//     }
//     return finalArr;
// };

// Tests Matrice Upward
// let matrix = [[ 1, 2, 3],
//               [ 4, 5, 6],
//               [ 7, 8, 9]]

// console.log(matriceUp(matrix, 0)); // [7, 4, 1]
// console.log(matriceUp(matrix, 1)); // [ 8, 5, 2 ]
// console.log(matriceUp(matrix, 2)); // [ 9, 6, 3 ]

//TODO: matriceDown     !!! without copying
let matriceDown = function(matrix, col) {
    let height = matrix.length;
    let finalArr = [];

    let row = 0;
    while (row < height) {
        let el = matrix[row][col];
        finalArr.push(el);
        row++;
    }
    return finalArr;
};

// Tests Matrice Down
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]];

// console.log(matriceDown(matrix, 0)); // [1, 4, 7]
// console.log(matriceDown(matrix, 1)); // [ 2, 5, 8 ]
// console.log(matriceDown(matrix, 2)); // [ 3, 6, 9 ]
