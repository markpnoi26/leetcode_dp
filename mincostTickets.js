/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
const mincostTickets = (days, costs) => {

    const dp = new Array(days[days.length-1]+1)
    dp[0] = 0

    for (let i=0; i<days.length; i++) {
        let option1, option7, option30;

        option1 = costs[0]
        option7 = costs[1]
        option30 = costs[2]


        if (days[i]-1 >= 0) {
            option1+= findNextVal(dp, days[i]-1)
        }

        if (days[i]-7 >= 0) {
            option7+= findNextVal(dp, days[i]-7)
        }

        if (days[i]-30 >= 0) {
            option30+=findNextVal(dp, days[i]-30)
        }

        dp[days[i]] = Math.min(option1, option7, option30)

    }

    return dp[days[days.length-1]]

}

const findNextVal = (dp, day) => {
    while (dp[day] === undefined) {
        day--
    }
    return dp[day]
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

days
0   1           4                   6                   7                       8                    20
                                  
0   2           2+dp[1]=4           2+dp[4]=6           2+dp[6]=8               2+dp[7]=9            2+dp[8]=11
0   7           7+dp[neg]=7         7+dp[neg]=7         7+dp[7-7]=7             7+dp[7-1]=9          7+dp[20-7]->[8]=16
0   15          15+dp[neg]=15       15+dp[neg]=15       15+dp[neg]=15           15+dp[neg]=15        15+dp[neg]=15
min 
0   2           4                   6                   7                       9                    11

finding the previous possible travel day after subtracting (1,7,30) is the dp value needs to be added.

*/