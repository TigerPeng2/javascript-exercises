const fibonacci = function(num) {
    num = Number(num);

    if (num < 1) {
        return "OOPS";
    }

    let dp = Array(num).fill(1);
    let curr = 2;
    while (curr < num) {
        dp[curr] = dp[curr - 1] + dp[curr - 2];
        curr++;
    }

    return dp[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
