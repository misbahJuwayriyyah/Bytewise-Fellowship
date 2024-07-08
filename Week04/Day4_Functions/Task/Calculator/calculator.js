let inputText = "";
let memory = 0;

function appendToInput(value) {
    inputText += value;
    document.getElementById('inputTextField').value = inputText;
}

function clearInput() {
    inputText = "";
    document.getElementById('inputTextField').value = '';
}

function calculateResult() {
    try {
        const result = eval(inputText);
        document.getElementById('inputTextField').value = result;
        inputText=result;
    } catch (error) {
        document.getElementById('inputTextField').value = 'Error';
    }
}

function invertInput() {
    const num = parseFloat(inputText);
    if (!isNaN(num)) {
        const inverted = 1 / num;
        document.getElementById('inputTextField').value = inverted;
        inputText=inverted;
    }
}

function squareInput() {
    const num = parseFloat(inputText);
    if (!isNaN(num)) {
        const squared = num * num;
        document.getElementById('inputTextField').value = squared;
        inputText=squared;
    }
}

function sqrtInput() {
    const num = parseFloat(inputText);
    if (!isNaN(num)) {
        const squareRoot = Math.sqrt(num);
        document.getElementById('inputTextField').value = squareRoot;
        inputText=squareRoot;
    }
}

function toggleSign() {
    if (inputText[0] === '-') {
        inputText = inputText.slice(1);
    } else {
        inputText = '-' + inputText;
    }
    document.getElementById('inputTextField').value = inputText;
}

function memoryStore() {
    memory = parseFloat(inputText);
}

function memoryRecall() {
    inputText = memory.toString();
    document.getElementById('inputTextField').value = inputText;
}

function memoryClear() {
    memory = 0;
}

function memoryAdd() {
    const num = parseFloat(inputText);
    if (!isNaN(num)) {
        memory += num;
        document.getElementById('inputTextField').value = memory;
    }
}
