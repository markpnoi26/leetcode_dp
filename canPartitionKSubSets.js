/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const canPartitionKSubsets = (nums, k) => {
    

    let currSum = 0
    nums.forEach(num => currSum+=num)

    if (currSum%k !== 0) return false
    const subsetSum = currSum/k

    let answer = true

    
    


    return answer


    
};


let nums = [4, 3, 2, 3, 5, 2, 1], k = 4
console.log(canPartitionKSubsets(nums, k), true)