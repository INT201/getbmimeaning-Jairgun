const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  //code here
  return (weight)/(height*height)
}
function getBMIMeaning(weight, height) {
  //code here
  let BMI = calculateBMI(getBMIMeaning)
  if(BMI<18.5) {
    return "Underweight"
  }
  else if(18.<=BMI<=24.9) {
    return "Normal weight"
  }
  else {
    return "Overweight"
  }
}
module.exports = getBMIMeaning
