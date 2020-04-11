/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = (grid) => {
    
    const dpMtx = []
    const rowLen = grid.length
    const colLen = grid[0].length

    for (let i=0; i<rowLen; i++) {
        let newArr = new Array(colLen).fill(0)
        dpMtx.push(newArr)
    }

    for (let i=0;i<rowLen; i++) {
        for (let j=0; j<colLen; j++) {
            if (i===0 && j===0) {
                dpMtx[i][j] = grid[i][j]
            } else if (i === 0 && j > 0) {
                dpMtx[i][j] = grid[i][j] + dpMtx[i][j-1]
            } else if (i > 0 && j === 0) {
                dpMtx[i][j] = grid[i][j] + dpMtx[i-1][j]
            } else {
                let top = dpMtx[i-1][j]
                let left = dpMtx[i][j-1]
                dpMtx[i][j] = grid[i][j] + Math.min(top, left)
            }
        }
    }

    return dpMtx[rowLen-1][colLen-1]
};

let input = [
    [1,3,1],
    [1,5,1],
    [4,2,1]
  ]


console.log(minPathSum(input), 7)