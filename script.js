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
const times = document.querySelector(".times");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const plusMinus = document.querySelector(".plus-minus");
const zero = document.querySelector(".zero");
const dot = document.querySelector(".dot");
const equals = document.querySelector(".equals");

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

one.addEventListener("click", function () {
  inputField.textContent += this.textContent;
  mathOperations.textContent += this.textContent;
});

two.addEventListener("click", function () {
  inputField.textContent += this.textContent;
  mathOperations.textContent += this.textContent;
});

plus.addEventListener("click", function () {
  if (
    mathOperations.textContent.includes(plus.textContent) ||
    mathOperations.textContent.includes(minus.textContent) ||
    mathOperations.textContent.includes(times.textContent) ||
    mathOperations.textContent.includes(division.textContent)
  ) {
    mathOperations.textContent =
      mathOperations.textContent.slice(0, -1) + `${this.textContent}`;
  } else {
    mathOperations.textContent += ` ${this.textContent}`;
  }
});

minus.addEventListener("click", function () {
  if (
    mathOperations.textContent.includes(plus.textContent) ||
    mathOperations.textContent.includes(minus.textContent) ||
    mathOperations.textContent.includes(times.textContent) ||
    mathOperations.textContent.includes(division.textContent)
  ) {
    mathOperations.textContent =
      mathOperations.textContent.slice(0, -1) + `${this.textContent}`;
  } else {
    mathOperations.textContent += ` ${this.textContent}`;
  }
});
