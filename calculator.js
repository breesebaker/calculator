const display = document.querySelector(".calculator-display");
const buttons = Array.from(document.querySelectorAll(".calculator-buttons"));

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const calcButton = e.target.innerText;
    const calcDisplay = display.innerText;

    if(calcButton === "AC") {
      display.innerText = " ";
    }
    else if (calcButton === "=") {
      display.innerText = window.Function(`return ${calcDisplay}`)();
    }
    else {
      display.innerText = calcDisplay + calcButton;
    }
  });
});