const num1 = 31 
const num2 = 2
const multiply = num1 * num2

//first create a variable with the name of random and include 
// additional methods for arthimetic for the variable
// first would be Math.round() because we want to make sure to round the number to a whole integer
//rather than a decimal number.
// within that () of Math.round, include Math.random to randomize whatever number, and multiply it by 10
// so that it pushes it to the 10th power instead of having 0.1234 = 0 
// then add a 1 to the end so that whatever random number appears which is a random number between 0 and 1 
// will be pushed to the 10th power, rounded to the nearest integer and add 1 to make sure it's greater than 1 
const random = Math.round(Math.random() * 10) + 1


const num3 = 16
const num4 = 6
const mod = num3 % num4

const max = Math.max(1, 5, 7, 15, 20)