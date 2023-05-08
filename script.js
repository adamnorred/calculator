// const userFirstNum = Number(prompt("first num"));
// const userSecondNum = Number(prompt("second num"));
// const userOperator = prompt("operator");

const mathOperations = document.querySelector(".math-operations");
const inputField = document.querySelector(".input-field");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector("three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const clear = document.querySelector(".clear");
const backspace = document.querySelector(".backspace");
const percent = document.querySelector(".percent");
const division = document.querySelector(".division");
const multiplication = document.querySelector(".multiplication");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const plusMinus = document.querySelector(".plus-minus");
const zero = document.querySelector(".zero");
const dot = document.querySelector(".dot");
const equals = document.querySelector(".equals");
const regex = /[+\-*\/]/;

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

function handleNumberClick() {
  inputField.textContent += this.textContent;
  mathOperations.textContent += this.textContent;
}

function handleOperatorClick() {
  if (regex.test(mathOperations.textContent)) {
    mathOperations.textContent =
      mathOperations.textContent.slice(0, -2) + `${this.textContent} `;
    inputField.textContent = "";
  } else {
    mathOperations.textContent += ` ${this.textContent} `;
    inputField.textContent = "";
  }
}

plus.addEventListener("click", handleOperatorClick);
minus.addEventListener("click", handleOperatorClick);
multiplication.addEventListener("click", handleOperatorClick);
division.addEventListener("click", handleOperatorClick);

one.addEventListener("click", handleNumberClick);
two.addEventListener("click", handleNumberClick);
