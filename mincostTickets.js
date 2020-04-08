/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
const mincostTickets = (days, costs) => {

//     const minCost = []
//     minCost[0] = 0

//     for (let i=0; i<days.length; i++) {
//         let option1, option7, option30

//         option1 = costs[0] + highestPossibleMin(minCost, minCost[days[i-1]] )
//         option7 = costs[1] + highestPossibleMin(minCost, minCost[days[i-7]] )
//         option30 = costs[2] + highestPossibleMin(minCost, minCost[days[i-30]] )
//         console.log(option1, option7, option30)
//         minCost[days[i]] = Math.min(option1, option7, option30)
//     }

//     console.log(minCost)
//     return minCost[days[days.length-1]]
// };

// const highestPossibleMin = (minCost, day) => {
//     if (day <= 0) {
//         return 0
//     } else {
//         while(minCost[day] === undefined) {
//             day--
//         }
//         return minCost[day]
//     }
}



let days = [1, 4, 6, 7, 8, 20], costs = [2, 7, 15]
console.log(mincostTickets(days, costs), 11)

days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], costs = [2, 7, 15]
console.log(mincostTickets(days, costs), 17)

/*
option #1 = cost 2 for 1 day
option #2 = cost 7 for 7 day
option #3 = cost 15 for 30 day

check the furthest you can go back on option:
     1                     4                             6                           7
(2, 7, 15)    (2+dp[1], 7+dp[-3], 15+dp[-26])  (2+dp[4], 7+dp[-1], 15+dp[4])  (2+dp[6], 7+dp[0], 15+dp[6])
    2             4        7        15             6        7       15           8       7        15
    2                      4                            6
*/