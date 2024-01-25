const fibonacci = function(n) {
    if (n < 0) return "OOPS";

    let n1 = 1;
    let n2 = 1;

    for (let i = 2; i <= n; i++) {
        n1 = n1 + n2;
        n2 = n1 - n2;
        n1 = n1 - n2;
        n2 = n1 + n2;
    }

    return n1;
};

// Do not edit below this line
module.exports = fibonacci;
