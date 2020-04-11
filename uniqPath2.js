/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = (obstacleGrid) => {
    
    if (obstacleGrid[0][0] === 1) return 0
    const dpMtx = []
    const rowLen = obstacleGrid.length
    const colLen = obstacleGrid[0].length

    for (let i=0; i<rowLen; i++) {
        let newArr = new Array(obstacleGrid[i].length)
        dpMtx.push(newArr)
        for (let j=0; j<colLen; j++) {
            if (obstacleGrid[i][j] === 0) {
                dpMtx[i][j] = 0
            } else {
                dpMtx[i][j] = null
            }
            
        }
    }

    for (let i=0; i<rowLen; i++) {
        for (let j=0; j<colLen; j++) {
            if (i === 0 &&  j === 0) {
                dpMtx[i][j] = 1
            } else if (dpMtx[i][j] === null) {
                dpMtx[i][j] = 0
            } else if (i === 0 && j > 0) {
                dpMtx[i][j] = dpMtx[i][j-1]
            } else if (i > 0 && j === 0) {
                dpMtx[i][j] = dpMtx[i-1][j]
            } else {
                dpMtx[i][j] = dpMtx[i-1][j] + dpMtx[i][j-1]
            }
        }
    }

    return dpMtx[rowLen-1][colLen-1]

};


let obsGrid = [
    [0,0,0],
    [0,1,0],
    [0,0,0]
  ]

console.log(uniquePathsWithObstacles(obsGrid), 2)