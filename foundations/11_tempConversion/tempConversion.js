const convertToCelsius = function(temp) {
  let c = (temp - 32.0) / (9.0 / 5.0);
  return Math.round(c * 10.0) / 10.0;
};

const convertToFahrenheit = function(temp) {
  let f = temp * (9.0 / 5.0) + 32.0;
  return Math.round(f * 10.0) / 10.0;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
