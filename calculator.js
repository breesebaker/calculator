const display = document.querySelector(".calculator-display");
const buttons = Array.from(document.querySelectorAll(".calculator-buttons"));

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const calcDisplay = display.innerHTML;
    const calcButton = event.target.innerHTML;
    

    if(calcButton === "AC") {
      display.innerHTML = " ";
    }
    else if (calcButton === "=") {
      display.innerHTML = window.Function(`return ${calcDisplay}`)();
    }
    else {
      display.innerHTML = calcDisplay + calcButton;
    }
  });
});