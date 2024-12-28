const countDisplay = document.getElementById("count");
const errorDisplay = document.getElementById("error");
const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const clearButton = document.getElementById("clear");

let count = 0;

function updateUI() {
  countDisplay.innerHTML = count;
  // Hide error message by default
  errorDisplay.style.visibility = "hidden";
  decrementButton.disabled = count <= 0;
  clearButton.style.display = count > 0 ? "inline-block" : "none";
}

// Handle decrement button
decrementButton.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateUI();
  } else {
    // Show error message
    errorDisplay.style.visibility = "visible";
  }
});

// Handle increment button
incrementButton.addEventListener("click", () => {
  count++;
  updateUI();
});

// Handle clear button
clearButton.addEventListener("click", () => {
  count = 0;
  updateUI();
});

// Initialize UI
updateUI();
