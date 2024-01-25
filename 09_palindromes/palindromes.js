const palindromes = function (str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    strReversed = str.split('').reverse().join('');
    return str === strReversed;
};

// Do not edit below this line
module.exports = palindromes;
