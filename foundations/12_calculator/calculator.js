const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(n) {
  let sum = 0;
	for (let i = 0; i < n.length; i++) {
    sum += n[i];
  }
  return sum;
};

const multiply = function(n) {
  let sum = 1;
	for (let i = 0; i < n.length; i++) {
    sum *= n[i];
  }
  return sum;
};

const power = function(base, exponent) {
  let b = 1;
  for (let i = 0; i < exponent; i++) {
    b *= base;
  }
  return b;
};

const factorial = function(n) {
	let result = 1;
  for (let i = n; i >= 1; i--) {
    result *= i;
  }
  return result;
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
