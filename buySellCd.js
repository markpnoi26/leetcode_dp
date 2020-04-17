/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {

    if (prices.length === 0 || prices.length === 1) return 0

    const dp = []
    dp[0] = {buy: -prices[0], sell: 0}
    dp[1] = {buy: Math.max(-prices[1], -prices[0]), sell: Math.max(dp[0].sell, prices[1] + dp[0].buy)}
    let lastIdx = 1

    for (let i = 2; i <prices.length; i++) {
        let store = {
            buy: Math.max(dp[i-1].buy, dp[i-2].sell-prices[i]),
            sell: Math.max(dp[i-1].buy+prices[i], dp[i-1].sell)
        } 
        dp.push(store)
        lastIdx = i
    }

    return dp[lastIdx].sell
    
};


let prices = [1,2,3,0,2]
console.log(maxProfit(prices),3 )


prices = [4,5,3,2,1,6,7,2,3,0,2,10]
console.log(maxProfit(prices),17)


prices = [1,2,4]
console.log(maxProfit(prices),3)

prices = []
console.log(maxProfit(prices),0)


/** logic
 * @4 : buy = (-4), sell = 0
 * @5 : buy = Math.max(-4, -5) = -4 , sell = Math.max(prevSell, current + prevBuy(-4)) = 1
 * @3 : buy = Math.max(-4, sell2idx - 3) = -3, sell = Math.max(prevSell, current + prevBuy(-4) (-1)) = 1
 * @2 : buy = Math.max(-3, sell2idx - 2) = -1, sell = Math.max(prevSell, current + prevBuy(-3) (-1)) = 1
 * @1 : buy = Math.max(-1, sell2idx - 1) = 0, sell = Math.max(1, 1 + -1) = 1
 * @6 : buy = Math.max(0, 1 - 6) = 0, sell = Math.max(1, 6 -- 0) = 6
 * @7 : buy = Math.max(0, 1 - 7) = 0, sell = Math.max(6, 7 -- 0) = 7
 * @2 : buy = Math.max(0, 6 - 2) = 4, sell = Math.max(7, 2 -- 0) = 7
 * @3 : buy = Math.max(4, 7 - 3) = 4, sell = Math.max(7, 4 -- 3) = 7
 * @0 : buy = Math.max(4, 7 - 0) = 7, sell = Math.max(7, 4 -- 0) = 7
 * @2 : buy = Math.max(7, 7 - 2) = 7, sell = Math.max(7, 7 -- 2) = 9
 * @10: buy = Math.max(7, 7 -10) = 7, sell = Math.max(9, 7 --10) = 17
 */