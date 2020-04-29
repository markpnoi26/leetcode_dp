/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
const maxProfit = (prices, fee) => {
    if (!prices.length) return 0
    const dp = new Array(prices.length) 

    dp[0] = [-prices[0], -Infinity]

    for (let i = 1; i<prices.length; i++) {
        let maxBuy = Math.max(dp[i-1][1] - prices[i], dp[i-1][0])
        let maxSell = Math.max(prices[i] + dp[i-1][0] - fee, dp[i-1][1])
        dp[i] = [maxBuy, maxSell]
    }

    return dp[dp.length-1][1]
};

let prices = [1, 3, 2, 8, 4, 9], fee = 2

console.log(maxProfit(prices, fee))

prices = [1, 3, 7, 5, 10, 3], fee = 3
console.log(maxProfit(prices, fee))