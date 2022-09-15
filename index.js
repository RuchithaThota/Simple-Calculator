let inputScreen = document.querySelector(".inputscreen");
let buttons = document.querySelectorAll(".btn");
let operators = document.querySelectorAll(".ops");
let equalBtn = document.getElementById("equal");
let clearBtn = document.getElementById("clear");
let delBtn = document.getElementById("delete");

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    var lastIndex = inputScreen.value.length - 1;
    let value = e.target.dataset.number;
    inputScreen.value += value;
    if (
      (inputScreen.value[lastIndex] == "%" &&
        inputScreen.value[lastIndex] == "%") ||
      (inputScreen.value[lastIndex] == "/" &&
        inputScreen.value[lastIndex] == "/") ||
      (inputScreen.value[lastIndex] == "*" &&
        inputScreen.value[lastIndex] == "*") ||
      (inputScreen.value[lastIndex] == "-" &&
        inputScreen.value[lastIndex] == "-") ||
      (inputScreen.value[lastIndex] == "+" &&
        inputScreen.value[lastIndex] == "+") ||
      (inputScreen.value[lastIndex] == "." &&
        inputScreen.value[lastIndex] == ".")
    ) {
      inputScreen.value = inputScreen.value.slice(
        0,
        inputScreen.value.length - 1
      );
    }
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.dataset.number;
    if (
      inputScreen.value == "." ||
      inputScreen.value == "+" ||
      inputScreen.value == "-" ||
      inputScreen.value == "*" ||
      inputScreen.value == "%" ||
      inputScreen.value == "/"
    ) {
      inputScreen.value = "";
    }
    inputScreen.value = inputScreen.value + value;
  });
});
clearBtn.addEventListener("click", () => {
  inputScreen.value = "";
});
delBtn.addEventListener("click", () => {
  inputScreen.value = inputScreen.value.slice(0, inputScreen.value.length - 1);
});
equalBtn.addEventListener("click", () => {
  var lastIndex = inputScreen.value.length - 1;

  if (
    inputScreen.value[lastIndex] == "/" ||
    inputScreen.value[lastIndex] == "%" ||
    inputScreen.value[lastIndex] == "*" ||
    inputScreen.value[lastIndex] == "-" ||
    inputScreen.value[lastIndex] == "+" ||
    inputScreen.value == ""
  ) {
    inputScreen.value = inputScreen.value.slice(0, lastIndex);
  } else {
    try {
      inputScreen.value = eval(inputScreen.value);
    } catch (error) {
      if (confirm(error)) {
        inputScreen.value = "";
      }
    }
  }
});
