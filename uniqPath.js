/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = (m, n) => {
    
    const dpMtx = []
    for (let i=0; i<m;i++) {
        const newArr = new Array(n).fill(0)
        dpMtx.push(newArr)
    }

    for (let i=0;i<m; i++) {
        for (let j=0;j<n; j++) {
            if (i===0 && j===0) {
                dpMtx[i][j]++
            } else if (i === 0 && j > 0) {
                dpMtx[i][j] += dpMtx[i][j-1]
            } else if (i > 0 && j === 0) {
                dpMtx[i][j] += dpMtx[i-1][j]
            } else {
                dpMtx[i][j] = dpMtx[i-1][j] + dpMtx[i][j-1]
            }
        }
    }

    return dpMtx[m-1][n-1]
};

console.log(uniquePaths(2,3), 3)
console.log(uniquePaths(3,7), 28)
console.log(uniquePaths(7,21), 230230)