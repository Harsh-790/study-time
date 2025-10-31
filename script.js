document.addEventListener("DOMContentLoaded", () => {
  // Select all checkboxes
  const boxes = document.querySelectorAll("input[type='checkbox']");

  // Load saved progress from localStorage (Before UI creation)
  boxes.forEach((box, index) => {
    const saved = localStorage.getItem("checkbox_" + index);
    if (saved === "true") box.checked = true;
  });

  // Create progress text
  const progressText = document.createElement("p");
  progressText.style.textAlign = "center";
  progressText.style.fontWeight = "bold";
  progressText.style.fontSize = "18px";
  progressText.style.marginTop = "20px";
  document.body.appendChild(progressText);

  // Create Reset Button
  const resetBtn = document.createElement("button");
  resetBtn.textContent = "Reset All";
  resetBtn.style.display = "block";
  resetBtn.style.margin = "10px auto";
  resetBtn.style.padding = "10px 20px";
  resetBtn.style.fontSize = "16px";
  resetBtn.style.cursor = "pointer";
  resetBtn.style.backgroundColor = "#007bff";
  resetBtn.style.color = "white";
  resetBtn.style.border = "none";
  resetBtn.style.borderRadius = "5px";
  resetBtn.style.transition = "0.3s";

  resetBtn.addEventListener("mouseover", () => {
    resetBtn.style.backgroundColor = "#0056b3";
  });
  resetBtn.addEventListener("mouseout", () => {
    resetBtn.style.backgroundColor = "#007bff";
  });

  document.body.appendChild(resetBtn);

  // Function to update progress text
  function updateProgress() {
    const checked = [...boxes].filter(b => b.checked).length;
    progressText.textContent = `Progress: ${checked}/${boxes.length}`;
  }

  // Save state and update progress when checkbox changes
  boxes.forEach((box, index) => {
    box.addEventListener("change", () => {
      localStorage.setItem("checkbox_" + index, box.checked);
      updateProgress();
    });
  });

  // Reset All button functionality
  resetBtn.addEventListener("click", () => {
    boxes.forEach((box, index) => {
      box.checked = false;
      localStorage.setItem("checkbox_" + index, false);
    });
    updateProgress();
    alert("All checkboxes have been reset!");
  });

  // Initial progress update
  updateProgress();
});

