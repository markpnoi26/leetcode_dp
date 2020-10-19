const maxSubsetSumNoAdjacent = (array) => {
    // Write your code here.

    if (!array.length) return 0

    const maxPossibleSum = new Array(array.length).fill(0)

    for (let i = 0; i<array.length; i++) {
        if (i === 0) {
            maxPossibleSum[i] = array[i]
        } else if (i === 1) {
            maxPossibleSum[i] = Math.max(array[0], array[1])
        } else {
            maxPossibleSum[i] = Math.max(maxPossibleSum[i-1], maxPossibleSum[i-2] + array[i])
        }
    }

    return maxPossibleSum[array.length-1]

}



const array = [75, 105, 120, 75, 90, 135]

console.log(maxSubsetSumNoAdjacent(array), 330)