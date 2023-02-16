const convertToCelsius = function(inputTemp) {
  let celsiusResult = ((inputTemp - 32) * 5 / 9);
  let roundedCelsiusResult = Math.round(celsiusResult *  10) / 10;
  console.log(roundedCelsiusResult);
  return roundedCelsiusResult;

};

const convertToFahrenheit = function(inputTemp) {
  let fahrenheitResult = Math.round((inputTemp * 9 /5 + 32) * 10) / 10;

  console.log(fahrenheitResult);
  return fahrenheitResult;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
