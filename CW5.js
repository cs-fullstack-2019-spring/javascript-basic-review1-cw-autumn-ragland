//Write a JavaScript program that does the following:
// Prompts the User to enter their outstanding loan amount as a number (LOANAMT)
// Prompts the User to enter the number of months in which they want to pay off the loan (NUMMONTHS)
// Calculates the monthly payment they need to make and
// logs it to the console as To pay of a loan of LOANAMT in NUMMONTHS months it will take MATH per month
// BONUS: Keep prompting until the User actually enters a number for both loan amount
// and number of months (HINT: Look into using NaN)

var LOANAMT = parseInt(prompt("Enter your outstanding loan amount"));
var NUMMONTHS = parseInt(prompt("Enter the number of months in which you want to pay off the loan"));
var MATH = LOANAMT/NUMMONTHS;
console.log("To pay off the a loan of $" + LOANAMT + " in " + NUMMONTHS + " months you must pay $" + MATH + " per month.");