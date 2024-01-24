const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
  return nums.reduce((total, num) => total + num, 0);
};

const multiply = function(nums) {
  return nums.reduce((total, num) => total * num, 1);
};

const power = function(base, exp) {
	return Math.pow(base, exp);
};

const factorial = function(n) {
  let fact = 1;

  for (let i = 1; i <= n; i++) {
    fact *= i;
  }

  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
