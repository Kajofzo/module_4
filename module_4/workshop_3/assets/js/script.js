
// Declare variables for the calculator's input and output
let input = '';
let output = 0;

// This function is called when the user clicks a button
function buttonClicked(value) {
  // Update the input string with the value of the button clicked
  input += value;
  // Display the updated input in the input element
  document.getElementById('input').value = input;
}

// This function is called when the user clicks the "=" button
function calculate() {
  // Use the eval() function to execute the input string as JavaScript code
  // This will perform the calculations and store the result in the output variable
  output = eval(input);
  // Display the result in the output element
  document.getElementById('output').value = output;
}

// This function is called when the user clicks the "C" button
function clear() {
  // Reset the input and output variables
  input = '';
  output = 0;
  // Clear the input and output elements
  document.getElementById('input').value = '';
  document.getElementById('output').value = '';
}