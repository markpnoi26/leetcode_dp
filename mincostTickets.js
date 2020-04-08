/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
const mincostTickets = (days, costs) => {
    
    


};


let days = [1, 4, 6, 7, 8, 20], costs = [2, 7, 15]
console.log(mincostTickets(days, costs), 11)

days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], costs = [2, 7, 15]
console.log(mincostTickets(days, costs), 17)

/*
option #1 = cost 2 for 1 day
option #2 = cost 7 for 7 day
option #3 = cost 15 for 30 day

check the furthest you can go back on option:

[1,          2,                  3,                   4,                  5,      
(2, 7, 15)  (2+dp[2-1], 7, 15)  (2+dp[3-1], 7, 15)   (2+dp[4-1], 7,15)   (2+[dp5-1], 7+dp[5-7], 15+dp[5-30]) <= minimum of these options
2            2+dp[1] = 4         2+dp[2] = 6          2+dp[3] = 8        2+dp[4] = 9
min = 2               4                   6                      7              7

6,                        7,                           8,                          9,                     
(2+dp[6-1], 7, 15)    (2+dp[7-1], 7+dp[7-7], 15)   (2+dp[8-1], 7+dp[8-7], 15)  (2+dp[9-1], 7+dp[9-7], 15)
2+dp[5] = 9            2+dp[6] = 9                   2+dp[7]= 9, 7+dp[1]=9      2+dp[8] = 11, 7+dp[2]= 11
min = 7                     7                           9                         11


10,                               30,                                     31
(2+dp[10-1], 7+dp[10-7], 15)     (2+dp[30-1], 7+dp[30-7], 15+dp[30-30])   (2+dp[31-1], 7+dp[31-7], 15+dp[31-30])
2+dp[9] = 13, 7+dp[3] = 13        2+dp[29] = inf, 7+dp[23] = inf           2+dp[30] = 17, 7+dp[24]=inf, 15+dp[1] = 17
min = 13                            min = 15                                17

*/