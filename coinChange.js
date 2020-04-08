/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
    // still slow
    coins.sort((a,b)=> b-a)
    let min = Infinity

    const coinMutate = (coins, currCount, currAmount, targetAmount) => {
        // if (currAmount > targetAmount) return

        if (currAmount === targetAmount) {
            console.log(currCount)
            min = currCount
        }

        if (currAmount <= targetAmount) {
            let coinsLen = coins.length
            recursiveFor: for (let i = 0; i < coinsLen; i++) {
                currCount++
                currAmount += coins[i]
                if (currCount > min) break recursiveFor
                coinMutate(coins.slice(i), currCount, currAmount, targetAmount)
                currCount--
                currAmount -= coins[i]
            }
        }
    }

    coinMutate(coins, 0, 0, amount)

    return(min === Infinity? -1:min)
}

const coinChangeDP = (coins, amount) => {
   
    // because Array are zero indexed, we need to add another one to have dp[amount]
    const dp = new Array(amount + 1).fill(Infinity)
    
    dp[0] = 0

    for  (let i=1; i<=amount; i++) {
        for (let coin of coins) {
            if (i >= coin) {
                // find the minimum based from dp[i - coins before] and add 1 to it.
                dp[i] = Math.min(dp[i], dp[i-coin]+1)
            }
        }
    }
    return dp[amount] === Infinity? -1:dp[amount]

}



let coins = [1, 2, 5], amount = 11
console.log(coinChangeDP(coins, amount), 3)

coins = [2], amount = 3
console.log(coinChangeDP(coins, amount), -1)

coins = [1], amount = 0
console.log(coinChangeDP(coins, amount), 0)

coins = [227, 99, 328, 299, 42, 322], amount = 9847 
console.log(coinChangeDP(coins, amount), 31)

coins = [288, 160, 10, 249, 40, 77, 314, 429], amount = 9208
console.log(coinChangeDP(coins, amount), 22)

coins = [338, 26, 303, 41, 167, 331, 485, 239, 332], amount = 8966
console.log(coinChangeDP(coins, amount), 20)