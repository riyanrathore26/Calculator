const display = document.getElementById('display');

function appendToDisplay(value) {
    display.innerText += value;
}

function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Error';
    }
}

function clearDisplay() {
    display.innerText = '';
}
