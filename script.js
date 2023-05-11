const mathOperations = document.querySelector(".math-operations");
const inputField = document.querySelector(".input-field");
const zero = document.querySelector(".zero");
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
const division = document.querySelector(".division");
const multiplication = document.querySelector(".multiplication");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const percent = document.querySelector(".percent");
const plusMinus = document.querySelector(".plus-minus");
const dot = document.querySelector(".dot");
const equals = document.querySelector(".equals");

const regexForOperators = /[+\-*\/]/;
const regexForNumbers = /[0-9]/;

let userFirstNumber = 0;
let userSecondNumber = 0;
let userTempNumber = 0;

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

function clearInputField() {
  inputField.textContent = "";
}

function clearMathOperations() {
  mathOperations.textContent = "";
}

function resetUserInputs() {
  userFirstNumber = 0;
  userSecondNumber = 0;
  userTempNumber = 0;
}

function clearScreen() {
  resetUserInputs();
  clearMathOperations();
  clearInputField();
}

function getFirstNumber() {
  userFirstNumber = Number(mathOperations.textContent.split(" ")[0]);
}

function getSecondNumber() {
  userSecondNumber = Number(inputField.textContent);
}

function checkForOperatorPresence() {
  return mathOperations.textContent.split(" ")[1];
}

function checkCharacterAfterZero(element) {
  if (
    element.textContent.length > 1 &&
    element.textContent.charAt(0) === "0" &&
    Number(element.textContent.charAt(1)) >= 0 &&
    Number(element.textContent.charAt(1)) <= 9
  ) {
    element.textContent = element.textContent.charAt(1);
  }
}

function deleteLast(element) {
  const splitInput = element.textContent.split("");
  splitInput.pop();
  let inputToString = splitInput.toString();
  inputToString = inputToString.replace(/,/g, "");
  element.textContent = inputToString;
}

function deleteLastHandler() {
  if (inputField.textContent) {
    deleteLast(inputField);
  }
  if (!regexForOperators.test(checkForOperatorPresence())) {
    deleteLast(mathOperations);
  }
}

function handleNumberClick() {
  if (checkForEqualsPresence()) {
    return;
  }
  if (regexForOperators.test(checkForOperatorPresence())) {
    inputField.textContent += this.textContent;
    checkCharacterAfterZero(inputField);
    return;
  }
  mathOperations.textContent += this.textContent;
  checkCharacterAfterZero(mathOperations);
}

function handleOperatorClick() {
  if (checkForEqualsPresence()) {
    return;
  }
  if (checkForOperatorPresence() === this.textContent) {
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
    clearInputField();
    mathOperations.textContent = userFirstNumber + ` ${this.textContent} `;
  } else if (regexForOperators.test(checkForOperatorPresence())) {
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

function handleEqualsClick() {
  if (checkForOperatorPresence() && inputField.textContent !== "") {
    getFirstNumber();
    getSecondNumber();
    userTempNumber = operator(
      userFirstNumber,
      userSecondNumber,
      checkForOperatorPresence()
    );
    clearInputField();
    mathOperations.textContent += `${userSecondNumber} ${this.textContent} ${userTempNumber}`;
    if (
      mathOperations.textContent.split(" ")[1] === "-" &&
      mathOperations.textContent.split(" ")[2].charAt(0) === "-"
    ) {
      turnTwoMinusToPlus();
    }
  }
}

function checkForEqualsPresence() {
  if (/=/g.test(mathOperations.textContent)) {
    return true;
  }
  return false;
}

function handlePlusMinus() {
  if (checkForEqualsPresence()) {
    return;
  }
  if (checkForOperatorPresence()) {
    if (/-/.test(inputField.textContent)) {
      inputField.textContent = inputField.textContent.substring(1);
    } else {
      inputField.textContent = "-" + inputField.textContent;
    }
  } else {
    if (mathOperations.textContent.charAt(0) === "-") {
      mathOperations.textContent = mathOperations.textContent.substring(1);
    } else {
      mathOperations.textContent = "-" + mathOperations.textContent;
    }
  }
}

function turnTwoMinusToPlus() {
  const splitArray = mathOperations.textContent.split(" ");
  splitArray[2] = splitArray[2].substring(1);
  splitArray[1] = "+";
  mathOperations.textContent = splitArray.join(" ");
}

plus.addEventListener("click", handleOperatorClick);
minus.addEventListener("click", handleOperatorClick);
multiplication.addEventListener("click", handleOperatorClick);
division.addEventListener("click", handleOperatorClick);

equals.addEventListener("click", handleEqualsClick);
plusMinus.addEventListener("click", handlePlusMinus);

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
backspace.addEventListener("click", deleteLastHandler);
