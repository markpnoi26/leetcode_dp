/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump1 = nums => {
    dp = new Array(nums.length).fill(false)
    dp[0] = true

    for (let i = 0 ;i<nums.length-1;i++) {
        if (dp[i] === true) {
            let counter = nums[i]
            while (counter > 0) {
                dp[i+counter] = true
                counter--
            }
        }
    }

    return dp[dp.length-1]
};


const canJump = nums => {
    let maxRange = nums[0]
    for (let i = 0 ;i<nums.length-1;i++) {
        if (i <= maxRange) {
            maxRange = Math.max(maxRange, i+nums[i])
        }
    }
    return(maxRange >= nums.length-1)
};

console.log(canJump([2,3,1,1,4]), true)
console.log(canJump([3,2,1,0,4]), false)
console.log(canJump([1,2,3]), true)