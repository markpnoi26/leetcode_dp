/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = nums => {

    if (!nums.length) return 0

    const dp = []

    let globalMax = Math.max(nums[0])
    dp[0] = [Math.min(nums[0], 0), Math.max(nums[0], 0)]

    for (let i = 1; i<nums.length; i++) {
        if (nums[i] !== 0) {
            dp[i] = []
            dp[i][0] = Math.min(nums[i], nums[i] * dp[i-1][0], nums[i]*dp[i-1][1])
            dp[i][1] = Math.max(nums[i], nums[i] * dp[i-1][0], nums[i]*dp[i-1][1])
            globalMax = Math.max(dp[i][1], globalMax)
        } else {
            dp[i] = []
            dp[i][0] = 0
            dp[i][1] = 0
        }
    }

    // console.log(dp)
    return globalMax
};


let nums = [2,3,-2,4]
console.log(maxProduct(nums),6)

nums = [-2,0,-1]
console.log(maxProduct(nums), 0)

nums = [-2, 0, 3, 0, -4, -5]
console.log(maxProduct(nums), 20)