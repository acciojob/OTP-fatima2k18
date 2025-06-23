const inputs = document.querySelectorAll(".code");

inputs[0].focus(); // Set initial focus

inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    const value = e.target.value;
    if (value) {
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      e.preventDefault();

      // Clear current value
      inputs[index].value = "";

      // Move focus to previous
      if (index > 0) {
        inputs[index - 1].focus();
        // Optional: also clear the previous field if it's filled
        // inputs[index - 1].value = "";
      }
    }
  });

  input.addEventListener("paste", (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").replace(/\D/g, "");
    pasteData.split("").forEach((char, i) => {
      if (i < inputs.length) {
        inputs[i].value = char;
      }
    });
    const filledIndex = Math.min(pasteData.length, inputs.length - 1);
    inputs[filledIndex].focus();
  });
});
