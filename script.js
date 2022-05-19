//************** VARIABLES
let numberChosen = "";
let numberChosen2 = "";
let operatorChosen = "";
let equal = "";
let resume = "";
let idKey;
let result = "";
let dividerBreak ="";
const btnTab = document.querySelector(".btnTab");
const screenOperator = document.querySelector("#screenOperator");
const screenResult = document.querySelector("#screenResult");

//************** FUNCTIONS

const operatorManager = () => {
  switch (idKey) {
    case "zDiv":
      return "/";
      break;
    case "zMul":
      return "x";
      break;
    case "zSub":
      return "-";
      break;
    case "zAdd":
      return "+";
      break;

    default:
      break;
  }
};

const doOperation = (operator, numberA, numberB) => {
  switch (operator) {
    case "/":
      if(numberA === 0 || numberB === 0) {
        dividerBreak = "error"
        screenResult.innerHTML = dividerBreak;
      } else {
      return numberA / numberB;
      }
      break;
    case "x":
      return numberA * numberB;
      break;
    case "-":
      return numberA - numberB;
      break;
    case "+":
      return numberA + numberB;
      break;
    default:
      break;
  }
};
const calculator = () => {
  result = doOperation(
    operatorChosen,
    parseFloat(numberChosen),
    parseFloat(numberChosen2)
  );
  result = Math.round(result * 100) / 1000;
};

const displayNumberWithSpace = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

const show = () => {
  equal = "";

  resume = `${numberChosen} ${operatorChosen} ${numberChosen2} ${equal} `;
  screenOperator.innerHTML = screenResult.innerHTML =
    displayNumberWithSpace(resume);

  if (result !== " " && !isNaN(result)) {
    screenResult.innerHTML = displayNumberWithSpace(result);
  }
};

//************** CODE EXECUTION

btnTab.addEventListener("click", (e) => {
  idKey = e.target.id;
  if (/t/.test(idKey)) {
    if (operatorChosen == "") {
      numberChosen += idKey.substring(1, 2);
    } else {
      numberChosen2 += idKey.substring(1, 2);
      parseFloat(numberChosen2);
    }
    show();
  } else if (/erase/.test(idKey)) {
    numberChosen = "";
    numberChosen2 = "";
    operatorChosen = "";
    equal = "";
    resume = "";
    idKey;
    result = "";
    screenOperator.innerHTML = "";
    screenResult.innerHTML = "";
  } else if (/z/.test(idKey)) {
    operatorChosen = operatorManager();
    show();
  } else if (/floa/.test(idKey)) {
    if (operatorChosen == "") {
      numberChosen += ".";
    } else {
      numberChosen2 += ".";
      parseFloat(numberChosen2);
    }
    show();
  } else if (/equal/.test(idKey)) {
    equal = "=";
    calculator();
    if (isNaN(result)) {
    } else {
      numberChosen = result;
      numberChosen2 = "";
      operatorChosen = "";
      show();
    }
  }
});
