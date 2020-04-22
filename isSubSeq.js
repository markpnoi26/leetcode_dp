/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
    const dp = [""]
    currPos = 0

    for (let i=0; i<t.length ;i++) {
        let currStr;
        if (i === 0) {
            currStr = ""
        } else {
            currStr = dp[i-1]
        }

        if (t[i] === s[currPos] && currPos < s.length) {
            dp[i] = currStr + s[currPos] 
            currPos++
        } else {
            dp[i] = currStr
        }
    }

    let lastItem = dp.length-1
    return (dp[lastItem] === s)


};


let s = "abc", t = "ahbgdc"
console.log(isSubsequence(s,t), true)

s = "axc", t = "ahbgdc"
console.log(isSubsequence(s,t), false)


s= "", t="ahbgdc"
console.log(isSubsequence(s,t), true)

s= "", t=""
console.log(isSubsequence(s,t), true)