function appendCharacter(character) {
    const display = document.getElementById('display');
    // If display is 0, replace it with the new character
    if (display.value === '0') {
        display.value = character;
    } else {
        display.value += character;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '0';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Evaluate the mathematical expression
        display.value = eval(display.value) || '0';
    } catch (e) {
        display.value = 'Error';
    }
}