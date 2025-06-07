//  To clear the default value of 0
var newLine = true;
var existingOperator;
var num1;

function userNumInput(num) {
  if (newLine) {
    document.getElementById("inputField").value = num;
    newLine = false;
  } else {
    var existingNum = document.getElementById("inputField").value;
    document.getElementById("inputField").value = existingNum + num;
  }
}

//  AC
function allClear() {
  if (!newLine) {
    document.getElementById("inputField").value = 0;
    newLine = true;
  }
}

//  Operators
function operatorsInput(operator) {
  existingOperator = operator;
  num1 = parseInt(document.getElementById("inputField").value);
  newLine = true;
}

//  Equals
function calc() {
  var num2 = parseInt(document.getElementById("inputField").value);
  var calcResult;
  switch (existingOperator) {
    case "+":
      calcResult = num1 + num2;
      break;
    case "-":
      calcResult = num1 - num2;
      break;
    case "x":
      calcResult = num1 * num2;
      break;
    case "/":
      calcResult = num1 / num2;
      break;
  }
  document.getElementById("inputField").value = calcResult;
  num1 = 0;
  newLine = true;
}
