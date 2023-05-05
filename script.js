const userFirstNum = prompt("first num");
const userOperator = prompt("operator");
const userSecondNum = prompt("second num");

function add(firstNum, secondNum) {
  return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
  return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
  return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
  return firstNum / secondNum;
}

function operator(firstNum, secondNum, operator) {
  if (operator === "+") {
    return add(firstNum, secondNum);
  }
  if (operator === "-") {
    return subtract(firstNum, secondNum);
  }
  if (operator === "*") {
    return multiply(firstNum, secondNum);
  }
  if (operator === "/") {
    return divide(firstNum, secondNum);
  }
}

console.log(operator(userFirstNum, userSecondNum, userOperator));
console.log(operator(userFirstNum, userSecondNum, userOperator));
console.log(operator(userFirstNum, userSecondNum, userOperator));
console.log(operator(userFirstNum, userSecondNum, userOperator));
console.log(operator(userFirstNum, userSecondNum, userOperator));
