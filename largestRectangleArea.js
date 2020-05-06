/**
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea = (heights) => {

    // very slow solution when maxHeight gets super large
    // implement a stack to solve this.
    const maxHeight = Math.max(...heights)
    let maxArea = maxHeight

    for (let i=1 ;i<=maxHeight; i++) {
        let currArea = 0
        for (let j = 0; j < heights.length; j++) {
            if (heights[j] > 0) {
                currArea++
                heights[j]--
            } else {
                maxArea = Math.max(currArea*i, maxArea)
                currArea = 0
            }
        }
        maxArea = Math.max(currArea*i, maxArea)
    }
        
    return maxArea
};


let input = [2, 1, 5, 6, 2, 3]
console.log(largestRectangleArea(input), 10)

// imput = [0, 0, 0, 0, 0, 0, 0, 0, 2147483647]
// console.log(largestRectangleArea(input), 2147483647)