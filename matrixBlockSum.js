/**
 * @param {number[][]} mat
 * @param {number} K
 * @return {number[][]}
 */
const matrixBlockSum = (mat, K) => {
    
};

// return a matrix answer where each answer[i][j] is the sum of all elements mat[r][c] for i - K <= r <= i + K, j - K <= c <= j + K, and (r, c) is a valid position in the matrix.


let mat = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
], k = 1

console.log(matrixBlockSum(mat,k) === [
    [12,21,16],
    [27,45,33],
    [24,39,28]])


mat = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
], k = 2

console.log(matrixBlockSum(mat,k) === [
    [45,45,45],
    [45,45,45],
    [45,45,45]])
