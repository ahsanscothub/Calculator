function clearDisplay() {
  document.getElementById('display').innerText = '';
}

function deleteLast() {
  let display = document.getElementById('display');
  display.innerText = display.innerText.slice(0, -1);
}

function appendNumber(number) {
  document.getElementById('display').innerText += number;
}

function appendOperator(operator) {
  let display = document.getElementById('display');
  let lastChar = display.innerText.slice(-1);
  if (!['+', '-', '*', '/'].includes(lastChar)) {
      display.innerText += operator;
  }
}

function calculate() {
  let display = document.getElementById('display');
  try {
      display.innerText = eval(display.innerText);
  } catch (e) {
      display.innerText = 'Error';
  }
}
