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
let userPercentForTextContent = "";
let slicedFixed = "";

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
  this.classList.add("trs");
  resetUserInputs();
  clearMathOperations();
  clearInputField();
}

function checkForPercent() {
  if (/%/.test(inputField.textContent)) {
    return true;
  }
}

function getFirstNumber() {
  userFirstNumber = Number(mathOperations.textContent.split(" ")[0]);
}

function getSecondNumber() {
  if (
    /%/.test(inputField.textContent) &&
    (checkForOperatorPresence() === "*" || checkForOperatorPresence() === "/")
  ) {
    userPercentForTextContent = inputField.textContent;
    userSecondNumber = Number(inputField.textContent.slice(0, -1)) / 100;
    return;
  }
  if (
    /%/.test(inputField.textContent) &&
    (checkForOperatorPresence() === "+" || checkForOperatorPresence() === "-")
  ) {
    userPercentForTextContent = inputField.textContent;
    userSecondNumber =
      (Number(inputField.textContent.slice(0, -1)) / 100) * userFirstNumber;
    return;
  }
  userSecondNumber = Number(inputField.textContent);
}

function checkForOperatorPresence() {
  return mathOperations.textContent.split(" ")[1];
}

function checkCharacterAfterZero(element) {
  if (element.textContent === "00") {
    element.textContent = "0";
    return;
  }
  if (
    element.textContent.charAt(0) === "0" &&
    element.textContent.charAt(1) !== "." &&
    element.textContent.length > 1
  ) {
    element.textContent = element.textContent.charAt(1);
  }
  if (
    element.textContent.charAt(0) === "-" &&
    element.textContent.charAt(1) === "0" &&
    element.textContent.charAt(2) !== "." &&
    element.textContent.length > 2
  ) {
    element.textContent =
      element.textContent.charAt(0) + element.textContent.charAt(2);
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
  this.classList.add("trs");
  if (mathOperations.textContent === "undefined") {
    mathOperations.textContent = "";
    return;
  }
  if (inputField.textContent) {
    deleteLast(inputField);
  }
  if (!regexForOperators.test(checkForOperatorPresence())) {
    deleteLast(mathOperations);
  }
}

function handleNumberClick() {
  this.classList.add("trs");
  if (mathOperations.textContent === "undefined") {
    mathOperations.textContent = this.textContent;
    return;
  }
  if (checkForEqualsPresence()) {
    return;
  }
  if (/%/.test(inputField.textContent)) {
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
  this.classList.add("trs");
  if (mathOperations.textContent === "undefined") {
    return;
  }
  if (inputField.textContent.slice(-1) === ".") {
    return;
  }
  if (
    (inputField.textContent.charAt(0) === "0" ||
      (inputField.textContent.charAt(0) === "-" &&
        inputField.textContent.charAt(1) === "0")) &&
    inputField.textContent.includes(".") &&
    !/[1-9]/.test(inputField.textContent) &&
    mathOperations.textContent.split(" ")[1] === "/"
  ) {
    clearInputField();
    mathOperations.textContent = "undefined";
    return;
  }
  if (
    (inputField.textContent === "0" || inputField.textContent === "-0") &&
    mathOperations.textContent.split(" ")[1] === "/"
  ) {
    clearInputField();
    mathOperations.textContent = "undefined";
    return;
  }
  if (
    mathOperations.textContent.charAt(mathOperations.textContent.length - 1) ===
    "."
  ) {
    return;
  }
  if (checkForEqualsPresence()) {
    mathOperations.textContent = `${userTempNumber} ${this.textContent} `;
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
    ).toFixed(2);
    slicedFixed = userTempNumber.toString();
    if (slicedFixed.slice(-3) === ".00") {
      userTempNumber = slicedFixed.split(".")[0];
    }
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
  this.classList.add("trs");
  if (inputField.textContent.slice(-1) === ".") {
    return;
  }
  if (
    (inputField.textContent.charAt(0) === "0" ||
      (inputField.textContent.charAt(0) === "-" &&
        inputField.textContent.charAt(1) === "0")) &&
    inputField.textContent.includes(".") &&
    !/[1-9]/.test(inputField.textContent) &&
    mathOperations.textContent.split(" ")[1] === "/"
  ) {
    clearInputField();
    mathOperations.textContent = "undefined";
    return;
  }
  if (
    (inputField.textContent === "0" || inputField.textContent === "-0") &&
    mathOperations.textContent.split(" ")[1] === "/"
  ) {
    clearInputField();
    mathOperations.textContent = "undefined";
    return;
  }
  if (checkForOperatorPresence() && inputField.textContent !== "") {
    getFirstNumber();
    getSecondNumber();
    userTempNumber = operator(
      userFirstNumber,
      userSecondNumber,
      checkForOperatorPresence()
    ).toFixed(2);
    slicedFixed = userTempNumber.toString();
    if (slicedFixed.slice(-3) === ".00") {
      userTempNumber = slicedFixed.split(".")[0];
    }
    if (/%/.test(inputField.textContent)) {
      mathOperations.textContent += `${userPercentForTextContent} ${this.textContent} ${userTempNumber}`;
    } else {
      mathOperations.textContent += `${userSecondNumber} ${this.textContent} ${userTempNumber}`;
    }
    clearInputField();
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
  this.classList.add("trs");
  if (mathOperations.textContent === "undefined") {
    return;
  }
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

function addDecimal() {
  this.classList.add("trs");
  if (checkForPercent()) {
    return;
  }
  if (checkForOperatorPresence()) {
    if (/\./.test(inputField.textContent)) {
      return;
    } else if (regexForNumbers.test(inputField.textContent)) {
      inputField.textContent += this.textContent;
    }
  } else {
    if (/\./.test(mathOperations.textContent)) {
      return;
    } else if (regexForNumbers.test(mathOperations.textContent)) {
      mathOperations.textContent += this.textContent;
    }
  }
}

function addPercent() {
  this.classList.add("trs");
  if (
    inputField.textContent.charAt(inputField.textContent.length - 1) === "."
  ) {
    return;
  }
  if (checkForEqualsPresence()) {
    return;
  }
  if (
    (checkForOperatorPresence() &&
      inputField.textContent.charAt(0) === "-" &&
      /[0-9]/.test(inputField.textContent)) ||
    (checkForOperatorPresence() && /[0-9]/.test(inputField.textContent))
  ) {
    if (!/%/.test(inputField.textContent)) {
      inputField.textContent += this.textContent;
    }
  }
}

function resetTransition() {
  this.classList.remove("trs");
}

plus.addEventListener("click", handleOperatorClick);
minus.addEventListener("click", handleOperatorClick);
multiplication.addEventListener("click", handleOperatorClick);
division.addEventListener("click", handleOperatorClick);

dot.addEventListener("click", addDecimal);
equals.addEventListener("click", handleEqualsClick);
plusMinus.addEventListener("click", handlePlusMinus);
percent.addEventListener("click", addPercent);

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

plus.addEventListener("transitionend", resetTransition);
minus.addEventListener("transitionend", resetTransition);
multiplication.addEventListener("transitionend", resetTransition);
division.addEventListener("transitionend", resetTransition);
dot.addEventListener("transitionend", resetTransition);
equals.addEventListener("transitionend", resetTransition);
plusMinus.addEventListener("transitionend", resetTransition);
percent.addEventListener("transitionend", resetTransition);
zero.addEventListener("transitionend", resetTransition);
one.addEventListener("transitionend", resetTransition);
two.addEventListener("transitionend", resetTransition);
three.addEventListener("transitionend", resetTransition);
four.addEventListener("transitionend", resetTransition);
five.addEventListener("transitionend", resetTransition);
six.addEventListener("transitionend", resetTransition);
seven.addEventListener("transitionend", resetTransition);
eight.addEventListener("transitionend", resetTransition);
nine.addEventListener("transitionend", resetTransition);
clear.addEventListener("transitionend", resetTransition);
backspace.addEventListener("transitionend", resetTransition);
