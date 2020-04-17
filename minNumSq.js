/**
 * @param {number} n
 * @return {number}
 */
const numSquares = n => {
    const dp = []
    dp[0] = 0
    dp[1] = 1
    if (n <= 1) return dp[n]

    let prevSqrt = []
    for (let i=2; i<=n; i++) {
        if (Math.sqrt(i) % 1 === 0) {
            dp[i] = 1
            prevSqrt.push(i)
        } else {
            let min = Infinity
            for (let j=0; j<prevSqrt.length; j++) {
                min = Math.min(min, Math.floor(i/prevSqrt[j]) + dp[i%prevSqrt[j]])
            }
            dp[i] = min
        }
    }
    // solution is O(n * sqrt(n))
    // O(n) space
    return dp[n]
};


let n = 12
console.log(numSquares(n), 3)


n = 13
console.log(numSquares(n), 2)

n = 32
console.log(numSquares(n), 2)

n = 413
console.log(numSquares(n), 3)


/**
 * dp[0] = 0
 * dp[1] = 1
 * dp[2] = 2
 * dp[3] = 3
 * dp[4] = 1
 * dp[5] = 2
 * dp[6] = 3
 * dp[7] = 4
 * dp[8] = 2
 * dp[9] = 1
 * dp[10]= 2
 * dp[11]= 3
 * 
 * 
 * 
 */