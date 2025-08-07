const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");

let expression = "";

// Handle button click
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value) {
      expression += value;
      display.value = expression;
    }
  });
});

// Handle clear
clear.addEventListener("click", () => {
  expression = "";
  display.value = "";
});

// Handle equals
equals.addEventListener("click", () => {
  try {
    expression = eval(expression).toString();
    display.value = expression;
  } catch (err) {
    display.value = "Error!";
    expression = "";
  }
});

// Keyboard support
document.addEventListener("keydown", (e) => {
  if (
    /[0-9+\-*/.]/.test(e.key) ||
    e.key === "Enter" ||
    e.key === "Backspace"
  ) {
    if (e.key === "Enter") {
      try {
        expression = eval(expression).toString();
        display.value = expression;
      } catch (err) {
        display.value = "Error!";
        expression = "";
      }
    } else if (e.key === "Backspace") {
      expression = expression.slice(0, -1);
      display.value = expression;
    } else {
      expression += e.key;
      display.value = expression;
    }
  }
});
