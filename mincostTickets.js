/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
const mincostTickets = (days, costs) => {
    /*
    By using dynamic programming solution, we have 2 adjustments
    1: any day <= 0 will cost 0
    2: When we cannto find the cost
    for that day, pick the cloest available cost before that day.

    For example: days = [0, 1, 4, 6, 7, 8, 20] && costs = [2, 7, 15]
    for day 20:
        1 day pass will be 2 + dp[19]
    7 days pass will be 7 + dp[13]
    30 days pass will be 15
    Since we do not need the ticket
    for
    day 19;
    the closest one we need to have a ticket will be day 8
    so
    if we buy one day pass, the cost will be 2 + dp[19] >> 2 + dp[8]
    Same logic can be applied to 7 day pass with 7 + dp[13] >> 7 + dp[8]
    */
};


let days = [1, 4, 6, 7, 8, 20], costs = [2, 7, 15]
console.log(mincostTickets(days, costs), 11)

days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], costs = [2, 7, 15]
console.log(mincostTickets(days, costs), 17)