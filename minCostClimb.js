/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = (cost) => {
    
};

let cost = [10, 15, 20]
console.log(minCostClimbingStairs(cost), 15)

cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
console.log(minCostClimbingStairs(cost), 6)



/*
        10   15   20
min     0    0   15         

        1       100     1       1       1       100     1       1       100     1
min     0       1       1       1       1       1       1       1       1       1

*/