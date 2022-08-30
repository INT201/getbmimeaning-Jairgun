const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  //code here
  return weight/(height*height)
}
function getBMIMeaning(weight, height) {
  //code here
  let BMI = calculateBMI(getBMIMeaning)
  let mean
  if(BMI<18.5) return mean = "Underweight"
  else if(18.<=BMI<=24.9) return mean = "Normal weight"
  else return mean = "Overweight"
}
module.exports = getBMIMeaning
