//your JS code here. If required.
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
      if (e.target.value === "") {
        if (index > 0) {
          inputs[index - 1].focus();
          inputs[index - 1].value = ""; // Clear previous field on backspace
        }
      } else {
        e.target.value = ""; // Clear current field
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
