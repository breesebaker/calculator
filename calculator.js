
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