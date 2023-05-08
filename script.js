const mathOperations = document.querySelector(".math-operations");
const inputField = document.querySelector(".input-field");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
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

let userFirstNumber = 0;
let userSecondNumber = 0;
let userTempNumber = 0;

function clearScreen() {
  userFirstNumber = 0;
  userSecondNumber = 0;
  userTempNumber = 0;
  mathOperations.textContent = "";
  inputField.textContent = "";
}

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

function getFirstNumber() {
  userFirstNumber = Number(mathOperations.textContent.split(" ")[0]);
}

function getSecondNumber() {
  userSecondNumber = Number(inputField.textContent);
}

function clearInputField() {
  inputField.textContent = "";
}

function handleNumberClick() {
  if (regex.test(mathOperations.textContent.split(" ")[1])) {
    inputField.textContent += this.textContent;
    return;
  }
  mathOperations.textContent += this.textContent;
}

function handleOperatorClick() {
  if (mathOperations.textContent.split(" ")[1] === this.textContent) {
    if (inputField.textContent === "") {
      return;
    }
    getSecondNumber();
    userTempNumber = operator(
      userFirstNumber,
      userSecondNumber,
      this.textContent
    );
    userFirstNumber = userTempNumber;
    userSecondNumber = 0;
    userTempNumber = 0;
    clearInputField();
    mathOperations.textContent = userFirstNumber + ` ${this.textContent} `;
  } else if (regex.test(mathOperations.textContent.split(" ")[1])) {
    mathOperations.textContent =
      mathOperations.textContent.slice(0, -3) + ` ${this.textContent} `;
    getFirstNumber();
  } else {
    if (mathOperations.textContent === "") {
      return;
    }
    mathOperations.textContent += ` ${this.textContent} `;
    getFirstNumber();
  }
}

plus.addEventListener("click", handleOperatorClick);
minus.addEventListener("click", handleOperatorClick);
multiplication.addEventListener("click", handleOperatorClick);
division.addEventListener("click", handleOperatorClick);

zero.addEventListener("click", handleNumberClick);
one.addEventListener("click", handleNumberClick);
two.addEventListener("click", handleNumberClick);
three.addEventListener("click", handleNumberClick);
four.addEventListener("click", handleNumberClick);
five.addEventListener("click", handleNumberClick);
six.addEventListener("click", handleNumberClick);
seven.addEventListener("click", handleNumberClick);
eight.addEventListener("click", handleNumberClick);
nine.addEventListener("click", handleNumberClick);

clear.addEventListener("click", clearScreen);
