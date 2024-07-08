let inputText = ""; // Variable to store the current input text
let memory = 0; // Variable to store the memory value

// Function to append a value to the input text and update the input field
function appendToInput(value) {
    inputText += value;
    document.getElementById('inputTextField').value = inputText;
}

// Function to clear the input text and update the input field
function clearInput() {
    inputText = "";
    document.getElementById('inputTextField').value = '';
}

// Function to calculate the result of the input text (evaluated as a mathematical expression)
// and update the input field with the result. If there's an error in evaluation, display 'Error'.
function calculateResult() {
    try {
        const result = eval(inputText);
        document.getElementById('inputTextField').value = result;
        inputText = result;
    } catch (error) {
        document.getElementById('inputTextField').value = 'Error';
    }
}

// Function to invert the current input value (1 divided by the input value)
// and update the input field with the result
function invertInput() {
    const num = parseFloat(inputText);
    if (!isNaN(num)) {
        const inverted = 1 / num;
        document.getElementById('inputTextField').value = inverted;
        inputText = inverted;
    }
}

// Function to square the current input value and update the input field with the result
function squareInput() {
    const num = parseFloat(inputText);
    if (!isNaN(num)) {
        const squared = num * num;
        document.getElementById('inputTextField').value = squared;
        inputText = squared;
    }
}

// Function to calculate the square root of the current input value and update the input field with the result
function sqrtInput() {
    const num = parseFloat(inputText);
    if (!isNaN(num)) {
        const squareRoot = Math.sqrt(num);
        document.getElementById('inputTextField').value = squareRoot;
        inputText = squareRoot;
    }
}

// Function to toggle the sign of the current input value (positive/negative)
// and update the input field with the result
function toggleSign() {
    if (inputText[0] === '-') {
        inputText = inputText.slice(1);
    } else {
        inputText = '-' + inputText;
    }
    document.getElementById('inputTextField').value = inputText;
}

// Function to store the current input value in memory
function memoryStore() {
    memory = parseFloat(inputText);
}

// Function to recall the value stored in memory and update the input field with it
function memoryRecall() {
    inputText = memory.toString();
    document.getElementById('inputTextField').value = inputText;
}

// Function to clear the memory value
function memoryClear() {
    memory = 0;
}

// Function to add the current input value to the value stored in memory and update the input field with the result
function memoryAdd() {
    const num = parseFloat(inputText);
    if (!isNaN(num)) {
        memory += num;
        document.getElementById('inputTextField').value = memory;
    }
}
