const display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    if (display.value.includes("/0")) {
      display.value = "Error";
    } else {
      display.value = eval(display.value);
    }
  } catch {
    display.value = "Error";
  }
}

// Handle keyboard input
document.addEventListener('keydown', function (e) {
  const key = e.key;

  if (!isNaN(key) || "+-*/.".includes(key)) {
    appendValue(key);
  } else if (key === "Enter" || key === "=") {
    calculate();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key.toLowerCase() === "c" || key === "Escape") {
    clearDisplay();
  }
});
