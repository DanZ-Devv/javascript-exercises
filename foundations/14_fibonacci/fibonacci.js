const fibonacci = function(num) {
    if (num < 0) return "OOPS"
    if (typeof num === "string") num = Number(num);
    if (num === 0) return 0;

    let prev1 = 1;
    let prev2 = 0;
    let sum = 0;
    for (let i = 0; i < num; i++) {
        sum = prev1 + prev2;
        prev2 = prev1;
        prev1 = sum;
    }
    return prev2;
};

// Do not edit below this line
module.exports = fibonacci;
